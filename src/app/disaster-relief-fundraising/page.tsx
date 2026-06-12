import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, CloudRain, ShieldCheck, Eye, Zap, ArrowRight, HelpCircle, Heart, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { AuthorBox } from '@/components/AuthorBox'
import { ProofBlock } from '@/components/ProofBlock'
import { InternalLinks } from '@/components/InternalLinks'
import { AnswerBlock } from '@/components/AnswerBlock'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Disaster Relief Fundraising Philippines | Fundraising.ph',
  description: 'Start a verified disaster relief fundraising campaign in the Philippines. Raise funds for typhoon, earthquake, and flood relief with rapid verification and full transparency on Fundraising.ph.',
  keywords: [
    'disaster relief fundraising Philippines',
    'typhoon fundraising PH',
    'earthquake relief Philippines',
    'flood relief crowdfunding',
    'emergency fundraising Philippines',
    'calamity fundraising PH',
    'disaster campaign verification',
    'Filipino disaster relief',
  ],
  openGraph: {
    title: 'Disaster Relief Fundraising Philippines | Fundraising.ph',
    description: 'Start a verified disaster relief fundraising campaign in the Philippines. Rapid verification, full transparency.',
    siteName: 'Fundraising.ph',
    type: 'article',
  },
}

const faqItems = [
  {
    question: 'How quickly can a disaster relief campaign go live?',
    answer: 'For declared emergencies and natural disasters, we offer an expedited verification process. Campaigns can go live within hours of submission, provided basic identity verification is complete. Full document review follows after the campaign is live.',
  },
  {
    question: 'What types of disasters can I fundraise for?',
    answer: 'You can fundraise for typhoon relief, earthquake recovery, flood assistance, volcanic eruption evacuation, fire relief, landslide support, and other natural or man-made disasters affecting Filipino communities.',
  },
  {
    question: 'How are disaster campaigns verified during emergencies?',
    answer: 'We use a two-phase approach: rapid identity verification to get the campaign live quickly, followed by full document review including photos, local government declarations, and beneficiary verification. Verification status is updated publicly.',
  },
  {
    question: 'What transparency requirements apply to disaster campaigns?',
    answer: 'Disaster campaigns must provide regular updates on fund usage, photos of relief distribution, itemized lists of purchased goods or services, and a post-campaign impact report. All updates are visible to donors on the campaign page.',
  },
  {
    question: 'How can donors verify that disaster campaigns are legitimate?',
    answer: 'Donors can check the campaign\'s verification status, review uploaded documents, see the organizer\'s verified identity, read community reports, and track fund disbursement updates. Our trust framework ensures multiple layers of accountability.',
  },
  {
    question: 'Can I fundraise for a specific community or barangay?',
    answer: 'Yes. Campaigns can target specific communities, barangays, municipalities, or regions affected by a disaster. Include location details, number of affected families, and specific relief needs in your campaign description.',
  },
  {
    question: 'What documents are needed for disaster relief campaigns?',
    answer: 'For rapid verification, a valid government ID and photos of the disaster impact area are sufficient to get started. Full verification requires local government declarations, beneficiary lists, itemized relief budgets, and coordination details with local DSWD or LGU offices.',
  },
]

