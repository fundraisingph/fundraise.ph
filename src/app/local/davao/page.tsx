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
  title: 'Fundraising Platform in Davao | Fundraising.ph',
  description: 'Verified fundraising campaigns in Davao and Mindanao. Support agricultural communities, indigenous peoples, and Davao-based causes. Transparent, compliant fundraising built for Mindanao.',
  keywords: [
    'fundraising Davao', 'crowdfunding Davao', 'Davao fundraising platform',
    'online fundraising Davao Philippines', 'Mindanao fundraising',
    'Davao community fundraising', 'agricultural fundraising Davao',
    'indigenous community fundraising Philippines', 'fundraising near me Davao',
  ],
  openGraph: {
    title: 'Fundraising Platform in Davao | Fundraising.ph',
    description: 'Verified fundraising campaigns in Davao and Mindanao. Support agricultural communities, indigenous peoples, and Davao-based causes.',
    url: 'https://fundraising.ph/local/davao',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://fundraising.ph' },
  { name: 'Local', url: 'https://fundraising.ph/local' },
  { name: 'Davao', url: 'https://fundraising.ph/local/davao' },
]

const faqItems = [
  {
    question: 'How does Fundraising.ph serve Mindanao communities?',
    answer: 'Fundraising.ph serves all of Mindanao through verified campaigns originating from or benefiting Mindanao communities. While this page focuses on Davao City as the regional hub, campaigns from Cotabato, General Santos, Zamboanga, Butuan, and other Mindanao cities and provinces are equally supported. Our verification framework accommodates the diverse documentation standards across Mindanao\'s varied institutions and LGUs.',
  },
  {
    question: 'Can agricultural cooperatives in Davao use Fundraising.ph?',
    answer: "Yes. Davao's agricultural cooperatives — particularly those in banana, durian, cacao, and coconut sectors — can use Fundraising.ph for capital campaigns, equipment purchases, and disaster recovery after crop damage. Cooperative campaigns can reference their CDA (Cooperative Development Authority) registration as part of the verification process, strengthening campaign credibility.",
  },
  {
    question: 'How does Fundraising.ph support indigenous community campaigns in Davao?',
    answer: 'Fundraising.ph recognizes the unique context of indigenous community campaigns in Mindanao. Campaigns benefiting indigenous communities — including the Lumad peoples, Mansaka, Mandaya, and other groups across the Davao Region — receive culturally sensitive verification support. We coordinate with community leaders and recognized indigenous peoples organizations to ensure campaigns accurately represent community needs and that fund disbursement respects community governance structures.',
  },
  {
    question: 'What types of Davao campaigns are most successful?',
    answer: "Davao campaigns that perform well include agricultural recovery after crop damage from typhoons or pests, community health initiatives in underserved Mindanao municipalities, education scholarships for students at Ateneo de Davao and UP Mindanao, and small business recovery campaigns for Davao's growing entrepreneurial sector. Campaigns that clearly connect to Davao's unique agricultural and cultural identity tend to resonate with both local and diaspora donors.",
  },
  {
    question: 'Is Fundraising.ph safe for Davao-based donors and campaigners?',
    answer: 'Fundraising.ph prioritizes safety for all users including those in Davao. Our platform uses identity verification, secure payment processing, and transparent fund tracking. Campaigners undergo verification before receiving funds, and all transactions are documented. The platform operates within Philippine banking and financial regulations, and funds are handled through established financial institutions.',
  },
  {
    question: 'How can the Davao business community get involved?',
    answer: 'Davao businesses can participate through our marketplace fundraising program — selling products or services with proceeds supporting verified campaigns. The Davao business community can also partner with Fundraise.ph through our institutional partnership program, contributing to trust infrastructure for Mindanao-wide fundraising. Business associations like the Davao City Chamber of Commerce can coordinate group fundraising efforts through the platform.',
  },
]

const schemas = [
  articleSchema(
    'Fundraising Platform in Davao',
    'Verified fundraising campaigns in Davao and Mindanao. Support agricultural communities, indigenous peoples, and Davao-based causes.',
    'https://fundraising.ph/local/davao',
    '2025-01-15',
  ),
  faqPageSchema(faqItems),
  breadcrumbSchema(breadcrumbs),
]

