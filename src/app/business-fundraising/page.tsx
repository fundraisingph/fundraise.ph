import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, HandHeart, Store, Globe, ShieldCheck, ArrowRight, HelpCircle, Heart, TrendingUp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'
import { AnswerBlock } from '@/components/AnswerBlock'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Business-Supported Fundraising Philippines | Fundraising.ph',
  description: 'Learn how businesses can support verified fundraising campaigns in the Philippines through CSR programs, sponsorship, cause commerce, and marketplace fundraising on Fundraising.ph.',
  keywords: [
    'business fundraising Philippines',
    'CSR fundraising PH',
    'corporate sponsorship fundraising',
    'cause commerce Philippines',
    'business crowdfunding support',
    'marketplace fundraising business',
    'corporate giving Philippines',
    'Filipino business fundraising',
  ],
  openGraph: {
    title: 'Business-Supported Fundraising Philippines | Fundraising.ph',
    description: 'How businesses can support verified fundraising campaigns in the Philippines. CSR, sponsorship, and cause commerce.',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'How can my business support fundraising campaigns?',
    answer: 'Businesses can support campaigns through corporate social responsibility (CSR) donations, sponsoring specific campaigns, integrating cause commerce into product sales, listing products on the marketplace with proceeds going to campaigns, and matching employee donations.',
  },
  {
    question: 'What is cause commerce?',
    answer: 'Cause commerce is a business model where a portion of product sales goes to verified fundraising campaigns. Fundraising.ph enables businesses to integrate giving directly into their sales process, with transparent tracking of donations generated from each purchase.',
  },
  {
    question: 'How does marketplace fundraising work for businesses?',
    answer: 'Businesses can list products on Fundraising.ph\'s marketplace and designate a percentage of proceeds to support verified campaigns. Each transaction is tracked, and both the business and the campaign beneficiary receive transparent reporting on funds generated.',
  },
  {
    question: 'Can businesses sponsor specific campaigns?',
    answer: 'Yes. Businesses can sponsor individual campaigns that align with their corporate values or CSR objectives. Sponsored campaigns display the business\'s support publicly, creating visibility for the brand while contributing to meaningful causes.',
  },
  {
    question: 'What are the tax implications of business donations?',
    answer: 'Business donations to verified campaigns on Fundraising.ph may qualify for tax deductions under Philippine tax law. We provide donation receipts and documentation that businesses can use for tax reporting purposes. Consult your tax adviser for specific guidance.',
  },
  {
    question: 'How does Fundraising.ph verify business partners?',
    answer: 'Business partners undergo a verification process that includes reviewing DTI or SEC registration, business permits, tax identification, and the company\'s track record. Verified business partners receive a trust badge displayed on their marketplace listings.',
  },
  {
    question: 'How do businesses support community campaigns?',
    answer: 'Businesses support community campaigns through direct CSR donations, employee giving programs, in-kind contributions, volunteer engagement, and by featuring community campaigns on their marketplace product listings. All forms of support are tracked and reported transparently.',
  },
]

const contentSections = [
  { icon: Building2, title: 'CSR Fundraising', description: 'Corporate social responsibility programs can leverage Fundraising.ph to donate to verified campaigns, fund community projects, and make a measurable impact. CSR donations are tracked with transparent reporting for stakeholders.' },
  { icon: HandHeart, title: 'Business Sponsorship', description: 'Sponsor specific campaigns that align with your brand values. Sponsored campaigns display your company\'s support, creating brand visibility while contributing to meaningful Filipino community causes.' },
  { icon: Store, title: 'Cause Commerce', description: 'Integrate giving into your business by donating a percentage of sales to verified campaigns. Cause commerce creates a virtuous cycle where every purchase supports community impact.' },
  { icon: Globe, title: 'Marketplace Fundraising', description: 'List your products on Fundraising.ph\'s marketplace with proceeds supporting verified campaigns. Each transaction is tracked with transparent reporting for both the business and campaign beneficiary.' },
  { icon: TrendingUp, title: 'Supporting Community Campaigns', description: 'Businesses can support community campaigns through direct donations, employee giving programs, in-kind contributions, and volunteer engagement. Fundraising.ph provides tools to manage and track all forms of business support.' },
  { icon: ShieldCheck, title: 'Verified Business Partnerships', description: 'All business partners on Fundraising.ph undergo verification including DTI or SEC registration review, business permit verification, and track record assessment. Verified businesses receive a trust badge for transparency.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Business-Supported Fundraising Philippines',
  description: 'How businesses can support verified fundraising campaigns in the Philippines through CSR, sponsorship, and cause commerce.',
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

export default function BusinessFundraisingPage() {
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
                <Building2 className="h-4 w-4" />
                Business & CSR
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Business-Supported Fundraising Philippines
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                Learn how businesses can support verified fundraising campaigns through CSR programs, sponsorship, cause commerce, and marketplace fundraising on Fundraising.ph.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-6 py-3 rounded-full hover:bg-[#B8943F] transition-colors">
                <Heart className="h-5 w-5" />
                Partner With Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AnswerBlock
              question="How can businesses support fundraising in the Philippines?"
              answer="Businesses can support verified fundraising campaigns on Fundraising.ph through CSR donations, sponsoring specific campaigns, integrating cause commerce into their product sales, listing products on the marketplace with proceeds going to campaigns, and matching employee donations. Every form of business support is tracked with transparent reporting for both the business and the community beneficiaries."
            />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Business Partnership Guide</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Multiple ways for businesses to make a measurable difference in Filipino communities.</p>
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
              title="Business Partnerships Built on Trust"
              description="Verified business partnerships ensure that every corporate contribution is legitimate, tracked, and creating real community impact."
              items={[
                { icon: 'shield', label: 'Business Verification', description: 'DTI/SEC registration, business permits, and track records reviewed for all partners.' },
                { icon: 'check', label: 'Transparent Impact Tracking', description: 'Every business donation tracked with clear reporting on community impact generated.' },
                { icon: 'file', label: 'Tax Documentation', description: 'Donation receipts and documentation provided for corporate tax reporting purposes.' },
                { icon: 'users', label: 'Community Accountability', description: 'Business contributions displayed publicly on campaigns, building trust and brand credibility.' },
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
                { href: '/', label: 'Partner With Us', description: 'Register your business as a verified partner.' },
                { href: '/fundraising-guide', label: 'Fundraising Guide', description: 'Complete step-by-step campaign guide.' },
                { href: '/community-fundraising', label: 'Community Fundraising', description: 'Support local community projects.' },
                { href: '/education-fundraising', label: 'Education Fundraising', description: 'Invest in Filipino education.' },
                { href: '/disaster-relief-fundraising', label: 'Disaster Relief', description: 'Support emergency relief campaigns.' },
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
