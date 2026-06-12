import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, XCircle, Minus, Scale, Globe, ShieldCheck, Heart, Store } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'

export const metadata: Metadata = {
  title: 'Fundraising.ph vs Give.Asia | Which Platform Is Best for Filipino Fundraisers?',
  description: 'Compare Fundraising.ph and Give.Asia for fundraising in the Philippines. Explore differences in verification, product fundraising, Philippine compliance, and local context.',
  keywords: [
    'Give.Asia Philippines',
    'Give.Asia alternative',
    'Fundraising.ph vs Give.Asia',
    'Filipino fundraising platform',
    'fundraising platform Philippines',
    'Give.Asia review',
    'Southeast Asia fundraising',
  ],
  openGraph: {
    title: 'Fundraising.ph vs Give.Asia | Which Platform Is Best for Filipino Fundraisers?',
    description: 'Compare Fundraising.ph and Give.Asia for fundraising in the Philippines, including verification, product fundraising, and local context.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'Is Give.Asia available in the Philippines?',
    answer: 'Give.Asia operates across Southeast Asia, including the Philippines. It serves as a regional platform connecting donors with campaigns across multiple countries. Fundraising.ph is exclusively focused on the Philippine fundraising ecosystem with dedicated local payment methods, Philippine peso support, and compliance guidance.',
  },
  {
    question: 'How does verification differ between Fundraising.ph and Give.Asia?',
    answer: 'Fundraising.ph uses a public, four-tier verification framework where each campaign displays its verification level (Identity, Documentation, Purpose, Payout). Give.Asia has its own vetting process for campaigns but does not use a public tiered verification system. Fundraising.ph\'s approach gives donors visible, structured transparency.',
  },
  {
    question: 'Can I sell products to raise funds on Give.Asia?',
    answer: 'Give.Asia primarily focuses on donation-based fundraising. Fundraising.ph supports product-based fundraising through its marketplace model, allowing campaigners to sell products as part of their fundraising strategy. This provides an alternative revenue model beyond pure donations.',
  },
  {
    question: 'Which platform is better for overseas Filipino donors?',
    answer: 'Fundraising.ph is building dedicated diaspora giving features including hometown discovery, cross-border compliance guidance, and multi-currency support specifically for the 10M+ overseas Filipinos. Give.Asia serves a broader Southeast Asian audience but does not have Philippines-specific diaspora features.',
  },
  {
    question: 'Does Give.Asia support GCash and Maya?',
    answer: 'Give.Asia supports various payment methods across its operating countries. Fundraising.ph is specifically built around Philippine payment infrastructure, with native support for GCash, Maya, and local bank transfers designed for Filipino donor preferences.',
  },
  {
    question: 'What is the difference in compliance support?',
    answer: 'Fundraising.ph provides Philippine-specific compliance guidance, including documentation requirements, reporting standards, and regulatory context for Filipino fundraisers. Give.Asia operates across multiple countries and provides general compliance support without Philippines-specific guidance.',
  },
]

