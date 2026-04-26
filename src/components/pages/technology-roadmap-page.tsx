'use client'

import { useState } from 'react'
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
import { Progress } from '@/components/ui/progress'
import {
  Building2,
  Rocket,
  ShieldCheck,
  Store,
  Globe,
  Brain,
  BarChart3,
  Handshake,
  Lock,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
} from 'lucide-react'

interface PhaseItem {
  text: string
  completed: boolean
}

interface Phase {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  progress: number
  items: PhaseItem[]
}

const phases: Phase[] = [
  {
    number: 1,
    title: 'Nonprofit Foundation',
    description: 'Establishing the legal, governance, and operational foundation of Fundraise.ph as a Philippine nonprofit.',
    icon: <Building2 className="h-6 w-6" />,
    progress: 80,
    items: [
      { text: 'Register as a nonprofit organization with SEC Philippines', completed: true },
      { text: 'Draft and ratify the Constitution and By-Laws', completed: true },
      { text: 'Establish the Board of Trustees with defined roles', completed: true },
      { text: 'Obtain Bureau of Internal Revenue (BIR) tax exemption', completed: true },
      { text: 'Open dedicated nonprofit bank accounts', completed: true },
      { text: 'Create internal financial controls and audit procedures', completed: true },
      { text: 'Draft conflict-of-interest and governance policies', completed: true },
      { text: 'Set up organizational email, domains, and communications', completed: true },
      { text: 'Publish the founding mission and vision statements', completed: false },
      { text: 'Launch the initial Fundraise.ph informational website', completed: false },
    ],
  },
  {
    number: 2,
    title: 'Fundraising.ph Platform Launch',
    description: 'Building and deploying the core fundraising platform where verified campaigns are published and supported.',
    icon: <Rocket className="h-6 w-6" />,
    progress: 40,
    items: [
      { text: 'Design and develop the Fundraising.ph web platform', completed: true },
      { text: 'Implement user registration and authentication system', completed: true },
      { text: 'Build campaign creation and management workflows', completed: true },
      { text: 'Integrate Philippine payment gateways (GCash, Maya, bank transfer)', completed: true },
      { text: 'Implement international donation support (Stripe, PayPal)', completed: true },
      { text: 'Build the campaign verification pipeline', completed: false },
      { text: 'Create donor dashboard and receipt system', completed: false },
      { text: 'Implement campaign categories and search functionality', completed: false },
      { text: 'Launch public campaign pages with sharing features', completed: false },
      { text: 'Build admin dashboard for campaign moderation', completed: false },
      { text: 'Implement email notification system for campaigns', completed: false },
      { text: 'Conduct security audit and penetration testing', completed: false },
    ],
  },
  {
    number: 3,
    title: 'Verification and Compliance Engine',
    description: 'Creating the systematic process for verifying campaigns and ensuring regulatory compliance.',
    icon: <ShieldCheck className="h-6 w-6" />,
    progress: 20,
    items: [
      { text: 'Define the Campaign Verification Framework document', completed: true },
      { text: 'Build the verification application and review workflow', completed: true },
      { text: 'Implement document upload and identity verification', completed: false },
      { text: 'Create beneficiary validation processes', completed: false },
      { text: 'Build the compliance checklist for campaign organizers', completed: false },
      { text: 'Integrate with DSWD registration for campaign verification', completed: false },
      { text: 'Implement anti-fraud detection algorithms', completed: false },
      { text: 'Create the compliance library for public reference', completed: false },
      { text: 'Build automated reporting for regulatory requirements', completed: false },
      { text: 'Implement the verification badge and trust indicators', completed: false },
      { text: 'Create appeal and dispute resolution workflows', completed: false },
      { text: 'Establish partnerships with verification third parties', completed: false },
    ],
  },
  {
    number: 4,
    title: 'Marketplace Fundraising',
    description: 'Enabling product and service-based fundraising where Filipino creators and communities can sell to raise funds.',
    icon: <Store className="h-6 w-6" />,
    progress: 10,
    items: [
      { text: 'Design marketplace fundraising model and seller onboarding', completed: true },
      { text: 'Build product listing and inventory management', completed: false },
      { text: 'Implement order management and fulfillment tracking', completed: false },
      { text: 'Create marketplace-specific payment splitting', completed: false },
      { text: 'Build seller verification and trust scores', completed: false },
      { text: 'Implement customer reviews and ratings system', completed: false },
      { text: 'Create promotional tools for marketplace sellers', completed: false },
      { text: 'Build shipping integration with Philippine logistics providers', completed: false },
      { text: 'Implement marketplace fee structure and transparency', completed: false },
      { text: 'Create the marketplace storefront and discovery features', completed: false },
      { text: 'Launch initial marketplace pilot campaigns', completed: false },
    ],
  },
  {
    number: 5,
    title: 'Diaspora Giving Layer',
    description: 'Building infrastructure for overseas Filipinos to support verified campaigns back home with ease and trust.',
    icon: <Globe className="h-6 w-6" />,
    progress: 5,
    items: [
      { text: 'Research diaspora giving patterns and preferences', completed: false },
      { text: 'Build multi-currency donation support', completed: false },
      { text: 'Implement remittance integration partnerships', completed: false },
      { text: 'Create diaspora-specific campaign discovery features', completed: false },
      { text: 'Build location-based campaign recommendations', completed: false },
      { text: 'Implement tax receipt generation for international donors', completed: false },
      { text: 'Create community giving circles for diaspora groups', completed: false },
      { text: 'Build social sharing optimized for diaspora networks', completed: false },
      { text: 'Implement transparent fund tracking from donor to beneficiary', completed: false },
      { text: 'Launch diaspora ambassador and outreach program', completed: false },
    ],
  },
  {
    number: 6,
    title: 'AI-Assisted Campaign Guidance',
    description: 'Leveraging AI to help campaign organizers create more effective, compliant, and trustworthy campaigns.',
    icon: <Brain className="h-6 w-6" />,
    progress: 5,
    items: [
      { text: 'Develop AI campaign writing assistant', completed: false },
      { text: 'Build smart campaign category and tag suggestions', completed: false },
      { text: 'Implement AI-powered goal amount recommendations', completed: false },
      { text: 'Create automated compliance checking for campaigns', completed: false },
      { text: 'Build donor engagement prediction models', completed: false },
      { text: 'Implement AI-assisted campaign image optimization', completed: false },
      { text: 'Create multilingual campaign translation support', completed: false },
      { text: 'Build fraud pattern detection and alert system', completed: false },
      { text: 'Implement personalized donor outreach recommendations', completed: false },
      { text: 'Ensure human oversight over all AI decisions', completed: false },
    ],
  },
  {
    number: 7,
    title: 'Public Impact Dashboard',
    description: 'Creating transparent, real-time public dashboards showing the impact and flow of all funds.',
    icon: <BarChart3 className="h-6 w-6" />,
    progress: 5,
    items: [
      { text: 'Design public impact dashboard architecture', completed: false },
      { text: 'Build real-time fund flow visualization', completed: false },
      { text: 'Implement campaign outcome tracking and reporting', completed: false },
      { text: 'Create geographic distribution maps of giving', completed: false },
      { text: 'Build beneficiary impact stories and verification', completed: false },
      { text: 'Implement automated quarterly impact reports', completed: false },
      { text: 'Create API for public data access and research', completed: false },
      { text: 'Build interactive charts and downloadable datasets', completed: false },
      { text: 'Implement donor anonymization and privacy controls', completed: false },
      { text: 'Create historical trend analysis and benchmarks', completed: false },
      { text: 'Launch the public-facing dashboard page', completed: false },
    ],
  },
  {
    number: 8,
    title: 'Institutional Partnerships',
    description: 'Building partnerships with NGOs, government agencies, and corporate sponsors for amplified impact.',
    icon: <Handshake className="h-6 w-6" />,
    progress: 5,
    items: [
      { text: 'Define institutional partnership framework and tiers', completed: false },
      { text: 'Build partner onboarding and agreement workflows', completed: false },
      { text: 'Create co-branded campaign templates for partners', completed: false },
      { text: 'Implement partner dashboard and campaign coordination', completed: false },
      { text: 'Build matching fund and corporate giving features', completed: false },
      { text: 'Create partnership impact reporting and analytics', completed: false },
      { text: 'Implement NGO verification and endorsement system', completed: false },
      { text: 'Build government agency integration for regulated campaigns', completed: false },
      { text: 'Create partner API for embedded fundraising widgets', completed: false },
      { text: 'Launch institutional partner pilot program', completed: false },
    ],
  },
  {
    number: 9,
    title: 'Full Trust Infrastructure',
    description: 'Completing the trust layer with full auditability, legal compliance, and community governance.',
    icon: <Lock className="h-6 w-6" />,
    progress: 2,
    items: [
      { text: 'Implement immutable transaction logging', completed: false },
      { text: 'Build community governance and voting mechanisms', completed: false },
      { text: 'Create decentralized verification networks', completed: false },
      { text: 'Implement automated regulatory compliance reporting', completed: false },
      { text: 'Build full financial audit trail and public access', completed: false },
      { text: 'Create the trust score algorithm and public display', completed: false },
      { text: 'Implement cross-border regulatory compliance', completed: false },
      { text: 'Build beneficiary feedback and resolution system', completed: false },
      { text: 'Create open-source trust infrastructure documentation', completed: false },
      { text: 'Launch full trust infrastructure with independent audit', completed: false },
    ],
  },
]

