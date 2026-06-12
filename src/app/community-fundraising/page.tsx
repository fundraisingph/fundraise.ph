import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, Home, Heart, ShieldCheck, Store, ArrowRight, HelpCircle, HandHeart, MapPin } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'
import { AnswerBlock } from '@/components/AnswerBlock'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Community Fundraising Philippines | Fundraising.ph',
  description: 'Start a verified community fundraising campaign in the Philippines. Support community pantries, local initiatives, neighborhood projects, and grassroots programs with transparent fundraising on Fundraising.ph.',
  keywords: [
    'community fundraising Philippines',
    'community pantry fundraising',
    'local initiative fundraising PH',
    'neighborhood project crowdfunding',
    'grassroots fundraising Philippines',
    'barangay fundraising',
    'community project verification',
    'Filipino community campaigns',
  ],
  openGraph: {
    title: 'Community Fundraising Philippines | Fundraising.ph',
    description: 'Start a verified community fundraising campaign in the Philippines. Support local projects and initiatives.',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'What types of community projects can I fundraise for?',
    answer: 'You can fundraise for community pantries, neighborhood clean-ups, local park improvements, community centers, youth programs, senior citizen activities, local sports teams, cultural events, street lighting, and other grassroots projects that benefit a specific community.',
  },
  {
    question: 'How is a community campaign verified?',
    answer: 'Community campaigns are verified by reviewing the organizer\'s identity, confirming their connection to the community (residency, leadership role, or organization membership), and assessing the project\'s feasibility and community impact. Letters of support from barangay officials strengthen the application.',
  },
  {
    question: 'Can a barangay or local government unit start a campaign?',
    answer: 'Yes. Barangay officials, local government units, and community organizations can create campaigns. They should use their official email and provide documentation proving their authority to represent the community.',
  },
  {
    question: 'How do community pantries work on Fundraising.ph?',
    answer: 'Community pantry organizers can create campaigns to fund food items, supplies, and operational costs. The campaign should specify the pantry location, target number of beneficiaries, and itemized costs. Regular updates with photos of the pantry operation are expected.',
  },
  {
    question: 'What makes a community campaign successful?',
    answer: 'Successful community campaigns clearly define the project scope, provide a detailed budget, show community support, share regular progress updates, and maintain transparent records of all fund usage. Engaging the local community in sharing the campaign also significantly boosts reach.',
  },
  {
    question: 'Can multiple organizers run one community campaign?',
    answer: 'Yes. Community campaigns often have multiple organizers. One person serves as the primary account holder for verification and fund disbursement purposes, but the campaign can credit multiple organizers and volunteers.',
  },
  {
    question: 'How do barangay projects get funded through campaigns?',
    answer: 'Barangay projects can receive funding through verified campaigns created by authorized barangay officials or community leaders. The campaign must include project plans, cost estimates, barangay council resolutions when applicable, and regular progress reports.',
  },
]

const contentSections = [
  { icon: HandHeart, title: 'Community Pantries', description: 'Support or start a community pantry campaign. Raise funds for food, supplies, and operational costs while maintaining transparent records of every item purchased and distributed.' },
  { icon: Home, title: 'Barangay Projects', description: 'Fund community center repairs, local library setup, shared garden projects, street lighting, and other neighborhood improvements with clear plans, budgets, and timelines.' },
  { icon: Store, title: 'Local Cooperatives', description: 'Help local cooperatives and small community businesses get started or recover. Campaigns support livelihood programs, skills training, and cooperative development.' },
  { icon: Users, title: 'Bayanihan Online', description: 'Fundraising.ph brings the Filipino spirit of bayanihan into the digital age. Pool resources from your community — locally and globally — for shared benefit and collective impact.' },
  { icon: MapPin, title: 'Community-Driven Campaigns', description: 'From building local playgrounds to organizing neighborhood events, Fundraising.ph supports campaigns that bring Filipino communities together. Every project starts with a verified organizer.' },
  { icon: ShieldCheck, title: 'Verification for Community Campaigns', description: 'Organizers verify their identity and connection to the community. Letters of support from barangay officials or community leaders strengthen the verification. All campaigns display their verification status publicly.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Community Fundraising Philippines',
  description: 'Start a verified community fundraising campaign in the Philippines. Support community pantries, local initiatives, and grassroots programs.',
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

export default function CommunityFundraisingPage() {
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
                <Users className="h-4 w-4" />
                Community Projects
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Community Fundraising Philippines
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                Support community pantries, local initiatives, neighborhood projects, and grassroots programs through verified campaigns powered by the Filipino spirit of bayanihan.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-6 py-3 rounded-full hover:bg-[#B8943F] transition-colors">
                <Users className="h-5 w-5" />
                Start a Community Campaign
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AnswerBlock
              question="How does community fundraising work in the Philippines?"
              answer="Community fundraising on Fundraising.ph lets you create verified campaigns for local projects, community pantries, neighborhood improvements, and grassroots initiatives. You verify your identity and connection to the community, set up your campaign with a clear plan and budget, and share it with your network. All funds are tracked and transparent reporting is required."
            />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Community Fundraising Guide</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">From community pantries to neighborhood projects — bring your community together.</p>
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
              title="Bayanihan, Verified"
              description="Community campaigns carry the Filipino spirit of bayanihan — collective effort backed by transparency and accountability."
              items={[
                { icon: 'shield', label: 'Community Verification', description: 'Organizer identity and community connection verified for every campaign.' },
                { icon: 'check', label: 'Transparent Budgets', description: 'Itemized budgets and fund usage reports published for all community campaigns.' },
                { icon: 'file', label: 'Progress Documentation', description: 'Regular photo and video updates showing project progress and fund impact.' },
                { icon: 'users', label: 'Community Endorsement', description: 'Letters of support from barangay officials and community leaders strengthen trust.' },
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
                { href: '/', label: 'Start a Campaign', description: 'Launch your verified community fundraising campaign.' },
                { href: '/fundraising-guide', label: 'Fundraising Guide', description: 'Complete step-by-step campaign guide.' },
                { href: '/disaster-relief-fundraising', label: 'Disaster Relief', description: 'Emergency fundraising for disaster-affected communities.' },
                { href: '/education-fundraising', label: 'Education Fundraising', description: 'Support students and educational programs.' },
                { href: '/church-fundraising', label: 'Church Fundraising', description: 'Religious organization and church campaigns.' },
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
