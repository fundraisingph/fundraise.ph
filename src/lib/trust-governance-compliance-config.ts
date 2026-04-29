import type { PageId } from '@/lib/navigation'

export const FUNDRAISING_PH_URL = 'https://fundraising.ph'

export interface TrustSectionPage {
  title: string
  page: PageId
  description: string
  icon: string
}

export const trustSectionPages: TrustSectionPage[] = [
  {
    title: 'Overview',
    page: 'trust-governance-compliance',
    description: 'The full trust, governance, and compliance system behind Fundraise.ph.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Trust & Transparency',
    page: 'trust-transparency',
    description: 'Public-facing trust commitments, donor visibility, reporting, and acknowledgment.',
    icon: 'Eye',
  },
  {
    title: 'Governance',
    page: 'governance',
    description: 'Trustee oversight, internal controls, policies, and accountability.',
    icon: 'Scale',
  },
  {
    title: 'Compliance',
    page: 'compliance',
    description: 'Campaign classification, permit awareness, privacy, payments, and responsible fundraising.',
    icon: 'FileCheck',
  },
  {
    title: 'Verification Framework',
    page: 'verification-framework',
    description: 'Verification levels, badges, documentary review, and campaign-specific standards.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Campaign Standards',
    page: 'campaign-standards',
    description: 'Campaign identity, documentation, disclosures, donor updates, and final reporting.',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Policies',
    page: 'policies',
    description: 'Public policy library for governance, privacy, verification, and transparency.',
    icon: 'BookOpen',
  },
  {
    title: 'Reports & Disclosures',
    page: 'reports-disclosures',
    description: 'Annual reports, trustee updates, financial summaries, and transparency disclosures.',
    icon: 'BarChart3',
  },
  {
    title: 'FAQ',
    page: 'faq',
    description: 'Plain-English answers about trust, governance, compliance, and verification.',
    icon: 'HelpCircle',
  },
]

export const trustSectionMetadata: Record<string, { title: string; description: string }> = {
  'trust-governance-compliance': {
    title: 'Trust, Governance & Compliance | Fundraise.ph',
    description: 'Learn how Fundraise.ph builds trust, transparency, governance, and compliance-aware fundraising infrastructure for Filipinos worldwide.',
  },
  'trust-transparency': {
    title: 'Trust & Transparency | Fundraise.ph',
    description: 'See how Fundraise.ph promotes donor visibility, campaign transparency, public reporting, donor acknowledgment, and accountable Filipino fundraising.',
  },
  governance: {
    title: 'Governance | Fundraise.ph',
    description: 'Learn how Fundraise.ph protects its mission through trustee oversight, internal controls, policies, risk management, and public accountability.',
  },
  compliance: {
    title: 'Compliance | Fundraise.ph',
    description: 'Understand Fundraise.ph\'s compliance-aware approach to campaign classification, public solicitation guidance, privacy, payments, and responsible fundraising.',
  },
  'verification-framework': {
    title: 'Verification Framework | Fundraise.ph',
    description: 'Learn how Fundraise.ph defines campaign verification levels, review standards, campaign badges, and documentary requirements.',
  },
  'campaign-standards': {
    title: 'Campaign Standards | Fundraise.ph',
    description: 'Review the standards Fundraise.ph promotes for campaign identity, documentation, donor communication, beneficiary consent, and post-campaign reporting.',
  },
  policies: {
    title: 'Policies | Fundraise.ph',
    description: 'Explore Fundraise.ph policies for governance, transparency, data protection, donor acknowledgment, campaign verification, and beneficiary dignity.',
  },
  'reports-disclosures': {
    title: 'Reports & Disclosures | Fundraise.ph',
    description: 'Access Fundraise.ph public reports, disclosures, trustee updates, financial summaries, impact reports, and transparency updates.',
  },
  faq: {
    title: 'Trust, Governance & Compliance FAQ | Fundraise.ph',
    description: 'Answers to common questions about Fundraise.ph trust, governance, compliance, verification, policies, and the Fundraising.ph platform.',
  },
}
