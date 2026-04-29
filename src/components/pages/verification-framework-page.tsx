'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { FUNDRAISING_PH_URL } from '@/lib/trust-governance-compliance-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Shield, FileText, Building, Users, AlertTriangle, Award, Info } from 'lucide-react'

const verificationLevels = [
  {
    level: 1,
    title: 'Basic Identity Review',
    icon: <Users className="h-6 w-6" />,
    description: 'Confirmation of the campaign organizer\'s identity through government-issued ID, contact information, and basic background check.',
    requirements: ['Valid government-issued ID', 'Verified contact information', 'Basic identity confirmation'],
  },
  {
    level: 2,
    title: 'Campaign Documentation Review',
    icon: <FileText className="h-6 w-6" />,
    description: 'Review of campaign-specific documents including purpose documentation, beneficiary information, and fundraising model details.',
    requirements: ['Campaign purpose documentation', 'Beneficiary information', 'Fundraising model disclosure', 'Use-of-funds outline'],
  },
  {
    level: 3,
    title: 'Organization Review',
    icon: <Building className="h-6 w-6" />,
    description: 'For organization-led campaigns, review of registration documents, organizational structure, and authorized representatives.',
    requirements: ['Organization registration documents', 'Authorized representative verification', 'Organizational structure confirmation'],
  },
  {
    level: 4,
    title: 'Beneficiary Validation',
    icon: <Shield className="h-6 w-6" />,
    description: 'Direct or documentary validation of the beneficiary\'s identity, situation, and connection to the campaign purpose.',
    requirements: ['Beneficiary identity confirmation', 'Situation documentation', 'Connection to campaign organizer', 'Beneficiary consent'],
  },
  {
    level: 5,
    title: 'Compliance-Sensitive Review',
    icon: <AlertTriangle className="h-6 w-6" />,
    description: 'Enhanced review for campaigns that may involve regulatory considerations, cross-border elements, or higher-risk categories.',
    requirements: ['Regulatory awareness review', 'Cross-border compliance check', 'Enhanced documentation requirements', 'Additional review pathway'],
  },
]

const verificationBadges = [
  { name: 'Organizer Verified', description: 'Campaign organizer identity has been reviewed.', color: 'bg-trust-blue/10 text-trust-blue border-trust-blue/20' },
  { name: 'Organization Verified', description: 'Registered organization documents have been reviewed.', color: 'bg-navy/10 text-navy border-navy/20' },
  { name: 'Documents Submitted', description: 'Required campaign documentation has been submitted.', color: 'bg-gold/10 text-navy border-gold/30' },
  { name: 'Beneficiary Confirmed', description: 'Beneficiary identity and situation have been validated.', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { name: 'Marketplace Fundraising', description: 'Campaign involves marketplace or product-based fundraising.', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { name: 'Sponsor Supported', description: 'Campaign involves sponsor participation, clearly disclosed.', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { name: 'Compliance Review Completed', description: 'Campaign has undergone compliance-sensitive review.', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { name: 'Final Report Submitted', description: 'Post-campaign report has been submitted and published.', color: 'bg-teal-50 text-teal-700 border-teal-200' },
  { name: 'Campaign Completed', description: 'Campaign has been completed with all reporting fulfilled.', color: 'bg-green-50 text-green-700 border-green-200' },
]

export function VerificationFrameworkPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['verification-framework'])

  return (
    <div>
      <PageHeader
        title="Verification Framework"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="Five Verification Levels"
          subtitle="Verification at Fundraise.ph is layered and campaign-specific. Different campaigns may require different levels of review based on their type, model, and risk profile."
        />
        <div className="space-y-6">
          {verificationLevels.map((level) => (
            <Card
              key={level.level}
              className="group transition-all duration-200 hover:shadow-md hover:border-gold/30"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg">
                      {level.level}
                    </div>
                    <div className="p-2.5 rounded-xl bg-trust-blue/10 text-trust-blue">
                      {level.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy mb-1">{level.title}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed mb-3">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.requirements.map((req, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs font-medium border-navy/20">
                          <CheckCircle2 className="h-3 w-3 mr-1 text-gold" />
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          title="Verification Badges"
          subtitle="Badges provide at-a-glance indicators of what review steps have been completed for a campaign."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {verificationBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-navy/10 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <Badge className={`mb-1.5 ${badge.color}`}>{badge.name}</Badge>
                  <p className="text-xs text-[#4A5568] leading-relaxed">{badge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Review Workflow"
          subtitle="The verification process follows a structured workflow designed to be thorough, fair, and transparent."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: 'Submit', desc: 'Campaigner submits identity, documents, and campaign details.' },
              { step: 'Review', desc: 'Fundraise.ph reviews submissions against verification standards.' },
              { step: 'Decide', desc: 'Verification level is assigned based on available documentation.' },
              { step: 'Display', desc: 'Verification badges are displayed on the campaign page.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {index + 1}
                </div>
                <h4 className="font-bold text-navy mb-1">{item.step}</h4>
                <p className="text-xs text-[#4A5568] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
                <h3 className="text-lg font-bold text-navy mb-2">Verification Badge Disclaimer</h3>
                <p className="text-[#4A5568] leading-relaxed text-sm">
                  A verification badge is not a blanket guarantee, legal clearance, or endorsement. It reflects the review level completed based on available documents and platform standards. Verification does not replace independent due diligence by donors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTABlock
        headline="Explore verified campaigns on Fundraising.ph"
        subheadline="See the verification framework in action. Every campaign displays its verification status and review level."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={FUNDRAISING_PH_URL}
      />
    </div>
  )
}
