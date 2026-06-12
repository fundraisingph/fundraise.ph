import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, FileText, ShieldCheck, Share2, Banknote, Stethoscope, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'
import { AnswerBlock } from '@/components/AnswerBlock'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Medical Fundraising Philippines | Fundraising.ph',
  description: 'Start a verified medical fundraising campaign in the Philippines. Help cover hospital bills, surgeries, treatments, and medications with transparent, trusted fundraising on Fundraising.ph.',
  keywords: [
    'medical fundraising Philippines',
    'hospital bill fundraising PH',
    'medical crowdfunding Philippines',
    'surgery fundraising Philippines',
    'cancer fundraising PH',
    'medical campaign verification',
    'Filipino medical fundraising',
    'healthcare fundraising Philippines',
  ],
  openGraph: {
    title: 'Medical Fundraising Philippines | Fundraising.ph',
    description: 'Start a verified medical fundraising campaign in the Philippines. Transparent, trusted, and compliant.',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'What documents do I need for a medical fundraising campaign?',
    answer: 'You will need a valid government-issued ID, a medical certificate or doctor\'s letter confirming the diagnosis and treatment plan, hospital billing statements or cost estimates, and proof of relationship to the patient if you are organizing on someone\'s behalf.',
  },
  {
    question: 'How is a medical campaign verified?',
    answer: 'Our verification team reviews submitted medical documents, contacts the hospital or medical institution when necessary, and confirms the identity of both the organizer and the beneficiary. Verification levels are displayed publicly on the campaign page.',
  },
  {
    question: 'Can funds go directly to the hospital?',
    answer: 'Yes. For medical campaigns, we offer direct disbursement to hospitals and medical institutions. This provides additional transparency and assurance to donors that funds are used for the stated medical purpose.',
  },
  {
    question: 'How do I write a compelling medical campaign story?',
    answer: 'Be specific about the diagnosis, treatment plan, and total cost. Include the patient\'s name (with consent), age, and how the condition affects their daily life. Share the timeline and urgency. Always include supporting medical documents and photos (with patient consent).',
  },
  {
    question: 'What types of medical campaigns are supported?',
    answer: 'We support campaigns for surgeries, cancer treatments, dialysis, medications, hospital confinement, rehabilitation, medical equipment, mental health treatment, prenatal and maternal care, and other legitimate medical needs.',
  },
  {
    question: 'How long does medical campaign verification take?',
    answer: 'Standard verification takes 24–48 hours. For urgent medical emergencies, we offer an expedited review process that can be completed within a few hours, subject to document availability.',
  },
  {
    question: 'Can I fundraise for someone else\'s medical expenses?',
    answer: 'Yes. Family members, friends, and colleagues can organize campaigns on behalf of a patient. You must provide proof of relationship and the patient\'s consent along with the required medical documents.',
  },
]

const medicalNeeds = [
  { icon: Stethoscope, title: 'Cancer Treatment', description: 'Fund chemotherapy, radiation therapy, immunotherapy, and supportive care for cancer patients across the Philippines.' },
  { icon: Heart, title: 'Surgery & Operations', description: 'Cover the costs of life-saving surgeries, organ transplants, and other critical medical procedures.' },
  { icon: Banknote, title: 'Dialysis Sessions', description: 'Help patients afford regular dialysis sessions, which can cost thousands per session in the Philippines.' },
  { icon: FileText, title: 'Medications', description: 'Fund expensive prescription medications, maintenance drugs, and specialty medicines not covered by insurance.' },
  { icon: CheckCircle2, title: 'Hospital Bills', description: 'Assist families burdened with hospital confinement costs, ICU stays, and emergency room expenses.' },
  { icon: ShieldCheck, title: 'Medical Equipment', description: 'Raise funds for wheelchairs, prosthetics, hearing aids, and other essential medical devices.' },
]

