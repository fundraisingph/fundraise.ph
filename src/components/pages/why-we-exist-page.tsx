'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
import {
  ShieldCheck,
  Eye,
  BookOpen,
  Scale,
  HeartHandshake,
  Users,
  FileCheck,
  Quote,
  Heart,
} from 'lucide-react'

const needsList = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    description: 'Donors need assurance that their contributions reach real people with real needs — not scams or misrepresentation.',
  },
  {
    icon: FileCheck,
    title: 'Verification',
    description: 'Campaigns must be verified — identities confirmed, documents reviewed, stories validated — before donors are asked to give.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Every peso should be traceable. Fund flows must be visible and accountable from donation to delivery.',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Proper records, receipts, and proof of fund usage must exist for every campaign — as standard, not as exception.',
  },
  {
    icon: Scale,
    title: 'Compliance',
    description: 'Fundraising must align with Philippine laws, SEC regulations, and BIR requirements — organizers need guidance, not guesswork.',
  },
  {
    icon: HeartHandshake,
    title: 'Donor Acknowledgment',
    description: 'Every donor deserves to be thanked, informed, and shown the impact of their contribution — gratitude is not optional.',
  },
  {
    icon: Users,
    title: 'Accountability',
    description: 'Organizations and individuals raising funds must be answerable for how they are used — accountability transforms one-time donations into lasting impact.',
  },
]

export function WhyWeExistPage() {
  return (
    <div>
      <PageHeader
        title="Why Fundraise.ph Exists"
        headline="Bayanihan is powerful. Trust makes it scalable."
        description="Filipinos are among the most generous people on earth. But generosity without trust infrastructure is fragile. Fundraise.ph exists to protect and amplify the spirit of bayanihan."
      />

      {/* The Trust Gap */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionHeading
            title="The Trust Gap in Filipino Fundraising"
            centered
          />
          <p className="text-[#1A1A2E] text-lg leading-relaxed">
            Every day, Filipinos launch online fundraisers for medical bills, disaster relief, education,
            and community projects. Many are legitimate. Some are not. But without a trusted system to tell
            the difference, even the most worthy campaigns struggle to gain support.
          </p>
          <p className="text-[#4A5568] text-lg leading-relaxed mt-4">
            Donors hesitate. Beneficiaries wait. And the gap between need and support grows wider — not
            because people don&apos;t care, but because they don&apos;t know who to trust.
          </p>
        </div>

        {/* Quote Highlight */}
        <Card className="max-w-4xl mx-auto border-l-4 border-l-gold bg-gold/5">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 text-gold shrink-0 mt-1" />
              <div>
                <p className="text-xl md:text-2xl font-bold text-navy leading-relaxed">
                  Fundraise.ph exists to close that trust gap.
                </p>
                <p className="text-[#4A5568] mt-3 text-base leading-relaxed">
                  By building verification standards, transparency tools, and compliance awareness,
                  we create the infrastructure that allows Filipino generosity to scale — safely,
                  accountably, and sustainably.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* 7 Needs */}
      <Section dark>
        <SectionHeading
          title="7 Things Online Fundraising Needs"
          subtitle="For Filipino fundraising to thrive, these foundational elements must be in place."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {needsList.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-md transition-all duration-200 hover:border-gold/30 bg-white"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Closing Statement */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="h-10 w-10 text-gold mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Trust is Not Optional — It&apos;s the Foundation
          </h2>
          <p className="text-[#1A1A2E] text-lg leading-relaxed mb-8">
            Without trust, bayanihan stays small. With it, bayanihan can reach every Filipino
            community — at home and abroad. Fundraise.ph is building that trust infrastructure,
            so that no worthy cause goes unsupported simply because donors couldn&apos;t verify it.
          </p>
        </div>
      </Section>

      {/* Page-end CTA */}
      <CTABlock
        headline="Want to understand how we're building trust?"
        subheadline="Explore our mission, verification framework, and the platform that brings it all together."
        primaryText="Explore Our Mission"
      />
    </div>
  )
}
