'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL } from '@/lib/trust-governance-compliance-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { SEOBlock } from '@/components/shared/seo-block'

const faqItems = [
  {
    question: 'What is Fundraise.ph?',
    answer: 'Fundraise.ph is a nonprofit technology organization focused on building the trust, transparency, governance, and compliance-aware infrastructure for Filipino fundraising. We are not a fundraising platform — we are the trust layer that ensures fundraising is done right.',
  },
  {
    question: 'What is Fundraising.ph?',
    answer: 'Fundraising.ph is the platform where campaigns, marketplace fundraising, donor communication, sponsor participation, and campaign reporting are expected to happen. It is where campaigns are created, donations are made, and impact is delivered.',
  },
  {
    question: 'What is the difference between Fundraise.ph and Fundraising.ph?',
    answer: 'Fundraise.ph is the nonprofit trust and governance organization that sets standards, manages verification, provides compliance guidance, and ensures transparency. Fundraising.ph is the campaign and marketplace platform where fundraising actually takes place. Together, they form a complete ecosystem of trusted Filipino giving.',
  },
  {
    question: 'Does Fundraise.ph verify campaigns?',
    answer: 'Fundraise.ph supports the development of verification standards, governance models, and trust frameworks. Campaign verification workflows are expected to be implemented through Fundraising.ph. Verification involves multi-level review including identity checks, documentation review, and compliance assessment.',
  },
  {
    question: 'Does verification mean legal approval?',
    answer: 'No. Verification does not mean blanket legal approval, regulatory clearance, or endorsement. It reflects a review level completed based on available documents and platform standards. A verification badge is not a guarantee — it indicates that specific review steps have been completed.',
  },
  {
    question: 'Does Fundraise.ph provide legal advice?',
    answer: 'No. Fundraise.ph provides educational and operational guidance only. It does not replace professional legal, tax, accounting, compliance, or regulatory advice. Campaigners are encouraged to seek independent professional consultation where applicable.',
  },
  {
    question: 'Why include compliance?',
    answer: 'Because responsible fundraising requires campaign classification, documentation, privacy controls, payment transparency, public solicitation awareness, and review pathways. Compliance awareness protects campaigners, donors, beneficiaries, and the broader community.',
  },
  {
    question: 'How do I start a campaign?',
    answer: 'Visit Fundraising.ph to create, support, or explore campaigns. The platform guides campaigners through identity verification, documentation submission, campaign setup, and compliance-aware fundraising practices.',
  },
  {
    question: 'What is campaign classification?',
    answer: 'Campaign classification helps identify what type of fundraising is being conducted — whether it is a donation, marketplace purchase, sponsor-supported campaign, or another model. Classification determines applicable documentation requirements, disclosure obligations, and review pathways.',
  },
  {
    question: 'What are verification badges?',
    answer: 'Verification badges are visual indicators showing what review steps have been completed for a campaign. Examples include Organizer Verified, Documents Submitted, Beneficiary Confirmed, and Campaign Completed. Badges reflect review levels, not guarantees.',
  },
  {
    question: 'How does Fundraise.ph protect beneficiary dignity?',
    answer: 'Fundraise.ph requires documented beneficiary consent for campaigns, prohibits exploitation or sensationalism of hardship, protects beneficiary personal information, and ensures beneficiaries have the right to request campaign modifications or removal.',
  },
  {
    question: 'What governance principles does Fundraise.ph follow?',
    answer: 'Fundraise.ph operates under six governance principles: Mission Lock, Transparency by Default, Compliance-Aware Operations, Conflict-of-Interest Management, Human Oversight Over Automation, and Beneficiary Dignity. These are non-negotiable commitments embedded in the organization.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Fundraise.ph',
  url: 'https://fundraise.ph',
  description: 'Fundraise.ph is a nonprofit technology organization building the trust layer for Filipino giving.',
  sameAs: [],
}

export function FaqPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['faq'])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div>
        <PageHeader
          title="FAQ"
          headline={heroVar.headline}
          description={heroVar.subheadline}
          variation={heroVar}
        />

        <Section>
          <div className="max-w-4xl mx-auto">
            <SEOBlock items={faqItems} />
          </div>
        </Section>

        <CTABlock
          headline="Still have questions?"
          subheadline="Visit Fundraising.ph to explore campaigns and see how the trust framework works in practice."
          ctaLabel="Go to Fundraising.ph Platform"
          ctaHref={FUNDRAISING_PH_URL}
        />
      </div>
    </>
  )
}
