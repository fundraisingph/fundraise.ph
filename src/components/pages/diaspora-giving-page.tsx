'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigation } from '@/lib/navigation'
import {
  Globe,
  ShieldCheck,
  CreditCard,
  Heart,
  Users,
  BarChart3,
  Bell,
  FileText,
  MessageSquare,
  HandCoins,
  MapPin,
  Send,
  Wallet,
  Eye,
  Award,
  Clock,
  ArrowRight,
} from 'lucide-react'

const diasporaFeatures = [
  {
    title: 'Verified Campaign Discovery',
    description: 'Browse campaigns that have been vetted through our verification framework, so you know your support reaches real causes.',
    icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Secure International Payments',
    description: 'Support campaigns using trusted payment methods available in your country of residence, with clear conversion and fee transparency.',
    icon: CreditCard,
    color: 'bg-teal-50 text-teal-600',
  },
  {
    title: 'Campaign Progress Tracking',
    description: 'Follow the campaigns you support with real-time updates, milestone notifications, and fund flow visibility.',
    icon: BarChart3,
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    title: 'Post-Campaign Impact Reports',
    description: 'Receive detailed reports showing how your contribution was used, with photos, receipts, and beneficiary updates.',
    icon: FileText,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Community Endorsements',
    description: 'See which campaigns are endorsed by local community leaders, organizations, and trusted community members.',
    icon: Users,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Diaspora-Specific Campaign Filters',
    description: 'Find campaigns specifically seeking diaspora support, or filter by region, cause type, or beneficiary location.',
    icon: Globe,
    color: 'bg-violet-50 text-violet-600',
  },
  {
    title: 'Milestone Notifications',
    description: 'Get notified when campaigns you support hit key milestones — funding goals reached, funds delivered, or impact reported.',
    icon: Bell,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Donor Privacy Protection',
    description: 'Your personal data is encrypted and never shared. Choose to give anonymously or publicly — always on your terms.',
    icon: Eye,
    color: 'bg-slate-50 text-slate-600',
  },
  {
    title: 'Community Messaging',
    description: 'Connect with campaigners, beneficiaries, and fellow supporters through moderated community channels.',
    icon: MessageSquare,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    title: 'Recurring Support Options',
    description: 'Set up recurring contributions to causes you care about, with full control over frequency, amount, and cancellation.',
    icon: HandCoins,
    color: 'bg-green-50 text-green-600',
  },
]

export function DiasporaGivingPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Diaspora Giving"
        headline="Helping overseas Filipinos support trusted causes back home."
        description="Millions of Filipinos live and work abroad — and their desire to give back is powerful. Fundraise.ph and Fundraising.ph ensure that desire meets trust, transparency, and real impact."
      />

      {/* Context Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4 text-sm">
            The Diaspora Connection
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Millions of Filipinos, One Shared Purpose
          </h2>

          <div className="space-y-5">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Over 10 million Filipinos live and work overseas. They are nurses in the Middle East, engineers in North America, maritime workers across every ocean, teachers in Asia, and caregivers in Europe. They send home billions in remittances each year — and they want to do more than support their own families.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Many overseas Filipinos want to support medical campaigns for neighbors back home, contribute to disaster relief for their province, fund scholarships for their alma mater, or help rebuild the church they grew up attending. But finding trustworthy channels for that giving has always been the challenge.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fundraise.ph exists to solve that challenge. By building the trust layer for Filipino fundraising, we make it possible for any Filipino — wherever they are in the world — to support verified campaigns with confidence.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="text-center border-2 border-emerald-200 bg-emerald-50/30">
              <CardContent className="pt-6">
                <Globe className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">10M+</p>
                <p className="text-sm text-muted-foreground">Overseas Filipinos worldwide</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-amber-200 bg-amber-50/30">
              <CardContent className="pt-6">
                <Wallet className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">$36B+</p>
                <p className="text-sm text-muted-foreground">Annual remittances to the Philippines</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-teal-200 bg-teal-50/30">
              <CardContent className="pt-6">
                <Heart className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">Growing</p>
                <p className="text-sm text-muted-foreground">Desire to support community causes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Features for Diaspora Supporters */}
      <Section dark>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            For Diaspora Supporters
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Overseas Filipinos Who Want to Give Back
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every feature on Fundraising.ph is designed with trust and accessibility in mind — especially for Filipinos supporting causes from abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {diasporaFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-card border rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${feature.color}`}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm leading-snug mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Trust Message */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <Award className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Distance Should Not Mean Doubt
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            For too long, overseas Filipinos have had to rely on forwarded messages, unverified social media posts, or word-of-mouth to decide where to send help. Fundraise.ph changes that by making verification, tracking, and accountability the default — not the exception.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you are in Dubai, Toronto, Singapore, London, or Riyadh — you deserve the same confidence in your giving as someone standing next to the beneficiary. That is what we build.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <CTABlock
          headline="Your bayanihan has no borders"
          subheadline="Whether you are across the street or across the world, Fundraising.ph makes your support count with trust and transparency."
          primaryText="Support Filipino Campaigns on Fundraising.ph"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
