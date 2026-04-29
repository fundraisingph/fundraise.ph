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
import {
  Users, FileText, ShieldCheck, HandHeart, Store, FileCheck, Lock, Clock,
} from 'lucide-react'

const infraComponents = [
  { icon: <Users className="h-6 w-6" />, title: 'Campaign Onboarding', status: 'In Progress', description: 'Campaigner registration, identity capture, campaign category selection, and fundraising model disclosure.', items: ['Campaigner identity verification', 'Campaign category classification', 'Fundraising model selection', 'Beneficiary information capture'] },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'Verification Workflow', status: 'In Progress', description: 'Multi-level verification process from basic identity review to compliance-sensitive review.', items: ['Five verification levels', 'Documentary review pipeline', 'Badge assignment system', 'Escalation and suspension workflow'] },
  { icon: <FileText className="h-6 w-6" />, title: 'Document Management', status: 'In Progress', description: 'Secure document upload, storage, and review for campaign verification and compliance.', items: ['Secure document upload', 'Document completeness scoring', 'Review status tracking', 'Document retention policy compliance'] },
  { icon: <HandHeart className="h-6 w-6" />, title: 'Donor Acknowledgment', status: 'In Progress', description: 'Automated acknowledgment, receipting, and impact update delivery for every contribution.', items: ['Automated donor acknowledgment', 'Receipt generation', 'Impact update delivery', 'Donor preference management'] },
  { icon: <Store className="h-6 w-6" />, title: 'Marketplace Module', status: 'Planned', description: 'Product-based fundraising, supplier onboarding, order management, and revenue-share reporting.', items: ['Supplier onboarding', 'Product listing management', 'Order and fulfillment tracking', 'Revenue-share reporting'] },
  { icon: <FileCheck className="h-6 w-6" />, title: 'Audit Trails', status: 'In Progress', description: 'Comprehensive logging of all verification decisions, fund movements, and compliance actions.', items: ['Verification decision logs', 'Fund movement tracking', 'Compliance action records', 'Trustee review documentation'] },
  { icon: <Lock className="h-6 w-6" />, title: 'Security', status: 'In Progress', description: 'Encryption, access controls, data protection, and secure authentication across all platform operations.', items: ['End-to-end encryption', 'Role-based access controls', 'Secure authentication', 'Data protection standards'] },
]

export function PlatformInfrastructurePage() {
  const { current: heroVar } = useRotatingContent(heroVariations['platform-infrastructure'])

  return (
    <div>
      <PageHeader
        title="Platform Infrastructure"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="Operational Stack"
          subtitle="The infrastructure components that power Fundraising.ph — designed for transparency, verification, and accountable fund management."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infraComponents.map((component, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                    {component.icon}
                  </div>
                  <Badge variant="outline" className="text-xs bg-light-gray text-[#4A5568] border-navy/10">
                    <Clock className="h-3 w-3 mr-1" />
                    {component.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-navy">{component.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">
                  {component.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <ul className="space-y-2">
                  {component.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
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
        headline="Infrastructure that earns trust."
        subheadline="Every component is designed with transparency and accountability. Visit Fundraising.ph to see the platform in action."
        ctaLabel="Explore Campaigns on Fundraising.ph"
        ctaHref={PLATFORM_URL}
      />
    </div>
  )
}