export default function DavaoPage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <PageHeader
        title="Davao, Philippines"
        headline="Verified {Fundraising} for Mindanao's Heart"
        description="Davao and Mindanao communities deserve trusted fundraising. From agricultural recovery to indigenous community support — transparent, verified, built for Mindanao."
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <AnswerBlock
            question="What makes fundraising in Davao and Mindanao different?"
            answer="Davao City serves as the economic, commercial, and cultural center of Mindanao — the Philippines' second-largest island group with over 26 million people. Mindanao's fundraising landscape is shaped by its agricultural economy (banana, durian, cacao, coconut), significant indigenous communities (Lumad, Moro, and other ethnolinguistic groups), and unique disaster vulnerability including earthquakes, typhoons, and volcanic activity. These factors create fundraising needs that require understanding of agricultural cycles, indigenous community governance, and Mindanao-specific institutional contexts that general fundraising platforms cannot adequately address."
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Davao: Mindanao's Fundraising Gateway</h2>
            <p className="text-[#4A5568] leading-relaxed">
              As Mindanao's premier city, Davao serves as the natural hub for fundraising across the island. The city's robust banking infrastructure, institutional presence (Ateneo de Davao University, UP Mindanao, Davao Medical School Foundation), and growing business sector provide the institutional backbone that verified fundraising requires. Patients from across Mindanao travel to Davao for specialized medical treatment, students from Agusan del Sur to Zamboanga come to Davao for education, and agricultural cooperatives across the Davao Region use Davao City as their commercial center.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              This regional convergence means that Davao-based fundraising campaigns often benefit communities far beyond the city's boundaries. A medical campaign for a patient at Southern Philippines Medical Center might originate from Cotabato. An education scholarship at UP Mindanao might support a student from Surigao. Fundraising.ph's verification framework is designed to handle these cross-province campaign dynamics that are common in Mindanao.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProofBlock variant="verification" title="Agricultural Campaign Verification">
              Davao Region's agricultural campaigns receive specialized verification that validates cooperative registration (CDA), crop damage assessments (DA certification), and agricultural project feasibility. From banana plantation recovery in Tagum City to cacao processing equipment for cooperatives in Davao del Sur, our framework covers the documentation unique to agricultural fundraising.
            </ProofBlock>
            <ProofBlock variant="compliance" title="Indigenous Community Compliance">
              Campaigns benefiting Mindanao's indigenous communities receive guidance on NCIP (National Commission on Indigenous Peoples) coordination, FPIC (Free, Prior and Informed Consent) principles, and culturally appropriate fund management. Fundraising.ph ensures that indigenous community campaigns respect existing governance structures and community decision-making processes.
            </ProofBlock>
            <ProofBlock variant="product" title="Davao Marketplace Fundraising">
              Davao's renowned agricultural products — durian, cacao, pomelo, and banana products — provide natural marketplace fundraising opportunities. Davao entrepreneurs can sell these products through Fundraising.ph with proceeds supporting verified Mindanao campaigns, creating a virtuous cycle of local economic activity and community support.
            </ProofBlock>
            <ProofBlock variant="default" title="Mindanao Business Community Trust">
              Fundraising.ph builds trust infrastructure specifically designed for Mindanao's business environment. The Davao City Chamber of Commerce and Industry, Davao's growing BPO sector, and established agricultural corporations can all participate in verified fundraising with the transparency and compliance documentation that institutional donors require.
            </ProofBlock>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Agricultural Communities and Fundraising</h2>
            <p className="text-[#4A5568] leading-relaxed">
              The Davao Region is the Philippines' top producer of banana, durian, and cacao — crops that support millions of farming families across Mindanao. When typhoons, pests, or market disruptions affect these crops, farming communities need rapid access to recovery funding. Fundraising.ph provides agricultural cooperatives with campaign templates specifically designed for crop recovery, equipment replacement, and agricultural infrastructure rebuilding.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              Agricultural fundraising campaigns on Fundraising.ph can reference Department of Agriculture damage assessments, Cooperative Development Authority registrations, and local agricultural office certifications — all of which strengthen campaign verification and donor confidence. This documentation-driven approach ensures that agricultural recovery funds reach the cooperatives and farming communities that need them most.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Supporting Mindanao's Indigenous Communities</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Mindanao is home to the country's largest concentration of indigenous peoples, including the Lumad communities of the Davao Region, the Subanen of Zamboanga, the T'boli of South Cotabato, and many others. Fundraising for indigenous community development — including schools, health stations, cultural preservation programs, and livelihood projects — requires sensitivity to indigenous governance structures and community decision-making processes.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              Fundraising.ph works with recognized indigenous peoples organizations and NCIP-registered community structures to ensure that campaigns accurately represent community needs, that fund disbursement respects community governance, and that impact reporting is shared with the community in culturally appropriate ways. This approach protects both the communities being helped and the donors who want assurance that their contributions make a genuine difference.
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
              { label: 'Product-Based Fundraising Guide', href: 'https://fundraise.ph', page: 'product-based-fundraising-guide', description: 'How marketplace fundraising works for product-based campaigns.' },
              { label: 'Fundraising in Cebu', href: 'https://fundraising.ph/local/cebu', description: 'Visayas-specific fundraising resources and campaigns.' },
              { label: 'Community Fundraising in the Philippines', href: 'https://fundraising.ph/local/philippines-community', description: 'Bayanihan culture and community-driven fundraising.' },
              { label: 'Partner With Us', href: 'https://fundraise.ph', page: 'partner-with-us', description: 'How businesses and organizations can partner with Fundraise.ph.' },
            ]}
          />
        </div>
      </Section>

      <CTABlock
        headline="Start Your Davao or Mindanao Campaign"
        subheadline="Verified, transparent fundraising for Mindanao's agricultural, indigenous, and urban communities."
        ctaLabel="Create a Campaign on Fundraising.ph"
        ctaHref={PLATFORM_URL}
      />
    </>
  )
}
