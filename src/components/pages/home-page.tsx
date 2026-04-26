'use client'

import Link from 'next/link'
import { useNavigation } from '@/lib/navigation'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  ArrowRight,
  ShieldCheck,
  Eye,
  Scale,
  HeartHandshake,
  Cpu,
  CheckCircle2,
  Circle,
  CircleDot,
  Store,
  Users,
  Globe,
  Lightbulb,
  BookOpen,
  Sparkles,
} from 'lucide-react'

const roadmapItems = [
  { label: 'Verified Campaign Badge System', progress: 100 },
  { label: 'Donor Acknowledgment Engine', progress: 85 },
  { label: 'Compliance Guidance Library', progress: 75 },
  { label: 'Public Impact Dashboard', progress: 60 },
  { label: 'Marketplace Fundraising Module', progress: 50 },
  { label: 'AI-Powered Campaign Review', progress: 40 },
  { label: 'Diaspora Giving Gateway', progress: 30 },
  { label: 'Open Data & Research API', progress: 20 },
  { label: 'Bayanihan Trust Network Protocol', progress: 10 },
]

function getProgressIcon(progress: number) {
  if (progress === 100) return <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
  if (progress >= 50) return <CircleDot className="h-5 w-5 text-primary/70 shrink-0" />
  return <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
}

function getProgressLabel(progress: number) {
  if (progress === 100) return 'Complete'
  if (progress >= 75) return 'Near Complete'
  if (progress >= 50) return 'In Progress'
  if (progress >= 25) return 'Building'
  return 'Planned'
}

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Verification',
    description:
      'Every campaign on Fundraising.ph goes through a multi-layered verification process — identity checks, documentation review, and ongoing monitoring — so donors know their contributions reach real people with real needs.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'Full visibility into fund flows, campaign milestones, and beneficiary updates. We publish regular impact reports and make all compliance documentation publicly accessible.',
  },
  {
    icon: Scale,
    title: 'Compliance Guidance',
    description:
      'We help campaign organizers navigate Philippine fundraising regulations, SEC guidelines, and international compliance requirements — reducing risk and building public confidence.',
  },
  {
    icon: HeartHandshake,
    title: 'Donor Acknowledgment',
    description:
      'Every donor receives proper acknowledgment, official receipts, and impact updates. We believe gratitude is not optional — it is foundational to sustainable giving.',
  },
  {
    icon: Cpu,
    title: 'Technology for Bayanihan',
    description:
      'We build and maintain the digital infrastructure that powers Fundraising.ph — from verification engines to marketplace fundraising tools — ensuring bayanihan thrives in the digital age.',
  },
]

