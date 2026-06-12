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
  title: 'Community Fundraising in the Philippines | Fundraising.ph',
  description: 'Community fundraising platform for the Philippines. Bayanihan-powered campaigns for barangay projects, community pantries, cooperatives, and local initiatives. Verified, transparent, built for Filipino communities.',
  keywords: [
    'community fundraising Philippines', 'bayanihan fundraising',
    'barangay fundraising Philippines', 'community pantry fundraising',
    'cooperative fundraising Philippines', 'community project fundraising',
    'Filipino community fundraising', 'grassroots fundraising Philippines',
    'barangay project funding',
  ],
  openGraph: {
    title: 'Community Fundraising in the Philippines | Fundraising.ph',
    description: 'Community fundraising platform for the Philippines. Bayanihan-powered campaigns for barangay projects, community pantries, cooperatives, and local initiatives.',
    url: 'https://fundraising.ph/local/philippines-community',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://fundraising.ph' },
  { name: 'Local', url: 'https://fundraising.ph/local' },
  { name: 'Community Fundraising Philippines', url: 'https://fundraising.ph/local/philippines-community' },
]

const faqItems = [
  {
    question: 'How does online fundraising complement bayanihan culture?',
    answer: 'Bayanihan — the Filipino tradition of communal unity and cooperation — has always been about communities coming together to achieve what individuals cannot alone. Online fundraising through Fundraising.ph extends bayanihan beyond geographic boundaries. A barangay project that once relied on door-to-door collection can now reach the entire Filipino diaspora. Community members working abroad can participate in bayanihan for their hometown. The trust and verification framework ensures that the spirit of bayanihan is preserved even when giving moves online.',
  },
  {
    question: 'Can barangay officials create fundraising campaigns?',
    answer: 'Yes. Barangay officials — including barangay captains and council members — can create verified campaigns for community projects within their jurisdiction. Campaigns can reference the barangay\'s official recognition from the DILG (Department of the Interior and Local Government), and project plans can be linked to barangay development plans. Fundraising.ph\'s verification process confirms the official\'s position and the project\'s legitimacy.',
  },
  {
    question: 'How can community pantries use Fundraising.ph?',
    answer: 'Community pantries — which gained nationwide prominence during the COVID-19 pandemic — can use Fundraising.ph to scale their operations beyond what individual contributions can sustain. Pantry organizers can create campaigns for food supply purchases, logistics support, and expansion to additional locations. Verification includes confirming the pantry\'s physical location and community impact, helping donors ensure their contributions reach genuine community feeding programs.',
  },
  {
    question: 'What support is available for local cooperatives?',
    answer: 'Cooperatives registered with the Cooperative Development Authority (CDA) can create campaigns for capital build-up, equipment acquisition, disaster recovery, and community development projects. Fundraising.ph\'s verification framework accepts CDA registration as institutional documentation. Cooperative campaigns benefit from the transparent fund tracking that cooperative members and external donors both expect.',
  },
  {
    question: 'How is community fundraising different from individual campaigns?',
    answer: 'Community campaigns on Fundraising.ph serve a collective beneficiary — a barangay, neighborhood, cooperative, or community organization — rather than an individual. Verification focuses on community authorization (barangay resolution, cooperative board approval, or community leader endorsement) and collective impact measurement. Fund disbursement follows community governance structures, ensuring that funds benefit the community as intended rather than any single individual.',
  },
  {
    question: 'Can overseas Filipinos support community campaigns in their hometowns?',
    answer: 'Absolutely. Diaspora community giving is one of the most powerful applications of Fundraising.ph. Overseas Filipinos can discover verified campaigns in their specific hometowns and barangays — from community center construction to local school improvements to disaster recovery. The verification framework gives diaspora donors confidence that their support reaches their actual home community, not an impersonal national fund.',
  },
]

const schemas = [
  articleSchema(
    'Community Fundraising in the Philippines',
    'Community fundraising platform for the Philippines. Bayanihan-powered campaigns for barangay projects, community pantries, cooperatives, and local initiatives.',
    'https://fundraising.ph/local/philippines-community',
    '2025-01-15',
  ),
  faqPageSchema(faqItems),
  breadcrumbSchema(breadcrumbs),
]