const contentSections = [
  { icon: Stethoscope, title: 'How Medical Campaigns Work', description: 'Create a campaign detailing the patient\'s medical condition, treatment plan, and fundraising goal. Upload medical documents for verification. Once approved, share your campaign with your network and receive donations that can go directly to the hospital or medical provider.' },
  { icon: FileText, title: 'Required Documents', description: 'Government-issued ID, medical certificate or doctor\'s referral letter, hospital billing statement or treatment cost estimate, and proof of relationship to the patient if you are organizing on someone else\'s behalf.' },
  { icon: ShieldCheck, title: 'Verification Process', description: 'Our team reviews all submitted medical documents, confirms the diagnosis and treatment plan, and verifies the identities involved. Campaign verification status is displayed publicly to help donors make informed decisions.' },
  { icon: CheckCircle2, title: 'Tips for Medical Campaign Stories', description: 'Include the full name and age of the patient (with their consent). Describe the medical condition in simple terms. Explain the treatment plan and associated costs. Share how the condition impacts daily life. Be transparent about how partial funds will be used.' },
  { icon: Banknote, title: 'How Payouts Work', description: 'Medical campaign funds can be disbursed directly to the hospital or medical institution for maximum transparency. Alternatively, funds are sent to the verified organizer\'s bank account. All disbursements are documented and tracked.' },
  { icon: Share2, title: 'Sharing Your Medical Campaign', description: 'Use social media platforms, messaging groups, and community networks. Tag relevant support groups. Update donors regularly on the patient\'s condition and treatment progress. Post-campaign, share proof of fund usage and the patient\'s recovery journey.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Medical Fundraising Philippines',
  description: 'Start a verified medical fundraising campaign in the Philippines. Help cover hospital bills, surgeries, treatments, and medications.',
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

export default function MedicalFundraisingPage() {
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
                <Heart className="h-4 w-4" />
                Medical Campaigns
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Medical Fundraising Philippines
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                Raise funds for hospital bills, surgeries, treatments, and medications through verified, transparent medical campaigns on Fundraising.ph.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-6 py-3 rounded-full hover:bg-[#B8943F] transition-colors">
                <Heart className="h-5 w-5" />
                Start a Medical Campaign
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AnswerBlock
              question="How does medical fundraising work in the Philippines?"
              answer="Medical fundraising on Fundraising.ph lets you create a verified campaign to raise funds for hospital bills, surgeries, cancer treatments, dialysis, medications, and other healthcare needs. You submit medical documents for verification, share your campaign with your network, and receive funds that can be disbursed directly to the hospital or to your verified account."
            />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Common Medical Needs</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Fundraising.ph supports campaigns for a wide range of medical needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalNeeds.map((need, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] shadow-lg p-8 border border-slate-100 hover:border-[#C8A951]/20 transition-all duration-200">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center mb-4">
                    <need.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-black text-navy text-lg mb-2">{need.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{need.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">How Medical Fundraising Works</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Everything you need to know about running a medical campaign on Fundraising.ph.</p>
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

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <ProofBlock
              title="Trusted by Filipino Families"
              description="Medical campaigns are the most common fundraising category on Fundraising.ph, helping families across the country access life-saving treatment."
              items={[
                { icon: 'shield', label: 'Medical Document Verification', description: 'Hospital bills, doctor\'s letters, and medical certificates are reviewed for every campaign.' },
                { icon: 'check', label: 'Direct Hospital Disbursement', description: 'Funds can be sent directly to hospitals for maximum transparency and donor confidence.' },
                { icon: 'file', label: 'Treatment Progress Updates', description: 'Campaigners provide regular updates on the patient\'s condition and treatment progress.' },
                { icon: 'users', label: 'Family Support', description: 'Dedicated support team to guide families through the campaign process during difficult times.' },
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
                { href: '/', label: 'Start a Campaign', description: 'Launch your verified medical fundraising campaign.' },
                { href: '/fundraising-guide', label: 'Fundraising Guide', description: 'Complete step-by-step guide to starting a campaign.' },
                { href: '/trust', label: 'Trust & Transparency', description: 'Learn about our verification and trust framework.' },
                { href: '/disaster-relief-fundraising', label: 'Disaster Relief', description: 'Emergency fundraising for disaster-affected communities.' },
                { href: '/community-fundraising', label: 'Community Fundraising', description: 'Support local community projects and initiatives.' },
                { href: '/education-fundraising', label: 'Education Fundraising', description: 'Fundraising for tuition, supplies, and scholarships.' },
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
