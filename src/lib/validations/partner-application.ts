import { z } from 'zod/v4'

export const PARTNER_TYPES = [
  'NGO',
  'School',
  'Church',
  'LGU',
  'Corporate Sponsor',
  'Supplier',
  'Diaspora Organization',
  'Technology Partner',
  'Legal/Compliance',
] as const

export const HOW_HEARD_OPTIONS = [
  'Social Media',
  'Word of Mouth',
  'Search Engine',
  'News Article',
  'Community Event',
  'Partner Referral',
  'Website',
  'Other',
] as const

export const VALID_STATUSES = [
  'pending',
  'under_review',
  'approved',
  'rejected',
] as const

function isValidUrl(val: string): boolean {
  try {
    new URL(val)
    return true
  } catch {
    return false
  }
}

export const partnerApplicationSchema = z.object({
  organizationName: z
    .string()
    .check(z.minLength(2, 'Organization name must be at least 2 characters'))
    .check(z.maxLength(200, 'Organization name must be under 200 characters'))
    .transform((v) => v.trim()),

  contactPerson: z
    .string()
    .check(z.minLength(2, 'Contact person must be at least 2 characters'))
    .check(z.maxLength(200, 'Contact person must be under 200 characters'))
    .transform((v) => v.trim()),

  email: z
    .email('Please enter a valid email address')
    .check(z.maxLength(254, 'Email must be under 254 characters'))
    .transform((v) => v.trim().toLowerCase()),

  phone: z
    .string()
    .check(z.regex(/^[\d\s\-+()]{7,20}$/, 'Please enter a valid phone number (7-20 digits)'))
    .check(z.maxLength(30, 'Phone number must be under 30 characters'))
    .transform((v) => v.trim()),

  partnerType: z
    .enum(PARTNER_TYPES, { error: 'Please select a valid partner type' }),

  description: z
    .string()
    .check(z.minLength(20, 'Description must be at least 20 characters'))
    .check(z.maxLength(5000, 'Description must be under 5000 characters'))
    .transform((v) => v.trim()),

  website: z
    .union([z.string().check(z.maxLength(500, 'Website URL must be under 500 characters')), z.null()])
    .optional()
    .transform((v) => {
      if (v === null || v === undefined || v === '') return null
      return isValidUrl(v) ? v : null
    }),

  mission: z
    .union([z.string().check(z.maxLength(3000, 'Mission statement must be under 3000 characters')), z.null()])
    .optional()
    .transform((v) => (v && v.trim()) || null),

  howHeard: z
    .enum(HOW_HEARD_OPTIONS)
    .optional()
    .nullable(),

  agreedToTerms: z.literal(true, {
    error: 'You must agree to the terms to submit',
  }),
})

export type PartnerApplicationInput = z.infer<typeof partnerApplicationSchema>

export const partnerReviewSchema = z.object({
  status: z.enum(VALID_STATUSES).optional(),
  reviewNotes: z
    .union([z.string().check(z.maxLength(2000, 'Review notes must be under 2000 characters')), z.null()])
    .optional(),
  reviewedBy: z
    .union([z.string().check(z.minLength(1), z.maxLength(200)), z.null()])
    .optional(),
})
