'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Lock,
  Eye,
  Scale,
  UsersRound,
  UserCheck,
  HeartHandshake,
  FileText,
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
    description:
      'The mission of Fundraise.ph cannot be changed, diluted, or redirected for commercial or personal gain.',
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
    description:
      'All financial records, policies, decisions, and impact data are publicly accessible unless privacy law requires otherwise.',
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
    description:
      'Every operational decision and feature is evaluated against Philippine regulatory requirements before implementation.',
    details: [
      'Compliance check integrated into every product development sprint',
      'Regular audits aligned with SEC, BIR, and DSWD requirements',
      'Compliance officers review all new partnerships and integrations',
      'Automated compliance flags for campaigns approaching regulatory thresholds',
    ],
  },
  {
    title: 'Conflict-of-Interest Management',
    icon: <UsersRound className="h-7 w-7" />,
    description:
      'All trustees, officers, and staff must disclose conflicts of interest and recuse themselves from related decisions.',
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
    description:
      'AI and automated systems support but never replace human judgment in verification, compliance, and beneficiary protection.',
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
    description:
      'All interactions, content, and data concerning beneficiaries must preserve their dignity, privacy, and agency.',
    details: [
      'Beneficiaries must consent to how their stories and images are used',
      'Campaigns cannot exploit or sensationalize beneficiary hardship',
      'Beneficiary data is protected with the highest privacy standards',
      'Beneficiaries have the right to request campaign modifications or removal',
    ],
  },
]

const policiesToPublish = [
  'Constitution and By-Laws',
  'Code of Ethics and Conduct',
  'Conflict of Interest Policy',
  'Whistleblower Protection Policy',
  'Financial Controls and Audit Policy',
  'Data Privacy and Protection Policy',
  'Campaign Verification Framework',
  'Beneficiary Protection Policy',
  'Anti-Money Laundering Policy',
  'Donor Rights and Privacy Policy',
  'AI and Automation Governance Policy',
  'Partnership and Sponsorship Policy',
  'Fund Disbursement and Tracking Policy',
  'Grievance and Dispute Resolution Policy',
  'Board Governance and Election Policy',
  'Public Transparency and Reporting Policy',
]

export function GovernancePage() {
  return (
    <div>
      <PageHeader
        title="Governance"
        headline="Public trust begins with internal discipline."
        description="Fundraise.ph is governed by principles that ensure every decision, every policy, and every action is accountable, transparent, and aligned with our mission to serve Filipino communities."
      />

      <Section>
        {/* Governance Principles */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Six Governance Principles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles form the backbone of how Fundraise.ph operates.
              They are non-negotiable commitments embedded in our organizational
              DNA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <Card
                key={index}
                className="group transition-all duration-200 hover:shadow-md hover:border-primary/30"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                    {principle.icon}
                  </div>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {principle.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Policies to Publish */}
        <div className="mb-16">
          <Section dark>
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <FileText className="h-7 w-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Policies to Publish
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                As part of our commitment to transparency by default, the
                following 16 governance and operational policies will be
                publicly accessible on the Compliance Library once finalized.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {policiesToPublish.map((policy, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium border-primary/20 hover:bg-primary/5 transition-colors cursor-default"
                >
                  {policy}
                </Badge>
              ))}
            </div>
          </Section>
        </div>

        {/* Governance Commitment */}
        <div className="mb-16">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-6 md:p-8">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Our Commitment to Accountable Governance
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Governance at Fundraise.ph is not a checkbox — it is a living
                  practice. Every trustee, officer, and team member is bound by
                  these principles, and every policy is subject to public
                  scrutiny and continuous improvement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that the communities we serve deserve nothing less
                  than full accountability. When trust is the product, governance
                  is the foundation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <CTABlock
          headline="Trust is built on transparency."
          subheadline="Explore our governance framework, review our policies, and hold us accountable. Public trust is our most valuable asset."
          primaryText="View Compliance Library"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
