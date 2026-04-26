'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
import { useNavigation } from '@/lib/navigation'
import {
  Shield,
  FileCheck,
  BookOpen,
  Scale,
  Users,
  Heart,
  Globe,
  Eye,
  Award,
  Landmark,
  Rocket,
  CreditCard,
  BarChart3,
  MessageCircle,
  Megaphone,
  Smartphone,
  Wallet,
  HandHeart,
  Bell,
  Search,
} from 'lucide-react'

const fundraiseFocus = [
  { icon: Shield, title: 'Trust & Verification Standards', description: 'Define and enforce the standards that make fundraising trustworthy.' },
  { icon: FileCheck, title: 'Campaign Verification', description: 'Verify campaign legitimacy, identities, and documentation.' },
  { icon: BookOpen, title: 'Compliance & Legal Awareness', description: 'Educate and advocate for SEC, BIR, and data privacy compliance.' },
  { icon: Scale, title: 'Policy & Advocacy', description: 'Advocate for donor protection and ethical fundraising regulation.' },
  { icon: Eye, title: 'Transparency Frameworks', description: 'Build the systems that make fund flows visible and accountable.' },
  { icon: Users, title: 'Community Trust Building', description: 'Foster a culture of accountability and trust in digital fundraising.' },
  { icon: Award, title: 'Standards & Best Practices', description: 'Publish guidelines and best practices for responsible fundraising.' },
  { icon: Landmark, title: 'Governance & Oversight', description: 'Provide organizational governance and independent oversight.' },
  { icon: Globe, title: 'Diaspora Engagement', description: 'Ensure overseas Filipinos have a trusted channel to give back.' },
  { icon: Heart, title: 'Public Interest Mission', description: 'Operate as a nonprofit trust body serving the public good.' },
]

const fundraisingFocus = [
  { icon: Rocket, title: 'Campaign Launch & Management', description: 'Create, manage, and run fundraising campaigns from start to finish.' },
  { icon: CreditCard, title: 'Donation Processing', description: 'Accept donations through secure, verified payment channels.' },
  { icon: BarChart3, title: 'Real-Time Impact Tracking', description: 'Track donations, fund usage, and campaign progress in real time.' },
  { icon: MessageCircle, title: 'Donor-Beneficiary Communication', description: 'Enable direct updates, stories, and gratitude between parties.' },
  { icon: Megaphone, title: 'Campaign Promotion', description: 'Help campaigns reach donors through sharing tools and visibility.' },
  { icon: Smartphone, title: 'Mobile-First Experience', description: 'Built for the way Filipinos give — on mobile, on the go.' },
  { icon: Wallet, title: 'Transparent Fund Disbursement', description: 'Ensure funds reach beneficiaries with clear, documented flows.' },
  { icon: HandHeart, title: 'Verified Campaigns Only', description: 'Only campaigns verified by Fundraise.ph appear on the platform.' },
  { icon: Bell, title: 'Donor Updates & Notifications', description: 'Keep donors informed with automatic campaign milestones and updates.' },
  { icon: Search, title: 'Discover Trusted Campaigns', description: 'Browse and search verified campaigns by category, location, and need.' },
]

export function FundraiseVsFundraisingPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Fundraise.ph and Fundraising.ph"
        headline="One mission. One platform. Two clear roles."
        description="Fundraise.ph is the trust layer. Fundraising.ph is the platform. Together, they create a complete, trust-first fundraising ecosystem for Filipinos."
      />

      {/* Comparison */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fundraise.ph Card */}
          <Card className="border-2 border-primary/30 bg-primary/5 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary p-6 md:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-foreground">Fundraise.ph</h2>
                </div>
                <p className="text-primary-foreground/80 text-base">
                  The nonprofit trust organization — building the trust layer for Filipino fundraising.
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  Focus Areas
                </h3>
                {fundraiseFocus.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Fundraising.ph Card */}
          <Card className="border-2 border-amber-500/30 bg-amber-50 dark:bg-amber-950/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-amber-500 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Fundraising.ph</h2>
                </div>
                <p className="text-white/80 text-base">
                  The trust-enabled platform — where verified campaigns come to life.
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-4">
                  Focus Areas
                </h3>
                {fundraisingFocus.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-9 h-9 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors mt-0.5">
                        <Icon className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Recommended Statement */}
      <Section dark>
        <Card className="max-w-4xl mx-auto border-l-4 border-l-primary bg-primary/5 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="text-center">
              <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
                Fundraise.ph is not just building a website. It is building a{' '}
                <span className="text-primary">trust-first Filipino fundraising infrastructure</span>.{' '}
                Fundraising.ph is the platform that brings this infrastructure to life.
              </p>
              <p className="text-muted-foreground mt-4 text-base max-w-2xl mx-auto">
                One sets the standards. The other delivers the experience. Together, they ensure that 
                every peso given reaches its destination — and every Filipino who needs help can find it 
                through a system built on trust.
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* CTA */}
      <Section>
        <CTABlock
          headline="Experience trust-first fundraising"
          subheadline="See how Fundraise.ph and Fundraising.ph work together to create a safer, more transparent giving experience for every Filipino."
          primaryText="Go to Fundraising.ph Platform"
          secondaryText="Learn About Our Verification Framework"
          secondaryOnClick={() => navigate('verification-framework')}
        />
      </Section>
    </div>
  )
}
