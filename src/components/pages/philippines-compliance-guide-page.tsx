'use client'

import { Hero } from '@/components/shared/hero'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTAButton } from '@/components/shared/cta-button'
import { SEOBlock } from '@/components/shared/seo-block'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup, faqPageSchema, breadcrumbSchema, articleSchema } from '@/components/shared/schema-markup'
import { useNavigation } from '@/lib/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Scale,
  FileText,
  Shield,
  Building2,
  DollarSign,
  Users,
  AlertTriangle,
  CheckCircle2,
  Info,
  Landmark,
  Receipt,
  Globe,
} from 'lucide-react'

const faqItems = [
  {
    question: 'Do I need a permit to run a fundraising campaign in the Philippines?',
    answer: 'It depends on the type of fundraising. Public solicitation for charitable purposes may require a DSWD permit or local government unit (LGU) permit. Personal fundraising for medical expenses or emergencies generally does not require a permit, but documentation of the beneficiary and purpose is still recommended. Fundraise.ph provides guidance but does not replace legal advice.',
  },
  {
    question: 'What is the role of the SEC in Philippine fundraising?',
    answer: 'The Securities and Exchange Commission (SEC) regulates corporations and partnerships, including non-stock, non-profit organizations that conduct fundraising. If your campaign is run by a registered organization, SEC guidelines on solicitation, reporting, and corporate governance may apply. Individual campaigners running personal campaigns typically do not interact with the SEC directly.',
  },
  {
    question: 'Are donations to campaigns tax-deductible in the Philippines?',
    answer: 'Tax deductibility depends on whether the recipient is an accredited donee institution registered with the BIR. Donations to individuals or unaccredited organizations are generally not tax-deductible. Campaign organizers should consult a tax professional to understand the specific tax implications of their fundraising activity.',
  },
  {
    question: 'What documents might be required for a charitable fundraising campaign?',
    answer: 'Required documents may include DSWD certification or permit, SEC registration (for organizations), BIR certificate of tax exemption, barangay or LGU clearance, organizer identification, and beneficiary documentation. The specific requirements vary by campaign type, scope, and location.',
  },
  {
    question: 'How does Fundraise.ph help with compliance?',
    answer: 'Fundraise.ph provides built-in compliance guidance through campaign classification, document checklists, disclosure templates, and educational resources. The platform guides campaigners through appropriate categories, prompts for required documentation, and displays verification status transparently. However, Fundraise.ph does not provide legal or regulatory clearance.',
  },
  {
    question: 'What are the penalties for non-compliance with fundraising regulations?',
    answer: 'Penalties vary depending on the violation and applicable law. They may include fines from the DSWD or local government, revocation of permits, or legal action. Fundraise.ph encourages all campaigners to understand their obligations and seek professional legal advice when uncertain about compliance requirements.',
  },
  {
    question: 'Can overseas Filipinos run fundraising campaigns for beneficiaries in the Philippines?',
    answer: 'Yes. Overseas Filipinos can organize campaigns on Fundraise.ph. Cross-border fundraising may involve additional considerations such as fund transfer regulations, foreign donation reporting, and compliance with both the host country and Philippine regulations. Fundraise.ph provides guidance on compliance-aware cross-border giving.',
  },
]

const regulationAreas = [
  {
    icon: <Scale className="h-6 w-6" />,
    title: 'SEC Guidelines',
    description: 'The Securities and Exchange Commission oversees registered organizations conducting public solicitation. Non-stock, non-profit corporations must follow SEC rules on fundraising, financial reporting, and corporate governance.',
    details: [
      'Registration requirements for fundraising organizations',
      'Financial reporting and disclosure obligations',
      'Corporate governance standards for non-profits',
      'Rules on public solicitation by registered entities',
    ],
  },
  {
    icon: <Landmark className="h-6 w-6" />,
    title: 'DSWD Permits',
    description: 'The Department of Social Welfare and Development regulates public solicitation for charitable or welfare purposes. Organizations and individuals conducting public fundraising for social welfare may need a DSWD permit.',
    details: [
      'Public solicitation permit requirements',
      'Application process and documentation',
      'Reporting obligations after fundraising',
      'Exemptions and special cases',
    ],
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: 'Local Government Permits',
    description: 'Local government units may require permits for fundraising activities conducted within their jurisdiction, especially for public events, door-to-door solicitation, or community-based campaigns.',
    details: [
      'Barangay clearance requirements',
      'Municipal or city permits for public solicitation',
      'Event-specific permits for fundraising activities',
      'Coordination with local social welfare offices',
    ],
  },
  {
    icon: <Receipt className="h-6 w-6" />,
    title: 'BIR Requirements',
    description: 'The Bureau of Internal Revenue sets rules for tax-deductible donations and the tax treatment of funds raised. Organizations seeking to issue tax-deductible receipts must be BIR-accredited donee institutions.',
    details: [
      'Tax-deductible donation requirements',
      'BIR accreditation for donee institutions',
      'Receipting and documentation standards',
      'Income tax considerations for fundraised amounts',
    ],
  },
]

