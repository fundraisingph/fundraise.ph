import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, XCircle, Minus, Scale, Eye, ShieldCheck, Heart, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'

export const metadata: Metadata = {
  title: 'Fundraising.ph vs Facebook Fundraisers | Better Transparency & Verification',
  description: 'Compare Fundraising.ph and Facebook Fundraisers. See how Fundraising.ph provides stronger verification, transparency tools, fund tracking, donor updates, and product fundraising that Facebook lacks.',
  keywords: [
    'Facebook Fundraisers Philippines',
    'Facebook Fundraisers alternative',
    'Fundraising.ph vs Facebook',
    'fundraising platform Philippines',
    'transparent fundraising',
    'verified fundraising Philippines',
    'Facebook fundraising limitations',
  ],
  openGraph: {
    title: 'Fundraising.ph vs Facebook Fundraisers | Better Transparency & Verification',
    description: 'Compare Fundraising.ph and Facebook Fundraisers for transparency, verification, fund tracking, and donor updates.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'Is Facebook Fundraisers available in the Philippines?',
    answer: 'Facebook Fundraisers has limited availability and may not support Philippine-based organizers or Philippine peso campaigns in all cases. Even when available, it lacks campaign verification, transparency reporting, fund tracking, and compliance guidance that dedicated fundraising platforms provide.',
  },
  {
    question: 'Why use Fundraising.ph instead of Facebook Fundraisers?',
    answer: 'Fundraising.ph provides purpose-built fundraising infrastructure: tiered campaign verification, transparent fund tracking, post-campaign reporting, donor updates, product fundraising, and Philippine compliance guidance. Facebook Fundraisers is a social media feature without these specialized tools.',
  },
  {
    question: 'Does Facebook Fundraisers verify campaigns?',
    answer: 'Facebook Fundraisers relies on basic profile information and does not have a structured campaign verification process. There is no identity verification of organizers, no documentation review, and no verification status displayed on fundraisers. Fundraising.ph uses a public four-tier verification framework.',
  },
  {
    question: 'Can donors track how their money is used on Facebook?',
    answer: 'Facebook Fundraisers does not provide fund tracking or post-campaign reporting. Once a donation is made, there is no built-in mechanism for donors to see how funds were used. Fundraising.ph supports transparent fund flows, post-campaign reports, and proof of delivery.',
  },
  {
    question: 'Can I run a product fundraiser on Facebook?',
    answer: 'Facebook Fundraisers only supports donation-based fundraising. It does not offer product-based fundraising where campaigners sell products to raise funds. Fundraising.ph supports both donation-based and product-based fundraising through its marketplace model.',
  },
  {
    question: 'How does payout transparency compare?',
    answer: 'Facebook Fundraisers processes payouts through its own payment system with limited visibility into disbursement timelines and methods for beneficiaries. Fundraising.ph provides payout verification as part of its verification framework, confirming that funds reach the stated beneficiary through verified channels.',
  },
]

