'use client'

import { Hero } from '@/components/shared/hero'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTAButton } from '@/components/shared/cta-button'
import { SEOBlock } from '@/components/shared/seo-block'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup, faqPageSchema, breadcrumbSchema, articleSchema } from '@/components/shared/schema-markup'
import { useNavigation } from '@/lib/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Eye,
  BarChart3,
  FileText,
  TrendingUp,
  CheckCircle2,
  Globe,
  Users,
  ArrowRight,
  Shield,
  LayoutDashboard,
  Scale,
  Heart,
} from 'lucide-react'

const faqItems = [
  {
    question: 'What transparency reports does Fundraise.ph provide?',
    answer: 'Fundraise.ph provides campaign-level transparency reports including fund flow tracking, use-of-funds breakdowns, progress updates, and post-campaign impact reports. Platform-level transparency includes aggregate metrics on verification rates, campaign outcomes, and trust indicators published on the Impact Dashboard.',
  },
  {
    question: 'How can I track how my donation is used?',
    answer: 'After donating, you can track fund movement through the campaign page, which displays progress updates, milestone reports, and fund disbursement records. Campaign organizers are expected to post regular updates with documentation showing how funds are being used.',
  },
  {
    question: 'Are campaign financial details publicly visible?',
    answer: 'Yes. Campaign pages display the fundraising goal, amount raised, number of donors, and fund allocation breakdown. Post-campaign reports show how funds were disbursed, with receipts and evidence where available. Individual donor amounts and identities are kept private unless the donor opts for public acknowledgment.',
  },
  {
    question: 'What happens if a campaign does not provide post-campaign reports?',
    answer: 'Post-campaign reporting is an expectation on Fundraise.ph. Campaigners who fail to provide required reports may have their verification status affected, may face restrictions on future campaigns, and may be subject to additional review. The platform follows up with campaigners to ensure reporting compliance.',
  },
  {
    question: 'How does Fundraise.ph measure impact?',
    answer: 'Impact is measured through campaign completion rates, fund usage reports, beneficiary outcomes, verification coverage, donor satisfaction, and community feedback. Aggregate impact metrics are published on the Impact Dashboard for public review.',
  },
  {
    question: 'Can researchers access Fundraise.ph data?',
    answer: 'Fundraise.ph is committed to open data principles where privacy permits. Aggregated, anonymized data may be made available to researchers through the Open Data and Research initiative. Individual campaign and donor data remains protected and is never shared without explicit consent.',
  },
]

const transparencyStandards = [
  {
    title: 'Campaign Disclosure',
    description: 'Every campaign must clearly disclose its purpose, organizer, beneficiary, fundraising model, and use of funds before accepting donations.',
    icon: <Eye className="h-6 w-6" />,
    details: [
      'Campaign purpose and goals clearly stated',
      'Organizer identity and verification status visible',
      'Beneficiary information and relationship disclosed',
      'Fundraising model identified and explained',
    ],
  },
  {
    title: 'Fund Flow Tracking',
    description: 'The movement of funds from donor to beneficiary must be documented and traceable at every stage.',
    icon: <ArrowRight className="h-6 w-6" />,
    details: [
      'Donation acknowledgment and receipt generation',
      'Fund holding and processing documentation',
      'Disbursement records with timestamps',
      'Beneficiary confirmation of fund receipt',
    ],
  },
  {
    title: 'Progress Reporting',
    description: 'Campaign organizers must provide regular updates on campaign progress, milestones reached, and any changes to the campaign plan.',
    icon: <TrendingUp className="h-6 w-6" />,
    details: [
      'Regular campaign progress updates',
      'Milestone achievement notifications',
      'Transparent communication about campaign changes',
      'Responsive handling of donor inquiries',
    ],
  },
  {
    title: 'Impact Documentation',
    description: 'Post-campaign reports must document the outcomes achieved, how funds were used, and the impact on beneficiaries.',
    icon: <FileText className="h-6 w-6" />,
    details: [
      'Post-campaign spending report with receipts',
      'Evidence of fund delivery to beneficiary',
      'Impact narrative with photos or documentation',
      'Donor notification of campaign completion',
    ],
  },
]

