'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
import { useNavigation } from '@/lib/navigation'
import {
  Shield,
  FileCheck,
  Eye,
  MessageSquare,
  Scale,
  Globe,
  Heart,
  Lock,
  Users,
  Quote,
} from 'lucide-react'

const needsList = [
  {
    icon: Shield,
    title: 'Trust',
    description: 'Donors need assurance that their contributions reach real people with real needs.',
  },
  {
    icon: FileCheck,
    title: 'Verification',
    description: 'Campaigns must be verified — identities confirmed, documents reviewed, stories validated.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Every peso should be traceable. Fund flows must be visible and accountable.',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Proper records, receipts, and proof of fund usage must exist for every campaign.',
  },
  {
    icon: MessageSquare,
    title: 'Communication',
    description: 'Donors deserve timely updates on how their support is making an impact.',
  },
  {
    icon: Scale,
    title: 'Compliance',
    description: 'Fundraising must align with Philippine laws, SEC regulations, and BIR requirements.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Filipinos worldwide — especially overseas workers — need a trusted way to give back.',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Personal data and financial information must be protected at every step.',
  },
  {
    icon: Users,
    title: 'Accountability',
    description: 'Organizations and individuals raising funds must be answerable for how they are used.',
  },
]

export function WhyWeExistPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Why Fundraise.ph Exists"
        headline="Bayanihan is powerful. Trust makes it scalable."
        description="Filipinos are among the most generous people on earth. But generosity without trust infrastructure is fragile. Fundraise.ph exists to protect and amplify the spirit of bayanihan."
      />

      {/* The Problem */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            The Trust Gap in Filipino Fundraising
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every day, Filipinos launch online fundraisers for medical bills, disaster relief, education, 
            and community projects. Many are legitimate. Some are not. But without a trusted system to tell 
            the difference, even the most worthy campaigns struggle to gain support.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Donors hesitate. Beneficiaries wait. And the gap between need and support grows wider — not 
            because people don&apos;t care, but because they don&apos;t know who to trust.
          </p>
        </div>

        {/* Quote Highlight */}
        <Card className="max-w-4xl mx-auto border-l-4 border-l-primary bg-primary/5">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                  Fundraise.ph exists to close that trust gap.
                </p>
                <p className="text-muted-foreground mt-3 text-base">
                  By building verification standards, transparency tools, and compliance awareness, 
                  we create the infrastructure that allows Filipino generosity to scale — safely, 
                  accountably, and sustainably.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* What Online Fundraising Needs */}
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            9 Things Online Fundraising Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            For Filipino fundraising to thrive, these foundational elements must be in place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {needsList.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-md transition-all duration-200 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
          <Heart className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trust is Not Optional — It&apos;s the Foundation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Without trust, bayanihan stays small. With it, bayanihan can reach every Filipino 
            community — at home and abroad. Fundraise.ph is building that trust infrastructure, 
            so that no worthy cause goes unsupported simply because donors couldn&apos;t verify it.
          </p>
          <CTABlock
            headline="Want to understand how we're building trust?"
            subheadline="Explore our mission, verification framework, and the platform that brings it all together."
            primaryText="Explore Our Mission"
            secondaryText="Learn About Verification"
            secondaryOnClick={() => navigate('verification-framework')}
          />
        </div>
      </Section>
    </div>
  )
}
