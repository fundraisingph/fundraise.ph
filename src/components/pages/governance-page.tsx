'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL } from '@/lib/trust-governance-compliance-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Lock,
  Eye,
  Scale,
  UsersRound,
  UserCheck,
  HeartHandshake,
  FileText,
  Users,
  Cpu,
  Shield,
  Landmark,
  Gavel,
  FileCheck,
  UserCog,
  Briefcase,
} from 'lucide-react'

interface GovernancePrinciple {
  title: string
  icon: React.ReactNode
  description: string
  details: string[]
}

const principles: GovernancePrinciple[] = [
  {
    title: 'Mission Lock',
    icon: <Lock className="h-7 w-7" />,
    description: 'The mission of Fundraise.ph cannot be changed, diluted, or redirected for commercial or personal gain.',
    details: [
      'The nonprofit mission is embedded in the Constitution and By-Laws',
      'Any amendment to the mission requires unanimous board approval and public consultation',
      'The organization cannot be converted to a for-profit entity',
      'All assets are permanently dedicated to the charitable mission',
    ],
  },
  {
    title: 'Transparency by Default',
    icon: <Eye className="h-7 w-7" />,
    description: 'All financial records, policies, decisions, and impact data are publicly accessible unless privacy law requires otherwise.',
    details: [
      'Annual financial statements published within 90 days of fiscal year end',
      'All board meeting summaries made publicly available',
      'Campaign fund flows tracked and displayed on the public impact dashboard',
      'Policies and governance documents accessible on the Compliance Library',
    ],
  },
  {
    title: 'Compliance-Aware Operations',
    icon: <Scale className="h-7 w-7" />,
    description: 'Every operational decision and feature is evaluated against Philippine regulatory requirements before implementation.',
    details: [
      'Compliance check integrated into every product development sprint',
      'Regular audits aligned with SEC, BIR, and DSWD requirements where applicable',
      'Compliance officers review all new partnerships and integrations',
      'Automated compliance flags for campaigns approaching regulatory thresholds',
    ],
  },
  {
    title: 'Conflict-of-Interest Management',
    icon: <UsersRound className="h-7 w-7" />,
    description: 'All trustees, officers, and staff must disclose conflicts of interest and recuse themselves from related decisions.',
    details: [
      'Mandatory annual conflict-of-interest disclosure for all trustees and officers',
      'Recusal policy enforced for board votes involving personal interests',
      'No trustee may benefit financially from platform campaigns or partnerships',
      'Public disclosure of any conflicts that arise during board proceedings',
    ],
  },
  {
    title: 'Human Oversight Over Automation',
    icon: <UserCheck className="h-7 w-7" />,
    description: 'AI and automated systems support but never replace human judgment in verification, compliance, and beneficiary protection.',
    details: [
      'All campaign verification decisions require human review and approval',
      'AI recommendations are advisory only; final decisions rest with designated officers',
      'Automated fund disbursement triggers require human sign-off above threshold amounts',
      'Beneficiary protection decisions always involve a qualified human reviewer',
    ],
  },
  {
    title: 'Beneficiary Dignity',
    icon: <HeartHandshake className="h-7 w-7" />,
    description: 'All interactions, content, and data concerning beneficiaries must preserve their dignity, privacy, and agency.',
    details: [
      'Beneficiaries must consent to how their stories and images are used',
      'Campaigns cannot exploit or sensationalize beneficiary hardship',
      'Beneficiary data is protected with the highest privacy standards',
      'Beneficiaries have the right to request campaign modifications or removal',
    ],
  },
]

const committees = [
  { name: 'Governance and Ethics Committee', icon: <Gavel className="h-5 w-5" />, description: 'Oversees ethical standards, trustee conduct, and governance policy compliance.' },
  { name: 'Finance and Audit Committee', icon: <Landmark className="h-5 w-5" />, description: 'Manages financial oversight, budgeting, audit coordination, and fiscal transparency.' },
  { name: 'Technology and Data Committee', icon: <Cpu className="h-5 w-5" />, description: 'Guides technology decisions, AI governance, data protection, and platform architecture.' },
  { name: 'Compliance and Risk Committee', icon: <Shield className="h-5 w-5" />, description: 'Monitors compliance awareness, risk management, regulatory review, and policy updates.' },
  { name: 'Community and Partnerships Committee', icon: <Users className="h-5 w-5" />, description: 'Manages partner relationships, community engagement, and stakeholder communication.' },
  { name: 'Beneficiary Protection Committee', icon: <HeartHandshake className="h-5 w-5" />, description: 'Ensures beneficiary dignity, consent protocols, and protection standards are maintained.' },
]

const accountabilityItems = [
  'Annual financial statements published within 90 days of fiscal year end',
  'Board meeting summaries made publicly available',
  'Campaign fund flows tracked and displayed publicly',
  'Policies and governance documents accessible on the Compliance Library',
  'Regular community feedback collection and response',
  'Trustee code of conduct publicly available',
  'Whistleblower protection for reporting concerns',
  'External audit coordination where applicable',
]

export function GovernancePage() {
  const { current: heroVar } = useRotatingContent(heroVariations['governance'])

  return (
    <div>
      <PageHeader
        title="Governance"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="Six Governance Principles"
          subtitle="These principles form the backbone of how Fundraise.ph operates. They are non-negotiable commitments embedded in our organizational DNA."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="group transition-all duration-200 hover:shadow-md hover:border-[#C8A951]/30 h-full"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-[#0A1F44]/10 text-[#0A1F44] flex items-center justify-center mb-3 group-hover:bg-[#C8A951]/15 transition-colors">
                  {principle.icon}
                </div>
                <CardTitle className="text-xl text-[#0A1F44]">{principle.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">
                  {principle.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {principle.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start gap-2 text-sm text-[#4A5568]"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C8A951] flex-shrink-0 mt-1.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Committees"
          subtitle="Specialized committees provide focused oversight in key areas of governance, risk, technology, and community."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="group bg-white border border-navy/10 rounded-xl p-5 hover:shadow-md hover:border-gold/40 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0 group-hover:bg-trust-blue/20 transition-colors">
                  {committee.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-navy leading-snug mb-1.5">{committee.name}</h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">{committee.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Accountability to the Public"
          subtitle="Governance at Fundraise.ph is not a checkbox — it is a living practice. Every trustee, officer, and team member is bound by these principles."
          centered
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {accountabilityItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-light-gray border border-navy/10"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                <span className="text-[#4A5568] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <Card className="border-[#C8A951]/20 bg-gradient-to-br from-[#0A1F44]/5 to-[#0A1F44]/10">
          <CardContent className="p-6 md:p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#0A1F44] mb-4">
                Our Commitment to Accountable Governance
              </h3>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                Governance at Fundraise.ph is not a checkbox — it is a living
                practice. Every trustee, officer, and team member is bound by
                these principles, and every policy is subject to public scrutiny
                and continuous improvement.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                We believe that the communities we serve deserve nothing less
                than full accountability. When trust is the product, governance
                is the foundation.
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>

      <CTABlock
        headline="Trust is built on transparency."
        subheadline="Explore our governance framework, review our policies, and hold us accountable. Public trust is our most valuable asset."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={FUNDRAISING_PH_URL}
      />
    </div>
  )
}
