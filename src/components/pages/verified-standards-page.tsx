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
import { VERIFICATION_LAYER_LABELS } from '@/lib/badge-types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  FileText,
  Users,
  CheckCircle2,
  Award,
  Eye,
  Fingerprint,
  Banknote,
  ClipboardCheck,
  AlertTriangle,
} from 'lucide-react'

const faqItems = [
  {
    question: 'What does verified mean on Fundraise.ph?',
    answer: 'Verified means the campaign has undergone a structured review process covering organizer identity, campaign documentation, beneficiary validation, and payout verification. The verification level is displayed on the campaign page so donors can see what has been reviewed.',
  },
  {
    question: 'Is a verified campaign guaranteed to be legitimate?',
    answer: 'No. Verification reflects that specific review steps have been completed based on available documentation. It is not a blanket guarantee, legal clearance, or endorsement. Donors should always conduct their own assessment before contributing.',
  },
  {
    question: 'What are the different verification tiers?',
    answer: 'Fundraise.ph uses a tiered verification system: Identity Verification (organizer identity confirmed), Documentation Review (campaign purpose and documents reviewed), Purpose Validation (campaign goals and use of funds validated), and Payout Verification (fund destination and disbursement verified). Each tier builds on the previous one.',
  },
  {
    question: 'How can I tell if a campaign has been verified?',
    answer: 'Every campaign displays its verification status and review level on the campaign page. Verification badges indicate which review steps have been completed. Campaigners with higher verification levels have undergone more extensive review.',
  },
  {
    question: 'What documents are needed for verification?',
    answer: 'Required documents vary by campaign type. Common requirements include government-issued ID, campaign purpose documentation, beneficiary information, use-of-funds breakdown, and organization registration documents for organization-led campaigns. The platform provides a checklist during campaign setup.',
  },
  {
    question: 'Can a campaign lose its verified status?',
    answer: 'Yes. Verification status may be updated or removed if new information emerges, if required documentation expires, if the campaign violates platform standards, or if post-campaign reporting requirements are not met. Ongoing monitoring is part of the verification framework.',
  },
]

const verificationPillars = [
  {
    icon: <Fingerprint className="h-6 w-6" />,
    title: 'Identity Verification',
    description: 'Confirmation of the campaign organizer\'s identity through government-issued identification, verified contact information, and basic background confirmation.',
    details: [
      'Government-issued ID validation',
      'Verified email and phone number',
      'Basic identity confirmation against submitted documents',
      'Contact information verification',
    ],
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Documentation Review',
    description: 'Review of campaign-specific documents including purpose documentation, supporting evidence, and financial goal justification.',
    details: [
      'Campaign purpose documentation and supporting evidence',
      'Financial goal justification and use-of-funds breakdown',
      'Beneficiary information and relationship documentation',
      'Organization registration documents where applicable',
    ],
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: 'Purpose Validation',
    description: 'Assessment of whether the campaign purpose is clearly defined, the fundraising model is appropriate, and the stated goals are achievable and verifiable.',
    details: [
      'Campaign purpose clarity and specificity assessment',
      'Fundraising model appropriateness review',
      'Goal achievability evaluation',
      'Consistency check across all campaign information',
    ],
  },
  {
    icon: <Banknote className="h-6 w-6" />,
    title: 'Payout Verification',
    description: 'Verification of the fund destination, disbursement method, and confirmation that funds reach the stated beneficiary.',
    details: [
      'Fund destination and disbursement method verification',
      'Beneficiary bank account or payout channel confirmation',
      'Fund flow tracking from donation to beneficiary',
      'Disbursement documentation and acknowledgment',
    ],
  },
]

const verificationTiers = [
  {
    level: 'Tier 1',
    title: 'Basic Verified',
    description: 'Organizer identity and contact information confirmed.',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    badges: [VERIFICATION_LAYER_LABELS.IDENTITY_VERIFIED, VERIFICATION_LAYER_LABELS.EMAIL_VERIFIED],
  },
  {
    level: 'Tier 2',
    title: 'Documented',
    description: 'Supporting documents and beneficiary verified.',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    badges: [VERIFICATION_LAYER_LABELS.DOCUMENTS_VERIFIED, VERIFICATION_LAYER_LABELS.BENEFICIARY_VERIFIED],
  },
  {
    level: 'Tier 3',
    title: 'Fully Verified',
    description: 'Payout, permits, and enhanced compliance review completed.',
    color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    badges: [
      VERIFICATION_LAYER_LABELS.PAYOUT_DESTINATION_VERIFIED,
      VERIFICATION_LAYER_LABELS.PERMIT_VERIFIED,
      VERIFICATION_LAYER_LABELS.ENHANCED_REVIEW_COMPLETED,
    ],
  },
]

