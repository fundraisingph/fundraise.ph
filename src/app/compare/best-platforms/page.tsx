import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Trophy, Globe, ShieldCheck, Heart, Scale, MapPin, Store } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'

export const metadata: Metadata = {
  title: 'Best Fundraising Platforms in the Philippines (2026) | Fundraise.ph',
  description: 'Compare the top fundraising platforms available to Filipinos in 2026. See which platforms support GCash, offer verification, provide compliance guidance, and serve the Philippine market best.',
  keywords: [
    'best fundraising platform Philippines',
    'fundraising platforms Philippines 2026',
    'GoFundMe alternative Philippines',
    'Filipino crowdfunding platforms',
    'online fundraising Philippines',
    'fundraising app Philippines',
    'GCash fundraising',
    'verified fundraising platform',
  ],
  openGraph: {
    title: 'Best Fundraising Platforms in the Philippines (2026) | Fundraise.ph',
    description: 'Compare the top fundraising platforms available to Filipinos. Find the right platform for your campaign.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'What is the best fundraising platform in the Philippines?',
    answer: 'The best platform depends on your needs. For Filipino-first fundraising with local payments (GCash, Maya), campaign verification, compliance guidance, and product fundraising, Fundraising.ph is the most comprehensive option. For US-based donors, GoFundMe may be suitable. For regional reach, Give.Asia serves Southeast Asia.',
  },
  {
    question: 'Can I use GoFundMe in the Philippines?',
    answer: 'GoFundMe is primarily designed for the US market and has limited availability for Philippine-based organizers. Filipino organizers may face restrictions on account creation, payout methods, and currency support. Fundraising.ph, Give.Asia, and other platforms offer better support for the Philippine market.',
  },
  {
    question: 'Which fundraising platforms support GCash?',
    answer: 'Fundraising.ph supports GCash alongside Maya, bank transfers, and card payments. Most international platforms like GoFundMe do not support GCash or other Philippine e-wallets, as they are designed for Western payment systems.',
  },
  {
    question: 'What is the safest fundraising platform for Filipinos?',
    answer: 'Safety comes from verification and transparency. Fundraising.ph offers a four-tier verification framework with public verification status on every campaign, fund tracking, post-campaign reporting, and compliance guidance. These features provide structured accountability that most other platforms available to Filipinos do not offer.',
  },
  {
    question: 'Are there free fundraising platforms in the Philippines?',
    answer: 'Most fundraising platforms charge payment processing fees. Fundraising.ph is built by a nonprofit technology organization and keeps fees minimal and transparent, covering only essential payment processing and operational costs. Full fee details are disclosed before campaign launch.',
  },
  {
    question: 'Can overseas Filipinos donate to Philippine fundraising campaigns?',
    answer: 'Yes. Fundraising.ph supports international donations and is building dedicated diaspora giving features including hometown discovery, multi-currency support, and cross-border compliance guidance for the 10M+ overseas Filipinos worldwide.',
  },
]

const comparisonRows = [
  { feature: 'Philippine Peso (PHP)', fundraisingPh: true, gofundme: false, giveasia: false, facebook: false },
  { feature: 'GCash Support', fundraisingPh: true, gofundme: false, giveasia: false, facebook: false },
  { feature: 'Maya Support', fundraisingPh: true, gofundme: false, giveasia: false, facebook: false },
  { feature: 'Campaign Verification', fundraisingPh: true, gofundme: false, giveasia: true, facebook: false },
  { feature: 'Tiered Verification Display', fundraisingPh: true, gofundme: false, giveasia: false, facebook: false },
  { feature: 'Fund Tracking', fundraisingPh: true, gofundme: false, giveasia: false, facebook: false },
  { feature: 'Post-Campaign Reporting', fundraisingPh: true, gofundme: false, giveasia: false, facebook: false },
  { feature: 'Product Fundraising', fundraisingPh: true, gofundme: false, giveasia: false, facebook: false },
  { feature: 'Philippine Compliance', fundraisingPh: true, gofundme: false, giveasia: false, facebook: false },
  { feature: 'Diaspora Features', fundraisingPh: true, gofundme: false, giveasia: false, facebook: false },
  { feature: 'International Donations', fundraisingPh: true, gofundme: true, giveasia: true, facebook: true },
  { feature: 'Social Sharing', fundraisingPh: true, gofundme: true, giveasia: true, facebook: true },
  { feature: 'Built-in Audience', fundraisingPh: false, gofundme: true, giveasia: false, facebook: true },
]