const fundraisingTypes = [
  {
    type: 'Personal Emergency Fundraising',
    regulation: 'Generally no permit required for personal or family emergencies. Medical bills, disaster relief for family, or personal crises typically fall outside public solicitation regulations.',
    icon: <Users className="h-6 w-6" />,
  },
  {
    type: 'Charitable or Public Solicitation',
    regulation: 'May require DSWD permit, LGU clearance, and SEC registration if conducted by an organization. Public fundraising for third-party beneficiaries usually triggers regulatory requirements.',
    icon: <Shield className="h-6 w-6" />,
  },
  {
    type: 'Organization-Led Campaigns',
    regulation: 'Registered non-profits must follow SEC reporting, DSWD permit requirements, and BIR tax-exemption rules. Corporate governance and financial transparency standards apply.',
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    type: 'Marketplace Fundraising',
    regulation: 'Product-based or pre-order campaigns must comply with consumer protection laws, DTI regulations on product sales, and truthful advertising standards. Business permits may be required.',
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    type: 'Disaster Relief Campaigns',
    regulation: 'Large-scale disaster relief fundraising often requires DSWD coordination, especially when soliciting from the general public. LGU permits and transparent fund flow documentation are expected.',
    icon: <Globe className="h-6 w-6" />,
  },
  {
    type: 'Cross-Border Fundraising',
    regulation: 'Fundraising involving overseas donors or beneficiaries in multiple countries may involve BSP regulations on fund transfers, foreign donation reporting, and compliance with both Philippine and foreign regulations.',
    icon: <AlertTriangle className="h-6 w-6" />,
  },
]

const taxImplications = [
  {
    category: 'Donor Tax Deductions',
    items: [
      'Donations to BIR-accredited donee institutions may be tax-deductible',
      'Donations to individuals are generally not tax-deductible',
      'Corporate donors have different deduction limits than individual donors',
      'Proper receipting is required for any tax deduction claim',
    ],
  },
  {
    category: 'Organizer Tax Considerations',
    items: [
      'Funds raised for personal medical expenses may be considered gifts, not taxable income',
      'Funds raised for business purposes may be treated as taxable income',
      'Non-profit organizations must follow BIR reporting requirements',
      'Marketplace fundraising may be subject to VAT or percentage tax',
    ],
  },
  {
    category: 'Platform Reporting',
    items: [
      'Fundraise.ph provides transaction records for all campaigns',
      'Campaign financial summaries are available for compliance reporting',
      'Fund flow documentation supports tax filing and audit requirements',
      'Annual campaign reports may be generated for organizational filers',
    ],
  },
]

const breadcrumbData = [
  { name: 'Home', url: 'https://fundraise.ph' },
  { name: 'Trust & Compliance', url: 'https://fundraise.ph/#compliance' },
  { name: 'Philippines Fundraising Compliance Guide', url: 'https://fundraise.ph/#philippines-compliance-guide' },
]

const articleData = {
  headline: 'Philippines Fundraising Compliance Guide',
  description: 'A comprehensive guide to fundraising compliance in the Philippines, covering SEC, DSWD, LGU permits, BIR requirements, and platform compliance.',
  author: 'Fundraise.ph Trust Team',
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
}

