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
  title: 'Fundraising Platform in Quezon City | Fundraising.ph',
  description: 'Quezon City fundraising platform for verified campaigns. Support QC-based medical, education, and community projects. Transparent, compliant fundraising for the Philippines\' largest city.',
  keywords: [
    'fundraising Quezon City', 'crowdfunding Quezon City', 'QC fundraising',
    'online fundraising Quezon City Philippines', 'university fundraising QC',
    'barangay fundraising Quezon City', 'QC medical fundraising',
    'fundraising platform Quezon City', 'fundraising near me Quezon City',
  ],
  openGraph: {
    title: 'Fundraising Platform in Quezon City | Fundraising.ph',
    description: 'Quezon City fundraising platform for verified campaigns. Support QC-based medical, education, and community projects.',
    url: 'https://fundraising.ph/local/quezon-city',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://fundraising.ph' },
  { name: 'Local', url: 'https://fundraising.ph/local' },
  { name: 'Quezon City', url: 'https://fundraising.ph/local/quezon-city' },
]

const faqItems = [
  {
    question: 'How is fundraising different in Quezon City compared to other Philippine cities?',
    answer: 'Quezon City has the largest population of any city in the Philippines at nearly 3 million residents, with a high concentration of universities, government offices, and diverse barangays. This creates a unique fundraising ecosystem where university-based campaigns, government employee drives, and barangay-level community projects coexist. Fundraising.ph accommodates this diversity with campaign types and verification workflows tailored to each context.',
  },
  {
    question: 'Can I fundraise for a project in my QC barangay?',
    answer: 'Yes. Fundraising.ph supports barangay-level community campaigns including infrastructure improvements, community health programs, local sports leagues, and neighborhood disaster preparedness projects. You can specify your barangay to help local residents discover and support your campaign. We recommend coordinating with your barangay captain for community projects.',
  },
  {
    question: 'How do universities in Quezon City use Fundraising.ph?',
    answer: 'Universities such as UP Diliman, Ateneo de Manila, and Miriam College can use Fundraising.ph for student scholarships, research funding, student organization projects, and university-sponsored community extension programs. Each campaign goes through the same verification process, and university documentation such as enrollment records and program certifications strengthen campaign credibility.',
  },
  {
    question: 'What medical fundraising options are available in QC?',
    answer: 'Quezon City is home to major medical facilities including the Philippine Heart Center, National Kidney and Transplant Institute, and East Avenue Medical Center. Medical fundraising campaigns can reference these institutions, and Fundraising.ph helps campaigners present hospital billing documents, treatment plans, and doctor certifications in a verified and transparent format.',
  },
  {
    question: 'Is Fundraising.ph compliant with Quezon City local regulations?',
    answer: 'Fundraising.ph operates within the national regulatory framework of the Philippines, including SEC guidelines, the Data Privacy Act, and consumer protection laws. For QC-specific requirements such as local permits for public fundraising events or coordination with the QC local government unit, our compliance guidance helps campaigners understand what applies to their specific campaign type.',
  },
  {
    question: 'How can QC residents track the impact of their campaigns?',
    answer: 'Every campaign on Fundraising.ph includes a transparent impact reporting system. Campaigners provide fund usage updates, photo documentation, and outcome summaries. QC donors and beneficiaries can see exactly how funds were used, and all metrics are clearly labeled as planned, prototype, or live — never presenting aspirational data as real results.',
  },
]

const schemas = [
  articleSchema(
    'Fundraising Platform in Quezon City',
    'Quezon City fundraising platform for verified campaigns. Support QC-based medical, education, and community projects.',
    'https://fundraising.ph/local/quezon-city',
    '2025-01-15',
  ),
  faqPageSchema(faqItems),
  breadcrumbSchema(breadcrumbs),
]

