'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { TimelineCard } from '@/components/shared/timeline-card'

const phases = [
  {
    phase: 1,
    title: 'Nonprofit Foundation',
    description: 'Establishing the legal, governance, and operational foundation of Fundraise.ph as a Philippine nonprofit.',
    progress: 80,
    items: [
      'Fundraise.ph website launch',
      'Public mission statement',
      'Trustee profiles',
      'Governance page',
      'Transparency commitments',
      'Founding member stories',
      'Initial blog and trustee notes',
      'Partner inquiry system',
      'Newsletter',
      'Public FAQ',
    ],
  },
  {
    phase: 2,
    title: 'Fundraising.ph Platform Launch',
    description: 'Building and deploying the core fundraising platform where verified campaigns are published and supported.',
    progress: 40,
    items: [
      'Campaign onboarding',
      'Campaigner registration',
      'Campaign category setup',
      'Basic campaign verification',
      'Document upload',
      'Beneficiary data capture',
      'Donor acknowledgment',
      'Sponsor participation',
      'Marketplace fundraising',
      'Campaign updates',
      'Admin review console',
      'Reporting dashboard',
    ],
  },
  {
    phase: 3,
    title: 'Verification and Compliance Engine',
    description: 'Creating the systematic process for verifying campaigns and ensuring regulatory compliance.',
    progress: 20,
    items: [
      'Campaign risk scoring',
      'Campaign type classification',
      'Donation vs marketplace distinction',
      'Public solicitation guidance',
      'Permit checklist workflows',
      'Identity verification',
      'Organization verification',
      'Beneficiary validation',
      'Document completeness scoring',
      'Campaign badge system',
      'Campaign audit trail',
      'Escalation and suspension workflow',
    ],
  },
  {
    phase: 4,
    title: 'Marketplace Fundraising',
    description: 'Enabling product and service-based fundraising where Filipino creators and communities can sell to raise funds.',
    progress: 10,
    items: [
      'Supplier onboarding',
      'Product partner dashboard',
      'Affiliate-style fundraising',
      'Commission-based campaigns',
      'Cause-linked product sales',
      'Sponsor exposure tracking',
      'Campaign-specific marketplace pages',
      'Order and fulfillment integration',
      'Revenue-share reporting',
      'Supporter purchase acknowledgment',
      'Product-based community campaigns',
    ],
  },
  {
    phase: 5,
    title: 'Diaspora Giving Layer',
    description: 'Building infrastructure for overseas Filipinos to support verified campaigns back home with ease and trust.',
    progress: 5,
    items: [
      'Overseas Filipino supporter profiles',
      'International donor education',
      'Multi-currency planning',
      'Campaign location maps',
      'Supporter communication preferences',
      'Cross-border payment compliance review',
      'Diaspora chapter partnerships',
      'Hometown campaign discovery',
      'Transparent impact reporting',
    ],
  },
  {
    phase: 6,
    title: 'AI-Assisted Campaign Guidance',
    description: 'Leveraging AI to help campaign organizers create more effective, compliant, and trustworthy campaigns.',
    progress: 5,
    items: [
      'AI campaign setup assistant',
      'AI compliance checklist assistant',
      'AI campaign category classifier',
      'AI donor update writer',
      'AI post-campaign report generator',
      'AI document completeness reviewer',
      'AI fraud-pattern detection support',
      'AI beneficiary story assistant',
      'AI trustee dashboard summaries',
      'AI risk and anomaly alerts',
    ],
  },
  {
    phase: 7,
    title: 'Public Impact Dashboard',
    description: 'Creating transparent, real-time public dashboards showing the impact and flow of all funds.',
    progress: 5,
    items: [
      'Total campaigns supported',
      'Total verified campaigns',
      'Total marketplace campaigns',
      'Donor acknowledgments sent',
      'Beneficiary reports published',
      'Campaign completion rates',
      'Partner participation',
      'Sponsor impact',
      'Public transparency scorecards',
      'Annual reports',
      'Trustee letters',
    ],
  },
  {
    phase: 8,
    title: 'Institutional Partnerships',
    description: 'Building partnerships with NGOs, government agencies, and corporate sponsors for amplified impact.',
    progress: 5,
    items: [
      'LGU partnership program',
      'NGO onboarding program',
      'School fundraising program',
      'Church and parish campaign standards',
      'Disaster response templates',
      'Corporate sponsor program',
      'Supplier network',
      'Diaspora partner chapters',
      'Public agency collaboration',
      'Permit workflow digitization exploration',
    ],
  },
]

export function TechnologyRoadmapPage() {
  return (
    <div>
      <PageHeader
        title="Technology Roadmap"
        headline="Building the technology infrastructure for digital bayanihan."
        description="Our phased approach ensures every feature is built on a foundation of trust, compliance, and community impact. From nonprofit incorporation to institutional partnerships, each phase brings us closer to transparent and verified fundraising for every Filipino."
      />

      <Section>
        <SectionHeading
          title="8 Phases. One Mission."
          subtitle="Each phase builds on the last — from nonprofit foundation to institutional partnerships. Together, they form the complete infrastructure for trusted Filipino giving."
        />

        <div className="space-y-6">
          {phases.map((phase) => (
            <TimelineCard
              key={phase.phase}
              phase={phase.phase}
              title={phase.title}
              description={phase.description}
              items={phase.items}
              progress={phase.progress}
            />
          ))}
        </div>
      </Section>

      <CTABlock
        headline="Join us in building the trust layer for Filipino giving."
        subheadline="Every phase of our roadmap is designed with transparency and community at its core. Help us build, test, and improve Fundraising.ph."
        primaryText="Build With Us on Fundraising.ph"
        primaryHref="https://fundraising.ph"
      />
    </div>
  )
}
