'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { TrustFrameworkStep } from '@/components/shared/trust-framework-step'
import { CheckCircle2, ShieldCheck, Compass, BarChart3, FileText, TrendingUp, Eye, Globe, Scale, Lock, Users, AlertTriangle, RefreshCw, Heart } from 'lucide-react'

const trustSteps = [
  {
    step: 1,
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Verify',
    description:
      'Every campaign undergoes identity and documentation review before going live. We confirm who is raising funds and why.',
  },
  {
    step: 2,
    icon: <Compass className="h-5 w-5" />,
    title: 'Guide',
    description:
      'Campaigners receive step-by-step guidance on compliance, documentation, and ethical storytelling requirements.',
  },
  {
    step: 3,
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Track',
    description:
      'Fund flows, milestones, and updates are tracked and made visible to donors and the public in real time.',
  },
  {
    step: 4,
    icon: <FileText className="h-5 w-5" />,
    title: 'Report',
    description:
      'Post-campaign reports detail how funds were used, with receipts, photos, and impact narratives published openly.',
  },
  {
    step: 5,
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Improve',
    description:
      'Every cycle feeds back into our standards. We refine processes, update guidelines, and strengthen safeguards continuously.',
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
  const { current: heroVar } = useRotatingContent(heroVariations['trust-transparency'])

  return (
    <div>
      <PageHeader
        title="Trust & Transparency"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      {/* Trust Framework Section */}
      <Section>
        <SectionHeading
          title="Five Steps to Accountable Fundraising"
          subtitle="From the moment a campaign is submitted to long after it concludes, our trust framework ensures every step is documented, reviewable, and improving."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustSteps.map((step) => (
            <TrustFrameworkStep
              key={step.step}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Section>

      {/* Transparency Commitments Section */}
      <Section dark>
        <SectionHeading
          title="Transparency Commitments"
          subtitle="These are not aspirations. They are operational commitments — built into our platform, our policies, and our governance."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {transparencyCommitments.map((commitment, index) => {
            const Icon = commitment.icon
            return (
              <div
                key={index}
                className="group bg-white border border-navy/10 rounded-xl p-5 hover:shadow-md hover:border-gold/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0 group-hover:bg-trust-blue/20 transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-navy leading-snug mb-1.5">
                      {commitment.title}
                    </h3>
                    <p className="text-xs text-[#4A5568] leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-trust-blue">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">Committed</span>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <CTABlock
        headline="See trust in action"
        subheadline="Explore verified campaigns, transparent fund flows, and community-driven accountability on Fundraising.ph."
      />
    </div>
  )
}
