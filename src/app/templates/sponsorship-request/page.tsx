import type { Metadata } from 'next'
import Link from 'next/link'
import { Handshake, Building2, Award, Target, FileText, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free Sponsorship Request Letter Template | Fundraise.ph',
  description: 'Use our free sponsorship request letter template to approach businesses for fundraising sponsorships. Includes sections for benefits, exposure, and partnership tiers. Designed for Philippine fundraisers.',
  openGraph: {
    title: 'Free Sponsorship Request Letter Template | Fundraise.ph',
    description: 'Use our free sponsorship request letter template to approach businesses for fundraising sponsorships. Includes sections for benefits, exposure, and partnership tiers.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const faqs = [
  {
    question: 'How do I approach a company for fundraising sponsorship?',
    answer: 'Research the company first to understand their values and CSR priorities. Address your letter to a specific person (ideally the marketing or CSR manager). Clearly present your cause, the sponsorship opportunity, and the mutual benefits. Follow up within one week if you don\'t receive a response.',
  },
  {
    question: 'What should I include in sponsorship tiers?',
    answer: 'Each tier should include the sponsorship amount, brand exposure (logo placement, event mentions, social media tags), booth or speaking opportunities, and any exclusive perks. Typical tiers are Gold (highest visibility), Silver (moderate visibility), and Bronze (basic visibility), but you can customize tier names to match your event or campaign theme.',
  },
  {
    question: 'How soon should I follow up after sending a sponsorship letter?',
    answer: 'Follow up within 5-7 business days after sending your initial letter. A polite email or phone call shows professionalism and genuine interest. If they decline, thank them and ask if you can reach out for future campaigns.',
  },
  {
    question: 'Can I send sponsorship requests via email?',
    answer: 'Yes. Email is acceptable and often preferred for initial outreach. Keep the email concise, attach a formal sponsorship letter or proposal as a PDF, and include a clear call to action. For high-value sponsorships, a personalized delivery (in person or via courier) can make a stronger impression.',
  },
  {
    question: 'What are the BIR implications of receiving corporate sponsorships?',
    answer: 'Corporate sponsorships may be considered taxable income depending on your organization\'s registration status. Registered nonprofits with BIR tax-exempt status should issue official receipts. For individuals, sponsorships may be subject to income tax. Always consult a Philippine tax professional and keep detailed records of all sponsorship transactions for BIR compliance.',
  },
]

const internalLinks = [
  { label: 'Campaign Description Template', page: '/templates/campaign-description' },
  { label: 'Medical Fundraising Letter', page: '/templates/medical-letter' },
  { label: 'School Fundraising Letter', page: '/templates/school-letter' },
  { label: 'Church Fundraising Letter', page: '/templates/church-letter' },
  { label: 'Donor Thank You Message', page: '/templates/donor-thank-you' },
  { label: 'Campaign Update Template', page: '/templates/campaign-update' },
  { label: 'Product Order Form', page: '/templates/product-order-form' },
  { label: 'Donation Acknowledgment', page: '/templates/donation-acknowledgment' },
  { label: 'Beneficiary Checklist', page: '/templates/beneficiary-checklist' },
  { label: 'Campaign Budget Template', page: '/templates/campaign-budget' },
  { label: 'Payout Checklist', page: '/templates/payout-checklist' },
]

const sponsorshipLetterTemplate = `[Date]

[Company Name]
[Company Address]
[City, Province, Zip Code]

Attn: [Contact Person Name]
[Title — e.g., Marketing Director / CSR Manager]

Dear [Mr./Ms./Mx. Last Name],

RE: Sponsorship Partnership Opportunity — [Your Campaign/Event Name]

INTRODUCTION

My name is [Your Name] and I represent [Your Organization/Campaign Name], a [brief description of your organization — e.g., "registered nonprofit supporting underprivileged students in Metro Manila"]. Since [year founded or campaign start date], we have [brief achievement — e.g., "provided scholarships to over 200 students across 5 provinces"].

ABOUT THE CAMPAIGN/EVENT

We are organizing [Campaign/Event Name], which will take place on [Date] at [Venue/Location]. This [event/campaign] aims to [state the purpose and goal — e.g., "raise PHP 500,000 to provide school supplies and tuition assistance for 100 public school students in Barangay [Name]"].

Expected reach: [Number of attendees, participants, or online audience]
Duration: [Campaign run dates or event schedule]
Target audience: [Describe the demographic — e.g., "families, young professionals, and community leaders in [City]"]

SPONSORSHIP TIERS

We are offering three partnership levels to align with your brand's objectives and budget:

GOLD SPONSOR — PHP [Amount]
• Exclusive logo placement on all event materials (banner, tarpaulins, IDs, certificates)
• Logo on the campaign website header and all social media posts
• Dedicated social media feature post (Facebook, Instagram) with company tag
• Booth space at the event (if applicable)
• Verbal acknowledgment during the program
• 10 VIP passes/tickets (if applicable)
• First right of refusal for next year's sponsorship

SILVER SPONSOR — PHP [Amount]
• Logo on event banner and printed materials
• Logo on the campaign website and select social media posts
• Social media mention with company tag
• 5 event passes/tickets (if applicable)
• Verbal acknowledgment during the program

BRONZE SPONSOR — PHP [Amount]
• Logo on event banner
• Logo on the campaign website
• Social media mention
• 2 event passes/tickets (if applicable)

EXPOSURE AND MARKETING BENEFITS

As a sponsor, your brand will receive exposure through:
• [Number] social media followers across [Facebook/Instagram/TikTok]
• Event attendance of [estimated number] people
• Post-event content reaching [estimated impressions]
• Inclusion in press releases and media coverage
• Year-round visibility on our website and online platforms
• Direct association with a meaningful community cause

PREVIOUS SUCCESS

In our previous campaign, [Campaign Name], we [describe results — e.g., "raised PHP 350,000, engaged over 1,000 attendees, and reached 50,000 people online. Our sponsors reported a 30% increase in brand recall among the target demographic."]

NEXT STEPS

We would love to discuss how [Company Name] can become a partner for this meaningful initiative. I will follow up with you within the week to answer any questions.

If you would like to proceed, please let me know and I will send a formal sponsorship agreement for your review. We kindly request sponsorship commitments by [Deadline Date] to finalize our production timeline.

CONTACT INFORMATION

[Your Full Name]
[Your Title/Role]
[Your Organization]
Phone: [Your Phone Number]
Email: [Your Email Address]
Website: [Your Website URL]
Facebook: [Your Facebook Page URL]

Thank you for considering this partnership. Together, we can make a lasting impact in our community.

Mabuhay,

[Your Signature]

[Your Printed Name]
[Your Title]
[Organization Name]`

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Sponsorship Request Letter Template',
    description: 'Free sponsorship request letter template for Philippine fundraising campaigns with tiered partnership levels.',
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
    headline: 'Free Sponsorship Request Letter Template',
    description: 'Use our free sponsorship request letter template to approach businesses for fundraising sponsorships.',
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
      '@id': 'https://fundraise.ph/templates/sponsorship-request',
    },
  },
]

