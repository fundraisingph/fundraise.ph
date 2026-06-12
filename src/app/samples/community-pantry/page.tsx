import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Banknote,
  FileText,
  UserCheck,
  BadgeCheck,
  ArrowRight,
  TrendingUp,
  Wheat,
  Soup,
  Leaf,
  Droplets,
  MessageSquare,
  Users,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Sample Community Pantry Campaign | Fundraising.ph',
  description:
    'Sample community pantry fundraising campaign demonstrating how Fundraising.ph works. This is a demo campaign for Maginhawa Community Pantry Extension.',
  openGraph: {
    title: 'Sample Community Pantry Campaign | Fundraising.ph',
    description: 'Sample community pantry fundraising campaign for demonstration purposes.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const fundBreakdown = [
  { icon: Wheat, label: 'Rice (50kg bags)', amount: 'P15,000', percent: 30 },
  { icon: Soup, label: 'Canned Goods', amount: 'P12,000', percent: 24 },
  { icon: Leaf, label: 'Fresh Vegetables', amount: 'P10,000', percent: 20 },
  { icon: Droplets, label: 'Hygiene Kits', amount: 'P13,000', percent: 26 },
]

const updates = [
  { date: 'June 7, 2026', title: 'Serving 150 families daily', content: 'Our community pantry along Maginhawa Street now serves approximately 150 families each day. We have expanded our operating hours to accommodate more community members.' },
  { date: 'May 28, 2026', title: 'Hygiene kits added to distribution', content: 'Thanks to your support, we are now including basic hygiene kits with each family&#39;s grocery pack — containing soap, shampoo, toothpaste, and face masks.' },
  { date: 'May 15, 2026', title: 'Community pantry launched', content: 'The Maginhawa Community Pantry is officially open. We started with rice, canned goods, and fresh vegetables for 80 families in the neighborhood.' },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sample Community Pantry Campaign | Fundraising.ph',
  description: 'Sample community pantry fundraising campaign for demonstration purposes.',
  publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
  datePublished: '2026-05-15',
}

export default function SampleCommunityPantryPage() {
  return (
    <>
      <SchemaMarkup schemas={[schemaData]} />
      <Navbar />
      <main className="pt-16 md:pt-18">
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />
            <p className="text-amber-800 text-sm font-medium">
              This is a sample campaign for demonstration purposes. No real donations are being collected.
            </p>
          </div>
        </div>

        <section className="bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B] py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-[#C8A951] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/10">
                <Heart className="h-4 w-4" />
                Community Fundraising
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                Maginhawa Community Pantry Extension
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-300 mb-6">
                <span className="flex items-center gap-1.5 text-sm">
                  <UserCheck className="h-4 w-4" />
                  Organized by Maginhawa Mutual Aid
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Clock className="h-4 w-4" />
                  Created May 15, 2026
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Users className="h-4 w-4" />
                  64 donors
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Identity Verified
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <FileText className="h-3.5 w-3.5" />
                  Barangay Clearance Submitted
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Community Verified
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-navy mb-4">Campaign Story</h2>
                  <div className="prose prose-slate max-w-none text-[#4A5568] leading-relaxed space-y-4">
                    <p>
                      The Maginhawa Community Pantry has been a lifeline for families along Maginhawa Street in Quezon City since 2021. What started as a small bamboo cart with a sign that read &ldquo;Magbigay ayon sa kakayahan, kumuha ayon sa pangangailangan&rdquo; has grown into a daily operation serving over a hundred families.
                    </p>
                    <p>
                      Rising food prices and economic challenges have increased the demand for community pantries across Metro Manila. Our current supplies are running low, and we need your help to keep the pantry stocked for the next three months while we work on sustainable partnerships with local farmers and suppliers.
                    </p>
                    <p>
                      The P50,000 we aim to raise will cover rice, canned goods, fresh vegetables, and hygiene kits for approximately 150 families per day over a three-month period. All purchases are made from local vendors and suppliers to support the neighborhood economy.
                    </p>
                    <p>
                      Community pantries embody the bayanihan spirit — neighbors helping neighbors. Every peso donated goes directly to putting food on a family&#39;s table. Together, we can make sure no one in our community goes hungry.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Fund Breakdown</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {fundBreakdown.map((item, i) => (
                      <div key={i} className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-navy">{item.label}</p>
                            <p className="text-sm text-[#4A5568]">{item.percent}% of goal</p>
                          </div>
                        </div>
                        <p className="text-2xl font-black text-[#0A1F44]">{item.amount}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Donor Updates</h2>
                  <div className="space-y-6">
                    {updates.map((update, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="h-4 w-4 text-white" />
                          </div>
                          {i < updates.length - 1 && <div className="w-px h-full bg-slate-200 mt-2" />}
                        </div>
                        <div className="pb-6">
                          <p className="text-xs text-[#4A5568] mb-1">{update.date}</p>
                          <h3 className="font-bold text-navy mb-1">{update.title}</h3>
                          <p className="text-[#4A5568] text-sm leading-relaxed">{update.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#F7F8FA] rounded-[2rem] p-6 border border-slate-100 sticky top-24">
                  <div className="mb-4">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-3xl font-black text-navy">P38,200</span>
                      <span className="text-sm text-[#4A5568]">raised</span>
                    </div>
                    <div className="text-sm text-[#4A5568] mb-3">of P50,000 goal</div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#0A1F44] to-[#2B4C7E] h-3 rounded-full" style={{ width: '76%' }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4A5568] mb-6">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>P38,200 raised by 64 donors</span>
                  </div>
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#0A1F44] to-[#2B4C7E] text-white font-bold py-3 rounded-full hover:opacity-90 transition-opacity mb-3"
                  >
                    Start a Real Campaign
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="text-xs text-center text-[#4A5568]">This is a sample — no real donations accepted.</p>
                </div>

                <div className="bg-[#F7F8FA] rounded-[2rem] p-6 border border-slate-100">
                  <h3 className="font-black text-navy mb-4 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    Verification Status
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { icon: BadgeCheck, text: 'Identity Verified', sub: 'Organizer IDs confirmed' },
                      { icon: FileText, text: 'Barangay Clearance', sub: ' barangay resolution on file' },
                      { icon: UserCheck, text: 'Community Verified', sub: '150+ beneficiary families confirmed' },
                      { icon: CheckCircle2, text: 'Supplier Receipts', sub: 'All purchases documented' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <item.icon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-navy text-sm">{item.text}</p>
                          <p className="text-xs text-[#4A5568]">{item.sub}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F7F8FA] rounded-[2rem] p-6 border border-slate-100">
                  <h3 className="font-black text-navy mb-4 flex items-center gap-2">
                    <Banknote className="h-5 w-5 text-[#C8A951]" />
                    Payout Transparency
                  </h3>
                  <div className="space-y-3 text-sm text-[#4A5568]">
                    <p>Funds are released weekly for fresh produce purchases and monthly for bulk items.</p>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <p className="font-semibold text-navy">Week 1-2 Disbursement</p>
                      <p>P15,000 — Rice and canned goods (bulk)</p>
                      <p className="text-xs text-green-600">Completed May 20, 2026</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <p className="font-semibold text-navy">Week 3-4 Budget</p>
                      <p>P12,000 — Vegetables and hygiene kits</p>
                      <p className="text-xs text-amber-600">Ongoing distribution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Start Your Own Campaign?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Create a verified community fundraising campaign. Help your neighbors and strengthen your community.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-8 py-3 rounded-full hover:bg-[#B8943F] transition-colors"
            >
              <Heart className="h-5 w-5" />
              Start a Campaign Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