const donorChecklist = [
  {
    item: 'Verification Status',
    description: 'Check the campaign page for verification badges and review level. Higher verification tiers indicate more thorough review.',
    icon: <Shield className="h-5 w-5" />,
  },
  {
    item: 'Organizer Identity',
    description: 'Look for organizer name, verified contact information, and any displayed identity confirmation.',
    icon: <Users className="h-5 w-5" />,
  },
  {
    item: 'Campaign Purpose',
    description: 'Read the campaign description carefully. The purpose should be clear, specific, and supported by documentation.',
    icon: <Eye className="h-5 w-5" />,
  },
  {
    item: 'Beneficiary Information',
    description: 'Identify who benefits from the campaign and their connection to the organizer. Beneficiary validation adds credibility.',
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    item: 'Use of Funds',
    description: 'Review the stated use of funds breakdown. Transparent campaigns provide detailed allocation of raised amounts.',
    icon: <Banknote className="h-5 w-5" />,
  },
  {
    item: 'Updates and Communication',
    description: 'Check whether the campaign has regular updates. Active communication from the organizer signals accountability.',
    icon: <FileText className="h-5 w-5" />,
  },
]

const breadcrumbData = [
  { name: 'Home', url: 'https://fundraise.ph' },
  { name: 'Trust & Compliance', url: 'https://fundraise.ph/#verification-framework' },
  { name: 'Verified Fundraising Standards', url: 'https://fundraise.ph/#verified-standards' },
]

const articleData = {
  headline: 'Verified Fundraising Standards',
  description: 'Understanding what verification means on Fundraise.ph, the verification framework, tiers, and what donors should look for in verified campaigns.',
  author: 'Fundraise.ph Trust Team',
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
}

export function VerifiedStandardsPage() {
  useNavigation()

  return (
    <div>
      <SchemaMarkup schemas={[
        breadcrumbSchema(breadcrumbData),
        articleSchema(articleData),
        faqPageSchema(faqItems),
      ]} />

      <Hero
        badge="Verified Standards"
        headline="Verified {Fundraising} Standards"
        subheadline="Understand what verification means on Fundraise.ph, how campaigns are reviewed, and what verification badges tell you as a donor or organizer."
      />

      <Section>
        <AnswerBlock
          question="What does it mean for a campaign to be verified on Fundraise.ph?"
          answer="A verified campaign on Fundraise.ph has undergone a structured review process covering organizer identity confirmation, campaign documentation review, purpose validation, and payout verification. Verification badges displayed on the campaign page indicate which specific review steps have been completed, allowing donors to make informed decisions based on the level of scrutiny applied."
        />
      </Section>

      <Section dark>
        <SectionHeading
          title="The Verification Standard Framework"
          subtitle="Verification at Fundraise.ph is built on four core pillars, each designed to provide a different dimension of trust and accountability."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verificationPillars.map((pillar, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                  {pillar.icon}
                </div>
                <CardTitle className="text-lg text-navy">{pillar.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pillar.details.map((detail, dIdx) => (
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
          title="Verification Tiers"
          subtitle="Campaigns are assigned a verification tier based on the depth and breadth of review completed. Higher tiers reflect more comprehensive verification."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verificationTiers.map((tier, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className={tier.color}>{tier.level}</Badge>
                  <h3 className="text-lg font-bold text-navy">{tier.title}</h3>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{tier.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tier.badges.map((badge, bIdx) => (
                    <Badge key={bIdx} variant="outline" className="text-xs font-medium border-navy/20">
                      <CheckCircle2 className="h-3 w-3 mr-1 text-gold" />
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="What Donors Should Look For"
          subtitle="Before contributing to any campaign, donors should review key trust indicators. Here is what to check."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {donorChecklist.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-5 border border-navy/10 hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-navy leading-snug mb-1.5">{item.item}</h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <ProofBlock variant="verification">
          Every campaign should be reviewed for organizer identity, beneficiary clarity, campaign purpose, payout destination, documentation, and update requirements. Verification reflects the review level completed and does not replace independent due diligence by donors.
        </ProofBlock>
      </Section>

      <Section dark>
        <SectionHeading title="Frequently Asked Questions" centered />
        <div className="max-w-3xl mx-auto">
          <SEOBlock items={faqItems} />
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <AuthorBox lastUpdated="2026-06-10" />
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto">
          <InternalLinks links={[
            { label: 'Verification Framework', page: 'verification-framework' },
            { label: 'Campaign Standards', page: 'campaign-standards' },
            { label: 'Compliance', page: 'compliance' },
            { label: 'Trust & Transparency', page: 'trust-transparency' },
            { label: 'Governance', page: 'governance' },
            { label: 'Policies', page: 'policies' },
          ]} />
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">See Verification in Action</h2>
          <p className="text-[#4A5568] text-lg mb-8 max-w-2xl mx-auto">
            Explore campaigns with transparent verification status and review levels on Fundraise.ph.
          </p>
          <CTAButton href="https://fundraise.ph">Explore Verified Campaigns</CTAButton>
        </div>
      </Section>
    </div>
  )
}
