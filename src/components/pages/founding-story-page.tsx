'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { CTAButton } from '@/components/shared/cta-button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigation } from '@/lib/navigation'
import {
  Quote,
  Lightbulb,
  Search,
  Shield,
  Rocket,
  Heart,
  Users,
  Candy,
  ArrowRight,
} from 'lucide-react'

const timelineEvents = [
  {
    icon: Candy,
    phase: 'The Brand',
    title: "Serg's Chocolates: A Filipino Heritage",
    description:
      "Serg's Chocolates is more than a chocolate brand — it is part of Filipino pasalubong culture, childhood memory, and the simple joy of giving. For generations, Filipino chocolate has carried meaning far beyond its ingredients. It represents homecoming, family, and care.",
  },
  {
    icon: Heart,
    phase: 'The Revival',
    title: 'Bringing Back Serg\'s with Purpose',
    description:
      "When the team behind Serg's Chocolates began planning the brand's revival, they asked a critical question: how can a Filipino heritage brand come back in a way that doesn't just sell products — but gives back to the community? The answer was CSR at the core: every bar of chocolate should also be an act of bayanihan.",
  },
  {
    icon: Search,
    phase: 'The Problem',
    title: 'No Platform Fit for the Mission',
    description:
      "Serg's searched for a fundraising platform that could support product-based community giving — one with verification, transparency, and compliance built in. None existed. International platforms didn't understand Filipino bayanihan culture. Local platforms lacked trust infrastructure. The gap was real, and it was blocking the revival.",
  },
  {
    icon: Lightbulb,
    phase: 'The Insight',
    title: 'If It Doesn\'t Exist, Build It',
    description:
      "The realization was clear: if Serg's Chocolates — and every other Filipino brand, organization, and community — needed a trusted, transparent fundraising platform built for Filipino culture, then someone had to build it. That someone was us.",
  },
  {
    icon: Rocket,
    phase: 'The Platform',
    title: 'Fundraising.ph Was Born',
    description:
      "Fundraising.ph was conceptualized by Serg's Chocolates as the platform that could serve its revival needs — and the needs of every Filipino campaign. A place where verified campaigns launch, donations flow transparently, marketplace fundraising thrives, and donors connect with beneficiaries in real time.",
  },
  {
    icon: Shield,
    phase: 'The Trust Layer',
    title: 'Fundraise.ph: The Organization Behind the Platform',
    description:
      "To ensure Fundraising.ph would never compromise on trust, Fundraise.ph was established as a separate nonprofit trust organization. Its role: set verification standards, enforce compliance, publish transparency reports, and protect every donor and beneficiary. The platform serves the community. The trust organization serves the truth.",
  },
  {
    icon: Users,
    phase: 'The Future',
    title: 'Scaling Bayanihan Online',
    description:
      "Today, Fundraise.ph continues to build — expanding verification frameworks, strengthening compliance awareness, and ensuring that every Filipino, wherever they are in the world, can give and receive with confidence. Serg's Chocolates remains our Founding Member — a constant reminder that being Filipino means showing up for one another.",
  },
]

