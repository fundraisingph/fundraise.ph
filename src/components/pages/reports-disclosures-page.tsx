'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL } from '@/lib/trust-governance-compliance-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  DollarSign,
  Users,
  BarChart3,
  Cpu,
  Eye,
  ShieldCheck,
  BookOpen,
  Clock,
} from 'lucide-react'

const reportCategories = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Annual Reports',
    description: 'Comprehensive yearly reports covering organizational activities, governance developments, campaign metrics, and financial summaries.',
    status: 'Planned',
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: 'Financial Summaries',
    description: 'Regular financial disclosures showing revenue, expenses, fund allocations, and fiscal accountability to the public.',
    status: 'Planned',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Trustee Reports',
    description: 'Updates from the Board of Trustees on governance decisions, policy changes, strategic direction, and organizational health.',
    status: 'Planned',
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Impact Reports',
    description: 'Reports on campaign outcomes, beneficiary impact, community reach, and the measurable results of Filipino generosity.',
    status: 'Planned',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Technology Roadmap Updates',
    description: 'Progress updates on platform development, feature releases, security improvements, and technology infrastructure.',
    status: 'Planned',
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Campaign Trust Metrics',
    description: 'Aggregate metrics on campaign verification rates, completion rates, reporting compliance, and trust indicator trends.',
    status: 'Planned',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Public Disclosures',
    description: 'Governance disclosures, conflict-of-interest statements, policy changes, and other matters of public interest.',
    status: 'Planned',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Independent Reviews',
    description: 'Results of any independent audits, reviews, or assessments conducted by external parties, where applicable.',
    status: 'Planned',
  },
]

export function ReportsDisclosuresPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['reports-disclosures'])

  return (
    <div>
      <PageHeader
        title="Reports & Disclosures"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="Report Categories"
          subtitle="Fundraise.ph is committed to publishing regular reports across the following categories."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportCategories.map((category, index) => (
            <Card
              key={index}
              className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full flex flex-col"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                  {category.icon}
                </div>
                <CardTitle className="text-lg text-navy">{category.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Badge variant="secondary" className="text-xs bg-light-gray text-[#4A5568] border border-navy/10">
                  <Clock className="h-3 w-3 mr-1" />
                  {category.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white border border-navy/10 rounded-2xl p-8 md:p-12">
            <FileText className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-navy mb-4">Reports Coming Soon</h3>
            <p className="text-[#4A5568] text-lg leading-relaxed">
              As Fundraise.ph develops, this page will provide public access to annual reports, financial summaries, trustee updates, impact reports, governance disclosures, and technology progress reports.
            </p>
            <p className="text-[#4A5568] mt-4 leading-relaxed">
              Transparency by default means publishing regularly — not just when asked. We are building the reporting infrastructure alongside the trust infrastructure.
            </p>
          </div>
        </div>
      </Section>

      <CTABlock
        headline="Accountability is ongoing, not occasional."
        subheadline="Visit Fundraising.ph to see how transparency is built into every campaign from the start."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={FUNDRAISING_PH_URL}
      />
    </div>
  )
}
