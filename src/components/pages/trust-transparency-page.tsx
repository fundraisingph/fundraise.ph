'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigation } from '@/lib/navigation'
import {
  ShieldCheck,
  Compass,
  BarChart3,
  FileText,
  TrendingUp,
  CheckCircle2,
  Eye,
  Users,
  Lock,
  Globe,
  Heart,
  Scale,
  AlertTriangle,
  RefreshCw,
  ArrowRight,
} from 'lucide-react'

const trustSteps = [
  {
    step: 1,
    title: 'Verify',
    icon: ShieldCheck,
    description:
      'Every campaign undergoes identity and documentation review before going live. We confirm who is raising funds and why.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    iconBg: 'bg-emerald-100',
  },
  {
    step: 2,
    title: 'Guide',
    icon: Compass,
    description:
      'Campaigners receive step-by-step guidance on compliance, documentation, and ethical storytelling requirements.',
    color: 'text-teal-600 bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100',
  },
  {
    step: 3,
    title: 'Track',
    icon: BarChart3,
    description:
      'Fund flows, milestones, and updates are tracked and made visible to donors and the public in real time.',
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    iconBg: 'bg-cyan-100',
  },
  {
    step: 4,
    title: 'Report',
    icon: FileText,
    description:
      'Post-campaign reports detail how funds were used, with receipts, photos, and impact narratives published openly.',
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-100',
  },
  {
    step: 5,
    title: 'Improve',
    icon: TrendingUp,
    description:
      'Every cycle feeds back into our standards. We refine processes, update guidelines, and strengthen safeguards continuously.',
    color: 'text-orange-600 bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
  },
]

const transparencyCommitments = [
  {
    title: 'Public Verification Status',
    description: 'Every campaign displays its current verification level openly.',
    icon: Eye,
  },
  {
    title: 'Real-Time Fund Tracking',
    description: 'Donors can see how funds move from pledge to beneficiary.',
    icon: BarChart3,
  },
  {
    title: 'Accessible Compliance Resources',
    description: 'Guides, templates, and references are free for all campaigners.',
    icon: Globe,
  },
  {
    title: 'Independent Governance',
    description: 'Board-level oversight with no conflicts of interest in trust decisions.',
    icon: Scale,
  },
  {
    title: 'Donor Privacy Protection',
    description: 'Personal data is encrypted, access-controlled, and never sold.',
    icon: Lock,
  },
  {
    title: 'Community Reporting Mechanisms',
    description: 'Anyone can flag concerns through our public reporting channels.',
    icon: AlertTriangle,
  },
  {
    title: 'Post-Campaign Accountability',
    description: 'Mandatory reporting on fund use after every campaign closes.',
    icon: FileText,
  },
  {
    title: 'Beneficiary Consent Protocols',
    description: 'No campaign goes live without documented beneficiary awareness.',
    icon: Users,
  },
  {
    title: 'Continuous Standards Review',
    description: 'Standards are updated regularly based on community feedback and incidents.',
    icon: RefreshCw,
  },
  {
    title: 'Impact-First Decision Making',
    description: 'Every product and policy decision is evaluated through an impact lens.',
    icon: Heart,
  },
]

export function TrustTransparencyPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Trust & Transparency"
        headline="Trust is not a slogan. Trust is a system."
        description="Fundraise.ph exists to build the trust layer for Filipino fundraising. Every process, every policy, and every line of code is designed to make trust verifiable — not assumed."
      />

      {/* Trust Framework Section */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Our Trust Framework
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Five Steps to Accountable Fundraising
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From the moment a campaign is submitted to long after it concludes,
            our trust framework ensures every step is documented, reviewable, and
            improving.
          </p>
        </div>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-300 via-amber-300 to-orange-300 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {trustSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={step.step}
                  className={`border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${step.color}`}
                >
                  <CardHeader className="text-center pb-2">
                    <div
                      className={`mx-auto w-14 h-14 rounded-full ${step.iconBg} flex items-center justify-center mb-3`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                        Step {step.step}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm leading-relaxed opacity-80">
                    {step.description}
                  </CardContent>
                  {index < trustSteps.length - 1 && (
                    <div className="flex justify-center lg:hidden pb-2">
                      <ArrowRight className="h-5 w-5 opacity-40 rotate-90 lg:rotate-0" />
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Transparency Commitments Section */}
      <Section dark>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Our Commitments
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparency Commitments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These are not aspirations. They are operational commitments — built
            into our platform, our policies, and our governance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {transparencyCommitments.map((commitment, index) => {
            const Icon = commitment.icon
            return (
              <div
                key={index}
                className="group bg-card border rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm leading-snug mb-1.5">
                      {commitment.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">Committed</span>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <CTABlock
          headline="See trust in action"
          subheadline="Explore verified campaigns, transparent fund flows, and community-driven accountability on Fundraising.ph."
          primaryText="Explore Fundraising.ph"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