export function PhilippinesComplianceGuidePage() {
  useNavigation()

  return (
    <div>
      <SchemaMarkup schemas={[
        breadcrumbSchema(breadcrumbData),
        articleSchema(articleData),
        faqPageSchema(faqItems),
      ]} />

      <Hero
        badge="Compliance Guide"
        headline="Philippines Fundraising {Compliance Guide}"
        subheadline="Navigate SEC, DSWD, BIR, and local government requirements for fundraising in the Philippines. Fundraise.ph provides built-in compliance guidance for every campaign."
      />

      <Section>
        <AnswerBlock
          question="What compliance rules apply to fundraising in the Philippines?"
          answer="Fundraising in the Philippines is governed by multiple regulatory bodies depending on the campaign type. The SEC oversees organizational fundraising, DSWD regulates public charitable solicitation, local government units issue permits for community campaigns, and the BIR sets rules for tax-deductible donations. Most personal emergency campaigns require no permit, but public charitable solicitation typically requires DSWD authorization and proper documentation."
        />
      </Section>

      <Section dark>
        <SectionHeading
          title="Philippine Fundraising Regulations Overview"
          subtitle="Fundraising activities in the Philippines are subject to a layered regulatory framework. Understanding which rules apply to your campaign is the first step toward compliance."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regulationAreas.map((area, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                  {area.icon}
                </div>
                <CardTitle className="text-lg text-navy">{area.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Types of Fundraising and Applicable Regulations"
          subtitle="Different fundraising models trigger different regulatory requirements. Knowing your campaign type helps you understand which rules apply."
        />
        <div className="space-y-4">
          {fundraisingTypes.map((item, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-navy/10 text-navy shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy mb-1">{item.type}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{item.regulation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Solicitation Permits and When They Are Required"
          subtitle="Not all fundraising requires a permit, but public solicitation for charitable purposes often does. Here is when permits are typically needed."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Public solicitation from the general public for charitable purposes',
              'Door-to-door or street-level fundraising activities',
              'Fundraising events held in public spaces or malls',
              'Organization-led campaigns soliciting from the public',
              'Large-scale disaster relief campaigns',
              'Campaigns involving partnerships with government agencies',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-navy/10">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-[#4A5568] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-trust-blue/5 border border-trust-blue/20">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-trust-blue shrink-0 mt-0.5" />
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Personal fundraising for family emergencies, medical bills, or educational expenses generally does not require a solicitation permit. However, documentation of purpose and beneficiary is always recommended.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Tax Implications for Donors and Organizers"
          subtitle="Understanding the tax treatment of donations helps both donors and campaigners make informed decisions."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {taxImplications.map((section, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg text-navy">{section.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-sm text-[#4A5568]">
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
        <SectionHeading
          title="How Fundraise.ph Supports Compliance"
          subtitle="Fundraise.ph integrates compliance guidance directly into the campaign creation and management process."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Campaign classification system identifies applicable requirements',
              'Document checklists tailored to each campaign type',
              'Disclosure templates for sponsor, affiliate, and marketplace campaigns',
              'Verification framework with transparent status display',
              'Educational resources on Philippine fundraising regulations',
              'Fund flow tracking and transaction documentation',
              'Post-campaign reporting templates',
              'Compliance-aware cross-border giving guidance',
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
        <ProofBlock variant="default">
          Fundraise.ph does not replace legal advice. Campaign organizers are responsible for ensuring their fundraising activity complies with applicable Philippine laws, platform rules, and permit requirements. Fundraise.ph provides educational and operational guidance to support compliance-aware fundraising.
        </ProofBlock>
      </Section>

      <Section dark>
        <SectionHeading title="Frequently Asked Questions" centered />
        <div className="max-w-3xl mx-auto">
          <SEOBlock items={faqItems} />
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <AuthorBox lastUpdated="2026-06-10" />
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto">
          <InternalLinks links={[
            { label: 'Compliance Overview', page: 'compliance' },
            { label: 'Verification Framework', page: 'verification-framework' },
            { label: 'Campaign Standards', page: 'campaign-standards' },
            { label: 'Trust & Transparency', page: 'trust-transparency' },
            { label: 'Governance', page: 'governance' },
            { label: 'Policies', page: 'policies' },
          ]} />
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Start a Compliance-Aware Campaign</h2>
          <p className="text-[#4A5568] text-lg mb-8 max-w-2xl mx-auto">
            Fundraise.ph guides you through compliance requirements from campaign creation to post-campaign reporting.
          </p>
          <CTAButton href="https://fundraise.ph">Create a Campaign</CTAButton>
        </div>
      </Section>
    </div>
  )
}