export default function SponsorshipRequestPage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center">
              <Handshake className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Free Template</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-6">
            Sponsorship Request Letter Template
          </h1>
          <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
            Use our free sponsorship request letter template to approach businesses for fundraising sponsorships. Includes sections for sponsorship tiers, brand exposure benefits, and partnership details — designed for Philippine fundraisers.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <AnswerBlock
            question="How do I write a sponsorship request letter?"
            answer="A sponsorship request letter should introduce your organization, describe the campaign or event, present clear sponsorship tiers with tangible benefits, highlight marketing exposure for the sponsor, and end with a specific call to action and deadline. Keep it professional, concise, and focused on the mutual value of the partnership."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Sponsorship Request Letter Template</h2>
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#C8A951]" />
                <span className="text-sm font-medium text-slate-300">sponsorship-request-letter.txt</span>
              </div>
              <CopyButton text={sponsorshipLetterTemplate} label="Copy Letter" />
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto max-h-[600px] overflow-y-auto">
              {sponsorshipLetterTemplate}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-8">How to Use This Template</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0A1F44]/10 flex items-center justify-center shrink-0">
                <Building2 className="h-5 w-5 text-[#0A1F44]" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">Research the Company</h3>
                <p className="text-[#4A5568] leading-relaxed">Before sending, research the company's values, previous sponsorships, and CSR programs. Align your pitch with their brand identity and social responsibility goals. Reference their work in your letter to show genuine interest.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0A1F44]/10 flex items-center justify-center shrink-0">
                <Award className="h-5 w-5 text-[#0A1F44]" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">Customize the Tiers</h3>
                <p className="text-[#4A5568] leading-relaxed">Adjust the sponsorship amounts and benefits to match the scale of your event and the target sponsor's capacity. Consider offering custom tiers for major sponsors who want a tailored partnership package.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0A1F44]/10 flex items-center justify-center shrink-0">
                <Target className="h-5 w-5 text-[#0A1F44]" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">Address It Personally</h3>
                <p className="text-[#4A5568] leading-relaxed">Always address the letter to a specific person — ideally the Marketing Director, CSR Manager, or Partnership Coordinator. Call the company to get the correct name and title if needed. Generic letters get ignored.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0A1F44]/10 flex items-center justify-center shrink-0">
                <Handshake className="h-5 w-5 text-[#0A1F44]" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">Send and Follow Up</h3>
                <p className="text-[#4A5568] leading-relaxed">Send the letter via email with a PDF attachment, or deliver it in person for high-value sponsorships. Follow up within 5-7 business days with a phone call or email. Persistence shows professionalism.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-8">Tips for Securing Sponsorships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Research First</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Study the company's website, social media, and recent news before reaching out. Understand their brand voice and CSR priorities to craft a compelling, personalized pitch.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Offer Tangible Benefits</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Be specific about what the sponsor gets — audience size, logo placement details, social media impressions, event mentions, and any exclusive access. Quantify every benefit.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Be Professional</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Use formal business letter format, proofread carefully, and maintain a professional tone. Include your contact information and respond promptly to any inquiries from potential sponsors.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Follow Up Within a Week</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Send a polite follow-up within 5-7 days if you haven't received a response. A brief phone call or email reiterating the key benefits shows persistence without being pushy.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Customize Every Letter</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Never send a generic sponsorship letter. Each letter should reference the specific company, explain why the partnership makes sense for their brand, and reflect their values and marketing objectives. A personalized approach dramatically increases your success rate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <ProofBlock variant="compliance">
            Corporate sponsorships in the Philippines may have BIR tax implications depending on your organization's registration status. Registered nonprofits should issue official BIR-registered receipts for all sponsorship amounts. For tax-exempt organizations, ensure your tax exemption certificate is current. Individual fundraisers should consult a tax professional as sponsorship income may be subject to income tax. Always maintain complete documentation including sponsorship agreements, official receipts, and proof of fund usage for BIR compliance and audit readiness.
          </ProofBlock>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <SEOBlock items={faqs} />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <AuthorBox lastUpdated="2026-06-10" />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <InternalLinks title="More Templates" links={internalLinks} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <CheckCircle2 className="h-12 w-12 text-[#C8A951] mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4">Ready to Launch Your Campaign?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Start your verified fundraising campaign on Fundraise.ph and connect with sponsors and donors across the Philippines.</p>
          <Link href="https://fundraising.ph/start" className="inline-flex items-center gap-2 bg-[#C8A951] text-[#0A1F44] font-bold px-8 py-4 rounded-full hover:bg-[#B8943F] transition-colors text-lg">
            Start Your Campaign
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
