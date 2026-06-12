import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Banknote,
  FileText,
  UserCheck,
  BadgeCheck,
  ArrowRight,
  TrendingUp,
  BookOpen,
  PenTool,
  Backpack,
  Shirt,
  MessageSquare,
  Users,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Sample School Fundraising Campaign | Fundraising.ph',
  description:
    'Sample school supply fundraising campaign demonstrating how Fundraising.ph works. This is a demo campaign for School Supplies for 200 Students in Tondo.',
  openGraph: {
    title: 'Sample School Fundraising Campaign | Fundraising.ph',
    description: 'Sample school supply fundraising campaign for demonstration purposes.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const fundBreakdown = [
  { icon: BookOpen, label: 'Notebooks & Paper', amount: 'P35,000', percent: 23 },
  { icon: PenTool, label: 'Pens, Pencils & Supplies', amount: 'P25,000', percent: 17 },
  { icon: Backpack, label: 'School Bags', amount: 'P50,000', percent: 33 },
  { icon: Shirt, label: 'School Uniforms', amount: 'P40,000', percent: 27 },
]

const updates = [
  { date: 'June 5, 2026', title: 'First batch of supplies distributed', content: 'We distributed school bags and notebooks to 80 students at Rajah Soliman Elementary School. The children were so excited to have new supplies for the school year.' },
  { date: 'May 22, 2026', title: 'Purchasing phase begins', content: 'With the initial funds raised, we have started purchasing school bags and notebooks in bulk from local suppliers at discounted prices.' },
  { date: 'May 10, 2026', title: 'Campaign launched', content: 'Our campaign to provide school supplies to 200 students in Tondo is now live. Every contribution helps a child start the school year right.' },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sample School Fundraising Campaign | Fundraising.ph',
  description: 'Sample school supply fundraising campaign for demonstration purposes.',
  publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
  datePublished: '2026-05-10',
}

export default function SampleSchoolPage() {
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
                <GraduationCap className="h-4 w-4" />
                Education Fundraising
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                School Supplies for 200 Students in Tondo
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-300 mb-6">
                <span className="flex items-center gap-1.5 text-sm">
                  <UserCheck className="h-4 w-4" />
                  Organized by Tondo Youth Volunteers
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Clock className="h-4 w-4" />
                  Created May 10, 2026
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Users className="h-4 w-4" />
                  89 donors
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Identity Verified
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <FileText className="h-3.5 w-3.5" />
                  Partner School Confirmed
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Beneficiary Verified
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
                      In the heart of Tondo, Manila, hundreds of children begin each school year without the basic supplies they need to learn. Many families struggle to put food on the table, let alone purchase notebooks, pens, and school bags for their children.
                    </p>
                    <p>
                      Tondo Youth Volunteers, a community organization founded in 2022, has been working to bridge this gap. This year, we aim to provide complete school supply kits to 200 students at Rajah Soliman Elementary School and Isabelo del Rosario Elementary School.
                    </p>
                    <p>
                      Each kit includes a sturdy school bag, five notebooks, pens and pencils, a ruler, an eraser, and a school uniform. The total cost per student is approximately P750, and our goal is to raise P150,000 to cover all 200 students.
                    </p>
                    <p>
                      Education is the most powerful tool we can give these children. With the right supplies, they can focus on learning instead of worrying about what they don&#39;t have. Every donation, no matter the amount, makes a real difference in a child&#39;s education.
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
                      <span className="text-3xl font-black text-navy">P98,500</span>
                      <span className="text-sm text-[#4A5568]">raised</span>
                    </div>
                    <div className="text-sm text-[#4A5568] mb-3">of P150,000 goal</div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#0A1F44] to-[#2B4C7E] h-3 rounded-full" style={{ width: '66%' }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4A5568] mb-6">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>P98,500 raised by 89 donors</span>
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
                      { icon: FileText, text: 'Partner School Confirmed', sub: 'Rajah Soliman ES & Isabelo del Rosario ES' },
                      { icon: UserCheck, text: 'Beneficiary Verified', sub: '200 student names confirmed with school' },
                      { icon: CheckCircle2, text: 'Supplier Quotations Reviewed', sub: 'Bulk pricing verified' },
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
                    <p>Funds are released in phases as supplies are purchased and distributed.</p>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <p className="font-semibold text-navy">Phase 1 — School Bags & Notebooks</p>
                      <p>P60,000 disbursed to verified supplier</p>
                      <p className="text-xs text-green-600">Completed May 30, 2026</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <p className="font-semibold text-navy">Phase 2 — Uniforms & Remaining Supplies</p>
                      <p>P38,500 — Pending distribution</p>
                      <p className="text-xs text-amber-600">Target: June 15, 2026</p>
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
              Create a verified fundraising campaign in minutes. Support education and empower Filipino students.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-8 py-3 rounded-full hover:bg-[#B8943F] transition-colors"
            >
              <GraduationCap className="h-5 w-5" />
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
