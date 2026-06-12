import type { Metadata } from 'next'
import Link from 'next/link'
import { BarChart3, Clock, Flag, Megaphone, Camera, Lightbulb, CheckCircle2, ArrowRight, TrendingUp, Calendar, PartyPopper } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free Campaign Update Template | Fundraise.ph',
  description: 'Keep donors engaged with our free campaign update templates. Includes milestone, weekly, and final update templates for Filipino fundraising campaigns.',
  openGraph: {
    title: 'Free Campaign Update Template | Fundraise.ph',
    description: 'Keep donors engaged with our free campaign update templates. Includes milestone, weekly, and final update templates for Filipino fundraising campaigns.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const milestoneUpdateTemplate = `Subject: 🎉 We've reached [25%/50%/75%] of our goal — thank you!

Dear [Donor First Name / Supporters],

We have exciting news! Thanks to your incredible generosity, [Campaign Name] has reached [25%/50%/75%] of our fundraising goal!

CURRENT PROGRESS:
• Amount raised: PHP [Amount Raised] of PHP [Goal]
• Number of donors: [Number]
• Days remaining: [Number]
• Progress: ████████░░░░ [XX]% complete

WHAT YOUR DONATIONS HAVE DONE SO FAR:
• [Achievement 1 — e.g., "Covered the first 2 weeks of [Beneficiary Name]'s medication"]
• [Achievement 2 — e.g., "Provided relief packs to 30 families in Barangay [Name]"]
• [Achievement 3 — e.g., "Purchased [specific items/equipment] for [purpose]"]

BEHIND THE SCENES:
[Share a brief story or update about the beneficiary, the community, or the team. Include a photo or video if possible — updates with photos get 2x more engagement.]

Example: "[Beneficiary Name] started physical therapy last week and is making great progress. She wanted us to share this message: 'Salamat po sa lahat ng tumutulong. Hindi ko inakalang makakapag-start agad ang therapy ko.' (Thank you to everyone helping. I didn't expect to start therapy so soon.)"

WHAT'S NEXT:
• [Upcoming milestone or activity]
• [Next disbursement or purchase plan]
• [Any changes to the campaign plan]

HELP US REACH THE NEXT MILESTONE:
Every share brings us closer to our goal. Please forward this update to friends and family who might want to support our cause.

Share this campaign: [Campaign URL]

With gratitude and hope,

[Your Name]
[Campaign/Organization Name]

P.S. If you haven't already, follow us on [Facebook/Instagram] for real-time updates: [Social Media URL]`

const weeklyUpdateTemplate = `Subject: Weekly Update #[Number] — [Campaign Name] (Week of [Date])

Dear [Donor First Name / Supporters],

Here's your weekly progress update for [Campaign Name]. Thank you for continuing to support our mission!

THIS WEEK'S HIGHLIGHTS:
• New donations this week: PHP [Amount] from [Number] donors
• Total raised to date: PHP [Total] of PHP [Goal] ([XX]%)
• Days remaining: [Number]

STORY OF THE WEEK:
[Share a specific, personal story from the past week. This could be about a beneficiary, a volunteer, a donor, or a moment that moved you.]

Example: "This week, we delivered school supplies to 15 students at [School Name] in [City]. One student, [Name], told us it was the first time she had a complete set of school supplies. Her smile made all the effort worth it. [Photo attached]"

BY THE NUMBERS:
┌─────────────────────────────────┐
│ Week #[N] Progress Report       │
├─────────────────────────────────┤
│ New donors this week:     [XX]  │
│ Total donors:             [XX]  │
│ Amount raised this week:  PHP [X]│
│ Total raised:             PHP [X]│
│ Remaining goal:           PHP [X]│
│ Days left:                [XX]   │
└─────────────────────────────────┘

CHALLENGES AND ADJUSTMENTS:
[Be honest about any challenges or changes to the plan. Transparency builds trust.]
• [Challenge or adjustment 1]
• [Challenge or adjustment 2]
• [How you're addressing it]

UPCOMING THIS WEEK:
• [Planned activity 1]
• [Planned activity 2]
• [Any events or milestones to watch for]

SPECIAL THANKS:
We'd like to thank [specific donor names or groups, with permission] for their contributions this week. Your generosity keeps this campaign moving forward.

Share our campaign: [Campaign URL]

With appreciation,

[Your Name]
[Campaign/Organization Name]`

const finalUpdateTemplate = `Subject: 🏁 Campaign Complete — [Campaign Name] Final Report

Dear [Donor First Name / Supporters],

We did it! [Campaign Name] has officially ended, and we are overwhelmed with gratitude for your support.

FINAL RESULTS:
┌──────────────────────────────────────┐
│ CAMPAIGN FINAL REPORT                │
├──────────────────────────────────────┤
│ Total amount raised:    PHP [Total]   │
│ Fundraising goal:       PHP [Goal]    │
│ Goal achieved:          [Yes/XX%]     │
│ Total number of donors: [Number]      │
│ Campaign duration:      [Start]-[End] │
└──────────────────────────────────────┘

HOW YOUR DONATIONS WERE USED:
• [Allocation 1]: PHP [Amount] — [Description]
• [Allocation 2]: PHP [Amount] — [Description]
• [Allocation 3]: PHP [Amount] — [Description]
• [Allocation 4]: PHP [Amount] — [Description]
• Platform and processing fees: PHP [Amount]
• Total: PHP [Total]

IMPACT SUMMARY:
Because of your generosity, we were able to:
• [Impact point 1 — e.g., "Provide full tuition coverage for 25 students"]
• [Impact point 2 — e.g., "Deliver 200 relief packages to 5 barangays"]
• [Impact point 3 — e.g., "Fund [Beneficiary Name]'s complete medical treatment"]

BENEFICIARY MESSAGE:
"[Include a heartfelt message from the beneficiary or community representative. This is the most powerful part of your final update.]"

Example: "From the bottom of our hearts, maraming salamat po. Because of your help, [specific outcome]. We will never forget your kindness. — [Beneficiary Name]"

PHOTOS AND DOCUMENTATION:
[Include 3-5 photos showing the impact — before and after photos, delivery photos, beneficiary photos with consent, receipts, or documentation of fund usage.]

WHAT'S NEXT:
• [Any follow-up activities or ongoing needs]
• [If relevant, information about the next campaign or how to stay involved]
• [How donors can continue to support the cause]

FULL FINANCIAL TRANSPARENCY:
We are committed to full transparency. A detailed financial report is available at: [Link to report or campaign page]

For any questions about how funds were used, please contact us at [Email/Phone].

CLOSING MESSAGE:
This campaign would not have been possible without each and every one of you. Whether you donated PHP 50 or PHP 50,000, shared our campaign, or kept us in your prayers — you made a difference.

From our hearts to yours, maraming salamat po. 🙏

[Your Name]
[Campaign/Organization Name]

P.S. If you'd like to stay updated on our future campaigns and initiatives, follow us on [Facebook/Instagram]: [URL]`

const faqs = [
  {
    question: 'How often should I post campaign updates?',
    answer: 'Post updates at least once a week for active campaigns. At minimum, share updates at every major milestone (25%, 50%, 75% of goal) and a final report when the campaign ends. For longer campaigns (30+ days), twice-weekly updates help maintain momentum and donor engagement.',
  },
  {
    question: 'What should I include in a milestone update?',
    answer: 'A milestone update should celebrate the achievement, share the current numbers (amount raised, percentage of goal, donors count), show what the funds have accomplished so far, include a personal story or beneficiary quote, and outline what comes next. Always include a photo or video.',
  },
  {
    question: 'How do I write a final campaign update?',
    answer: 'A final update should include the complete results (total raised vs. goal), a detailed breakdown of how funds were allocated, a summary of the impact achieved, a heartfelt message from the beneficiary, photos or documentation, and a transparent financial report. Thank every donor and share what\'s next.',
  },
  {
    question: 'Should I share bad news in campaign updates?',
    answer: 'Yes. Honesty about challenges builds trust with donors. If the campaign is behind schedule, costs have changed, or unexpected obstacles arose, share this transparently along with your plan to address it. Donors appreciate candor more than silence, and many will respond with additional support.',
  },
  {
    question: 'How do campaign updates affect donor retention?',
    answer: 'Campaigns that post regular updates retain up to 40% more donors for future campaigns. Updates make donors feel like partners in the mission rather than just sources of funds. Updates with photos and personal stories see the highest engagement and sharing, which also drives new donations.',
  },
]

const internalLinks = [
  { label: 'Campaign Description Template', page: '/templates/campaign-description' },
  { label: 'Medical Fundraising Letter', page: '/templates/medical-letter' },
  { label: 'School Fundraising Letter', page: '/templates/school-letter' },
  { label: 'Church Fundraising Letter', page: '/templates/church-letter' },
  { label: 'Sponsorship Request Letter', page: '/templates/sponsorship-request' },
  { label: 'Donor Thank You Message', page: '/templates/donor-thank-you' },
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
    name: 'Campaign Update Template',
    description: 'Free campaign update templates including milestone, weekly, and final update formats for Filipino fundraising campaigns.',
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
    headline: 'Free Campaign Update Template',
    description: 'Keep donors engaged with our free campaign update templates. Includes milestone, weekly, and final update templates.',
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
      '@id': 'https://fundraise.ph/templates/campaign-update',
    },
  },
]

