'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigation } from '@/lib/navigation'
import {
  BarChart3,
  ShieldCheck,
  ShoppingCart,
  Globe,
  Heart,
  Eye,
  TrendingUp,
  Users,
  FileCheck,
  DollarSign,
  MapPin,
  Package,
  Clock,
  Award,
  ThumbsUp,
  Activity,
  Landmark,
  ArrowRight,
} from 'lucide-react'

interface MetricCardProps {
  title: string
  icon: React.ElementType
  value: string
  color: string
  iconBg: string
}

function MetricCard({ title, icon: Icon, value, color, iconBg }: MetricCardProps) {
  return (
    <Card className="border hover:shadow-md transition-all duration-200">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className={`w-9 h-9 rounded-full ${iconBg} flex items-center justify-center`}>
            <Icon className={`h-4.5 w-4.5 ${color}`} />
          </div>
          <Badge variant="outline" className="text-xs text-muted-foreground border-dashed">
            Coming Soon
          </Badge>
        </div>
        <p className="text-2xl font-bold mb-1">{value}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </CardContent>
    </Card>
  )
}

interface DashboardModuleProps {
  title: string
  icon: React.ElementType
  description: string
  metrics: MetricCardProps[]
  badgeColor: string
}

function DashboardModule({ title, icon: Icon, description, metrics, badgeColor }: DashboardModuleProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full ${badgeColor} flex items-center justify-center`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  )
}

const dashboardModules: DashboardModuleProps[] = [
  {
    title: 'Campaign Metrics',
    icon: BarChart3,
    description: 'Tracking the scale and health of the campaign ecosystem.',
    badgeColor: 'bg-emerald-100 text-emerald-600',
    metrics: [
      {
        title: 'Total Campaigns',
        icon: FileCheck,
        value: '—',
        color: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
      },
      {
        title: 'Active Campaigns',
        icon: Activity,
        value: '—',
        color: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
      },
      {
        title: 'Completed Campaigns',
        icon: Award,
        value: '—',
        color: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
      },
      {
        title: 'Total Funds Raised',
        icon: DollarSign,
        value: '₱0',
        color: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
      },
      {
        title: 'Average Campaign Duration',
        icon: Clock,
        value: '—',
        color: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
      },
    ],
  },
  {
    title: 'Trust Metrics',
    icon: ShieldCheck,
    description: 'Measuring the verification and accountability health of the ecosystem.',
    badgeColor: 'bg-amber-100 text-amber-600',
    metrics: [
      {
        title: 'Verified Campaigns',
        icon: ShieldCheck,
        value: '—',
        color: 'text-amber-600',
        iconBg: 'bg-amber-50',
      },
      {
        title: 'Verification Rate',
        icon: TrendingUp,
        value: '0%',
        color: 'text-amber-600',
        iconBg: 'bg-amber-50',
      },
      {
        title: 'Post-Campaign Reports Filed',
        icon: FileCheck,
        value: '—',
        color: 'text-amber-600',
        iconBg: 'bg-amber-50',
      },
      {
        title: 'Beneficiary Confirmations',
        icon: Users,
        value: '—',
        color: 'text-amber-600',
        iconBg: 'bg-amber-50',
      },
      {
        title: 'Community Endorsements',
        icon: ThumbsUp,
        value: '—',
        color: 'text-amber-600',
        iconBg: 'bg-amber-50',
      },
    ],
  },
  {
    title: 'Marketplace Metrics',
    icon: ShoppingCart,
    description: 'Tracking the product-based fundraising ecosystem.',
    badgeColor: 'bg-rose-100 text-rose-600',
    metrics: [
      {
        title: 'Product Partners',
        icon: Package,
        value: '—',
        color: 'text-rose-600',
        iconBg: 'bg-rose-50',
      },
      {
        title: 'Marketplace Transactions',
        icon: ShoppingCart,
        value: '—',
        color: 'text-rose-600',
        iconBg: 'bg-rose-50',
      },
      {
        title: 'Revenue to Trust Fund',
        icon: Landmark,
        value: '₱0',
        color: 'text-rose-600',
        iconBg: 'bg-rose-50',
      },
      {
        title: 'Active Product Listings',
        icon: Package,
        value: '—',
        color: 'text-rose-600',
        iconBg: 'bg-rose-50',
      },
      {
        title: 'Avg. Transaction Value',
        icon: DollarSign,
        value: '₱0',
        color: 'text-rose-600',
        iconBg: 'bg-rose-50',
      },
    ],
  },
  {
    title: 'Geographic Metrics',
    icon: Globe,
    description: 'Where campaigns and donors are located.',
    badgeColor: 'bg-teal-100 text-teal-600',
    metrics: [
      {
        title: 'Provinces Reached',
        icon: MapPin,
        value: '—',
        color: 'text-teal-600',
        iconBg: 'bg-teal-50',
      },
      {
        title: 'Countries with Donors',
        icon: Globe,
        value: '—',
        color: 'text-teal-600',
        iconBg: 'bg-teal-50',
      },
      {
        title: 'Top Donor Region',
        icon: MapPin,
        value: '—',
        color: 'text-teal-600',
        iconBg: 'bg-teal-50',
      },
      {
        title: 'Top Campaign Region',
        icon: MapPin,
        value: '—',
        color: 'text-teal-600',
        iconBg: 'bg-teal-50',
      },
    ],
  },
  {
    title: 'Donor Engagement',
    icon: Heart,
    description: 'Understanding donor behavior and community participation.',
    badgeColor: 'bg-violet-100 text-violet-600',
    metrics: [
      {
        title: 'Total Donors',
        icon: Users,
        value: '—',
        color: 'text-violet-600',
        iconBg: 'bg-violet-50',
      },
      {
        title: 'Repeat Donors',
        icon: Heart,
        value: '—',
        color: 'text-violet-600',
        iconBg: 'bg-violet-50',
      },
      {
        title: 'Average Donation',
        icon: DollarSign,
        value: '₱0',
        color: 'text-violet-600',
        iconBg: 'bg-violet-50',
      },
      {
        title: 'Diaspora Contribution %',
        icon: Globe,
        value: '0%',
        color: 'text-violet-600',
        iconBg: 'bg-violet-50',
      },
    ],
  },
  {
    title: 'Transparency Metrics',
    icon: Eye,
    description: 'How open and accountable the ecosystem operates.',
    badgeColor: 'bg-cyan-100 text-cyan-600',
    metrics: [
      {
        title: 'Fund Tracking Coverage',
        icon: Eye,
        value: '0%',
        color: 'text-cyan-600',
        iconBg: 'bg-cyan-50',
      },
      {
        title: 'Reports Published',
        icon: FileCheck,
        value: '—',
        color: 'text-cyan-600',
        iconBg: 'bg-cyan-50',
      },
      {
        title: 'Avg. Time to Report',
        icon: Clock,
        value: '—',
        color: 'text-cyan-600',
        iconBg: 'bg-cyan-50',
      },
      {
        title: 'Compliance Score',
        icon: ShieldCheck,
        value: '0%',
        color: 'text-cyan-600',
        iconBg: 'bg-cyan-50',
      },
      {
        title: 'Public Inquiries Resolved',
        icon: ThumbsUp,
        value: '—',
        color: 'text-cyan-600',
        iconBg: 'bg-cyan-50',
      },
    ],
  },
]

export function PublicImpactDashboardPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Public Impact Dashboard"
        headline="Transparent metrics for the Fundraise.ph ecosystem."
        description="Our commitment to transparency extends to our own operations. This dashboard tracks the health, scale, and impact of the Fundraise.ph ecosystem — and will be updated as the platform grows."
      />

      {/* Dashboard Notice */}
      <Section>
        <div className="mb-10">
          <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Dashboard Under Development</h3>
              <p className="text-muted-foreground max-w-lg mx-auto">
                All metrics shown below are placeholders. As the Fundraise.ph ecosystem grows
                and campaigns launch on Fundraising.ph, this dashboard will be populated with
                real-time data across all six metric categories.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  Data Coming Soon
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Eye className="h-3 w-3 mr-1" />
                  Public Transparency
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <ShieldCheck className="h-3 w-3 mr-1" />
                  Verified Metrics
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Modules */}
        <div className="space-y-12">
          {dashboardModules.map((module, index) => (
            <DashboardModule key={index} {...module} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <CTABlock
          headline="Support transparent fundraising"
          subheadline="Every contribution to a verified campaign on Fundraising.ph strengthens the trust ecosystem for all Filipinos."
          primaryText="Support a Campaign on Fundraising.ph"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