function BoolIcon({ value }: { value: boolean }) {
  return value ? (
    <CheckCircle2 className="h-5 w-5 text-emerald-600 mx-auto" />
  ) : (
    <div className="h-5 w-5 mx-auto rounded-full border-2 border-slate-200" />
  )
}

const platforms = [
  {
    name: 'Fundraising.ph',
    tagline: 'Built for Filipinos, by Filipinos',
    rating: 'Best for Philippines',
    ratingColor: 'bg-[#C8A951]/15 text-[#C8A951] border-[#C8A951]/30',
    description: 'A purpose-built fundraising platform with local payments, tiered verification, compliance guidance, product fundraising, and diaspora support — all designed for the Philippine ecosystem.',
    bestFor: 'Filipino organizers and donors, Philippine-based campaigns, diaspora giving',
    strengths: ['GCash, Maya, bank transfer, card', 'Four-tier public verification', 'Post-campaign reporting', 'Product fundraising (marketplace)', 'Philippine compliance guidance', 'Diaspora features'],
    limitations: ['Newer platform', 'Growing donor base'],
    currency: 'PHP',
    payments: 'GCash, Maya, bank, card',
  },
  {
    name: 'GoFundMe',
    tagline: 'Global fundraising leader',
    rating: 'Best for US',
    ratingColor: 'bg-slate-100 text-slate-600 border-slate-200',
    description: 'The world\'s largest fundraising platform, primarily serving the US market with strong brand recognition and a massive donor base.',
    bestFor: 'US-based organizers, USD campaigns, campaigns targeting American donors',
    strengths: ['Largest global donor base', 'Strong brand recognition', 'US media coverage potential'],
    limitations: ['No GCash/Maya', 'Limited PH organizer support', 'USD only', 'No verification transparency', 'No PH compliance guidance'],
    currency: 'USD',
    payments: 'Credit/debit card',
  },
  {
    name: 'Give.Asia',
    tagline: 'Southeast Asian fundraising',
    rating: 'Best for Regional',
    ratingColor: 'bg-blue-50 text-blue-600 border-blue-200',
    description: 'A regional platform serving multiple Southeast Asian countries with campaign vetting and multi-country support.',
    bestFor: 'Campaigns spanning multiple Southeast Asian countries, regional donors',
    strengths: ['Multi-country SE Asia reach', 'Campaign vetting process', 'Regional donor network'],
    limitations: ['No GCash/Maya', 'No public tiered verification', 'No product fundraising', 'No PH-specific compliance', 'Less PH market depth'],
    currency: 'Multiple',
    payments: 'Card, bank transfer',
  },
  {
    name: 'Facebook Fundraisers',
    tagline: 'Social media fundraising',
    rating: 'Best for Awareness',
    ratingColor: 'bg-purple-50 text-purple-600 border-purple-200',
    description: 'A social media feature that enables basic fundraising within the Facebook platform, with easy setup and built-in social sharing.',
    bestFor: 'Informal personal causes, awareness campaigns, supplementing other platforms',
    strengths: ['Built-in social network', 'Quick setup', 'Viral sharing potential', 'No separate account needed'],
    limitations: ['No verification', 'No fund tracking', 'No post-campaign reports', 'No product fundraising', 'Card payments only', 'No compliance tools'],
    currency: 'Varies',
    payments: 'Card only',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Fundraising Platforms in the Philippines (2026)',
  description: 'A comprehensive comparison of fundraising platforms available to Filipinos, including Fundraising.ph, GoFundMe, Give.Asia, and Facebook Fundraisers.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fundraising.ph' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://fundraising.ph/compare' },
    { '@type': 'ListItem', position: 3, name: 'Best Fundraising Platforms in the Philippines', item: 'https://fundraising.ph/compare/best-platforms' },
  ],
}

