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
  Package,
  BookOpen,
  Building2,
  Armchair,
  MessageSquare,
  Users,
  Truck,
  Heart,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Sample Product-Based Fundraising Campaign | Fundraising.ph',
  description:
    'Sample product-based fundraising campaign demonstrating how Fundraising.ph works. This is a demo campaign for Chocolates for a Cause: Building a School Library.',
  openGraph: {
    title: 'Sample Product-Based Fundraising Campaign | Fundraising.ph',
    description: 'Sample product-based fundraising campaign for demonstration purposes.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const fundBreakdown = [
  { icon: Building2, label: 'Library Construction', amount: 'P100,000', percent: 50 },
  { icon: BookOpen, label: 'Books & Learning Materials', amount: 'P60,000', percent: 30 },
  { icon: Armchair, label: 'Furniture & Shelving', amount: 'P40,000', percent: 20 },
]

const updates = [
  { date: 'June 6, 2026', title: '300 boxes sold — halfway to goal', content: 'We have sold 300 boxes of artisan chocolates, bringing us to P30,000 in fundraising proceeds. Thank you to everyone who supported by purchasing and sharing.' },
  { date: 'May 25, 2026', title: 'New flavors added', content: 'Due to popular demand, we have added two new flavors: Davao Dark Chocolate and Bohol Cacao Crunch. Each box still contributes P100 to the library fund.' },
  { date: 'May 12, 2026', title: 'Product fundraiser launched', content: 'Chocolates for a Cause is now live. Every box of artisan chocolate you purchase contributes directly to building a school library for San Isidro Elementary School.' },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sample Product-Based Fundraising Campaign | Fundraising.ph',
  description: 'Sample product-based fundraising campaign for demonstration purposes.',
  publisher: { '@type': 'Organization', name: 'Fundraise.ph' },
  datePublished: '2026-05-12',
}

