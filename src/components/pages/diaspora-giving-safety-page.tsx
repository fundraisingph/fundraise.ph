'use client'

import { useNavigation } from '@/lib/navigation'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL } from '@/lib/trust-governance-compliance-config'
import { Hero } from '@/components/shared/hero'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTAButton } from '@/components/shared/cta-button'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { SEOBlock } from '@/components/shared/seo-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Globe,
  ShieldCheck,
  CreditCard,
  AlertTriangle,
  FileText,
  CheckCircle2,
  Search,
  Lock,
  Scale,
  Eye,
} from 'lucide-react'

const faqItems = [
  {
    question: 'How can overseas Filipinos donate safely to Philippine campaigns?',
    answer: 'Overseas Filipinos can donate safely by verifying campaigns through Fundraise.ph standards, using secure payment methods, checking for verification badges on Fundraising.ph, and confirming that the campaign has proper documentation and transparent fund flow disclosure.',
  },
  {
    question: 'What should I check before donating to a Philippine campaign from abroad?',
    answer: 'Check for verification badges, review the campaign organizer\'s identity verification, confirm the beneficiary is documented, read the fund flow disclosure, and ensure the campaign has clear reporting and update commitments. Fundraise.ph standards require these elements for verified campaigns.',
  },
  {
    question: 'Are donations from abroad tax-deductible?',
    answer: 'Tax treatment of cross-border donations depends on your country of residence and the tax laws that apply. Fundraise.ph does not provide tax advice. Consult a qualified tax professional in your host country to understand the tax implications of your donation.',
  },
  {
    question: 'How can I tell if a campaign is a scam?',
    answer: 'Warning signs include no verification badge, no organizer identity disclosure, vague or emotional-only descriptions without documentation, no clear fund flow, pressure to donate immediately, and requests to send money outside the platform. Verified campaigns on Fundraising.ph meet transparency and documentation standards.',
  },
  {
    question: 'What payment methods are safest for OFW donors?',
    answer: 'The safest payment methods are those processed directly through the Fundraising.ph platform, which provides transaction records, fund tracking, and donor acknowledgment. Avoid sending money through informal channels, personal bank transfers, or social media payment requests.',
  },
  {
    question: 'How does Fundraise.ph protect diaspora donors?',
    answer: 'Fundraise.ph sets the verification standards, disclosure requirements, and compliance guidance that campaigns on Fundraising.ph must follow. This includes identity verification, documentation review, fund flow transparency, donor acknowledgment, and reporting obligations — all designed to protect donors regardless of where they are in the world.',
  },
  {
    question: 'Can I donate in foreign currency?',
    answer: 'Multi-currency support is planned for Fundraising.ph. Currently, donations may be subject to currency conversion through the payment processor. Check the platform for the latest payment options available to international donors.',
  },
  {
    question: 'What happens if a campaign I donated to does not deliver?',
    answer: 'Fundraise.ph standards require campaign organizers to provide updates and post-campaign reports. If a campaign fails to deliver, Fundraise.ph\'s transparency framework ensures the situation is documented. Donors should review campaign reporting commitments before contributing.',
  },
]

const verificationSteps = [
  { icon: Search, title: 'Check Verification Badges', description: 'Look for Organizer Verified, Documents Submitted, and Beneficiary Confirmed badges on the campaign page.' },
  { icon: Eye, title: 'Review Fund Flow Disclosure', description: 'Verified campaigns must show how funds move from donor to beneficiary with clear documentation.' },
  { icon: ShieldCheck, title: 'Confirm Organizer Identity', description: 'The campaign organizer should have completed identity verification through the Fundraise.ph trust framework.' },
  { icon: FileText, title: 'Read Documentation', description: 'Legitimate campaigns provide supporting documents — medical records, project plans, or organizational registration.' },
  { icon: CheckCircle2, title: 'Check Update History', description: 'Active campaigns post regular updates showing progress, fund usage, and beneficiary communication.' },
]

const paymentMethods = [
  { icon: CreditCard, title: 'Platform Payment Processing', description: 'Payments processed directly through Fundraising.ph provide transaction records, fund tracking, and automatic donor acknowledgment.' },
  { icon: Lock, title: 'Secure Payment Gateways', description: 'Verified payment gateways with encryption protect your financial information and provide dispute resolution options.' },
  { icon: FileText, title: 'Donation Receipts', description: 'Every donation through the platform generates an acknowledgment receipt that can be used for personal records.' },
]

const scamWarningSigns = [
  { title: 'No verification badge', description: 'Campaign lacks any form of identity or documentation verification.' },
  { title: 'Vague or emotional-only descriptions', description: 'Campaign relies entirely on emotion without providing facts, documentation, or specifics.' },
  { title: 'No fund flow disclosure', description: 'Campaign does not explain how funds will reach the beneficiary.' },
  { title: 'Requests to send money outside the platform', description: 'Organizer asks you to send money via personal bank transfer, social media, or messaging apps.' },
  { title: 'Pressure to donate immediately', description: 'Campaign creates artificial urgency or guilt to rush your decision.' },
  { title: 'No update or reporting history', description: 'Organizer has not posted any updates, beneficiary communication, or progress reports.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Diaspora Giving Safety Guide',
  description: 'A comprehensive safety guide for overseas Filipinos who want to give to Philippine campaigns — covering verification, secure payments, scam avoidance, and tax considerations.',
  author: { '@type': 'Organization', name: 'Fundraise.ph' },
  publisher: { '@type': 'Organization', name: 'Fundraise.ph', url: 'https://fundraise.ph' },
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
}

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fundraise.ph' },
    { '@type': 'ListItem', position: 2, name: 'Knowledge Center', item: 'https://fundraise.ph/#knowledge-center' },
    { '@type': 'ListItem', position: 3, name: 'Diaspora Giving Safety', item: 'https://fundraise.ph/#diaspora-giving-safety' },
  ],
}

