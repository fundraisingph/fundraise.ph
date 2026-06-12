import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, XCircle, Minus, Scale, Globe, ShieldCheck, Heart } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'

export const metadata: Metadata = {
  title: 'Fundraising.ph vs GoFundMe | Best Crowdfunding Platform for Filipinos',
  description: 'Compare Fundraising.ph and GoFundMe for fundraising in the Philippines. See differences in local payment methods, Philippine compliance, verification standards, diaspora support, and product fundraising.',
  keywords: [
    'GoFundMe Philippines',
    'GoFundMe alternative Philippines',
    'Fundraising.ph vs GoFundMe',
    'Filipino fundraising platform',
    'fundraising platform Philippines',
    'GoFundMe Filipino donors',
    'crowdfunding Philippines comparison',
  ],
  openGraph: {
    title: 'Fundraising.ph vs GoFundMe | Best Crowdfunding Platform for Filipinos',
    description: 'Compare Fundraising.ph and GoFundMe for fundraising in the Philippines. See differences in payment methods, compliance, and verification.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'Can Filipinos use GoFundMe?',
    answer: 'GoFundMe is available in limited countries and is primarily designed for US-based organizers. Filipino organizers may face restrictions on account creation, payout methods, and currency support. Fundraising.ph is built specifically for Filipino organizers and donors, with local payment methods and Philippine peso support.',
  },
  {
    question: 'What is the best GoFundMe alternative in the Philippines?',
    answer: 'Fundraising.ph is designed as a Filipino-first alternative to GoFundMe. It offers local payment methods (GCash, Maya, bank transfer), Philippine peso campaigns, campaign verification, compliance guidance, and diaspora support — features specifically built for the Philippine fundraising ecosystem.',
  },
  {
    question: 'How does Fundraising.ph handle verification compared to GoFundMe?',
    answer: 'Fundraising.ph uses a tiered verification framework with four levels: Identity Verification, Documentation Review, Purpose Validation, and Payout Verification. Each tier is displayed on the campaign page. GoFundMe relies primarily on payment processor identity verification without a public tiered transparency system.',
  },
  {
    question: 'Does Fundraising.ph support overseas Filipino donors?',
    answer: 'Yes. Fundraising.ph is building dedicated diaspora giving features including hometown discovery, multi-currency planning, and cross-border compliance guidance. This reflects the reality that over 10 million overseas Filipinos actively support communities back home.',
  },
  {
    question: 'What payment methods does Fundraising.ph support?',
    answer: 'Fundraising.ph supports Philippine payment methods including GCash, Maya, bank transfers, and credit/debit cards. GoFundMe primarily supports credit/debit cards through US-based payment processors, which may not be accessible to many Filipino donors.',
  },
  {
    question: 'Can I run a product-based fundraising campaign?',
    answer: 'Fundraising.ph supports product-based fundraising through its marketplace model, allowing campaigners to sell products to raise funds. GoFundMe does not offer a product-based fundraising feature.',
  },
]

