'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigation } from '@/lib/navigation'
import {
  UserCheck,
  FileSearch,
  LayoutList,
  MessageSquareHeart,
  Handshake,
  ClipboardCheck,
  ChevronRight,
} from 'lucide-react'

const standards = [
  {
    id: 'identity',
    number: '01',
    title: 'Campaign Identity',
    icon: UserCheck,
    summary: 'Clear attribution of who is raising funds and on whose behalf.',
    details: [
      'Full legal name or organization name must be displayed prominently.',
      'Campaign organizers must disclose their relationship to the beneficiary.',
      'Third-party fundraisers must declare their role and any fees or commissions.',
      'Profile verification status must be visible on the campaign page.',
    ],
    badge: 'Required',
    badgeVariant: 'default' as const,
  },
  {
    id: 'documentation',
    number: '02',
    title: 'Documentation',
    icon: FileSearch,
    summary: 'Verifiable documents must support every fundraising claim.',
    details: [
      'Medical campaigns must include diagnoses, hospital letters, or cost estimates.',
      'Educational campaigns must provide enrollment records or tuition documents.',
      'Community projects must include project plans, budgets, or LGU endorsements.',
      'All documents are reviewed by the Fundraise.ph verification team.',
    ],
    badge: 'Required',
    badgeVariant: 'default' as const,
  },
  {
    id: 'fundraising-model',
    number: '03',
    title: 'Fundraising Model Disclosure',
    icon: LayoutList,
    summary: 'Campaigners must clearly state how funds will be collected and used.',
    details: [
      'Each campaign must declare its fundraising model from the following categories:',
    ],
    subList: [
      'Donation — Pure charitable giving with no exchange of goods or services.',
      'Sponsorship — Sponsor-based funding tied to events, programs, or deliverables.',
      'Marketplace Purchase — Products or goods sold with proceeds supporting a cause.',
      'Pre-order — Advance purchase of a product still in development or production.',
      'Membership / Subscription — Recurring contributions in exchange for ongoing access or benefits.',
      'Reward-Based — Tiered giving with non-financial rewards or recognition at each level.',
    ],
    detailContinuation: [
      'The chosen model determines applicable compliance requirements.',
      'Mixed-model campaigns must disclose each component separately.',
    ],
    badge: 'Required',
    badgeVariant: 'default' as const,
  },
  {
    id: 'donor-communication',
    number: '04',
    title: 'Donor Communication',
    icon: MessageSquareHeart,
    summary: 'Donors deserve timely, honest, and meaningful updates.',
    details: [
      'Campaigners must provide at least one public update every 30 days during active campaigns.',
      'Major milestones (e.g., fund disbursement, surgery date, project completion) must be reported promptly.',
      'If a campaign is paused, cancelled, or significantly altered, donors must be notified within 48 hours.',
      'Communication must be factual — no misleading urgency or emotional manipulation.',
    ],
    badge: 'Required',
    badgeVariant: 'default' as const,
  },
  {
    id: 'beneficiary-consent',
    number: '05',
    title: 'Beneficiary Consent',
    icon: Handshake,
    summary: 'No one should be the subject of a campaign without their knowledge.',
    details: [
      'Beneficiaries must be informed that a campaign is being created on their behalf.',
      'Written or recorded consent must be obtained before the campaign goes live.',
      'If the beneficiary is a minor or incapacitated, a legal guardian must provide consent.',
      'Beneficiaries have the right to request campaign modifications or takedown.',
    ],
    badge: 'Required',
    badgeVariant: 'default' as const,
  },
  {
    id: 'post-campaign-reporting',
    number: '06',
    title: 'Post-Campaign Reporting',
    icon: ClipboardCheck,
    summary: 'Accountability does not end when the campaign does.',
    details: [
      'Campaigners must submit a post-campaign report within 60 days of campaign closure.',
      'Reports must include fund disbursement details, receipts, and impact narratives.',
      'Photographic or documentary evidence of fund use is strongly encouraged.',
      'Failure to submit a report may affect the campaigner\'s ability to create future campaigns.',
    ],
    badge: 'Required',
    badgeVariant: 'default' as const,
  },
]

export function CampaignStandardsPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Campaign Standards"
        headline="Raising funds responsibly starts with clear standards."
        description="Fundraise.ph sets the standards that every campaign on Fundraising.ph must follow. These standards protect donors, beneficiaries, and the integrity of Filipino fundraising."
      />

      {/* Standards Grid */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Campaign Standards
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Six Standards for Responsible Fundraising
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every campaign on Fundraising.ph must adhere to these standards. They
            are non-negotiable and enforced through our verification process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {standards.map((standard) => {
            const Icon = standard.icon
            return (
              <Card
                key={standard.id}
                className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          Standard {standard.number}
                        </span>
                        <CardTitle className="text-xl mt-0.5">
                          {standard.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge variant={standard.badgeVariant} className="shrink-0">
                      {standard.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {standard.summary}
                  </p>
                  <ul className="space-y-2.5">
                    {standard.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-foreground/80 leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {standard.subList && (
                    <div className="mt-4 ml-4 pl-4 border-l-2 border-emerald-200">
                      <ul className="space-y-2">
                        {standard.subList.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                            <span className="text-foreground/80 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {standard.detailContinuation && (
                    <ul className="space-y-2.5 mt-4">
                      {standard.detailContinuation.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-foreground/80 leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <CTABlock
          headline="Ready to fundraise responsibly?"
          subheadline="Create a campaign that meets every standard. Fundraising.ph walks you through each requirement step by step."
          primaryText="Create a Campaign on Fundraising.ph"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
