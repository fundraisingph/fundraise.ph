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
  Shield,
  FileText,
  Users,
  CheckCircle2,
  Fingerprint,
  Building2,
  Heart,
  ClipboardCheck,
  Eye,
  RefreshCw,
  AlertCircle,
} from 'lucide-react'

const faqItems = [
  {
    question: 'How long does the verification process take?',
    answer: 'Basic identity verification is typically completed within 24 to 48 hours. Full verification including documentation review, purpose validation, and payout verification may take 3 to 5 business days depending on the complexity of the campaign and completeness of submitted documents.',
  },
  {
    question: 'What happens if my documents are rejected?',
    answer: 'If submitted documents do not meet verification requirements, the review team will provide specific feedback on what needs to be corrected or resubmitted. Campaigners can update their documentation and resubmit for review. Campaigns can still operate at lower verification tiers while additional documents are being prepared.',
  },
  {
    question: 'Is verification mandatory for all campaigns?',
    answer: 'Basic identity verification is required for all campaigns to launch on Fundraise.ph. Higher levels of verification are encouraged but may not be mandatory for all campaign types. Some campaign categories, such as organization-led campaigns or high-value campaigns, have additional verification requirements.',
  },
  {
    question: 'How is identity verified for overseas Filipino organizers?',
    answer: 'Overseas Filipino organizers can use Philippine government-issued IDs (passport, driver\'s license, voter\'s ID) or valid foreign government IDs for identity verification. Additional steps may include video verification and address confirmation in the organizer\'s country of residence.',
  },
  {
    question: 'What is the difference between organizer verification and beneficiary verification?',
    answer: 'Organizer verification confirms the identity and legitimacy of the person or entity running the campaign. Beneficiary verification confirms the identity and situation of the person or group receiving the funds. Both are separate processes and both contribute to the overall verification level of the campaign.',
  },
  {
    question: 'Can a campaign be monitored after verification?',
    answer: 'Yes. Fundraise.ph conducts ongoing monitoring of verified campaigns including progress tracking, update verification, fund flow monitoring, and compliance checks. Verification status may be updated if new information emerges or if campaign conditions change significantly.',
  },
]

const verificationSteps = [
  {
    step: 1,
    title: 'Campaign Submission',
    icon: <ClipboardCheck className="h-6 w-6" />,
    description: 'The organizer submits campaign details including purpose, beneficiary information, fundraising model, financial goal, and supporting documentation.',
    details: [
      'Campaign title and description',
      'Beneficiary information and relationship',
      'Fundraising model selection',
      'Financial goal and use-of-funds breakdown',
    ],
  },
  {
    step: 2,
    title: 'Identity Verification',
    icon: <Fingerprint className="h-6 w-6" />,
    description: 'The organizer\'s identity is verified through government-issued identification, contact information confirmation, and basic background checks.',
    details: [
      'Government-issued ID submission',
      'Email and phone verification',
      'Identity confirmation against submitted documents',
      'Contact information validation',
    ],
  },
  {
    step: 3,
    title: 'Document Review',
    icon: <FileText className="h-6 w-6" />,
    description: 'Submitted documents are reviewed for completeness, accuracy, and consistency with the stated campaign purpose and fundraising model.',
    details: [
      'Purpose documentation review',
      'Supporting evidence assessment',
      'Financial goal justification',
      'Disclosure completeness check',
    ],
  },
  {
    step: 4,
    title: 'Purpose Validation',
    icon: <Eye className="h-6 w-6" />,
    description: 'The campaign purpose is assessed for clarity, achievability, and consistency. The fundraising model is reviewed for appropriateness.',
    details: [
      'Campaign purpose clarity assessment',
      'Goal achievability evaluation',
      'Fundraising model appropriateness review',
      'Cross-reference of all campaign information',
    ],
  },
  {
    step: 5,
    title: 'Verification Decision',
    icon: <Shield className="h-6 w-6" />,
    description: 'Based on the review, a verification level is assigned and corresponding badges are displayed on the campaign page.',
    details: [
      'Verification level assignment',
      'Badge display on campaign page',
      'Feedback provided if additional documents are needed',
      'Campaigner notification of verification outcome',
    ],
  },
  {
    step: 6,
    title: 'Ongoing Monitoring',
    icon: <RefreshCw className="h-6 w-6" />,
    description: 'Verified campaigns are subject to ongoing monitoring including progress tracking, update verification, and compliance checks.',
    details: [
      'Campaign progress monitoring',
      'Update and communication tracking',
      'Fund flow verification',
      'Post-campaign reporting requirements',
    ],
  },
]

const documentsByType = [
  {
    type: 'Personal Emergency',
    icon: <Heart className="h-6 w-6" />,
    documents: [
      'Government-issued ID of organizer',
      'Medical records or hospital bills (for medical campaigns)',
      'Beneficiary identification',
      'Proof of relationship between organizer and beneficiary',
      'Use-of-funds breakdown',
    ],
  },
  {
    type: 'Organization-Led',
    icon: <Building2 className="h-6 w-6" />,
    documents: [
      'Organization registration documents (SEC, DSWD)',
      'Authorized representative government ID',
      'Board resolution or authorization letter',
      'Organization tax exemption certificate (if applicable)',
      'Project proposal and fund allocation plan',
    ],
  },
  {
    type: 'Disaster Relief',
    icon: <AlertCircle className="h-6 w-6" />,
    documents: [
      'Organizer identification',
      'Evidence of disaster or emergency situation',
      'Beneficiary community or group identification',
      'Relief plan and fund distribution methodology',
      'Coordination with local government or DSWD (if applicable)',
    ],
  },
  {
    type: 'Marketplace Fundraising',
    icon: <CheckCircle2 className="h-6 w-6" />,
    documents: [
      'Business registration or DTI permit',
      'Product catalog and pricing documentation',
      'Supply chain and delivery plan',
      'Fund allocation between cause and product cost',
      'Consumer protection and refund policy',
    ],
  },
]

