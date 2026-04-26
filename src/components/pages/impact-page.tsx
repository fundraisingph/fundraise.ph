'use client'

import { useState } from 'react'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigation } from '@/lib/navigation'
import {
  Megaphone,
  HandCoins,
  Users,
  ShoppingBag,
  ShieldCheck,
  Clock,
  DollarSign,
  Activity,
  CheckCircle2,
  Heart,
  Globe,
  FileText,
  TrendingUp,
  BarChart3,
} from 'lucide-react'

const impactCategories = [
  {
    title: 'Campaign Impact',
    icon: Megaphone,
    metrics: [
      { label: 'Total campaigns launched', value: '—' },
      { label: 'Active campaigns', value: '—' },
      { label: 'Successfully funded campaigns', value: '—' },
      { label: 'Average campaign duration', value: '—' },
      { label: 'Campaign success rate', value: '—' },
    ],
  },
  {
    title: 'Donor Impact',
    icon: HandCoins,
    metrics: [
      { label: 'Total donors', value: '—' },
      { label: 'Repeat donors', value: '—' },
      { label: 'Average donation amount', value: '—' },
      { label: 'Diaspora donors', value: '—' },
      { label: 'Donor retention rate', value: '—' },
    ],
  },
  {
    title: 'Beneficiary Impact',
    icon: Users,
    metrics: [
      { label: 'Individuals directly helped', value: '—' },
      { label: 'Communities supported', value: '—' },
      { label: 'Funds delivered to beneficiaries', value: '—' },
      { label: 'Beneficiary satisfaction rate', value: '—' },
    ],
  },
  {
    title: 'Marketplace Impact',
    icon: ShoppingBag,
    metrics: [
      { label: 'Products sold through fundraising', value: '—' },
      { label: 'Sellers and small businesses supported', value: '—' },
      { label: 'Revenue generated for campaigns', value: '—' },
      { label: 'Marketplace repeat purchase rate', value: '—' },
    ],
  },
  {
    title: 'Trust Impact',
    icon: ShieldCheck,
    metrics: [
      { label: 'Campaigns verified', value: '—' },
      { label: 'Post-campaign reports published', value: '—' },
      { label: 'Compliance resources accessed', value: '—' },
      { label: 'Community reports resolved', value: '—' },
      { label: 'Trust score average', value: '—' },
    ],
  },
]

const futureDashboardMetrics = [
  { title: 'Total Funds Raised', icon: DollarSign, description: 'Aggregate amount raised across all campaigns' },
  { title: 'Active Campaigns', icon: Activity, description: 'Currently live and accepting support' },
  { title: 'Verified Campaigns', icon: CheckCircle2, description: 'Campaigns that passed verification review' },
  { title: 'Total Donors', icon: Users, description: 'Unique individuals who have contributed' },
  { title: 'Beneficiaries Reached', icon: Heart, description: 'People directly helped by campaigns' },
  { title: 'Diaspora Contributions', icon: Globe, description: 'Support from overseas Filipinos' },
  { title: 'Marketplace Transactions', icon: ShoppingBag, description: 'Product-based fundraising activity' },
  { title: 'Reports Published', icon: FileText, description: 'Post-campaign accountability reports' },
  { title: 'Trust Score Average', icon: ShieldCheck, description: 'Platform-wide verification trust score' },
]

export function ImpactPage() {
  const { navigate } = useNavigation()
  const { current: heroVar } = useRotatingContent(heroVariations['impact'])
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <div>
      <PageHeader
        title="Our Impact"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      {/* Impact Categories */}
      <Section>
        <SectionHeading
          title="How We Measure Impact"
          subtitle="Impact spans far beyond pesos raised. These categories reflect the full picture of how Fundraise.ph and Fundraising.ph create value for Filipino communities."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
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
                        <div>
                          <span className="font-medium">{metric.label}</span>
                          <span className="ml-2 text-xs text-[#4A5568]/60">({metric.value})</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-[#0A1F44]/10 flex items-center justify-center gap-1.5 text-xs font-medium text-[#4A5568]/60">
                    <Clock className="h-3.5 w-3.5" />
                    Metrics coming soon
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Future Dashboard Preview */}
      <Section dark>
        <SectionHeading
          title="Future Dashboard Metrics"
          subtitle="Our Public Impact Dashboard will display real-time, transparent metrics for the entire platform. These data points will be accessible to everyone."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {futureDashboardMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className="group bg-white border border-[#0A1F44]/10 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:border-[#C8A951]/30 relative overflow-hidden"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0A1F44]/10 text-[#0A1F44] flex items-center justify-center shrink-0 group-hover:bg-[#C8A951]/15 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm text-[#0A1F44] leading-snug">
                        {metric.title}
                      </h3>
                      <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-[#C8A951]/10 text-[#B8943F] border-[#C8A951]/30">
                        Coming Soon
                      </Badge>
                    </div>
                    <p className="text-xs text-[#4A5568] leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#0A1F44]/5 text-center">
                  <span className="text-2xl font-bold text-[#0A1F44]/20">—</span>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Annual Reports Placeholder */}
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

      {/* CTA */}
      <CTABlock
        headline="See impact as it happens"
        subheadline="When our dashboard launches, every metric will be public, verifiable, and updated in real time. For now, explore the campaigns building that impact."
      />
    </div>
  )
}
