import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, ArrowRight, Heart, Users, BookOpen, Shield } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free Church Fundraising Letter Template | Fundraise.ph',
  description: 'Download our free church fundraising letter template for faith-based campaigns. Includes sections for mission, vision, specific needs, and community impact. Designed for Philippine church communities.',
  openGraph: {
    title: 'Free Church Fundraising Letter Template | Fundraise.ph',
    description: 'Download our free church fundraising letter template for faith-based campaigns. Includes sections for mission, vision, specific needs, and community impact. Designed for Philippine church communities.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const templateText = `CHURCH FUNDRAISING LETTER

[Date]

Dear Brothers and Sisters in Christ / Dear [Church Name] Family,

Grace and peace to you from our Lord Jesus Christ.

We, the [ministry/committee/leadership] of [Church Name] in [Barangay, City/Municipality, Province], write to you with grateful hearts and a vision for our community's future.

OUR MISSION & VISION

[Church Name] has served [community/area] for [number] years, ministering to [number] families through [brief description of church programs: worship services, youth ministry, outreach, feeding programs, etc.]. Our mission is to [church mission statement or purpose].

As it is written in [Bible verse reference]: "[Relevant scripture about giving, community, or stewardship.]"

COMMUNITY CONTEXT & NEED

In recent [months/years], our church community has experienced [describe the growth, challenge, or opportunity that has created the need]. [Describe the specific situation — building deterioration, growing congregation, community need, outreach expansion, etc.]

After much prayer and discernment, our [leadership council/pastoral team/board] has discerned that now is the time to [specific action: renovate, build, expand, launch].

SPECIFIC FUNDRAISING GOAL

We are seeking to raise ₱[total amount] to fund [specific project or initiative]. This represents [context — e.g., the first phase of a larger project, the full cost of a renovation, the total needed for a mission trip].

Our target date to reach this goal is [date], in time for [event/milestone/season].

FUND ALLOCATION PLAN

With full transparency, here is how the funds will be allocated:

• [Item 1, e.g., Building renovation materials]  — ₱[amount] ([percentage]%)
• [Item 2, e.g., Contractor labor]                 — ₱[amount] ([percentage]%)
• [Item 3, e.g., Equipment and fixtures]            — ₱[amount] ([percentage]%)
• [Item 4, e.g., Community outreach supplies]       — ₱[amount] ([percentage]%)
• [Item 5, e.g., Contingency fund]                  — ₱[amount] ([percentage]%)

Total Goal: ₱[total amount]

A detailed financial report will be presented to the congregation [monthly/quarterly] and at [annual church meeting].

BIBLICAL STEWARDSHIP

We are mindful of the responsibility that comes with managing God's resources. As stewards of His provision, we commit to:

• Complete transparency in all financial matters
• Regular reporting to the congregation
• Wise and accountable use of every contribution
• Honoring God in how we build and serve

"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7

DONATION METHODS

You can contribute through any of the following:

1. Online: Visit [Campaign URL on Fundraising.ph]
2. Bank Transfer:
   Bank: [Bank Name]
   Account Name: [Church Name]
   Account Number: [Account Number]
3. GCash/PayMaya: [Mobile Number or Name]
4. In-person: Sunday service offerings or at the church office during [office hours]
5. Check: Payable to [Church Name]

All donations will be acknowledged with an official receipt.

THANKSGIVING & BLESSING

We thank God for your faithfulness and generosity. Whatever He places on your heart to give, we receive with gratitude. We believe that as we join together in this endeavor, God will multiply our efforts and bless our community beyond what we can imagine.

Please join us in prayer for:
• Wisdom for our leadership team
• Provision for every need
• Unity in our congregation
• [Specific prayer requests related to the project]

May the Lord bless you and keep you. May He make His face shine upon you and give you peace.

In Christ's service,

[Pastor/Leader Full Name]
[Title/Position]
[Church Name]
[Contact Number]
[Email Address]
[Church Address]
[Date]`

const faqs = [
  {
    question: 'How do we write a fundraising letter for church building renovation?',
    answer: 'Start with the church\'s history and community impact. Describe the specific renovation needs with clear justification. Include an itemized cost breakdown from contractors or suppliers. Reference the church\'s stewardship commitment and provide regular financial updates to the congregation.',
  },
  {
    question: 'Can we use this template for a church mission trip fundraiser?',
    answer: 'Yes. Adapt the sections to focus on the mission trip\'s purpose, destination, team members, and impact goals. Replace building-related costs with travel, accommodation, and project supply costs. Include testimonies from previous mission trips if available.',
  },
  {
    question: 'Should we include financial reports with the letter?',
    answer: 'Including a summary of the church\'s current financial position or past project expenditures builds trust. You don\'t need to attach full financial statements, but a brief summary showing responsible stewardship of previous funds encourages generosity.',
  },
  {
    question: 'How do we address the letter to the congregation?',
    answer: 'Use warm, inclusive language such as "Dear Brothers and Sisters in Christ" or "Dear [Church Name] Family." If the letter targets specific groups like alumni, parents, or business sponsors, customize the greeting accordingly while maintaining the faith-based tone.',
  },
  {
    question: 'What biblical principles should we reference in our letter?',
    answer: 'Reference scriptures about cheerful giving (2 Corinthians 9:7), stewardship (1 Peter 4:10), community (Acts 2:44-45), and provision (Philippians 4:19). Choose verses that align with your specific project and avoid using scripture to pressure or guilt donors.',
  },
]

const internalLinks = [
  { label: 'Campaign Description Template', page: '/templates/campaign-description' },
  { label: 'Medical Fundraising Letter', page: '/templates/medical-letter' },
  { label: 'School Fundraising Letter', page: '/templates/school-letter' },
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
  { icon: Users, title: 'Emphasize Community Impact', description: 'Show how the project benefits not just the church but the wider community. Donors are more generous when they see the broader impact of their giving.' },
  { icon: Shield, title: 'Be Transparent About Costs', description: 'Provide itemized costs from actual quotations. Transparency in financial matters is a core principle of biblical stewardship and builds congregational trust.' },
  { icon: BookOpen, title: 'Reference Church Mission', description: 'Connect the fundraising ask to the church\'s mission and vision. Donors give more when they see how the project advances the church\'s God-given purpose.' },
  { icon: Heart, title: 'Include Multiple Giving Options', description: 'Offer online, bank transfer, mobile wallet, and in-person options. Make it easy for members of all ages and tech comfort levels to contribute.' },
  { icon: FileText, title: 'Pray as a Leadership Team', description: 'Before launching the campaign, gather the leadership team for dedicated prayer. Seek God\'s guidance and wisdom, and communicate this spiritual foundation to the congregation.' },
]

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Church Fundraising Letter Template',
  description: 'Free church fundraising letter template for faith-based campaigns with sections for mission, vision, specific needs, and community impact.',
  author: { '@type': 'Organization', name: 'Fundraise.ph' },
  publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
  datePublished: '2026-01-01',
  dateModified: '2026-06-10',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Free Church Fundraising Letter Template',
  description: 'Download our free church fundraising letter template for faith-based campaigns. Includes sections for mission, vision, specific needs, and community impact.',
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

export default function ChurchLetterPage() {
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
            Church Fundraising Letter Template
          </h1>
          <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
            Download our free church fundraising letter template for faith-based campaigns. Includes sections for mission, vision, specific needs, and community impact. Designed for Philippine church communities.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <AnswerBlock
            question="How do I write a church fundraising letter?"
            answer="A church fundraising letter should open with a warm greeting and reference the church's mission. Clearly state the need, provide an itemized fund allocation plan, include biblical stewardship principles, and offer multiple giving methods. Close with thanksgiving and prayer. This template provides the complete structure."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Church Fundraising Letter Template</h2>
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
                <h3 className="font-bold text-navy mb-1">Seek leadership alignment and prayer</h3>
                <p className="text-[#4A5568]">Present the fundraising initiative to the church board or pastoral team first. Pray together for guidance and unity before communicating to the congregation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">2</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Customize with your church's details</h3>
                <p className="text-[#4A5568]">Fill in all placeholders with your church's specific information. Include your actual mission statement, accurate cost estimates, and relevant Bible verses.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">3</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Include testimonies and stories</h3>
                <p className="text-[#4A5568]">Add a testimony from a member whose life was impacted by the church's ministry. Personal stories inspire generosity more than statistics alone.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">4</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Distribute through church channels</h3>
                <p className="text-[#4A5568]">Share during Sunday announcements, distribute printed copies after service, send via church email and messaging groups, and post on the church's social media.</p>
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
            Church fundraising campaigns on Fundraising.ph provide transparent fund tracking and accountability tools. We encourage all faith-based campaigns to publish regular financial updates and maintain open communication with donors. Stewardship and transparency go hand in hand in building trust within your congregation and community.
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
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Start Your Church Fundraiser</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Launch a transparent church fundraising campaign on Fundraising.ph. Built for faith communities with tools for accountability, donor management, and regular updates.</p>
          <Link href="https://fundraising.ph/start" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-8 py-4 rounded-full hover:bg-[#B8943F] transition-colors text-lg">
            Start Your Campaign
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
