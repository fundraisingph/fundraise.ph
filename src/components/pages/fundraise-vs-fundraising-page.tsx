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
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { SEOBlock } from '@/components/shared/seo-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ShieldCheck,
  Globe,
  CheckCircle2,
  Eye,
  Scale,
  FileText,
  HeartHandshake,
  Cpu,
  Users,
  ArrowRight,
} from 'lucide-react'

const faqItems = [
  {
    question: 'Are Fundraise.ph and Fundraising.ph the same organization?',
    answer: 'No. Fundraise.ph is the nonprofit trust and governance organization that sets standards, manages verification, and provides compliance guidance. Fundraising.ph is the campaign and marketplace platform where fundraising actually takes place. They are two separate entities with distinct roles that work together as one ecosystem.',
  },
  {
    question: 'Do I need to visit both websites to donate?',
    answer: 'You donate on Fundraising.ph. Fundraise.ph is where you learn about the trust framework, verification standards, and compliance guidance that protect your donation. Think of Fundraise.ph as the trust layer you can verify, and Fundraising.ph as the platform where you act.',
  },
  {
    question: 'Why are there two different websites?',
    answer: 'Separating trust governance from campaign operations ensures independence. The organization that sets verification standards (Fundraise.ph) is separate from the platform that processes campaigns (Fundraising.ph). This separation prevents conflicts of interest and strengthens accountability.',
  },
  {
    question: 'Who runs Fundraise.ph?',
    answer: 'Fundraise.ph is a nonprofit technology organization governed by trustees who oversee its mission, policies, and operations. It operates under six governance principles: Mission Lock, Transparency by Default, Compliance-Aware Operations, Conflict-of-Interest Management, Human Oversight Over Automation, and Beneficiary Dignity.',
  },
  {
    question: 'Who runs Fundraising.ph?',
    answer: 'Fundraising.ph is the campaign platform powered by the trust framework built by Fundraise.ph. It handles campaign creation, donation processing, marketplace fundraising, and impact delivery. All campaigns on Fundraising.ph are subject to the verification and transparency standards set by Fundraise.ph.',
  },
  {
    question: 'How do the two work together?',
    answer: 'Fundraise.ph defines the trust standards, verification levels, compliance guidance, and reporting requirements. Fundraising.ph implements these standards in its campaign workflows. When you see a verified badge on Fundraising.ph, it reflects verification standards defined by Fundraise.ph.',
  },
  {
    question: 'What is the naming strategy behind both sites?',
    answer: 'The names are intentionally similar because they serve the same mission: trusted Filipino giving. "Fundraise" (the verb) represents the action and trust governance. "Fundraising" (the gerund) represents the ongoing activity and platform. Together, they form a consistent brand that reinforces the relationship between trust and action.',
  },
]

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
    { '@type': 'ListItem', position: 2, name: 'Fundraise.ph vs Fundraising.ph', item: 'https://fundraise.ph/#fundraise-vs-fundraising' },
  ],
}

const internalLinksData = [
  { label: 'Verification Framework', page: 'verification-framework' },
  { label: 'Trust & Transparency', page: 'trust-transparency' },
  { label: 'Governance', page: 'governance' },
  { label: 'Compliance', page: 'compliance' },
  { label: 'Campaign Standards', page: 'campaign-standards' },
  { label: 'Knowledge Center', page: 'knowledge-center' },
]

const fundraiseFeatures = [
  'Sets verification and trust standards',
  'Manages compliance guidance library',
  'Publishes transparency reports',
  'Oversees donor acknowledgment policies',
  'Builds and maintains trust technology',
  'Provides educational resources',
]

const fundraisingFeatures = [
  'Hosts verified fundraising campaigns',
  'Processes donations securely',
  'Provides marketplace fundraising tools',
  'Delivers impact updates to donors',
  'Connects beneficiaries with supporters',
  'Supports product-based fundraising',
]

