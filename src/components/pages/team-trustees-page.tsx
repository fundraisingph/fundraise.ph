'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
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

interface TrusteeRole {
  role: string
  icon: React.ReactNode
  responsibility: string
  keyDuties: string[]
}

const trusteeRoles: TrusteeRole[] = [
  {
    role: 'Founder / Chairperson',
    icon: <Crown className="h-7 w-7" />,
    responsibility:
      'Provides strategic vision and ensures the organization stays true to its founding mission. The Chairperson leads the Board of Trustees and represents Fundraise.ph publicly.',
    keyDuties: [
      'Set and maintain the strategic direction of the organization',
      'Chair all board meetings and ensure effective governance',
      'Serve as the primary public representative of Fundraise.ph',
      'Ensure mission lock is upheld in all organizational decisions',
    ],
  },
  {
    role: 'Governance and Compliance Trustee',
    icon: <Shield className="h-7 w-7" />,
    responsibility:
      'Oversees organizational compliance with Philippine laws, SEC regulations, BIR requirements, and DSWD standards. Ensures all governance policies are current and enforced.',
    keyDuties: [
      'Monitor and ensure regulatory compliance across all operations',
      'Review and update governance policies on a regular schedule',
      'Coordinate with external auditors and regulatory bodies',
      'Manage the conflict-of-interest disclosure process',
    ],
  },
  {
    role: 'Technology Trustee',
    icon: <Cpu className="h-7 w-7" />,
    responsibility:
      'Guides the technical strategy and ensures the platform is built with security, scalability, and trust at its core. Oversees the technology roadmap implementation.',
    keyDuties: [
      'Oversee the technology roadmap and platform development',
      'Ensure security, data privacy, and infrastructure reliability',
      'Review and approve AI/automation governance decisions',
      'Evaluate technical partnerships and vendor relationships',
    ],
  },
  {
    role: 'Finance and Audit Trustee',
    icon: <Wallet className="h-7 w-7" />,
    responsibility:
      'Safeguards financial integrity through oversight of budgeting, financial controls, audits, and fund disbursement. Ensures transparent financial reporting.',
    keyDuties: [
      'Oversee financial planning, budgeting, and reporting',
      'Ensure internal financial controls are effective and enforced',
      'Review all audit findings and implement recommendations',
      'Monitor fund disbursement and ensure donor intent is honored',
    ],
  },
  {
    role: 'Community and Partnerships Trustee',
    icon: <Users className="h-7 w-7" />,
    responsibility:
      'Builds and maintains relationships with community organizations, NGOs, institutional partners, and diaspora networks. Ensures the platform serves real community needs.',
    keyDuties: [
      'Develop and manage partnerships with NGOs and community organizations',
      'Represent Fundraise.ph in community outreach and events',
      'Ensure the platform addresses real needs of Filipino communities',
      'Oversee diaspora engagement and institutional partnership programs',
    ],
  },
  {
    role: 'Beneficiary Protection and Ethics Trustee',
    icon: <Heart className="h-7 w-7" />,
    responsibility:
      'Champions the dignity, privacy, and rights of all campaign beneficiaries. Ensures ethical standards are maintained in every campaign and interaction.',
    keyDuties: [
      'Uphold beneficiary dignity in all platform content and operations',
      'Review and enforce beneficiary consent and privacy policies',
      'Investigate and resolve beneficiary grievances and disputes',
      'Ensure ethical standards are embedded in AI and automation systems',
    ],
  },
]

const profileTemplate = [
  {
    icon: <UserCircle className="h-5 w-5" />,
    label: 'Full Name and Professional Title',
    description: 'Complete name with relevant professional designation',
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: 'Professional Background',
    description: 'Current role, organization, and key career highlights',
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    label: 'Education and Credentials',
    description: 'Relevant degrees, certifications, and professional credentials',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    label: 'Community and Volunteer Experience',
    description: 'Demonstrated commitment to Filipino community service and development',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: 'Term of Service',
    description: 'Appointment date and current term duration',
  },
  {
    icon: <FileCheck className="h-5 w-5" />,
    label: 'Conflict of Interest Disclosure',
    description: 'Publicly accessible disclosure of any potential conflicts',
  },
]

export function TeamTrusteesPage() {
  return (
    <div>
      <PageHeader
        title="Team & Trustees"
        headline="Guided by people committed to trust, transparency, technology, and Filipino community impact."
        description="The Board of Trustees provides independent oversight, strategic guidance, and community accountability for Fundraise.ph. Each trustee role is designed to protect a specific aspect of public trust."
      />

      <Section>
        {/* Trustee Roles Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Board of Trustees
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six trustee roles, each guarding a critical dimension of trust.
              Profiles will be published as trustees are appointed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trusteeRoles.map((trustee, index) => (
              <Card
                key={index}
                className="group transition-all duration-200 hover:shadow-md hover:border-primary/30 flex flex-col"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                    {trustee.icon}
                  </div>
                  <CardTitle className="text-lg">{trustee.role}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {trustee.responsibility}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Duties
                    </p>
                    <ul className="space-y-2">
                      {trustee.keyDuties.map((duty, dutyIndex) => (
                        <li
                          key={dutyIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-t">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <UserCircle className="h-4 w-4" />
                      <span className="text-sm italic">Profile coming soon</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trustee Profile Template */}
        <div className="mb-16">
          <Section dark>
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4 text-sm">
                Transparency Standard
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Trustee Profile Template
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                When trustees are appointed, each profile will include the
                following publicly accessible information. This is part of our
                commitment to transparency by default.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="space-y-0">
                    {profileTemplate.map((item, index) => (
                      <div key={index}>
                        <div className="flex items-start gap-4 py-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground text-sm">
                              {item.label}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        {index < profileTemplate.length - 1 && (
                          <Separator />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </Section>
        </div>

        {/* Appointment Process */}
        <div className="mb-16">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-6 md:p-8">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Trustee Appointment Process
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Trustees are selected based on demonstrated commitment to
                  Filipino community welfare, professional expertise in their
                  designated domain, and alignment with Fundraise.ph&apos;s
                  mission and governance principles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  All appointments are publicly announced, and trustee profiles
                  are published in full as part of our transparency commitment.
                  The community is encouraged to review and provide feedback on
                  board composition.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <CTABlock
          headline="Support the mission of trusted Filipino fundraising."
          subheadline="Every donation through Fundraising.ph goes through our verification and compliance framework. Your support builds the trust layer for Filipino giving."
          primaryText="Support Campaigns Through Fundraising.ph"
        />
      </Section>
    </div>
  )
}
