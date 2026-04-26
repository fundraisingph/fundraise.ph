'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigation } from '@/lib/navigation'
import {
  BarChart3,
  Users,
  Heart,
  ShoppingBag,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  Eye,
  Globe,
  Target,
  FileText,
  Activity,
  PieChart,
  Layers,
  Clock,
  CheckCircle2,
  ArrowRight,
  Megaphone,
  HandCoins,
  UserCheck,
  Building,
  Award,
} from 'lucide-react'

const impactCategories = [
  {
    title: 'Campaign Impact',
    icon: Megaphone,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    iconBg: 'bg-emerald-100',
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
    color: 'text-teal-600 bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100',
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
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    iconBg: 'bg-cyan-100',
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
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-100',
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
    color: 'text-orange-600 bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
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
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <div>
      <PageHeader
        title="Our Impact"
        headline="Impact is not only money raised. Impact is trust created."
        description="We measure what matters — not just amounts, but accountability, reach, trust, and the real difference made in Filipino communities."
      />

      {/* Impact Categories Section */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Impact Categories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Measure Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Impact spans far beyond pesos raised. These categories reflect the full picture of how Fundraise.ph and Fundraising.ph create value for Filipino communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {impactCategories.map((category, index) => {
            const Icon = category.icon
            const isActive = activeCategory === index
            return (
              <Card
                key={index}
                className={`border-2 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  isActive ? 'ring-2 ring-primary shadow-lg -translate-y-1' : ''
                } ${category.color}`}
                onClick={() => setActiveCategory(isActive ? null : index)}
              >
                <CardHeader className="text-center pb-2">
                  <div className={`mx-auto w-14 h-14 rounded-full ${category.iconBg} flex items-center justify-center mb-3`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {category.metrics.map((metric, mIndex) => (
                      <li key={mIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-current opacity-40 mt-1.5 shrink-0" />
                        <div>
                          <span className="font-medium opacity-90">{metric.label}</span>
                          <span className="ml-2 opacity-60 text-xs">({metric.value})</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-center gap-1.5 text-xs font-medium opacity-60">
                    <Clock className="h-3.5 w-3.5" />
                    Metrics coming soon
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Future Dashboard Blocks Section */}
      <Section dark>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Public Impact Dashboard
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Future Dashboard Metrics
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our Public Impact Dashboard will display real-time, transparent metrics for the entire platform. These data points will be accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {futureDashboardMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className="group bg-card border rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:border-primary/30 relative overflow-hidden"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm leading-snug">
                        {metric.title}
                      </h3>
                      <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-amber-50 text-amber-700 border-amber-200">
                        Coming Soon
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t text-center">
                  <span className="text-2xl font-bold text-muted-foreground/40">—</span>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <CTABlock
          headline="See impact as it happens"
          subheadline="When our dashboard launches, every metric will be public, verifiable, and updated in real time. For now, explore the campaigns building that impact."
          primaryText="View Campaigns on Fundraising.ph"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
