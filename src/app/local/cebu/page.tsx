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
  title: 'Fundraising Platform in Cebu | Fundraising.ph',
  description: 'Verified fundraising campaigns in Cebu and the Visayas. Support medical, disaster relief, and community projects across Cebu. Transparent, compliant platform built for Cebuanos.',
  keywords: [
    'fundraising Cebu', 'crowdfunding Cebu', 'Cebu fundraising platform',
    'online fundraising Cebu Philippines', 'Cebu disaster relief fundraising',
    'Cebuano community fundraising', 'Cebu medical fundraising',
    'Visayas fundraising', 'fundraising near me Cebu',
  ],
  openGraph: {
    title: 'Fundraising Platform in Cebu | Fundraising.ph',
    description: 'Verified fundraising campaigns in Cebu and the Visayas. Support medical, disaster relief, and community projects across Cebu.',
    url: 'https://fundraising.ph/local/cebu',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://fundraising.ph' },
  { name: 'Local', url: 'https://fundraising.ph/local' },
  { name: 'Cebu', url: 'https://fundraising.ph/local/cebu' },
]

const faqItems = [
  {
    question: 'How does Fundraising.ph help Cebu after typhoons and natural disasters?',
    answer: 'Fundraising.ph enables rapid deployment of verified disaster relief campaigns specifically for Cebu and the Visayas. Campaigners can create campaigns documenting damage assessment, relief distribution plans, and rebuilding needs. Our verification framework helps ensure that disaster relief funds reach affected communities in Cebu City, Mandaue, Lapu-Lapu, and surrounding municipalities with full transparency and accountability.',
  },
  {
    question: 'Can Cebuano-language campaigns be created on Fundraising.ph?',
    answer: 'Fundraising.ph currently supports English and Filipino campaign descriptions. While we recognize the importance of Cebuano (Bisaya) for local community engagement, our verification workflows are optimized for English and Filipino documentation. Campaigners are encouraged to describe their cause in English or Filipino for maximum donor reach, while engaging their local community in any language through their own outreach channels.',
  },
  {
    question: 'What medical fundraising resources are available in Cebu?',
    answer: 'Cebu hosts major medical facilities including Vicente Sotto Memorial Medical Center, Chong Hua Hospital, and Cebu Doctors\' University Hospital. Fundraising.ph helps campaigners present verified medical bills, treatment plans, and hospital documentation for these institutions. Cebu\'s growing medical tourism sector also means some campaigns involve international patients seeking treatment in Cebu hospitals.',
  },
  {
    question: 'How does Fundraising.ph serve the Visayas region beyond Cebu City?',
    answer: 'While this page focuses on Cebu, Fundraising.ph serves the entire Visayas region. Campaigners from Cebu\'s neighboring provinces — Bohol, Leyte, Samar, Negros Oriental, and Siquijor — can create campaigns on the same platform. Cebu City serves as the regional hub where many Visayas residents travel for medical treatment, education, and commerce, making it a natural center for regional fundraising coordination.',
  },
  {
    question: 'Are there Cebu-specific compliance considerations for fundraising?',
    answer: 'Fundraising campaigns in Cebu follow the same national regulatory framework as the rest of the Philippines. However, Cebu City has its own local government permitting processes for public events and solicitation activities. Fundraising.ph\'s compliance guidance covers both national requirements (SEC, BIR, Data Privacy Act) and helps campaigners understand when Cebu City Hall coordination may be needed for their specific campaign type.',
  },
  {
    question: 'How can Cebu\'s tourism and business community participate in fundraising?',
    answer: 'Cebu\'s robust business and tourism sectors can engage with Fundraising.ph through marketplace fundraising — selling products, tours, or experiences with proceeds supporting verified campaigns. Cebu-based businesses can also partner directly with Fundraise.ph through our institutional partnership program, contributing to trust infrastructure development for the entire Visayas region.',
  },
]

const schemas = [
  articleSchema(
    'Fundraising Platform in Cebu',
    'Verified fundraising campaigns in Cebu and the Visayas. Support medical, disaster relief, and community projects across Cebu.',
    'https://fundraising.ph/local/cebu',
    '2025-01-15',
  ),
  faqPageSchema(faqItems),
  breadcrumbSchema(breadcrumbs),
]

