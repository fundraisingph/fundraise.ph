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
  title: 'Church Fundraising in the Philippines | Fundraising.ph',
  description: 'Church fundraising platform for Philippine religious organizations. Building funds, mission trips, community outreach, and church programs. Verified, compliant fundraising for Catholic and Christian communities.',
  keywords: [
    'church fundraising Philippines', 'Catholic fundraising Philippines',
    'church building fund Philippines', 'religious fundraising',
    'church campaign Philippines', 'mission trip fundraising Philippines',
    'parish fundraising', 'church crowdfunding Philippines',
    'religious organization fundraising',
  ],
  openGraph: {
    title: 'Church Fundraising in the Philippines | Fundraising.ph',
    description: 'Church fundraising platform for Philippine religious organizations. Building funds, mission trips, community outreach, and church programs.',
    url: 'https://fundraising.ph/local/philippines-church',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://fundraising.ph' },
  { name: 'Local', url: 'https://fundraising.ph/local' },
  { name: 'Church Fundraising Philippines', url: 'https://fundraising.ph/local/philippines-church' },
]

const faqItems = [
  {
    question: 'Can Catholic parishes use Fundraising.ph for building funds?',
    answer: "Yes. Catholic parishes across the Philippines can create verified campaigns for church building and renovation projects. Campaigns can reference the parish's canonical establishment, diocesan approval for construction projects, and building plans. Fundraising.ph helps parishes present these documents in a verified format that gives donors — including overseas Filipino Catholics — confidence that their contributions support a legitimate building project.",
  },
  {
    question: 'How does church fundraising comply with Philippine regulations?',
    answer: "Church fundraising in the Philippines operates within the national regulatory framework. Religious organizations with SEC registration as non-stock corporations receive compliance guidance covering proper fund management, donation receipting, and financial reporting obligations. Fundraising.ph's compliance framework helps religious organizations understand requirements from SEC, BIR (including tax-exempt donation certification where applicable), and local government permitting for fundraising events.",
  },
  {
    question: 'Can mission trip fundraising campaigns be verified?',
    answer: "Yes. Mission trip campaigns — whether organized by a parish, religious community, or faith-based organization — can be verified on Fundraising.ph. Verification includes confirming the organizing religious institution's legitimacy, reviewing the mission trip itinerary and objectives, and validating the trip's community impact plan. This is particularly relevant for Philippine mission trips to indigenous communities, disaster-affected areas, and underserved rural parishes.",
  },
  {
    question: 'How do we handle church community outreach fundraising?',
    answer: "Church community outreach programs — including feeding programs, medical missions, scholarship funds, and livelihood support — can create campaigns on Fundraising.ph. Each outreach campaign is verified against the church or religious organization's documentation, and fund usage is tracked with the same transparency as any other campaign. Outreach campaigns often resonate strongly with diaspora donors who want to support their home parish's community programs.",
  },
  {
    question: 'Is Fundraising.ph only for Catholic churches?',
    answer: 'No. Fundraising.ph serves all Christian denominations and religious organizations in the Philippines. While the Catholic Church represents the largest religious community in the country, Iglesia ni Cristo, Philippine Independent Church (Aglipayan), evangelical churches, and other Christian denominations can equally use the platform for verified fundraising. Our verification framework accommodates the organizational structures of different religious organizations.',
  },
  {
    question: 'Can product-based fundraising work for church groups?',
    answer: 'Yes. Church groups can use marketplace fundraising to sell products — such as religious items, baked goods for parish fairs, crafts made by church communities, and event tickets — with proceeds supporting verified church campaigns. Product-based fundraising is clearly disclosed as a purchase or sponsorship, not a pure donation, and works well for church bazaars, parish festivals, and community sales events.',
  },
]

const schemas = [
  articleSchema(
    'Church Fundraising in the Philippines',
    'Church fundraising platform for Philippine religious organizations. Building funds, mission trips, community outreach, and church programs.',
    'https://fundraising.ph/local/philippines-church',
    '2025-01-15',
  ),
  faqPageSchema(faqItems),
  breadcrumbSchema(breadcrumbs),
]