const comparisonFeatures = [
  {
    category: 'Platform Basics',
    items: [
      { feature: 'Primary Market', fundraisingPh: 'Philippines & Filipino diaspora', gofundme: 'United States' },
      { feature: 'Currency', fundraisingPh: 'Philippine Peso (PHP)', gofundme: 'US Dollar (USD)' },
      { feature: 'Language', fundraisingPh: 'English & Filipino', gofundme: 'English' },
    ],
  },
  {
    category: 'Payments',
    items: [
      { feature: 'GCash', fundraisingPh: true, gofundme: false },
      { feature: 'Maya', fundraisingPh: true, gofundme: false },
      { feature: 'Bank Transfer (PH)', fundraisingPh: true, gofundme: false },
      { feature: 'Credit/Debit Card', fundraisingPh: true, gofundme: true },
      { feature: 'International Donations', fundraisingPh: true, gofundme: true },
    ],
  },
  {
    category: 'Trust & Verification',
    items: [
      { feature: 'Campaign Verification', fundraisingPh: true, gofundme: false },
      { feature: 'Tiered Verification Levels', fundraisingPh: true, gofundme: false },
      { feature: 'Identity Verification', fundraisingPh: true, gofundme: true },
      { feature: 'Post-Campaign Reporting', fundraisingPh: true, gofundme: false },
      { feature: 'Fund Tracking', fundraisingPh: true, gofundme: false },
    ],
  },
  {
    category: 'Features',
    items: [
      { feature: 'Product Fundraising', fundraisingPh: true, gofundme: false },
      { feature: 'Diaspora Support', fundraisingPh: true, gofundme: false },
      { feature: 'Compliance Guidance', fundraisingPh: true, gofundme: false },
      { feature: 'Campaign Categories', fundraisingPh: true, gofundme: true },
      { feature: 'Social Sharing', fundraisingPh: true, gofundme: true },
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
  headline: 'Fundraising.ph vs GoFundMe: Which Platform Is Best for Filipino Fundraisers?',
  description: 'A detailed comparison of Fundraising.ph and GoFundMe for fundraising in the Philippines, covering payment methods, verification, compliance, and diaspora support.',
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

export default function CompareGoFundMePage() {
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
                Fundraising.ph vs GoFundMe
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                A fair, detailed comparison of two fundraising platforms. See which one is built for Filipino organizers, donors, and communities — and which one is designed for the US market.
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
                  GoFundMe is one of the world&apos;s best-known fundraising platforms, but it is built primarily for the US market. Fundraising.ph is purpose-built for Filipino fundraisers — with local payment methods (GCash, Maya, bank transfer), Philippine peso campaigns, a tiered verification framework, compliance guidance, and diaspora support.
                </p>
                <p>
                  If you are fundraising in or for the Philippines, Fundraising.ph offers infrastructure specifically designed for Filipino donors, organizers, and regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Feature Comparison</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Side-by-side comparison of Fundraising.ph and GoFundMe across key categories.</p>
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
                          <th className="text-center px-6 py-3.5 text-sm font-semibold">GoFundMe</th>
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
                              <CellValue value={item.gofundme as boolean | string} />
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
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">An honest look at the strengths and limitations of each platform.</p>
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
                    <span><strong className="text-[#0A1F44]">Built for Filipinos:</strong> Local payment methods, Philippine peso, and Filipino language support</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Tiered Verification:</strong> Four-level verification framework displayed on every campaign</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Philippine Compliance:</strong> Built-in compliance guidance for Philippine fundraising regulations</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Product Fundraising:</strong> Marketplace model for selling products to raise funds</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Diaspora Support:</strong> Dedicated features for 10M+ overseas Filipinos</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">GoFundMe Strengths</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Global Brand:</strong> Most recognized fundraising platform worldwide</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Large Donor Base:</strong> Millions of donors in the US and supported countries</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">US-Focused:</strong> Excellent for campaigns targeting US-based donors</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <p className="text-xs text-[#4A5568]">
                    <strong>Limitations for Filipinos:</strong> No GCash/Maya, no PHP campaigns, no Philippine compliance guidance, limited availability for Philippine-based organizers, no verification transparency framework.
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
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Deeper analysis of the areas that matter most to Filipino fundraisers.</p>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 border border-[#0A1F44]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Verification & Trust</h3>
                </div>
                <p className="text-[#4A5568] leading-relaxed">
                  Fundraising.ph implements a public, tiered verification framework with four levels displayed on every campaign page — from Identity Verification through Payout Verification. Donors can see exactly what has been reviewed. GoFundMe relies on internal payment processor verification and does not provide public verification status on campaigns. For Filipino donors who value transparency, Fundraising.ph&apos;s approach provides more visible accountability.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#0A1F44]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Local Payment Methods</h3>
                </div>
                <p className="text-[#4A5568] leading-relaxed">
                  GCash and Maya are used by tens of millions of Filipinos daily. Fundraising.ph integrates these local payment methods alongside bank transfers and card payments, making it easy for any Filipino to donate. GoFundMe accepts credit and debit cards through US-based payment processors, which excludes the majority of Filipino donors who prefer e-wallet payments.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#0A1F44]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Diaspora & Product Fundraising</h3>
                </div>
                <p className="text-[#4A5568] leading-relaxed">
                  With over 10 million overseas Filipinos, diaspora giving is a significant part of Philippine fundraising. Fundraising.ph is building dedicated diaspora features including hometown discovery and cross-border compliance guidance. It also supports product-based fundraising through its marketplace model. GoFundMe does not offer diaspora-specific features or product fundraising capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <ProofBlock variant="general" title="Our Commitment to Fair Comparison">
              <p className="mb-3">
                GoFundMe is a respected platform that has helped millions of people worldwide. This comparison is factual and based on publicly available information. We encourage you to evaluate both platforms based on your specific needs.
              </p>
              <p>
                If you are fundraising for a Philippine-based cause or beneficiary, Fundraising.ph offers purpose-built infrastructure for the Filipino context. If your primary audience is US-based, GoFundMe may also be a suitable option.
              </p>
            </ProofBlock>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Our Recommendation</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Choose the platform that matches your fundraising context.</p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border-2 border-[#C8A951] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#C8A951]/15 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-[#C8A951]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">Choose Fundraising.ph if</h3>
                <ul className="space-y-2 text-sm text-[#4A5568]">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />Your beneficiaries are in the Philippines</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />You want GCash, Maya, or bank transfer donations</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />You need Philippine compliance guidance</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />You are an overseas Filipino supporting home</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />You want product-based fundraising options</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  <Minus className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">GoFundMe may be suitable if</h3>
                <ul className="space-y-2 text-sm text-[#4A5568]">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />Your primary donors are in the US</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />You need USD-denominated fundraising</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />You are a US-based organizer</li>
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
                { category: 'Compare', label: 'Fundraising.ph vs Give.Asia', href: '/compare/giveasia', description: 'Compare Fundraising.ph with Give.Asia for Southeast Asian fundraising.' },
                { category: 'Compare', label: 'Fundraising.ph vs Facebook Fundraisers', href: '/compare/facebook', description: 'See how Fundraising.ph compares to Facebook Fundraisers for transparency and verification.' },
                { category: 'Guide', label: 'Best Fundraising Platforms in the Philippines', href: '/compare/best-platforms', description: 'Overview of all fundraising platforms available to Filipinos.' },
                { category: 'Get Started', label: 'Start a Campaign', href: '/', description: 'Launch your verified fundraising campaign on Fundraising.ph.' },
              ]}
            />
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F44] mb-4">Start Fundraising for Filipinos, by Filipinos</h2>
            <p className="text-[#4A5568] text-lg mb-8 max-w-2xl mx-auto">
              Join a platform built with the Filipino context at its core — local payments, transparent verification, and compliance guidance.
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