export default function CebuPage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <PageHeader
        title="Cebu, Philippines"
        headline="Trusted {Fundraising} for the Queen City of the South"
        description="Cebu and the Visayas deserve verified, transparent fundraising. From typhoon recovery to medical campaigns at Chong Hua — built for Cebuanos, by Filipinos."
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <AnswerBlock
            question="Why does Cebu need a dedicated fundraising platform?"
            answer="Cebu serves as the economic and cultural hub of the Visayas, home to over 1 million residents in Cebu City alone and millions more across Metro Cebu. The region faces recurring typhoons — including Super Typhoon Odette in 2021 which caused devastating damage across Cebu, Bohol, and surrounding islands. Beyond disaster recovery, Cebu's growing medical sector, vibrant tourism industry, and strong Cebuano cultural identity create fundraising needs that require local understanding, Cebu-specific verification workflows, and a platform that respects the unique character of Visayan communities."
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Cebu: The Visayas Fundraising Hub</h2>
            <p className="text-[#4A5568] leading-relaxed">
              As the gateway to the Visayas and Mindanao, Cebu occupies a critical position in Philippine fundraising. The province serves as a medical referral center for the entire region — patients from Bohol, Leyte, Negros Oriental, and even parts of Mindanao travel to Cebu City for specialized treatment at Vicente Sotto Memorial Medical Center, Chong Hua Hospital, and Perpetual Succour Hospital. Each of these referrals generates medical fundraising needs that span provinces and require coordinated verification.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              Cebu's disaster profile is equally significant. Typhoon Odette (Rai) in December 2021 destroyed over 100,000 homes across Cebu province, displaced hundreds of thousands of families, and caused billions in damage. The recovery effort demonstrated both the generosity of the Filipino diaspora and the urgent need for verified, transparent fundraising channels that can quickly deploy during emergencies while maintaining accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProofBlock variant="verification" title="Disaster Relief Verification in Cebu">
              When typhoons strike the Visayas, Fundraising.ph activates rapid verification protocols for disaster relief campaigns. This includes damage documentation, relief distribution verification, and rebuilding fund tracking — specific to Cebu's geography and affected communities.
            </ProofBlock>
            <ProofBlock variant="compliance" title="Visayas Compliance Framework">
              Fundraising.ph provides compliance guidance that accounts for both national Philippine regulations and regional considerations specific to Cebu and the Visayas, including LGU coordination for disaster response campaigns and local government permitting for community fundraising events.
            </ProofBlock>
            <ProofBlock variant="product" title="Cebu Market-Place Fundraising">
              Cebu's thriving tourism, food, and craft industries provide a natural foundation for marketplace fundraising. Local businesses in Cebu City, Mandaue, and Lapu-Lapu can sell products or experiences with proceeds supporting verified community campaigns.
            </ProofBlock>
            <ProofBlock variant="default" title="Cebu Medical Campaign Support">
              Campaigns connected to Cebu's medical tourism sector and regional referral hospitals receive specialized documentation guidance, helping campaigners present treatment plans and billing documents in a format that builds donor confidence and accelerates verification.
            </ProofBlock>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Disaster Preparedness and Recovery in Cebu</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Fundraising.ph recognizes that Cebu's geographic position makes it vulnerable to typhoons, storm surges, and earthquakes. Our platform is designed to support both proactive disaster preparedness fundraising and rapid-response recovery campaigns. Before typhoon season, Cebu communities can create preparedness campaigns for emergency supplies, infrastructure reinforcement, and evacuation support. After a disaster strikes, the same platform enables verified relief and rebuilding campaigns with full fund transparency.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              The lessons from Typhoon Odette shaped our approach: Cebu communities need a fundraising partner they can trust before, during, and after disasters. Fundraising.ph provides that trust through verification, compliance, and transparent reporting — every step of the way.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Cebu's Medical Sector and Fundraising</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Cebu has emerged as a premier medical destination for the Visayas and Mindanao regions. Vicente Sotto Memorial Medical Center serves as the region's largest public hospital, while private institutions like Chong Hua Hospital and Cebu Doctors' University Hospital attract patients seeking specialized care. This concentration of medical services means a significant portion of Visayas fundraising activity is medical in nature — and Fundraising.ph is built to handle the complex verification requirements of medical campaigns across multiple institutions and provinces.
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
              { label: 'Philippines Compliance Guide', href: 'https://fundraise.ph', page: 'philippines-compliance-guide', description: 'Legal and regulatory framework for Philippine fundraising.' },
              { label: 'Disaster Relief Fundraising', href: 'https://fundraising.ph/disaster-relief-fundraising', description: 'How to create verified disaster relief and recovery campaigns.' },
              { label: 'Fundraising in Davao', href: 'https://fundraising.ph/local/davao', description: 'Mindanao-specific fundraising resources and campaigns.' },
              { label: 'Community Fundraising in the Philippines', href: 'https://fundraising.ph/local/philippines-community', description: 'Bayanihan-powered community fundraising across the Philippines.' },
              { label: 'Campaign Verification Framework', href: 'https://fundraise.ph', page: 'campaign-verification-framework', description: 'How Fundraising.ph verifies every campaign for donor protection.' },
            ]}
          />
        </div>
      </Section>

      <CTABlock
        headline="Start Your Cebu Campaign Today"
        subheadline="From typhoon recovery to medical campaigns — verified, transparent fundraising for the Visayas."
        ctaLabel="Create a Campaign on Fundraising.ph"
        ctaHref={PLATFORM_URL}
      />
    </>
  )
}
