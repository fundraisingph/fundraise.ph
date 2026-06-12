import type { Metadata } from 'next'
import Link from 'next/link'
import { Church, Building2, Globe, ShieldCheck, Package, ArrowRight, HelpCircle, Heart, Scale } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'
import { AnswerBlock } from '@/components/AnswerBlock'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Church Fundraising Philippines | Fundraising.ph',
  description: 'Start a verified church fundraising campaign in the Philippines. Raise funds for building funds, mission trips, community outreach, and religious organization programs with transparent fundraising on Fundraising.ph.',
  keywords: [
    'church fundraising Philippines',
    'religious fundraising PH',
    'church building fund Philippines',
    'mission trip fundraising',
    'church community outreach fundraising',
    'religious organization crowdfunding',
    'church campaign verification',
    'Filipino church fundraising',
  ],
  openGraph: {
    title: 'Church Fundraising Philippines | Fundraising.ph',
    description: 'Start a verified church fundraising campaign in the Philippines. Transparent, trusted, and compliant.',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'Can churches and religious organizations use Fundraising.ph?',
    answer: 'Yes. Churches, religious organizations, and faith-based groups can create verified campaigns on Fundraising.ph. The organization should provide registration documents and the campaign organizer should be an authorized representative.',
  },
  {
    question: 'What types of church campaigns are supported?',
    answer: 'We support building and renovation funds, mission trip funding, community outreach programs, youth ministry activities, feeding programs, disaster relief through church networks, and other legitimate church-related initiatives.',
  },
  {
    question: 'Are there compliance considerations for religious fundraising?',
    answer: 'Yes. Religious organizations must comply with SEC or DSWD registration requirements for fundraising activities. Campaigns must clearly state the purpose, and funds must be used for the stated objective. We provide guidance on compliance requirements during the campaign setup process.',
  },
  {
    question: 'Can we use product-based fundraising for our church?',
    answer: 'Yes. Churches can use Fundraising.ph\'s marketplace features for product-based fundraising such as selling goods, food items, or crafts with proceeds going to the church\'s campaign. Product-based campaigns follow our standard verification and transparency requirements.',
  },
  {
    question: 'How is a church campaign verified?',
    answer: 'Verification includes reviewing the church\'s registration documents, confirming the organizer\'s authorization to represent the church, and assessing the campaign\'s purpose and feasibility. Additional documentation may be required depending on the campaign type.',
  },
  {
    question: 'Can individual members fundraise on behalf of the church?',
    answer: 'Yes, with proper authorization. Individual church members can organize campaigns on behalf of their church, provided they submit a letter of authorization from the church leadership and the church\'s registration documents.',
  },
  {
    question: 'How do church building funds work on Fundraising.ph?',
    answer: 'Church building funds can be set up as long-term campaigns with phased goals. Include architectural plans or cost estimates, construction timelines, and progress updates. Funds are tracked and disbursed as construction milestones are reached and verified.',
  },
]

const contentSections = [
  { icon: Building2, title: 'Church Building Funds', description: 'Raise funds for church construction, renovation, and facility improvements. Campaigns should include architectural plans or cost estimates, timelines, and community impact statements.' },
  { icon: Globe, title: 'Mission Trips & Outreach', description: 'Fund mission trips, medical missions, community outreach, feeding programs, and other service activities. Include the mission\'s objectives, destination, team details, and budget breakdown.' },
  { icon: Heart, title: 'Community Outreach Programs', description: 'Support your church\'s community service through verified campaigns. Fund feeding programs, scholarship grants, livelihood assistance, and other outreach initiatives that benefit the community.' },
  { icon: Church, title: 'Religious Organization Compliance', description: 'Religious organizations must ensure compliance with SEC or DSWD registration requirements. Fundraising.ph provides guidance on documentation, reporting, and regulatory requirements to keep your campaign compliant.' },
  { icon: Package, title: 'Product Fundraising for Churches', description: 'Sell products with proceeds going to your church campaign. From food items to crafts, product-based fundraising combines community support with tangible goods, following our verification and transparency standards.' },
  { icon: Scale, title: 'Financial Accountability', description: 'Church campaigns maintain the highest standards of financial accountability. All donations are tracked, fund usage is documented, and regular reports are shared with donors and the church community.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Church Fundraising Philippines',
  description: 'Start a verified church fundraising campaign in the Philippines. Raise funds for building funds, mission trips, and community outreach.',
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

export default function ChurchFundraisingPage() {
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
                <Church className="h-4 w-4" />
                Church & Faith
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Church Fundraising Philippines
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                Raise funds for church building projects, mission trips, community outreach, and religious organization programs through verified campaigns on Fundraising.ph.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-6 py-3 rounded-full hover:bg-[#B8943F] transition-colors">
                <Heart className="h-5 w-5" />
                Start a Church Campaign
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AnswerBlock
              question="How does church fundraising work in the Philippines?"
              answer="Church fundraising on Fundraising.ph allows religious organizations and their authorized members to create verified campaigns for building funds, mission trips, community outreach, and other church-related initiatives. The church provides registration documents, the organizer is verified as an authorized representative, and all funds are tracked with transparent reporting to donors."
            />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Church Fundraising Guide</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Support your church\'s mission through verified, transparent fundraising.</p>
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
              title="Faith & Transparency"
              description="Church campaigns combine faith-driven missions with verified transparency, ensuring every donation is accounted for."
              items={[
                { icon: 'shield', label: 'Organization Verification', description: 'Church registration and SEC/DSWD documents reviewed for every campaign.' },
                { icon: 'check', label: 'Authorized Representatives', description: 'Campaign organizers verified as authorized representatives of the church.' },
                { icon: 'file', label: 'Fund Usage Reports', description: 'Detailed reporting on how funds were used for the church\'s stated purpose.' },
                { icon: 'users', label: 'Community Accountability', description: 'Church members and the community can track campaign progress and fund usage.' },
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
                { href: '/', label: 'Start a Campaign', description: 'Launch your verified church fundraising campaign.' },
                { href: '/fundraising-guide', label: 'Fundraising Guide', description: 'Complete step-by-step campaign guide.' },
                { href: '/community-fundraising', label: 'Community Fundraising', description: 'Support local community projects and initiatives.' },
                { href: '/education-fundraising', label: 'Education Fundraising', description: 'Scholarship and education campaigns.' },
                { href: '/disaster-relief-fundraising', label: 'Disaster Relief', description: 'Emergency relief for disaster-affected communities.' },
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
