'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useNavigation } from '@/lib/navigation'
import {
  HandCoins,
  Megaphone,
  Building2,
  ShieldCheck,
  CreditCard,
  BookHeart,
  AlertTriangle,
  ChevronRight,
} from 'lucide-react'

const complianceCategories = [
  {
    id: 'fundraising-basics',
    value: 'fundraising-basics',
    title: 'Fundraising Basics',
    icon: HandCoins,
    badge: '6 topics',
    description:
      'Understanding the fundamental models and mechanisms of fundraising in the Philippines.',
    topics: [
      {
        name: 'Donations',
        content:
          'Donation-based fundraising involves collecting voluntary contributions without offering goods or services in return. In the Philippines, donation campaigns must comply with solicitation permit requirements from the DSWD or local government units when conducted by organizations. Individual campaigns for personal needs have different requirements. All donations on Fundraising.ph are tracked and reported transparently.',
      },
      {
        name: 'Marketplace Fundraising',
        content:
          'Marketplace fundraising involves selling products or services where proceeds support a cause. This model combines commerce with charity and requires clear disclosure of how much of each purchase goes to the beneficiary. Campaigners must comply with consumer protection laws, DTI registration requirements (if applicable), and ensure product quality and delivery commitments are met.',
      },
      {
        name: 'Sponsorships',
        content:
          'Sponsorship-based fundraising involves securing financial support from businesses or individuals in exchange for recognition, branding, or access. Sponsorship agreements should be documented clearly, specifying deliverables, recognition terms, and fund allocation. Organizations must ensure sponsorship income is properly accounted for in financial reports.',
      },
      {
        name: 'Pre-orders',
        content:
          'Pre-order campaigns allow supporters to purchase products before they are manufactured or released. This model carries inherent risk — campaigners must clearly communicate timelines, production risks, and refund policies. Pre-order campaigns on Fundraising.ph require a production plan and estimated delivery schedule.',
      },
      {
        name: 'Reward-Based Fundraising',
        content:
          'Reward-based fundraising offers tiered non-financial rewards for different contribution levels. Rewards must be clearly described, realistically deliverable, and not constitute a security or investment. Campaigners should fulfill reward commitments within the stated timelines.',
      },
      {
        name: 'Membership & Subscriptions',
        content:
          'Recurring contribution models where supporters pay regularly for ongoing access, content, or benefits. Campaigners must clearly disclose billing frequency, cancellation policies, and what members receive. Subscription models must comply with consumer protection and automatic billing regulations.',
      },
    ],
  },
  {
    id: 'public-solicitation',
    value: 'public-solicitation',
    title: 'Public Solicitation Guidance',
    icon: Megaphone,
    badge: '4 topics',
    description:
      'Rules and best practices for public fundraising appeals and solicitation permits.',
    topics: [
      {
        name: 'Solicitation Permit Requirements',
        content:
          'Under Presidential Decree No. 1564, organizations conducting public solicitations in the Philippines must obtain a solicitation permit from the DSWD. This applies to door-to-door, street, and online public solicitations. Individual campaigns for personal or family needs may have different requirements depending on the scope and method of solicitation.',
      },
      {
        name: 'Online Solicitation Rules',
        content:
          'Online fundraising campaigns that reach the Philippine public may require DSWD permits, especially if conducted by organizations. The internet extends the reach of solicitation, and regulators have increasingly emphasized compliance for digital campaigns. Fundraise.ph provides guidance on when permits are needed and how to apply.',
      },
      {
        name: 'Social Media Fundraising',
        content:
          'Social media platforms have become primary channels for fundraising appeals. Campaigners should ensure their social media posts are accurate, non-misleading, and include proper disclaimers. Viral campaigns must still comply with solicitation rules and Fundraise.ph standards.',
      },
      {
        name: 'Cross-Border Solicitation',
        content:
          'Fundraising campaigns targeting Filipino diaspora communities abroad may be subject to regulations in both the host country and the Philippines. Campaigners should be aware of foreign solicitation laws, anti-money laundering requirements, and cross-border fund transfer regulations.',
      },
    ],
  },
  {
    id: 'dswd-lgu',
    value: 'dswd-lgu',
    title: 'DSWD / LGU / Local Authority Guidance',
    icon: Building2,
    badge: '4 topics',
    description:
      'Navigating government agency requirements for organized fundraising activities.',
    topics: [
      {
        name: 'DSWD Permit Process',
        content:
          'The Department of Social Welfare and Development (DSWD) issues solicitation permits for public fundraising. The application requires organizational documents, campaign details, fund utilization plans, and financial accountability measures. Processing times vary, so early application is recommended. Fundraise.ph provides templates and guidance for the application process.',
      },
      {
        name: 'Local Government Unit (LGU) Requirements',
        content:
          'Some fundraising activities may require permits or coordination with local government units, especially for events conducted in specific cities or municipalities. LGU requirements vary by locality. Campaigners should check with the local social welfare and development office or the mayor\'s office for specific requirements.',
      },
      {
        name: 'SEC Registration for Fundraising Organizations',
        content:
          'Organizations that engage in regular fundraising activities should be registered with the Securities and Exchange Commission (SEC). Non-stock, non-profit corporations must file annual reports and maintain compliance with SEC requirements. Fundraise.ph recommends that recurring fundraisers establish proper organizational registration.',
      },
      {
        name: 'BIR Tax Compliance',
        content:
          'Fundraising organizations must comply with Bureau of Internal Revenue (BIR) requirements, including registration, issuance of receipts, and annual income tax returns. Organizations seeking tax-exempt status or tax-deductible donation certification must apply for BIR certification. Individual campaign donations may have different tax implications.',
      },
    ],
  },
  {
    id: 'privacy-data',
    value: 'privacy-data',
    title: 'Privacy and Data Protection',
    icon: ShieldCheck,
    badge: '4 topics',
    description:
      'Responsibilities around personal data, donor privacy, and Data Privacy Act compliance.',
    topics: [
      {
        name: 'Data Privacy Act of 2012 (RA 10173)',
        content:
          'The Philippine Data Privacy Act governs the collection, processing, and storage of personal information. Campaigners who collect donor data must comply with data privacy principles: transparency, legitimate purpose, and proportionality. Fundraise.ph provides data privacy templates and compliance checklists for campaigners.',
      },
      {
        name: 'Donor Data Handling',
        content:
          'Donor personal information must be handled with the highest care. Campaigners must obtain consent before collecting personal data, use data only for its stated purpose, implement security measures to protect data, and respect donor requests for data access or deletion. Fundraise.ph enforces strict data handling standards on the platform.',
      },
      {
        name: 'Beneficiary Data Protection',
        content:
          'Beneficiary information — including medical records, financial status, and personal circumstances — is sensitive data. Campaigners must obtain consent before sharing beneficiary information publicly, minimize the data shared to what is necessary, and protect stored data from unauthorized access. Special care must be taken with data belonging to minors and vulnerable individuals.',
      },
      {
        name: 'Data Breach Response',
        content:
          'In the event of a data breach, campaigners and Fundraise.ph must follow the mandatory notification requirements under the Data Privacy Act. The National Privacy Commission (NPC) must be notified within 72 hours of discovering a breach involving sensitive personal information. Affected individuals must also be notified. Fundraise.ph maintains a data breach response protocol.',
      },
    ],
  },
  {
    id: 'payment-fund-flow',
    value: 'payment-fund-flow',
    title: 'Payment and Fund Flow',
    icon: CreditCard,
    badge: '4 topics',
    description:
      'How funds move from donors to beneficiaries — transparency, escrow, and disbursement.',
    topics: [
      {
        name: 'Fund Flow Transparency',
        content:
          'Fundraise.ph requires that all fund flows be traceable from the moment a donation is made to the point of disbursement to the beneficiary. This includes clear records of incoming payments, platform fees (if any), processing costs, and final amounts received by beneficiaries.',
      },
      {
        name: 'Escrow and Holding Mechanisms',
        content:
          'For campaigns that require milestone-based disbursement, Fundraise.ph supports escrow mechanisms where funds are held until specific conditions are met. This protects donors from misuse and gives beneficiaries confidence that committed funds will be available when needed.',
      },
      {
        name: 'Disbursement Protocols',
        content:
          'Fund disbursement follows documented protocols that vary by campaign type. Medical campaigns may disburse directly to hospitals. Educational campaigns may pay institutions directly. Community projects may use milestone-based releases. All disbursements are logged and visible in the campaign\'s transparency report.',
      },
      {
        name: 'Refund and Cancellation Policies',
        content:
          'If a campaign is cancelled, fails to meet its target under certain conditions, or is found to be non-compliant, Fundraise.ph has clear refund policies. Donors are notified of cancellations and refund processes. Platform-level refund policies are disclosed during the donation process.',
      },
    ],
  },
  {
    id: 'ethical-storytelling',
    value: 'ethical-storytelling',
    title: 'Ethical Storytelling',
    icon: BookHeart,
    badge: '4 topics',
    description:
      'How to tell impactful stories without exploitation, misrepresentation, or harm.',
    topics: [
      {
        name: 'Dignity-First Narratives',
        content:
          'Every campaign narrative must respect the dignity of beneficiaries. Stories should be told with, not just about, the people they represent. Avoid poverty tourism, victim narratives, or imagery that strips subjects of agency. Beneficiaries should have input into how their stories are shared.',
      },
      {
        name: 'Accurate Representation',
        content:
          'Campaign stories, images, and videos must accurately represent the situation. Staged or misleading content is prohibited. Before-and-after content must be authentic and not manipulated. Statistics and claims must be verifiable. Campaigners must avoid exaggeration or creating false urgency.',
      },
      {
        name: 'Consent for Stories and Images',
        content:
          'Using someone\'s story or image in a fundraising campaign requires informed consent. Beneficiaries must understand how their information will be used, where it will be published, and for how long. Consent must be documented and can be withdrawn at any time. Special protections apply to children and vulnerable populations.',
      },
      {
        name: 'Cultural Sensitivity',
        content:
          'The Philippines is a diverse nation with many cultures, languages, and traditions. Campaigns must be culturally sensitive and avoid stereotyping, caricaturing, or misrepresenting communities. Indigenous community campaigns require particular care and should involve community representatives in campaign development.',
      },
    ],
  },
]

