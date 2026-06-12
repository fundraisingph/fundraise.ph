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
  title: 'School Fundraising in Metro Manila | Fundraising.ph',
  description: 'School fundraising platform for Metro Manila. PTA fundraising, university campaigns, school supply drives, and education scholarships across NCR. Verified, compliant, transparent.',
  keywords: [
    'school fundraising Metro Manila', 'PTA fundraising NCR', 'university fundraising Manila',
    'school supply drive Philippines', 'education fundraising Metro Manila',
    'school campaign Philippines', 'fundraiser for school Manila',
    'college fundraising Metro Manila', 'school crowdfunding Philippines',
  ],
  openGraph: {
    title: 'School Fundraising in Metro Manila | Fundraising.ph',
    description: 'School fundraising platform for Metro Manila. PTA fundraising, university campaigns, school supply drives, and education scholarships across NCR.',
    url: 'https://fundraising.ph/local/metro-manila-schools',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://fundraising.ph' },
  { name: 'Local', url: 'https://fundraising.ph/local' },
  { name: 'Metro Manila Schools', url: 'https://fundraising.ph/local/metro-manila-schools' },
]

const faqItems = [
  {
    question: 'How can our PTA start a verified fundraising campaign?',
    answer: 'PTA officers can create a campaign on Fundraising.ph by registering with their official PTA position, uploading the school\'s recognition documents and PTA certification from DepEd, and describing the fundraising purpose — whether it\'s classroom improvements, computer laboratory equipment, or school event funding. The verification process includes confirming the school\'s existence and the PTA officer\'s authorized role.',
  },
  {
    question: 'What types of school fundraising work on Fundraising.ph?',
    answer: 'Fundraising.ph supports a wide range of school campaigns: individual student scholarships, classroom and laboratory equipment, school building repairs and construction, school supply drives for underprivileged students, inter-school competition travel funds, teacher development programs, and school community outreach projects. Both public and private schools across Metro Manila\'s 17 cities and municipality can create campaigns.',
  },
  {
    question: 'Can universities like UP, Ateneo, and La Salle use this platform?',
    answer: 'Yes. Metro Manila universities — including University of the Philippines Diliman, Ateneo de Manila University, De La Salle University, University of Santo Tomas, and many others — can use Fundraising.ph for research funding, student scholarships, student organization projects, university community extension programs, and alumni-driven giving campaigns. University campaigns benefit from institutional verification that strengthens donor confidence.',
  },
  {
    question: 'Are there DepEd or CHED compliance requirements for school fundraising?',
    answer: 'Fundraising.ph\'s compliance guidance covers relevant DepEd (Department of Education) policies for K-12 school fundraising and CHED (Commission on Higher Education) guidelines for university campaigns. This includes proper fund management protocols, required approvals from school administrators, and transparent reporting obligations. Our compliance team helps campaigners understand which regulations apply to their specific school and campaign type.',
  },
  {
    question: 'How does product-based fundraising work for schools?',
    answer: 'Metro Manila schools can use marketplace fundraising to sell products — such as school merchandise, student-made crafts, baked goods, or event tickets — with proceeds supporting verified school campaigns. Product-based school fundraising is treated as a purchase or sponsorship, not a pure donation, and must be clearly disclosed as such. This model works well for PTA events, school fairs, and student entrepreneurship programs.',
  },
  {
    question: 'Can alumni networks use Fundraising.ph for school campaigns?',
    answer: 'Absolutely. Alumni networks are powerful fundraising channels for Metro Manila schools. Alumni associations from UP, Ateneo, La Salle, UST, and other NCR universities can create verified campaigns for scholarship endowments, facility improvements, professorial chairs, and student assistance programs. Alumni campaigns can leverage the trust framework to give overseas Filipino alumni confidence that their contributions are verified and transparently managed.',
  },
]

const schemas = [
  articleSchema(
    'School Fundraising in Metro Manila',
    'School fundraising platform for Metro Manila. PTA fundraising, university campaigns, school supply drives, and education scholarships across NCR.',
    'https://fundraising.ph/local/metro-manila-schools',
    '2025-01-15',
  ),
  faqPageSchema(faqItems),
  breadcrumbSchema(breadcrumbs),
]

