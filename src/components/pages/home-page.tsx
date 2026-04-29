'use client'

import Link from 'next/link'
import { useNavigation } from '@/lib/navigation'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { Hero } from '@/components/shared/hero'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTAButton } from '@/components/shared/cta-button'
import { TrustPillar } from '@/components/shared/trust-pillar'
import { SEOBlock } from '@/components/shared/seo-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  ShieldCheck,
  Eye,
  Scale,
  HeartHandshake,
  Cpu,
  CheckCircle2,
  Circle,
  CircleDot,
  Store,
  Candy,
  Users,
  Globe,
  Lightbulb,
  BookOpen,
  FileCheck,
  ArrowRight,
} from 'lucide-react'

/* ── Roadmap data ── */
const roadmapItems = [
  { label: 'Establish the Nonprofit Trust Foundation', progress: 100 },
  { label: 'Build the Trust, Verification & Compliance Layer', progress: 85 },
  { label: 'Launch Fundraising.ph Platform MVP', progress: 60 },
  { label: 'Prove the Model with Serg\'s Chocolates', progress: 50 },
  { label: 'Activate Marketplace Fundraising', progress: 40 },
  { label: 'Build the Public Impact & Transparency Dashboard', progress: 35 },
  { label: 'Engage the Global Filipino Diaspora', progress: 30 },
  { label: 'Build Institutional Partnerships', progress: 20 },
  { label: 'Create Open Data, Research & Policy', progress: 15 },
]

function getProgressIcon(progress: number) {
  if (progress === 100) return <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
  if (progress >= 50) return <CircleDot className="h-5 w-5 text-trust-blue shrink-0" />
  return <Circle className="h-5 w-5 text-[#4A5568] shrink-0" />
}

function getProgressLabel(progress: number) {
  if (progress === 100) return 'Complete'
  if (progress >= 75) return 'Near Complete'
  if (progress >= 50) return 'In Progress'
  if (progress >= 25) return 'Building'
  return 'Planned'
}

/* ── Why We Exist items ── */
const whyWeExistItems = [
  { icon: ShieldCheck, text: 'Trust must be earned and verified, not assumed' },
  { icon: Eye, text: 'Verification protects both donors and beneficiaries' },
  { icon: BookOpen, text: 'Documentation and receipts should be standard, not optional' },
  { icon: Scale, text: 'Compliance guidance reduces risk for campaign organizers' },
  { icon: Eye, text: 'Transparent fund flows build lasting donor confidence' },
  { icon: HeartHandshake, text: 'Donor acknowledgment strengthens the culture of giving' },
  { icon: Users, text: 'Accountability transforms one-time donations into lasting impact' },
]

/* ── Trust Pillars data ── */
const pillars = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Verification',
    description:
      'Every campaign on Fundraising.ph goes through a multi-layered verification process — identity checks, documentation review, and ongoing monitoring — so donors know their contributions reach real people with real needs.',
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Transparency',
    description:
      'Full visibility into fund flows, campaign milestones, and beneficiary updates. We publish regular impact reports and make all compliance documentation publicly accessible.',
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: 'Compliance Guidance',
    description:
      'We help campaign organizers navigate Philippine fundraising regulations, SEC guidelines, and international compliance requirements — reducing risk and building public confidence.',
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: 'Donor Acknowledgment',
    description:
      'Every donor receives proper acknowledgment, official receipts, and impact updates. We believe gratitude is not optional — it is foundational to sustainable giving.',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Technology for Bayanihan',
    description:
      'We build and maintain the digital infrastructure that powers Fundraising.ph — from verification engines to marketplace fundraising tools — ensuring bayanihan thrives in the digital age.',
  },
]

