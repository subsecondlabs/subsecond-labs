'use server'

import { z } from 'zod'
import { createDb } from '../db/client'
import { auditRequests } from '../db/schema'

type SubmitAuditResult = {
  success: boolean
}

const revenueOptions = ['<$1M', '$1M-$5M', '$5M+'] as const
const goalOptions = ['Fix Speed', 'Get More Leads', 'Full Rebrand'] as const

const auditSchema = z.object({
  websiteUrl: z.string().trim().url(),
  contactEmail: z.string().trim().email().max(120),
  revenueSegment: z.enum(revenueOptions),
  primaryGoal: z.enum(goalOptions),
})

export async function submitAudit(input: unknown): Promise<SubmitAuditResult> {
  const parsed = auditSchema.safeParse(input)
  if (!parsed.success) {
    return { success: false }
  }

  const { websiteUrl, contactEmail, revenueSegment, primaryGoal } = parsed.data
  const dbContext = createDb()
  if (dbContext) {
    const { db, client } = dbContext
    try {
      await db
        .insert(auditRequests)
        .values({
          websiteUrl,
          contactEmail,
          revenueSegment,
          primaryGoal,
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
      content: `🚨 **NEW AUDIT REQUEST** 🚨\n**URL:** ${websiteUrl}\n**Revenue:** ${revenueSegment}\n**Goal:** ${primaryGoal}\n**Contact:** ${contactEmail}`,
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
