'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PLATFORM_URL } from '@/lib/technology-impact-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Globe, MapPin, Scale, DollarSign, BookOpen, Users, Bell } from 'lucide-react'

const features = [
  { icon: <MapPin className="h-6 w-6" />, title: 'Hometown Discovery', description: 'Technology to help overseas Filipinos find and support verified campaigns in their home provinces, cities, and barangays.', status: 'Future Phase' },
  { icon: <Globe className="h-6 w-6" />, title: 'Campaign Location Mapping', description: 'Interactive maps showing campaign locations, beneficiary areas, and community impact across the Philippines.', status: 'Future Phase' },
  { icon: <Scale className="h-6 w-6" />, title: 'Cross-Border Compliance Awareness', description: 'Educational guidance about international fund transfer considerations, foreign donation reporting, and cross-border compliance.', status: 'Future Phase' },
  { icon: <DollarSign className="h-6 w-6" />, title: 'Multi-Currency Planning', description: 'Planning for multi-currency support to enable donations in major currencies while maintaining transparent fund flows.', status: 'Future Phase' },
  { icon: <BookOpen className="h-6 w-6" />, title: 'International Donor Education', description: 'Resources and guides for overseas Filipinos on responsible giving, verification standards, and transparent campaign support.', status: 'Future Phase' },
  { icon: <Users className="h-6 w-6" />, title: 'Diaspora Chapter Partnerships', description: 'Partnership framework for Filipino diaspora organizations, alumni groups, and hometown associations.', status: 'Future Phase' },
  { icon: <Bell className="h-6 w-6" />, title: 'Supporter Communication', description: 'Communication preferences and update delivery for international donors across time zones and channels.', status: 'Future Phase' },
]

export function DiasporaGivingTechnologyPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['diaspora-giving-technology'])

  return (
    <div>
      <PageHeader
        title="Diaspora Giving Technology"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="Technology for Overseas Filipinos"
          subtitle="Over 10 million overseas Filipinos send support home every year. Fundraise.ph is building technology that makes diaspora giving transparent, verified, and compliance-aware."
          centered
        />
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[#4A5568] text-lg leading-relaxed">
            The Filipino diaspora is one of the most generous communities in the world. They deserve technology that makes their giving visible, acknowledged, and accountable — connecting them directly to verified campaigns in their hometowns and communities.
          </p>
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Planned Features"
          subtitle="These diaspora giving features are in the planning phase. Development timelines depend on platform growth and partnership development."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg text-navy">{feature.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-xs font-medium text-[#4A5568]/60">{feature.status}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <CTABlock
        headline="Bayanihan without borders."
        subheadline="Visit Fundraising.ph to explore verified campaigns that overseas Filipinos can support today."
        ctaLabel="Start or Support a Campaign"
        ctaHref={PLATFORM_URL}
      />
    </div>
  )
}
