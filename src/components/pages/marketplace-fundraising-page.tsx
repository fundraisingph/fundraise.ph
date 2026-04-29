'use client'

import { useNavigation } from '@/lib/navigation'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PLATFORM_URL } from '@/lib/technology-impact-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Store, Candy, ShoppingBag, Users, DollarSign, ArrowRight, Info } from 'lucide-react'

const models = [
  { icon: <ShoppingBag className="h-6 w-6" />, title: 'Product-Based Fundraising', description: 'Filipino creators and small businesses sell products where proceeds directly benefit a campaign. Supporters receive a product and a campaign receives funding.', items: ['Product listing with campaign link', 'Transparent pricing showing campaign contribution', 'Order tracking and fulfillment', 'Purchase acknowledgment as supporter'] },
  { icon: <Store className="h-6 w-6" />, title: 'Pre-Order Campaigns', description: 'Campaigners offer products for pre-order, using proceeds to fund campaign goals before production or delivery.', items: ['Pre-order listing with estimated delivery', 'Clear timeline and fulfillment plan', 'Transparent fund allocation', 'Supporter communication on progress'] },
  { icon: <Users className="h-6 w-6" />, title: 'Affiliate Fundraising', description: 'Supporters earn commission for driving campaign contributions or product sales, with full disclosure of the affiliate relationship.', items: ['Affiliate registration and tracking', 'Commission structure clearly disclosed', 'Campaign contribution attribution', 'Transparent reporting for all parties'] },
  { icon: <DollarSign className="h-6 w-6" />, title: 'Sponsor-Supported Campaigns', description: 'Businesses sponsor campaigns through direct contributions, product donations, or matching programs — with sponsor participation clearly disclosed.', items: ['Sponsor registration and verification', 'Sponsorship level and benefits disclosed', 'Campaign-sponsor relationship transparent', 'Sponsor impact reporting'] },
]

export function MarketplaceFundraisingPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['marketplace-fundraising'])
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Marketplace Fundraising"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="Fundraising Models"
          subtitle="Marketplace fundraising enables Filipino creators, businesses, and communities to raise funds through product sales, pre-orders, affiliate programs, and sponsor participation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((model, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                  {model.icon}
                </div>
                <CardTitle className="text-lg text-navy">{model.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">{model.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {model.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-navy/10 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0">
                <Info className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">Disclosure Requirement</h3>
                <p className="text-[#4A5568] leading-relaxed text-sm">
                  Commercial transactions where proceeds benefit a campaign must be explicitly disclosed as purchases or sponsorships rather than pure donations. Marketplace campaigns must clearly indicate what portion of the transaction benefits the campaign, what the supporter receives, and the nature of the commercial relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Founding Member: Serg's Chocolates"
          subtitle="A heritage chocolate brand that conceptualized Fundraising.ph as a marketplace fundraising platform."
          centered
        />
        <div className="max-w-3xl mx-auto">
          <Card className="border-gold/20 bg-gradient-to-br from-navy/5 to-navy/10">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center">
                  <Candy className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">Serg&apos;s Chocolates</h3>
                  <p className="text-xs text-[#4A5568]">Founding Member — Fundraise.ph</p>
                </div>
              </div>
              <p className="text-[#4A5568] leading-relaxed text-sm mb-4">
                When Serg&apos;s Chocolates planned its revival, it made CSR the core strategy — every bar of chocolate would also be an act of bayanihan. No existing platform could support product-based community giving with the verification and transparency needed. So Serg&apos;s conceptualized Fundraising.ph.
              </p>
              <button
                onClick={() => navigate('sergs-chocolates')}
                className="inline-flex items-center text-trust-blue font-semibold text-sm hover:text-navy transition-colors"
              >
                Read the Full Story
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </button>
            </CardContent>
          </Card>
        </div>
      </Section>

      <CTABlock
        headline="Marketplace fundraising meets bayanihan."
        subheadline="Visit Fundraising.ph to explore marketplace campaigns and product-based community fundraising."
        ctaLabel="Explore Campaigns on Fundraising.ph"
        ctaHref={PLATFORM_URL}
      />
    </div>
  )
}
