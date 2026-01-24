'use server'

import { Resend } from 'resend'
import { leadSchema } from '../lib/leadSchema'
import { createDb } from '../db/client'
import { leads } from '../db/schema'

type CaptureLeadResult = {
  success: boolean
}

const buildFrameworkEmail = (firstName?: string | null) => {
  const greeting = firstName ? `Hey ${firstName},` : 'Hey there,'
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0b0b0b;">
      <p>${greeting}</p>
      <p>Here is your 1.0s Performance Framework.</p>
      <p>
        <a href="https://www.subsecondlabs.com/assets/The_SubSecond_Standard.pdf" style="color:#16a34a;">
          Download the framework (PDF)
        </a>
      </p>
      <p>Stay sharp,<br/>SubSecond Labs</p>
    </div>
  `
}

export async function captureLead(input: unknown): Promise<CaptureLeadResult> {
  const parsed = leadSchema.safeParse(input)
  if (!parsed.success) {
    return { success: false }
  }

  const { email, firstName, source } = parsed.data
  const normalizedSource = source?.trim() || 'lead-form'

  const tasks: Promise<unknown>[] = []

  const dbContext = createDb()
  if (dbContext) {
    const { db, client } = dbContext
    const insertLead = db
      .insert(leads)
      .values({
        email,
        firstName: firstName || null,
        source: normalizedSource,
      })
      .onConflictDoNothing({ target: leads.email })
      .finally(() => client.end({ timeout: 2 }))

    tasks.push(insertLead)
  }

  const resendKey = process.env.RESEND_API_KEY
  const resendAudienceId = process.env.RESEND_AUDIENCE_ID
  const resendFrom = process.env.RESEND_FROM_EMAIL
  const webhookUrl = process.env.DISCORD_WEBHOOK_MAGNET

  if (resendKey) {
    const resend = new Resend(resendKey)

    if (resendAudienceId) {
      tasks.push(
        resend.contacts.create({
          email,
          firstName: firstName || undefined,
          audienceId: resendAudienceId,
        })
      )
    }

    if (resendFrom) {
      tasks.push(
        resend.emails.send({
          from: resendFrom,
          to: email,
          subject: 'Your 1.0s Performance Framework',
          html: buildFrameworkEmail(firstName),
        })
      )
    }
  }

  if (webhookUrl) {
    tasks.push(
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `📩 **NEW FRAMEWORK REQUEST**\n**Email:** ${email}\n**Source:** ${normalizedSource}`,
        }),
      })
    )
  }

  if (tasks.length === 0) {
    return { success: true }
  }

  await Promise.allSettled(tasks)
  return { success: true }
}
