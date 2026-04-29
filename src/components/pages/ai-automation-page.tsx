'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PLATFORM_URL } from '@/lib/technology-impact-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Info, Brain, UserCheck, FileSearch, FileText, AlertTriangle, ClipboardCheck } from 'lucide-react'

const aiCapabilities = [
  { icon: <Brain className="h-6 w-6" />, title: 'AI Campaign Setup Assistant', description: 'Helps campaigners create effective, compliant campaign descriptions and disclosures.', status: 'Future Phase' },
  { icon: <ClipboardCheck className="h-6 w-6" />, title: 'AI Compliance Checklist', description: 'Reviews campaign submissions against compliance requirements and identifies potential gaps.', status: 'Future Phase' },
  { icon: <FileSearch className="h-6 w-6" />, title: 'AI Document Completeness Review', description: 'Checks submitted documents for completeness and flags missing requirements.', status: 'Future Phase' },
  { icon: <FileText className="h-6 w-6" />, title: 'AI Report Generator', description: 'Assists campaigners in creating post-campaign reports and impact summaries.', status: 'Future Phase' },
  { icon: <AlertTriangle className="h-6 w-6" />, title: 'AI Risk Alerts', description: 'Supports identification of risk patterns and anomaly detection — flagged for human review.', status: 'Future Phase' },
]

const guardrails = [
  { title: 'Human Approval Required', description: 'All sensitive decisions — verification outcomes, campaign approvals, fund disbursements — require human sign-off.' },
  { title: 'No Automated Legal Conclusions', description: 'AI does not provide legal advice, regulatory clearance, or compliance approval. It flags items for human review.' },
  { title: 'No Auto-Approvals for High-Risk Campaigns', description: 'Campaigns flagged as higher risk are always escalated to a human reviewer, regardless of AI assessment.' },
  { title: 'Audit Logs for AI Actions', description: 'Every AI-assisted action is logged with the AI output, the human decision, and the timestamp for accountability.' },
  { title: 'Bias Review', description: 'AI systems are periodically reviewed for bias in classification, risk scoring, and recommendation patterns.' },
  { title: 'Transparency About AI Use', description: 'Campaigners and donors are informed when AI tools are used in the review process.' },
]

export function AiAutomationPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['ai-automation'])

  return (
    <div>
      <PageHeader
        title="AI & Automation"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="AI Disclaimer"
          subtitle="This is a mandatory disclosure about how Fundraise.ph uses artificial intelligence."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <div className="bg-light-gray border border-navy/10 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0">
                <Info className="h-6 w-6" />
              </div>
              <p className="text-[#4A5568] leading-relaxed text-sm">
                AI tools are used to support review, guidance, reporting, and operational efficiency. AI outputs do not replace human judgment, legal advice, regulatory review, trustee oversight, or campaign-specific verification. All AI-assisted features operate under the governance principle of Human Oversight Over Automation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Planned AI Capabilities"
          subtitle="These AI features are in the planning or future development phase. None are currently deployed in production."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((cap, index) => (
            <Card key={index} className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                  {cap.icon}
                </div>
                <CardTitle className="text-lg text-navy">{cap.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">{cap.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-xs font-medium text-[#4A5568]/60">{cap.status}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="AI Guardrails"
          subtitle="Every AI feature must pass through these guardrails before deployment."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {guardrails.map((g, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-light-gray border border-navy/10">
              <div className="w-8 h-8 rounded-lg bg-trust-blue/10 text-trust-blue flex items-center justify-center shrink-0">
                <UserCheck className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-navy mb-1">{g.title}</h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">{g.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock
        headline="AI supports. Humans decide."
        subheadline="Visit Fundraising.ph to see how technology and human oversight work together."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={PLATFORM_URL}
      />
    </div>
  )
}
