'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL } from '@/lib/trust-governance-compliance-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { TrustFrameworkStep } from '@/components/shared/trust-framework-step'
import { CheckCircle2, ShieldCheck, Compass, BarChart3, FileText, TrendingUp, Eye, Globe, Scale, Lock, Users, AlertTriangle, RefreshCw, Heart, HandHeart, Search, Megaphone, LayoutDashboard } from 'lucide-react'

const trustSteps = [
  {
    step: 1,
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Verify',
    description: 'Review campaigners, organizations, beneficiaries, supporting documents, campaign purpose, and fundraising model.',
  },
  {
    step: 2,
    icon: <Compass className="h-5 w-5" />,
    title: 'Guide',
    description: 'Provide compliance education, campaign category guidance, documentation checklists, and responsible fundraising standards.',
  },
  {
    step: 3,
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Track',
    description: 'Support transparent campaign progress, updates, payment records, donor acknowledgments, and fulfillment milestones.',
  },
  {
    step: 4,
    icon: <FileText className="h-5 w-5" />,
    title: 'Report',
    description: 'Encourage post-campaign summaries, proof of delivery, campaign completion updates, and impact reports.',
  },
  {
    step: 5,
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Improve',
    description: 'Use audits, trustee review, community feedback, data analysis, and technology upgrades to strengthen the system.',
  },
]

const trustCommitments = [
  { title: 'Campaign Visibility', description: 'Every campaign displays its purpose, organizer, beneficiary, and fundraising model clearly.', icon: Eye },
  { title: 'Donor Acknowledgment', description: 'Every donor receives acknowledgment. Gratitude is not optional — it is foundational to sustainable giving.', icon: HandHeart },
  { title: 'Use-of-Funds Reporting', description: 'Campaigners are expected to report how funds were used, with receipts, photos, and impact narratives.', icon: FileText },
  { title: 'Public Updates', description: 'Campaign progress, milestones, and outcomes should be shared with donors and supporters openly.', icon: Megaphone },
  { title: 'Verification Status', description: 'Every campaign displays its current verification level openly, so donors know what has been reviewed.', icon: ShieldCheck },
  { title: 'Donor Privacy Protection', description: 'Personal data is protected, access-controlled, and never sold.', icon: Lock },
  { title: 'Accessible Compliance Resources', description: 'Guides, templates, and references are free for all campaigners.', icon: Globe },
  { title: 'Beneficiary Dignity', description: 'Campaigns must respect consent, privacy, and human dignity. No exploitation or sensationalism.', icon: Users },
  { title: 'Post-Campaign Accountability', description: 'Mandatory reporting on fund use after every campaign closes.', icon: CheckCircle2 },
  { title: 'Community Reporting', description: 'Anyone can flag concerns through our public reporting channels.', icon: AlertTriangle },
  { title: 'Published Policies', description: 'All governance and operational policies are publicly accessible.', icon: Scale },
  { title: 'Impact-First Decisions', description: 'Every product and policy decision is evaluated through an impact lens.', icon: Heart },
]

const donorVisibilityItems = [
  'Who is organizing the campaign',
  'Who the beneficiary is and how they are connected',
  'What fundraising model is being used',
  'What the campaign goal is and how funds will be used',
  'Current verification status and review level',
  'Campaign updates, milestones, and progress',
  'Post-campaign reports and proof of delivery',
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

      <Section>
        <SectionHeading
          title="Our Trust Framework"
          subtitle="From the moment a campaign is submitted to long after it concludes, our five-step trust framework ensures every step is documented, reviewable, and improving."
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

      <Section dark>
        <SectionHeading
          title="What Donors Should Be Able to See"
          subtitle="Transparency means donors can make informed decisions before contributing. Every campaign on Fundraising.ph should make the following visible:"
          centered
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {donorVisibilityItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-navy/10"
              >
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-[#4A5568] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Our Trust Commitments"
          subtitle="These are not aspirations. They are operational commitments — built into our platform, our policies, and our governance."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {trustCommitments.map((commitment, index) => {
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

      <Section dark>
        <SectionHeading
          title="Public Impact Reporting"
          subtitle="Trust is reinforced when outcomes are visible. Fundraise.ph promotes regular public reporting so donors and communities can see the results of their generosity."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 border border-navy/10 text-center">
            <LayoutDashboard className="h-8 w-8 text-gold mx-auto mb-3" />
            <h3 className="font-bold text-navy mb-2">Transparency Dashboard</h3>
            <p className="text-sm text-[#4A5568] leading-relaxed">A future public dashboard showing campaign metrics, verification rates, and trust indicators.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-navy/10 text-center">
            <Search className="h-8 w-8 text-gold mx-auto mb-3" />
            <h3 className="font-bold text-navy mb-2">Campaign Tracking</h3>
            <p className="text-sm text-[#4A5568] leading-relaxed">Donors can track how funds move from pledge to beneficiary through transparent fund flows.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-navy/10 text-center">
            <FileText className="h-8 w-8 text-gold mx-auto mb-3" />
            <h3 className="font-bold text-navy mb-2">Impact Reports</h3>
            <p className="text-sm text-[#4A5568] leading-relaxed">Post-campaign reports detail how funds were used, with receipts, photos, and impact narratives.</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="How Transparency Builds Bayanihan"
          subtitle="Filipinos are among the most generous people on earth. When generosity is met with transparency, trust grows — and bayanihan scales."
          centered
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
            Transparency is not just a policy choice — it is a cultural value. Fundraise.ph believes that the Filipino tradition of bayanihan deserves digital infrastructure built on openness, accountability, and respect for every person who gives.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            When every campaign is verifiable, every donor is acknowledged, and every outcome is reported, the entire ecosystem of Filipino giving becomes stronger.
          </p>
        </div>
      </Section>

      <CTABlock
        headline="See trust in action"
        subheadline="Explore verified campaigns, transparent fund flows, and community-driven accountability on Fundraising.ph."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={FUNDRAISING_PH_URL}
      />
    </div>
  )
}