const identityMethods = [
  {
    method: 'Government ID Upload',
    description: 'Upload a photo of a valid Philippine government-issued ID such as passport, driver\'s license, PhilHealth card, voter\'s ID, or national ID.',
    icon: <Fingerprint className="h-5 w-5" />,
  },
  {
    method: 'Contact Verification',
    description: 'Verify email address and mobile number through one-time verification codes sent to the registered contact information.',
    icon: <Users className="h-5 w-5" />,
  },
  {
    method: 'Video Verification',
    description: 'For higher verification levels or when additional confirmation is needed, a short video verification may be conducted to match the organizer with their submitted ID.',
    icon: <Eye className="h-5 w-5" />,
  },
  {
    method: 'Address Confirmation',
    description: 'Proof of address may be required for certain campaign types, verified through utility bills, bank statements, or official correspondence.',
    icon: <FileText className="h-5 w-5" />,
  },
]

const monitoringChecks = [
  'Campaign progress tracking against stated goals',
  'Verification of campaign updates and milestone reports',
  'Fund flow monitoring from donations to beneficiary',
  'Compliance with platform standards and policies',
  'Review of donor communications and responsiveness',
  'Post-campaign reporting and fund usage verification',
  'Verification status review upon significant campaign changes',
  'Community feedback and concern monitoring',
]

const breadcrumbData = [
  { name: 'Home', url: 'https://fundraise.ph' },
  { name: 'Trust & Compliance', url: 'https://fundraise.ph/#verification-framework' },
  { name: 'Campaign Verification Framework', url: 'https://fundraise.ph/#campaign-verification-framework' },
]

const articleData = {
  headline: 'Campaign Verification Framework',
  description: 'A detailed guide to how campaign verification works on Fundraise.ph, including the step-by-step process, required documents, and ongoing monitoring.',
  author: 'Fundraise.ph Trust Team',
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
}

export function CampaignVerificationFrameworkPage() {
  useNavigation()

  return (
    <div>
      <SchemaMarkup schemas={[
        breadcrumbSchema(breadcrumbData),
        articleSchema(articleData),
        faqPageSchema(faqItems),
      ]} />

      <Hero
        badge="Verification Framework"
        headline="Campaign {Verification} Framework"
        subheadline="Learn how Fundraise.ph verifies campaigns through a structured, multi-step process covering identity, documentation, purpose, and ongoing monitoring."
      />

      <Section>
        <AnswerBlock
          question="How does campaign verification work?"
          answer="Campaign verification on Fundraise.ph follows a six-step process: campaign submission, identity verification, document review, purpose validation, verification decision, and ongoing monitoring. Each step builds on the previous one, with increasing levels of scrutiny. Verification badges displayed on campaign pages reflect which steps have been completed, giving donors transparent visibility into the review process."
        />
      </Section>

      <Section dark>
        <SectionHeading
          title="The Verification Process"
          subtitle="Verification is a structured, step-by-step process designed to be thorough, fair, and transparent."
        />
        <div className="space-y-6">
          {verificationSteps.map((step) => (
            <Card key={step.step} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="p-2.5 rounded-xl bg-trust-blue/10 text-trust-blue">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy mb-1">{step.title}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, dIdx) => (
                        <Badge key={dIdx} variant="outline" className="text-xs font-medium border-navy/20">
                          <CheckCircle2 className="h-3 w-3 mr-1 text-gold" />
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Required Documents by Campaign Type"
          subtitle="Different campaign types require different documentation. Here is what is typically needed for each category."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentsByType.map((item, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-navy/10 text-navy flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg text-navy">{item.type}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.documents.map((doc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Identity Verification Methods"
          subtitle="Multiple methods are available to verify organizer identity, depending on the campaign type and verification level required."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {identityMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl p-5 border border-navy/10 hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-navy leading-snug mb-1.5">{method.method}</h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Beneficiary Verification"
          subtitle="Beneficiary verification ensures that the person or group receiving funds is real, their situation is documented, and they are connected to the campaign purpose."
          centered
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Beneficiary identity confirmation through documentation',
              'Situation assessment and supporting evidence review',
              'Relationship verification between organizer and beneficiary',
              'Beneficiary consent for campaign and data usage',
              'Payout destination confirmation',
              'Direct contact verification where applicable',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-light-gray border border-navy/10">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-[#4A5568] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Ongoing Monitoring and Compliance Checks"
          subtitle="Verification does not end at campaign launch. Fundraise.ph conducts continuous monitoring to maintain trust and accountability."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {monitoringChecks.map((check, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-navy/10">
                <RefreshCw className="h-5 w-5 text-trust-blue shrink-0 mt-0.5" />
                <span className="text-[#4A5568] text-sm font-medium">{check}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <ProofBlock variant="verification">
          Campaign verification reflects the review steps completed based on available documents and platform standards. Verification does not constitute a guarantee of campaign outcomes or an endorsement of the campaign. Donors are encouraged to conduct independent assessment before contributing to any campaign.
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
            { label: 'Donor Protection', page: 'donor-protection' },
          ]} />
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Start Your Verified Campaign</h2>
          <p className="text-[#4A5568] text-lg mb-8 max-w-2xl mx-auto">
            Fundraise.ph guides you through every verification step, from identity confirmation to post-campaign reporting.
          </p>
          <CTAButton href="https://fundraise.ph">Create a Verified Campaign</CTAButton>
        </div>
      </Section>
    </div>
  )
}