/* ── SEO FAQ items ── */
const seoItems = [
  {
    question: 'What is Fundraise.ph?',
    answer:
      'Fundraise.ph is a nonprofit trust organization that builds the verification, transparency, and compliance infrastructure for Filipino digital fundraising. We are not a fundraising platform — we are the trust layer that ensures fundraising is done right.',
  },
  {
    question: 'Is Fundraise.ph the same as Fundraising.ph?',
    answer:
      'No. Fundraise.ph is the nonprofit trust and governance organization that sets standards and verifies campaigns. Fundraising.ph is the actual fundraising platform where campaigns are created and donations are made. Together, they form a complete ecosystem of trusted Filipino giving.',
  },
  {
    question: 'How does Fundraise.ph verify campaigns?',
    answer:
      'We use a multi-layered verification process including identity checks, documentation review, fund flow monitoring, and ongoing compliance assessment. Every campaign must meet our trust standards before receiving a verified badge on Fundraising.ph.',
  },
  {
    question: 'Who can use Fundraising.ph?',
    answer:
      'Fundraising.ph is open to individuals, nonprofits, and organizations that need to raise funds for legitimate causes — from medical bills and disaster relief to education and community projects. All campaigns must pass through Fundraise.ph verification.',
  },
  {
    question: 'Is my donation safe on Fundraising.ph?',
    answer:
      'Yes. Fundraising.ph is powered by the trust framework built by Fundraise.ph, which includes campaign verification, transparent fund tracking, donor acknowledgment, and compliance guidance. Every donation is accounted for and traceable.',
  },
]

