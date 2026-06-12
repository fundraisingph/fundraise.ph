import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, BookOpen, FileText, ShieldCheck, Lightbulb, Users, ArrowRight, HelpCircle, PenTool } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'
import { AnswerBlock } from '@/components/AnswerBlock'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Education Fundraising Philippines | Fundraising.ph',
  description: 'Start a verified education fundraising campaign in the Philippines. Raise funds for tuition, school supplies, scholarships, and educational programs with transparent fundraising on Fundraising.ph.',
  keywords: [
    'education fundraising Philippines',
    'tuition fundraising PH',
    'school supplies fundraising',
    'scholarship crowdfunding Philippines',
    'education campaign verification',
    'student fundraising Philippines',
    'Filipino education fundraising',
    'school fee fundraising PH',
  ],
  openGraph: {
    title: 'Education Fundraising Philippines | Fundraising.ph',
    description: 'Start a verified education fundraising campaign in the Philippines. Transparent, trusted, and compliant.',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'What education expenses can I fundraise for?',
    answer: 'You can fundraise for tuition fees, school supplies, uniforms, transportation to school, scholarship programs, vocational training, review center fees for board exams, workshop fees, and other legitimate educational expenses.',
  },
  {
    question: 'How is an education campaign verified?',
    answer: 'Verification includes reviewing the student\'s enrollment documents or admission letter, the school\'s registration or accreditation, cost estimates for tuition or supplies, and the organizer\'s identity. For scholarship campaigns, the selection criteria and beneficiary details are also reviewed.',
  },
  {
    question: 'Can I fundraise for someone else\'s education?',
    answer: 'Yes. Parents, guardians, relatives, teachers, and community members can organize campaigns on behalf of students. You will need to provide proof of your relationship to the student and the student\'s enrollment documentation.',
  },
  {
    question: 'Can funds be sent directly to the school?',
    answer: 'Yes. For tuition campaigns, funds can be disbursed directly to the educational institution. This provides additional transparency and assurance to donors that funds are used for educational purposes.',
  },
  {
    question: 'What tips help education campaigns succeed?',
    answer: 'Share the student\'s academic achievements and aspirations. Include specific cost breakdowns (tuition, books, supplies). Provide enrollment or admission documents. Explain why the funding is needed and how it will impact the student\'s future. Regularly update donors on academic progress.',
  },
  {
    question: 'Are there campaigns for vocational and skills training?',
    answer: 'Yes. Fundraising.ph supports campaigns for all types of education including vocational training, technical courses, certification programs, online learning, and skills development workshops.',
  },
  {
    question: 'Can organizations create scholarship campaigns?',
    answer: 'Yes. Organizations, alumni associations, and community groups can create scholarship campaigns. Define clear selection criteria, scholarship coverage, academic requirements, and the application process for full transparency.',
  },
]

const contentSections = [
  { icon: GraduationCap, title: 'Education Fundraising Overview', description: 'Education is one of the most impactful areas for fundraising in the Philippines. From tuition assistance to school supplies, Fundraising.ph helps students and families access the education they deserve through verified, transparent campaigns.' },
  { icon: BookOpen, title: 'Tuition Assistance Campaigns', description: 'Raise funds for college tuition, K-12 fees, graduate studies, and specialized courses. Campaigns can target a specific semester, school year, or full degree program with clear cost breakdowns.' },
  { icon: PenTool, title: 'School Supplies & Materials', description: 'Fundraise for textbooks, uniforms, laptops, internet access, and other learning materials. Many Filipino students lack basic supplies — your campaign can help bridge that gap.' },
  { icon: Lightbulb, title: 'Scholarship Campaigns', description: 'Organizations and individuals can create scholarship campaigns to sponsor deserving students. Define clear selection criteria, scholarship coverage, and academic requirements for transparency.' },
  { icon: ShieldCheck, title: 'Verification for Education Campaigns', description: 'Enrollment documents, admission letters, school registration, and tuition billing statements are reviewed. Verification ensures donors can trust that funds will support genuine educational needs.' },
  { icon: Users, title: 'Tips for Education Organizers', description: 'Include the student\'s academic record and goals. Provide a detailed cost breakdown. Share how education will change the student\'s life. Update donors on grades and progress. Be transparent about how partial funds will be used.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Education Fundraising Philippines',
  description: 'Start a verified education fundraising campaign in the Philippines. Raise funds for tuition, school supplies, scholarships, and educational programs.',
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

export default function EducationFundraisingPage() {
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
                <GraduationCap className="h-4 w-4" />
                Education Campaigns
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Education Fundraising Philippines
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                Raise funds for tuition, school supplies, scholarships, and educational programs through verified campaigns that help Filipino students access the education they deserve.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-6 py-3 rounded-full hover:bg-[#B8943F] transition-colors">
                <GraduationCap className="h-5 w-5" />
                Start an Education Campaign
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AnswerBlock
              question="How does education fundraising work in the Philippines?"
              answer="Education fundraising on Fundraising.ph allows students, parents, and community members to create verified campaigns for tuition fees, school supplies, scholarships, and other educational expenses. You provide enrollment documents for verification, share your campaign with supporters, and receive funds that can be sent directly to the educational institution or to your verified account."
            />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Education Fundraising Guide</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Everything you need to know about running a successful education campaign.</p>
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
              title="Investing in Filipino Education"
              description="Education campaigns help build a brighter future for Filipino students and their communities."
              items={[
                { icon: 'shield', label: 'Enrollment Verification', description: 'Admission letters and enrollment documents reviewed for every education campaign.' },
                { icon: 'check', label: 'Direct School Payment', description: 'Tuition funds can be sent directly to the educational institution for full transparency.' },
                { icon: 'file', label: 'Progress Reports', description: 'Organizers provide updates on the student\'s academic progress and fund usage.' },
                { icon: 'users', label: 'Community Impact', description: 'Education campaigns empower entire communities by investing in the next generation.' },
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
                { href: '/', label: 'Start a Campaign', description: 'Launch your verified education fundraising campaign.' },
                { href: '/fundraising-guide', label: 'Fundraising Guide', description: 'Complete step-by-step guide to starting a campaign.' },
                { href: '/school-fundraising', label: 'School Fundraising', description: 'PTA and school organization fundraising guide.' },
                { href: '/medical-fundraising', label: 'Medical Fundraising', description: 'Medical and healthcare campaign guide.' },
                { href: '/community-fundraising', label: 'Community Fundraising', description: 'Support local community projects.' },
                { href: '/trust', label: 'Trust & Transparency', description: 'Learn about our verification framework.' },
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
