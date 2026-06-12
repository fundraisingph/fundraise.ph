import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Gift, MessageSquare, Users, Star, Lightbulb, CheckCircle2, ArrowRight, Mail, Repeat, Sparkles, Share2 } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free Donor Thank You Message Template | Fundraise.ph',
  description: 'Download our free donor thank you message templates for different giving levels. Includes templates for small, medium, and major donors. Build donor loyalty and encourage repeat giving.',
  openGraph: {
    title: 'Free Donor Thank You Message Template | Fundraise.ph',
    description: 'Download our free donor thank you message templates for different giving levels. Includes templates for small, medium, and major donors.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const firstTimeDonorTemplate = `Subject: Welcome to the [Campaign Name] family! 🎉

Dear [Donor First Name],

Thank you so much for your generous donation of PHP [Amount] to [Campaign Name]. We are truly honored to welcome you as a first-time supporter of our cause.

Your contribution will [specific impact — e.g., "provide school supplies for 5 students in Barangay San Isidro" / "cover one week of medication for [Beneficiary Name]"].

Here's what your donation makes possible:
• [Impact point 1]
• [Impact point 2]
• [Impact point 3]

We promise to keep you updated on our progress. You can expect regular updates from us showing exactly how your donation is making a difference.

If you have any questions about our campaign, please don't hesitate to reply to this message or reach out to us at [Email/Phone].

With deep gratitude,

[Your Name]
[Campaign/Organization Name]

P.S. Follow our journey on Facebook: [Facebook Page URL]`

const recurringDonorTemplate = `Subject: Your continued support is changing lives — thank you, [Donor First Name]!

Dear [Donor First Name],

Once again, your generosity blows us away. Thank you for your donation of PHP [Amount] to [Campaign Name]. Your continued support means the world to us and to the people we serve.

Because of loyal supporters like you, here's what we've accomplished together since your last donation:
• [Milestone/update 1 — e.g., "We've reached 75% of our fundraising goal!"]
• [Milestone/update 2 — e.g., "10 families have received their relief packages"]
• [Milestone/update 3 — e.g., "[Beneficiary Name] completed their first round of treatment"]

Your total contributions to date: PHP [Total Amount]
Campaign progress: [X]% of goal reached

[Beneficiary Name or a representative] wanted to share this message with you:
"[A short, heartfelt quote from the beneficiary about the impact of donations]"

Thank you for believing in our mission. We couldn't do this without you.

With heartfelt thanks,

[Your Name]
[Campaign/Organization Name]`

const majorDonorTemplate = `Subject: A personal thank you from [Campaign Organizer/Beneficiary Name]

Dear [Donor First Name],

I am writing to personally express my deepest gratitude for your remarkable contribution of PHP [Amount] to [Campaign Name]. Your generosity places you among our most valued supporters, and I want you to know just how meaningful your gift is.

Your donation will specifically fund:
• [Detailed allocation 1 — e.g., "The full cost of [specific item/service]"]
• [Detailed allocation 2]
• [Detailed allocation 3]

As a major supporter, we want to keep you closely connected to our progress:

EXCLUSIVE UPDATE:
• [Behind-the-scenes detail not shared publicly]
• [Upcoming milestone or event]
• [Specific story of impact — e.g., "Because of donors like you, [Beneficiary Name] was able to [specific achievement]]"]

I would welcome the opportunity to speak with you directly about the impact of your gift. Would you be available for a brief call or meeting? Please let me know at your convenience.

We are also happy to provide:
• A detailed fund allocation report
• Photo and video documentation of the campaign's progress
• A formal acknowledgment letter for your records

Thank you for your extraordinary generosity. You are making a tangible, lasting difference.

With deepest appreciation,

[Your Name]
[Your Title]
[Campaign/Organization Name]
[Phone Number]
[Email Address]`

const inKindDonorTemplate = `Subject: Thank you for your generous in-kind contribution to [Campaign Name]

Dear [Donor First Name],

Thank you so much for your generous in-kind donation of [Item(s) Description] to [Campaign Name]. Your contribution of goods and services is just as valuable as monetary donations and plays a critical role in the success of our campaign.

Your contribution details:
• Item(s): [Detailed list of items donated]
• Estimated value: PHP [Estimated Value]
• Date received: [Date]

These items will be used to [specific purpose — e.g., "provide essential school supplies for 50 students in [Location]" / "support the daily operations of our community kitchen serving [Number] families"].

We want you to know that your generosity has already made an impact:
• [How the items have been or will be distributed]
• [Number of beneficiaries who will benefit]
• [Timeline for distribution/use]

For your records, we have attached a donation acknowledgment receipt. If you need any additional documentation for tax or accounting purposes, please don't hesitate to let us know.

Thank you for choosing to support our campaign with your tangible resources. Your kindness makes a real difference.

With sincere gratitude,

[Your Name]
[Campaign/Organization Name]`

const socialMediaTemplate = `FACEBOOK/INSTAGRAM POST:

🌟 HUGE THANK YOU to everyone who donated to [Campaign Name]! 🌟

Because of YOUR generosity, we've [key achievement — e.g., "raised PHP [Amount] and helped [Number] families in [Location]"].

Every peso counts. Every share matters. Every prayer helps.

To our donors: YOU are the real heroes. Maraming salamat po! 🙏💛

📍 Support our campaign: [Campaign URL]
📱 Share this post to spread the word!

#FundraisePH #[CampaignHashtag] #Bayanihan #ThankYouDonors

---

TWITTER/X POST:

Thank you to all who donated to [Campaign Name]! 🙏 Because of you, we've [achievement]. Every contribution matters. Support us here: [Campaign URL] #FundraisePH #[CampaignHashtag]

---

TEXT/SMS MESSAGE:

Hi [Name]! Thank you for donating PHP [Amount] to [Campaign Name]. Your support helps [brief impact]. Follow our progress at [Campaign URL]. God bless! - [Organization]`

const faqs = [
  {
    question: 'How soon should I send a thank-you message to donors?',
    answer: 'Send your thank-you message within 48 hours of receiving the donation. Prompt acknowledgment shows donors that their contribution is valued and builds trust. For online donations, an automatic thank-you email should be sent immediately, followed by a personalized message within 48 hours.',
  },
  {
    question: 'Should thank-you messages be different for different donation amounts?',
    answer: 'Yes. Tailor your message based on the giving level. First-time donors should receive a warm welcome that introduces your mission. Recurring donors should be thanked for their continued loyalty with impact updates. Major donors deserve personalized, detailed communication with exclusive updates and direct contact from leadership.',
  },
  {
    question: 'Can I use these templates for email and SMS?',
    answer: 'Yes. Adapt the templates for your communication channel. For email, use the full template with subject line. For SMS or messaging apps like Messenger and Viber, shorten the message to 2-3 sentences focusing on gratitude, impact, and a link to the campaign. For social media, use the dedicated social media template.',
  },
  {
    question: 'How do I personalize thank-you messages at scale?',
    answer: 'Use merge fields for the donor\'s first name, donation amount, and date. Group donors into categories (first-time, recurring, major, in-kind) and use the appropriate template for each group. Add at least one personal detail — such as referencing how long they\'ve been supporting you or the specific campaign they donated to — to make each message feel genuine.',
  },
  {
    question: 'Should I include a receipt with my thank-you message?',
    answer: 'Yes for monetary donations. Attach or link to an official donation receipt, especially for donations above PHP 1,000. This helps donors with their own records and is required for BIR compliance for registered organizations. For in-kind donations, include an acknowledgment letter describing the items received and their estimated value.',
  },
]

const internalLinks = [
  { label: 'Campaign Description Template', page: '/templates/campaign-description' },
  { label: 'Medical Fundraising Letter', page: '/templates/medical-letter' },
  { label: 'School Fundraising Letter', page: '/templates/school-letter' },
  { label: 'Church Fundraising Letter', page: '/templates/church-letter' },
  { label: 'Sponsorship Request Letter', page: '/templates/sponsorship-request' },
  { label: 'Campaign Update Template', page: '/templates/campaign-update' },
  { label: 'Product Order Form', page: '/templates/product-order-form' },
  { label: 'Donation Acknowledgment', page: '/templates/donation-acknowledgment' },
  { label: 'Beneficiary Checklist', page: '/templates/beneficiary-checklist' },
  { label: 'Campaign Budget Template', page: '/templates/campaign-budget' },
  { label: 'Payout Checklist', page: '/templates/payout-checklist' },
]

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Donor Thank You Message Template',
    description: 'Free donor thank you message templates for different giving levels — first-time, recurring, major, and in-kind donors.',
    author: {
      '@type': 'Organization',
      name: 'Fundraise.ph',
      url: 'https://fundraise.ph',
    },
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
    license: 'https://fundraise.ph/terms',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Free Donor Thank You Message Template',
    description: 'Download our free donor thank you message templates for different giving levels. Build donor loyalty and encourage repeat giving.',
    author: {
      '@type': 'Organization',
      name: 'Fundraise.ph',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fundraise.ph',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fundraise.ph/logo.png',
      },
    },
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://fundraise.ph/templates/donor-thank-you',
    },
  },
]

export default function DonorThankYouPage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Free Templates</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-6">
            Donor Thank You Message Template
          </h1>
          <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
            Free thank-you message templates for every type of donor. From first-time givers to major supporters, show genuine appreciation that builds loyalty and encourages repeat giving.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <AnswerBlock
            question="What makes a great donor thank-you message?"
            answer="A great donor thank-you message is timely (sent within 48 hours), specific about the impact of their donation, personalized with their name and giving details, and focused on gratitude — not another ask. The best messages make the donor feel like a partner in your mission, not just a source of funds."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="h-6 w-6 text-[#C8A951]" />
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Template 1</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">First-Time Donor Thank You</h2>
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#C8A951]" />
                <span className="text-sm font-medium text-slate-300">first-time-donor-thank-you.txt</span>
              </div>
              <CopyButton text={firstTimeDonorTemplate} label="Copy Message" />
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto max-h-[600px] overflow-y-auto">
              {firstTimeDonorTemplate}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-2">
            <Repeat className="h-6 w-6 text-[#C8A951]" />
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Template 2</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Recurring Donor Thank You</h2>
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Repeat className="h-5 w-5 text-[#C8A951]" />
                <span className="text-sm font-medium text-slate-300">recurring-donor-thank-you.txt</span>
              </div>
              <CopyButton text={recurringDonorTemplate} label="Copy Message" />
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto max-h-[600px] overflow-y-auto">
              {recurringDonorTemplate}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="h-6 w-6 text-[#C8A951]" />
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Template 3</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Major Donor Thank You</h2>
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#C8A951]" />
                <span className="text-sm font-medium text-slate-300">major-donor-thank-you.txt</span>
              </div>
              <CopyButton text={majorDonorTemplate} label="Copy Message" />
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto max-h-[600px] overflow-y-auto">
              {majorDonorTemplate}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-2">
            <Gift className="h-6 w-6 text-[#C8A951]" />
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Template 4</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">In-Kind Donor Thank You</h2>
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-[#C8A951]" />
                <span className="text-sm font-medium text-slate-300">in-kind-donor-thank-you.txt</span>
              </div>
              <CopyButton text={inKindDonorTemplate} label="Copy Message" />
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto max-h-[600px] overflow-y-auto">
              {inKindDonorTemplate}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-2">
            <Share2 className="h-6 w-6 text-[#C8A951]" />
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Template 5</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Social Media Thank You</h2>
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-[#C8A951]" />
                <span className="text-sm font-medium text-slate-300">social-media-thank-you.txt</span>
              </div>
              <CopyButton text={socialMediaTemplate} label="Copy Message" />
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto max-h-[600px] overflow-y-auto">
              {socialMediaTemplate}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-8">Tips for Writing Donor Thank You Messages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Send Within 48 Hours</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Prompt acknowledgment shows donors their gift matters. Set up automatic thank-you emails for immediate confirmation, then follow up with a personalized message within 48 hours.</p>
            </div>
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Be Specific About Impact</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Donors want to know what their money did. Instead of "thank you for your donation," say "your PHP 1,000 will provide school supplies for 2 students for an entire semester."</p>
            </div>
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Personalize Each Message</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Use the donor's name, reference their specific donation amount and date, and tailor the message to their giving history. A personal touch transforms a form letter into a meaningful connection.</p>
            </div>
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Include Next Steps</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Share a campaign update, invite them to follow your social media, or let them know when the next milestone is expected. Keep them engaged without immediately asking for another donation.</p>
            </div>
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100 md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Don&apos;t Immediately Ask for More</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">The thank-you message should focus entirely on gratitude and impact. Avoid including donation links or requests for additional gifts in the same message. Wait at least a few weeks before making another ask, and always lead with the results of their previous donation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <ProofBlock>
            A sincere thank-you message is one of the most powerful tools for donor retention. Research shows that donors who receive a personalized thank-you within 48 hours are 40% more likely to give again. For Philippine fundraising campaigns, combining professional gratitude with warm, personal language builds the kind of trust that creates lifelong supporters. Always include an official receipt for donations above PHP 1,000 to maintain transparency and BIR compliance.
          </ProofBlock>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <SEOBlock items={faqs} />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <AuthorBox lastUpdated="2026-06-10" />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <InternalLinks title="More Templates" links={internalLinks} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <Heart className="h-12 w-12 text-[#C8A951] mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4">Start Building Donor Relationships Today</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Launch your verified fundraising campaign on Fundraise.ph and start building meaningful connections with donors who believe in your cause.</p>
          <Link href="https://fundraising.ph/start" className="inline-flex items-center gap-2 bg-[#C8A951] text-[#0A1F44] font-bold px-8 py-4 rounded-full hover:bg-[#B8943F] transition-colors text-lg">
            Start Your Campaign
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
