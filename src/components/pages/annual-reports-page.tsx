'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigation } from '@/lib/navigation'
import {
  FileText,
  BarChart3,
  Users,
  ShieldCheck,
  DollarSign,
  Heart,
  Globe,
  Scale,
  Megaphone,
  AlertTriangle,
  TrendingUp,
  Clock,
  Archive,
  Calendar,
  BookOpen,
  Target,
} from 'lucide-react'

const reportSections = [
  {
    title: 'Letter from the Trustees',
    description: 'An annual message from the Fundraise.ph trustees reflecting on the year, challenges faced, and vision for the future.',
    icon: BookOpen,
  },
  {
    title: 'Mission & Impact Summary',
    description: 'A concise summary of how Fundraise.ph advanced its mission, including key milestones and strategic decisions.',
    icon: Target,
  },
  {
    title: 'Campaign Statistics & Outcomes',
    description: 'Detailed breakdown of campaigns launched, completed, funded, and their verified outcomes.',
    icon: BarChart3,
  },
  {
    title: 'Financial Overview',
    description: 'Full disclosure of funds received, disbursed, retained, and allocated — with clear categorization.',
    icon: DollarSign,
  },
  {
    title: 'Verification & Compliance Report',
    description: 'Summary of verification activities, compliance reviews conducted, and any actions taken.',
    icon: ShieldCheck,
  },
  {
    title: 'Donor Demographics & Trends',
    description: 'Anonymized, aggregated data on donor behavior, giving patterns, and diaspora participation.',
    icon: Users,
  },
  {
    title: 'Beneficiary Impact Stories',
    description: 'Narratives from campaign beneficiaries sharing how funds were used and what changed in their lives.',
    icon: Heart,
  },
  {
    title: 'Marketplace Activity Report',
    description: 'Data on product-based fundraising activity, seller participation, and marketplace-driven campaign support.',
    icon: Globe,
  },
  {
    title: 'Governance & Decision-Making',
    description: 'Record of board decisions, policy changes, governance improvements, and conflict-of-interest disclosures.',
    icon: Scale,
  },
  {
    title: 'Community Feedback & Reports',
    description: 'Summary of community-submitted reports, concerns raised, and how they were addressed.',
    icon: AlertTriangle,
  },
  {
    title: 'Technology & Platform Development',
    description: 'Overview of platform updates, security improvements, and technology roadmap progress.',
    icon: TrendingUp,
  },
  {
    title: 'Plans for the Coming Year',
    description: 'Strategic priorities, planned features, and goals for the next reporting period.',
    icon: Megaphone,
  },
]

export function AnnualReportsPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Annual Reports"
        headline="Public accountability through transparent reporting."
        description="Every year, Fundraise.ph publishes a comprehensive report covering operations, finances, impact, governance, and community feedback. Accountability is not optional — it is foundational."
      />

      {/* What Each Report Includes */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Report Structure
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Every Annual Report Includes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each annual report follows a standardized structure to ensure completeness, comparability, and public accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {reportSections.map((section, index) => {
            const Icon = section.icon
            return (
              <div
                key={index}
                className="group bg-card border rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-semibold text-sm leading-snug mb-2">
                  {section.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* First Annual Report Placeholder */}
      <Section dark>
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4 text-sm">
            First Report
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inaugural Annual Report
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our first annual report will be published once Fundraise.ph completes its first full year of operations. It will set the standard for everything that follows.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="border-2 border-dashed border-muted-foreground/30 bg-muted/20">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-muted-foreground/50" />
              </div>
              <Badge variant="outline" className="mb-4 bg-amber-50 text-amber-700 border-amber-200">
                <Clock className="h-3 w-3 mr-1" />
                Coming Soon
              </Badge>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Fundraise.ph Annual Report — Year 1
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This report will cover the full scope of our first year: campaigns verified, funds tracked, trust built, and lessons learned. Every section listed above will be addressed.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <span>To be published after the first full year of operations</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Report Archive */}
      <Section>
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4 text-sm">
            Archive
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Report Archive
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            All published annual reports will be archived here for permanent public access.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="border-2 border-dashed border-muted-foreground/20">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                <Archive className="h-8 w-8 text-muted-foreground/40" />
              </div>
              <p className="text-muted-foreground font-medium mb-1">No reports published yet</p>
              <p className="text-sm text-muted-foreground/70">
                Annual reports will appear here as they are published.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <CTABlock
          headline="Accountability is not a feature — it is the foundation"
          subheadline="When our first annual report is published, every number will be verifiable, every decision documented, and every impact traceable. In the meantime, explore how we are building that trust."
          primaryText="Learn About Our Trust Framework"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
