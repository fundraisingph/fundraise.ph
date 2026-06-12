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
  Lock,
  CreditCard,
  Eye,
  RefreshCw,
  AlertTriangle,
  Users,
  CheckCircle2,
  Heart,
  FileText,
  Scale,
  MessageSquare,
} from 'lucide-react'

const faqItems = [
  {
    question: 'How are my donations protected on Fundraise.ph?',
    answer: 'Fundraise.ph protects donations through secure payment processing, campaign verification, transparent fund flow tracking, fraud monitoring, and dispute resolution mechanisms. Every campaign undergoes identity verification, and fund movements are documented from donation to beneficiary.',
  },
  {
    question: 'What happens if a campaign is found to be fraudulent?',
    answer: 'If a campaign is found to be fraudulent or in violation of platform standards, Fundraise.ph may suspend the campaign, freeze remaining funds, initiate a refund process for donors, and report the organizer to relevant authorities. Affected donors are notified of the findings and any available remedies.',
  },
  {
    question: 'Can I get a refund for my donation?',
    answer: 'Refunds may be available in cases of campaign fraud, platform-initiated campaign suspension, duplicate transactions, or technical errors. Refund requests are reviewed on a case-by-case basis. Donations to completed campaigns where funds have already been disbursed to the beneficiary may not be eligible for refund.',
  },
  {
    question: 'How does Fundraise.ph prevent fraud?',
    answer: 'Fraud prevention measures include organizer identity verification, document review, campaign monitoring, automated anomaly detection, community reporting mechanisms, and a dedicated review team. Multiple layers of review are applied before and during campaign operation.',
  },
  {
    question: 'Is my payment information secure?',
    answer: 'Yes. Fundraise.ph uses secure payment processing partners that comply with PCI-DSS standards. Payment information is encrypted and handled by certified payment processors. Fundraise.ph does not store full credit card or bank account details on its servers.',
  },
  {
    question: 'How can I report a concern about a campaign?',
    answer: 'Concerns about any campaign can be reported through the campaign page report button, via email to the Fundraise.ph trust team, or through the platform\'s contact form. All reports are reviewed by the trust team, and reporters may receive updates on the outcome of the review.',
  },
]

const donorRights = [
  {
    title: 'Transparency',
    description: 'You have the right to see campaign verification status, organizer identity, beneficiary information, and fund flow details before donating.',
    icon: <Eye className="h-6 w-6" />,
  },
  {
    title: 'Acknowledgment',
    description: 'You have the right to receive acknowledgment for your contribution and regular updates on campaign progress and fund usage.',
    icon: <Heart className="h-6 w-6" />,
  },
  {
    title: 'Privacy',
    description: 'Your personal and payment information is protected. Donor data is never sold, and privacy controls let you determine what information is visible.',
    icon: <Lock className="h-6 w-6" />,
  },
  {
    title: 'Reporting',
    description: 'You have the right to report concerns about any campaign. Reports are reviewed promptly, and you may receive updates on the review outcome.',
    icon: <AlertTriangle className="h-6 w-6" />,
  },
  {
    title: 'Dispute Resolution',
    description: 'You have access to a dispute resolution process if you believe a campaign has misused funds or violated platform standards.',
    icon: <Scale className="h-6 w-6" />,
  },
  {
    title: 'Receipt',
    description: 'You have the right to receive a donation receipt for every contribution, suitable for personal records and potential tax purposes.',
    icon: <FileText className="h-6 w-6" />,
  },
]

const paymentSecurityFeatures = [
  {
    feature: 'PCI-DSS Compliant Processing',
    description: 'All payment transactions are processed through PCI-DSS certified payment processors, ensuring the highest standards of payment security.',
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    feature: 'Data Encryption',
    description: 'Payment data is encrypted in transit and at rest. Sensitive financial information never passes through or is stored on Fundraise.ph servers.',
    icon: <Lock className="h-6 w-6" />,
  },
  {
    feature: 'Transaction Monitoring',
    description: 'Automated systems monitor transactions for unusual patterns, duplicate charges, and potential unauthorized activity.',
    icon: <Eye className="h-6 w-6" />,
  },
  {
    feature: 'Secure Fund Handling',
    description: 'Funds are handled through established financial institutions with appropriate safeguards, segregation, and documentation.',
    icon: <Shield className="h-6 w-6" />,
  },
]

const fraudPreventionLayers = [
  {
    layer: 'Pre-Campaign Screening',
    items: [
      'Organizer identity verification before campaign launch',
      'Document review for campaign purpose and beneficiary',
      'Risk assessment based on campaign type and profile',
      'Cross-referencing against known fraud indicators',
    ],
  },
  {
    layer: 'Active Campaign Monitoring',
    items: [
      'Automated anomaly detection on donation patterns',
      'Campaign activity and update frequency monitoring',
      'Fund flow tracking and disbursement verification',
      'Community reports and flagging system',
    ],
  },
  {
    layer: 'Post-Campaign Review',
    items: [
      'Fund usage reporting and documentation review',
      'Beneficiary confirmation of fund receipt',
      'Post-campaign impact report assessment',
      'Pattern analysis across campaigns for systemic risks',
    ],
  },
]

const disputeSteps = [
  {
    step: 1,
    title: 'Submit Concern',
    description: 'Report your concern through the campaign page, email, or contact form with relevant details and evidence.',
  },
  {
    step: 2,
    title: 'Review Initiated',
    description: 'The trust team reviews the report, examines campaign documentation, and contacts relevant parties.',
  },
  {
    step: 3,
    title: 'Investigation',
    description: 'A thorough investigation is conducted, including document verification, fund flow review, and organizer communication.',
  },
  {
    step: 4,
    title: 'Resolution',
    description: 'Based on findings, appropriate action is taken including refunds, campaign suspension, or additional monitoring requirements.',
  },
]

