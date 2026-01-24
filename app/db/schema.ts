import { pgTable, text, timestamp, uuid, uniqueIndex } from 'drizzle-orm/pg-core'

export const leads = pgTable(
  'leads',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    email: text('email').notNull(),
    firstName: text('first_name'),
    source: text('source'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    emailUnique: uniqueIndex('leads_email_unique').on(table.email),
  })
)

export const auditRequests = pgTable('audit_requests', {
  id: uuid('id').defaultRandom().primaryKey(),
  websiteUrl: text('website_url').notNull(),
  contactInfo: text('contact_info'),
  revenueSegment: text('revenue_segment'),
  notes: text('notes'),
  status: text('status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
