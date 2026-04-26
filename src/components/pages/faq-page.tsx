'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useNavigation } from '@/lib/navigation'
import {
  HelpCircle,
  Building,
  Globe,
  ShieldCheck,
  FileCheck,
  AlertCircle,
  Briefcase,
  Candy,
  Rocket,
  BookOpen,
} from 'lucide-react'

const faqs = [
  {
    id: 'faq-1',
    question: 'What is Fundraise.ph?',
    icon: Building,
    answer:
      'Fundraise.ph is a nonprofit trust organization dedicated to building the trust layer for Filipino fundraising. We establish standards, provide verification frameworks, maintain compliance resources, and advocate for transparent and accountable fundraising practices. Fundraise.ph is not a crowdfunding platform — it is the infrastructure of trust that supports the entire Filipino fundraising ecosystem.',
  },
  {
    id: 'faq-2',
    question: 'What is Fundraising.ph?',
    icon: Globe,
    answer:
      'Fundraising.ph is the campaign platform where verified Filipino campaigns come to life. It is the operational arm of the ecosystem — where campaigners create fundraising campaigns, donors contribute, and fund flows are tracked transparently. Fundraising.ph implements the standards and verification frameworks established by Fundraise.ph.',
  },
  {
    id: 'faq-3',
    question: 'Is Fundraise.ph a crowdfunding website?',
    icon: HelpCircle,
    answer:
      'No. Fundraise.ph is not a crowdfunding website. It is a nonprofit trust organization that builds the trust infrastructure for Filipino fundraising. The actual campaign platform is Fundraising.ph, where campaigns are created and managed. Fundraise.ph focuses on standards, verification, compliance education, and governance — ensuring that fundraising on Fundraising.ph is trustworthy and accountable.',
  },
  {
    id: 'faq-4',
    question: 'Why does Filipino fundraising need a trust layer?',
    icon: ShieldCheck,
    answer:
      'The Filipino fundraising landscape has historically lacked standardized verification, transparent fund tracking, and compliance guidance. This creates risks for donors, campaigners, and beneficiaries alike. A trust layer ensures that campaigns are verified, funds are tracked, and accountability is built into every step — from campaign creation to post-campaign reporting. Without trust, the entire ecosystem suffers.',
  },
  {
    id: 'faq-5',
    question: 'Does Fundraise.ph verify campaigns?',
    icon: FileCheck,
    answer:
      'Fundraise.ph establishes the verification framework and standards that campaigns on Fundraising.ph must follow. Verification is a layered, progressive process — from basic identity review to compliance-sensitive review for high-risk campaigns. Our verification badges (Identity Verified, Docs Reviewed, Org Verified, etc.) provide donors with clear, visible indicators of a campaign\'s trustworthiness. However, a verification badge is not a blanket guarantee, legal clearance, or endorsement.',
  },
  {
    id: 'faq-6',
    question: 'Are all campaigns legally approved if they appear on Fundraising.ph?',
    icon: AlertCircle,
    answer:
      'No. Appearing on Fundraising.ph does not constitute legal approval, endorsement, or guarantee by Fundraise.ph. Our verification process checks identity, documentation, and compliance with our standards — but it does not replace legal review by qualified professionals. Campaigners are responsible for ensuring their own legal compliance with applicable laws, including DSWD permits, LGU requirements, and SEC registrations where applicable.',
  },
  {
    id: 'faq-7',
    question: 'Can businesses participate?',
    icon: Briefcase,
    answer:
      'Yes. Businesses can participate in multiple ways: as corporate sponsors, as suppliers and product partners in the marketplace, or as campaigners using business-related fundraising models like pre-orders, sponsorships, and marketplace purchases. All business participants must comply with the same verification and transparency standards that apply to every campaign on the platform.',
  },
  {
    id: 'faq-8',
    question: 'How is Serg\'s Chocolates connected?',
    icon: Candy,
    answer:
      'Serg\'s Chocolates is the founding product partner and proof-of-concept for the Fundraise.ph marketplace model. It demonstrates how a Filipino product business can participate in the fundraising ecosystem through transparent, verified marketplace transactions — where every purchase also supports the trust infrastructure. Serg\'s Chocolates validates the model that products can fund purpose.',
  },
  {
    id: 'faq-9',
    question: 'How do I start a campaign?',
    icon: Rocket,
    answer:
      'To start a campaign, visit Fundraising.ph — the campaign platform. You\'ll need to create an account, choose your campaign type, submit required documentation for verification, and comply with our campaign standards. The verification process is designed to be accessible while maintaining trust. Once your campaign passes verification, it goes live and can start receiving support from donors worldwide.',
  },
]

export function FaqPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        headline="Common questions about Fundraise.ph and Fundraising.ph."
        description="Everything you need to know about our trust framework, the campaign platform, and how Filipino fundraising works."
      />

      {/* FAQ Accordion Section */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            <BookOpen className="h-3.5 w-3.5 mr-1.5" />
            Knowledge Base
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Questions, Answered
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From understanding our mission to starting your first campaign — here
            are the answers to the most common questions we receive.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => {
                  const Icon = faq.icon
                  return (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left hover:no-underline group">
                        <div className="flex items-start gap-3 text-left">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-100 transition-colors">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-base font-medium leading-snug">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-11 pr-2">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Still Have Questions Section */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Our team is here to help. Reach out through our contact page or
            explore the campaign platform directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Badge
              variant="outline"
              className="cursor-pointer px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
              onClick={() => navigate('contact')}
            >
              Contact Us
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
              onClick={() => navigate('compliance-library')}
            >
              Compliance Library
            </Badge>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <CTABlock
          headline="Ready to start your campaign?"
          subheadline="Visit Fundraising.ph to create your verified campaign and start raising funds with trust and transparency."
          primaryText="Start a Campaign on Fundraising.ph"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
