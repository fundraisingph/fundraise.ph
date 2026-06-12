import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Banknote,
  FileText,
  UserCheck,
  BadgeCheck,
  ArrowRight,
  TrendingUp,
  CloudRain,
  Home,
  Droplets,
  Stethoscope,
  Utensils,
  MessageSquare,
  Users,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Sample Disaster Relief Campaign | Fundraising.ph',
  description:
    'Sample disaster relief fundraising campaign demonstrating how Fundraising.ph works. This is a demo campaign for Typhoon Relief for Bicol Families.',
  openGraph: {
    title: 'Sample Disaster Relief Campaign | Fundraising.ph',
    description: 'Sample disaster relief fundraising campaign for demonstration purposes.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const fundBreakdown = [
  { icon: Utensils, label: 'Food Packs (500 families)', amount: 'P350,000', percent: 35 },
  { icon: Home, label: 'Shelter Materials', amount: 'P300,000', percent: 30 },
  { icon: Droplets, label: 'Water Purification', amount: 'P150,000', percent: 15 },
  { icon: Stethoscope, label: 'Medical Supplies', amount: 'P200,000', percent: 20 },
]

const updates = [
  { date: 'June 9, 2026', title: 'Second wave of relief distribution', content: 'Our team has distributed food packs and clean water to an additional 200 families in Albay and Camarines Sur. Medical missions have treated 340 patients so far.' },
  { date: 'May 30, 2026', title: 'First relief trucks deployed', content: 'Three trucks carrying food packs, shelter materials, and water purification supplies arrived in Legazpi City. Distribution to 300 families in evacuation centers has begun.' },
  { date: 'May 20, 2026', title: 'Emergency campaign launched', content: 'Typhoon Cristina has devastated parts of the Bicol region. We are launching this emergency relief campaign to provide immediate assistance to affected families.' },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sample Disaster Relief Campaign | Fundraising.ph',
  description: 'Sample disaster relief fundraising campaign for demonstration purposes.',
  publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
  datePublished: '2026-05-20',
}

export default function SampleDisasterReliefPage() {
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
                <CloudRain className="h-4 w-4" />
                Disaster Relief
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                Typhoon Relief for Bicol Families
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-300 mb-6">
                <span className="flex items-center gap-1.5 text-sm">
                  <UserCheck className="h-4 w-4" />
                  Organized by Bicol Relief Network
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Clock className="h-4 w-4" />
                  Created May 20, 2026
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Users className="h-4 w-4" />
                  412 donors
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Identity Verified
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <FileText className="h-3.5 w-3.5" />
                  LGU Coordination Confirmed
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Expedition Approved
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
                      Typhoon Cristina made landfall in the Bicol region on May 18, 2026, bringing torrential rains and winds exceeding 150 km/h. The storm triggered widespread flooding and landslides across Albay, Camarines Sur, and Sorsogon, displacing over 15,000 families and destroying homes, livelihoods, and infrastructure.
                    </p>
                    <p>
                      Emergency response teams from the Bicol Relief Network, a coalition of local NGOs and community organizations, were deployed within hours of the typhoon&#39;s landfall. Our volunteers on the ground report critical shortages of food, clean drinking water, shelter materials, and medical supplies in evacuation centers across the region.
                    </p>
                    <p>
                      We are raising P1,000,000 to provide comprehensive relief assistance to 500 of the most affected families. Each family will receive a food pack good for two weeks, clean water through portable purification systems, basic shelter repair materials, and access to medical consultations and essential medicines.
                    </p>
                    <p>
                      The Bicol region is no stranger to typhoons, but Cristina has been particularly devastating. Many of the affected families are farmers and fisherfolk who have lost their livelihoods overnight. Your donation will provide immediate relief and help these families begin the long process of rebuilding their lives.
                    </p>
                    <p>
                      All relief operations are coordinated with local government units and the DSWD to ensure efficient and transparent distribution of aid. We provide daily updates with photos and distribution reports.
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
                      <span className="text-3xl font-black text-navy">P725,000</span>
                      <span className="text-sm text-[#4A5568]">raised</span>
                    </div>
                    <div className="text-sm text-[#4A5568] mb-3">of P1,000,000 goal</div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#0A1F44] to-[#2B4C7E] h-3 rounded-full" style={{ width: '72%' }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4A5568] mb-6">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>P725,000 raised by 412 donors</span>
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
                      { icon: BadgeCheck, text: 'Identity Verified', sub: 'Organization registration confirmed' },
                      { icon: FileText, text: 'LGU Coordination', sub: 'Albay & CamSur DSWD endorsed' },
                      { icon: UserCheck, text: 'Ground Team Verified', sub: 'Volunteer IDs on file' },
                      { icon: CheckCircle2, text: 'Distribution Reports', sub: 'GPS-tagged delivery confirmations' },
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
                    <p>Funds are released in phases as relief operations progress on the ground.</p>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <p className="font-semibold text-navy">Phase 1 — Emergency Food &amp; Water</p>
                      <p>P350,000 disbursed to supply partners</p>
                      <p className="text-xs text-green-600">Completed May 28, 2026</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <p className="font-semibold text-navy">Phase 2 — Shelter &amp; Medical</p>
                      <p>P375,000 allocated for materials and meds</p>
                      <p className="text-xs text-amber-600">In progress — ongoing distribution</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <p className="font-semibold text-navy">Phase 3 — Rehabilitation</p>
                      <p>P275,000 — pending full fundraising</p>
                      <p className="text-xs text-slate-500">Target: July 2026</p>
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
              Launch an emergency relief campaign in minutes. Get verified and start receiving support right away.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-8 py-3 rounded-full hover:bg-[#B8943F] transition-colors"
            >
              <CloudRain className="h-5 w-5" />
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
