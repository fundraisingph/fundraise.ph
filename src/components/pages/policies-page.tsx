'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL } from '@/lib/trust-governance-compliance-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Scale,
  Megaphone,
  Lock,
  Shield,
  Heart,
  FileText,
  DollarSign,
  Users,
  Cpu,
  HandHeart,
  AlertTriangle,
  Eye,
  BookOpen,
  Clock,
} from 'lucide-react'

const policies = [
  {
    title: 'Conflict of Interest Policy',
    description: 'Defines how conflicts of interest are identified, disclosed, and managed across all trustees, officers, and staff.',
    icon: <Scale className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Whistleblower Policy',
    description: 'Protects individuals who report concerns about governance, compliance, or operational practices from retaliation.',
    icon: <Megaphone className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Privacy Policy',
    description: 'Governs the collection, use, storage, and protection of personal information for donors, campaigners, and beneficiaries.',
    icon: <Lock className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Data Protection Policy',
    description: 'Establishes standards for data handling, encryption, access control, and data retention across all platform operations.',
    icon: <Shield className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Campaign Verification Policy',
    description: 'Defines the verification levels, documentary requirements, review workflows, and badge criteria for campaigns.',
    icon: <FileText className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Donor Acknowledgment Policy',
    description: 'Establishes standards for donor acknowledgment, receipting, impact updates, and gratitude practices.',
    icon: <HandHeart className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Restricted Funds Policy',
    description: 'Defines how restricted or earmarked donations are identified, tracked, reported, and disbursed.',
    icon: <DollarSign className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Document Retention Policy',
    description: 'Specifies how long different types of documents are retained, stored, and eventually disposed of in compliance with applicable standards.',
    icon: <Clock className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Partner and Sponsor Policy',
    description: 'Defines how partners and sponsors participate in the ecosystem, including disclosure requirements and relationship standards.',
    icon: <Users className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'AI Use and Human Oversight Policy',
    description: 'Governs the use of artificial intelligence and automated systems, ensuring human oversight over all sensitive decisions.',
    icon: <Cpu className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Beneficiary Dignity and Consent Policy',
    description: 'Establishes standards for beneficiary treatment, consent protocols, privacy protection, and dignity in all campaign content.',
    icon: <Heart className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Campaign Suspension and Review Policy',
    description: 'Defines the circumstances, processes, and rights related to campaign suspension and review.',
    icon: <AlertTriangle className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Financial Transparency Policy',
    description: 'Establishes standards for financial reporting, public disclosures, fund flow tracking, and fiscal accountability.',
    icon: <Eye className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
  {
    title: 'Trustee Code of Conduct',
    description: 'Defines the ethical standards, responsibilities, and behavioral expectations for all Fundraise.ph trustees.',
    icon: <BookOpen className="h-5 w-5" />,
    status: 'coming-soon' as const,
  },
]

export function PoliciesPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['policies'])

  return (
    <div>
      <PageHeader
        title="Policies"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="Public Policy Library"
          subtitle="As part of our commitment to transparency by default, the following governance and operational policies will be publicly accessible once finalized."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {policies.map((policy, index) => (
            <Card
              key={index}
              className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors">
                    {policy.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-navy leading-snug mb-1.5">
                      {policy.title}
                    </h3>
                    <p className="text-xs text-[#4A5568] leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Badge variant="secondary" className="text-xs bg-light-gray text-[#4A5568] border border-navy/10">
                    Coming Soon
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">Policy Development</h3>
          <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
            Our policies are being developed with input from governance experts, compliance professionals, and community stakeholders. Each policy will be published once finalized and approved by the Board of Trustees.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            If you have questions about our policies or would like to contribute feedback during the development process, please reach out through our contact channels.
          </p>
        </div>
      </Section>

      <CTABlock
        headline="Trust is built on clear, published policies."
        subheadline="Visit Fundraising.ph to see how these policies support responsible fundraising in practice."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={FUNDRAISING_PH_URL}
      />
    </div>
  )
}
