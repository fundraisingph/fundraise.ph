export type VerificationLayer =
  | 'IDENTITY_VERIFIED'
  | 'EMAIL_VERIFIED'
  | 'MOBILE_VERIFIED'
  | 'BENEFICIARY_VERIFIED'
  | 'DOCUMENTS_VERIFIED'
  | 'PERMIT_VERIFIED'
  | 'PAYOUT_DESTINATION_VERIFIED'
  | 'ENHANCED_REVIEW_COMPLETED'

export type VerificationStatus =
  | 'NOT_STARTED'
  | 'PENDING'
  | 'SUBMITTED'
  | 'UNDER_REVIEW'
  | 'APPROVED'
  | 'REJECTED'
  | 'EXPIRED'
  | 'REQUIRES_UPDATE'

export interface VerificationLayerStatus {
  layer: VerificationLayer
  label: string
  completed: boolean
  completedAt: Date | null
  verifiedBy: string | null
}

export interface PublicBadge {
  type: string
  label: string
  description: string
}

export interface VerificationStatusResult {
  layers: VerificationLayerStatus[]
  overallLevel: number
  publicBadges: PublicBadge[]
  canShowTrustBadge: boolean
  trustBadgeLabel: string | null
}

export interface AwardLayerParams {
  campaignId: string
  layer: VerificationLayer
  awardedBy: string
  evidence?: string
  notes?: string
}

export interface RevokeLayerParams {
  campaignId: string
  layer: VerificationLayer
  revokedBy: string
  reason: string
}

export const KNOWN_LAYERS: VerificationLayer[] = [
  'IDENTITY_VERIFIED',
  'EMAIL_VERIFIED',
  'MOBILE_VERIFIED',
  'BENEFICIARY_VERIFIED',
  'DOCUMENTS_VERIFIED',
  'PERMIT_VERIFIED',
  'PAYOUT_DESTINATION_VERIFIED',
  'ENHANCED_REVIEW_COMPLETED',
]

export const VERIFICATION_LAYER_LABELS: Record<VerificationLayer, string> = {
  IDENTITY_VERIFIED: 'Organizer identity verified',
  EMAIL_VERIFIED: 'Email verified',
  MOBILE_VERIFIED: 'Mobile verified',
  BENEFICIARY_VERIFIED: 'Beneficiary verified',
  DOCUMENTS_VERIFIED: 'Required documents reviewed',
  PERMIT_VERIFIED: 'Permit reviewed',
  PAYOUT_DESTINATION_VERIFIED: 'Payout destination verified',
  ENHANCED_REVIEW_COMPLETED: 'Enhanced compliance review completed',
}

export const VERIFICATION_LAYER_DESCRIPTIONS: Record<VerificationLayer, string> = {
  IDENTITY_VERIFIED: 'Organizer has been verified with government ID',
  EMAIL_VERIFIED: 'Organizer email address has been confirmed',
  MOBILE_VERIFIED: 'Organizer mobile number has been confirmed',
  BENEFICIARY_VERIFIED: 'Beneficiary identity confirmed',
  DOCUMENTS_VERIFIED: 'Supporting documents have been reviewed by our team',
  PERMIT_VERIFIED: 'Required government permits have been reviewed',
  PAYOUT_DESTINATION_VERIFIED: 'Bank or e-wallet destination has been confirmed',
  ENHANCED_REVIEW_COMPLETED: 'This campaign has undergone additional compliance review',
}

export const PREREQUISITE_CHAINS: Record<string, VerificationLayer[]> = {
  DOCUMENTS_VERIFIED: ['IDENTITY_VERIFIED'],
  BENEFICIARY_VERIFIED: ['IDENTITY_VERIFIED'],
  PERMIT_VERIFIED: ['DOCUMENTS_VERIFIED'],
  PAYOUT_DESTINATION_VERIFIED: ['BENEFICIARY_VERIFIED'],
  ENHANCED_REVIEW_COMPLETED: ['PERMIT_VERIFIED'],
}

export const BADGE_EXPIRY_YEARS: Record<VerificationLayer, number> = {
  IDENTITY_VERIFIED: 1,
  EMAIL_VERIFIED: 1,
  MOBILE_VERIFIED: 1,
  BENEFICIARY_VERIFIED: 2,
  DOCUMENTS_VERIFIED: 2,
  PERMIT_VERIFIED: 2,
  PAYOUT_DESTINATION_VERIFIED: 2,
  ENHANCED_REVIEW_COMPLETED: 2,
}
