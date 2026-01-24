import { z } from 'zod'

export const leadSchema = z.object({
  email: z
    .string()
    .trim()
    .email()
    .transform((value) => value.toLowerCase()),
  firstName: z.string().trim().max(80).optional(),
  source: z.string().trim().max(120).optional(),
})

export type LeadInput = z.infer<typeof leadSchema>
