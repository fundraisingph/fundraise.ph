import type { PageId } from '@/lib/navigation'

export const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://fundraising.ph'

export interface TechSectionPage {
  title: string
  page: PageId
  description: string
  icon: string
}

export const techSectionPages: TechSectionPage[] = [
  {
    title: 'Overview',
    page: 'technology-impact',
    description: 'The full technology and impact system behind Fundraise.ph.',
    icon: 'Cpu',
  },
  {
    title: 'Technology Roadmap',
    page: 'technology-roadmap',
    description: 'Phased development from nonprofit foundation to institutional partnerships.',
    icon: 'Map',
  },
  {
    title: 'Platform Infrastructure',
    page: 'platform-infrastructure',
    description: 'The operational stack powering Fundraising.ph.',
    icon: 'Server',
  },
  {
    title: 'Impact Dashboard',
    page: 'impact',
    description: 'Campaign, donor, beneficiary, marketplace, trust, and community metrics.',
    icon: 'BarChart3',
  },
  {
    title: 'AI & Automation',
    page: 'ai-automation',
    description: 'AI-assisted review, guidance, and reporting with human oversight.',
    icon: 'Brain',
  },
  {
    title: 'Marketplace Fundraising',
    page: 'marketplace-fundraising',
    description: 'Product-based, pre-order, affiliate, and sponsor-supported models.',
    icon: 'Store',
  },
  {
    title: 'Diaspora Giving Technology',
    page: 'diaspora-giving-technology',
    description: 'Hometown discovery, cross-border compliance, and international donor tools.',
    icon: 'Globe',
  },
  {
    title: 'Open Data & Research',
    page: 'open-data-research',
    description: 'Research briefs, future API concepts, and aggregated trust metrics.',
    icon: 'Database',
  },
  {
    title: 'Technology Governance',
    page: 'technology-governance',
    description: 'Privacy by design, security, auditability, and human oversight principles.',
    icon: 'Shield',
  },
  {
    title: 'FAQ',
    page: 'tech-faq',
    description: 'Answers about technology, impact, marketplace, and platform questions.',
    icon: 'HelpCircle',
  },
]

export const techSectionMetadata: Record<string, { title: string; description: string }> = {
  'technology-impact': {
    title: 'Technology & Impact | Fundraise.ph',
    description: 'Explore how Fundraise.ph builds the technology infrastructure for trusted Filipino giving — from platform development to impact measurement.',
  },
  'technology-roadmap': {
    title: 'Technology Roadmap | Fundraise.ph',
    description: 'Follow the phased development of Fundraise.ph — from nonprofit foundation to marketplace fundraising, diaspora giving, and institutional partnerships.',
  },
  'platform-infrastructure': {
    title: 'Platform Infrastructure | Fundraise.ph',
    description: 'Understand the operational stack behind Fundraising.ph — campaign onboarding, verification workflows, donor acknowledgment, and audit trails.',
  },
  impact: {
    title: 'Impact Dashboard | Fundraise.ph',
    description: 'See how Fundraise.ph measures impact across campaigns, donors, beneficiaries, marketplace activity, trust metrics, and community outcomes.',
  },
  'ai-automation': {
    title: 'AI & Automation | Fundraise.ph',
    description: 'Learn how Fundraise.ph uses AI to support review, guidance, and reporting — always with human oversight and no automated legal conclusions.',
  },
  'marketplace-fundraising': {
    title: 'Marketplace Fundraising | Fundraise.ph',
    description: 'Discover product-based, pre-order, affiliate, and sponsor-supported fundraising models on Fundraising.ph.',
  },
  'diaspora-giving-technology': {
    title: 'Diaspora Giving Technology | Fundraise.ph',
    description: 'Technology for overseas Filipinos to support verified campaigns — hometown discovery, cross-border compliance, and international giving tools.',
  },
  'open-data-research': {
    title: 'Open Data & Research | Fundraise.ph',
    description: 'Research briefs, future API concepts, and privacy-protected aggregated trust metrics from Fundraise.ph.',
  },
  'technology-governance': {
    title: 'Technology Governance | Fundraise.ph',
    description: 'Technology governance principles: privacy by design, security by default, human oversight, auditability, and data minimization.',
  },
  'tech-faq': {
    title: 'Technology & Impact FAQ | Fundraise.ph',
    description: 'Answers to common questions about Fundraise.ph technology, marketplace fundraising, impact measurement, and the Fundraising.ph platform.',
  },
}