export function HomePage() {
  const { navigate } = useNavigation()

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-hero text-white pattern-overlay overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/hero-banner.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-4xl">
            <Badge className="bg-white/10 text-white border-white/20 mb-6 text-sm font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Nonprofit Trust Organization
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Trust Layer for Filipino Giving
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
              Fundraise.ph is a nonprofit technology organization building the trusted fundraising
              infrastructure for Filipinos worldwide — strengthening bayanihan through transparency,
              verification, compliance guidance, marketplace fundraising, and accountable digital
              giving.
            </p>
            <CTABlock
              primaryText="Go to Fundraising.ph Platform"
              primaryHref="https://fundraising.ph"
              secondaryText="Learn Why We Exist"
              secondaryOnClick={() => navigate('why-we-exist')}
              variant="hero"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: WHAT IS FUNDRAISE.PH? ===== */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            About
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is Fundraise.ph?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            <strong className="text-foreground">Fundraise.ph</strong> is the nonprofit mission and
            governance organization that sets the standards, policies, and trust framework for
            Filipino digital fundraising. We are not a fundraising platform ourselves — we are the
            trust layer that ensures fundraising is done right.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            <strong className="text-foreground">Fundraising.ph</strong> is the actual fundraising
            platform where campaigns are created, donations are made, and impact is delivered.
            Together, Fundraise.ph and Fundraising.ph form a complete ecosystem of trusted,
            transparent, and accountable giving for Filipinos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('fundraise-vs-fundraising')}
              className="font-semibold"
            >
              Understand the Difference
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 2: WHY WE EXIST ===== */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">
              Our Purpose
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We Exist</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Filipino giving deserves more than good intentions — it deserves infrastructure built
              on trust, accountability, and transparency. We exist because:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              {
                icon: ShieldCheck,
                text: 'Trust must be earned and verified, not assumed',
              },
              {
                icon: Eye,
                text: 'Verification protects both donors and beneficiaries',
              },
              {
                icon: BookOpen,
                text: 'Documentation and receipts should be standard, not optional',
              },
              {
                icon: Scale,
                text: 'Compliance guidance reduces risk for campaign organizers',
              },
              {
                icon: Eye,
                text: 'Transparent fund flows build lasting donor confidence',
              },
              {
                icon: HeartHandshake,
                text: 'Donor acknowledgment strengthens the culture of giving',
              },
              {
                icon: Users,
                text: 'Accountability transforms one-time donations into lasting impact',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-background/60 border border-border/50"
              >
                <div className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => navigate('why-we-exist')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Read Our Full Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 3: OUR TRUST PILLARS ===== */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Foundation
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Trust Pillars</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Five foundational pillars uphold every campaign, every donation, and every relationship
            within the Fundraise.ph ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              className="group hover:shadow-md transition-shadow duration-300 border-border/50"
            >
              <CardHeader>
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-2 group-hover:bg-primary/15 transition-colors">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== SECTION 4: FUNDRAISE.PH VS FUNDRAISING.PH ===== */}
      <Section dark>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Understanding the Ecosystem
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fundraise.ph vs Fundraising.ph
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Two organizations, one mission: trusted Filipino giving. Here&apos;s how they work
            together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Fundraise.ph Card */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-primary text-primary-foreground">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Fundraise.ph</CardTitle>
              </div>
              <Badge className="w-fit bg-primary/15 text-primary border-primary/20">
                Nonprofit Trust & Governance
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
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
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Fundraising.ph Card */}
          <Card className="border-accent/20 bg-accent/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-accent text-accent-foreground">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Fundraising.ph</CardTitle>
              </div>
              <Badge className="w-fit bg-accent/15 text-accent-foreground border-accent/20">
                Fundraising Platform
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
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
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Link href="https://fundraising.ph" target="_blank" rel="noopener noreferrer">
              <ArrowRight className="mr-2 h-4 w-4" />
              Go to Fundraising.ph Platform
            </Link>
          </Button>
        </div>
      </Section>

      {/* ===== SECTION 5: FEATURED FOUNDING STORY ===== */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Store className="h-3.5 w-3.5 mr-1.5" />
                Founding Member Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Serg&apos;s Chocolates and the Culture of Giving
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Before Fundraise.ph was a platform, it was a chocolate company with a mission.
                Serg&apos;s Chocolates demonstrated that Filipino businesses could build trust
                through radical transparency — showing exactly where money goes and who it helps.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                That philosophy of documented impact and community accountability became the
                founding principle of Fundraise.ph: every peso tracked, every donor acknowledged,
                every beneficiary treated with dignity.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('sergs-chocolates')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Read the Serg&apos;s Founding Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-10 text-white pattern-overlay">
              <div className="flex flex-col items-center text-center gap-4">
                <Store className="h-16 w-16 text-accent" />
                <h3 className="text-2xl font-bold">Serg&apos;s Chocolates</h3>
                <p className="text-white/70 leading-relaxed">
                  &ldquo;From bean-to-bar chocolate to bean-to-beneficiary transparency — the origin
                  story of trusted Filipino giving.&rdquo;
                </p>
                <Badge className="bg-white/10 text-white border-white/20 mt-2">
                  Founding Member
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 6: TECHNOLOGY ROADMAP PREVIEW ===== */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">
              <Lightbulb className="h-3.5 w-3.5 mr-1.5" />
              Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Roadmap Preview</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We&apos;re building the infrastructure for trustworthy Filipino giving — one
              milestone at a time.
            </p>
          </div>
          <div className="space-y-4 mb-10">
            {roadmapItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-background/60 border border-border/50 rounded-xl p-4 md:p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {getProgressIcon(item.progress)}
                    <span className="font-medium text-foreground">{item.label}</span>
                  </div>
                  <Badge
                    variant={item.progress === 100 ? 'default' : 'secondary'}
                    className="shrink-0 ml-2"
                  >
                    {getProgressLabel(item.progress)}
                  </Badge>
                </div>
                <Progress value={item.progress} className="h-1.5 mt-2" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => navigate('technology-roadmap')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              View the Technology Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 7: JOIN THE MOVEMENT ===== */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Users className="h-3.5 w-3.5 mr-1.5" />
            Community
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Movement</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
            Whether you&apos;re a nonprofit organization, a Filipino business, a diaspora community
            leader, a developer, a compliance professional, or simply someone who believes that
            Filipino giving deserves better infrastructure — there&apos;s a place for you in the
            Fundraise.ph ecosystem.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            We invite all types of partners to join us in building a future where every donation is
            verified, every campaign is transparent, and every act of bayanihan is honored with
            accountability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate('partner-with-us')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Partner With Fundraise.ph
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold">
              <Link href="https://fundraising.ph" target="_blank" rel="noopener noreferrer">
                Go to Fundraising.ph
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* ===== PAGE-END CTA BLOCK ===== */}
      <Section className="!py-0">
        <CTABlock variant="default" />
      </Section>
    </div>
  )
}
