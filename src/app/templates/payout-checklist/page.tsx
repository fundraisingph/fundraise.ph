import type { Metadata } from 'next'
import Link from 'next/link'
import { ClipboardCheck, CheckCircle2, Lightbulb, ArrowRight } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free Payout Documentation Checklist | Fundraise.ph',
  description:
    'Use our free payout documentation checklist to ensure smooth fund disbursement. Includes requirements for beneficiary verification, bank details, and compliance documentation.',
  openGraph: {
    title: 'Free Payout Documentation Checklist | Fundraise.ph',
    description:
      'Use our free payout documentation checklist to ensure smooth fund disbursement. Includes requirements for beneficiary verification, bank details, and compliance documentation.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const templateText = `PAYOUT DOCUMENTATION CHECKLIST
Campaign: [Campaign Name]          Payout Request Date: [DD/MM/YYYY]
Organizer: [Organizer Name]        Beneficiary: [Beneficiary Name]
Total Amount Raised: PHP [0,000,000.00]

═══════════════════════════════════════════════════════════════

1. BENEFICIARY IDENTITY VERIFICATION
───────────────────────────────────────────────────────────────
   [  ] Government-issued ID (photocopy) — valid and not expired
   [  ] Proof of current address (utility bill, barangay
         certification, or lease agreement)
   [  ] Selfie holding ID for visual verification
   [  ] Matching name on all documents confirmed

   ID Type: _______________    ID Number: _______________
   ID Expiry: _____________    Name Match: [  ] Yes  [  ] No

2. BANK ACCOUNT VERIFICATION
───────────────────────────────────────────────────────────────
   [  ] Bank name and branch confirmed
   [  ] Account number confirmed and verified
   [  ] Account name matches beneficiary name on ID
   [  ] Bank certificate or passbook copy submitted
   [  ] GCash or other e-wallet details (if applicable)

   Bank: _________________     Branch: _________________
   Account Name: __________    Account No: ______________
   E-Wallet: ______________    Mobile No: _______________

3. CAMPAIGN DOCUMENTATION
───────────────────────────────────────────────────────────────
   [  ] Campaign closure confirmation
   [  ] Final fundraising total declaration
   [  ] Donor count and platform fee breakdown
   [  ] Campaign update acknowledgment posted

   Total Donations: PHP ______   Donor Count: ___________
   Platform Fees:   PHP ______   Net Payout: PHP _________

4. MEDICAL DOCUMENTATION (if applicable)
───────────────────────────────────────────────────────────────
   [  ] Hospital billing statement (updated and current)
   [  ] Outstanding balance confirmation from hospital
   [  ] Doctor's endorsement for direct hospital payment
   [  ] Health insurance statement or denial letter

   Hospital: _______________    Patient Name: _____________
   Outstanding Balance: PHP ___  Insurance: _______________

5. COMPLIANCE & AUTHORIZATION
───────────────────────────────────────────────────────────────
   [  ] Payout request form signed by organizer
   [  ] Beneficiary acknowledgment of fund receipt
   [  ] Tax declaration (if applicable)
   [  ] Anti-money laundering declaration signed
   [  ] Fund utilization agreement signed and dated

   AML Declaration Date: ______   Tax Status: ____________
   Fund Agreement Date: ________   Witness: _______________

6. POST-PAYOUT REQUIREMENTS
───────────────────────────────────────────────────────────────
   [  ] Fund receipt confirmation within 48 hours
   [  ] Fund utilization update within 30 days
   [  ] Final campaign report submitted
   [  ] Donor transparency update posted

═══════════════════════════════════════════════════════════════
PAYOUT SUMMARY
───────────────────────────────────────────────────────────────
Gross Amount Raised:       PHP [0,000,000.00]
Platform Fees:             PHP [0,000,000.00]
Net Payout Amount:         PHP [0,000,000.00]
Payout Method:             [Bank Transfer / GCash / Hospital Direct]
Estimated Processing Time: [3-5 business days]

Payout Status:  [  ] PENDING REVIEW   [  ] APPROVED   [  ] DISBURSED

Total Checklist Items: 23    Completed: ___    Pending: ___    N/A: ___

Submitted By: ________________________   Date: _______________
Reviewed By: ________________________   Date: _______________
Approved By: ________________________   Date: _______________

Notes:
_______________________________________________________________
_______________________________________________________________

═══════════════════════════════════════════════════════════════`

const tips = [
  'Prepare all documents before requesting a payout to avoid delays in processing.',
  'Verify bank account details twice — mismatches between the account name and beneficiary name are the most common cause of payout delays.',
  'Communicate expected timelines to the beneficiary so they know when to expect the funds.',
  'Keep copies of all submitted documents for your records and future reference.',
  'Follow up within 48 hours of submitting your payout request to confirm receipt of your documentation.',
]

const faqs = [
  {
    question: 'What documents do I need to receive a campaign payout?',
    answer:
      'You need a valid government-issued ID, proof of address, verified bank account details matching your beneficiary name, campaign documentation (including final totals and fee breakdown), and signed compliance forms including anti-money laundering declaration and fund utilization agreement. Medical campaigns may also require updated hospital billing statements.',
  },
  {
    question: 'How long does the payout process take?',
    answer:
      'The payout process typically takes 3–5 business days after all required documents are submitted and verified. Delays may occur if documents are incomplete, bank details don\'t match, or additional verification is needed. Direct hospital payments may take longer depending on the institution\'s processing time.',
  },
  {
    question: 'Can the payout go directly to a hospital or institution?',
    answer:
      'Yes, payouts can be sent directly to a hospital or medical institution. This requires a doctor\'s endorsement, updated hospital billing statement, and outstanding balance confirmation. Direct hospital payments are encouraged for medical campaigns to ensure funds are used for their intended purpose.',
  },
  {
    question: 'What happens if my bank details don\'t match my ID?',
    answer:
      'If the name on your bank account doesn\'t match the name on your government ID, the payout will be delayed. You\'ll need to provide additional documentation such as a bank certificate confirming account ownership, or update your bank account details to match your legal name. Contact support for guidance on resolving discrepancies.',
  },
  {
    question: 'How do I report how the funds were used after payout?',
    answer:
      'After receiving the payout, submit a fund utilization update within 30 days through the platform. Include receipts, invoices, or hospital billing statements showing how the funds were spent. Post a campaign update with photos or documentation to keep donors informed. A final campaign report should be submitted at the end of the process.',
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
  { label: 'Beneficiary Checklist', page: '/templates/beneficiary-checklist' },
  { label: 'Campaign Budget Template', page: '/templates/campaign-budget' },
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

export default function PayoutChecklistPage() {
  return (
    <>
      <SchemaMarkup
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: 'Payout Documentation Checklist Template',
            description:
              'Free payout documentation checklist for smooth fund disbursement with beneficiary verification, bank details, and compliance requirements.',
            author: { '@type': 'Organization', name: 'Fundraise.ph' },
            datePublished: '2026-06-10',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Free Payout Documentation Checklist',
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
              <ClipboardCheck className="h-4 w-4" />
              Checklist
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-6">
              Payout Documentation Checklist
            </h1>
            <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
              Use our free payout documentation checklist to ensure smooth fund disbursement.
              Includes requirements for beneficiary verification, bank details, and compliance
              documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <AnswerBlock
            question="What do I need to receive my campaign payout?"
            answer="To receive a campaign payout, you need to complete identity verification with a valid government ID, provide verified bank account details matching your beneficiary name, submit campaign documentation including final totals, and sign compliance forms such as anti-money laundering declaration and fund utilization agreement. Medical campaigns also require updated hospital billing statements."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Payout Documentation Checklist</h2>
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
                  <h3 className="font-bold text-navy mb-1">Gather Identity Documents</h3>
                  <p className="text-[#4A5568]">Collect a photocopy of a valid government-issued ID, proof of current address, and a clear selfie holding your ID. Ensure the name matches across all documents.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Verify Bank Account Details</h3>
                  <p className="text-[#4A5568]">Confirm your bank name, branch, account number, and ensure the account name matches your beneficiary name. Submit a bank certificate or passbook copy.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Complete Compliance Forms</h3>
                  <p className="text-[#4A5568]">Sign the payout request form, anti-money laundering declaration, and fund utilization agreement. For medical campaigns, attach updated hospital billing statements.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Submit and Follow Up</h3>
                  <p className="text-[#4A5568]">Submit all documents together and follow up within 48 hours. After receiving funds, confirm receipt and submit a fund utilization update within 30 days.</p>
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
              This payout documentation checklist ensures compliance with Fundraise.ph's fund disbursement policies, anti-money laundering regulations, and beneficiary verification standards. Proper documentation protects both the campaign organizer and the beneficiary throughout the payout process.
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
