'use client'

import { useNavigation } from '@/lib/navigation'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL } from '@/lib/trust-governance-compliance-config'
import { Hero } from '@/components/shared/hero'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTAButton } from '@/components/shared/cta-button'
import { AnswerBlock } from '@/components/shared/answer-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { GlossaryTerm } from '@/components/shared/glossary-term'

const glossaryEntries = [
  {
    term: 'Verified Campaign',
    definition: 'A campaign that has completed the verification steps defined by Fundraise.ph, including identity checks, documentation review, and compliance assessment. A verified badge indicates specific review levels have been completed — it is not a guarantee.',
    relatedTerms: ['Campaign Organizer', 'Verification Framework', 'Trust Framework'],
  },
  {
    term: 'Campaign Organizer',
    definition: 'The individual or organization that creates and manages a fundraising campaign on Fundraising.ph. Organizers must complete identity verification and are responsible for documentation, disclosures, and post-campaign reporting.',
    relatedTerms: ['Verified Campaign', 'Beneficiary', 'Compliance Guidance'],
  },
  {
    term: 'Beneficiary',
    definition: 'The person, family, organization, or community that receives the funds raised by a campaign. Beneficiaries must consent to being named in a campaign, and their dignity and privacy must be protected throughout the process.',
    relatedTerms: ['Campaign Organizer', 'Transparency Report', 'Payout'],
  },
  {
    term: 'Donor Protection',
    definition: 'The set of standards, disclosures, and practices that ensure donors are informed about how their contributions are used, receive acknowledgment for their donations, and have visibility into fund flows and campaign outcomes.',
    relatedTerms: ['Verified Campaign', 'Donation Acknowledgment', 'Trust Framework'],
  },
  {
    term: 'Product-Based Fundraising',
    definition: 'A fundraising model where supporters purchase a product and a portion of the proceeds supports a campaign. This is a marketplace transaction, not a pure donation, and requires clear disclosure of the fund split and fulfillment terms.',
    relatedTerms: ['Marketplace Fundraising', 'Compliance Guidance', 'Campaign Organizer'],
  },
  {
    term: 'Marketplace Fundraising',
    definition: 'A category of fundraising that involves product sales, pre-orders, affiliate programs, or sponsor participation — where the transaction includes both a commercial element and a charitable contribution. Disclosure requirements differ from pure donation campaigns.',
    relatedTerms: ['Product-Based Fundraising', 'Solicitation Permit', 'Compliance Guidance'],
  },
  {
    term: 'Payout',
    definition: 'The disbursement of raised funds from a campaign to the designated beneficiary. Payouts follow documented fund flow protocols and are subject to verification and compliance checks before release.',
    relatedTerms: ['Beneficiary', 'Transparency Report', 'Campaign Organizer'],
  },
  {
    term: 'Campaign Update',
    definition: 'A public or donor-facing post by the campaign organizer that provides information about campaign progress, fund usage, beneficiary status, or milestone achievement. Regular updates are a transparency requirement for verified campaigns.',
    relatedTerms: ['Transparency Report', 'Campaign Organizer', 'Donor Protection'],
  },
  {
    term: 'Donation Acknowledgment',
    definition: 'A formal record provided to every donor confirming their contribution. Acknowledgment includes the donation amount, date, campaign reference, and may serve as a receipt for personal or tax record-keeping purposes.',
    relatedTerms: ['Donor Protection', 'Payout', 'Transparency Report'],
  },
  {
    term: 'Solicitation Permit',
    definition: 'A permit or authorization that may be required by local government units (LGUs), DSWD, or other authorities for certain types of public fundraising activities. Fundraise.ph provides educational guidance about solicitation awareness — not legal clearance.',
    relatedTerms: ['Compliance Guidance', 'Marketplace Fundraising', 'Campaign Organizer'],
  },
  {
    term: 'Transparency Report',
    definition: 'A public document that discloses fund flows, campaign outcomes, beneficiary verification, and organizational performance. Fundraise.ph publishes transparency reports to demonstrate accountability and build donor confidence.',
    relatedTerms: ['Trust Framework', 'Donor Protection', 'Payout'],
  },
  {
    term: 'Diaspora Giving',
    definition: 'The practice of overseas Filipinos (OFWs, immigrants, and diaspora communities) contributing to campaigns, causes, and communities in the Philippines. Diaspora giving represents a significant portion of Filipino philanthropy and requires specific safety and compliance considerations.',
    relatedTerms: ['Donor Protection', 'Compliance Guidance', 'Trust Framework'],
  },
  {
    term: 'Bayanihan',
    definition: 'A Filipino cultural value rooted in communal unity and collective action — neighbors helping neighbors. In the Fundraise.ph context, bayanihan is the spirit that drives Filipino giving and the namesake for the trust framework that makes digital bayanihan possible.',
    relatedTerms: ['Trust Framework', 'Diaspora Giving', 'Donor Protection'],
  },
  {
    term: 'Trust Framework',
    definition: 'The complete system of verification standards, compliance guidance, transparency commitments, governance principles, and donor protection practices that Fundraise.ph builds and maintains for the Filipino giving ecosystem.',
    relatedTerms: ['Verified Campaign', 'Compliance Guidance', 'Transparency Report'],
  },
  {
    term: 'Compliance Guidance',
    definition: 'Educational resources and operational guidance provided by Fundraise.ph to help campaign organizers understand campaign classification, documentation requirements, disclosure obligations, and when to seek independent professional advice. This is not legal advice.',
    relatedTerms: ['Solicitation Permit', 'Marketplace Fundraising', 'Campaign Organizer'],
  },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: glossaryEntries.map((entry) => ({
    '@type': 'Question',
    name: `What is ${entry.term}?`,
    acceptedAnswer: { '@type': 'Answer', text: entry.definition },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fundraise.ph' },
    { '@type': 'ListItem', position: 2, name: 'Knowledge Center', item: 'https://fundraise.ph/#knowledge-center' },
    { '@type': 'ListItem', position: 3, name: 'Glossary', item: 'https://fundraise.ph/#glossary' },
  ],
}

const internalLinksData = [
  { label: 'Knowledge Center', page: 'knowledge-center' },
  { label: 'Verification Framework', page: 'verification-framework' },
  { label: 'Compliance Guidance', page: 'compliance' },
  { label: 'Trust & Transparency', page: 'trust-transparency' },
  { label: 'FAQ', page: 'faq' },
  { label: 'Fundraise.ph vs Fundraising.ph', page: 'fundraise-vs-fundraising' },
]

export function GlossaryPage() {
  const { navigate } = useNavigation()
  const { current: heroVar } = useRotatingContent(heroVariations['glossary'])

  return (
    <>
      <SchemaMarkup schemas={[faqPageSchema, breadcrumbSchema]} />
      <div>
        <Hero
          badge="Glossary"
          headline={heroVar.headline}
          subheadline={heroVar.subheadline}
          variation={heroVar}
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <CTAButton onClick={() => navigate('knowledge-center')} variant="primary" size="lg">
              Knowledge Center
            </CTAButton>
            <CTAButton href={FUNDRAISING_PH_URL} variant="secondary" size="lg">
              Visit Fundraising.ph
            </CTAButton>
          </div>
        </Hero>

        <Section>
          <div className="max-w-4xl mx-auto">
            <AnswerBlock answer="Clear definitions for the terms used across Fundraise.ph and Fundraising.ph — from verified campaigns and donor protection to bayanihan and compliance guidance." />
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="Filipino Fundraising Glossary"
            subtitle="Every term defined in plain English. Click any related term to explore further."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {glossaryEntries.map((entry, index) => (
              <GlossaryTerm
                key={index}
                term={entry.term}
                definition={entry.definition}
                relatedTerms={entry.relatedTerms}
              />
            ))}
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto space-y-6">
            <AuthorBox lastUpdated="2026-06-10" />
            <InternalLinks links={internalLinksData} />
          </div>
        </Section>
      </div>
    </>
  )
}