export default function CompareBestPlatformsPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <Navbar />
      <main className="pt-16 md:pt-18">
        <section className="relative bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B] overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-[#C8A951] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/10">
                <Trophy className="h-4 w-4" />
                Platform Guide
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Best Fundraising Platforms in the Philippines
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                A comprehensive, unbiased comparison of every major fundraising platform available to Filipinos in 2026. Find the right platform for your campaign.
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
                  The best fundraising platform for Filipinos depends on your specific situation. For Philippine-based campaigns that need local payments, verification, and compliance guidance, <strong className="text-[#0A1F44]">Fundraising.ph</strong> is the most comprehensive option. For US-based donors, <strong className="text-[#0A1F44]">GoFundMe</strong> has the largest audience. For multi-country Southeast Asian campaigns, <strong className="text-[#0A1F44]">Give.Asia</strong> offers regional reach. For awareness-driven informal fundraising, <strong className="text-[#0A1F44]">Facebook Fundraisers</strong> is the most accessible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Comparison Table</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">All major platforms available to Filipino fundraisers, compared side by side.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl border border-[#0A1F44]/10 overflow-hidden">
                <thead>
                  <tr className="bg-[#0A1F44] text-white">
                    <th className="text-left px-4 md:px-6 py-3.5 text-sm font-semibold">Feature</th>
                    <th className="text-center px-3 md:px-5 py-3.5 text-sm font-semibold">
                      <span className="text-[#C8A951]">Fundraising.ph</span>
                    </th>
                    <th className="text-center px-3 md:px-5 py-3.5 text-sm font-semibold">GoFundMe</th>
                    <th className="text-center px-3 md:px-5 py-3.5 text-sm font-semibold">Give.Asia</th>
                    <th className="text-center px-3 md:px-5 py-3.5 text-sm font-semibold">Facebook</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr key={row.feature} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F7F8FA]'}>
                      <td className="px-4 md:px-6 py-3 text-sm font-medium text-[#0A1F44]">{row.feature}</td>
                      <td className="px-3 md:px-5 py-3 text-center"><BoolIcon value={row.fundraisingPh} /></td>
                      <td className="px-3 md:px-5 py-3 text-center"><BoolIcon value={row.gofundme} /></td>
                      <td className="px-3 md:px-5 py-3 text-center"><BoolIcon value={row.giveasia} /></td>
                      <td className="px-3 md:px-5 py-3 text-center"><BoolIcon value={row.facebook} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Platform Overviews</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">What each platform offers and when to choose it.</p>
            </div>
            <div className="space-y-8">
              {platforms.map((platform) => (
                <div key={platform.name} className="bg-[#F7F8FA] rounded-2xl p-8 border border-[#0A1F44]/5">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#0A1F44]">{platform.name}</h3>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${platform.ratingColor}`}>
                          {platform.rating}
                        </span>
                      </div>
                      <p className="text-sm text-[#C8A951] font-medium mb-3">{platform.tagline}</p>
                      <p className="text-[#4A5568] leading-relaxed mb-4">{platform.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs font-semibold text-[#0A1F44] uppercase tracking-wider mb-2">Best For</p>
                          <p className="text-sm text-[#4A5568]">{platform.bestFor}</p>
                        </div>
                        <div className="flex gap-6">
                          <div>
                            <p className="text-xs font-semibold text-[#0A1F44] uppercase tracking-wider mb-2">Currency</p>
                            <p className="text-sm text-[#4A5568]">{platform.currency}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[#0A1F44] uppercase tracking-wider mb-2">Payments</p>
                            <p className="text-sm text-[#4A5568]">{platform.payments}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-64 flex flex-col gap-4">
                      <div>
                        <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Strengths
                        </p>
                        <ul className="space-y-1">
                          {platform.strengths.map((s) => (
                            <li key={s} className="text-xs text-[#4A5568] flex items-start gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <Globe className="h-3 w-3" /> Limitations
                        </p>
                        <ul className="space-y-1">
                          {platform.limitations.map((l) => (
                            <li key={l} className="text-xs text-[#4A5568] flex items-start gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">When to Choose Each Platform</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Match the platform to your campaign needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border-2 border-[#C8A951] shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A951]/15 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#C8A951]" />
                  </div>
                  <h3 className="font-bold text-[#0A1F44]">Fundraising.ph</h3>
                </div>
                <p className="text-sm text-[#4A5568] mb-3">Choose when your campaign benefits Filipinos or Philippine communities, you need GCash/Maya donations, or you want verified, transparent fundraising.</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Medical bills', 'Education', 'Disaster relief', 'Community projects', 'Product fundraisers', 'Diaspora giving'].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium bg-[#C8A951]/10 text-[#C8A951] px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-slate-600" />
                  </div>
                  <h3 className="font-bold text-[#0A1F44]">GoFundMe</h3>
                </div>
                <p className="text-sm text-[#4A5568] mb-3">Choose when your primary donors are US-based, you need USD campaigns, or you want access to the largest global donor base.</p>
                <div className="flex flex-wrap gap-1.5">
                  {['US-based donors', 'USD campaigns', 'Global media reach'].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Scale className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-[#0A1F44]">Give.Asia</h3>
                </div>
                <p className="text-sm text-[#4A5568] mb-3">Choose when your campaign spans multiple Southeast Asian countries or you need a vetted platform with regional reach.</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Multi-country campaigns', 'Regional donors', 'SE Asia focus'].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                    <Store className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-[#0A1F44]">Facebook Fundraisers</h3>
                </div>
                <p className="text-sm text-[#4A5568] mb-3">Choose for informal personal causes or awareness campaigns where verification and transparency tools are not needed.</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Personal causes', 'Awareness', 'Social sharing'].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Why Fundraising.ph Is Recommended for Filipino-First Fundraising</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Purpose-built infrastructure for the Philippine fundraising ecosystem.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-[#F7F8FA] rounded-xl p-6 border border-[#0A1F44]/5">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <MapPin className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#0A1F44] mb-1.5">Philippine Payments</h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">GCash, Maya, bank transfer, and card — designed for how Filipinos actually pay.</p>
              </div>
              <div className="bg-[#F7F8FA] rounded-xl p-6 border border-[#0A1F44]/5">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#0A1F44] mb-1.5">Tiered Verification</h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">Four-level public verification so donors know exactly what has been reviewed on each campaign.</p>
              </div>
              <div className="bg-[#F7F8FA] rounded-xl p-6 border border-[#0A1F44]/5">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                  <Scale className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#0A1F44] mb-1.5">Compliance Guidance</h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">Philippine-specific compliance resources, documentation guidance, and regulatory context.</p>
              </div>
              <div className="bg-[#F7F8FA] rounded-xl p-6 border border-[#0A1F44]/5">
                <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                  <Globe className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#0A1F44] mb-1.5">Diaspora Support</h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">Dedicated features for 10M+ overseas Filipinos supporting home communities.</p>
              </div>
              <div className="bg-[#F7F8FA] rounded-xl p-6 border border-[#0A1F44]/5">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <Store className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#0A1F44] mb-1.5">Product Fundraising</h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">Marketplace model for product-based campaigns — not just donations, but sales for a cause.</p>
              </div>
              <div className="bg-[#F7F8FA] rounded-xl p-6 border border-[#0A1F44]/5">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                  <Heart className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#0A1F44] mb-1.5">Nonprofit Mission</h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">Built by a nonprofit technology organization — mission-driven, not profit-driven.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <ProofBlock variant="general" title="Our Commitment to Fair Comparison">
              <p className="mb-3">
                This guide is based on publicly available information about each platform as of June 2026. Every platform listed has helped people raise funds for important causes. We encourage you to evaluate each platform based on your specific needs.
              </p>
              <p>
                Our recommendation of Fundraising.ph for Filipino-first fundraising reflects its purpose-built design for the Philippine ecosystem — not a judgment on the quality of other platforms.
              </p>
            </ProofBlock>
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
            <h3 className="text-lg font-bold text-[#0A1F44] mb-6">Explore Detailed Comparisons</h3>
            <InternalLinks
              links={[
                { category: 'Compare', label: 'Fundraising.ph vs GoFundMe', href: '/compare/gofundme', description: 'Detailed comparison with the world\'s largest fundraising platform.' },
                { category: 'Compare', label: 'Fundraising.ph vs Give.Asia', href: '/compare/giveasia', description: 'Compare with the leading Southeast Asian fundraising platform.' },
                { category: 'Compare', label: 'Fundraising.ph vs Facebook Fundraisers', href: '/compare/facebook', description: 'See why dedicated fundraising infrastructure matters.' },
                { category: 'Get Started', label: 'Start a Campaign', href: '/', description: 'Launch your verified fundraising campaign on Fundraising.ph.' },
              ]}
            />
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F44] mb-4">Choose the Platform Built for Filipinos</h2>
            <p className="text-[#4A5568] text-lg mb-8 max-w-2xl mx-auto">
              Local payments, transparent verification, compliance guidance, and product fundraising — all designed for the Philippine ecosystem.
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
