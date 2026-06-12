import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, ArrowRight, Users, GraduationCap, BookOpen, Target, Shield } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free School Fundraising Letter Template | Fundraise.ph',
  description: 'Use our free school fundraising letter template for education-related campaigns. Perfect for school projects, trips, equipment, and programs in the Philippines.',
  openGraph: {
    title: 'Free School Fundraising Letter Template | Fundraise.ph',
    description: 'Use our free school fundraising letter template for education-related campaigns. Perfect for school projects, trips, equipment, and programs in the Philippines.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const templateText = `SCHOOL FUNDRAISING LETTER

[Date]

Dear [Parents / Alumni / Community Members / Sir/Madam],

Greetings of peace and learning!

I am [Your Full Name], [position/title] at [School Name] in [Barangay, City/Municipality, Province]. I am writing to invite you to support our upcoming fundraising initiative for [specific purpose, e.g., a science laboratory upgrade, educational field trip, school equipment, sports program].

ABOUT OUR SCHOOL

[School Name] serves [number] students from [community/area description]. Our mission is to provide quality education that empowers every student to reach their full potential. [Brief description of the school's achievements, programs, or community impact.]

PURPOSE OF THE FUNDRAISER

We are raising funds to [specific goal]. This initiative will directly benefit [number] students in [grade levels or programs] by [describe the specific impact].

Our fundraising goal is ₱[total amount], which we aim to raise by [target date].

SPECIFIC NEEDS & GOALS

The funds will be allocated toward the following:

• [Item 1, e.g., Science laboratory equipment]  — ₱[amount]
• [Item 2, e.g., Reference books and materials]  — ₱[amount]
• [Item 3, e.g., Transportation for field trip]    — ₱[amount]
• [Item 4, e.g., Workshop supplies]                 — ₱[amount]
• [Item 5, e.g., Contingency fund]                  — ₱[amount]

Total Goal: ₱[total amount]

HOW FUNDS WILL BE USED

[Percentage]% — [Purpose 1]
[Percentage]% — [Purpose 2]
[Percentage]% — [Purpose 3]
[Percentage]% — [Purpose 4]

All funds will be managed transparently. A detailed financial report will be shared with all supporters after the campaign.

STUDENT IMPACT

This initiative will make a meaningful difference in our students' education:

"[Quote from a student about what this would mean to them, or a general statement about how this improves learning outcomes.]"

By supporting this fundraiser, you are investing in the future of [number] young learners who will benefit directly from your generosity.

DONATION METHODS

You can contribute through any of the following:

1. Online: Visit [Campaign URL on Fundraising.ph]
2. Bank Transfer:
   Bank: [Bank Name]
   Account Name: [School/Organizer Name]
   Account Number: [Account Number]
3. GCash/PayMaya: [Mobile Number or Name]
4. In-person: Drop off at [School Name, Address, Office hours]

We also welcome in-kind donations of [specific items needed].

RECOGNITION & ACKNOWLEDGMENT

We believe in honoring those who support our students:
• All donors will receive a thank-you letter from our students
• Donors of ₱[amount] and above will be acknowledged in [newsletter/program/website]
• Major sponsors will be recognized at [event/program]
• [Other recognition plans]

CONTACT INFORMATION

For questions or additional information, please contact:
[Your Full Name]
[Position/Title]
[School Name]
[Phone Number]
[Email Address]
[School Address]

Thank you for considering our request. Every contribution, no matter the size, brings us closer to our goal of providing the best possible education for our students.

Sincerely,

[Your Full Name]
[Position/Title]
[School Name]
[Date]`

const faqs = [
  {
    question: 'How do I write a school fundraising letter to parents?',
    answer: 'Address parents warmly and directly. Clearly state the purpose, how much is needed, and exactly how funds will benefit their children. Include specific amounts and itemized costs. Keep the tone positive and collaborative — parents are partners in their children\'s education.',
  },
  {
    question: 'Can we use this template for a school club fundraiser?',
    answer: 'Yes. Simply adapt the sections to fit your club\'s specific needs. Replace the school-wide context with club-specific details such as the club name, number of members, and the specific project or activity you are raising funds for.',
  },
  {
    question: 'Should we include DepEd permits in our fundraising letter?',
    answer: 'If your fundraiser is an official school activity, include the DepEd permit or endorsement number for added credibility. For PTA-initiated or student-led fundraisers, mention the school administration\'s approval. This is especially important for larger campaigns targeting external sponsors.',
  },
  {
    question: 'How do we acknowledge donations from parents and alumni?',
    answer: 'Send a personalized thank-you message within 48 hours. For larger donations, include a formal acknowledgment letter. Mention donors in school newsletters, programs, or social media (with their permission). Provide a summary report of how funds were used after the campaign.',
  },
  {
    question: 'What\'s the best way to distribute school fundraising letters?',
    answer: 'Distribute through multiple channels: send printed copies home with students, email digital versions to the parent mailing list, post on the school\'s social media pages, and share through class group chats. For alumni, use the school\'s alumni database and social media groups.',
  },
]

const internalLinks = [
  { label: 'Campaign Description Template', page: '/templates/campaign-description' },
  { label: 'Medical Fundraising Letter', page: '/templates/medical-letter' },
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
  { icon: GraduationCap, title: 'Involve Students in the Letter', description: 'Include student quotes, artwork, or handwritten notes. Letters that feature student voices resonate more strongly with parents and community members.' },
  { icon: Target, title: 'Show Specific Impact', description: 'Connect every peso to a concrete outcome. Instead of "funds for books," say "₱500 provides one textbook for a student in need."' },
  { icon: BookOpen, title: 'Use School Letterhead', description: 'Print on official school letterhead or include the school logo in digital versions. This establishes credibility and professionalism immediately.' },
  { icon: Users, title: 'Mention DepEd Compliance if Applicable', description: 'If your campaign is an official school activity, reference any DepEd permits or endorsements. This is especially important for external sponsors and corporate donors.' },
  { icon: FileText, title: 'Set Clear Deadlines', description: 'Include a specific target date for the campaign. Deadlines create urgency and help donors prioritize giving sooner rather than later.' },
]

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'School Fundraising Letter Template',
  description: 'Free school fundraising letter template for education-related campaigns including school projects, trips, equipment, and programs.',
  author: { '@type': 'Organization', name: 'Fundraise.ph' },
  publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
  datePublished: '2026-01-01',
  dateModified: '2026-06-10',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Free School Fundraising Letter Template',
  description: 'Use our free school fundraising letter template for education-related campaigns. Perfect for school projects, trips, equipment, and programs in the Philippines.',
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

export default function SchoolLetterPage() {
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
            School Fundraising Letter Template
          </h1>
          <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
            Use our free school fundraising letter template for education-related campaigns. Perfect for school projects, trips, equipment, and programs in the Philippines.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <AnswerBlock
            question="How do I write a school fundraising letter?"
            answer="A school fundraising letter should introduce the school and its mission, clearly state the fundraising purpose with specific financial goals, provide an itemized breakdown of how funds will be used, and show the direct impact on students. Include multiple donation methods and a plan for acknowledging contributors."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">School Fundraising Letter Template</h2>
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
                <h3 className="font-bold text-navy mb-1">Get school administration approval</h3>
                <p className="text-[#4A5568]">Before distributing the letter, ensure you have approval from the school principal or administration. Obtain any required DepEd permits if applicable.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">2</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Customize with specific details</h3>
                <p className="text-[#4A5568]">Replace all placeholders with your school's actual information. Include specific item names, quantities, and prices from actual quotations.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">3</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Add student voices and photos</h3>
                <p className="text-[#4A5568]">Include quotes from students and photos of the school, classroom, or project. Personal touches increase engagement and donations.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold shrink-0">4</span>
              <div>
                <h3 className="font-bold text-navy mb-1">Distribute through multiple channels</h3>
                <p className="text-[#4A5568]">Send printed copies home with students, email digital versions, post on social media, and share through messaging groups for maximum reach.</p>
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
            School fundraising campaigns on Fundraising.ph benefit from our verification and transparency framework. Include your school's official documentation, DepEd permits (if applicable), and itemized cost quotations. Transparent campaigns with detailed financial breakdowns consistently receive more support from parents, alumni, and community members.
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
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Launch Your School Fundraiser</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Start a transparent school fundraising campaign on Fundraising.ph. Track donations, provide updates to parents and alumni, and manage funds with full accountability.</p>
          <Link href="https://fundraising.ph/start" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-8 py-4 rounded-full hover:bg-[#B8943F] transition-colors text-lg">
            Start Your Campaign
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