export function ComplianceLibraryPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Compliance Library"
        headline="Helping campaigners understand responsible fundraising."
        description="Fundraise.ph provides educational resources to help campaigners navigate the legal, ethical, and operational requirements of fundraising in the Philippines. This library is a starting point — not a substitute for professional advice."
      />

      {/* Accordion Content */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Compliance Library
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore guides, requirements, and best practices organized by topic.
            Each category contains focused resources to help you fundraise
            responsibly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {complianceCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.id} className="overflow-hidden">
                <div className="p-6 pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <Badge variant="secondary">{category.badge}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground ml-13">
                    {category.description}
                  </p>
                </div>

                <div className="px-6 pb-6">
                  <Accordion type="multiple" className="w-full">
                    {category.topics.map((topic, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.id}-${index}`}
                      >
                        <AccordionTrigger className="text-sm font-medium hover:no-underline hover:text-emerald-600 transition-colors">
                          <span className="flex items-center gap-2">
                            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                            {topic.name}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed pl-5">
                            {topic.content}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Disclaimer */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <Alert className="border-amber-200 bg-amber-50/50">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800 font-semibold">
              Important Disclaimer
            </AlertTitle>
            <AlertDescription className="text-amber-700/90 leading-relaxed">
              Fundraise.ph provides educational and compliance-guidance
              resources. Campaigners and organizations should consult qualified
              legal, accounting, or compliance professionals when required. The
              information in this library does not constitute legal advice and
              should not be relied upon as a substitute for professional
              guidance specific to your circumstances.
            </AlertDescription>
          </Alert>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <CTABlock
          headline="Build a compliant campaign"
          subheadline="Fundraising.ph provides built-in compliance tools, document templates, and step-by-step guidance for every campaign type."
          primaryText="Use Fundraising.ph Campaign Tools"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