export default function PhilippinesChurchPage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <PageHeader
        title="Philippine Churches"
        headline="{Church Fundraising} for a Faithful Nation"
        description="Philippine church fundraising made trusted and transparent. Building funds, mission trips, community outreach — verified campaigns for Catholic and Christian communities nationwide."
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <AnswerBlock
            question="Why does the Philippines need a dedicated church fundraising platform?"
            answer="The Philippines is over 85% Christian, with the Catholic Church alone operating over 3,000 parishes, thousands of schools, hundreds of hospitals, and countless community outreach programs across the archipelago. Church fundraising in the Philippines is not a niche activity — it is woven into the fabric of Filipino community life, from the smallest barrio chapel's collection to the largest cathedral's building fund. Yet most church fundraising relies on informal channels: passing the collection plate, word-of-mouth, and personal networks. Fundraising.ph brings verification, transparency, and compliance to church fundraising, protecting both the religious organizations and their generous donors."
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Church Fundraising in the Philippine Context</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Filipino faith communities have always practiced collective giving — from the tradition of "abuloy" (contributions for a cause) to the "pasasalamat" (thanksgiving offering) after blessings received. These practices predate modern fundraising platforms by centuries and reflect the deep Filipino cultural connection between faith and generosity. Fundraising.ph does not replace these traditions — it amplifies them by providing verification, transparency, and reach that extends beyond the parish boundary to the global Filipino Catholic and Christian diaspora.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              The scale of Philippine church fundraising is significant. Diocesan building programs, parish church construction in rapidly growing communities, Catholic school scholarships, hospital charity programs run by religious orders, and mission trips to indigenous communities all require organized fundraising. When Typhoon Yolanda destroyed churches across Leyte and Samar, or when earthquakes damaged heritage churches in Bohol, the rebuilding effort required verified, transparent fundraising channels that could handle large-scale donations from Filipino Catholics worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProofBlock variant="verification" title="Church Organization Verification">
              Religious organization campaigns on Fundraising.ph are verified against institutional documentation — SEC registration for religious corporations, diocesan or denominational recognition, and organizational leadership authorization. This protects donors from fraudulent campaigns claiming religious affiliation.
            </ProofBlock>
            <ProofBlock variant="compliance" title="Religious Organization Compliance">
              Church fundraising compliance in the Philippines involves SEC requirements for religious non-stock corporations, BIR regulations for tax-exempt donations, and local government permits for public fundraising events. Fundraising.ph provides guidance covering these requirements specific to religious organizations.
            </ProofBlock>
            <ProofBlock variant="product" title="Church Marketplace Fundraising">
              Parish festivals, church bazaars, and religious craft sales can extend their reach through marketplace fundraising on Fundraising.ph. Products and event sponsorships are clearly disclosed as purchases, not donations — providing a sustainable fundraising model that complements traditional church giving.
            </ProofBlock>
            <ProofBlock variant="default" title="Diaspora Church Giving">
              Millions of Filipino Catholics and Christians living abroad maintain deep connections to their home parishes and religious communities. Fundraising.ph provides the verification and transparency infrastructure that gives overseas Filipino faithful confidence their contributions reach their intended church programs and building projects.
            </ProofBlock>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Church Building and Renovation Funds</h2>
            <p className="text-[#4A5568] leading-relaxed">
              The Philippines' growing population means new parishes are constantly being established, particularly in rapidly urbanizing areas around Metro Manila, Cebu, and Davao. These new parishes need churches, parish halls, and community centers — construction projects that cost millions of pesos and require years of organized fundraising. Fundraising.ph provides building fund campaigns with milestone tracking, fund transparency, and verification of construction progress that keeps donors engaged and confident.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              Heritage church restoration is another critical fundraising need. Centuries-old churches across the Philippines — from the Baroque Churches of the Philippines (UNESCO World Heritage Sites) to local parish churches with cultural significance — require specialized restoration work that demands substantial, carefully managed funding. Fundraising.ph's transparency and verification framework is designed to handle these complex, long-term restoration campaigns.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Mission Trips and Community Outreach</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Philippine churches organize thousands of mission trips and community outreach programs annually — from medical missions in remote barangays to feeding programs in urban poor communities, from indigenous community engagement to disaster response operations. Each of these programs requires funding for transportation, medical supplies, food, educational materials, and volunteer support. Fundraising.ph helps churches create verified campaigns for these programs, extending their fundraising reach to include parishioners who have moved abroad but want to support their home church's outreach activities.
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
              { label: 'Why Fundraise.ph Exists', href: 'https://fundraise.ph', page: 'why-we-exist', description: 'Our mission for trusted fundraising infrastructure in the Philippines.' },
              { label: 'Philippines Compliance Guide', href: 'https://fundraise.ph', page: 'philippines-compliance-guide', description: 'Legal and regulatory framework for church and religious fundraising.' },
              { label: 'Church Fundraising Guide', href: 'https://fundraising.ph/church-fundraising', description: 'Comprehensive guide for church and religious fundraising campaigns.' },
              { label: 'Community Fundraising in the Philippines', href: 'https://fundraising.ph/local/philippines-community', description: 'Bayanihan culture and community-driven fundraising.' },
              { label: 'Fundraising in Manila', href: 'https://fundraising.ph/local/manila', description: 'Manila-specific resources for church and community campaigns.' },
              { label: 'Diaspora Giving Safety', href: 'https://fundraise.ph', page: 'diaspora-giving-safety', description: 'Safety guidelines for overseas Filipino donors supporting church campaigns.' },
            ]}
          />
        </div>
      </Section>

      <CTABlock
        headline="Start Your Church Fundraising Campaign"
        subheadline="Verified, transparent fundraising for Philippine churches, parishes, and faith communities nationwide."
        ctaLabel="Create a Church Campaign on Fundraising.ph"
        ctaHref={PLATFORM_URL}
      />
    </>
  )
}