const contentSections = [
  { icon: CloudRain, title: 'Typhoons, Earthquakes & Floods', description: 'The Philippines is one of the most disaster-prone countries in the world. Our platform supports campaigns for all types of natural disasters including typhoons, earthquakes, floods, volcanic eruptions, and landslides.' },
  { icon: Zap, title: 'Rapid Verification for Emergencies', description: 'Emergency campaigns receive priority verification. We verify the organizer\'s identity first to get the campaign live, then conduct full beneficiary and document verification while donations are already being collected.' },
  { icon: Eye, title: 'Transparency in Disaster Relief', description: 'All disaster campaigns must provide itemized fund usage, photos of relief distribution, regular donor updates, and post-campaign impact reports. Transparency is not optional — it is essential for trust.' },
  { icon: ShieldCheck, title: 'How Donors Verify Campaigns', description: 'Donors can review verification status, uploaded documents, organizer identity, community reports, and fund tracking updates. Our multi-layer accountability system helps donors give with confidence.' },
  { icon: AlertTriangle, title: 'What Documents Are Needed', description: 'Rapid launch requires a valid ID and disaster impact photos. Full verification adds local government declarations, beneficiary lists, itemized relief budgets, and DSWD or LGU coordination details.' },
  { icon: Heart, title: 'After the Disaster', description: 'Post-disaster campaigns for rebuilding homes, restoring livelihoods, and long-term recovery are equally important. These campaigns receive the same verification and transparency standards as immediate relief campaigns.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Disaster Relief Fundraising Philippines',
  description: 'Start a verified disaster relief fundraising campaign in the Philippines. Raise funds for typhoon, earthquake, and flood relief.',
  author: { '@type': 'Organization', name: 'Fundraising.ph' },
  publisher: { '@type': 'Organization', name: 'Fundraising.ph' },
  datePublished: '2026-01-01',
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

export default function DisasterReliefFundraisingPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema]} />
      <Navbar />
      <main className="pt-16 md:pt-18">
        <section className="relative bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B] overflow-hidden">
          <div className="absolute inset-0 pattern-overlay" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-[#C8A951] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/10">
                <AlertTriangle className="h-4 w-4" />
                Disaster Relief
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Disaster Relief Fundraising Philippines
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                Raise funds for typhoon, earthquake, and flood relief through rapidly verified campaigns with full transparency on Fundraising.ph.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-bold px-6 py-3 rounded-full hover:bg-[#B8943F] transition-colors">
                <Heart className="h-5 w-5" />
                Start a Relief Campaign
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AnswerBlock
              question="How does disaster relief fundraising work in the Philippines?"
              answer="Disaster relief fundraising on Fundraising.ph uses an expedited verification process for emergencies. Organizers can create a campaign and begin receiving donations within hours. Identity verification happens first, followed by full document and beneficiary review. All funds are tracked and campaigners must provide transparent updates on how relief goods and funds are distributed."
            />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Disaster Relief Guide</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">Rapid response fundraising for when Filipinos need it most.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentSections.map((section, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] shadow-lg p-8 border border-slate-100 hover:border-[#C8A951]/20 transition-all duration-200">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center mb-4">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-black text-navy text-lg mb-2">{section.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <ProofBlock
              title="Fast, Transparent, Accountable"
              description="When disaster strikes, every minute and every peso counts. Our rapid verification system ensures help arrives quickly — with full accountability."
              items={[
                { icon: 'shield', label: 'Rapid Identity Verification', description: 'Organizer identity verified within hours for emergency campaigns to get help flowing fast.' },
                { icon: 'check', label: 'Fund Tracking', description: 'Every peso tracked from donation to distribution with itemized reporting.' },
                { icon: 'file', label: 'Distribution Proof', description: 'Photos and documentation of relief goods purchased and distributed to beneficiaries.' },
                { icon: 'users', label: 'Community Verification', description: 'Local leaders and community members can confirm the legitimacy of disaster campaigns.' },
              ]}
            />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
              <HelpCircle className="h-10 w-10 text-[#2B4C7E] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <SEOBlock items={faqItems} />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AuthorBox lastUpdated="2026-06-10" />
          </div>
        </section>

        <section className="bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <InternalLinks
              title="Explore More"
              links={[
                { href: '/', label: 'Start a Campaign', description: 'Launch a disaster relief fundraising campaign.' },
                { href: '/fundraising-guide', label: 'Fundraising Guide', description: 'Complete step-by-step guide to starting a campaign.' },
                { href: '/community-fundraising', label: 'Community Fundraising', description: 'Support local community rebuilding projects.' },
                { href: '/medical-fundraising', label: 'Medical Fundraising', description: 'Medical campaigns for disaster-related injuries.' },
                { href: '/trust', label: 'Trust & Transparency', description: 'Our full trust and accountability framework.' },
                { href: '/how-it-works', label: 'How It Works', description: 'Understand the full platform workflow.' },
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
