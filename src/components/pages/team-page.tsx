'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { TeamCard } from '@/components/shared/team-card'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Crown,
  Shield,
  Cpu,
  Wallet,
  Users,
  Heart,
  UserCircle,
  Clock,
  FileCheck,
  Briefcase,
  GraduationCap,
  Globe,
} from 'lucide-react'

const trusteeRoles = [
  {
    role: 'Founder / Chairperson',
    description:
      'Provides strategic vision and ensures the organization stays true to its founding mission. Leads the Board of Trustees and represents Fundraise.ph publicly.',
    icon: <Crown className="h-7 w-7 text-navy" />,
  },
  {
    role: 'Governance & Compliance Trustee',
    description:
      'Oversees organizational compliance with Philippine laws, SEC regulations, BIR requirements, and DSWD standards. Ensures all governance policies are current and enforced.',
    icon: <Shield className="h-7 w-7 text-navy" />,
  },
  {
    role: 'Technology Trustee',
    description:
      'Guides the technical strategy and ensures the platform is built with security, scalability, and trust at its core. Oversees the technology roadmap implementation.',
    icon: <Cpu className="h-7 w-7 text-navy" />,
  },
  {
    role: 'Finance & Audit Trustee',
    description:
      'Safeguards financial integrity through oversight of budgeting, financial controls, audits, and fund disbursement. Ensures transparent financial reporting.',
    icon: <Wallet className="h-7 w-7 text-navy" />,
  },
  {
    role: 'Community & Partnerships Trustee',
    description:
      'Builds and maintains relationships with community organizations, NGOs, institutional partners, and diaspora networks. Ensures the platform serves real community needs.',
    icon: <Users className="h-7 w-7 text-navy" />,
  },
  {
    role: 'Beneficiary Protection & Ethics Trustee',
    description:
      'Champions the dignity, privacy, and rights of all campaign beneficiaries. Ensures ethical standards are maintained in every campaign and interaction.',
    icon: <Heart className="h-7 w-7 text-navy" />,
  },
]

const profileTemplate = [
  {
    icon: <UserCircle className="h-5 w-5 text-trust-blue" />,
    label: 'Full Name & Professional Title',
    description: 'Complete name with relevant professional designation',
  },
  {
    icon: <Briefcase className="h-5 w-5 text-trust-blue" />,
    label: 'Professional Background',
    description: 'Current role, organization, and key career highlights',
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-trust-blue" />,
    label: 'Education & Credentials',
    description: 'Relevant degrees, certifications, and professional credentials',
  },
  {
    icon: <Globe className="h-5 w-5 text-trust-blue" />,
    label: 'Community & Volunteer Experience',
    description: 'Demonstrated commitment to Filipino community service and development',
  },
  {
    icon: <Clock className="h-5 w-5 text-trust-blue" />,
    label: 'Term of Service',
    description: 'Appointment date and current term duration',
  },
  {
    icon: <FileCheck className="h-5 w-5 text-trust-blue" />,
    label: 'Conflict of Interest Disclosure',
    description: 'Publicly accessible disclosure of any potential conflicts',
  },
]

export function TeamPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['team'])

  return (
    <div>
      <PageHeader
        title="Team & Trustees"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      {/* Board of Trustees */}
      <Section>
        <SectionHeading
          title="Board of Trustees"
          subtitle="Six trustee roles, each guarding a critical dimension of trust. Profiles will be published as trustees are appointed."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trusteeRoles.map((trustee, index) => (
            <TeamCard
              key={index}
              role={trustee.role}
              description={trustee.description}
              icon={trustee.icon}
            />
          ))}
        </div>
      </Section>

      {/* Trustee Profile Template */}
      <Section dark>
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 text-sm border-gold/40 text-gold">
            Transparency Standard
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
            Trustee Profile Template
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            When trustees are appointed, each profile will include the following
            publicly accessible information. This is part of our commitment to
            transparency by default.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-[#0A1F44]/10">
            <CardContent className="p-6">
              <div className="space-y-0">
                {profileTemplate.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4 py-4">
                      <div className="w-10 h-10 rounded-lg bg-trust-blue/10 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy text-sm">
                          {item.label}
                        </h4>
                        <p className="text-sm text-[#4A5568] mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {index < profileTemplate.length - 1 && (
                      <Separator className="bg-[#0A1F44]/10" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Appointment Process */}
      <Section>
        <Card className="border-gold/20 bg-gradient-to-br from-[#0A1F44]/5 to-[#0A1F44]/10">
          <CardContent className="p-6 md:p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-4">
                Trustee Appointment Process
              </h3>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                Trustees are selected based on demonstrated commitment to
                Filipino community welfare, professional expertise in their
                designated domain, and alignment with Fundraise.ph&apos;s
                mission and governance principles.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                All appointments are publicly announced, and trustee profiles
                are published in full as part of our transparency commitment.
                The community is encouraged to review and provide feedback on
                board composition.
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* CTA */}
      <CTABlock
        headline="Support the mission of trusted Filipino fundraising."
        subheadline="Every donation through Fundraising.ph goes through our verification and compliance framework. Your support builds the trust layer for Filipino giving."
        primaryText="Support Campaigns Through Fundraising.ph"
      />
    </div>
  )
}
