'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ShoppingBag,
  Package,
  Repeat,
  Gift,
  Home,
  Handshake,
  Percent,
  Star,
  Coffee,
  Link2,
  Candy,
  Quote,
  Heart,
  ShieldCheck,
  Search,
  Lightbulb,
} from 'lucide-react'

const marketplaceWays = [
  {
    title: 'Direct Product Sales for Fundraising',
    description: 'Sellers list products where a portion of each sale goes directly to a verified campaign.',
    icon: ShoppingBag,
  },
  {
    title: 'Pre-Order Campaigns',
    description: 'Products are offered on a pre-order basis, with proceeds funding a specific cause before production.',
    icon: Package,
  },
  {
    title: 'Sponsor-Matched Product Sales',
    description: 'Sponsors match the fundraising portion of product sales, doubling the impact per purchase.',
    icon: Repeat,
  },
  {
    title: 'Gift-with-Purpose Options',
    description: 'Buyers can send products as gifts where the gifting act also contributes to a campaign.',
    icon: Gift,
  },
  {
    title: 'Pasalubong Bundles',
    description: 'Curated bundles of Filipino products tied to specific community campaigns, combining culture and giving.',
    icon: Home,
  },
  {
    title: 'Corporate Bulk Orders for Giving',
    description: 'Companies order products in bulk with proceeds directed to their chosen campaign or cause.',
    icon: Handshake,
  },
  {
    title: 'Percentage-of-Revenue Pledges',
    description: 'Sellers pledge a fixed percentage of their total revenue on Fundraising.ph to campaigns.',
    icon: Percent,
  },
  {
    title: 'Product Launch Fundraisers',
    description: 'New product launches are tied to a fundraising goal, turning debut moments into giving moments.',
    icon: Star,
  },
  {
    title: 'Loyalty Rewards as Donations',
    description: 'Buyers convert marketplace loyalty points or rewards into campaign donations.',
    icon: Coffee,
  },
  {
    title: 'Cross-Campaign Product Partnerships',
    description: 'Multiple sellers collaborate on a shared product with proceeds split across several campaigns.',
    icon: Link2,
  },
]

const revivalSteps = [
  {
    icon: Candy,
    title: 'A Heritage Brand Plans Its Comeback',
    description:
      "Serg's Chocolates set out to revive a beloved Filipino brand — not just to sell chocolate, but to come back with purpose. The vision: a revival where every product carries community impact.",
  },
  {
    icon: Heart,
    title: 'CSR at the Core, Not as an Afterthought',
    description:
      "The revival plan embedded giving back into the business model itself. A portion of every sale would support verified campaigns. CSR wasn't a sidebar — it was the strategy.",
  },
  {
    icon: Search,
    title: 'No Platform Could Serve the Vision',
    description:
      "Serg's needed a platform that understood Filipino bayanihan culture, supported product-based fundraising, and provided verification and transparency. No existing platform met these needs.",
  },
  {
    icon: Lightbulb,
    title: 'Fundraising.ph Was Conceptualized',
    description:
      "If the platform didn't exist, it had to be built. Serg's conceptualized Fundraising.ph — a platform designed to support Filipino heritage brands, community campaigns, and marketplace giving with trust at its foundation.",
  },
  {
    icon: ShieldCheck,
    title: 'Fundraise.ph Became the Trust Guardian',
    description:
      "To ensure Fundraising.ph would always operate with integrity, Fundraise.ph was established as a separate nonprofit trust organization — setting standards, verifying campaigns, and protecting donors and beneficiaries.",
  },
]

