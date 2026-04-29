'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL } from '@/lib/trust-governance-compliance-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  FileText,
  Heart,
  Megaphone,
  DollarSign,
  Store,
  ClipboardCheck,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react'

const fundraisingModels = [
  'Donation',
  'Sponsorship',
  'Marketplace purchase',
  'Pre-order',
  'Affiliate commission',
  'Product-based fundraising',
  'Benefit campaign',
  'Grant',
  'Membership support',
  'Other approved model',
]

const standardSections = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Campaign Identity',
    description: 'Every campaign must clearly identify who is organizing it, who the beneficiary is, and what the relationship is between organizer and beneficiary.',
    standards: [
      'Full name and verified identity of the campaign organizer',
      'Beneficiary identity and connection to the organizer',
      'Campaign purpose stated clearly and specifically',
      'Contact information for follow-up questions',
    ],
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: 'Fundraising Model Disclosure',
    description: 'Campaigners must disclose what fundraising model they are using. This determines what additional documentation or disclosures may apply.',
    standards: [
      'Selection of appropriate fundraising model category',
      'Clear disclosure if the campaign involves marketplace elements',
      'Sponsor participation disclosed where applicable',
      'Affiliate or commission structures identified',
    ],
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Documentation Requirements',
    description: 'Campaigns must submit required documentation based on their classification. Documentation helps establish credibility and supports verification.',
    standards: [
      'Identity documentation for organizer and beneficiary',
      'Purpose-specific supporting documents (e.g., medical records, project plans)',
      'Financial goal justification and use-of-funds breakdown',
      'Organization registration documents where applicable',
    ],
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Beneficiary Consent',
    description: 'No campaign should go live without documented beneficiary awareness and consent. Beneficiary dignity and privacy must be protected at all times.',
    standards: [
      'Documented beneficiary consent for the campaign',
      'Consent for how beneficiary stories and images may be used',
      'Right of the beneficiary to request modifications or removal',
      'Protection of beneficiary personal information',
    ],
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: 'Donor Communication',
    description: 'Donors deserve clear, timely communication about the campaigns they support. Regular updates build trust and accountability.',
    standards: [
      'Campaign updates at regular intervals',
      'Milestone notifications to donors',
      'Transparent communication about any changes to the campaign',
      'Responsive handling of donor questions',
    ],
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: 'Use-of-Funds Reporting',
    description: 'Campaigners must provide a clear breakdown of how funds will be used and report on actual spending after the campaign closes.',
    standards: [
      'Pre-campaign use-of-funds breakdown',
      'Post-campaign spending report',
      'Receipts and documentation for major expenditures',
      'Transparent disclosure of any fund reallocation',
    ],
  },
  {
    icon: <Store className="h-6 w-6" />,
    title: 'Marketplace and Sponsor Disclosure',
    description: 'When campaigns involve marketplace transactions or sponsor participation, additional disclosure requirements apply.',
    standards: [
      'Product details accurately described',
      'Sponsor involvement clearly identified',
      'Pricing and fund allocation transparent',
      'Delivery timelines and expectations communicated',
    ],
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Post-Campaign Reporting',
    description: 'After a campaign concludes, campaigners are expected to submit a final report documenting outcomes and fund usage.',
    standards: [
      'Final campaign summary within the required timeframe',
      'Proof of delivery or fund disbursement documentation',
      'Impact report with photos or evidence where possible',
      'Donor notification of campaign completion',
    ],
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: 'Campaign Suspension and Review',
    description: 'Fundraise.ph reserves the right to suspend campaigns that violate standards, fail to provide required documentation, or raise legitimate concerns.',
    standards: [
      'Campaigns may be suspended for standard violations',
      'Suspension triggers a review process',
      'Campaigners are notified and given an opportunity to respond',
      'Serious violations may result in permanent removal',
    ],
  },
]

export function CampaignStandardsPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['campaign-standards'])

  return (
    <div>
      <PageHeader
        title="Campaign Standards"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section dark>
        <SectionHeading
          title="Fundraising Model Disclosure Types"
          subtitle="Campaigners must select the fundraising model that best describes their campaign. Each model has specific disclosure requirements."
          centered
        />
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {fundraisingModels.map((model, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 text-sm font-medium border-navy/20 hover:bg-gold/10 transition-colors cursor-default"
            >
              {model}
            </Badge>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Campaign Standards"
          subtitle="These standards define what Fundraise.ph expects from every campaign on Fundraising.ph — from identity verification to post-campaign reporting."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardSections.map((section, index) => (
            <Card
              key={index}
              className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full flex flex-col"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                  {section.icon}
                </div>
                <CardTitle className="text-lg text-navy">{section.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <ul className="space-y-2">
                  {section.standards.map((standard, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {standard}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <CTABlock
        headline="Ready to run a campaign that meets the highest standards?"
        subheadline="Fundraising.ph guides campaigners through every step — from identity verification to post-campaign reporting."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={FUNDRAISING_PH_URL}
      />
    </div>
  )
}
