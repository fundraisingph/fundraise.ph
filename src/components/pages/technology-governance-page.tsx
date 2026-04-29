'use client'

import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PLATFORM_URL } from '@/lib/technology-impact-config'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Lock, Shield, UserCheck, FileSearch, Key, Database, Heart, Eye,
} from 'lucide-react'

const principles = [
  { icon: <Lock className="h-7 w-7" />, title: 'Privacy by Design', description: 'Privacy protections are built into every system, feature, and process from the start — not added as an afterthought.', details: ['Privacy impact assessments for new features', 'Data minimization in all data collection', 'Encryption at rest and in transit', 'Privacy-preserving analytics'] },
  { icon: <Shield className="h-7 w-7" />, title: 'Security by Default', description: 'Security measures are enabled by default across all systems, with defense-in-depth strategies protecting platform operations.', details: ['Role-based access controls', 'Regular security audits', 'Secure development practices', 'Incident response procedures'] },
  { icon: <UserCheck className="h-7 w-7" />, title: 'Human Oversight Over Automation', description: 'AI and automated systems support but never replace human judgment in verification, compliance, and beneficiary protection.', details: ['Human approval for sensitive decisions', 'AI advisory-only recommendations', 'Automated actions require human sign-off', 'Beneficiary protection with human review'] },
  { icon: <FileSearch className="h-7 w-7" />, title: 'Auditability', description: 'Every verification decision, fund movement, compliance action, and AI output is logged and auditable.', details: ['Comprehensive action logging', 'Decision trail for all verification outcomes', 'AI output audit logs', 'Regular audit review cycles'] },
  { icon: <Key className="h-7 w-7" />, title: 'Least-Privilege Access', description: 'Users, administrators, and systems are granted only the minimum access necessary to perform their functions.', details: ['Role-based permission models', 'Regular access reviews', 'Separation of duties', 'Administrative action logging'] },
  { icon: <Database className="h-7 w-7" />, title: 'Data Minimization', description: 'Only the data strictly necessary for platform operations is collected, stored, and processed.', details: ['Minimal data collection by design', 'Regular data retention reviews', 'Secure data disposal procedures', 'Purpose limitation enforcement'] },
  { icon: <Heart className="h-7 w-7" />, title: 'Beneficiary Dignity', description: 'Technology must preserve and protect the dignity, privacy, and agency of every beneficiary in the system.', details: ['Consent-driven data use', 'Anti-exploitation safeguards', 'Beneficiary data protection', 'Right to modification or removal'] },
  { icon: <Eye className="h-7 w-7" />, title: 'Transparency Without Exposure', description: 'We are transparent about how systems work while protecting sensitive data from unauthorized exposure.', details: ['Public system documentation', 'Privacy-protected reporting', 'No exposure of personal data in dashboards', 'Clear data usage policies'] },
]

export function TechnologyGovernancePage() {
  const { current: heroVar } = useRotatingContent(heroVariations['technology-governance'])

  return (
    <div>
      <PageHeader
        title="Technology Governance"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <Section>
        <SectionHeading
          title="Eight Technology Governance Principles"
          subtitle="These principles govern every technology decision at Fundraise.ph. They are non-negotiable commitments that ensure our technology serves the mission — not the other way around."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="group transition-all duration-200 hover:shadow-md hover:border-gold/30 h-full"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3 group-hover:bg-gold/15 transition-colors">
                  {principle.icon}
                </div>
                <CardTitle className="text-xl text-navy">{principle.title}</CardTitle>
                <CardDescription className="text-[#4A5568] text-sm leading-relaxed">
                  {principle.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {principle.details.map((detail, dIdx) => (
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

      <CTABlock
        headline="Technology governance protects the mission."
        subheadline="Every system, feature, and AI tool operates under these principles. Visit Fundraising.ph to see them in practice."
        ctaLabel="Go to Fundraising.ph Platform"
        ctaHref={PLATFORM_URL}
      />
    </div>
  )
}
