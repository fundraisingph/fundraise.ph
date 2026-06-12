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
  Building2,
  Pill,
  Bus,
  MessageSquare,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Sample Medical Fundraising Campaign | Fundraising.ph',
  description:
    'Sample medical fundraising campaign demonstrating how Fundraising.ph works. This is a demo campaign for Help Maria Fight Breast Cancer.',
  openGraph: {
    title: 'Sample Medical Fundraising Campaign | Fundraising.ph',
    description: 'Sample medical fundraising campaign for demonstration purposes.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const fundBreakdown = [
  { icon: Building2, label: 'Hospital Bills', amount: 'P250,000', percent: 50 },
  { icon: Pill, label: 'Chemotherapy Sessions', amount: 'P150,000', percent: 30 },
  { icon: Heart, label: 'Medications', amount: 'P60,000', percent: 12 },
  { icon: Bus, label: 'Transportation', amount: 'P40,000', percent: 8 },
]

const updates = [
  { date: 'June 8, 2026', title: 'Third chemotherapy session completed', content: 'Maria completed her third chemotherapy session at Philippine General Hospital. She is responding well to treatment and her doctors are optimistic.' },
  { date: 'May 25, 2026', title: 'Second round of chemotherapy started', content: 'Thank you to all donors! Maria has begun her second round of chemotherapy. The funds raised so far have covered the first two sessions.' },
  { date: 'May 10, 2026', title: 'Campaign launched and first donations received', content: 'We are overwhelmed by the generosity of everyone. Maria sends her heartfelt gratitude to each and every donor.' },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sample Medical Fundraising Campaign | Fundraising.ph',
  description: 'Sample medical fundraising campaign for demonstration purposes.',
  publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
  datePublished: '2026-05-10',
}

export default function SampleMedicalPage() {
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
                Medical Fundraising
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                Help Maria Fight Breast Cancer
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-300 mb-6">
                <span className="flex items-center gap-1.5 text-sm">
                  <UserCheck className="h-4 w-4" />
                  Organized by Maria&#39;s Family
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Clock className="h-4 w-4" />
                  Created May 10, 2026
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Heart className="h-4 w-4" />
                  127 donors
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Identity Verified
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <FileText className="h-3.5 w-3.5" />
                  Medical Documents Reviewed
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
                      Maria Santos is a 45-year-old mother of three from Manila. For over 15 years, she has worked as a public school teacher, dedicating her life to educating the next generation of Filipinos. In April 2026, Maria was diagnosed with Stage 2 breast cancer at the Philippine General Hospital.
                    </p>
                    <p>
                      As a single mother raising three children aged 10, 14, and 17, Maria has limited financial resources. Her PhilHealth coverage only extends to a portion of the treatment costs, and the family&#39;s savings have already been depleted by diagnostic tests and initial consultations.
                    </p>
                    <p>
                      Maria&#39;s oncologist, Dr. Reyes at PGH, has recommended a treatment plan consisting of six chemotherapy sessions followed by surgery. The total estimated cost is P500,000 — an amount that is far beyond what the family can afford on their own.
                    </p>
                    <p>
                      Despite the challenges, Maria remains positive and determined. She says, &ldquo;I want to see my children graduate. I want to continue teaching. I am fighting for my family.&rdquo;
                    </p>
                    <p>
                      All funds raised through this campaign will go directly toward Maria&#39;s medical expenses. Every donation, no matter how small, brings Maria one step closer to recovery.
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
                      <span className="text-3xl font-black text-navy">P320,000</span>
                      <span className="text-sm text-[#4A5568]">raised</span>
                    </div>
                    <div className="text-sm text-[#4A5568] mb-3">of P500,000 goal</div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#0A1F44] to-[#2B4C7E] h-3 rounded-full" style={{ width: '64%' }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4A5568] mb-6">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>P320,000 raised by 127 donors</span>
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
                      { icon: BadgeCheck, text: 'Identity Verified', sub: 'Government ID confirmed' },
                      { icon: FileText, text: 'Medical Documents Reviewed', sub: 'Diagnosis and treatment plan verified' },
                      { icon: UserCheck, text: 'Beneficiary Verified', sub: 'Direct relationship confirmed' },
                      { icon: CheckCircle2, text: 'Hospital Confirmed', sub: 'PGH records validated' },
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
                    <p>Funds are disbursed directly to Philippine General Hospital for each treatment phase.</p>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <p className="font-semibold text-navy">First Disbursement</p>
                      <p>P150,000 — Chemotherapy Sessions 1-2</p>
                      <p className="text-xs text-green-600">Completed May 28, 2026</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <p className="font-semibold text-navy">Next Disbursement</p>
                      <p>P170,000 — Chemotherapy Sessions 3-4</p>
                      <p className="text-xs text-amber-600">Pending — Target: June 20, 2026</p>
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
              Create a verified fundraising campaign in minutes. Get the support you need with full transparency.
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