export function HomePage() {
  const { navigate } = useNavigation()
  const { current: heroVar } = useRotatingContent(heroVariations['home'])

  return (
    <div>
      {/* ===== 1. HERO ===== */}
      <Hero
        badge="Nonprofit Trust Organization"
        headline={heroVar.headline}
        subheadline={heroVar.subheadline}
        variation={heroVar}
      >
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <CTAButton onClick={() => navigate('why-we-exist')} variant="primary" size="lg">
            Learn Why We Exist
          </CTAButton>
        </div>
      </Hero>

      {/* ===== 2. WHAT IS FUNDRAISE.PH? ===== */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="What Is Fundraise.ph?"
            subtitle="Understanding the two pillars of trusted Filipino fundraising"
            centered
          />
          <p className="text-[#1A1A2E] text-lg leading-relaxed mb-6">
            <strong className="text-navy font-bold">Fundraise.ph</strong> is the nonprofit mission and
            governance organization that sets the standards, policies, and trust framework for
            Filipino digital fundraising. We are not a fundraising platform ourselves — we are the
            trust layer that ensures fundraising is done right.
          </p>
          <p className="text-[#1A1A2E] text-lg leading-relaxed mb-8">
            <strong className="text-navy font-bold">Fundraising.ph</strong> is the actual fundraising
            platform where campaigns are created, donations are made, and impact is delivered.
            Together, Fundraise.ph and Fundraising.ph form a complete ecosystem of trusted,
            transparent, and accountable giving for Filipinos.
          </p>
        </div>
      </Section>

      {/* ===== 3. WHY WE EXIST ===== */}
      <Section dark>
        <SectionHeading
          title="Why We Exist"
          subtitle="Filipino giving deserves more than good intentions — it deserves infrastructure built on trust, accountability, and transparency."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {whyWeExistItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border/50"
              >
                <div className="mt-0.5 p-2 rounded-lg bg-gold/10 text-gold shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-[#1A1A2E] font-medium leading-relaxed">{item.text}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center">
          <CTAButton onClick={() => navigate('why-we-exist')} variant="primary" size="lg">
            Read Our Full Story
          </CTAButton>
        </div>
      </Section>

      {/* ===== 4. OUR TRUST PILLARS ===== */}
      <Section>
        <SectionHeading
          title="Our Trust Pillars"
          subtitle="Five foundational pillars uphold every campaign, every donation, and every relationship within the Fundraise.ph ecosystem."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <TrustPillar
              key={idx}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </Section>

      {/* ===== 5. FUNDRAISE.PH VS FUNDRAISING.PH ===== */}
      <Section dark>
        <SectionHeading
          title="Fundraise.ph vs Fundraising.ph"
          subtitle="Two organizations, one mission: trusted Filipino giving. Here's how they work together."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Fundraise.ph Card */}
          <Card className="border-2 border-navy/30 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-navy/10 text-navy">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-navy">Fundraise.ph</CardTitle>
              </div>
              <Badge className="w-fit bg-navy/10 text-navy border-navy/20">
                Nonprofit Trust & Governance
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                The nonprofit organization that builds the trust framework, sets campaign standards,
                manages verification, provides compliance guidance, and ensures transparency across
                all fundraising activity.
              </p>
              <ul className="space-y-2">
                {[
                  'Sets verification & trust standards',
                  'Manages compliance guidance library',
                  'Publishes transparency reports',
                  'Oversees donor acknowledgment policies',
                  'Builds and maintains trust technology',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-navy mt-0.5 shrink-0" />
                    <span className="text-[#4A5568]">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Fundraising.ph Card */}
          <Card className="border-2 border-gold/40 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-gold text-navy">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-navy">Fundraising.ph</CardTitle>
              </div>
              <Badge className="w-fit bg-gold/10 text-navy border-gold/30">
                Fundraising Platform
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                The fundraising platform where campaigns are created, donations are collected, and
                beneficiaries receive support. Powered by the trust framework established by
                Fundraise.ph.
              </p>
              <ul className="space-y-2">
                {[
                  'Hosts verified fundraising campaigns',
                  'Processes donations securely',
                  'Provides marketplace fundraising tools',
                  'Delivers impact updates to donors',
                  'Connects beneficiaries with supporters',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <span className="text-[#4A5568]">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

      </Section>

      {/* ===== 6. FEATURED FOUNDING STORY ===== */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-gold/10 text-gold border-gold/30">
                <Candy className="h-3.5 w-3.5 mr-1.5" />
                Founding Member
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Serg&apos;s Chocolates: Where It All Began
              </h2>
              <p className="text-[#1A1A2E] text-lg leading-relaxed mb-4">
                Fundraising.ph didn&apos;t start in a boardroom. It started with a chocolate brand
                that wanted to come home. When Serg&apos;s Chocolates planned its revival, it made
                CSR the core strategy — every bar of chocolate would also be an act of bayanihan.
              </p>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                But no existing platform could support product-based community giving with the
                verification, transparency, and Filipino-first approach Serg&apos;s needed. So
                Serg&apos;s conceptualized Fundraising.ph — and Fundraise.ph was born as the
                nonprofit trust layer behind it.
              </p>
              <CTAButton onClick={() => navigate('sergs-chocolates')} variant="primary" size="default">
                Read Serg&apos;s Full Story
              </CTAButton>
            </div>
            <div className="bg-light-gray rounded-2xl p-8 md:p-10 border border-navy/10">
              <div className="flex flex-col items-center text-center gap-4">
                <Candy className="h-16 w-16 text-gold" />
                <h3 className="text-2xl font-bold text-navy">Serg&apos;s Chocolates</h3>
                <p className="text-[#4A5568] leading-relaxed">
                  &ldquo;A revival that gives back. A brand that builds trust. A chocolate that
                  reminds us: bayanihan can live online.&rdquo;
                </p>
                <Badge className="bg-gold/10 text-navy border-gold/30 mt-2">
                  Founding Member — Fundraise.ph
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== 7. TECHNOLOGY ROADMAP PREVIEW ===== */}
      <Section dark>
        <SectionHeading
          title="Technology Roadmap Preview"
          subtitle="We're building the infrastructure for trustworthy Filipino giving — one milestone at a time."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-10">
            {roadmapItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-border/50 rounded-xl p-4 md:p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {getProgressIcon(item.progress)}
                    <span className="font-medium text-[#1A1A2E]">{item.label}</span>
                  </div>
                  <Badge
                    variant={item.progress === 100 ? 'default' : 'secondary'}
                    className={`shrink-0 ml-2 ${item.progress === 100 ? 'bg-gold text-navy' : ''}`}
                  >
                    {getProgressLabel(item.progress)}
                  </Badge>
                </div>
                <Progress value={item.progress} className="h-1.5 mt-2" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <CTAButton onClick={() => navigate('technology-roadmap')} variant="primary" size="default">
              View the Full Technology Roadmap
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* ===== 8. JOIN THE MOVEMENT ===== */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Join the Movement"
            subtitle="Whether you're a nonprofit organization, a Filipino business, a diaspora community leader, a developer, a compliance professional, or simply someone who believes that Filipino giving deserves better infrastructure — there's a place for you in the Fundraise.ph ecosystem."
            centered
          />
          <p className="text-[#4A5568] leading-relaxed mb-8 max-w-3xl mx-auto">
            We invite all types of partners to join us in building a future where every donation is
            verified, every campaign is transparent, and every act of bayanihan is honored with
            accountability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton onClick={() => navigate('partner-with-us')} variant="primary" size="lg">
              Partner With Fundraise.ph
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* ===== 9. SEO/AIO BLOCK ===== */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <SEOBlock items={seoItems} />
        </div>
      </Section>
    </div>
  )
}
