import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, CheckCircle2, Lightbulb, ArrowRight } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free BIR-Compliant Donation Acknowledgment Receipt Template | Fundraise.ph',
  description:
    'Download our free BIR-compliant donation acknowledgment receipt template. Includes required fields for Philippine tax compliance, donor information, and official receipt formatting.',
  openGraph: {
    title: 'Free BIR-Compliant Donation Acknowledgment Receipt Template | Fundraise.ph',
    description:
      'Download our free BIR-compliant donation acknowledgment receipt template. Includes required fields for Philippine tax compliance, donor information, and official receipt formatting.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const templateText = `DONATION ACKNOWLEDGMENT RECEIPT

═══════════════════════════════════════════════════════════════
                        [ORGANIZATION NAME]
              [Organization Address Line 1]
              [City, Province, Postal Code]
              TIN: [XXX-XXX-XXX-XXX]
═══════════════════════════════════════════════════════════════

Receipt No: DAR-[YYYY]-[NNNNN]
Date Issued: [DD/MM/YYYY]

───────────────────────────────────────────────────────────────
                        DONOR INFORMATION
───────────────────────────────────────────────────────────────
Donor Name:        [Full Legal Name]
Donor Address:     [Street, City, Province, Postal Code]
Donor TIN:         [XXX-XXX-XXX-XXX] (if applicable)
Donor Contact:     [Email / Phone Number]

───────────────────────────────────────────────────────────────
                      DONATION DETAILS
───────────────────────────────────────────────────────────────

Mode of Payment:   [  ] Cash  [  ] Check  [  ] Bank Transfer
                    [  ] GCash  [  ] Credit Card  [  ] Other: ___

CASH DONATION:
    Amount:           PHP [0,000.00]
    Amount in Words:  [_________________________________]

NON-CASH DONATION (if applicable):
    Item Description:     [______________________________]
    Fair Market Value:    PHP [0,000.00]
    Condition:            [New / Used / Good / Fair]
    Appraised By:         [Name and credentials]
    Date of Appraisal:    [DD/MM/YYYY]

───────────────────────────────────────────────────────────────
                    PURPOSE / FUND ALLOCATION
───────────────────────────────────────────────────────────────
Purpose:           [Specific campaign or fund name]
Fund Allocation:   [Describe how the donation will be used]

───────────────────────────────────────────────────────────────
                       ACKNOWLEDGMENT
───────────────────────────────────────────────────────────────

This serves as an official acknowledgment of your donation to
[Organization Name]. The donation described above has been
received and will be used in accordance with the stated purpose.

For non-cash donations, the fair market value stated above is
based on an independent appraisal and does not constitute a
guaranteed valuation for tax purposes.

───────────────────────────────────────────────────────────────
                    AUTHORIZED SIGNATURE
───────────────────────────────────────────────────────────────

Received By:       ______________________________
                   [Printed Name]
                   [Title / Position]

Signature:         ______________________________
                   Date: [DD/MM/YYYY]

───────────────────────────────────────────────────────────────
                    BIR REGISTRATION DETAILS
───────────────────────────────────────────────────────────────
BIR Registration No:    [_________________________]
Permit to Print No:     [_________________________]
Date of Print Permit:   [DD/MM/YYYY]
Printed by:             [Printer Name / BP No.]

═══════════════════════════════════════════════════════════════
   This receipt was generated via Fundraise.ph
   Retain this copy for your records.
═══════════════════════════════════════════════════════════════`

const tips = [
  'Always include both the donor\'s and organization\'s TIN on every receipt.',
  'Keep a duplicate copy of every acknowledgment receipt issued.',
  'Issue donation acknowledgment receipts within 30 days of receiving the donation.',
  'Follow BIR format requirements for official receipts, including permit to print details.',
  'Register your receipt format with the BIR before issuing any official receipts.',
]

const faqs = [
  {
    question: 'Is a donation acknowledgment receipt required by the BIR?',
    answer:
      'Yes. Under Philippine tax law, organizations receiving donations must issue an acknowledgment receipt. For registered non-profits, this is required to validate the donor\'s tax deduction claim and maintain compliance with BIR regulations.',
  },
  {
    question: 'What information must be included in a BIR-compliant donation receipt?',
    answer:
      'A BIR-compliant donation receipt must include: organization name and address, TIN of both donor and organization, receipt number, date issued, donation amount or item description (for non-cash), purpose of donation, authorized signature, and BIR registration details including permit to print number.',
  },
  {
    question: 'Can donors use the acknowledgment receipt for tax deductions?',
    answer:
      'Yes, donors can use BIR-compliant acknowledgment receipts to claim tax deductions under Section 34(H) of the National Internal Revenue Code, provided the receiving organization is a BIR-accredited donee institution. Individual deduction limits apply.',
  },
  {
    question: 'How do I issue receipts for non-cash donations?',
    answer:
      'For non-cash donations, include a detailed item description, fair market value based on an independent appraisal, the condition of the item, and the appraiser\'s name and credentials. The fair market value should be determined at the time of donation.',
  },
  {
    question: 'What is the difference between an official receipt and a donation acknowledgment?',
    answer:
      'An official receipt (OR) is a BIR-registered document used for sales of goods and services. A donation acknowledgment receipt is specifically for documenting charitable contributions. While both serve as proof of transaction, donation acknowledgments include additional fields like fund purpose and donor TIN for tax compliance purposes.',
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
  { label: 'Beneficiary Checklist', page: '/templates/beneficiary-checklist' },
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

export default function DonationAcknowledgmentPage() {
  return (
    <>
      <SchemaMarkup
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: 'Donation Acknowledgment Receipt Template',
            description:
              'Free BIR-compliant donation acknowledgment receipt template with all required fields for Philippine tax compliance.',
            author: { '@type': 'Organization', name: 'Fundraise.ph' },
            datePublished: '2026-06-10',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Free BIR-Compliant Donation Acknowledgment Receipt Template',
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
              <FileText className="h-4 w-4" />
              Template
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-6">
              Donation Acknowledgment Template
            </h1>
            <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
              Download our free BIR-compliant donation acknowledgment receipt template. Includes
              required fields for Philippine tax compliance, donor information, and official receipt
              formatting.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <AnswerBlock
            question="What is a BIR-compliant donation acknowledgment receipt?"
            answer="A donation acknowledgment receipt is an official document issued by an organization to confirm that a donation has been received. In the Philippines, it must comply with BIR format requirements and include the donor's TIN, the organization's TIN and registration details, the donation amount or item description, and an authorized signature to be valid for tax deduction purposes."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Donation Acknowledgment Receipt Template</h2>
                <CopyButton text={templateText} label="Copy Template" />
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
              How to Use This Template
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Replace Placeholders</h3>
                  <p className="text-[#4A5568]">Replace all bracketed placeholders with your organization and donor details. Ensure TIN numbers are accurate.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Select Payment Mode</h3>
                  <p className="text-[#4A5568]">Mark the appropriate payment mode. For non-cash donations, complete the non-cash section with item description and fair market value.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Add BIR Registration Details</h3>
                  <p className="text-[#4A5568]">Include your BIR registration number and permit to print number. These are required for BIR compliance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Sign and Issue</h3>
                  <p className="text-[#4A5568]">Have an authorized officer sign the receipt. Issue the original to the donor and retain a duplicate for your records.</p>
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
              This donation acknowledgment receipt template follows BIR formatting requirements for Philippine tax compliance. Ensure your organization is registered as a BIR-accredited donee institution before issuing receipts for tax deduction purposes. Consult a tax professional for specific compliance questions related to your organization type.
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
