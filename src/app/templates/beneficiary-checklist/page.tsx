import type { Metadata } from 'next'
import Link from 'next/link'
import { ClipboardList, CheckCircle2, Lightbulb, ArrowRight } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free Beneficiary Verification Checklist Template | Fundraise.ph',
  description:
    'Use our free beneficiary verification checklist to ensure your fundraising campaign beneficiaries are properly verified. Includes identity, medical, and financial verification steps.',
  openGraph: {
    title: 'Free Beneficiary Verification Checklist Template | Fundraise.ph',
    description:
      'Use our free beneficiary verification checklist to ensure your fundraising campaign beneficiaries are properly verified. Includes identity, medical, and financial verification steps.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const templateText = `BENEFICIARY VERIFICATION CHECKLIST
Campaign: [Campaign Name]          Date Started: [DD/MM/YYYY]
Organizer: [Organizer Name]        Beneficiary: [Beneficiary Name]

═══════════════════════════════════════════════════════════════

1. IDENTITY VERIFICATION
───────────────────────────────────────────────────────────────
   [  ] Valid government-issued ID (passport, driver's license,
         SSS/GSIS, PhilHealth, Voter's ID, or Postal ID)
   [  ] Proof of current address (utility bill, barangay
         certification, or lease agreement)
   [  ] Selfie with government ID (clear, well-lit photo)
   [  ] Barangay clearance or certification of residency

   ID Type: _______________    ID Number: _______________
   Expiry Date: ___________    Verified By: ______________

2. MEDICAL VERIFICATION (for medical campaigns)
───────────────────────────────────────────────────────────────
   [  ] Medical certificate from attending physician
   [  ] Hospital billing statement (current)
   [  ] Doctor's referral letter or treatment plan
   [  ] Laboratory results or diagnostic reports
   [  ] Prescription or medication list
   [  ] Hospital name and contact details confirmed

   Hospital: _______________    Attending Physician: ________
   Diagnosis: ______________    Estimated Cost: PHP ________

3. FINANCIAL VERIFICATION
───────────────────────────────────────────────────────────────
   [  ] Proof of financial need (income tax return, certificate
         of indigency, or social welfare certification)
   [  ] Hospital quotation or cost estimate
   [  ] Insurance denial letter (if applicable)
   [  ] Declaration of other sources of funding
   [  ] Bank account details verified

   Monthly Income: __________   Insurance Status: __________
   Other Funding Sources: __________________________________

4. CONSENT & AUTHORIZATION
───────────────────────────────────────────────────────────────
   [  ] Beneficiary consent form signed and dated
   [  ] Photo and video consent granted
   [  ] Campaign organizer authorization letter signed
   [  ] Data privacy notice acknowledged and signed
   [  ] Consent for third-party verification granted

   Consent Date: ___________    Witness: _________________

5. CAMPAIGN-SPECIFIC DOCUMENTS
───────────────────────────────────────────────────────────────
   [  ] Campaign story verified and cross-referenced
   [  ] Fund allocation plan documented
   [  ] Bank account verification completed
   [  ] Co-organizer or guarantor details recorded
   [  ] Supporting documents notarized (if required)

   Bank Name: ______________    Account Name: ______________
   Account No: ______________    Co-Organizer: ______________

═══════════════════════════════════════════════════════════════
VERIFICATION SUMMARY
───────────────────────────────────────────────────────────────
Total Items: 23    Completed: ___    Pending: ___    N/A: ___

Overall Status:   [  ] VERIFIED   [  ] PENDING   [  ] REJECTED

Verified By: ____________________   Date: _________________
Reviewed By: ___________________   Date: _________________

Notes:
_______________________________________________________________
_______________________________________________________________

═══════════════════════════════════════════════════════════════`

const tips = [
  'Verify the beneficiary\'s identity first before proceeding with other checks.',
  'Request original documents and keep certified photocopies on file.',
  'Update the checklist regularly as the campaign progresses and new documents arrive.',
  'Protect beneficiary privacy by storing all documents securely and limiting access.',
]

const faqs = [
  {
    question: 'Why is beneficiary verification important for fundraising?',
    answer:
      'Beneficiary verification protects donors by ensuring that funds reach legitimate recipients. It prevents fraud, builds trust in the platform, ensures compliance with anti-money laundering regulations, and maintains the integrity of the fundraising ecosystem.',
  },
  {
    question: 'What documents are required to verify a medical beneficiary?',
    answer:
      'Medical beneficiary verification typically requires a valid government ID, medical certificate from the attending physician, hospital billing statement, doctor\'s treatment plan or referral, and laboratory or diagnostic results. Additional documents may include proof of financial need and insurance denial letters.',
  },
  {
    question: 'How do I verify a beneficiary\'s identity online?',
    answer:
      'Online identity verification involves requesting a clear photo of a valid government-issued ID, a selfie of the beneficiary holding the ID, and cross-referencing the details with supporting documents like proof of address. Video calls may also be used for real-time verification.',
  },
  {
    question: 'How often should I re-verify campaign beneficiaries?',
    answer:
      'Beneficiaries should be re-verified at key milestones: when the campaign reaches 50% of its goal, before any major fund disbursement, if there are significant changes in the beneficiary\'s circumstances, and at the end of the campaign before final payout.',
  },
  {
    question: 'What happens if a beneficiary cannot provide all required documents?',
    answer:
      'If a beneficiary cannot provide all documents, the campaign organizer should document the missing items, explore alternative verification methods, and may need to assign a guarantor or co-organizer who can vouch for the beneficiary. Fund disbursement may be delayed until sufficient verification is completed.',
  },
]

const internalLinks = [
  { label: 'Campaign Description Template', page: '/templates/campaign-description' },
  { label: 'Medical Fundraising Letter', page: '/templates/medical-letter' },
  { label: 'School Fundraising Letter', page: '/templates/school-letter' },
  { label: 'Church Fundraising Letter', page: '/templates/church-letter' },
  { label: 'Sponsorship Request Letter', page: '/templates/sponsorship-request' },
  { label: 'Donor Thank You Message', page: '/templates/donor-thank-you' },
  { label: 'Campaign Update Template', page: '/templates/campaign-update' },
  { label: 'Product Order Form', page: '/templates/product-order-form' },
  { label: 'Donation Acknowledgment', page: '/templates/donation-acknowledgment' },
  { label: 'Campaign Budget Template', page: '/templates/campaign-budget' },
  { label: 'Payout Checklist', page: '/templates/payout-checklist' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function BeneficiaryChecklistPage() {
  return (
    <>
      <SchemaMarkup
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: 'Beneficiary Verification Checklist Template',
            description:
              'Free beneficiary verification checklist for fundraising campaigns with identity, medical, and financial verification steps.',
            author: { '@type': 'Organization', name: 'Fundraise.ph' },
            datePublished: '2026-06-10',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Free Beneficiary Verification Checklist Template',
            author: { '@type': 'Organization', name: 'Fundraise.ph' },
            datePublished: '2026-06-10',
            publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
          },
          faqSchema,
        ]}
      />

      <section className="bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white text-[#C8A951] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-slate-200">
              <ClipboardList className="h-4 w-4" />
              Checklist
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-6">
              Beneficiary Verification Checklist
            </h1>
            <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
              Use our free beneficiary verification checklist to ensure your fundraising campaign
              beneficiaries are properly verified. Includes identity, medical, and financial
              verification steps.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <AnswerBlock
            question="What does beneficiary verification involve?"
            answer="Beneficiary verification is the process of confirming a campaign recipient's identity, financial need, and the legitimacy of their circumstances. It involves collecting government-issued ID, supporting documents (medical, financial, or legal), and consent forms to ensure funds reach the right person and maintain donor trust."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Beneficiary Verification Checklist</h2>
                <CopyButton text={templateText} label="Copy Checklist" />
              </div>
              <pre className="whitespace-pre-wrap text-sm text-slate-300 font-mono leading-relaxed overflow-x-auto">
                {templateText}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">
              How to Use This Checklist
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Start with Identity Verification</h3>
                  <p className="text-[#4A5568]">Collect the beneficiary's government ID, proof of address, and selfie with ID before proceeding to other sections.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Gather Medical Documentation</h3>
                  <p className="text-[#4A5568]">For medical campaigns, request the medical certificate, billing statements, and treatment plan from the attending physician.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Verify Financial Need</h3>
                  <p className="text-[#4A5568]">Collect proof of financial need including income documentation, hospital quotations, and declarations of other funding sources.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Complete Consent and Campaign Documents</h3>
                  <p className="text-[#4A5568]">Ensure all consent forms are signed, the campaign story is verified, and bank account details are confirmed before launching.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-6 w-6 text-[#C8A951]" />
              <h2 className="text-2xl md:text-3xl font-black text-navy">Tips &amp; Best Practices</h2>
            </div>
            <div className="space-y-3">
              {tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-[#4A5568]">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <ProofBlock variant="compliance">
              This beneficiary verification checklist aligns with Fundraise.ph's trust and transparency standards. Proper verification protects donors, ensures compliance with anti-money laundering regulations, and safeguards the integrity of the fundraising platform.
            </ProofBlock>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <SEOBlock items={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <AuthorBox lastUpdated="2026-06-10" />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <InternalLinks links={internalLinks} title="More Templates" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Start Your Campaign?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Launch your verified, transparent fundraising campaign on Fundraise.ph today.
          </p>
          <Link
            href="https://fundraising.ph/start"
            className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-8 py-3.5 rounded-full hover:bg-[#B8943F] transition-colors text-lg"
          >
            Start Your Campaign
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
