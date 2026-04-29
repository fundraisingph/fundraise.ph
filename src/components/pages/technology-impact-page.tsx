'use client'

import { useNavigation } from '@/lib/navigation'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PLATFORM_URL, techSectionPages } from '@/lib/technology-impact-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ArrowRight, Cpu, Map, Server, BarChart3, Brain, Store, Globe, Database, Shield, HelpCircle } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-6 w-6" />,
  Map: <Map className="h-6 w-6" />,
  Server: <Server className="h-6 w-6" />,
  BarChart3: <BarChart3 className="h-6 w-6" />,
  Brain: <Brain className="h-6 w-6" />,
  Store: <Store className="h-6 w-6" />,
  Globe: <Globe className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  HelpCircle: <HelpCircle className="h-6 w-6" />,
}

const pillarCards = [
  {
    icon: 'Map',
    title: 'Technology Roadmap',
    description: 'Nine phased development milestones — from nonprofit foundation to diaspora giving — each building on verified, transparent infrastructure.',
    page: 'technology-roadmap' as const,
    cta: 'View the Roadmap',
  },
  {
    icon: 'Server',
    title: 'Platform Infrastructure',
    description: 'The operational stack powering Fundraising.ph — campaign onboarding, verification workflows, document management, and audit trails.',
    page: 'platform-infrastructure' as const,
    cta: 'Explore the Stack',
  },
  {
    icon: 'BarChart3',
    title: 'Impact Dashboard',
    description: 'How Fundraise.ph measures and reports impact across campaigns, donors, beneficiaries, marketplace, trust, and community — with no fake metrics.',
    page: 'impact' as const,
    cta: 'View Impact Framework',
  },
  {
    icon: 'Brain',
    title: 'AI & Automation',
    description: 'AI tools that support review, guidance, and reporting — always with human oversight, no automated legal conclusions, and audit logs for AI actions.',
    page: 'ai-automation' as const,
    cta: 'Learn About AI',
  },
  {
    icon: 'Store',
    title: 'Marketplace Fundraising',
    description: 'Product-based, pre-order, affiliate, and sponsor-supported fundraising models — with clear disclosure that transactions are purchases, not pure donations.',
    page: 'marketplace-fundraising' as const,
    cta: 'Explore Marketplace',
  },
  {
    icon: 'Database',
    title: 'Open Data & Research',
    description: 'Future research briefs, API concepts, and privacy-protected aggregated trust metrics — never private donor data or personally identifiable information.',
    page: 'open-data-research' as const,
    cta: 'View Open Data Plans',
  },
]

export function TechnologyImpactPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['technology-impact'])
  const { navigate } = useNavigation()

  const secondaryPages = techSectionPages.filter(
    (p) => !['technology-impact', 'technology-roadmap', 'platform-infrastructure', 'impact', 'ai-automation', 'marketplace-fundraising', 'open-data-research'].includes(p.page)
  )

  return (
    <div>
      <PageHeader
        title="Technology & Impact"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-[#4A5568] text-lg leading-relaxed">
            Fundraise.ph builds the nonprofit technology infrastructure for trusted Filipino giving. Fundraising.ph is the platform where campaigns are created, donations are made, and impact is delivered. Together, they form a complete ecosystem of transparent, accountable digital bayanihan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillarCards.map((card) => (
            <Card
              key={card.page}
              className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full flex flex-col"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                  {iconMap[card.icon]}
                </div>
                <CardTitle className="text-xl text-navy">{card.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <button
                  onClick={() => navigate(card.page)}
                  className="inline-flex items-center text-trust-blue font-semibold text-sm hover:text-navy transition-colors"
                >
                  {card.cta}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="More in This Section"
          subtitle="Additional technology and impact pages."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {secondaryPages.map((page) => (
            <button
              key={page.page}
              onClick={() => navigate(page.page)}
              className="group bg-white border border-navy/10 rounded-xl p-5 hover:shadow-md hover:border-gold/40 transition-all duration-300 text-left"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0 group-hover:bg-trust-blue/20 transition-colors">
                  {iconMap[page.icon]}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-navy leading-snug mb-1.5">{page.title}</h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">{page.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Section>

      <CTABlock
        headline="Fundraise.ph builds the technology. Fundraising.ph is where campaigns come to life."
        subheadline="Explore verified campaigns, transparent fund flows, and community-driven accountability on the Fundraising.ph platform."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={PLATFORM_URL}
      />
    </div>
  )
}