export default function QuezonCityPage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <PageHeader
        title="Quezon City, Philippines"
        headline="{Verified Fundraising} for the Philippines' Largest City"
        description="Quezon City residents deserve transparent, compliant fundraising. From UP Diliman scholarships to barangay projects — build trust in every campaign."
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <AnswerBlock
            question="Why does Quezon City need its own fundraising approach?"
            answer="With nearly 3 million residents spread across 142 barangays, Quezon City is the Philippines' most populous city. It hosts the country's premier universities, government medical centers, and a vast network of diverse communities — each with distinct fundraising needs. A one-size-fits-all platform cannot serve UP Diliman research funding, Barangay Bahay Toro community projects, and Philippine Heart Center medical campaigns equally. Fundraising.ph provides specialized verification and compliance workflows for each."
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Quezon City's Unique Fundraising Landscape</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Quezon City's size and diversity create a fundraising environment unlike anywhere else in the Philippines. The Diliman and Loyola Heights districts host major universities where student organizations regularly raise funds for scholarships, outreach programs, and academic competitions. In contrast, northern and eastern QC barangays face infrastructure gaps and disaster vulnerability that drive community-level fundraising needs.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              The presence of government-owned and controlled corporation hospitals along East Avenue — including the Philippine Heart Center, National Kidney and Transplant Institute, and Lung Center of the Philippines — means QC handles some of the country's most critical medical fundraising cases. These institutions serve patients nationwide, and Fundraising.ph helps families from across the country present verified medical campaigns connected to these facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProofBlock variant="verification" title="University Campaign Verification">
              QC university campaigns receive specialized verification that validates enrollment status, student organization recognition, and academic program legitimacy. Whether it's a UP Diliman scholarship drive or an Ateneo social enterprise project, our framework ensures campaigns meet institutional and platform standards.
            </ProofBlock>
            <ProofBlock variant="compliance" title="QC Barangay Compliance Support">
              Community campaigns in QC barangays benefit from compliance guidance that covers barangay permits, LGU coordination requirements, and transparent fund management practices. We help campaigners understand when local government coordination is recommended or required.
            </ProofBlock>
            <ProofBlock variant="product" title="Marketplace Fundraising for QC Entrepreneurs">
              Quezon City's thriving small business community — from Maginhawa food entrepreneurs to Cubao artisans — can leverage marketplace fundraising to sell products or accept sponsorships, with proceeds supporting verified community campaigns.
            </ProofBlock>
            <ProofBlock variant="default" title="Medical Center Campaign Support">
              Campaigns connected to QC's government medical centers receive documentation guidance specific to these institutions — including billing statement formats, treatment plan documentation, and financial assistance program coordination.
            </ProofBlock>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">How Fundraising.ph Serves Quezon City Residents</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Fundraising.ph is designed to serve the full spectrum of QC fundraising needs. For university students and faculty, we provide academic campaign templates and institutional verification pathways. For barangay leaders and community organizers, we offer community project frameworks with barangay coordination guidance. For families dealing with medical emergencies at QC hospitals, we streamline the verification of hospital documents and treatment plans.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              Our platform also connects QC campaigns with the broader Filipino diaspora network. Many QC residents have family members working abroad who want to support local causes. Fundraising.ph makes it easy for overseas Filipinos to discover, verify, and donate to campaigns in their home barangays and communities within Quezon City.
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
              { label: 'Why Fundraise.ph Exists', href: 'https://fundraise.ph', page: 'why-we-exist', description: 'Our mission to build trusted fundraising infrastructure for the Philippines.' },
              { label: 'Philippines Compliance Guide', href: 'https://fundraise.ph', page: 'philippines-compliance-guide', description: 'Legal and regulatory framework for fundraising in the Philippines.' },
              { label: 'Education Fundraising', href: 'https://fundraising.ph/education-fundraising', description: 'Dedicated guide for school and university fundraising campaigns.' },
              { label: 'Fundraising in Manila', href: 'https://fundraising.ph/local/manila', description: 'Manila-specific fundraising resources and campaigns.' },
              { label: 'School Fundraising in Metro Manila', href: 'https://fundraising.ph/local/metro-manila-schools', description: 'School and PTA fundraising guide for NCR schools.' },
              { label: 'Donor Protection', href: 'https://fundraise.ph', page: 'donor-protection', description: 'How Fundraising.ph protects donors on every transaction.' },
            ]}
          />
        </div>
      </Section>

      <CTABlock
        headline="Start Your Quezon City Campaign"
        subheadline="From Diliman to Commonwealth — verified fundraising for every QC community."
        ctaLabel="Create a Campaign on Fundraising.ph"
        ctaHref={PLATFORM_URL}
      />
    </>
  )
}