const internalLinksData = [
  { label: 'Diaspora Giving Technology', page: 'diaspora-giving-technology' },
  { label: 'Donor Protection', page: 'donor-protection' },
  { label: 'Verification Framework', page: 'verification-framework' },
  { label: 'Trust & Transparency', page: 'trust-transparency' },
  { label: 'Compliance Guidance', page: 'compliance' },
  { label: 'Knowledge Center', page: 'knowledge-center' },
]

export function DiasporaGivingSafetyPage() {
  const { navigate } = useNavigation()
  const { current: heroVar } = useRotatingContent(heroVariations['diaspora-giving-safety'])

  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqPageSchema, breadcrumbSchema]} />
      <div>
        <Hero
          badge="Diaspora Giving"
          headline={heroVar.headline}
          subheadline={heroVar.subheadline}
          variation={heroVar}
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <CTAButton href={FUNDRAISING_PH_URL} variant="primary" size="lg">
              Explore Verified Campaigns
            </CTAButton>
            <CTAButton onClick={() => navigate('knowledge-center')} variant="secondary" size="lg">
              Knowledge Center
            </CTAButton>
          </div>
        </Hero>

        <Section>
          <div className="max-w-4xl mx-auto">
            <AnswerBlock
              question="How can overseas Filipinos give safely to Philippine campaigns?"
              answer="Overseas Filipinos can give safely by verifying campaigns through Fundraise.ph standards, using secure platform payment methods, checking for verification badges, confirming transparent fund flow, and avoiding campaigns that request off-platform transactions."
            />
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="Understanding Diaspora Giving Challenges"
            subtitle="Over 10 million overseas Filipinos send support home every year. Distance creates unique challenges that require specific safeguards."
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Distance makes it harder to verify who is behind a campaign',
                'Cross-border payments carry fees and conversion considerations',
                'Time zone differences can delay communication and updates',
                'Different legal systems create confusion about tax and regulatory obligations',
                'Cultural expectations around giving can be exploited by bad actors',
                'Limited access to local news and community verification networks',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-navy/10">
                  <Globe className="h-5 w-5 text-trust-blue shrink-0 mt-0.5" />
                  <span className="text-[#4A5568] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="How to Verify a Campaign Before Donating"
            subtitle="Take these steps before contributing to any campaign from overseas."
            centered
          />
          <div className="max-w-4xl mx-auto space-y-4">
            {verificationSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-light-gray rounded-xl p-5 border border-navy/10">
                  <div className="w-12 h-12 rounded-xl bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{step.title}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="Secure Payment Methods for OFWs"
            subtitle="The safest way to donate is through the platform — where every transaction is tracked, acknowledged, and documented."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-trust-blue/10 text-trust-blue flex items-center justify-center mb-3 group-hover:bg-trust-blue/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-navy">{method.title}</CardTitle>
                    <CardDescription className="text-[#4A5568] text-sm leading-relaxed">{method.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="Warning Signs of Fraudulent Campaigns"
            subtitle="If you see any of these red flags, exercise caution before donating."
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scamWarningSigns.map((sign, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-light-gray border border-[#C8102E]/20">
                  <AlertTriangle className="h-5 w-5 text-[#C8102E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-1">{sign.title}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{sign.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="Tax Implications in Host Countries"
            subtitle="Cross-border donations may have tax consequences. Fundraise.ph provides educational guidance, not tax advice."
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Tax deductibility depends on your host country\'s laws and the recipient organization\'s status',
                'Some countries require reporting of foreign charitable contributions above certain thresholds',
                'Currency conversion may create additional record-keeping requirements',
                'Fundraise.ph provides donation receipts that may support your tax documentation',
                'Consult a qualified tax professional in your host country for specific guidance',
                'Keep records of all donations, receipts, and acknowledgment communications',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-navy/10">
                  <Scale className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-[#4A5568] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="How Fundraise.ph Protects Diaspora Donors"
            subtitle="The trust framework applies to every campaign — regardless of where the donor is located."
            centered
          />
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { icon: ShieldCheck, title: 'Verification Standards', description: 'Every campaign must meet identity, documentation, and disclosure standards before receiving a verified badge.' },
              { icon: Eye, title: 'Fund Flow Transparency', description: 'Donors can see how funds move from their contribution to the beneficiary — with documentation at every stage.' },
              { icon: FileText, title: 'Donor Acknowledgment', description: 'Every donation receives an acknowledgment receipt. Impact updates are provided to donors as campaigns progress.' },
              { icon: Lock, title: 'Data Privacy', description: 'Donor personal information is protected with encryption and access controls, regardless of the donor\'s location.' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-light-gray rounded-xl p-5 border border-navy/10">
                  <div className="w-12 h-12 rounded-xl bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Section>

        <Section dark>
          <div className="max-w-4xl mx-auto">
            <ProofBlock variant="verification">
              Fundraise.ph verification standards require campaign organizers to complete identity verification, submit supporting documentation, disclose fund flow, and commit to post-campaign reporting. These standards apply to all campaigns on Fundraising.ph — protecting donors whether they are in Manila, Dubai, Toronto, or anywhere in the world.
            </ProofBlock>
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto">
            <SEOBlock items={faqItems} />
          </div>
        </Section>

        <Section dark>
          <div className="max-w-4xl mx-auto space-y-6">
            <AuthorBox lastUpdated="2026-06-10" />
            <InternalLinks links={internalLinksData} />
          </div>
        </Section>
      </div>
    </>
  )
}