export default function CampaignUpdatePage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center">
              <Megaphone className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Free Templates</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-6">
            Campaign Update Template
          </h1>
          <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
            Keep donors engaged with free campaign update templates. Includes milestone updates, weekly progress reports, and a final campaign report — designed for Filipino fundraising campaigns.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <AnswerBlock
            question="What should I include in a campaign update?"
            answer="Every campaign update should include current fundraising numbers (amount raised, percentage of goal), a specific story or highlight from the week, a photo or video, transparent information about how funds are being used, and a clear next step for donors — whether that's sharing the campaign, attending an event, or simply staying engaged."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-2">
            <Flag className="h-6 w-6 text-[#C8A951]" />
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Template 1</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Milestone Update Template</h2>
          <p className="text-[#4A5568] mb-6 leading-relaxed">Use this template when your campaign reaches 25%, 50%, or 75% of its fundraising goal. Milestone updates are the most shared type of campaign content.</p>
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Flag className="h-5 w-5 text-[#C8A951]" />
                <span className="text-sm font-medium text-slate-300">milestone-update.txt</span>
              </div>
              <CopyButton text={milestoneUpdateTemplate} label="Copy Update" />
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto max-h-[600px] overflow-y-auto">
              {milestoneUpdateTemplate}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-6 w-6 text-[#C8A951]" />
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Template 2</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Weekly Update Template</h2>
          <p className="text-[#4A5568] mb-6 leading-relaxed">Use this template for regular weekly progress reports. Consistency in weekly updates builds donor trust and keeps your campaign top-of-mind.</p>
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#C8A951]" />
                <span className="text-sm font-medium text-slate-300">weekly-update.txt</span>
              </div>
              <CopyButton text={weeklyUpdateTemplate} label="Copy Update" />
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto max-h-[600px] overflow-y-auto">
              {weeklyUpdateTemplate}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-2">
            <PartyPopper className="h-6 w-6 text-[#C8A951]" />
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Template 3</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Final Update Template</h2>
          <p className="text-[#4A5568] mb-6 leading-relaxed">Use this template when your campaign ends. A thorough final report with financial transparency builds lasting trust and sets the stage for future campaigns.</p>
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <PartyPopper className="h-5 w-5 text-[#C8A951]" />
                <span className="text-sm font-medium text-slate-300">final-update.txt</span>
              </div>
              <CopyButton text={finalUpdateTemplate} label="Copy Update" />
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto max-h-[600px] overflow-y-auto">
              {finalUpdateTemplate}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-8">Tips for Effective Campaign Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Be Consistent</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Set a regular update schedule and stick to it. Whether it's weekly or bi-weekly, consistency shows professionalism and keeps donors engaged. Inconsistent updates signal disorganization.</p>
            </div>
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Camera className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Share Photos and Videos</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Updates with visual content get 2x more engagement. Share photos of deliveries, beneficiary reactions, behind-the-scenes moments, and progress documentation. Always get consent before sharing photos.</p>
            </div>
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Be Honest About Challenges</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Transparency builds trust. If you encounter obstacles, share them honestly along with your plan to address them. Donors respect candor and many will respond with additional support.</p>
            </div>
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Celebrate Small Wins</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Don't wait for major milestones to celebrate. Every donation, every new donor, and every small achievement is worth acknowledging. Positive momentum inspires more giving and sharing.</p>
            </div>
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100 md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Thank Specific Donors</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Publicly thank donors by name (with their permission) in your updates. This recognition makes donors feel valued and encourages others to give. For larger donations, consider a dedicated shout-out section in your weekly updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <ProofBlock>
            Regular campaign updates are one of the strongest signals of a trustworthy fundraiser. Campaigns that post weekly updates see higher donor retention, more social sharing, and faster progress toward their goals. Always include specific numbers, personal stories, and visual evidence. For Fundraise.ph campaigns, consistent updates also strengthen your verification status and build the transparency record that donors and regulators expect.
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
          <CheckCircle2 className="h-12 w-12 text-[#C8A951] mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4">Keep Your Donors Engaged</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Launch your verified campaign on Fundraise.ph and use these update templates to build lasting relationships with your supporters.</p>
          <Link href="https://fundraising.ph/start" className="inline-flex items-center gap-2 bg-[#C8A951] text-[#0A1F44] font-bold px-8 py-4 rounded-full hover:bg-[#B8943F] transition-colors text-lg">
            Start Your Campaign
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
