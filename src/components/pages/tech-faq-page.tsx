'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PLATFORM_URL } from '@/lib/technology-impact-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { SEOBlock } from '@/components/shared/seo-block'

const faqItems = [
  {
    question: 'Is Fundraise.ph the same as Fundraising.ph?',
    answer: 'No. Fundraise.ph is the nonprofit technology and trust organization that builds the verification, transparency, governance, and compliance infrastructure. Fundraising.ph is the campaign and marketplace platform where campaigns are created, donations are made, and impact is delivered. They work together but serve different purposes.',
  },
  {
    question: 'What technology does Fundraise.ph build?',
    answer: 'Fundraise.ph builds the trust infrastructure for Fundraising.ph — including verification workflows, compliance guidance systems, donor acknowledgment engines, marketplace tools, and impact measurement frameworks. All technology operates under human oversight.',
  },
  {
    question: 'What is marketplace fundraising?',
    answer: 'Marketplace fundraising enables product-based campaigns where Filipino creators and communities sell products, accept pre-orders, or run sponsor-supported programs — with proceeds benefiting verified campaigns. These transactions are purchases or sponsorships, not pure donations, and must be clearly disclosed as such.',
  },
  {
    question: 'How does Fundraise.ph measure impact?',
    answer: 'Fundraise.ph measures impact across six categories: Campaign Impact, Donor Impact, Beneficiary Impact, Marketplace Impact, Trust Impact, and Community Impact. All metrics are clearly labeled as planned, prototype, or live — never presenting aspirational data as real metrics.',
  },
  {
    question: 'Are the impact metrics on the dashboard real?',
    answer: 'The Impact Dashboard currently shows planned metric categories. When real production data becomes available, it will be clearly labeled. Fundraise.ph will never display simulated, aspirational, or placeholder data as live metrics.',
  },
  {
    question: 'How does diaspora giving work?',
    answer: 'Diaspora giving technology will help overseas Filipinos discover and support verified campaigns in their hometowns and communities. Features include hometown campaign discovery, cross-border compliance awareness, international donor education, and transparent impact reporting. These features are in the planning phase.',
  },
  {
    question: 'What is the technology roadmap?',
    answer: 'The technology roadmap covers 9 phases — from nonprofit incorporation and trust verification to marketplace fundraising, diaspora engagement, institutional partnerships, and open data. Each phase is labeled with its actual status: In Progress, Planned, Priority Use Case, or Future Phase. No phase is marked complete until it is functionally operational.',
  },
  {
    question: 'How does Fundraise.ph protect data privacy?',
    answer: 'Fundraise.ph follows Privacy by Design and Data Minimization principles. Only data strictly necessary for operations is collected. Personal information is encrypted, access-controlled, and never sold. Open data uses only aggregated, anonymized information. Private donor data, beneficiary records, and PII are never published without consent.',
  },
  {
    question: 'What is open data at Fundraise.ph?',
    answer: 'Open data at Fundraise.ph means publishing aggregated, anonymized trust metrics, research briefs, and verification statistics — never private donor data, sensitive beneficiary information, or personally identifiable information. All open data activities follow our Data Protection Policy.',
  },
  {
    question: 'How can I start or support a campaign?',
    answer: 'Visit Fundraising.ph to create, support, or explore verified campaigns. The platform guides campaigners through identity verification, documentation, campaign setup, and compliance-aware practices.',
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

export function TechFaqPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['tech-faq'])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div>
        <PageHeader
          title="Technology & Impact FAQ"
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
          subheadline="Visit Fundraising.ph to explore campaigns and see how the technology works in practice."
          ctaLabel="Go to Fundraising.ph Platform"
          ctaHref={PLATFORM_URL}
        />
      </div>
    </>
  )
}
