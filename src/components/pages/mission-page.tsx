'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
import {
  Shield,
  MonitorSmartphone,
  FileCheck,
  MessageCircle,
  BookOpen,
  Code,
  Globe,
  Target,
  Eye,
} from 'lucide-react'

const objectives = [
  {
    number: 1,
    icon: Shield,
    title: 'Build Public Trust',
    description:
      'Establish Fundraise.ph as a credible, independent trust body that verifies campaigns, enforces standards, and advocates for donor confidence in Filipino online fundraising.',
  },
  {
    number: 2,
    icon: MonitorSmartphone,
    title: 'Support Responsible Digital Fundraising',
    description:
      'Encourage ethical and transparent fundraising practices by providing guidelines, education, and resources that help campaign organizers do things right from the start.',
  },
  {
    number: 3,
    icon: FileCheck,
    title: 'Promote Verification',
    description:
      'Develop and maintain a robust verification framework that confirms the legitimacy of campaigns, identities, and fund usage — making it easier for donors to give with confidence.',
  },
  {
    number: 4,
    icon: MessageCircle,
    title: 'Improve Donor Communication',
    description:
      'Champion clear, timely, and honest communication between campaign organizers and donors, ensuring that every contributor understands how their support is making a difference.',
  },
  {
    number: 5,
    icon: BookOpen,
    title: 'Strengthen Compliance Awareness',
    description:
      'Raise awareness of legal and regulatory requirements for fundraising in the Philippines — including SEC, BIR, and data privacy obligations — so that well-meaning organizers stay compliant.',
  },
  {
    number: 6,
    icon: Code,
    title: 'Build Technology for Bayanihan',
    description:
      'Develop and maintain Fundraising.ph as the trust-enabled platform where verified campaigns can launch, accept donations, and provide transparent updates — powered by technology that serves the Filipino spirit of communal unity.',
  },
  {
    number: 7,
    icon: Globe,
    title: 'Support Filipinos Worldwide',
    description:
      'Ensure that overseas Filipinos — from the Middle East to North America to Europe — have a safe, trusted way to support causes back home, closing the distance between diaspora generosity and local need.',
  },
]

export function MissionPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['mission'])

  return (
    <div>
      <PageHeader
        title="Mission, Vision & Objectives"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card - Navy bg */}
          <Card className="bg-light-gray border-navy/10">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-gold" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-navy">Our Mission</h2>
              </div>
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
                To build and maintain the trust infrastructure for Filipino online fundraising — by
                establishing verification standards, promoting transparency, enforcing accountability,
                and providing the technology platform that enables safe, compliant, and impactful
                digital bayanihan.
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="bg-light-gray border-navy/10">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-gold" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-navy">Our Vision</h2>
              </div>
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
                A Philippines where every online fundraiser is trustworthy, every donor is confident,
                and every beneficiary receives the full support of a generous nation — powered by
                technology, transparency, and the enduring spirit of bayanihan.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Objectives */}
      <Section dark>
        <SectionHeading
          title="Our Objectives"
          subtitle="Seven pillars that guide everything we do — from policy to platform development."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {objectives.map((obj) => {
            const Icon = obj.icon
            return (
              <Card
                key={obj.number}
                className="group hover:shadow-md transition-all duration-200 hover:border-gold/30 relative overflow-hidden bg-white"
              >
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-navy/5 leading-none">
                    {obj.number}
                  </div>
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-navy bg-gold/10 px-2 py-0.5 rounded-full">
                      {obj.number}
                    </span>
                    <h3 className="text-lg font-bold text-navy">{obj.title}</h3>
                  </div>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    {obj.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Page-end CTA */}
      <CTABlock
        headline="Ready to be part of trust-first Filipino fundraising?"
        subheadline="Whether you're starting a campaign or supporting one, Fundraise.ph and Fundraising.ph are here to help you every step of the way."
      />
    </div>
  )
}
