import type { Metadata } from 'next'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { SEOBlock } from '@/components/shared/seo-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { CTABlock } from '@/components/shared/cta-block'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema-helpers'
import { PLATFORM_URL } from '@/lib/technology-impact-config'

export const metadata: Metadata = {
  title: 'Fundraising Platform in Manila | Fundraising.ph',
  description: 'Start or support verified fundraising campaigns in Manila. Transparent, compliant online fundraising for Manila-based causes including medical bills, community projects, and disaster relief across Metro Manila.',
  keywords: [
    'fundraising Manila', 'crowdfunding Manila', 'online fundraising Manila Philippines',
    'medical fundraising Manila', 'Manila hospital bills', 'Manila community fundraising',
    'fundraising platform Manila', 'Manila campaign', 'Metro Manila fundraising',
    'fundraising near me Manila',
  ],
  openGraph: {
    title: 'Fundraising Platform in Manila | Fundraising.ph',
    description: 'Start or support verified fundraising campaigns in Manila. Transparent, compliant online fundraising for Manila-based causes.',
    url: 'https://fundraising.ph/local/manila',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://fundraising.ph' },
  { name: 'Local', url: 'https://fundraising.ph/local' },
  { name: 'Manila', url: 'https://fundraising.ph/local/manila' },
]

const faqItems = [
  {
    question: 'How do I start a fundraising campaign in Manila?',
    answer: 'Visit Fundraising.ph and create an account. You will be guided through identity verification, campaign documentation, and compliance-aware setup. Manila-based campaigners can specify their local hospital, school, or community organization to help donors find and verify the campaign.',
  },
  {
    question: 'Is Fundraising.ph free to use for Manila residents?',
    answer: 'Creating a campaign on Fundraising.ph is free. Platform fees are kept transparent and clearly disclosed before any transaction. There are no hidden charges for Manila-based campaigners or donors.',
  },
  {
    question: 'What types of campaigns work best in Manila?',
    answer: 'Medical expense campaigns for treatments at Philippine General Hospital, St. Luke\'s Medical Center, and Makati Medical Center are among the most urgent. Education scholarships for Manila universities, community rebuilding after typhoons in Tondo and Sampaloc, and small business recovery campaigns also see strong support from both local and diaspora donors.',
  },
  {
    question: 'How does Fundraising.ph verify Manila-based campaigns?',
    answer: 'Fundraising.ph applies its Campaign Verification Framework to all campaigns, including those in Manila. This includes identity verification, documentation review, and compliance checks. Campaigners may be asked to provide hospital billing statements, enrollment records, or barangay certification depending on the campaign type.',
  },
  {
    question: 'Can overseas Filipinos donate to Manila campaigns?',
    answer: 'Yes. Fundraising.ph supports diaspora giving, allowing overseas Filipinos to discover and donate to verified campaigns in their hometowns across Manila. International donations are processed with clear disclosure of fees, exchange rates, and tax implications.',
  },
  {
    question: 'What makes Fundraising.ph different from other platforms for Manila campaigns?',
    answer: 'Fundraising.ph is built specifically for Filipino giving. It provides verification workflows, compliance guidance aligned with Philippine regulations, donor acknowledgment systems, and transparent impact reporting. Unlike general crowdfunding platforms, every feature is designed around the needs and regulations of Philippine-based fundraising.',
  },
]

const schemas = [
  articleSchema(
    'Fundraising Platform in Manila',
    'Start or support verified fundraising campaigns in Manila. Transparent, compliant online fundraising for Manila-based causes.',
    'https://fundraising.ph/local/manila',
    '2025-01-15',
  ),
  faqPageSchema(faqItems),
  breadcrumbSchema(breadcrumbs),
]

export default function ManilaPage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <PageHeader
        title="Manila, Philippines"
        headline="Trusted {Fundraising} for Manila Communities"
        description="Start or support verified fundraising campaigns across Manila. From hospital bills at PGH to community projects in Tondo — transparent, compliant, and built for Filipinos."
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <AnswerBlock
            question="Why do Manila residents need a trusted fundraising platform?"
            answer="Manila faces the highest cost of living in the Philippines, with medical expenses at private hospitals like St. Luke's and Makati Med reaching hundreds of thousands of pesos for critical procedures. Many Manila families rely on extended networks and informal borrowing to cover emergency costs. Fundraising.ph brings structure, transparency, and verification to this process — ensuring that campaigns are legitimate, donors are protected, and funds reach their intended purpose."
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Manila Fundraising Context</h2>
            <p className="text-[#4A5568] leading-relaxed">
              As the capital and most densely populated city in the Philippines, Manila presents unique fundraising challenges and opportunities. With over 1.8 million residents in the city proper and millions more in surrounding Metro Manila, the demand for transparent fundraising spans medical emergencies, education access, housing rehabilitation, and small business recovery.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              Manila's major hospitals — Philippine General Hospital, Manila Doctors Hospital, and University of Santo Tomas Hospital — serve patients from across the country, making medical fundraising one of the most critical needs. Meanwhile, communities in districts like Tondo, Sampaloc, and Ermita face recurring challenges from flooding, fire incidents, and inadequate infrastructure that require community-driven fundraising solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProofBlock variant="verification" title="Campaign Verification for Manila">
              Every Manila-based campaign goes through Fundraising.ph's verification framework — identity checks, documentation review, and compliance screening. Whether it's a hospital bill at PGH or a community project in Binondo, donors can see exactly what has been verified.
            </ProofBlock>
            <ProofBlock variant="compliance" title="Philippine Compliance Guidance">
              Fundraising.ph provides compliance guidance aligned with Philippine regulations, including SEC registration awareness, BIR receipt issuance for qualifying donations, and data privacy compliance under the Data Privacy Act of 2012 — all tailored for Manila-based campaigners.
            </ProofBlock>
            <ProofBlock variant="product" title="Marketplace Fundraising in Manila">
              Manila's creative and entrepreneurial communities can use marketplace fundraising to sell products or accept sponsorships with proceeds supporting verified campaigns — from Tondo artisans to Quiapо small businesses seeking recovery funding.
            </ProofBlock>
            <ProofBlock variant="default" title="Transparent Impact Reporting">
              Every campaign on Fundraising.ph includes transparent fund tracking and impact updates. Manila donors and beneficiaries can see exactly how funds are used, building the trust that Filipino giving deserves.
            </ProofBlock>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">How to Start a Campaign for Manila-Based Causes</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-gold text-navy text-sm font-bold flex items-center justify-center shrink-0">1</span>
                <div>
                  <h3 className="font-semibold text-navy">Create Your Campaign</h3>
                  <p className="text-sm text-[#4A5568]">Sign up on Fundraising.ph and describe your Manila-based cause — medical expenses, community projects, education, or disaster recovery.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-gold text-navy text-sm font-bold flex items-center justify-center shrink-0">2</span>
                <div>
                  <h3 className="font-semibold text-navy">Complete Verification</h3>
                  <p className="text-sm text-[#4A5568]">Upload supporting documents — hospital billing statements, barangay certifications, or school enrollment records. Our verification team reviews each submission.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-gold text-navy text-sm font-bold flex items-center justify-center shrink-0">3</span>
                <div>
                  <h3 className="font-semibold text-navy">Share with Your Community</h3>
                  <p className="text-sm text-[#4A5568]">Once verified, share your campaign across Manila communities, diaspora networks, and social media. Fundraising.ph provides sharing tools and donor outreach features.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-gold text-navy text-sm font-bold flex items-center justify-center shrink-0">4</span>
                <div>
                  <h3 className="font-semibold text-navy">Receive Funds Transparently</h3>
                  <p className="text-sm text-[#4A5568]">Funds are disbursed with full transparency reporting. Campaigners provide updates, and donors receive acknowledgment — building trust for future campaigns.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Manila-Specific Resources</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Fundraising.ph maintains connections with Manila-based institutions including major hospital networks, university systems, and community organizations. Campaigners can reference these institutions to improve campaign credibility and help donors verify the legitimacy of their cause. Our compliance guidance also covers Manila-specific requirements such as Manila City Hall permits for public fundraising events and coordination with barangay officials for community campaigns.
            </p>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
          <SEOBlock items={faqItems} />
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-6">
          <AuthorBox
            author="Fundraise.ph Editorial Team"
            role="Trust & Transparency Team"
            lastUpdated="January 2025"
          />
          <InternalLinks
            title="Related Resources"
            links={[
              { label: 'Why Fundraise.ph Exists', href: 'https://fundraise.ph', page: 'why-we-exist', description: 'Learn about our mission and why trusted fundraising infrastructure matters for the Philippines.' },
              { label: 'Philippines Compliance Guide', href: 'https://fundraise.ph', page: 'philippines-compliance-guide', description: 'Understand the legal and regulatory framework for fundraising in the Philippines.' },
              { label: 'Medical Fundraising Guide', href: 'https://fundraising.ph/medical-fundraising', description: 'Step-by-step guide for medical expense campaigns in the Philippines.' },
              { label: 'Fundraising in Quezon City', href: 'https://fundraising.ph/local/quezon-city', description: 'QC-specific fundraising resources and community campaigns.' },
              { label: 'Community Fundraising in the Philippines', href: 'https://fundraising.ph/local/philippines-community', description: 'How bayanihan culture powers Filipino community fundraising.' },
              { label: 'Diaspora Giving Safety', href: 'https://fundraise.ph', page: 'diaspora-giving-safety', description: 'Safety guidelines for overseas Filipinos donating to Philippine campaigns.' },
            ]}
          />
        </div>
      </Section>

      <CTABlock
        headline="Start Your Manila Campaign Today"
        subheadline="Join thousands of Filipinos using transparent, verified fundraising to support Manila communities."
        ctaLabel="Create a Campaign on Fundraising.ph"
        ctaHref={PLATFORM_URL}
      />
    </>
  )
}
