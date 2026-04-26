'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
import {
  Quote,
  Lightbulb,
  Search,
  Shield,
  Rocket,
  Heart,
  Users,
  Landmark,
} from 'lucide-react'

const timelineEvents = [
  {
    icon: Lightbulb,
    phase: 'The Spark',
    title: 'A Simple Observation',
    description:
      'Every day, Filipinos launch online fundraisers — for medical bills, disaster relief, education, and community projects. Many are legitimate. Some are not. But there was no trusted system to tell the difference.',
  },
  {
    icon: Search,
    phase: 'The Research',
    title: 'Understanding the Gap',
    description:
      'Deep research into the Filipino fundraising landscape revealed a pattern: donors wanted to help but hesitated due to lack of verification, transparency, and accountability. The trust gap was real, measurable, and widening.',
  },
  {
    icon: Shield,
    phase: 'The Vision',
    title: 'Trust as Infrastructure',
    description:
      'The insight crystallized — what Filipino fundraising needed wasn\'t just another platform. It needed a trust layer. An organization dedicated to verification, transparency, and compliance that could underpin any platform.',
  },
  {
    icon: Landmark,
    phase: 'The Structure',
    title: 'Building the Organization',
    description:
      'Fundraise.ph was established as a nonprofit trust organization — not a crowdfunding site, but the trust infrastructure behind one. Its role: set standards, verify campaigns, and advocate for donor protection.',
  },
  {
    icon: Rocket,
    phase: 'The Platform',
    title: 'Fundraising.ph Launches',
    description:
      'With the trust layer in place, Fundraising.ph was built as the operational platform — where verified campaigns launch, donations flow transparently, and donors communicate with beneficiaries in real time.',
  },
  {
    icon: Users,
    phase: 'The Future',
    title: 'Scaling Bayanihan',
    description:
      'Today, Fundraise.ph continues to build — expanding verification frameworks, strengthening compliance awareness, and ensuring that every Filipino, wherever they are in the world, can give and receive with confidence.',
  },
]

export function FoundingStoryPage() {
  return (
    <div>
      <PageHeader
        title="Our Founding Story"
        headline="From bayanihan to digital trust infrastructure."
        description="How one observation about Filipino generosity — and the trust gap holding it back — led to the creation of Fundraise.ph."
      />

      {/* The Beginning */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="It Started with a Question" centered />
          <div className="space-y-4 text-[#1A1A2E] text-lg leading-relaxed">
            <p>
              Filipinos are among the most generous people on earth. When a neighbor is in need,
              the community shows up. When a typhoon hits, the nation mobilizes. When a child needs
              surgery, strangers donate. This spirit — <em className="text-navy font-semibold">bayanihan</em> —
              is woven into the Filipino identity.
            </p>
            <p>
              But as fundraising moved online, something changed. The personal connection that once
              guaranteed trust was replaced by a screen. Donors could no longer see the beneficiary,
              verify the story, or confirm that their contribution reached its destination.
            </p>
            <p>
              And so a question emerged: <strong className="text-navy">How do we bring trust to digital bayanihan?</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* Key Quote */}
      <Section dark>
        <Card className="max-w-4xl mx-auto border-l-4 border-l-gold bg-white shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 text-gold shrink-0 mt-1" />
              <div>
                <p className="text-xl md:text-2xl font-bold text-navy leading-relaxed">
                  Not just crowdfunding. Not just donations. Not just software. But a trust-first
                  fundraising infrastructure built for Filipinos worldwide.
                </p>
                <p className="text-[#4A5568] mt-3 text-base leading-relaxed">
                  This is what Fundraise.ph was designed to be — not a product, but a promise: that
                  Filipino generosity deserves a system worthy of its sincerity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeading
          title="The Journey"
          subtitle="From a simple observation to a nationwide trust infrastructure — here's how Fundraise.ph came to be."
          centered
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gold/20" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              return (
                <div key={index} className="relative flex gap-4 md:gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-navy rounded-xl flex items-center justify-center shadow-md">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 group hover:shadow-md transition-all duration-200 hover:border-gold/30">
                    <CardContent className="p-5 md:p-6">
                      <span className="text-xs font-bold text-gold uppercase tracking-wider">
                        {event.phase}
                      </span>
                      <h3 className="text-lg font-bold text-navy mt-1 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-[#4A5568] text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Closing */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="h-10 w-10 text-gold mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            The Story Continues
          </h2>
          <p className="text-[#1A1A2E] text-lg leading-relaxed mb-8">
            Fundraise.ph is not a finished product — it&apos;s a living commitment. Every verification
            completed, every standard published, and every donor protected is another chapter in the
            story of bringing trust to Filipino fundraising. And we&apos;re just getting started.
          </p>
        </div>
      </Section>

      {/* Page-end CTA */}
      <CTABlock
        headline="Ready to join the trust-first fundraising movement?"
        subheadline="Explore our mission, see our impact, or start a verified campaign on Fundraising.ph."
        primaryText="Go to Fundraising.ph Platform"
      />
    </div>
  )
}
