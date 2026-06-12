'use client'

import { useNavigation } from '@/lib/navigation'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL } from '@/lib/trust-governance-compliance-config'
import { Hero } from '@/components/shared/hero'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTAButton } from '@/components/shared/cta-button'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { SEOBlock } from '@/components/shared/seo-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ShoppingBag,
  School,
  Church,
  Users,
  Building2,
  Package,
  HeartHandshake,
  AlertTriangle,
  CheckCircle2,
  Candy,
} from 'lucide-react'

const faqItems = [
  {
    question: 'What is product-based fundraising?',
    answer: 'Product-based fundraising is a model where supporters purchase a product — such as chocolates, cookies, crafts, or food items — and a portion of the proceeds goes to support a campaign, school, nonprofit, church, or community project. Supporters receive something tangible in return for their contribution.',
  },
  {
    question: 'How is product-based fundraising different from regular donations?',
    answer: 'In a regular donation, supporters give money without receiving anything in return. In product-based fundraising, supporters buy a product and part of the purchase price supports the campaign. This means the transaction is part purchase, part contribution — and both elements must be clearly disclosed.',
  },
  {
    question: 'Is product-based fundraising legal in the Philippines?',
    answer: 'Yes, selling products to raise funds is a common and legal practice in the Philippines. However, organizers should be aware of applicable regulations, including local government permits, consumer protection standards, and disclosure requirements. Fundraise.ph provides educational guidance on compliance-aware fundraising practices.',
  },
  {
    question: 'What types of products work best for fundraising?',
    answer: 'Products that are affordable, easy to distribute, and culturally meaningful tend to perform best. Examples include chocolates, baked goods, food items, crafts, and holiday gifts. Heritage products that connect to Filipino identity — like Serg\'s Chocolates — add emotional value that increases supporter engagement.',
  },
  {
    question: 'How much of each sale should go to the campaign?',
    answer: 'There is no fixed percentage, but transparency is essential. Fundraise.ph standards require that product-based campaigns clearly disclose what portion of proceeds supports the campaign, who receives the funds, and how fulfillment is handled. Supporters should always know before they buy.',
  },
  {
    question: 'Can schools and churches use product-based fundraising?',
    answer: 'Yes. Schools, churches, and community groups are among the most common users of product-based fundraising in the Philippines. Cookie drives, chocolate sales, and community product events are familiar traditions. Fundraise.ph helps these organizations run product-based campaigns with proper documentation, transparency, and donor acknowledgment.',
  },
  {
    question: 'What are the risks of product-based fundraising?',
    answer: 'Risks include inventory management, fulfillment delays, unclear disclosure of how proceeds are split, and the possibility that supporters may misunderstand the transaction as a pure donation. Fundraise.ph promotes clear disclosure, documented fund flows, and compliance-aware practices to mitigate these risks.',
  },
  {
    question: 'How does Fundraise.ph support product-based fundraising?',
    answer: 'Fundraise.ph provides the trust framework, verification standards, compliance guidance, and transparency requirements that product-based campaigns on Fundraising.ph must follow. This includes disclosure standards, documentation requirements, and donor acknowledgment protocols.',
  },
]

const whoItsFor = [
  { icon: School, title: 'Schools', description: 'Cookie drives, chocolate sales, and school supply fundraisers with transparent fund allocation.' },
  { icon: Church, title: 'Churches', description: 'Community product sales for church programs, outreach, and building funds.' },
  { icon: Users, title: 'Community Groups', description: 'Barangay and organization-led product campaigns supporting local projects and causes.' },
  { icon: HeartHandshake, title: 'Nonprofits', description: 'NGOs and charitable organizations using product sales as a sustainable revenue stream.' },
  { icon: Building2, title: 'Businesses', description: 'Companies and heritage brands integrating fundraising into product sales and CSR programs.' },
]

const examples = [
  { icon: Candy, title: "Serg's Chocolates", description: "A heritage Filipino chocolate brand where every purchase supports verified community campaigns — bayanihan you can hold in your hands." },
  { icon: Package, title: 'School Cookie Drives', description: 'Students and parents sell baked goods with a disclosed portion supporting school programs, equipment, or scholarships.' },
  { icon: ShoppingBag, title: 'Community Product Sales', description: 'Local artisans and makers sell products with proceeds funding community development projects.' },
]

const benefits = [
  { title: 'Tangible Value for Donors', description: 'Supporters receive a real product, making the contribution feel more like an exchange than a handout.' },
  { title: 'Sustainable Revenue', description: 'Product sales can create recurring income for organizations, unlike one-time donation campaigns.' },
  { title: 'Community Engagement', description: 'Product-based events bring people together — bake sales, market days, and community fairs strengthen social bonds.' },
  { title: 'Cultural Connection', description: 'Filipino heritage products add cultural meaning to the act of giving, connecting supporters to identity and tradition.' },
  { title: 'Broader Appeal', description: 'People who might not donate to a campaign may still purchase a product they want — expanding the supporter base.' },
]

