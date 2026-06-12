import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, CheckCircle2, Lightbulb, ArrowRight } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free Campaign Budget Template | Fundraise.ph',
  description:
    'Download our free campaign budget template for transparent fund allocation. Includes categories for medical, education, and community fundraising campaigns with itemized breakdowns.',
  openGraph: {
    title: 'Free Campaign Budget Template | Fundraise.ph',
    description:
      'Download our free campaign budget template for transparent fund allocation. Includes categories for medical, education, and community fundraising campaigns with itemized breakdowns.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const templateText = `CAMPAIGN BUDGET TEMPLATE
═══════════════════════════════════════════════════════════════

CAMPAIGN INFORMATION
───────────────────────────────────────────────────────────────
Campaign Name:       [_________________________________]
Organizer:           [_________________________________]
Goal Amount:         PHP [0,000,000.00]
Start Date:          [DD/MM/YYYY]
End Date:            [DD/MM/YYYY]
Campaign Category:   [Medical / Education / Community / Other]

═══════════════════════════════════════════════════════════════
BUDGET CATEGORIES
═══════════════════════════════════════════════════════════════

Category             | Item Description       | Est. Cost  | Actual Cost | Variance  | Notes
─────────────────────┼────────────────────────┼────────────┼─────────────┼───────────┼──────────────
Medical/Treatment    | [Describe]              | PHP ______ | PHP _______ | PHP _____ | ____________
Medication           | [Describe]              | PHP ______ | PHP _______ | PHP _____ | ____________
Transportation       | [Describe]              | PHP ______ | PHP _______ | PHP _____ | ____________
Food & Accommodation | [Describe]              | PHP ______ | PHP _______ | PHP _____ | ____________
Administrative Fees  | [Describe]              | PHP ______ | PHP _______ | PHP _____ | ____________
Platform Fees        | [Describe]              | PHP ______ | PHP _______ | PHP _____ | ____________
Contingency Fund     | [10-15% of total]       | PHP ______ | PHP _______ | PHP _____ | ____________
Other                | [Describe]              | PHP ______ | PHP _______ | PHP _____ | ____________
─────────────────────┼────────────────────────┼────────────┼─────────────┼───────────┼──────────────
TOTALS               |                         | PHP ______ | PHP _______ | PHP _____ |

═══════════════════════════════════════════════════════════════
FUND SOURCES
═══════════════════════════════════════════════════════════════

Source                   | Expected Amount  | Actual Received  | Status
─────────────────────────┼──────────────────┼──────────────────┼──────────
Platform Donations       | PHP ____________ | PHP ____________ | [  ] [  ]
Direct Bank Transfers    | PHP ____________ | PHP ____________ | [  ] [  ]
Offline Collections      | PHP ____________ | PHP ____________ | [  ] [  ]
Pledged Amounts          | PHP ____________ | PHP ____________ | [  ] [  ]
Other Sources            | PHP ____________ | PHP ____________ | [  ] [  ]
─────────────────────────┼──────────────────┼──────────────────┼──────────
TOTAL                    | PHP ____________ | PHP ____________ |

═══════════════════════════════════════════════════════════════
DISBURSEMENT SCHEDULE
═══════════════════════════════════════════════════════════════

Date       | Payee          | Amount      | Purpose     | Ref No.    | Status
───────────┼────────────────┼─────────────┼─────────────┼────────────┼──────────
[DD/MM/YY] | [Name]         | PHP _______ | [__________] | [________] | [  ] [  ]
[DD/MM/YY] | [Name]         | PHP _______ | [__________] | [________] | [  ] [  ]
[DD/MM/YY] | [Name]         | PHP _______ | [__________] | [________] | [  ] [  ]
[DD/MM/YY] | [Name]         | PHP _______ | [__________] | [________] | [  ] [  ]
[DD/MM/YY] | [Name]         | PHP _______ | [__________] | [________] | [  ] [  ]
───────────┼────────────────┼─────────────┼─────────────┼────────────┼──────────

═══════════════════════════════════════════════════════════════
RUNNING BALANCE TRACKER
═══════════════════════════════════════════════════════════════

Date       | Transaction         | Debit       | Credit      | Balance
───────────┼─────────────────────┼─────────────┼─────────────┼──────────────
[DD/MM/YY] | Opening Balance     |             |             | PHP _________
[DD/MM/YY] | [Description]       | PHP _______ |             | PHP _________
[DD/MM/YY] | [Description]       |             | PHP _______ | PHP _________
[DD/MM/YY] | [Description]       | PHP _______ |             | PHP _________
[DD/MM/YY] | [Description]       |             | PHP _______ | PHP _________
───────────┼─────────────────────┼─────────────┼─────────────┼──────────────

═══════════════════════════════════════════════════════════════
BUDGET SUMMARY
═══════════════════════════════════════════════════════════════

Total Raised:           PHP [0,000,000.00]
Total Budgeted:         PHP [0,000,000.00]
Total Spent:            PHP [0,000,000.00]
Remaining Balance:      PHP [0,000,000.00]
Contingency Used:       PHP [0,000,000.00]
Contingency Remaining:  PHP [0,000,000.00]

Prepared By: ________________________   Date: _______________
Approved By: ________________________   Date: _______________

═══════════════════════════════════════════════════════════════`

const tips = [
  'Include a contingency fund of 10–15% of the total budget to cover unexpected expenses.',
  'Update your budget at least weekly to keep track of actual vs. estimated costs.',
  'Keep all receipts and proof of expenditure for every disbursement.',
  'Be transparent with donors by sharing budget updates through campaign updates.',
  'Separate campaign funds from personal funds using a dedicated bank account.',
]

const faqs = [
  {
    question: 'Why should I create a budget for my fundraising campaign?',
    answer:
      'A campaign budget provides transparency to donors, helps you track expenses against your goal, ensures funds are used for their intended purpose, and builds trust. It also helps you plan disbursements and identify potential shortfalls before they become problems.',
  },
  {
    question: 'How do I estimate costs for a medical fundraising campaign?',
    answer:
      'Request an official cost estimate or quotation from the hospital or medical provider. Include treatment costs, medications, laboratory tests, doctor\'s fees, hospital accommodation, transportation, and post-treatment care. Add a 10–15% contingency for unexpected medical expenses.',
  },
  {
    question: 'What percentage should I allocate to contingency?',
    answer:
      'A contingency fund of 10–15% of the total estimated budget is recommended. For medical campaigns with uncertain treatment outcomes, consider allocating up to 20%. The contingency covers unexpected costs, price changes, or additional treatments.',
  },
  {
    question: 'How do I show budget transparency to donors?',
    answer:
      'Share regular campaign updates with budget breakdowns, upload receipts or proof of payments, provide a running balance summary, and use the disbursement schedule to show planned vs. actual spending. Fundraise.ph provides tools to share these updates with your donors.',
  },
  {
    question: 'What happens to excess funds after the campaign?',
    answer:
      'Excess funds should be handled transparently. Options include returning donations (if the platform allows), redirecting funds to a similar cause with donor approval, or donating to a related charity. Always communicate the plan for excess funds to your donors before the campaign ends.',
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

export default function CampaignBudgetPage() {
  return (
    <>
      <SchemaMarkup
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: 'Campaign Budget Template',
            description:
              'Free campaign budget template for transparent fund allocation with categories for medical, education, and community fundraising campaigns.',
            author: { '@type': 'Organization', name: 'Fundraise.ph' },
            datePublished: '2026-06-10',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Free Campaign Budget Template',
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
              <Calculator className="h-4 w-4" />
              Template
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-6">
              Campaign Budget Template
            </h1>
            <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
              Download our free campaign budget template for transparent fund allocation. Includes
              categories for medical, education, and community fundraising campaigns with itemized
              breakdowns.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <AnswerBlock
            question="How do I create a budget for my fundraising campaign?"
            answer="A campaign budget organizes your fundraising goal into specific expense categories, tracks incoming donations against planned spending, and provides donors with transparency. List all expected costs (medical, transport, admin, platform fees), add a 10–15% contingency, and update the budget weekly as actual costs come in."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Campaign Budget Template</h2>
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
                  <h3 className="font-bold text-navy mb-1">Fill In Campaign Information</h3>
                  <p className="text-[#4A5568]">Enter your campaign name, organizer details, goal amount, and campaign dates at the top of the template.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Itemize Budget Categories</h3>
                  <p className="text-[#4A5568]">Break down your estimated costs by category. Get official quotations from hospitals or suppliers for accurate estimates. Include platform and administrative fees.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Track Fund Sources and Disbursements</h3>
                  <p className="text-[#4A5568]">Record all incoming donations by source and track every disbursement with the date, payee, amount, and reference number.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Update and Share the Summary</h3>
                  <p className="text-[#4A5568]">Keep the running balance and summary section updated. Share budget summaries with donors through campaign updates to maintain transparency.</p>
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
              This campaign budget template supports financial transparency and accountability standards. Proper budget documentation helps ensure compliance with fund disbursement regulations and provides donors with the transparency they expect from verified campaigns.
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
