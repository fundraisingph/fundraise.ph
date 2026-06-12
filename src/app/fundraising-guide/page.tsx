import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, UserPlus, ShieldCheck, Share2, CreditCard, CheckCircle2, ArrowRight, Heart, HelpCircle, ClipboardList, FileText } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'
import { AnswerBlock } from '@/components/AnswerBlock'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'How to Start a Fundraising Campaign in the Philippines | Fundraising.ph',
  description: 'Step-by-step guide to starting a verified fundraising campaign in the Philippines. Learn the process, requirements, and tips for success.',
  keywords: ['start fundraising Philippines', 'how to fundraise', 'fundraising guide Philippines', 'crowdfunding guide'],
  openGraph: {
    title: 'How to Start a Fundraising Campaign in the Philippines | Fundraising.ph',
    description: 'Step-by-step guide to starting a verified fundraising campaign in the Philippines.',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'How long does it take to set up a fundraising campaign?',
    answer: 'Setting up a basic campaign takes about 15–30 minutes. Identity verification typically completes within 24–48 hours. Once verified, your campaign can go live immediately.',
  },
  {
    question: 'Do I need to be a registered organization to start a campaign?',
    answer: 'No. Both individuals and organizations can start campaigns. Individuals need to verify their identity with a valid government-issued ID. Organizations need to provide registration documents.',
  },
  {
    question: 'How are funds disbursed after my campaign?',
    answer: 'Funds are disbursed directly to your verified bank account or e-wallet. For medical campaigns, funds can be sent directly to the hospital or medical institution. Disbursement timelines depend on the campaign type and verification level.',
  },
  {
    question: 'What fees does Fundraising.ph charge?',
    answer: 'Fundraising.ph is a nonprofit technology organization. Platform fees are kept minimal and transparent, covering only essential payment processing and operational costs. Full fee details are disclosed before you launch your campaign.',
  },
  {
    question: 'Can I run a campaign from outside the Philippines?',
    answer: 'Yes. Overseas Filipinos and diaspora communities can organize campaigns for beneficiaries in the Philippines. Additional verification steps may apply for cross-border campaigns to ensure compliance and trust.',
  },
  {
    question: 'What happens if my campaign does not reach its goal?',
    answer: 'Funds raised are still disbursed to the verified beneficiary. We encourage transparent communication with donors about how partial funds will be used. Campaigners can extend the campaign duration or adjust the goal.',
  },
  {
    question: 'What documents do I need to get started?',
    answer: 'You need at least one valid government-issued ID (passport, driver\'s license, SSS/GSIS, PhilHealth, or voter\'s ID). Organizations need SEC or DSWD registration. Depending on your campaign type, additional documents such as medical certificates, enrollment records, or project proposals may be required.',
  },
]

const steps = [
  { icon: UserPlus, title: 'Create Your Account', description: 'Sign up with your email or phone number. Basic information is all you need to get started on Fundraising.ph.' },
  { icon: ShieldCheck, title: 'Verify Your Identity', description: 'Submit a valid government-issued ID and supporting documents. Our verification team reviews submissions within 24–48 hours.' },
  { icon: ClipboardList, title: 'Set Up Your Campaign', description: 'Write your campaign story, set your fundraising goal, upload photos, and select your campaign category. Be specific about how funds will be used.' },
  { icon: CheckCircle2, title: 'Submit for Verification', description: 'Once your campaign is complete, submit it for review. Our team verifies the information, documents, and legitimacy before publishing.' },
  { icon: Share2, title: 'Share Your Campaign', description: 'Use social media, messaging apps, and email to share your campaign. We provide sharing tools and templates to help you reach more donors.' },
  { icon: CreditCard, title: 'Receive Funds Securely', description: 'Donations are collected securely and disbursed to your verified account. Track every contribution and provide updates to your donors.' },
]

