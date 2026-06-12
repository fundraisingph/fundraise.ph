import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Lightbulb, ArrowRight, Heart, Clock, DollarSign, Users, Shield } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free Fundraising Campaign Description Template | Fundraise.ph',
  description: 'Use our free fundraising campaign description template to write compelling stories that convert visitors into donors. Includes placeholders, tips, and examples for Filipino fundraisers.',
  openGraph: {
    title: 'Free Fundraising Campaign Description Template | Fundraise.ph',
    description: 'Use our free fundraising campaign description template to write compelling stories that convert visitors into donors. Includes placeholders, tips, and examples for Filipino fundraisers.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const templateText = `FUNDRAISING CAMPAIGN DESCRIPTION

[CAMPAIGN TITLE]
Help [Beneficiary Name] — [One-line summary of the need]

---

THE STORY

Meet [Beneficiary Name], a [age]-year-old [occupation/student/resident] from [city, province]. [He/She/They] [describe the person's situation — who they are, what they do, and why they matter to their community].

On [date] / In [month/year], everything changed. [Describe the event, diagnosis, or circumstance that created the need]. Since then, [Beneficiary Name] and [his/her/their] family have been [describe the current struggle].

---

THE NEED

We are raising ₱[amount] to help cover:
• [Item/expense 1] — ₱[amount]
• [Item/expense 2] — ₱[amount]
• [Item/expense 3] — ₱[amount]
• [Item/expense 4] — ₱[amount]

Total Goal: ₱[total amount]

---

HOW THE FUNDS WILL BE USED

[Percentage]% — [Purpose 1, e.g., Hospital bills]
[Percentage]% — [Purpose 2, e.g., Medication]
[Percentage]% — [Purpose 3, e.g., Transportation]
[Percentage]% — [Purpose 4, e.g., Other expenses]

Every peso goes directly to [stated purpose]. We will provide regular updates and receipts for full transparency.

---

URGENCY & TIMELINE

[Beneficiary Name] needs [treatment/supplies/support] by [date or "as soon as possible"]. [Explain what happens if the goal is not met in time — but frame it as motivation, not guilt.]

We aim to reach our goal by [target date], which gives us [number] days.

---

HOW YOU CAN HELP

1. Donate — Any amount helps. ₱[suggested small amount] can [specific impact].
2. Share — Forward this campaign to your friends, family, and social networks.
3. Pray — Your thoughts and prayers mean the world to [Beneficiary Name] and [his/her/their] family.

Donate now: [Campaign URL]

---

TRUST & TRANSPARENCY

✓ Campaign verified by Fundraising.ph
✓ Documents available upon request
✓ Regular updates will be posted [weekly/bi-weekly]
✓ Full fund allocation report after campaign ends

Thank you for your generosity. Together, we can [inspiring closing statement].

[Organizer Name]
[Contact Information]
[Date]`

const faqs = [
  {
    question: 'What makes a good fundraising campaign description?',
    answer: 'A good campaign description tells a specific, honest story about who needs help and why. It includes a clear financial breakdown, explains the urgency, and builds trust through transparency. Use real names (with consent), specific amounts, and concrete details about how funds will be used.',
  },
  {
    question: 'How long should my campaign description be?',
    answer: 'Aim for 300 to 600 words. Long enough to tell the full story and include all relevant details, but short enough that donors stay engaged. The most important information should appear at the top, since many readers will not scroll past the first few paragraphs.',
  },
  {
    question: 'Should I include financial breakdowns in my description?',
    answer: 'Yes. Campaigns with itemized financial breakdowns receive significantly more donations. Donors want to know exactly where their money goes. Break down your goal into specific expenses with amounts, and update the breakdown if circumstances change.',
  },
  {
    question: 'How do I make my campaign story more compelling?',
    answer: 'Start with the person, not the problem. Help donors connect emotionally with the beneficiary before explaining the financial need. Use specific details instead of general statements. Include photos and videos. Show the impact of donations at different levels, like what ₱500 or ₱1,000 can accomplish.',
  },
  {
    question: 'Can I use this template for any type of fundraiser?',
    answer: 'Yes. This template works for medical, education, disaster relief, community, personal, and organizational fundraisers. Simply adapt the sections to fit your specific campaign type. The core structure of story, need, breakdown, urgency, and call to action applies to all campaigns.',
  },
]

const internalLinks = [
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
  { label: 'Payout Checklist', page: '/templates/payout-checklist' },
]

const tips = [
  { icon: FileText, title: 'Be Specific', description: 'Use exact amounts, dates, and names. Specificity builds trust and helps donors understand exactly what their contribution will accomplish.' },
  { icon: Heart, title: 'Use Photos and Videos', description: 'Campaigns with photos raise significantly more than those without. Include images of the beneficiary, the situation, and any relevant documentation.' },
  { icon: Clock, title: 'Show Urgency', description: 'Explain why donations are needed now. A deadline or consequence of inaction motivates donors to give immediately rather than later.' },
  { icon: DollarSign, title: 'Be Transparent', description: 'Publish a full breakdown of how funds will be used. Update donors on spending and post receipts when possible.' },
  { icon: Users, title: 'Update Regularly', description: 'Post updates at least once a week. Donors who receive updates are more likely to share the campaign and donate again.' },
]

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Fundraising Campaign Description Template',
  description: 'Free fundraising campaign description template to write compelling stories that convert visitors into donors.',
  author: { '@type': 'Organization', name: 'Fundraise.ph' },
  publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
  datePublished: '2026-01-01',
  dateModified: '2026-06-10',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Free Fundraising Campaign Description Template',
  description: 'Use our free fundraising campaign description template to write compelling stories that convert visitors into donors.',
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

export default function CampaignDescriptionPage() {
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
            Fundraising Campaign Description Template
          </h1>
          <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
            Use our free fundraising campaign description template to write compelling stories that convert visitors into donors. Includes placeholders, tips, and examples for Filipino fundraisers.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <AnswerBlock
            question="How do I write a fundraising campaign description?"
            answer="A strong campaign description tells a specific story about who needs help, why they need it, and exactly how donations will be used. Include the beneficiary's story, a clear financial breakdown, a timeline or urgency factor, and a direct call to action. This template provides the structure — just fill in your details."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Campaign Description Template</h2>
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
                <h3 className="font-bold text-navy mb-1">Replace all bracketed placeholders</h3>
                <p className="text-[#4A5568]">Fill in every [placeholder] with your actual information. Remove any sections that do not apply to your campaign.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">2</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Add photos and supporting documents</h3>
                <p className="text-[#4A5568]">Upload at least 3 clear photos. Include receipts, quotations, or medical certificates to build donor trust.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">3</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Submit for verification</h3>
                <p className="text-[#4A5568]">Verified campaigns receive more donations. Submit your documents through Fundraising.ph for review.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">4</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Share and update regularly</h3>
                <p className="text-[#4A5568]">Post your campaign on social media, messaging apps, and email. Update donors weekly to maintain engagement.</p>
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
          <ProofBlock>
            Campaigns with detailed descriptions raise up to 3x more than those with minimal information. Fundraising.ph verifies all campaigns and provides transparency tools so donors can give with confidence. Always include specific amounts, timelines, and supporting documents to maximize donor trust.
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
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Ready to Launch Your Campaign?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Start your verified fundraising campaign on Fundraising.ph today. Our platform provides the tools, verification, and transparency features you need to build donor trust.</p>
          <Link href="https://fundraising.ph/start" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-8 py-4 rounded-full hover:bg-[#B8943F] transition-colors text-lg">
            Start Your Campaign
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
