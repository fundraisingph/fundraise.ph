'use client'

import { useState } from 'react'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PLATFORM_URL } from '@/lib/technology-impact-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Megaphone,
  HandCoins,
  Users,
  ShoppingBag,
  ShieldCheck,
  Clock,
  BarChart3,
  Heart,
} from 'lucide-react'

const impactCategories = [
  {
    title: 'Campaign Impact',
    icon: Megaphone,
    metrics: [
      { label: 'Total campaigns launched' },
      { label: 'Active campaigns' },
      { label: 'Successfully funded campaigns' },
      { label: 'Average campaign duration' },
      { label: 'Campaign success rate' },
    ],
  },
  {
    title: 'Donor Impact',
    icon: HandCoins,
    metrics: [
      { label: 'Total donors' },
      { label: 'Repeat donors' },
      { label: 'Average donation amount' },
      { label: 'Diaspora donors' },
      { label: 'Donor retention rate' },
    ],
  },
  {
    title: 'Beneficiary Impact',
    icon: Users,
    metrics: [
      { label: 'Individuals directly helped' },
      { label: 'Communities supported' },
      { label: 'Funds delivered to beneficiaries' },
      { label: 'Beneficiary satisfaction rate' },
    ],
  },
  {
    title: 'Marketplace Impact',
    icon: ShoppingBag,
    metrics: [
      { label: 'Products sold through fundraising' },
      { label: 'Sellers and small businesses supported' },
      { label: 'Revenue generated for campaigns' },
      { label: 'Marketplace repeat purchase rate' },
    ],
  },
  {
    title: 'Trust Impact',
    icon: ShieldCheck,
    metrics: [
      { label: 'Campaigns verified' },
      { label: 'Post-campaign reports published' },
      { label: 'Compliance resources accessed' },
      { label: 'Community reports resolved' },
      { label: 'Trust score average' },
    ],
  },
  {
    title: 'Community Impact',
    icon: Heart,
    metrics: [
      { label: 'Partner organizations onboarded' },
      { label: 'Community events supported' },
      { label: 'Diaspora chapters connected' },
      { label: 'Volunteer hours contributed' },
    ],
  },
]

export function ImpactPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['impact'])
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <div>
      <PageHeader
        title="Impact Dashboard"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="How We Measure Impact"
          subtitle="Impact spans far beyond pesos raised. These categories reflect the full picture of how Fundraise.ph and Fundraising.ph create value for Filipino communities."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {impactCategories.map((category, index) => {
            const Icon = category.icon
            const isActive = activeCategory === index
            return (
              <Card
                key={index}
                className={`border-2 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'ring-2 ring-[#C8A951] shadow-lg -translate-y-1 border-[#C8A951]/40'
                    : 'border-[#0A1F44]/10 hover:border-[#C8A951]/30'
                }`}
                onClick={() => setActiveCategory(isActive ? null : index)}
                role="button"
                aria-expanded={isActive}
                aria-label={`${category.title} metrics`}
              >
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-14 h-14 rounded-full bg-[#0A1F44]/10 flex items-center justify-center mb-3">
                    <Icon className="h-7 w-7 text-[#0A1F44]" />
                  </div>
                  <CardTitle className="text-lg text-[#0A1F44]">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {category.metrics.map((metric, mIndex) => (
                      <li key={mIndex} className="flex items-start gap-2 text-sm text-[#4A5568]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C8A951] mt-1.5 shrink-0" />
                        <span className="font-medium">{metric.label}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-[#0A1F44]/10 flex items-center justify-center gap-1.5 text-xs font-medium text-[#4A5568]/60">
                    <Clock className="h-3.5 w-3.5" />
                    Planned Metric — Coming Soon
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Data Integrity Statement"
          subtitle="Fundraise.ph will never display simulated, aspirational, or placeholder data as live metrics."
          centered
        />
        <div className="max-w-3xl mx-auto">
          <Card className="border-[#C8A951]/20 bg-gradient-to-br from-[#0A1F44]/5 to-[#0A1F44]/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#0A1F44]/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-[#0A1F44]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
                No Fake Metrics
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                All impact metrics displayed on this page are labeled as planned or coming soon. When real production data becomes available, it will be clearly distinguished from planned metrics. We will never present aspirational numbers as live data.
              </p>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Our Public Impact Dashboard will launch only when we have real, verifiable data to display. Until then, these categories represent what we plan to measure — not what we claim to have achieved.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Annual Reports"
          subtitle="Comprehensive annual reports will be published covering financial performance, campaign outcomes, governance activities, and community impact."
          centered
        />

        <div className="max-w-2xl mx-auto">
          <Card className="border-[#C8A951]/20 bg-gradient-to-br from-[#0A1F44]/5 to-[#0A1F44]/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#0A1F44]/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-[#0A1F44]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
                Annual Reports Coming Soon
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                Our first annual report will be published after the completion of our initial fiscal year. It will include full financial statements, campaign impact analysis, governance reviews, and community feedback.
              </p>
              <Badge variant="outline" className="bg-[#C8A951]/10 text-[#B8943F] border-[#C8A951]/30">
                Coming Soon
              </Badge>
            </CardContent>
          </Card>
        </div>
      </Section>

      <CTABlock
        headline="See impact as it happens"
        subheadline="When our dashboard launches, every metric will be public, verifiable, and updated in real time. For now, explore the campaigns building that impact."
        ctaLabel="View Campaigns on Fundraising.ph"
        ctaHref={PLATFORM_URL}
      />
    </div>
  )
}
