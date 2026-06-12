import {
  ShieldCheck,
  Mail,
  Smartphone,
  UserCheck,
  FileCheck,
  Stamp,
  Landmark,
  ScanSearch,
  type LucideIcon,
} from 'lucide-react'
import type { VerificationLayer } from './badge-types'

export interface BadgeDisplayConfig {
  layer: VerificationLayer
  icon: LucideIcon
  color: string
  bgColor: string
  borderColor: string
  textColor: string
  shortName: string
}

export const BADGE_DISPLAY_CONFIG: Record<VerificationLayer, BadgeDisplayConfig> = {
  IDENTITY_VERIFIED: {
    layer: 'IDENTITY_VERIFIED',
    icon: ShieldCheck,
    color: 'blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    shortName: 'Identity',
  },
  EMAIL_VERIFIED: {
    layer: 'EMAIL_VERIFIED',
    icon: Mail,
    color: 'sky',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    textColor: 'text-sky-700',
    shortName: 'Email',
  },
  MOBILE_VERIFIED: {
    layer: 'MOBILE_VERIFIED',
    icon: Smartphone,
    color: 'cyan',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    textColor: 'text-cyan-700',
    shortName: 'Mobile',
  },
  BENEFICIARY_VERIFIED: {
    layer: 'BENEFICIARY_VERIFIED',
    icon: UserCheck,
    color: 'emerald',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700',
    shortName: 'Beneficiary',
  },
  DOCUMENTS_VERIFIED: {
    layer: 'DOCUMENTS_VERIFIED',
    icon: FileCheck,
    color: 'amber',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700',
    shortName: 'Documents',
  },
  PERMIT_VERIFIED: {
    layer: 'PERMIT_VERIFIED',
    icon: Stamp,
    color: 'purple',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
    shortName: 'Permit',
  },
  PAYOUT_DESTINATION_VERIFIED: {
    layer: 'PAYOUT_DESTINATION_VERIFIED',
    icon: Landmark,
    color: 'teal',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-700',
    shortName: 'Payout',
  },
  ENHANCED_REVIEW_COMPLETED: {
    layer: 'ENHANCED_REVIEW_COMPLETED',
    icon: ScanSearch,
    color: 'gold',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-700',
    shortName: 'Enhanced Review',
  },
}

export const STATUS_DISPLAY: Record<string, { label: string; color: string; bgColor: string }> = {
  NOT_STARTED: { label: 'Not Started', color: 'text-slate-500', bgColor: 'bg-slate-100' },
  PENDING: { label: 'Pending', color: 'text-amber-600', bgColor: 'bg-amber-100' },
  SUBMITTED: { label: 'Submitted', color: 'text-blue-600', bgColor: 'bg-blue-100' },
  UNDER_REVIEW: { label: 'Under Review', color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
  APPROVED: { label: 'Approved', color: 'text-green-600', bgColor: 'bg-green-100' },
  REJECTED: { label: 'Rejected', color: 'text-red-600', bgColor: 'bg-red-100' },
  EXPIRED: { label: 'Expired', color: 'text-slate-500', bgColor: 'bg-slate-100' },
  REQUIRES_UPDATE: { label: 'Requires Update', color: 'text-orange-600', bgColor: 'bg-orange-100' },
}
