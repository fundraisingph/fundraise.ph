'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PLATFORM_URL, roadmapPhases, getStatusColor } from '@/lib/technology-impact-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function TechnologyRoadmapPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['technology-roadmap'])

  return (
    <div>
      <PageHeader
        title="Technology Roadmap"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="One Mission"
          subtitle="Fundraise.ph is building the nonprofit trust and technology foundation for Filipino giving."
        />

        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <p className="text-[#4A5568] leading-relaxed">
            Our mission is to create the most trusted fundraising infrastructure for Filipinos worldwide — one that combines nonprofit governance, campaign verification, compliance awareness, donor acknowledgment, marketplace fundraising, diaspora participation, and public impact reporting.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            <strong className="text-navy">Fundraise.ph</strong> is the nonprofit trust layer.{' '}
            <strong className="text-navy">Fundraising.ph</strong> is the campaign and marketplace platform.{' '}
            Together, they are designed to strengthen <em>digital bayanihan</em> with transparency, accountability, and technology.
          </p>
        </div>

        <div className="space-y-6">
          {roadmapPhases.map((phase) => (
            <Card key={phase.phase} className="border-l-4 border-l-gold hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg">
                    {phase.phase}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="text-xl font-bold text-navy">{phase.title}</h3>
                      <Badge className={`text-xs ${getStatusColor(phase.status)}`}>
                        {phase.status}
                      </Badge>
                    </div>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <CTABlock
        headline="Join us in building the trust layer for Filipino giving."
        subheadline="Every phase of our roadmap is designed with transparency and community at its core."
        ctaLabel="Explore Campaigns on Fundraising.ph"
        ctaHref={PLATFORM_URL}
      />
    </div>
  )
}
