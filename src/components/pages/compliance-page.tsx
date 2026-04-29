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
  Scale,
  FileText,
  Shield,
  Globe,
  Lock,
  AlertTriangle,
  Users,
  DollarSign,
  CheckCircle2,
  Info,
} from 'lucide-react'

const campaignClassifications = [
  'Donation campaign',
  'Medical assistance campaign',
  'Education support campaign',
  'Disaster relief campaign',
  'Community welfare campaign',
  'Marketplace fundraising campaign',
  'Product pre-order campaign',
  'Sponsor-supported campaign',
  'Affiliate commission campaign',
  'Grant-funded initiative',
  'Business revival or heritage campaign',
]

const complianceSections = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Campaign Classification',
    description: 'Fundraise.ph helps campaigners identify what type of fundraising they are conducting. Different campaign types may have different documentation requirements, disclosure obligations, and review pathways.',
    details: [
      'Each campaign type has a defined classification on the platform',
      'Classification determines applicable documentary requirements',
      'Campaigners are guided through the appropriate category during setup',
      'Misclassification may trigger additional review',
    ],
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: 'Donation vs Marketplace Fundraising',
    description: 'Understanding the difference between a pure donation and a marketplace transaction is essential for transparency. Donation campaigns receive funds with no exchange of goods. Marketplace campaigns involve products, services, or pre-orders.',
    details: [
      'Donation campaigns: funds given without expectation of goods or services',
      'Marketplace campaigns: involve product exchange, pre-orders, or sponsor participation',
      'Each model has distinct disclosure requirements',
      'Campaigners must select the correct model during setup',
    ],
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Public Solicitation Guidance',
    description: 'Fundraise.ph provides educational guidance about public solicitation practices. We help campaigners understand when their fundraising activity may involve public solicitation and what that may mean for their campaign.',
    details: [
      'Guidance on what constitutes public solicitation',
      'Educational resources on responsible fundraising communication',
      'Campaign communication templates and standards',
      'Clarification that guidance does not replace legal advice',
    ],
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'DSWD / LGU / Local Authority Considerations',
    description: 'Fundraise.ph provides awareness information about government agencies and local authorities that may be relevant to fundraising activities. This is educational guidance, not regulatory clearance.',
    details: [
      'Awareness of DSWD requirements for public solicitation where applicable',
      'Information about LGU permits that may be relevant to certain campaign types',
      'Guidance on when to seek independent legal or regulatory advice',
      'Educational materials on compliance-aware fundraising practices',
    ],
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: 'Payment and Fund Flow Controls',
    description: 'Fundraise.ph supports transparent payment and fund flow processes. We promote clear documentation of how funds move from donor to beneficiary.',
    details: [
      'Transparent fund flow tracking from pledge to beneficiary',
      'Payment controls and documentation requirements',
      'Fund disbursement protocols with appropriate safeguards',
      'Donor acknowledgment and receipt standards',
    ],
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Data Privacy and Consent',
    description: 'Fundraise.ph is committed to data privacy standards. Personal information is protected, access-controlled, and handled with care consistent with applicable privacy laws.',
    details: [
      'Personal data protection and encryption',
      'Access controls for sensitive information',
      'Consent protocols for beneficiary and donor data',
      'Privacy-first approach to platform design',
    ],
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Donor Records and Acknowledgment',
    description: 'Every donor deserves proper acknowledgment. Fundraise.ph promotes standards for donor record-keeping, acknowledgment, and transparency.',
    details: [
      'Donor acknowledgment for every contribution',
      'Record-keeping standards for campaign transactions',
      'Impact updates provided to donors',
      'Privacy-protected donor communications',
    ],
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: 'Sponsor, Affiliate, and Marketplace Disclosures',
    description: 'When campaigns involve sponsors, affiliates, or marketplace transactions, clear disclosure is essential. Fundraise.ph promotes transparency in all commercial relationships within campaigns.',
    details: [
      'Sponsor participation must be clearly disclosed',
      'Affiliate commission structures must be transparent',
      'Marketplace product details must be accurate and complete',
      'Commercial relationships must be identified to donors',
    ],
  },
]

export function CompliancePage() {
  const { current: heroVar } = useRotatingContent(heroVariations['compliance'])

  return (
    <div>
      <PageHeader
        title="Compliance"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="Compliance Philosophy"
          subtitle="Fundraise.ph is not a regulator, law firm, payment institution, or government agency. But we believe fundraising platforms must be designed with compliance awareness from the beginning."
          centered
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#4A5568] text-lg leading-relaxed">
            Our compliance approach helps campaigners understand what type of campaign they are running, what documents may be needed, what disclosures should be made, and when external legal, regulatory, or permit review may be required.
          </p>
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Campaign Classification"
          subtitle="Different campaign types may have different requirements. Fundraise.ph helps campaigners identify and classify their fundraising activity."
          centered
        />
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {campaignClassifications.map((classification, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 text-sm font-medium border-navy/20 hover:bg-gold/10 transition-colors cursor-default"
            >
              {classification}
            </Badge>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Compliance Guidance Areas"
          subtitle="Our compliance framework covers the following areas, each designed to support responsible fundraising practices."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {complianceSections.map((section, index) => (
            <Card
              key={index}
              className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full"
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
              <CardContent>
                <ul className="space-y-2">
                  {section.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start gap-2 text-sm text-[#4A5568]"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-navy/10 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0">
                <Info className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">Compliance Disclaimer</h3>
                <p className="text-[#4A5568] leading-relaxed text-sm">
                  Fundraise.ph provides educational and operational guidance only. It does not provide legal advice and does not replace professional legal, accounting, tax, compliance, or regulatory consultation. Campaigners are encouraged to seek independent professional advice where applicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Cross-Border and Diaspora Giving"
          subtitle="Fundraise.ph recognizes that many Filipino supporters are based overseas. We provide guidance on compliance-aware cross-border giving."
          centered
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Awareness of cross-border fund transfer considerations',
              'Guidance on diaspora giving documentation',
              'Transparent fund flow tracking for international donations',
              'Compliance-aware platform design for global participation',
              'Educational resources on international giving practices',
              'Support for multi-currency campaign considerations',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-light-gray border border-navy/10">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-[#4A5568] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABlock
        headline="Compliance-aware fundraising starts here."
        subheadline="Visit Fundraising.ph to create, support, or explore campaigns with built-in compliance guidance."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={FUNDRAISING_PH_URL}
      />
    </div>
  )
}