const comparisonFeatures = [
  {
    category: 'Platform Focus',
    items: [
      { feature: 'Primary Focus', fundraisingPh: 'Philippines & Filipino diaspora', giveasia: 'Southeast Asia (multi-country)' },
      { feature: 'Currency', fundraisingPh: 'Philippine Peso (PHP)', giveasia: 'Multiple Asian currencies' },
      { feature: 'Language', fundraisingPh: 'English & Filipino', giveasia: 'English' },
    ],
  },
  {
    category: 'Payments',
    items: [
      { feature: 'GCash', fundraisingPh: true, giveasia: false },
      { feature: 'Maya', fundraisingPh: true, giveasia: false },
      { feature: 'Bank Transfer (PH)', fundraisingPh: true, giveasia: true },
      { feature: 'Credit/Debit Card', fundraisingPh: true, giveasia: true },
      { feature: 'International Donations', fundraisingPh: true, giveasia: true },
    ],
  },
  {
    category: 'Trust & Verification',
    items: [
      { feature: 'Public Tiered Verification', fundraisingPh: true, giveasia: false },
      { feature: 'Campaign Vetting', fundraisingPh: true, giveasia: true },
      { feature: 'Identity Verification', fundraisingPh: true, giveasia: true },
      { feature: 'Post-Campaign Reporting', fundraisingPh: true, giveasia: false },
      { feature: 'Fund Tracking', fundraisingPh: true, giveasia: false },
    ],
  },
  {
    category: 'Features',
    items: [
      { feature: 'Product Fundraising', fundraisingPh: true, giveasia: false },
      { feature: 'Philippine Compliance Guidance', fundraisingPh: true, giveasia: false },
      { feature: 'Diaspora Features', fundraisingPh: true, giveasia: false },
      { feature: 'Campaign Categories', fundraisingPh: true, giveasia: true },
      { feature: 'Social Sharing', fundraisingPh: true, giveasia: true },
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
  headline: 'Fundraising.ph vs Give.Asia: Which Platform Is Best for Filipino Fundraisers?',
  description: 'A detailed comparison of Fundraising.ph and Give.Asia for fundraising in the Philippines, covering verification, product fundraising, compliance, and local context.',
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

export default function CompareGiveAsiaPage() {
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
                Fundraising.ph vs Give.Asia
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                Two platforms serving Southeast Asia. One is purpose-built for Filipino fundraisers with local payments, tiered verification, and product fundraising. See which fits your needs.
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
                  Give.Asia is a respected regional platform serving multiple Southeast Asian countries. Fundraising.ph is exclusively focused on the Philippines and the Filipino diaspora — offering deeper local payment integration (GCash, Maya), a public tiered verification framework, product-based fundraising through its marketplace model, and Philippine-specific compliance guidance.
                </p>
                <p>
                  If your cause benefits Filipinos and you want infrastructure designed for the Philippine context, Fundraising.ph provides a more targeted and locally aware platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Feature Comparison</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Side-by-side comparison of Fundraising.ph and Give.Asia for Filipino fundraisers.</p>
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
                          <th className="text-center px-6 py-3.5 text-sm font-semibold">Give.Asia</th>
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
                              <CellValue value={item.giveasia as boolean | string} />
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
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">An honest assessment of the strengths of each platform.</p>
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
                    <span><strong className="text-[#0A1F44]">Philippines-First:</strong> Purpose-built for Filipino organizers and donors</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Local Payments:</strong> GCash, Maya, and bank transfer integration</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Tiered Verification:</strong> Public four-level verification framework</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Product Fundraising:</strong> Marketplace model for selling products</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Philippine Compliance:</strong> Local regulatory guidance and standards</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Diaspora Support:</strong> Dedicated features for overseas Filipinos</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Give.Asia Strengths</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Regional Reach:</strong> Operates across multiple Southeast Asian countries</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Campaign Vetting:</strong> Reviews campaigns before they go live</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                    <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A1F44]">Multi-Country:</strong> Good for campaigns spanning multiple countries</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <p className="text-xs text-[#4A5568]">
                    <strong>Limitations for Filipinos:</strong> No GCash/Maya integration, no public tiered verification, no product fundraising, no Philippine-specific compliance guidance, broader focus means less depth for the Philippine market.
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
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Deeper look at the areas that matter most to Filipino fundraisers.</p>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 border border-[#0A1F44]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Verification Approach</h3>
                </div>
                <p className="text-[#4A5568] leading-relaxed">
                  Both platforms take verification seriously. Give.Asia reviews campaigns before they go live, which is a meaningful trust measure. Fundraising.ph goes further with a public four-tier verification system where donors can see the exact verification level of each campaign — from Identity Verification through Payout Verification. This gives Filipino donors structured, visible transparency.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#0A1F44]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Store className="h-5 w-5 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Product Fundraising</h3>
                </div>
                <p className="text-[#4A5568] leading-relaxed">
                  Product-based fundraising — selling products to raise funds — is a common model in the Philippines, from school fundraisers to community initiatives. Fundraising.ph supports this through its marketplace model. Give.Asia focuses on donation-based fundraising and does not offer product fundraising capabilities. For Filipino organizations that rely on product sales, Fundraising.ph provides the infrastructure.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#0A1F44]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44]">Local Context & Philippine Compliance</h3>
                </div>
                <p className="text-[#4A5568] leading-relaxed">
                  Give.Asia serves a regional audience, which means its compliance resources are general across multiple countries. Fundraising.ph provides Philippines-specific compliance guidance, documentation requirements, and regulatory context. For Filipino organizers who need to understand local fundraising rules and standards, Fundraising.ph offers focused resources. The platform is built around GCash, Maya, bayanihan-inspired community features, and diaspora giving tools for overseas Filipinos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <ProofBlock variant="general" title="Our Commitment to Fair Comparison">
              <p className="mb-3">
                Give.Asia is a legitimate platform that has helped many campaigns across Southeast Asia. This comparison is factual and based on publicly available information about both platforms.
              </p>
              <p>
                Both platforms can serve Filipino fundraisers effectively. The key difference is depth of local focus: Fundraising.ph is exclusively built for the Philippine context, while Give.Asia serves a broader regional audience.
              </p>
            </ProofBlock>
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4">Our Recommendation</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Choose based on where your donors and beneficiaries are.</p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border-2 border-[#C8A951] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#C8A951]/15 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-[#C8A951]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">Choose Fundraising.ph if</h3>
                <ul className="space-y-2 text-sm text-[#4A5568]">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />Your cause benefits Filipinos or Philippine communities</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />You want local payment methods (GCash, Maya)</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />You need product-based fundraising</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />You want Philippine compliance guidance</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] shrink-0 mt-1.5" />You are targeting Filipino donors specifically</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  <Minus className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">Give.Asia may be suitable if</h3>
                <ul className="space-y-2 text-sm text-[#4A5568]">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />Your campaign spans multiple Southeast Asian countries</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />You want a pre-vetted platform with regional reach</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />Your donors are spread across Southeast Asia</li>
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
                { category: 'Compare', label: 'Fundraising.ph vs Facebook Fundraisers', href: '/compare/facebook', description: 'See how Fundraising.ph compares to Facebook Fundraisers.' },
                { category: 'Guide', label: 'Best Fundraising Platforms in the Philippines', href: '/compare/best-platforms', description: 'Overview of all fundraising platforms available to Filipinos.' },
                { category: 'Get Started', label: 'Start a Campaign', href: '/', description: 'Launch your verified fundraising campaign on Fundraising.ph.' },
              ]}
            />
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F44] mb-4">Start Fundraising with Philippine-Built Infrastructure</h2>
            <p className="text-[#4A5568] text-lg mb-8 max-w-2xl mx-auto">
              A platform designed for Filipino organizers, donors, and communities — with local payments, transparent verification, and product fundraising.
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
