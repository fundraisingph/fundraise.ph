'use client'

import { useNavigation } from '@/lib/navigation'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL } from '@/lib/trust-governance-compliance-config'
import { Hero } from '@/components/shared/hero'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTAButton } from '@/components/shared/cta-button'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Rocket,
  ShieldCheck,
  BadgeCheck,
  Scale,
  ShoppingBag,
  Globe,
  GraduationCap,
  CloudLightning,
  Building2,
  FileText,
  ArrowRight,
} from 'lucide-react'

const knowledgeSections = [
  {
    icon: Rocket,
    title: 'Start Fundraising',
    description: 'Learn how to create, launch, and manage verified campaigns on Fundraising.ph.',
    links: [
      { label: 'Start a Campaign', href: `${FUNDRAISING_PH_URL}/start`, external: true },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Donor Safety',
    description: 'Understand how Fundraise.ph protects donors through verification, transparency, and acknowledgment.',
    links: [
      { label: 'Donor Protection', page: 'donor-protection' },
      { label: 'Trust & Transparency', page: 'trust-transparency' },
    ],
  },
  {
    icon: BadgeCheck,
    title: 'Campaign Verification',
    description: 'Learn how campaigns are verified, what badges mean, and what review steps are completed.',
    links: [
      { label: 'Verification Framework', page: 'verification-framework' },
      { label: 'Verified Standards', page: 'verified-standards' },
    ],
  },
  {
    icon: Scale,
    title: 'Compliance',
    description: 'Campaign classification, solicitation awareness, privacy, and responsible fundraising guidance.',
    links: [
      { label: 'Compliance Overview', page: 'compliance' },
      { label: 'Philippines Compliance Guide', page: 'philippines-compliance-guide' },
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Product-Based Fundraising',
    description: 'How supporters buy products and part of the proceeds supports verified campaigns.',
    links: [
      { label: 'Product-Based Fundraising Guide', page: 'product-based-fundraising-guide' },
      { label: 'Marketplace Fundraising', page: 'marketplace-fundraising' },
    ],
  },
  {
    icon: Globe,
    title: 'Diaspora Giving',
    description: 'Safety guidance and technology for overseas Filipinos who give to Philippine campaigns.',
    links: [
      { label: 'Diaspora Giving Safety', page: 'diaspora-giving-safety' },
      { label: 'Diaspora Giving Technology', page: 'diaspora-giving-technology' },
    ],
  },
  {
    icon: GraduationCap,
    title: 'School & Church Fundraising',
    description: 'Resources for educational institutions, churches, and faith-based organizations.',
    links: [
      { label: 'Education Campaigns', href: `${FUNDRAISING_PH_URL}/education`, external: true },
      { label: 'Fundraising.ph Schools', href: `${FUNDRAISING_PH_URL}/schools`, external: true },
    ],
  },
  {
    icon: CloudLightning,
    title: 'Disaster Relief',
    description: 'How Fundraise.ph supports disaster response, relief campaigns, and community rebuilding.',
    links: [
      { label: 'Disaster Campaigns', href: `${FUNDRAISING_PH_URL}/disaster-relief`, external: true },
    ],
  },
  {
    icon: Building2,
    title: 'Business Sponsorship',
    description: 'How businesses can sponsor, partner, and participate in verified Filipino fundraising.',
    links: [
      { label: 'Marketplace', href: `${FUNDRAISING_PH_URL}/marketplace`, external: true },
      { label: 'Partner With Us', page: 'partner-with-us' },
    ],
  },
  {
    icon: FileText,
    title: 'Templates & Resources',
    description: 'Campaign templates, compliance checklists, and fundraising resources on Fundraising.ph.',
    links: [
      { label: 'Campaign Templates', href: `${FUNDRAISING_PH_URL}/templates`, external: true },
      { label: 'Campaign Standards', page: 'campaign-standards' },
    ],
  },
]

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Filipino Giving Knowledge Center',
  description: 'Comprehensive resource hub for trusted fundraising in the Philippines — covering verification, compliance, donor safety, diaspora giving, product-based fundraising, and more.',
  url: 'https://fundraise.ph/#knowledge-center',
  publisher: {
    '@type': 'Organization',
    name: 'Fundraise.ph',
    url: 'https://fundraise.ph',
  },
}

export function KnowledgeCenterPage() {
  const { navigate } = useNavigation()
  const { current: heroVar } = useRotatingContent(heroVariations['knowledge-center'])

  return (
    <>
      <SchemaMarkup schemas={[collectionSchema]} />
      <div>
        <Hero
          badge="Knowledge Center"
          headline={heroVar.headline}
          subheadline={heroVar.subheadline}
          variation={heroVar}
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <CTAButton href={FUNDRAISING_PH_URL} variant="primary" size="lg">
              Visit Fundraising.ph
            </CTAButton>
            <CTAButton onClick={() => navigate('glossary')} variant="secondary" size="lg">
              Browse Glossary
            </CTAButton>
          </div>
        </Hero>

        <Section>
          <SectionHeading
            title="Explore by Topic"
            subtitle="Everything you need to understand trusted Filipino giving — organized by category."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeSections.map((section, index) => {
              const Icon = section.icon
              return (
                <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-navy">{section.title}</CardTitle>
                    <CardDescription className="text-[#4A5568] text-sm leading-relaxed">{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {section.links.map((link, linkIndex) => {
                        if ('external' in link && link.external) {
                          return (
                            <a
                              key={linkIndex}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-trust-blue hover:text-navy font-medium text-xs transition-colors"
                            >
                              {link.label}
                              <ArrowRight className="h-3 w-3" />
                            </a>
                          )
                        }
                        return (
                          <button
                            key={linkIndex}
                            onClick={() => navigate((link as { page: string }).page as Parameters<typeof navigate>[0])}
                            className="inline-flex items-center gap-1 text-trust-blue hover:text-navy font-medium text-xs transition-colors"
                          >
                            {link.label}
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="Trust & Governance Resources"
            subtitle="The core trust framework that powers every verified campaign."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, title: 'Trust & Transparency', page: 'trust-transparency' },
              { icon: Scale, title: 'Governance', page: 'governance' },
              { icon: BadgeCheck, title: 'Verification', page: 'verification-framework' },
              { icon: FileText, title: 'Policies', page: 'policies' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={index}
                  onClick={() => navigate(item.page as Parameters<typeof navigate>[0])}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-navy/10 hover:border-gold/30 transition-all text-left w-full"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm">{item.title}</h3>
                  </div>
                </button>
              )
            })}
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              title="Start Learning"
              subtitle="Dive into any topic — from the glossary of terms to the full compliance guide."
              centered
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton onClick={() => navigate('glossary')} variant="primary" size="default">
                Browse Glossary
              </CTAButton>
              <CTAButton onClick={() => navigate('fundraise-vs-fundraising')} variant="secondary" size="default">
                Fundraise.ph vs Fundraising.ph
              </CTAButton>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}