export default function MetroManilaSchoolsPage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <PageHeader
        title="Metro Manila Schools"
        headline="{School Fundraising} Built for NCR"
        description="PTA drives, university campaigns, school supply programs, and education scholarships across Metro Manila. Verified, compliant, and transparent — from grade school to graduate school."
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <AnswerBlock
            question="Why does Metro Manila need a dedicated school fundraising platform?"
            answer="Metro Manila's National Capital Region hosts the densest concentration of educational institutions in the Philippines — from the 800+ DepEd public schools across 16 cities and 1 municipality to the country's top universities clustered along the University Belt, Katipunan Avenue, and Taft Avenue. With over 2.5 million students enrolled across NCR, the demand for school-related fundraising is enormous and diverse: public school supply drives, private school infrastructure campaigns, university research funding, and PTA-led initiatives all require different approaches to verification, compliance, and fund management."
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">Metro Manila's School Fundraising Landscape</h2>
            <p className="text-[#4A5568] leading-relaxed">
              School fundraising in Metro Manila operates at a scale that no other Philippine region matches. The NCR's public school system alone — managed through DepEd NCR's 16 schools divisions — serves millions of students who often lack basic supplies, updated textbooks, and functional laboratory equipment. PTA organizations across these schools regularly organize fundraising activities but face challenges with transparency, accountability, and reaching beyond their immediate community.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              At the university level, Metro Manila's concentration of premier institutions creates a sophisticated fundraising ecosystem. Universities like UP Diliman, Ateneo, La Salle, and UST maintain alumni networks that span the globe — overseas Filipino professionals who want to give back to their alma maters but need assurance that their donations are properly verified and transparently managed. Fundraising.ph bridges this gap by providing institutional verification and impact reporting that alumni donors can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProofBlock variant="verification" title="School Campaign Verification">
              School campaigns on Fundraising.ph undergo verification that confirms the school's DepEd or CHED recognition, validates the campaign organizer's authorization (PTA officer, school administrator, or university representative), and reviews documentation supporting the fundraising purpose. This protects both donors and the school community.
            </ProofBlock>
            <ProofBlock variant="compliance" title="Education Compliance Guidance">
              Fundraising.ph provides compliance guidance specific to educational fundraising — including DepEd policies on school fundraising activities, CHED guidelines for university campaigns, and proper documentation for scholarship fund management. School campaigns receive tailored compliance support that general fundraising platforms cannot provide.
            </ProofBlock>
            <ProofBlock variant="product" title="Product-Based School Fundraising">
              Schools can leverage marketplace fundraising for product sales — school merchandise, student crafts, baked goods for school fairs, and event sponsorships. These are clearly disclosed as purchases or sponsorships, not pure donations, providing a sustainable fundraising model that complements traditional giving.
            </ProofBlock>
            <ProofBlock variant="default" title="Alumni Network Fundraising">
              Metro Manila's global alumni networks — from UP Alumni Association to Ateneo alumni chapters worldwide — can create verified campaigns with institutional backing. Fundraising.ph provides the transparency and verification infrastructure that gives overseas alumni confidence their contributions reach their intended school programs.
            </ProofBlock>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">PTA Fundraising Across NCR</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Parent-Teacher Associations across Metro Manila's 17 LGUs face consistent fundraising challenges: improving classroom conditions, funding extracurricular programs, purchasing IT equipment, and supporting students from low-income families. Fundraising.ph provides PTA organizations with campaign templates designed for school-specific needs, verification workflows that confirm PTA authorization, and fund management transparency that satisfies both parents and school administration requirements.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              For public schools in cities like Caloocan, Quezon City, and Taguig where PTA dues alone cannot cover facility improvement needs, Fundraising.ph extends the fundraising reach to include community members, local businesses, and diaspora parents who want to support their children's schools from abroad. Every contribution is tracked, every expense is documented, and impact reports are shared with the school community.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">University Fundraising in Metro Manila</h2>
            <p className="text-[#4A5568] leading-relaxed">
              Metro Manila's universities represent the pinnacle of Philippine higher education, and their fundraising needs reflect that scale. From UP Diliman's research grant supplementation to Ateneo's social development programs, from DLSU's innovation hubs to UST's heritage preservation — each university has unique fundraising requirements that demand specialized verification and compliance approaches. Fundraising.ph accommodates this diversity through institution-specific campaign types and verification pathways.
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
              { label: 'Philippines Compliance Guide', href: 'https://fundraise.ph', page: 'philippines-compliance-guide', description: 'Legal framework for educational and general fundraising in the Philippines.' },
              { label: 'Education Fundraising Guide', href: 'https://fundraising.ph/education-fundraising', description: 'Dedicated guide for school and education fundraising campaigns.' },
              { label: 'Fundraising in Quezon City', href: 'https://fundraising.ph/local/quezon-city', description: 'QC-specific resources including university fundraising.' },
              { label: 'Product-Based Fundraising Guide', href: 'https://fundraise.ph', page: 'product-based-fundraising-guide', description: 'How marketplace fundraising works for product-based school campaigns.' },
              { label: 'Fundraise.ph vs Fundraising.ph', href: 'https://fundraise.ph', page: 'fundraise-vs-fundraising', description: 'Understanding the relationship between the trust layer and campaign platform.' },
            ]}
          />
        </div>
      </Section>

      <CTABlock
        headline="Start Your School Fundraising Campaign"
        subheadline="From PTA drives to university scholarships — verified, transparent fundraising for Metro Manila schools."
        ctaLabel="Create a School Campaign on Fundraising.ph"
        ctaHref={PLATFORM_URL}
      />
    </>
  )
}