const comparisonFeatures = [
  {
    category: 'Platform Type',
    items: [
      { feature: 'Platform Type', fundraisingPh: 'Dedicated fundraising platform', facebook: 'Social media fundraising feature' },
      { feature: 'Primary Currency', fundraisingPh: 'Philippine Peso (PHP)', facebook: 'Varies by region' },
      { feature: 'Payment Methods', fundraisingPh: 'GCash, Maya, bank transfer, card', facebook: 'Credit/debit card only' },
    ],
  },
  {
    category: 'Trust & Verification',
    items: [
      { feature: 'Campaign Verification', fundraisingPh: true, facebook: false },
      { feature: 'Tiered Verification Levels', fundraisingPh: true, facebook: false },
      { feature: 'Organizer Identity Verification', fundraisingPh: true, facebook: false },
      { feature: 'Beneficiary Validation', fundraisingPh: true, facebook: false },
      { feature: 'Payout Verification', fundraisingPh: true, facebook: false },
    ],
  },
  {
    category: 'Transparency',
    items: [
      { feature: 'Fund Tracking', fundraisingPh: true, facebook: false },
      { feature: 'Post-Campaign Reporting', fundraisingPh: true, facebook: false },
      { feature: 'Use-of-Funds Disclosure', fundraisingPh: true, facebook: false },
      { feature: 'Donor Acknowledgment', fundraisingPh: true, facebook: false },
      { feature: 'Progress Updates', fundraisingPh: true, facebook: true },
    ],
  },
  {
    category: 'Features',
    items: [
      { feature: 'Product Fundraising', fundraisingPh: true, facebook: false },
      { feature: 'Compliance Guidance', fundraisingPh: true, facebook: false },
      { feature: 'Diaspora Support', fundraisingPh: true, facebook: false },
      { feature: 'Social Sharing', fundraisingPh: true, facebook: true },
      { feature: 'Campaign Categories', fundraisingPh: true, facebook: true },
      { feature: 'Built-in Audience', fundraisingPh: false, facebook: true },
    ],
  },
]

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <CheckCircle2 className="h-5 w-5 text-emerald-600 mx-auto" />
    ) : (
      <XCircle className="h-5 w-5 text-red-400 mx-auto" />
    )
  }
  return <span className="text-sm text-[#4A5568]">{value}</span>
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Fundraising.ph vs Facebook Fundraisers: Better Transparency and Verification',
  description: 'A comparison of Fundraising.ph and Facebook Fundraisers, covering verification standards, transparency tools, fund tracking, donor updates, and product fundraising.',
  author: { '@type': 'Organization', name: 'Fundraise.ph' },
  publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function CompareFacebookPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema]} />
      <Navbar />
      <main className="pt-16 md:pt-18">
        <section className="relative bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B] overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-[#C8A951] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/10">
                <Scale className="h-4 w-4" />
                Platform Comparison
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Fundraising.ph vs Facebook Fundraisers
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                Facebook is great for sharing. But when it comes to fundraising, transparency, verification, and accountability require purpose-built tools. See why Fundraising.ph provides what Facebook Fundraisers cannot.
              </p>
              <Link href="https://fundraising.ph" className="inline-flex items-center gap-2 bg-[#C8A951] text-[#0A1F44] font-bold px-6 py-3 rounded-full hover:bg-[#B8943F] transition-colors">
                <Heart className="h-5 w-5" />
                Explore Fundraising.ph
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="border-l-4 border-[#C8A951] p-6 md:p-8 rounded-r-xl shadow-sm bg-white">
              <h2 className="text-lg font-bold text-[#0A1F44] mb-3">Quick Answer</h2>
              <div className="text-[#4A5568] leading-relaxed space-y-3">
                <p>
                  Facebook Fundraisers is a convenient social media feature for raising awareness, but it lacks the infrastructure that makes fundraising trustworthy: campaign verification, fund tracking, post-campaign reporting, use-of-funds disclosure, and product fundraising.
                </p>
                <p>
                  Fundraising.ph is a dedicated fundraising platform with a tiered verification framework, transparent fund flows, donor acknowledgment, compliance guidance, and product-based fundraising — tools specifically designed for accountable fundraising in the Philippines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Feature Comparison</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">See how a purpose-built fundraising platform compares to a social media fundraising feature.</p>
            </div>
            <div className="space-y-8">
              {comparisonFeatures.map((category) => (
                <div key={category.category}>
                  <h3 className="text-lg font-bold text-[#0A1F44] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C8A951]" />
                    {category.category}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-xl border border-[#0A1F44]/10 overflow-hidden">
                      <thead>
                        <tr className="bg-[#0A1F44] text-white">
                          <th className="text-left px-6 py-3.5 text-sm font-semibold">Feature</th>
                          <th className="text-center px-6 py-3.5 text-sm font-semibold">Fundraising.ph</th>
                          <th className="text-center px-6 py-3.5 text-sm font-semibold">Facebook Fundraisers</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, idx) => (
                          <tr key={item.feature} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F7F8FA]'}>
                            <td className="px-6 py-3.5 text-sm font-medium text-[#0A1F44]">{item.feature}</td>
                            <td className="px-6 py-3.5 text-center">
                              <CellValue value={item.fundraisingPh as boolean | string} />
                            </td>
                            <td className="px-6 py-3.5 text-center">
                              <CellValue value={item.facebook as boolean | string} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Where Each Platform Shines</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Understanding the different strengths of each approach.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Fundraising.ph Strengths</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Campaign Verification:</strong> Four-tier verification with public status on every campaign</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Fund Transparency:</strong> Track how funds flow from donor to beneficiary</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Post-Campaign Reporting:</strong> Campaigners provide proof of how funds were used</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Local Payments:</strong> GCash, Maya, bank transfer for Filipino donors</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Product Fundraising:</strong> Marketplace model for product-based campaigns</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Compliance Guidance:</strong> Philippine-specific regulatory resources</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Facebook Fundraisers Strengths</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Built-in Audience:</strong> Access to your Facebook friend network</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Easy Setup:</strong> Quick creation within the Facebook app</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Social Sharing:</strong> Viral reach through the Facebook platform</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">No Separate Account:</strong> Uses your existing Facebook profile</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <p className="text-xs text-[#4A5568]">
                    <strong>Key Limitations:</strong> No campaign verification, no fund tracking, no post-campaign reporting, no use-of-funds disclosure, no product fundraising, no compliance guidance, limited payment methods, no payout transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Feature-by-Feature Breakdown</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">A closer look at where dedicated fundraising infrastructure matters.</p>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 border border-[#0A1F44]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Verification Standards</h3>
                </div>
                <p className="text-[#4A5568] leading-relaxed">
                  Facebook Fundraisers does not verify campaigns or organizers beyond basic profile requirements. Anyone with a Facebook account can create a fundraiser, and there is no process to validate the campaign&apos;s purpose, the beneficiary, or the intended use of funds. Fundraising.ph implements a four-tier verification framework — Identity Verification, Documentation Review, Purpose Validation, and Payout Verification — with each level publicly displayed on the campaign page.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#0A1F44]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Transparency & Fund Tracking</h3>
                </div>
                <p className="text-[#4A5568] leading-relaxed">
                  When you donate through Facebook Fundraisers, you have no visibility into how funds are used after the donation. There is no fund tracking, no use-of-funds breakdown, and no post-campaign reporting. Fundraising.ph supports transparent fund flows from donation to beneficiary, requires post-campaign reports showing how funds were used, and provides donor acknowledgment for every contribution.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#0A1F44]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Donor Updates & Payout Transparency</h3>
                </div>
                <p className="text-[#4A5568] leading-relaxed">
                  Facebook Fundraisers processes payouts through its own payment system with limited transparency about when and how funds reach the beneficiary. Donors receive no updates about fund usage or campaign outcomes. Fundraising.ph provides structured donor updates, payout verification confirming funds reached the stated beneficiary, and post-campaign reporting so donors can see the results of their generosity.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#0A1F44]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Social Media vs Purpose-Built Infrastructure</h3>
                </div>
                <p className="text-[#4A5568] leading-relaxed">
                  Facebook&apos;s greatest strength — its social network — is also its limitation for fundraising. Fundraisers are treated as another content type, without specialized tools for accountability. Fundraising.ph treats fundraising as its core mission, building infrastructure specifically for verified, transparent, and compliant campaigns. The best approach may be using Fundraising.ph for the campaign itself and Facebook for sharing and awareness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <ProofBlock variant="general" title="Our Commitment to Fair Comparison">
              <p className="mb-3">
                Facebook is an incredible platform for connection and communication. Facebook Fundraisers has helped raise awareness for many important causes. This comparison focuses on fundraising infrastructure capabilities, not the value of social media for awareness.
              </p>
              <p>
                Many campaigns benefit from using both: Fundraising.ph for verified, transparent fundraising infrastructure and Facebook for social sharing and community engagement.
              </p>
            </ProofBlock>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Our Recommendation</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Use the right tool for the right purpose.</p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border-2 border-[#C8A951] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#C8A951]/15 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-[#C8A951]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">Choose Fundraising.ph for</h3>
                <ul className="space-y-2 text-sm text-[#4A5568]">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />Verified, transparent fundraising campaigns</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />Fund tracking and post-campaign reporting</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />Product-based fundraising campaigns</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />Philippine payment methods (GCash, Maya)</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />Compliance guidance and donor protection</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />Payout verification and accountability</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  <Minus className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">Facebook Fundraisers may work for</h3>
                <ul className="space-y-2 text-sm text-[#4A5568]">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />Informal, small-scale personal causes</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />Awareness campaigns where verification is not needed</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />Supplementing a Fundraising.ph campaign with social reach</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqItems.map((item, idx) => (
                <details key={idx} className="group bg-[#F7F8FA] rounded-xl border border-[#0A1F44]/5 overflow-hidden">
                  <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-[#0A1F44] list-none flex items-center justify-between hover:bg-slate-50 transition-colors">
                    {item.question}
                    <span className="w-5 h-5 rounded-full border-2 border-[#0A1F44]/20 flex items-center justify-center shrink-0 ml-4 group-open:rotate-45 transition-transform">
                      <span className="w-2 h-0.5 bg-[#0A1F44]/40 rounded-full" />
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-[#4A5568] leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AuthorBox lastUpdated="June 2026" />
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <h3 className="text-lg font-bold text-[#0A1F44] mb-6">Explore More Comparisons</h3>
            <InternalLinks
              links={[
                { category: 'Compare', label: 'Fundraising.ph vs GoFundMe', href: '/compare/gofundme', description: 'Compare Fundraising.ph with GoFundMe for Filipino fundraising.' },
                { category: 'Compare', label: 'Fundraising.ph vs Give.Asia', href: '/compare/giveasia', description: 'Compare Fundraising.ph with Give.Asia for Southeast Asian fundraising.' },
                { category: 'Guide', label: 'Best Fundraising Platforms in the Philippines', href: '/compare/best-platforms', description: 'Overview of all fundraising platforms available to Filipinos.' },
                { category: 'Get Started', label: 'Start a Campaign', href: '/', description: 'Launch your verified fundraising campaign on Fundraising.ph.' },
              ]}
            />
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F44] mb-4">Fundraising Deserves Better Than a Social Feature</h2>
            <p className="text-[#4A5568] text-lg mb-8 max-w-2xl mx-auto">
              Verified campaigns, transparent fund flows, and post-campaign accountability. That&apos;s what Filipino donors and organizers deserve.
            </p>
            <Link href="https://fundraising.ph" className="inline-flex items-center gap-2 bg-[#C8A951] text-[#0A1F44] font-bold px-8 py-3.5 rounded-full hover:bg-[#B8943F] transition-colors text-base">
              <ArrowRight className="h-5 w-5" />
              Go to Fundraising.ph
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
