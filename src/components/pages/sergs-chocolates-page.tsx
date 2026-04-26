'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
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

export function SergsChocolatesPage() {
  return (
    <div>
      <PageHeader
        title="Founding Member Story: Serg's Chocolates and the Culture of Giving"
        headline="From Filipino chocolate heritage to Filipino bayanihan infrastructure."
        description="Serg's Chocolates is not just a product — it is a story of how Filipino craft, culture, and community connect. As a founding member of Fundraise.ph, Serg's Chocolates embodies the bridge between product and purpose."
      />

      {/* Narrative Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="The Story Behind the Chocolate"
            centered={false}
          />
          <div className="space-y-5">
            <p className="text-[#4A5568] text-lg leading-relaxed">
              In the Philippines, chocolate is more than a treat. It is a tradition woven into the fabric of family, community, and homecoming. From the tablea stirred into morning tsokolate to the chocolate bars tucked into balikbayan boxes, Filipino chocolate carries meaning far beyond its ingredients.
            </p>
            <p className="text-[#4A5568] text-lg leading-relaxed">
              Serg's Chocolates was born from this tradition — a craft chocolate maker dedicated to elevating Filipino cacao while honoring the communities that grow it. But Serg's story goes deeper than the product itself.
            </p>
            <p className="text-[#4A5568] text-lg leading-relaxed">
              As Fundraise.ph was being conceived, the question arose: what does it look like when a product-based business becomes a founding pillar of a trust organization for fundraising? Serg's Chocolates answered that question — not with theory, but with practice.
            </p>
            <p className="text-[#4A5568] text-lg leading-relaxed">
              Every bar of Serg's chocolate sold through Fundraising.ph can carry a fundraising purpose. A portion can go to a medical campaign. A bundle can fund a classroom. A gift box can rebuild a home after a typhoon. The product becomes the vehicle; the community is the destination.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Insight */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-gold/40 bg-gradient-to-br from-[#0A1F44] to-[#1A2D52] shadow-lg">
            <CardContent className="pt-8 pb-8 px-6 md:px-10 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <Candy className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                A chocolate bar can be a pasalubong, a thank-you gift, a reward, a remembrance from home, or a small comfort during hard times.
              </h3>
              <div className="my-6 h-px bg-gold/30 max-w-xs mx-auto" />
              <p className="text-white/70 text-lg leading-relaxed">
                In Filipino culture, every act of giving carries meaning. When that act of giving also supports a verified campaign, the chocolate bar transforms from a product into a bridge — connecting the person who buys it with the community that benefits from it.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Marketplace Fundraising Connection */}
      <Section>
        <SectionHeading
          title="10 Ways Fundraising.ph Enables Product-Based Fundraising"
          subtitle="Serg's Chocolates is one example of how the marketplace turns everyday purchases into acts of bayanihan. Here are all the ways Fundraising.ph makes this possible."
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

      {/* Closing Quote */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-gold/40 bg-gradient-to-br from-[#0A1F44] to-[#1A2D52] shadow-lg">
            <CardContent className="pt-8 pb-8 px-6 md:px-10 text-center">
              <Quote className="h-10 w-10 text-gold mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-6">
                &ldquo;A bar of chocolate can be more than a product. It can be a gift. It can be a memory. It can be a thank-you. It can be pasalubong. It can be a small act of bayanihan.&rdquo;
              </blockquote>
              <div className="my-4 h-px bg-gold/30 max-w-xs mx-auto" />
              <p className="text-gold font-medium">
                — The spirit behind Serg&apos;s Chocolates and Fundraise.ph
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <CTABlock
        headline="Support the revival of Filipino craft chocolate and Filipino community fundraising"
        subheadline="Serg's Chocolates is working toward a revival campaign on Fundraising.ph. Be part of the story."
        primaryText="Support the Serg's Revival Campaign on Fundraising.ph"
        primaryHref="https://fundraising.ph"
      />
    </div>
  )
}
