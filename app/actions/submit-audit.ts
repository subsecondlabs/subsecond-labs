'use server'

import { z } from 'zod'
import { createDb } from '../db/client'
import { auditRequests } from '../db/schema'

type SubmitAuditResult = {
  success: boolean
}

const auditSchema = z.object({
  websiteUrl: z.string().trim().url(),
  contactInfo: z.string().trim().min(1).max(120),
  revenueSegment: z.string().trim().min(1).max(40),
})

export async function submitAudit(input: unknown): Promise<SubmitAuditResult> {
  const parsed = auditSchema.safeParse(input)
  if (!parsed.success) {
    return { success: false }
  }

  const { websiteUrl, contactInfo, revenueSegment } = parsed.data
  const dbContext = createDb()
  if (dbContext) {
    const { db, client } = dbContext
    try {
      await db
        .insert(auditRequests)
        .values({
          websiteUrl,
          contactInfo,
          revenueSegment,
          status: 'pending',
        })
        .finally(() => client.end({ timeout: 2 }))
    } catch (error) {
      console.error('Audit insert failed.', error)
    }
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (webhookUrl) {
    const payload = {
      content: `🚨 **NEW HIGH-VALUE LEAD** 🚨\n**URL:** [${websiteUrl}](${websiteUrl})\n**Contact:** ${contactInfo}\n**Rev:** ${revenueSegment}`,
    }
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (error) {
      console.error('Discord webhook failed.', error)
    }
  } else {
    console.error('DISCORD_WEBHOOK_URL is missing.')
  }
  return { success: true }
}