const documents = [
  { icon: FileText, title: 'Valid Government ID', description: 'Passport, driver\'s license, SSS/GSIS UMID, PhilHealth ID, or voter\'s ID for identity verification.' },
  { icon: ShieldCheck, title: 'Proof of Address', description: 'Utility bill, barangay clearance, or bank statement showing your current address.' },
  { icon: Heart, title: 'Campaign-Specific Docs', description: 'Medical certificates for medical campaigns, enrollment documents for education, project proposals for community campaigns.' },
  { icon: BookOpen, title: 'Organization Registration', description: 'SEC registration, DSWD license, or DTI business permit for organization-led campaigns.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fundraising.ph' },
    { '@type': 'ListItem', position: 2, name: 'Fundraising Guide', item: 'https://fundraising.ph/fundraising-guide' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Start a Fundraising Campaign in the Philippines',
  description: 'Step-by-step guide to launching a verified, transparent fundraising campaign on Fundraising.ph.',
  step: steps.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.title,
    text: step.description,
  })),
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

export default function FundraisingGuidePage() {
  return (
    <>
      <SchemaMarkup schemas={[breadcrumbSchema, howToSchema, faqSchema]} />
      <Navbar />
      <main className="pt-16 md:pt-18">
        <section className="relative bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B] overflow-hidden">
          <div className="absolute inset-0 pattern-overlay" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-[#C8A951] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/10">
                <BookOpen className="h-4 w-4" />
                Getting Started
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                How to Start a Fundraising Campaign in the Philippines
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                A complete step-by-step guide to launching a verified, transparent, and compliant fundraising campaign on Fundraising.ph — built for Filipinos, by Filipinos.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-6 py-3 rounded-full hover:bg-[#B8943F] transition-colors">
                <Heart className="h-5 w-5" />
                Start Your Campaign
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AnswerBlock
              question="How do I start fundraising in the Philippines?"
              answer="Starting a fundraising campaign in the Philippines is straightforward: create an account on Fundraising.ph, verify your identity with a valid ID, set up your campaign with a clear story and goal, share it with your network, and receive funds securely. The entire process can be completed in as little as 48 hours from account creation to live campaign."
            />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Step-by-Step Process</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Follow these six steps to launch your verified fundraising campaign on Fundraising.ph.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] shadow-lg p-8 border border-slate-100 hover:border-[#C8A951]/20 transition-all duration-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center shrink-0">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-[#C8A951] font-black text-2xl">0{i + 1}</span>
                  </div>
                  <h3 className="font-black text-navy text-lg mb-2">{step.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">What Documents Do You Need?</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Prepare these documents before starting your campaign to speed up verification.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] shadow-lg p-8 border border-slate-100 hover:border-[#C8A951]/20 transition-all duration-200">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center mb-4">
                    <doc.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-black text-navy text-lg mb-2">{doc.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{doc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <ProofBlock
              title="Why Trust Fundraising.ph?"
              description="Our platform is built with verification, transparency, and accountability at every step."
              items={[
                { icon: 'shield', label: 'Identity Verification', description: 'Every campaigner verifies their identity with government-issued ID before going live.' },
                { icon: 'check', label: 'Fund Tracking', description: 'All donations are tracked and campaigners are expected to provide proof of fund use.' },
                { icon: 'file', label: 'Post-Campaign Reports', description: 'Campaigners submit reports showing how funds were used after the campaign ends.' },
                { icon: 'users', label: 'Community Oversight', description: 'Public reporting channels allow anyone to flag concerns about any campaign.' },
              ]}
            />
          </div>
        </section>

        <section className="bg-white">
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

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AuthorBox lastUpdated="2026-06-10" />
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <InternalLinks
              title="Explore More"
              links={[
                { href: '/', label: 'Start a Campaign', description: 'Launch your verified fundraising campaign today.' },
                { href: '/trust', label: 'Trust & Transparency', description: 'Learn about our verification and trust framework.' },
                { href: '/how-it-works', label: 'How It Works', description: 'Understand the full platform workflow end to end.' },
                { href: '/learn', label: 'Learn', description: 'Resources, guides, and tips for successful fundraising.' },
                { href: '/medical-fundraising', label: 'Medical Fundraising', description: 'Specialized guide for medical and healthcare campaigns.' },
                { href: '/education-fundraising', label: 'Education Fundraising', description: 'Fundraising for tuition, school supplies, and scholarships.' },
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