export default function SampleProductFundraiserPage() {
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
                <Package className="h-4 w-4" />
                Product Fundraiser
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                Chocolates for a Cause: Building a School Library
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-300 mb-6">
                <span className="flex items-center gap-1.5 text-sm">
                  <UserCheck className="h-4 w-4" />
                  Organized by San Isidro PTA
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Clock className="h-4 w-4" />
                  Created May 12, 2026
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Users className="h-4 w-4" />
                  156 supporters
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Identity Verified
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <FileText className="h-3.5 w-3.5" />
                  Product Quality Verified
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  School Verified
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
                      San Isidro Elementary School in Laguna has over 800 students but no library. For years, teachers and parents have dreamed of creating a dedicated reading space where children can discover the joy of books and develop a love for learning.
                    </p>
                    <p>
                      The San Isidro Parent-Teacher Association has partnered with a local artisan chocolate maker to launch Chocolates for a Cause — a product-based fundraiser where every box of premium artisan chocolates sold contributes directly to building a school library.
                    </p>
                    <p>
                      Each box of artisan chocolate is priced at P300, of which P100 goes directly to the library construction fund. The chocolates are handcrafted using locally sourced cacao from Davao and Bohol, supporting Filipino farmers while raising funds for education.
                    </p>
                    <p>
                      Our goal is to sell 2,000 boxes to raise P200,000, which will cover the construction of a 30-square-meter library space, 500 books and learning materials, and child-friendly furniture and bookshelves. The school has already allocated a room for the library — we just need the funds to bring it to life.
                    </p>
                    <p>
                      By purchasing a box of Chocolates for a Cause, you get a delicious treat while helping build a brighter future for hundreds of Filipino students.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-navy mb-4">Product Details</h2>
                  <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-[#4A5568]">Product</p>
                        <p className="font-bold text-navy">Artisan Chocolate Box</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#4A5568]">Price</p>
                        <p className="font-bold text-navy">P300 per box</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#4A5568]">Campaign Contribution</p>
                        <p className="font-bold text-green-600">P100 per box</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#4A5568]">Variants</p>
                        <p className="font-bold text-navy">4 flavors available</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#4A5568]">
                      Flavors: Davao Dark (72% cacao), Bohol Cacao Crunch, Mindanao Milk, and Tablea Spice.
                      Each box contains 12 handcrafted chocolates.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Fund Breakdown</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {fundBreakdown.map((item, i) => (
                      <div key={i} className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-navy text-sm">{item.label}</p>
                            <p className="text-xs text-[#4A5568]">{item.percent}% of goal</p>
                          </div>
                        </div>
                        <p className="text-xl font-black text-[#0A1F44]">{item.amount}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Fulfillment Process</h2>
                  <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100 space-y-4">
                    {[
                      { step: '1', title: 'Order Placed', desc: 'Customer selects chocolate flavors and quantity.' },
                      { step: '2', title: 'Production', desc: 'Chocolates are handcrafted fresh within 3 business days.' },
                      { step: '3', title: 'Shipping', desc: 'Packed and shipped via partner courier with tracking.' },
                      { step: '4', title: 'Delivery', desc: 'Delivered within 5-7 business days nationwide.' },
                      { step: '5', title: 'Fund Allocation', desc: 'P100 per box is allocated to the library fund monthly.' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">{item.step}</span>
                        </div>
                        <div>
                          <p className="font-bold text-navy text-sm">{item.title}</p>
                          <p className="text-[#4A5568] text-sm">{item.desc}</p>
                        </div>
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
                      <span className="text-3xl font-black text-navy">P30,000</span>
                      <span className="text-sm text-[#4A5568]">raised</span>
                    </div>
                    <div className="text-sm text-[#4A5568] mb-3">of P200,000 goal</div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#0A1F44] to-[#2B4C7E] h-3 rounded-full" style={{ width: '15%' }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4A5568] mb-2">
                    <Package className="h-4 w-4 text-[#C8A951]" />
                    <span>300 boxes sold (P100 each to fund)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4A5568] mb-6">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>156 supporters and counting</span>
                  </div>
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#0A1F44] to-[#2B4C7E] text-white font-bold py-3 rounded-full hover:opacity-90 transition-opacity mb-3"
                  >
                    Start a Real Campaign
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="text-xs text-center text-[#4A5568]">This is a sample — no real purchases accepted.</p>
                </div>

                <div className="bg-[#F7F8FA] rounded-[2rem] p-6 border border-slate-100">
                  <h3 className="font-black text-navy mb-4 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    Verification Status
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { icon: BadgeCheck, text: 'Identity Verified', sub: 'PTA officers IDs confirmed' },
                      { icon: FileText, text: 'Product Quality Verified', sub: 'FDA registration and lab tested' },
                      { icon: UserCheck, text: 'School Verified', sub: 'San Isidro ES, Laguna confirmed' },
                      { icon: CheckCircle2, text: 'Supplier Verified', sub: 'Chocolate maker business permits on file' },
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
                    <p>Campaign contributions (P100/box) are held in escrow and released in tranches based on project milestones.</p>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <p className="font-semibold text-navy">First Tranche — Books &amp; Materials</p>
                      <p>P30,000 accumulated from 300 boxes</p>
                      <p className="text-xs text-amber-600">Escrow — target release at P50,000</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <p className="font-semibold text-navy">Second Tranche — Construction</p>
                      <p>P100,000 for library build-out</p>
                      <p className="text-xs text-slate-500">Pending — target: August 2026</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F7F8FA] rounded-[2rem] p-6 border border-slate-100">
                  <h3 className="font-black text-navy mb-4 flex items-center gap-2">
                    <Truck className="h-5 w-5 text-[#2B4C7E]" />
                    Shipping Info
                  </h3>
                  <div className="space-y-2 text-sm text-[#4A5568]">
                    <p>Metro Manila: 3-5 business days</p>
                    <p>Provincial: 5-7 business days</p>
                    <p>Free shipping on orders of 5+ boxes</p>
                    <p className="text-xs text-slate-400 mt-2">Sample data — not a real product listing.</p>
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
              Launch a product-based fundraiser and turn every sale into a donation. Create, sell, and make a difference.
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