const fundFlowStages = [
  {
    stage: 'Donation Received',
    description: 'Donor contribution is recorded with transaction details, timestamp, and acknowledgment receipt generated.',
    icon: <Heart className="h-6 w-6" />,
  },
  {
    stage: 'Fund Processing',
    description: 'Funds are processed through secure payment systems with full transaction documentation and audit trail.',
    icon: <Shield className="h-6 w-6" />,
  },
  {
    stage: 'Campaign Monitoring',
    description: 'Fund accumulation is tracked against campaign goals with real-time visibility for donors and organizers.',
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    stage: 'Disbursement Initiated',
    description: 'Funds are released to the verified beneficiary through documented payout channels with confirmation requirements.',
    icon: <ArrowRight className="h-6 w-6" />,
  },
  {
    stage: 'Beneficiary Confirmation',
    description: 'Beneficiary confirms receipt of funds. Confirmation is recorded and displayed on the campaign page.',
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
]

const impactMetrics = [
  {
    category: 'Campaign Metrics',
    items: [
      'Total campaigns created and completed',
      'Campaign success rate by category',
      'Average time to campaign completion',
      'Verification coverage rate across campaigns',
    ],
  },
  {
    category: 'Financial Metrics',
    items: [
      'Total funds raised across the platform',
      'Fund disbursement rate and speed',
      'Average donation size and distribution',
      'Fee transparency and cost breakdown',
    ],
  },
  {
    category: 'Trust Metrics',
    items: [
      'Verification completion rates by tier',
      'Post-campaign report submission rate',
      'Community report resolution time',
      'Donor satisfaction and repeat donation rate',
    ],
  },
  {
    category: 'Impact Metrics',
    items: [
      'Number of beneficiaries reached',
      'Campaign categories with highest impact',
      'Geographic distribution of campaigns',
      'Cross-border giving volume and reach',
    ],
  },
]

const publicDisclosures = [
  {
    title: 'Campaign-Level Disclosures',
    description: 'Each campaign page displays organizer identity, verification status, fund allocation, progress updates, and post-campaign reports.',
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: 'Platform-Level Disclosures',
    description: 'Aggregate platform metrics, verification statistics, and operational reports are published on the Impact Dashboard.',
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: 'Policy Disclosures',
    description: 'All governance policies, platform rules, terms of service, and privacy policies are publicly accessible.',
    icon: <Scale className="h-5 w-5" />,
  },
  {
    title: 'Annual Transparency Report',
    description: 'An annual report summarizing platform activity, campaign outcomes, trust metrics, and operational improvements.',
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: 'Open Data Access',
    description: 'Aggregated, anonymized data available for researchers and the public through the Open Data initiative.',
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: 'Community Feedback',
    description: 'Public feedback channels for community members to raise concerns, suggest improvements, and hold the platform accountable.',
    icon: <Users className="h-5 w-5" />,
  },
]

const breadcrumbData = [
  { name: 'Home', url: 'https://fundraise.ph' },
  { name: 'Trust & Compliance', url: 'https://fundraise.ph/#trust-transparency' },
  { name: 'Transparency Reporting Framework', url: 'https://fundraise.ph/#transparency-reporting' },
]

const articleData = {
  headline: 'Transparency Reporting Framework',
  description: 'How Fundraise.ph ensures transparency in fundraising through fund flow visibility, impact reporting, and public disclosure standards.',
  author: 'Fundraise.ph Trust Team',
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
}

export function TransparencyReportingPage() {
  useNavigation()

  return (
    <div>
      <SchemaMarkup schemas={[
        breadcrumbSchema(breadcrumbData),
        articleSchema(articleData),
        faqPageSchema(faqItems),
      ]} />

      <Hero
        badge="Transparency"
        headline="Transparency {Reporting} Framework"
        subheadline="Fundraise.ph ensures every donation is traceable, every campaign is accountable, and every outcome is documented through comprehensive transparency reporting."
      />

      <Section>
        <AnswerBlock
          question="How does Fundraise.ph ensure transparency in fundraising?"
          answer="Fundraise.ph ensures transparency through a comprehensive reporting framework that covers four areas: campaign disclosure requirements that make organizer identity and fund allocation visible, fund flow tracking that traces every donation from giver to beneficiary, impact reporting that documents campaign outcomes, and public disclosures that provide platform-level accountability. Every campaign page displays verification status, fund allocation, progress updates, and post-campaign reports."
        />
      </Section>

      <Section dark>
        <SectionHeading
          title="Transparency Standards and Reporting Requirements"
          subtitle="Fundraise.ph applies four core transparency standards to every campaign, ensuring donors can make informed decisions and track outcomes."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transparencyStandards.map((standard, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                  {standard.icon}
                </div>
                <CardTitle className="text-lg text-navy">{standard.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">
                  {standard.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {standard.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-sm text-[#4A5568]">
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

      <Section>
        <SectionHeading
          title="Fund Flow Visibility"
          subtitle="Every donation follows a documented path from giver to beneficiary. Here is how fund flow transparency works."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {fundFlowStages.map((stage, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                    <div className="text-trust-blue">{stage.icon}</div>
                  </div>
                  {index < fundFlowStages.length - 1 && (
                    <div className="w-0.5 h-8 bg-navy/20 mt-2" />
                  )}
                </div>
                <Card className="flex-1 group transition-all duration-200 hover:shadow-md hover:border-gold/30">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-navy mb-1">{stage.stage}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{stage.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Impact Reporting and Metrics"
          subtitle="Impact is measured across four dimensions, providing a comprehensive view of platform performance and campaign outcomes."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {impactMetrics.map((section, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg text-navy">{section.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Public Disclosure Requirements"
          subtitle="Transparency extends beyond individual campaigns. Fundraise.ph commits to platform-level public disclosure across multiple dimensions."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {publicDisclosures.map((disclosure, index) => (
            <div key={index} className="group bg-white border border-navy/10 rounded-xl p-5 hover:shadow-md hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0 group-hover:bg-trust-blue/20 transition-colors">
                  {disclosure.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-navy leading-snug mb-1.5">
                    {disclosure.title}
                  </h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">{disclosure.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <ProofBlock variant="default">
          Transparency is a core operational commitment at Fundraise.ph, not an aspiration. All reporting standards, disclosure requirements, and impact metrics are built into the platform, governance structure, and operational policies. Transparency data reflects actual platform performance and is updated regularly to maintain accuracy and accountability.
        </ProofBlock>
      </Section>

      <Section>
        <SectionHeading title="Frequently Asked Questions" centered />
        <div className="max-w-3xl mx-auto">
          <SEOBlock items={faqItems} />
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto">
          <AuthorBox lastUpdated="2026-06-10" />
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <InternalLinks links={[
            { label: 'Trust & Transparency', page: 'trust-transparency' },
            { label: 'Impact Dashboard', page: 'impact' },
            { label: 'Reports & Disclosures', page: 'reports-disclosures' },
            { label: 'Governance', page: 'governance' },
            { label: 'Compliance', page: 'compliance' },
            { label: 'Verification Framework', page: 'verification-framework' },
          ]} />
        </div>
      </Section>

      <Section dark>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Transparency Builds Trust</h2>
          <p className="text-[#4A5568] text-lg mb-8 max-w-2xl mx-auto">
            See how Fundraise.ph makes every donation traceable, every campaign accountable, and every outcome documented.
          </p>
          <CTAButton href="https://fundraise.ph">Explore Transparent Campaigns</CTAButton>
        </div>
      </Section>
    </div>
  )
}
