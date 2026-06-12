import type { Metadata } from 'next'
import Link from 'next/link'
import { School, GraduationCap, Package, ShieldCheck, Lightbulb, ArrowRight, HelpCircle, Heart, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'
import { AnswerBlock } from '@/components/AnswerBlock'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'School Fundraising Philippines | Fundraising.ph',
  description: 'Start a verified school fundraising campaign in the Philippines. Raise funds for PTA projects, student organizations, school programs, and product-based fundraising with transparent campaigns on Fundraising.ph.',
  keywords: [
    'school fundraising Philippines',
    'PTA fundraising PH',
    'student organization fundraising',
    'school campaign crowdfunding',
    'product-based school fundraising',
    'school project fundraising Philippines',
    'school campaign verification',
    'Filipino school fundraising',
  ],
  openGraph: {
    title: 'School Fundraising Philippines | Fundraising.ph',
    description: 'Start a verified school fundraising campaign in the Philippines. Transparent, trusted, and compliant.',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'What school fundraising ideas work best?',
    answer: 'Effective school fundraising ideas include product sales (food, crafts, school supplies), fun runs and sports events, talent shows, read-a-thons, school fairs, and direct donation campaigns for specific projects like library improvements or laboratory equipment.',
  },
  {
    question: 'Can PTA organizations create campaigns?',
    answer: 'Yes. PTA organizations and parent groups can create verified campaigns on Fundraising.ph. The PTA should provide authorization from school administration and designate a verified representative for the campaign account.',
  },
  {
    question: 'How do student organization campaigns work?',
    answer: 'Student organizations can create campaigns with a faculty adviser as the verified representative. The campaign should state the organization\'s objectives, the project being funded, and how it benefits the student body. School administration endorsement is recommended.',
  },
  {
    question: 'What is product-based school fundraising?',
    answer: 'Product-based fundraising involves selling goods such as food items, school supplies, event tickets, or crafts with proceeds going to the school campaign. Fundraising.ph supports marketplace features that integrate product sales with transparent fund tracking.',
  },
  {
    question: 'What compliance requirements apply to school campaigns?',
    answer: 'School campaigns should have authorization from school administration, comply with DepEd or CHED guidelines as applicable, maintain transparent financial records, and ensure funds are used for the stated educational purpose. Our compliance team provides guidance during setup.',
  },
  {
    question: 'Can alumni organize campaigns for their school?',
    answer: 'Yes. Alumni can organize campaigns to support their alma mater, such as scholarship funds, facility improvements, or school programs. Alumni organizers should provide proof of alumni status and coordinate with the school administration for verification.',
  },
  {
    question: 'How do school supply drives work on Fundraising.ph?',
    answer: 'School supply drive campaigns specify the target number of students, list the supplies needed with costs, and provide a distribution plan. Organizers verify the school and beneficiary details, then share updates showing the supplies purchased and distributed.',
  },
]

const contentSections = [
  { icon: Users, title: 'PTA Fundraising', description: 'Parent-Teacher Associations can create verified campaigns for school improvements, teacher support, student programs, and extracurricular activities. PTA campaigns require school administration endorsement.' },
  { icon: GraduationCap, title: 'Student Council Campaigns', description: 'Student councils, clubs, and organizations can fundraise for events, competitions, community service projects, and organizational activities with a faculty adviser as the verified representative.' },
  { icon: School, title: 'School Supply Drives', description: 'Organize campaigns to collect funds for textbooks, uniforms, laptops, and other learning materials. Specify the number of student beneficiaries and provide itemized cost breakdowns.' },
  { icon: Package, title: 'Product-Based School Fundraising', description: 'Sell products with proceeds supporting your school campaign. Food items, school supplies, event tickets, and crafts can all be sold through Fundraising.ph\'s marketplace with transparent fund tracking.' },
  { icon: ShieldCheck, title: 'Compliance for School Campaigns', description: 'School campaigns must follow DepEd or CHED guidelines, maintain transparent records, and have proper authorization. Our platform guides organizers through compliance requirements during campaign setup.' },
  { icon: Lightbulb, title: 'Tips for Successful School Campaigns', description: 'Involve the entire school community — students, parents, teachers, and alumni. Set clear goals with specific use-of-funds plans. Use photos and videos to show the school\'s needs. Celebrate milestones and thank donors publicly.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'School Fundraising Philippines',
  description: 'Start a verified school fundraising campaign in the Philippines. PTA, student organizations, and product-based fundraising.',
  author: { '@type': 'Organization', name: 'Fundraising.ph' },
  publisher: { '@type': 'Organization', name: 'Fundraising.ph' },
  datePublished: '2026-01-01',
  dateModified: '2026-06-10',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function SchoolFundraisingPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema]} />
      <Navbar />
      <main className="pt-16 md:pt-18">
        <section className="relative bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B] overflow-hidden">
          <div className="absolute inset-0 pattern-overlay" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-[#C8A951] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/10">
                <School className="h-4 w-4" />
                Schools & Education
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                School Fundraising Philippines
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                Raise funds for PTA projects, student organizations, school programs, and product-based school fundraising through verified campaigns on Fundraising.ph.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-6 py-3 rounded-full hover:bg-[#B8943F] transition-colors">
                <School className="h-5 w-5" />
                Start a School Campaign
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AnswerBlock
              question="How does school fundraising work in the Philippines?"
              answer="School fundraising on Fundraising.ph allows PTAs, student organizations, alumni groups, and school administrations to create verified campaigns for school projects, programs, and improvements. Campaigns can be donation-based or product-based, with full transparency and compliance guidance built into the platform."
            />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">School Fundraising Guide</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">From PTA projects to student-led campaigns — fund your school\'s needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentSections.map((section, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] shadow-lg p-8 border border-slate-100 hover:border-[#C8A951]/20 transition-all duration-200">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center mb-4">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-black text-navy text-lg mb-2">{section.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <ProofBlock
              title="Education You Can Trust"
              description="School campaigns are verified for legitimacy, with transparent fund tracking and compliance with educational regulations."
              items={[
                { icon: 'shield', label: 'School Authorization', description: 'Campaigns verified with school administration endorsement and PTA authorization.' },
                { icon: 'check', label: 'Transparent Fund Tracking', description: 'Every donation tracked with clear reporting on how funds support school projects.' },
                { icon: 'file', label: 'Compliance Guidance', description: 'Built-in guidance for DepEd and CHED compliance requirements during campaign setup.' },
                { icon: 'users', label: 'Community Engagement', description: 'Tools to involve students, parents, teachers, and alumni in the fundraising process.' },
              ]}
            />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <HelpCircle className="h-10 w-10 text-[#2B4C7E] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <SEOBlock items={faqItems} />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AuthorBox lastUpdated="2026-06-10" />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <InternalLinks
              title="Explore More"
              links={[
                { href: '/', label: 'Start a Campaign', description: 'Launch your verified school fundraising campaign.' },
                { href: '/fundraising-guide', label: 'Fundraising Guide', description: 'Complete step-by-step campaign guide.' },
                { href: '/education-fundraising', label: 'Education Fundraising', description: 'Tuition and scholarship campaign guide.' },
                { href: '/community-fundraising', label: 'Community Fundraising', description: 'Support local community projects.' },
                { href: '/church-fundraising', label: 'Church Fundraising', description: 'Religious organization fundraising.' },
                { href: '/trust', label: 'Trust & Transparency', description: 'Our verification and trust framework.' },
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