function PhaseCard({ phase }: { phase: Phase }) {
  const [expanded, setExpanded] = useState(false)

  const completedCount = phase.items.filter((item) => item.completed).length
  const totalCount = phase.items.length

  const progressColor =
    phase.progress >= 60
      ? 'text-emerald-600'
      : phase.progress >= 30
        ? 'text-amber-600'
        : 'text-muted-foreground'

  const progressBg =
    phase.progress >= 60
      ? '[&>[data-slot=progress-indicator]]:bg-emerald-500'
      : phase.progress >= 30
        ? '[&>[data-slot=progress-indicator]]:bg-amber-500'
        : '[&>[data-slot=progress-indicator]]:bg-primary/50'

  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardHeader
        className="cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              {phase.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary" className="text-xs font-semibold">
                  Phase {phase.number}
                </Badge>
                <span className={`text-sm font-bold ${progressColor}`}>
                  {phase.progress}%
                </span>
              </div>
              <CardTitle className="text-lg">{phase.title}</CardTitle>
              <CardDescription className="mt-1 text-sm">
                {phase.description}
              </CardDescription>
            </div>
          </div>
          <div className="flex-shrink-0 pt-1">
            {expanded ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
            <span>
              {completedCount} of {totalCount} items complete
            </span>
          </div>
          <Progress value={phase.progress} className={`h-2.5 ${progressBg}`} />
        </div>
      </CardHeader>

      {expanded && (
        <CardContent className="pt-0">
          <div className="border-t pt-4">
            <ul className="space-y-2.5">
              {phase.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {item.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                  )}
                  <span
                    className={`text-sm ${
                      item.completed
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

export function TechnologyRoadmapPage() {
  return (
    <div>
      <PageHeader
        title="Technology Roadmap"
        headline="Building the technology infrastructure for digital bayanihan."
        description="Our phased approach ensures every feature is built on a foundation of trust, compliance, and community impact. From nonprofit incorporation to full trust infrastructure, each phase brings us closer to transparent and verified fundraising for every Filipino."
      />

      <Section>
        {/* Overall Progress Summary */}
        <div className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Overall Roadmap Progress
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    9 phases &middot; 96 milestones &middot; Building the future of trusted Filipino giving
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">18%</p>
                    <p className="text-xs text-muted-foreground">Overall</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Phase Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span className="text-muted-foreground">Completed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Circle className="h-4 w-4 text-muted-foreground/40" />
            <span className="text-muted-foreground">Pending</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <span className="inline-block w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-muted-foreground">&ge;60%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-muted-foreground">30-59%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full bg-primary/50" />
            <span className="text-muted-foreground">&lt;30%</span>
          </div>
        </div>

        {/* Phase Cards */}
        <div className="space-y-4">
          {phases.map((phase) => (
            <PhaseCard key={phase.number} phase={phase} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <CTABlock
            headline="Join us in building the trust layer for Filipino giving."
            subheadline="Every phase of our roadmap is designed with transparency and community at its core. Help us build, test, and improve Fundraising.ph."
            primaryText="Build With Us on Fundraising.ph"
          />
        </div>
      </Section>
    </div>
  )
}