const refundScenarios = [
  {
    scenario: 'Campaign Fraud',
    eligible: true,
    description: 'Full refund of donations if a campaign is confirmed fraudulent and funds have not been disbursed.',
  },
  {
    scenario: 'Duplicate Transaction',
    eligible: true,
    description: 'Immediate refund for any duplicate charges resulting from technical errors.',
  },
  {
    scenario: 'Campaign Suspension',
    eligible: true,
    description: 'Refund consideration for campaigns suspended by Fundraise.ph for standards violations.',
  },
  {
    scenario: 'Funds Already Disbursed',
    eligible: false,
    description: 'Refunds may not be available if funds have already been disbursed to the verified beneficiary.',
  },
  {
    scenario: 'Donor Change of Mind',
    eligible: false,
    description: 'Voluntary donations where no fraud or violation is involved are generally not eligible for refund.',
  },
]

const breadcrumbData = [
  { name: 'Home', url: 'https://fundraise.ph' },
  { name: 'Trust & Compliance', url: 'https://fundraise.ph/#compliance' },
  { name: 'Donor Protection Standards', url: 'https://fundraise.ph/#donor-protection' },
]

const articleData = {
  headline: 'Donor Protection Standards',
  description: 'How Fundraise.ph protects donors through secure payments, fraud prevention, dispute resolution, and transparent fund tracking.',
  author: 'Fundraise.ph Trust Team',
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
}

export function DonorProtectionPage() {
  useNavigation()

  return (
    <div>
      <SchemaMarkup schemas={[
        breadcrumbSchema(breadcrumbData),
        articleSchema(articleData),
        faqPageSchema(faqItems),
      ]} />

      <Hero
        badge="Donor Protection"
        headline="Donor {Protection} Standards"
        subheadline="Fundraise.ph is built to protect every donor through secure payments, campaign verification, fraud prevention, and transparent fund tracking from donation to beneficiary."
      />

      <Section>
        <AnswerBlock
          question="How are donors protected on Fundraise.ph?"
          answer="Donors on Fundraise.ph are protected through multiple layers of security: all campaigns undergo identity verification, payments are processed through PCI-DSS certified systems, fund flows are tracked transparently from donation to beneficiary, and a dedicated fraud monitoring system watches for suspicious activity. Donors also have access to dispute resolution and refund mechanisms if campaigns violate platform standards."
        />
      </Section>

      <Section dark>
        <SectionHeading
          title="Donor Rights and Protections"
          subtitle="Every donor on Fundraise.ph is entitled to these fundamental rights and protections."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donorRights.map((right, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
                  {right.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{right.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{right.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Secure Payment Processing"
          subtitle="Every transaction on Fundraise.ph is protected by industry-standard security measures."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paymentSecurityFeatures.map((feature, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-trust-blue/10 text-trust-blue flex items-center justify-center mb-3 group-hover:bg-trust-blue/20 transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg text-navy">{feature.feature}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Fraud Prevention and Monitoring"
          subtitle="Fraud prevention operates across three phases: before a campaign launches, during its active period, and after it concludes."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {fraudPreventionLayers.map((layer, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardTitle className="text-base text-navy">{layer.layer}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {layer.items.map((item, iIdx) => (
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
          title="Dispute Resolution"
          subtitle="If you have a concern about a campaign, Fundraise.ph provides a structured dispute resolution process."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {disputeSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {step.step}
                </div>
                <h4 className="font-bold text-navy mb-2">{step.title}</h4>
                <p className="text-xs text-[#4A5568] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Refund Policy"
          subtitle="Refund eligibility depends on the circumstances of the request and the status of the campaign."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3">
            {refundScenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-navy/10 flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${scenario.eligible ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}>
                  {scenario.eligible ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-navy text-sm">{scenario.scenario}</h4>
                    <Badge variant="outline" className={`text-xs ${scenario.eligible ? 'border-emerald-300 text-emerald-700' : 'border-gray-300 text-gray-500'}`}>
                      {scenario.eligible ? 'Eligible' : 'Case-by-case'}
                    </Badge>
                  </div>
                  <p className="text-[#4A5568] text-xs leading-relaxed">{scenario.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <ProofBlock variant="default">
          Fundraise.ph takes donor protection seriously. While we implement robust verification, monitoring, and security measures, no system can eliminate all risk. Donors are encouraged to review campaign details, verification status, and fund flow information before contributing. Fundraise.ph does not guarantee campaign outcomes or the accuracy of all information provided by campaign organizers.
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
            { label: 'Compliance Overview', page: 'compliance' },
            { label: 'Verification Framework', page: 'verification-framework' },
            { label: 'Trust & Transparency', page: 'trust-transparency' },
            { label: 'Donor Protection Standards', page: 'donor-protection' },
            { label: 'Campaign Standards', page: 'campaign-standards' },
            { label: 'Policies', page: 'policies' },
          ]} />
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Give with Confidence</h2>
          <p className="text-[#4A5568] text-lg mb-8 max-w-2xl mx-auto">
            Every campaign on Fundraise.ph is verified, monitored, and transparent. Donate knowing your contribution is protected.
          </p>
          <CTAButton href="https://fundraise.ph">Explore Campaigns</CTAButton>
        </div>
      </Section>
    </div>
  )
}
