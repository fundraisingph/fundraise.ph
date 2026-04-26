'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigation } from '@/lib/navigation'
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
    title: 'NGOs and Nonprofits',
    icon: Heart,
    description:
      'Partner with us to bring trust, transparency, and accountability to your fundraising campaigns. We help ensure your donors see where every peso goes.',
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    iconBg: 'bg-rose-100',
  },
  {
    title: 'Schools and Alumni Groups',
    icon: GraduationCap,
    description:
      'Enable your school community to raise funds with verified campaigns, transparent reporting, and a platform built for Filipino educational institutions.',
    color: 'text-blue-600 bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    title: 'Churches and Faith Communities',
    icon: Church,
    description:
      'Support faith-based fundraising with tools designed for community trust, ethical storytelling, and beneficiary protection.',
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-100',
  },
  {
    title: 'LGUs and Community Organizations',
    icon: Building2,
    description:
      'Bring government and community fundraising into the digital trust era. We help local government units run transparent, accountable campaigns.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    iconBg: 'bg-emerald-100',
  },
  {
    title: 'Corporate Sponsors',
    icon: Briefcase,
    description:
      'Align your brand with trusted Filipino fundraising. Sponsor verified campaigns and demonstrate corporate social responsibility with measurable impact.',
    color: 'text-violet-600 bg-violet-50 border-violet-200',
    iconBg: 'bg-violet-100',
  },
  {
    title: 'Suppliers and Product Partners',
    icon: Package,
    description:
      'Join our marketplace ecosystem. Connect your products and services with verified campaigns and the Filipino giving community.',
    color: 'text-orange-600 bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
  },
  {
    title: 'Filipino Diaspora Organizations',
    icon: Globe,
    description:
      'Connect overseas Filipino communities with trusted, verified campaigns back home. Help balikbayans give with confidence and transparency.',
    color: 'text-teal-600 bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100',
  },
  {
    title: 'Technology Partners',
    icon: Cpu,
    description:
      'Help build the infrastructure of trust. Integrate payment systems, verification tools, and data platforms with the Fundraise.ph ecosystem.',
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    iconBg: 'bg-cyan-100',
  },
  {
    title: 'Legal and Compliance Partners',
    icon: Scale,
    description:
      'Strengthen the legal framework for Filipino fundraising. Provide guidance, review, and compliance support for campaigns and the platform.',
    color: 'text-slate-600 bg-slate-50 border-slate-200',
    iconBg: 'bg-slate-100',
  },
]

export function PartnerWithUsPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Partner With Fundraise.ph"
        headline="Help build the trusted fundraising infrastructure for Filipinos worldwide."
        description="Whether you're an NGO, a corporate sponsor, a diaspora organization, or a technology provider — there's a place for you in the Fundraise.ph ecosystem."
      />

      {/* Partner Types Section */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            <Handshake className="h-3.5 w-3.5 mr-1.5" />
            Partnership Opportunities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nine Ways to Partner With Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every partnership strengthens the trust layer for Filipino
            fundraising. Find the model that fits your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon
            return (
              <Card
                key={index}
                className={`border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${partner.color}`}
              >
                <CardHeader className="pb-3">
                  <div
                    className={`w-12 h-12 rounded-full ${partner.iconBg} flex items-center justify-center mb-3`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{partner.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed opacity-80">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Why Partner Section */}
      <Section dark>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Why Partner
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building Trust Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Partnerships are how we scale trust. Every organization that joins
            the ecosystem strengthens accountability for all Filipino campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-lg mb-2">Shared Standards</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              All partners commit to the same verification, transparency, and
              accountability standards that define Fundraise.ph.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <Users className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-lg mb-2">Community Impact</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your partnership directly enables more Filipinos to access trusted
              fundraising — from local communities to the global diaspora.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-lg mb-2">Ecosystem Growth</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
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
          secondaryText="Go to Fundraising.ph"
          secondaryOnClick={() => window.open('https://fundraising.ph', '_blank')}
        />
      </Section>
    </div>
  )
}