export function FundraiseVsFundraisingPage() {
  const { navigate } = useNavigation()
  const { current: heroVar } = useRotatingContent(heroVariations['fundraise-vs-fundraising'])

  return (
    <>
      <SchemaMarkup schemas={[faqPageSchema, breadcrumbSchema]} />
      <div>
        <Hero
          badge="Understanding the Ecosystem"
          headline={heroVar.headline}
          subheadline={heroVar.subheadline}
          variation={heroVar}
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <CTAButton href={FUNDRAISING_PH_URL} variant="primary" size="lg">
              Visit Fundraising.ph
            </CTAButton>
            <CTAButton onClick={() => navigate('trust-governance-compliance')} variant="secondary" size="lg">
              Trust & Governance
            </CTAButton>
          </div>
        </Hero>

        <Section>
          <div className="max-w-4xl mx-auto">
            <AnswerBlock answer="Fundraise.ph is the trust and governance layer for Filipino giving. Fundraising.ph is the campaign platform where you start and support campaigns." />
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="Side-by-Side Comparison"
            subtitle="Two organizations, one mission: trusted Filipino giving. Here is how they compare."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-navy/30 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-navy/10 text-navy">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl text-navy">Fundraise.ph</CardTitle>
                </div>
                <Badge className="w-fit bg-navy/10 text-navy border-navy/20">
                  Nonprofit Trust & Governance
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  The nonprofit organization that builds the trust framework, sets campaign standards,
                  manages verification, provides compliance guidance, and ensures transparency across
                  all fundraising activity.
                </p>
                <ul className="space-y-2">
                  {fundraiseFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-navy mt-0.5 shrink-0" />
                      <span className="text-[#4A5568]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gold/40 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-gold text-navy">
                    <Globe className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl text-navy">Fundraising.ph</CardTitle>
                </div>
                <Badge className="w-fit bg-gold/10 text-navy border-gold/30">
                  Fundraising Platform
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  The fundraising platform where campaigns are created, donations are collected, and
                  beneficiaries receive support. Powered by the trust framework established by
                  Fundraise.ph.
                </p>
                <ul className="space-y-2">
                  {fundraisingFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-[#4A5568]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="When to Visit Fundraise.ph"
            subtitle="The trust and governance layer — where you verify, learn, and understand."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, title: 'Trust Standards', description: 'Understand the verification and trust standards that protect every campaign.' },
              { icon: Scale, title: 'Compliance Guidance', description: 'Learn about campaign classification, solicitation awareness, and responsible fundraising.' },
              { icon: Eye, title: 'Verification Framework', description: 'See how campaigns are verified, what badges mean, and what review steps are completed.' },
              { icon: FileText, title: 'Transparency Reports', description: 'Read public reports, disclosures, and impact documentation.' },
              { icon: HeartHandshake, title: 'Donor Education', description: 'Learn how donor acknowledgment, protection, and rights work across the ecosystem.' },
              { icon: Cpu, title: 'Technology Governance', description: 'Understand how AI, automation, and platform infrastructure are governed.' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-light-gray border border-navy/10">
                  <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                    <p className="text-[#4A5568] text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="When to Visit Fundraising.ph"
            subtitle="The campaign platform — where you start, support, and track campaigns."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Globe, title: 'Start a Campaign', description: 'Create a verified campaign for medical, education, disaster, or community causes.' },
              { icon: Users, title: 'Donate to Campaigns', description: 'Browse and contribute to verified campaigns with secure payment processing.' },
              { icon: Eye, title: 'Browse Campaigns', description: 'Discover campaigns across categories, locations, and fundraising models.' },
              { icon: HeartHandshake, title: 'Marketplace Fundraising', description: 'Support campaigns through product purchases, pre-orders, and sponsor participation.' },
              { icon: FileText, title: 'Track Impact', description: 'Follow campaign progress, read updates, and see how funds are used.' },
              { icon: CheckCircle2, title: 'Partner Programs', description: 'Join as a business sponsor, affiliate, or community partner.' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-navy/10">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                    <p className="text-[#4A5568] text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="How They Work Together"
            subtitle="The trust layer and the campaign platform form one ecosystem."
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                { step: '1', title: 'Fundraise.ph defines the standards', description: 'Verification levels, compliance guidance, documentation requirements, and transparency commitments are set by the trust organization.' },
                { step: '2', title: 'Fundraising.ph implements the standards', description: 'Campaign workflows, verification checks, disclosure forms, and reporting templates are built into the platform.' },
                { step: '3', title: 'Campaigns go through verification', description: 'Each campaign on Fundraising.ph is reviewed against the standards defined by Fundraise.ph before receiving verification badges.' },
                { step: '4', title: 'Donors see the trust layer in action', description: 'Verification badges, fund flow disclosures, and transparency reports on Fundraising.ph reflect the trust framework built by Fundraise.ph.' },
                { step: '5', title: 'Impact is reported publicly', description: 'Post-campaign reports, financial summaries, and beneficiary updates are published — closing the loop between trust and action.' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-light-gray rounded-xl p-5 border border-navy/10">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="Consistent Naming Strategy"
            subtitle="Why the names are similar — and why that matters."
            centered
          />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#1A1A2E] text-lg leading-relaxed mb-6">
              <strong className="text-navy">Fundraise</strong> is the verb — the action of raising funds and the governance that ensures it is done right. <strong className="text-navy">Fundraising</strong> is the gerund — the ongoing activity, the platform, the marketplace where giving happens continuously.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-8">
              The consistent naming reinforces a simple truth: <strong className="text-navy">trust (Fundraise.ph) and action (Fundraising.ph) are inseparable</strong>. You cannot have one without the other. When Filipinos see either name, they know they are in the trusted giving ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href={FUNDRAISING_PH_URL} variant="primary" size="default">
                Visit Fundraising.ph
                <ArrowRight className="ml-2 h-4 w-4" />
              </CTAButton>
              <CTAButton onClick={() => navigate('knowledge-center')} variant="secondary" size="default">
                Explore Knowledge Center
              </CTAButton>
            </div>
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