export const roadmapPhases = [
  {
    phase: 1,
    title: 'Establish the Nonprofit Trust Foundation',
    description: 'Establish Fundraise.ph as the legal, public, and governance foundation of the entire ecosystem. Before campaigns scale, Fundraise.ph must first earn public trust as a nonprofit organization with a clear mission, transparent leadership, governance policies, founding member stories, and public accountability.',
    status: 'In Progress' as const,
    items: [
      'Fundraise.ph website and mission launch',
      'Legal Philippine nonprofit incorporation',
      'Trustee profiles',
      'Governance page',
      'Trust and transparency commitments',
      'Compliance philosophy',
      'Public FAQ',
      'Partner inquiry system',
      'Newsletter',
      'Founding member stories',
      'Serg\'s Chocolates founding member page',
      'Initial policy and disclosure library',
    ],
  },
  {
    phase: 2,
    title: 'Build the Trust, Verification & Compliance Layer',
    description: 'Create the trust infrastructure that makes Fundraising.ph more than a crowdfunding website. This phase builds the campaign review, compliance guidance, documentation, risk scoring, and badge system that will allow Fundraising.ph to operate as a trust-first fundraising platform.',
    status: 'In Progress' as const,
    items: [
      'Campaign classification',
      'Donation vs. marketplace distinction',
      'Identity verification',
      'Organization verification',
      'Beneficiary validation',
      'Document completeness review',
      'Campaign risk scoring',
      'Compliance education library',
      'Public solicitation guidance',
      'DSWD / LGU / local authority checklist workflows where applicable',
      'Campaign audit trails',
      'Verification badge system',
      'Human review and escalation',
      'Campaign suspension workflow',
      'Verification badge disclaimer',
    ],
  },
  {
    phase: 3,
    title: 'Launch Fundraising.ph Platform MVP',
    description: 'Launch the first operating version of Fundraising.ph as the campaign platform where verified fundraising, donor acknowledgment, campaign updates, sponsor participation, and reporting can happen in one trusted environment. This phase turns the nonprofit mission and trust framework into a usable product.',
    status: 'Planned' as const,
    items: [
      'Campaign onboarding',
      'Campaigner registration',
      'Campaign publishing',
      'Campaign category setup',
      'Document upload',
      'Beneficiary information capture',
      'Basic verification workflow',
      'Donor acknowledgment engine',
      'Campaign update tools',
      'Admin review console',
      'Reporting dashboard',
      'Public campaign pages',
      'Sponsor participation tools',
      'Platform CTA integration from Fundraise.ph',
      'Basic public transparency indicators',
    ],
  },
  {
    phase: 4,
    title: 'Prove the Model with Serg\'s Chocolates',
    description: 'Use Serg\'s Chocolates, a founding member, as the first major proof-of-concept for transparent, marketplace-aware Filipino fundraising. This proves how a heritage Filipino brand can use Fundraising.ph for revival campaigns, pre-orders, community support, sponsor participation, and donor/supporter acknowledgment.',
    status: 'Priority Use Case' as const,
    items: [
      'Serg\'s Chocolates founding member campaign page',
      'Revival campaign structure',
      'Pre-order campaign setup',
      'Marketplace product campaign setup',
      'Supporter acknowledgment workflow',
      'Sponsor and partner visibility',
      'Campaign progress updates',
      'Community storytelling',
      'Post-campaign reporting',
      'Clear campaign-type disclosures',
      'Integration with Fundraise.ph founding story page',
      'Lessons-learned report after the campaign',
    ],
  },
  {
    phase: 5,
    title: 'Activate Marketplace Fundraising',
    description: 'Expand Fundraising.ph beyond donation campaigns into product-based, affiliate, sponsor-supported, pre-order, and commission-based fundraising. This creates a more sustainable fundraising model for schools, churches, NGOs, associations, suppliers, businesses, sponsors, and Filipino community groups.',
    status: 'Future Phase' as const,
    items: [
      'Supplier onboarding',
      'Product partner onboarding',
      'Sponsor participation',
      'Cause-linked product campaigns',
      'Affiliate-style fundraising',
      'Commission-based campaigns',
      'Pre-order campaigns',
      'Campaign-specific marketplace pages',
      'Order and fulfillment tracking',
      'Revenue-share reporting',
      'Supporter purchase acknowledgment',
      'Marketplace vs. donation disclosures',
      'Community-powered campaign marketplace',
    ],
  },
  {
    phase: 6,
    title: 'Build the Public Impact & Transparency Dashboard',
    description: 'Make Fundraise.ph publicly accountable by showing the impact and trust created across campaigns. This phase shifts reporting from private admin dashboards to public transparency dashboards that show what the platform is doing, what campaigns are completing, and how supporters are being acknowledged.',
    status: 'Future Phase' as const,
    items: [
      'Total campaigns supported',
      'Total verified campaigns',
      'Total marketplace campaigns',
      'Donor acknowledgments sent',
      'Beneficiary reports published',
      'Campaign completion rates',
      'Partner participation',
      'Sponsor impact',
      'Campaign trust metrics',
      'Public transparency scorecards',
      'Annual reports',
      'Trustee letters',
      'Privacy-protected impact stories',
    ],
  },
  {
    phase: 7,
    title: 'Engage the Global Filipino Diaspora',
    description: 'Connect overseas Filipinos with trusted campaigns back home through location-based discovery, international supporter tools, and transparent reporting. This extends Fundraising.ph from a Philippine-focused platform into a global Filipino giving network.',
    status: 'Future Phase' as const,
    items: [
      'Overseas Filipino supporter profiles',
      'Hometown campaign discovery',
      'Campaign location maps',
      'Shareable campaign pages for Filipino associations',
      'International donor education',
      'Cross-border payment compliance awareness',
      'Supporter communication preferences',
      'Diaspora chapter partnerships',
      'Multi-currency planning',
      'Transparent impact reporting for global supporters',
    ],
  },
  {
    phase: 8,
    title: 'Build Institutional Partnerships',
    description: 'Scale Fundraise.ph through partnerships with NGOs, schools, churches, LGUs, agencies, businesses, suppliers, Filipino associations, corporate sponsors, compliance partners, and technology providers.',
    status: 'Future Phase' as const,
    items: [
      'NGO onboarding program',
      'School fundraising program',
      'Church and parish campaign standards',
      'LGU partnership program',
      'Disaster response templates',
      'Corporate sponsor program',
      'Supplier network',
      'Diaspora partner chapters',
      'Public agency collaboration',
      'Permit workflow digitization exploration',
      'Legal and compliance partner network',
      'Payment and technology partner network',
    ],
  },
  {
    phase: 9,
    title: 'Create the Open Data, Research & Policy Layer',
    description: 'Position Fundraise.ph as a public knowledge institution for responsible Filipino fundraising. This turns platform learnings into research, policy insights, public reports, and privacy-protected data that can help improve fundraising standards across the Philippines and the global Filipino community.',
    status: 'Future Phase' as const,
    items: [
      'Responsible fundraising research briefs',
      'Campaign category insights',
      'Trust and transparency reports',
      'Marketplace fundraising data',
      'Diaspora giving insights',
      'Public policy notes',
      'Compliance education resources',
      'Annual state of Filipino fundraising report',
      'Aggregated and privacy-protected impact data',
      'Open data API planning',
    ],
  },
]

export type PhaseStatus = 'Complete' | 'In Progress' | 'Prototype' | 'Foundation Ready' | 'Planned' | 'Priority Use Case' | 'Future Phase'

export function getStatusColor(status: PhaseStatus): string {
  switch (status) {
    case 'Complete': return 'bg-green-50 text-green-700 border-green-200'
    case 'In Progress': return 'bg-gold/10 text-navy border-gold/30'
    case 'Prototype': return 'bg-blue-50 text-blue-700 border-blue-200'
    case 'Foundation Ready': return 'bg-emerald-50 text-emerald-700 border-emerald-200'
    case 'Planned': return 'bg-gray-50 text-[#4A5568] border-gray-200'
    case 'Priority Use Case': return 'bg-amber-50 text-amber-800 border-amber-200'
    case 'Future Phase': return 'bg-[#F7F8FA] text-[#4A5568]/60 border-[#E2E8F0]'
    default: return 'bg-gray-50 text-[#4A5568] border-gray-200'
  }
}
