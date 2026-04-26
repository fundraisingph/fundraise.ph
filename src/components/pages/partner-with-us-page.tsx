'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { PartnerCategory } from '@/components/shared/partner-category'
import { CTAButton } from '@/components/shared/cta-button'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  GraduationCap,
  Church,
  Building2,
  Briefcase,
  Package,
  Globe,
  Cpu,
  Scale,
  Handshake,
  ShieldCheck,
  Users,
  TrendingUp,
} from 'lucide-react'

const partnerTypes = [
  {
    title: 'NGOs',
    icon: <Heart className="h-6 w-6" />,
    description:
      'Partner with us to bring trust, transparency, and accountability to your fundraising campaigns. We help ensure your donors see where every peso goes.',
  },
  {
    title: 'Schools',
    icon: <GraduationCap className="h-6 w-6" />,
    description:
      'Enable your school community to raise funds with verified campaigns, transparent reporting, and a platform built for Filipino educational institutions.',
  },
  {
    title: 'Churches',
    icon: <Church className="h-6 w-6" />,
    description:
      'Support faith-based fundraising with tools designed for community trust, ethical storytelling, and beneficiary protection.',
  },
  {
    title: 'LGUs',
    icon: <Building2 className="h-6 w-6" />,
    description:
      'Bring government and community fundraising into the digital trust era. We help local government units run transparent, accountable campaigns.',
  },
  {
    title: 'Corporate Sponsors',
    icon: <Briefcase className="h-6 w-6" />,
    description:
      'Align your brand with trusted Filipino fundraising. Sponsor verified campaigns and demonstrate corporate social responsibility with measurable impact.',
  },
  {
    title: 'Suppliers',
    icon: <Package className="h-6 w-6" />,
    description:
      'Join our marketplace ecosystem. Connect your products and services with verified campaigns and the Filipino giving community.',
  },
  {
    title: 'Diaspora Organizations',
    icon: <Globe className="h-6 w-6" />,
    description:
      'Connect overseas Filipino communities with trusted, verified campaigns back home. Help balikbayans give with confidence and transparency.',
  },
  {
    title: 'Technology Partners',
    icon: <Cpu className="h-6 w-6" />,
    description:
      'Help build the infrastructure of trust. Integrate payment systems, verification tools, and data platforms with the Fundraise.ph ecosystem.',
  },
  {
    title: 'Legal/Compliance Partners',
    icon: <Scale className="h-6 w-6" />,
    description:
      'Strengthen the legal framework for Filipino fundraising. Provide guidance, review, and compliance support for campaigns and the platform.',
  },
]

export function PartnerWithUsPage() {
  return (
    <div>
      <PageHeader
        title="Partner With Fundraise.ph"
        headline="Help build the trusted fundraising infrastructure for Filipinos worldwide."
        description="Whether you're an NGO, a corporate sponsor, a diaspora organization, or a technology provider — there's a place for you in the Fundraise.ph ecosystem."
      />

      {/* Partner Types Section */}
      <Section>
        <SectionHeading
          title="Nine Ways to Partner With Us"
          subtitle="Every partnership strengthens the trust layer for Filipino fundraising. Find the model that fits your organization."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerTypes.map((partner, index) => (
            <PartnerCategory
              key={index}
              icon={partner.icon}
              title={partner.title}
              description={partner.description}
            />
          ))}
        </div>
      </Section>

      {/* Why Partner Section */}
      <Section dark>
        <SectionHeading
          title="Building Trust Together"
          subtitle="Partnerships are how we scale trust. Every organization that joins the ecosystem strengthens accountability for all Filipino campaigns."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-[#0A1F44]/10 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-7 w-7 text-[#0A1F44]" />
            </div>
            <h3 className="font-bold text-lg text-[#0A1F44] mb-2">Shared Standards</h3>
            <p className="text-[#4A5568] text-sm leading-relaxed">
              All partners commit to the same verification, transparency, and
              accountability standards that define Fundraise.ph.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-[#C8A951]/15 flex items-center justify-center mx-auto mb-4">
              <Users className="h-7 w-7 text-[#C8A951]" />
            </div>
            <h3 className="font-bold text-lg text-[#0A1F44] mb-2">Community Impact</h3>
            <p className="text-[#4A5568] text-sm leading-relaxed">
              Your partnership directly enables more Filipinos to access trusted
              fundraising — from local communities to the global diaspora.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-[#2B4C7E]/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-7 w-7 text-[#2B4C7E]" />
            </div>
            <h3 className="font-bold text-lg text-[#0A1F44] mb-2">Ecosystem Growth</h3>
            <p className="text-[#4A5568] text-sm leading-relaxed">
              As the ecosystem grows, every partner benefits from increased
              trust, more campaigns, and greater donor confidence.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <CTABlock
          headline="Ready to build trust together?"
          subheadline="Join the ecosystem of organizations committed to transparent, accountable Filipino fundraising."
          primaryText="Become a Fundraise.ph Partner"
          primaryHref="https://fundraising.ph"
        />
        <div className="text-center mt-6">
          <CTAButton href="https://fundraising.ph" variant="secondary" size="default">
            Go to Fundraising.ph
          </CTAButton>
        </div>
      </Section>
    </div>
  )
}
