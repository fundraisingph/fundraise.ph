'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PLATFORM_URL } from '@/lib/technology-impact-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Database, FileText, BarChart3, Code, ShieldCheck, Lock, Clock, Info } from 'lucide-react'

const dataCategories = [
  { icon: <BarChart3 className="h-6 w-6" />, title: 'Trust Metrics', description: 'Aggregate verification rates, campaign completion rates, and platform-wide trust indicators.', status: 'Planned' },
  { icon: <FileText className="h-6 w-6" />, title: 'Research Briefs', description: 'Periodic research publications on Filipino giving patterns, diaspora trends, and fundraising best practices.', status: 'Planned' },
  { icon: <Code className="h-6 w-6" />, title: 'Future API Concepts', description: 'Conceptual plans for public APIs that could provide anonymized trust metrics to researchers and partners.', status: 'Future Phase' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'Verification Analytics', description: 'Aggregated verification statistics, review timelines, and badge distribution across campaign types.', status: 'Planned' },
]

export function OpenDataResearchPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['open-data-research'])

  return (
    <div>
      <PageHeader
        title="Open Data & Research"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="Privacy Safeguard"
          subtitle="This is a mandatory privacy disclosure for all open data and research activities."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <div className="bg-light-gray border border-navy/10 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0">
                <Lock className="h-6 w-6" />
              </div>
              <p className="text-[#4A5568] leading-relaxed text-sm">
                Fundraise.ph will not publish private donor data, sensitive beneficiary information, medical records, personal documents, or personally identifiable information (PII) without proper consent and lawful basis. Open data uses aggregated, anonymized, or privacy-protected information. All research and data sharing activities are governed by our Data Protection Policy and Technology Governance principles.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Data Categories"
          subtitle="The types of open data and research Fundraise.ph plans to publish."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataCategories.map((cat, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                    {cat.icon}
                  </div>
                  <Badge variant="outline" className="text-xs bg-light-gray text-[#4A5568] border-navy/10">
                    <Clock className="h-3 w-3 mr-1" />
                    {cat.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-navy">{cat.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">{cat.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <Database className="h-12 w-12 text-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-navy mb-4">Open Data Commitment</h3>
          <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
            Fundraise.ph is committed to transparency through open data — but only when that data is aggregated, anonymized, and privacy-protected. We will never sacrifice donor privacy or beneficiary dignity for the sake of public metrics.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            Our open data program will develop alongside the platform, publishing research and trust metrics only when we have real, verifiable data to share.
          </p>
        </div>
      </Section>

      <CTABlock
        headline="Transparency through open data. Privacy by design."
        subheadline="Visit Fundraising.ph to see how transparency is built into every campaign."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={PLATFORM_URL}
      />
    </div>
  )
}