const risks = [
  { title: 'Disclosure Confusion', description: 'Supporters may not realize they are participating in a fundraiser rather than making a standard purchase. Clear disclosure is essential.' },
  { title: 'Fulfillment Risk', description: 'Products must be delivered as promised. Pre-order campaigns carry higher fulfillment risk if production or logistics are delayed.' },
  { title: 'Pricing Transparency', description: 'The split between product cost and campaign contribution must be clearly stated. Ambiguity erodes trust.' },
  { title: 'Inventory Management', description: 'Physical products require storage, shipping, and handling — costs that must be accounted for in the campaign budget.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Product-Based Fundraising?',
  description: 'A complete guide to product-based fundraising in the Philippines — how it works, who it is for, examples, benefits, risks, and compliance considerations.',
  author: { '@type': 'Organization', name: 'Fundraise.ph' },
  publisher: { '@type': 'Organization', name: 'Fundraise.ph', url: 'https://fundraise.ph' },
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
}

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fundraise.ph' },
    { '@type': 'ListItem', position: 2, name: 'Knowledge Center', item: 'https://fundraise.ph/#knowledge-center' },
    { '@type': 'ListItem', position: 3, name: 'Product-Based Fundraising Guide', item: 'https://fundraise.ph/#product-based-fundraising-guide' },
  ],
}

const internalLinksData = [
  { label: 'Marketplace Fundraising', page: 'marketplace-fundraising' },
  { label: 'Compliance Guidance', page: 'compliance' },
  { label: 'Campaign Standards', page: 'campaign-standards' },
  { label: 'Serg\'s Chocolates', page: 'sergs-chocolates' },
  { label: 'Knowledge Center', page: 'knowledge-center' },
  { label: 'Glossary', page: 'glossary' },
]

export function ProductBasedFundraisingGuidePage() {
  const { navigate } = useNavigation()
  const { current: heroVar } = useRotatingContent(heroVariations['product-based-fundraising-guide'])

  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqPageSchema, breadcrumbSchema]} />
      <div>
        <Hero
          badge="Product-Based Fundraising"
          headline={heroVar.headline}
          subheadline={heroVar.subheadline}
          variation={heroVar}
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <CTAButton href={FUNDRAISING_PH_URL} variant="primary" size="lg">
              Explore Campaigns on Fundraising.ph
            </CTAButton>
            <CTAButton onClick={() => navigate('knowledge-center')} variant="secondary" size="lg">
              Knowledge Center
            </CTAButton>
          </div>
        </Hero>

        <Section>
          <div className="max-w-4xl mx-auto">
            <AnswerBlock
              question="What is product-based fundraising?"
              answer="Product-based fundraising is a model where supporters buy a product, and part of the proceeds supports a campaign, school, nonprofit, church, or community project. In the Philippines, this model can help organizations raise funds while giving donors something tangible in return."
            />
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="How Product-Based Fundraising Works"
            subtitle="The model is straightforward: a product is sold, a portion goes to the campaign, and the supporter receives something real. Transparency at every step is what makes it trustworthy."
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                { step: '1', title: 'A product is listed', description: 'A campaign organizer or business lists a product on Fundraising.ph with a clear price and disclosed fundraising portion.' },
                { step: '2', title: 'Supporters purchase the product', description: 'Buyers know before purchasing that part of their payment supports a verified campaign. This is not a hidden fee — it is the value proposition.' },
                { step: '3', title: 'Proceeds are split', description: 'The disclosed portion of each sale goes to the campaign beneficiary. The rest covers product cost, fulfillment, and platform operations.' },
                { step: '4', title: 'Product is delivered', description: 'The supporter receives their product. Fulfillment is tracked and documented on the platform.' },
                { step: '5', title: 'Impact is reported', description: 'Campaign organizers report how funds were used, providing the same transparency expected from any verified campaign.' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-navy/10">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="Who It Is For"
            subtitle="Product-based fundraising serves a wide range of Filipino organizations and communities."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whoItsFor.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-navy">{item.title}</CardTitle>
                    <CardDescription className="text-[#4A5568] text-sm leading-relaxed">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="Examples of Product-Based Fundraising"
            subtitle="From heritage brands to school drives — product-based fundraising is already part of Filipino culture."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {examples.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="Benefits of Product-Based Fundraising"
            subtitle="Why this model works for Filipino communities — and why transparency makes it sustainable."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-light-gray border border-navy/10">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="Risks and Considerations"
            subtitle="Every fundraising model carries risks. Awareness is the first step toward responsible practice."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {risks.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-navy/10">
                <AlertTriangle className="h-5 w-5 text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto">
            <ProofBlock variant="product">
              Product-based fundraising should clearly disclose what portion of proceeds supports the campaign, who receives funds, and how fulfillment is handled. This disclosure must be visible before a supporter makes a purchase — not buried in fine print. Fundraise.ph standards require product campaigns to document the fund split, delivery timeline, and campaign beneficiary.
            </ProofBlock>
          </div>
        </Section>

        <Section dark>
          <SectionHeading
            title="Compliance Reminders"
            subtitle="Product-based campaigns on Fundraising.ph must meet specific compliance standards."
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-3">
              {[
                'Disclose the product-to-campaign fund split clearly and visibly',
                'Classify the campaign correctly as a marketplace transaction, not a pure donation',
                'Provide accurate product descriptions, images, and delivery timelines',
                'Document the beneficiary and how funds will be disbursed',
                'Maintain donor and buyer acknowledgment records',
                'Comply with applicable consumer protection and solicitation guidance',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-navy/10">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-[#4A5568] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto">
            <SEOBlock items={faqItems} />
          </div>
        </Section>

        <Section dark>
          <div className="max-w-4xl mx-auto space-y-6">
            <AuthorBox lastUpdated="2026-06-10" />
            <InternalLinks links={internalLinksData} />
          </div>
        </Section>
      </div>
    </>
  )
}
