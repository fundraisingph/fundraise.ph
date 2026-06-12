import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, ArrowRight, Heart, Clock, Shield, Stethoscope, AlertCircle } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free Medical Fundraising Letter Template | Fundraise.ph',
  description: 'Download our free medical fundraising letter template. Includes sections for patient details, medical condition, treatment plan, and cost breakdown. BIR-compliant and designed for Philippine fundraisers.',
  openGraph: {
    title: 'Free Medical Fundraising Letter Template | Fundraise.ph',
    description: 'Download our free medical fundraising letter template. Includes sections for patient details, medical condition, treatment plan, and cost breakdown. BIR-compliant and designed for Philippine fundraisers.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const templateText = `MEDICAL FUNDRAISING LETTER

[Date]

Dear [Recipient Name / To Whom It May Concern / To Our Dear Community],

I am writing to you on behalf of [Patient Full Name], a [age]-year-old [occupation/student] from [city, province]. [He/She] has recently been diagnosed with [medical condition/diagnosis] and is in urgent need of [treatment/procedure/medication].

PATIENT INFORMATION

Name: [Patient Full Name]
Age: [age]
Address: [full address]
Contact Number: [phone number]
Hospital: [Hospital Name, City]
Attending Physician: [Doctor's Name, with consent]

MEDICAL CONDITION

On [date of diagnosis], [Patient Name] was diagnosed with [condition] at [Hospital/Clinic Name]. [Brief description of the condition in accessible language]. The attending physician, Dr. [Name], has recommended [treatment/procedure] as the best course of action.

TREATMENT PLAN & TIMELINE

[Patient Name]'s treatment plan includes:
• [Treatment 1] — scheduled for [date]
• [Treatment 2] — scheduled for [date]
• [Treatment 3] — ongoing for [duration]
• Follow-up consultations — every [frequency]

The estimated total treatment duration is [timeline].

FINANCIAL BREAKDOWN

The estimated costs for [Patient Name]'s treatment are as follows:

Hospital bills (confinement, procedures):    ₱[amount]
Medications and prescriptions:               ₱[amount]
Laboratory and diagnostic tests:             ₱[amount]
Doctor's professional fees:                  ₱[amount]
Surgery/procedure costs:                     ₱[amount]
Post-treatment and rehabilitation:           ₱[amount]
Transportation and other expenses:           ₱[amount]

Total Estimated Cost: ₱[total amount]
Amount Already Raised: ₱[amount]
Remaining Amount Needed: ₱[amount]

HOW TO DONATE

You can help through any of the following methods:

1. Online: Visit [Campaign URL on Fundraising.ph]
2. Bank Transfer:
   Bank: [Bank Name]
   Account Name: [Account Name]
   Account Number: [Account Number]
3. GCash/PayMaya: [Mobile Number or Name]
4. In-person: [Address where cash donations can be delivered]

All donations, regardless of amount, will make a meaningful difference.

SUPPORTING DOCUMENTS

Attached/Available for your reference:
• Medical certificate from Dr. [Name]
• Hospital billing statement / cost estimate
• Laboratory results and diagnostic reports
• Valid government-issued ID of [Patient/Organizer]

GRATITUDE

On behalf of [Patient Name] and our family, we want to express our deepest gratitude for your kindness and generosity. Your support — whether through a donation, a prayer, or sharing this letter — means more than words can express.

[Patient Name] is determined to overcome this challenge, and with your help, [he/she] will have the fighting chance [he/she] deserves.

May God bless you for your compassion.

Sincerely,

[Your Full Name]
[Relationship to Patient]
[Contact Number]
[Email Address]
[Date]`

const faqs = [
  {
    question: 'What documents should I attach to a medical fundraising letter?',
    answer: 'Attach a medical certificate or doctor\'s referral letter, hospital billing statements or cost estimates, laboratory and diagnostic test results, and a valid government-issued ID. If you are organizing on behalf of the patient, include proof of relationship such as a birth certificate or marriage certificate.',
  },
  {
    question: 'How do I protect patient privacy in my letter?',
    answer: 'Only include medical details that are necessary for donors to understand the need. Get written consent from the patient (or their legal guardian) before sharing their full name, diagnosis, and photos. You can use first names only or initials for sensitive cases, but full transparency helps build donor trust.',
  },
  {
    question: 'Can I send this letter to companies and organizations?',
    answer: 'Yes. This template works for both individual donors and corporate sponsors. When sending to companies, address the letter to the CSR department or HR, customize the greeting, and consider adding a section about how their brand will be recognized as a sponsor.',
  },
  {
    question: 'Should I include the doctor\'s name in the letter?',
    answer: 'Only include the attending physician\'s name with their explicit written consent. Including the doctor\'s name and hospital adds credibility and helps with verification. If the doctor prefers not to be named, you can reference "the attending physician at [Hospital Name]" instead.',
  },
  {
    question: 'How do I format the letter for email vs print?',
    answer: 'For email, keep the subject line clear and urgent (e.g., "Urgent: Help [Name] with [Condition] Treatment"). Use a shorter version with a direct link to your online campaign. For print, use the full template on letterhead if available. Include QR codes linking to your Fundraising.ph campaign page.',
  },
]

const internalLinks = [
  { label: 'Campaign Description Template', page: '/templates/campaign-description' },
  { label: 'School Fundraising Letter', page: '/templates/school-letter' },
  { label: 'Church Fundraising Letter', page: '/templates/church-letter' },
  { label: 'Sponsorship Request Letter', page: '/templates/sponsorship-request' },
  { label: 'Donor Thank You Message', page: '/templates/donor-thank-you' },
  { label: 'Campaign Update Template', page: '/templates/campaign-update' },
  { label: 'Product Order Form', page: '/templates/product-order-form' },
  { label: 'Donation Acknowledgment', page: '/templates/donation-acknowledgment' },
  { label: 'Beneficiary Checklist', page: '/templates/beneficiary-checklist' },
  { label: 'Campaign Budget Template', page: '/templates/campaign-budget' },
  { label: 'Payout Checklist', page: '/templates/payout-checklist' },
]

const tips = [
  { icon: Stethoscope, title: 'Include Medical Certificates', description: 'Attach a medical certificate or doctor\'s referral letter to establish credibility. Verified medical documents significantly increase donor trust and donation amounts.' },
  { icon: Shield, title: 'Be Specific About Costs', description: 'Itemize every expense with exact amounts. Donors are more likely to contribute when they can see exactly what their money will fund.' },
  { icon: Clock, title: 'Show Treatment Timeline', description: 'Include dates for each stage of treatment. A clear timeline creates urgency and helps donors understand the critical nature of the request.' },
  { icon: Heart, title: 'Include Hospital Name', description: 'Naming the hospital and attending physician (with consent) adds credibility. Donors can verify the institution, which builds confidence in your campaign.' },
  { icon: AlertCircle, title: 'Mention Doctor with Consent', description: 'Always get written permission before naming the attending physician. Their name adds professional credibility, but their privacy must be respected.' },
]

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Medical Fundraising Letter Template',
  description: 'Free medical fundraising letter template with sections for patient details, medical condition, treatment plan, and cost breakdown.',
  author: { '@type': 'Organization', name: 'Fundraise.ph' },
  publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
  datePublished: '2026-01-01',
  dateModified: '2026-06-10',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Free Medical Fundraising Letter Template',
  description: 'Download our free medical fundraising letter template. Includes sections for patient details, medical condition, treatment plan, and cost breakdown.',
  author: { '@type': 'Organization', name: 'Fundraise.ph' },
  publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
  datePublished: '2026-01-01',
  dateModified: '2026-06-10',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function MedicalLetterPage() {
  return (
    <>
      <SchemaMarkup schemas={[creativeWorkSchema, articleSchema, faqSchema]} />

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <span className="inline-flex items-center gap-2 bg-white text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-slate-200">
            <FileText className="h-4 w-4" />
            Free Template
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-6">
            Medical Fundraising Letter Template
          </h1>
          <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
            Download our free medical fundraising letter template. Includes sections for patient details, medical condition, treatment plan, and cost breakdown. BIR-compliant and designed for Philippine fundraisers.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <AnswerBlock
            question="How do I write a medical fundraising letter?"
            answer="A medical fundraising letter should clearly state the patient's condition, treatment plan, and exact costs. Include the hospital name, attending physician (with consent), a financial breakdown, and multiple donation methods. Attach medical certificates and billing statements for credibility. This template covers all required sections."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Medical Fundraising Letter Template</h2>
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-400">Copy this template and fill in your details</span>
              <CopyButton text={templateText} label="Copy Template" />
            </div>
            <pre className="whitespace-pre-wrap text-sm text-slate-300 leading-relaxed font-mono overflow-x-auto">
              {templateText}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">How to Use This Template</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">1</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Gather medical documents first</h3>
                <p className="text-[#4A5568]">Collect the medical certificate, hospital billing statement, doctor's referral letter, and diagnostic test results before writing the letter.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">2</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Fill in all patient and medical details</h3>
                <p className="text-[#4A5568]">Replace every placeholder with accurate information. Double-check the financial breakdown against the hospital's official cost estimate.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">3</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Get patient and doctor consent</h3>
                <p className="text-[#4A5568]">Ensure you have written permission from the patient to share their medical details, and from the doctor before naming them in the letter.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">4</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Distribute through multiple channels</h3>
                <p className="text-[#4A5568]">Send the letter via email, social media, messaging apps, and print. Include a direct link to your Fundraising.ph campaign page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-8">Tips &amp; Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center mb-3">
                  <tip.icon className="h-5 w-5 text-navy" />
                </div>
                <h3 className="font-bold text-navy mb-2">{tip.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ProofBlock variant="verification">
            Medical fundraising campaigns on Fundraising.ph are subject to document verification to protect both donors and beneficiaries. Always include official hospital documents, medical certificates, and valid identification. BIR-compliant donation receipts are issued for all contributions. Campaigns with verified medical documentation receive significantly higher donation amounts.
          </ProofBlock>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <SEOBlock items={faqs} />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <AuthorBox lastUpdated="2026-06-10" />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <InternalLinks title="More Templates" links={internalLinks} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <Shield className="h-10 w-10 text-[#C8A951] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Start Your Medical Campaign Today</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Launch a verified medical fundraising campaign on Fundraising.ph. Built-in verification, transparent fund tracking, and direct hospital disbursement available.</p>
          <Link href="https://fundraising.ph/start" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-8 py-4 rounded-full hover:bg-[#B8943F] transition-colors text-lg">
            Start Your Campaign
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