export function SergsChocolatesPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['sergs-chocolates'])

  return (
    <div>
      <PageHeader
        title="Founding Member: Serg's Chocolates"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      {/* The Origin Story */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="How a Chocolate Brand Gave Birth to a Fundraising Platform"
            centered={false}
          />
          <div className="space-y-5">
            <p className="text-[#4A5568] text-lg leading-relaxed">
              In the Philippines, chocolate is more than a treat. It is a tradition woven into the
              fabric of family, community, and homecoming. From the <em>tablea</em> stirred into
              morning <em>tsokolate</em> to the chocolate bars tucked into <em>balikbayan</em> boxes,
              Filipino chocolate carries meaning far beyond its ingredients. It is <em>pasalubong</em>.
              It is comfort. It is home.
            </p>
            <p className="text-[#4A5568] text-lg leading-relaxed">
              <strong className="text-navy">Serg&apos;s Chocolates</strong> is part of this tradition.
              When the team behind Serg&apos;s began planning the brand&apos;s revival, they made a
              deliberate decision: this comeback would not be just about selling chocolate. It would be
              about <strong className="text-navy">giving back to the community</strong>.
            </p>
            <p className="text-[#4A5568] text-lg leading-relaxed">
              The idea was to embed CSR — Corporate Social Responsibility — into the revival plan
              itself, not as a marketing afterthought, but as a core strategy. Every bar of
              Serg&apos;s chocolate sold could carry a fundraising purpose. A portion could go to a
              medical campaign. A bundle could fund a classroom. A gift box could help rebuild after
              a typhoon. The product would not just be chocolate — it would be{' '}
              <strong className="text-navy">bayanihan you can hold in your hands</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* The Problem: No Platform */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="But the Platform Didn't Exist"
            subtitle="Serg's searched for a fundraising platform that could support product-based community giving with trust and transparency. What they found was a gap — not just for Serg's, but for every Filipino."
            centered
          />
          <div className="space-y-4 text-[#1A1A2E] text-lg leading-relaxed">
            <p>
              International crowdfunding platforms didn&apos;t understand Filipino bayanihan culture.
              They didn&apos;t support marketplace fundraising. They didn&apos;t verify campaigns or
              acknowledge donors the way Filipino communities expect. Local platforms lacked the trust
              infrastructure — no verification, no transparency, no compliance guidance.
            </p>
            <p>
              <strong className="text-navy">If the platform didn&apos;t exist, it had to be built.</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* The Revival Path */}
      <Section>
        <SectionHeading
          title="From Chocolate Revival to Platform Birth"
          subtitle="Serg's Chocolates didn't just inspire Fundraising.ph — it conceptualized it. Here's how the revival plan led to the creation of the platform and its trust organization."
          centered
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {revivalSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">{step.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Key Insight */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-gold/40 bg-light-gray shadow-lg">
            <CardContent className="pt-8 pb-8 px-6 md:px-10 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Candy className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-snug">
                A chocolate bar can be pasalubong, a thank-you gift, a family memory, or a small
                act of bayanihan.
              </h3>
              <div className="my-6 h-px bg-gold/30 max-w-xs mx-auto" />
              <p className="text-[#4A5568] text-lg leading-relaxed">
                In Filipino culture, every act of giving carries meaning. When that act of giving also
                supports a verified campaign, the chocolate bar transforms from a product into a
                bridge — connecting the person who buys it with the community that benefits from it.
                This is what Serg&apos;s Chocolates envisioned: products with purpose, commerce with
                conscience, revival with responsibility.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Marketplace Fundraising Connection */}
      <Section>
        <SectionHeading
          title="10 Ways Fundraising.ph Enables Product-Based Fundraising"
          subtitle="Serg's Chocolates conceptualized Fundraising.ph to make this possible. Here are all the ways the platform turns everyday purchases into acts of bayanihan."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {marketplaceWays.map((way, index) => {
            const Icon = way.icon
            return (
              <div
                key={index}
                className="group bg-white border border-navy/10 rounded-xl p-5 hover:shadow-md hover:border-gold/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0 group-hover:bg-trust-blue/20 transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-[#4A5568]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-navy leading-snug mb-2">
                  {way.title}
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {way.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Serg's as Founding Member */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-gold/10 text-gold border-gold/30">
                <Candy className="h-3.5 w-3.5 mr-1.5" />
                Founding Member
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Serg&apos;s Reminds Us Why We Exist
              </h2>
              <p className="text-[#1A1A2E] text-lg leading-relaxed mb-4">
                As the Founding Member of Fundraise.ph, Serg&apos;s Chocolates serves as a constant
                reminder that being Filipino means showing up for one another. That bayanihan is not
                just a tradition of the past — it is a digital culture we can build and scale.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                Every verification completed, every standard published, and every donor protected
                traces back to the same origin: a chocolate brand that believed revival should serve
                community, not just commerce. Serg&apos;s Chocolates proved that Filipino heritage
                brands can lead with purpose — and that purpose-built platforms can transform culture.
              </p>
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

      {/* Closing Quote */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-10 w-10 text-gold mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-semibold text-navy leading-relaxed mb-6">
            &ldquo;We didn&apos;t set out to build a fundraising platform. We set out to revive a
            chocolate brand with purpose. But when the platform we needed didn&apos;t exist, we
            realized the gap wasn&apos;t just ours — it was every Filipino&apos;s.&rdquo;
          </blockquote>
          <div className="h-px bg-gold/30 max-w-xs mx-auto mb-4" />
          <p className="text-gold font-medium mb-2">
            — The spirit behind Serg&apos;s Chocolates and Fundraise.ph
          </p>
          <p className="text-[#4A5568] text-sm">
            Founding Member, Fundraise.ph
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <CTABlock
        headline="Support the revival of Filipino craft chocolate and Filipino community fundraising"
        subheadline="Serg's Chocolates is working toward a revival campaign on Fundraising.ph — where every purchase is an act of bayanihan."
      />
    </div>
  )
}