export function FoundingStoryPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['founding-story'])
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Our Founding Story"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      {/* The Origin: Serg's Chocolates */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="It Started with a Chocolate Brand" centered />
          <div className="space-y-4 text-[#1A1A2E] text-lg leading-relaxed">
            <p>
              Fundraise.ph did not start as an idea in a boardroom. It started with a chocolate brand
              that wanted to come home.
            </p>
            <p>
              <strong className="text-navy">Serg&apos;s Chocolates</strong> is a Filipino heritage
              brand — part of pasalubong culture, part of childhood memory, part of what it means to
              come home to something sweet. When the team behind Serg&apos;s began planning its revival,
              they made a decision: this comeback would not be just about selling chocolate. It would
              be about <em className="text-navy font-semibold">giving back</em>.
            </p>
            <p>
              The plan was bold — every bar of Serg&apos;s chocolate sold could carry a fundraising
              purpose. A portion could support a medical campaign. A bundle could fund a classroom.
              A gift box could help rebuild after a typhoon. The chocolate would not just be a product.
              It would be <strong className="text-navy">bayanihan you can hold in your hands</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* The Problem: No Platform */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="But There Was a Problem"
            subtitle="Serg's needed a fundraising platform built for Filipino culture. It didn't exist."
            centered
          />
          <div className="space-y-4 text-[#1A1A2E] text-lg leading-relaxed">
            <p>
              The team searched for a platform that could support product-based community giving — one
              with verification, transparency, and compliance built in. International platforms
              didn&apos;t understand Filipino bayanihan culture. Local options lacked trust infrastructure.
              There was no platform that could verify campaigns, track funds transparently, acknowledge
              donors properly, and support marketplace fundraising.
            </p>
            <p>
              And so the question became: <strong className="text-navy">If it doesn&apos;t exist, do we wait — or do we build it?</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* Key Quote */}
      <Section>
        <Card className="max-w-4xl mx-auto border-l-4 border-l-gold bg-white shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 text-gold shrink-0 mt-1" />
              <div>
                <p className="text-xl md:text-2xl font-bold text-navy leading-relaxed">
                  We didn&apos;t set out to build a fundraising platform. We set out to revive a
                  chocolate brand with purpose. But when the platform we needed didn&apos;t exist, we
                  realized the gap wasn&apos;t just ours — it was every Filipino&apos;s.
                </p>
                <p className="text-[#4A5568] mt-3 text-base leading-relaxed">
                  That realization became Fundraising.ph — and the commitment to trust behind it
                  became Fundraise.ph.
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
          subtitle="From a chocolate brand's revival plan to a nationwide trust infrastructure — here's how Fundraise.ph came to be."
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

      {/* Serg's as Founding Member */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-gold/10 text-gold border-gold/30">
                <Candy className="h-3.5 w-3.5 mr-1.5" />
                Founding Member
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Serg&apos;s Chocolates: Our Constant Reminder
              </h2>
              <p className="text-[#1A1A2E] text-lg leading-relaxed mb-4">
                As the Founding Member of Fundraise.ph, Serg&apos;s Chocolates serves as a living
                reminder of why this organization exists. It reminds us that being Filipino means
                showing up for one another — that bayanihan is not just a tradition, but a digital
                culture we can build together.
              </p>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                Every verification completed, every standard published, and every donor protected
                traces back to the same origin: a chocolate brand that believed revival should serve
                community, not just commerce.
              </p>
              <CTAButton onClick={() => navigate('sergs-chocolates')} variant="primary" size="default">
                Read Serg&apos;s Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </CTAButton>
            </div>
            <div className="bg-light-gray rounded-2xl p-8 md:p-10 border border-navy/10">
              <div className="flex flex-col items-center text-center gap-4">
                <Candy className="h-16 w-16 text-gold" />
                <h3 className="text-2xl font-bold text-navy">Serg&apos;s Chocolates</h3>
                <p className="text-[#4A5568] leading-relaxed">
                  &ldquo;From a chocolate brand&apos;s revival to a nation&apos;s trust
                  infrastructure — because bayanihan deserves a platform worthy of its sincerity.&rdquo;
                </p>
                <Badge className="bg-gold/10 text-navy border-gold/30 mt-2">
                  Founding Member — Fundraise.ph
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Closing */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="h-10 w-10 text-gold mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            The Story Continues
          </h2>
          <p className="text-[#1A1A2E] text-lg leading-relaxed mb-8">
            Fundraise.ph is not a finished product — it&apos;s a living commitment born from a
            chocolate brand that believed Filipino generosity deserves better infrastructure. Every
            verification completed, every standard published, and every donor protected is another
            chapter in the story of bringing trust to Filipino fundraising. And we&apos;re just
            getting started.
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
