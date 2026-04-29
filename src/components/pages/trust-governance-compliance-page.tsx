'use client'

import Link from 'next/link'
import { useNavigation } from '@/lib/navigation'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL, trustSectionPages } from '@/lib/trust-governance-compliance-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ArrowRight, ShieldCheck, Eye, Scale, FileCheck, BadgeCheck, ClipboardCheck, BookOpen, BarChart3, HelpCircle } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  Eye: <Eye className="h-6 w-6" />,
  Scale: <Scale className="h-6 w-6" />,
  FileCheck: <FileCheck className="h-6 w-6" />,
  BadgeCheck: <BadgeCheck className="h-6 w-6" />,
  ClipboardCheck: <ClipboardCheck className="h-6 w-6" />,
  BookOpen: <BookOpen className="h-6 w-6" />,
  BarChart3: <BarChart3 className="h-6 w-6" />,
  HelpCircle: <HelpCircle className="h-6 w-6" />,
}

const primaryCards = [
  {
    icon: 'Eye',
    title: 'Trust & Transparency',
    description: 'We make fundraising easier to trust by promoting clear campaign information, public updates, donor acknowledgment, impact reporting, and transparent disclosures.',
    cta: 'Learn about Trust & Transparency',
    page: 'trust-transparency' as const,
  },
  {
    icon: 'Scale',
    title: 'Governance',
    description: 'We protect the mission through trustee oversight, internal controls, conflict-of-interest rules, financial accountability, policy discipline, and public reporting.',
    cta: 'View Governance',
    page: 'governance' as const,
  },
  {
    icon: 'FileCheck',
    title: 'Compliance',
    description: 'We help campaigners and partners understand responsible fundraising through campaign classification, documentation, permit awareness, privacy standards, payment controls, and review pathways.',
    cta: 'Read Compliance Guidance',
    page: 'compliance' as const,
  },
]

export function TrustGovernanceCompliancePage() {
  const { current: heroVar } = useRotatingContent(heroVariations['trust-governance-compliance'])
  const { navigate } = useNavigation()

  const secondaryPages = trustSectionPages.filter(
    (p) => !['trust-governance-compliance', 'trust-transparency', 'governance', 'compliance'].includes(p.page)
  )

  return (
    <div>
      <PageHeader
        title="Trust, Governance & Compliance"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-[#4A5568] text-lg leading-relaxed">
            Fundraise.ph is building the nonprofit trust layer for Filipino giving. We believe every act of help should be counted, acknowledged, and protected. That means donors deserve visibility, campaigners need guidance, beneficiaries deserve dignity, and the organization itself must be accountable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {primaryCards.map((card) => (
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
          title="Explore the Full Section"
          subtitle="Every page in this section addresses a specific aspect of trust, governance, or compliance."
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
        headline="Fundraise.ph builds the trust layer."
        subheadline="Fundraising.ph is where campaigns come to life."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={FUNDRAISING_PH_URL}
      />
    </div>
  )
}
