'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigation } from '@/lib/navigation'
import {
  Microscope,
  FileText,
  TrendingUp,
  Shield,
  Users,
  Globe,
  BarChart3,
  Lock,
  Heart,
  Scale,
  Lightbulb,
  BookOpen,
  ArrowRight,
} from 'lucide-react'

const researchTopics = [
  {
    title: 'Trust Architecture in Digital Fundraising',
    icon: Shield,
    description:
      'How layered verification, transparent fund tracking, and public accountability create a self-reinforcing trust ecosystem for Filipino campaigns.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    iconBg: 'bg-emerald-100',
  },
  {
    title: 'Filipino Diaspora Giving Patterns',
    icon: Globe,
    description:
      'Understanding the motivations, preferences, and trust barriers of overseas Filipinos when contributing to campaigns back home.',
    color: 'text-blue-600 bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    title: 'Compliance Gaps in Philippine Fundraising',
    icon: Scale,
    description:
      'Identifying where current regulations fall short and how a trust organization can fill the gaps without replacing government oversight.',
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-100',
  },
  {
    title: 'Verification Badge Effectiveness',
    icon: BarChart3,
    description:
      'Measuring the impact of progressive verification badges on donor confidence, campaign success rates, and fund flow transparency.',
    color: 'text-teal-600 bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100',
  },
  {
    title: 'Ethical Storytelling in Filipino Campaigns',
    icon: Heart,
    description:
      'Research on how beneficiary narratives are constructed, the risks of poverty tourism, and frameworks for responsible storytelling.',
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    iconBg: 'bg-rose-100',
  },
  {
    title: 'Marketplace-as-Fundraising Models',
    icon: TrendingUp,
    description:
      'Analyzing how product-based fundraising (like Serg\'s Chocolates) can create sustainable revenue streams while maintaining trust and transparency.',
    color: 'text-orange-600 bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
  },
  {
    title: 'Data Privacy in Crowdfunding Platforms',
    icon: Lock,
    description:
      'How the Data Privacy Act applies to campaign platforms, donor data, and beneficiary information — and what compliance looks like in practice.',
    color: 'text-violet-600 bg-violet-50 border-violet-200',
    iconBg: 'bg-violet-100',
  },
  {
    title: 'Bayanihan in the Digital Age',
    icon: Users,
    description:
      'Exploring how the traditional Filipino value of bayanihan translates to digital fundraising, and what platform features best support communal giving.',
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    iconBg: 'bg-cyan-100',
  },
  {
    title: 'Post-Campaign Accountability Frameworks',
    icon: FileText,
    description:
      'What happens after a campaign closes? Research on reporting standards, fund tracking, and long-term impact measurement for Filipino campaigns.',
    color: 'text-slate-600 bg-slate-50 border-slate-200',
    iconBg: 'bg-slate-100',
  },
  {
    title: 'Technology Roadmap for Trust Infrastructure',
    icon: Microscope,
    description:
      'Exploring blockchain verification, AI-powered compliance checks, and other emerging technologies that can strengthen the trust layer.',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    iconBg: 'bg-indigo-100',
  },
]

const policyBriefs = [
  {
    title: 'A Framework for Regulating Digital Fundraising in the Philippines',
    description:
      'A proposed regulatory framework that balances innovation with donor protection, drawing from international best practices.',
  },
  {
    title: 'DSWD Permit Reform: Modernizing Solicitation Permits for the Digital Age',
    description:
      'Policy recommendations for updating DSWD permit processes to accommodate online and platform-based fundraising.',
  },
  {
    title: 'Data Privacy Compliance Guidelines for Filipino Campaign Platforms',
    description:
      'A practical guide for platform operators on meeting Data Privacy Act requirements in the context of fundraising.',
  },
  {
    title: 'Beneficiary Protection Standards for Fundraising Campaigns',
    description:
      'Proposed standards to ensure that campaign beneficiaries — often vulnerable individuals — are protected from exploitation.',
  },
  {
    title: 'LGU and Community Fundraising: A Decentralized Trust Model',
    description:
      'How local government units can participate in the trust ecosystem while maintaining their own oversight and accountability.',
  },
  {
    title: 'The Role of Nonprofit Trust Organizations in Platform Governance',
    description:
      'Why independent trust organizations are essential for fundraising platform accountability, and how Fundraise.ph fulfills this role.',
  },
]

export function ResearchPolicyPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Research & Policy"
        headline="Advancing knowledge in Filipino fundraising and digital trust."
        description="Fundraise.ph invests in research, policy development, and knowledge-sharing to strengthen the entire Filipino fundraising ecosystem."
      />

      {/* Research Topics Section */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            <Lightbulb className="h-3.5 w-3.5 mr-1.5" />
            Research Agenda
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Research Topics
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our research agenda focuses on the intersection of trust, technology,
            compliance, and Filipino culture — the pillars of a healthy
            fundraising ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {researchTopics.map((topic, index) => {
            const Icon = topic.icon
            return (
              <Card
                key={index}
                className={`border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${topic.color}`}
              >
                <CardHeader className="pb-2">
                  <div
                    className={`w-10 h-10 rounded-full ${topic.iconBg} flex items-center justify-center mb-2`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-sm leading-snug">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs leading-relaxed opacity-80">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Policy Brief Ideas Section */}
      <Section dark>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            <BookOpen className="h-3.5 w-3.5 mr-1.5" />
            Policy Development
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Policy Brief Ideas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proposed policy briefs that address critical gaps in the Filipino
            fundraising regulatory landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policyBriefs.map((brief, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-sm leading-snug">
                    {brief.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-11">
                  {brief.description}
                </p>
                <div className="mt-3 pl-11">
                  <Badge
                    variant="outline"
                    className="text-xs text-amber-600 border-amber-300"
                  >
                    <FileText className="h-3 w-3 mr-1" />
                    Policy Brief
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <CTABlock
          headline="Explore the ecosystem"
          subheadline="See how research, policy, and platform standards work together to build trust in Filipino fundraising."
          primaryText="Explore Fundraising.ph"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