export default function PhilippinesCommunityPage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <PageHeader
        title="Philippine Communities"
        headline="{Bayanihan} Meets Modern Fundraising"
        description="Community fundraising across the Philippines — barangay projects, community pantries, local cooperatives, and grassroots initiatives. Verified, transparent, powered by the Filipino spirit of bayanihan."
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <AnswerBlock
            question="How is community fundraising evolving in the Philippines?"
            answer="Filipino community fundraising has always existed through bayanihan — neighbors pooling labor and resources for common needs, from house-moving to harvest-sharing to disaster response. What's changing is scale and reach. The COVID-19 pandemic demonstrated this evolution through community pantries that started on a single street corner but inspired thousands nationwide through social media. Fundraising.ph takes this natural Filipino impulse for collective action and adds verification, transparency, and digital reach — allowing a barangay project in Samar to receive support from community members working in Dubai, Singapore, or California while maintaining the trust and accountability that bayanihan demands."
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Bayanihan in the Digital Age</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Bayanihan is more than a cultural practice — it is the foundational principle of Filipino collective action. Historically, bayanihan meant neighbors physically carrying a nipa hut to a new location. Today, it manifests in community fundraising for health centers, school buildings, water systems, and disaster resilience projects across the Philippines' 42,000+ barangays. The challenge has always been scale: traditional bayanihan is limited by geography and personal networks.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              Fundraising.ph bridges the gap between traditional bayanihan values and modern fundraising capabilities. A barangay captain in a remote municipality can create a verified campaign for a community health station — and reach not only the 2,000 residents of that barangay but also the 200 former residents now working overseas who want to give back. Every contribution is tracked, every peso of fund usage is documented, and the community receives transparent impact reporting that strengthens trust for future bayanihan efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProofBlock variant="verification" title="Community Campaign Verification">
              Community campaigns on Fundraising.ph undergo verification that confirms the community organization's legitimacy — whether it's a barangay council resolution, a cooperative's CDA registration, or a community organization's SEC filing. This protects donors and ensures funds reach genuine community projects.
            </ProofBlock>
            <ProofBlock variant="compliance" title="Barangay and LGU Compliance">
              Community fundraising campaigns receive guidance on DILG coordination, barangay permit requirements, and LGU reporting obligations. Fundraising.ph helps community organizers understand the compliance landscape specific to their locality and campaign type, whether it's a barangay infrastructure project or a cooperative capital campaign.
            </ProofBlock>
            <ProofBlock variant="product" title="Cooperative Marketplace Fundraising">
              Registered cooperatives can leverage marketplace fundraising to sell community-produced goods — from agricultural products to handicrafts to processed foods — with proceeds supporting verified community development campaigns. This creates a sustainable fundraising cycle that strengthens both the cooperative and the community it serves.
            </ProofBlock>
            <ProofBlock variant="default" title="Community Pantry Support">
              Community pantries and feeding programs can create verified campaigns on Fundraising.ph, documenting their community impact, sourcing practices, and distribution plans. Verification includes physical location confirmation and community impact reporting, helping donors ensure their contributions sustain genuine community feeding initiatives.
            </ProofBlock>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Community Pantries and Grassroots Initiatives</h2>
            <p className="text-[#4A5568] leading-relaxed">
              The community pantry movement that swept the Philippines during COVID-19 lockdowns demonstrated the power of grassroots Filipino generosity. What started with a single bamboo cart in Maginhawa Street, Quezon City — with the simple sign "Magbigay ayon sa kakayahan, kumuha ayon sa pangangailangan" (Give according to your ability, take according to your need) — inspired over 6,000 community pantries nationwide within weeks.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              Fundraising.ph provides community pantry organizers with the tools to sustain and scale their operations beyond initial volunteer contributions. Pantry campaigns on the platform can accept verified donations for food supplies, logistics, and expansion — with full transparency on how funds are converted into community meals. This bridges the gap between impulse generosity and sustained community support, allowing pantries to serve their communities consistently rather than only when individual donations happen to arrive.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Barangay Projects and Local Development</h2>
            <p className="text-[#4A5568] leading-relaxed">
              The barangay is the basic unit of Philippine governance and community life, and it is at the barangay level that many of the country's most pressing needs are most visible: inadequate health stations, unpaved access roads, lacking disaster preparedness equipment, and insufficient community spaces. While barangay councils have Internal Revenue Allotment (IRA) budgets from the national government, these are often insufficient for the community's full development needs.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              Fundraising.ph enables barangay-authorized campaigns to supplement public funding with verified community fundraising. Whether it's a multi-purpose covered court, a community health station, a local library, or a disaster response equipment fund — barangay projects can create campaigns with official authorization and transparent fund management that gives both local residents and diaspora community members confidence in their contributions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Local Cooperatives and Community Enterprises</h2>
            <p className="text-[#4A5568] leading-relaxed">
              The Philippines has over 18,000 registered cooperatives — from agricultural cooperatives in Mindanao to credit cooperatives in the Visayas to transport cooperatives in Metro Manila. These cooperatives are community-owned enterprises that serve their members' economic needs while contributing to local development. Fundraising.ph provides cooperatives with a fundraising platform that respects cooperative governance principles, accepts CDA registration as institutional verification, and supports both capital campaigns and community development fundraising.
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
              { label: 'Why Fundraise.ph Exists', href: 'https://fundraise.ph', page: 'why-we-exist', description: 'Our mission for trusted fundraising infrastructure in Filipino communities.' },
              { label: 'Philippines Compliance Guide', href: 'https://fundraise.ph', page: 'philippines-compliance-guide', description: 'Legal framework for community and cooperative fundraising in the Philippines.' },
              { label: 'Product-Based Fundraising Guide', href: 'https://fundraise.ph', page: 'product-based-fundraising-guide', description: 'Marketplace fundraising for cooperative and community enterprise campaigns.' },
              { label: 'Fundraising in Davao', href: 'https://fundraising.ph/local/davao', description: 'Mindanao agricultural and cooperative fundraising resources.' },
              { label: 'Church Fundraising in the Philippines', href: 'https://fundraising.ph/local/philippines-church', description: 'Verified fundraising for Philippine church and parish communities.' },
              { label: 'Fundraising in Cebu', href: 'https://fundraising.ph/local/cebu', description: 'Visayas community and disaster relief fundraising.' },
            ]}
          />
        </div>
      </Section>

      <CTABlock
        headline="Start Your Community Campaign Today"
        subheadline="Bayanihan deserves modern infrastructure. Verified, transparent fundraising for every Filipino community."
        ctaLabel="Create a Community Campaign on Fundraising.ph"
        ctaHref={PLATFORM_URL}
      />
    </>
  )
}
