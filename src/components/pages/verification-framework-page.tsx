'use client'

import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useNavigation } from '@/lib/navigation'
import {
  UserCheck,
  FileSearch,
  Building2,
  Users,
  ShieldAlert,
  Shield,
  Award,
  CheckCircle2,
  Star,
  Fingerprint,
  Eye,
  Lock,
  MessageSquare,
  HandHeart,
  TrendingUp,
  BadgeCheck,
  AlertTriangle,
  ChevronRight,
} from 'lucide-react'

const verificationLevels = [
  {
    level: 1,
    title: 'Basic Identity Review',
    icon: UserCheck,
    color: 'from-slate-500 to-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    textColor: 'text-slate-700',
    description:
      'Confirms the identity of the campaign organizer through government-issued ID and contact verification.',
    requirements: [
      'Valid government-issued ID (passport, driver\'s license, national ID, etc.)',
      'Verified email address and phone number',
      'Selfie verification matching submitted ID',
      'Basic background check against known fraud databases',
    ],
  },
  {
    level: 2,
    title: 'Campaign Documentation Review',
    icon: FileSearch,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700',
    description:
      'Validates that the campaign\'s claims are supported by verifiable documentation and evidence.',
    requirements: [
      'Supporting documents for campaign purpose (medical records, project plans, etc.)',
      'Cost estimates or budget breakdowns from credible sources',
      'Proof of relationship between organizer and beneficiary',
      'Photographic or documentary evidence of the stated need',
    ],
  },
  {
    level: 3,
    title: 'Organization Review',
    icon: Building2,
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-700',
    description:
      'For organization-led campaigns: verifies the organization\'s legal standing, governance, and financial health.',
    requirements: [
      'SEC or CDA registration documents for organizations',
      'Articles of incorporation and bylaws',
      'List of board members and officers with contact details',
      'Most recent financial statements or annual reports',
      'DSWD registration or accreditation (if applicable)',
    ],
  },
  {
    level: 4,
    title: 'Beneficiary Validation',
    icon: Users,
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700',
    description:
      'Directly confirms the identity and circumstances of the beneficiary, ensuring they are aware of and consent to the campaign.',
    requirements: [
      'Beneficiary identity verification (government-issued ID)',
      'Documented consent from the beneficiary (or legal guardian)',
      'Confirmation that the beneficiary is aware of the campaign details',
      'Verification of the beneficiary\'s stated circumstances',
      'Direct communication with the beneficiary (when possible)',
    ],
  },
  {
    level: 5,
    title: 'Compliance-Sensitive Review',
    icon: ShieldAlert,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-700',
    description:
      'Enhanced review for campaigns in sensitive categories or those flagged for additional scrutiny.',
    requirements: [
      'Triggered for high-value campaigns, sensitive categories, or community reports',
      'Full documentation audit and cross-referencing',
      'Legal compliance review (solicitation permits, DSWD registration)',
      'Anti-money laundering (AML) screening for large fund flows',
      'Independent third-party verification where appropriate',
      'Enhanced ongoing monitoring throughout the campaign lifecycle',
    ],
  },
]

const campaignBadges = [
  {
    name: 'Identity Verified',
    icon: Fingerprint,
    description: 'Organizer identity confirmed',
    color: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  },
  {
    name: 'Docs Reviewed',
    icon: FileSearch,
    description: 'Campaign documents verified',
    color: 'bg-teal-100 text-teal-700 border-teal-300',
  },
  {
    name: 'Org Verified',
    icon: Building2,
    description: 'Organization validated',
    color: 'bg-cyan-100 text-cyan-700 border-cyan-300',
  },
  {
    name: 'Beneficiary Confirmed',
    icon: Users,
    description: 'Beneficiary validated',
    color: 'bg-amber-100 text-amber-700 border-amber-300',
  },
  {
    name: 'Compliance Cleared',
    icon: Shield,
    description: 'Regulatory compliance confirmed',
    color: 'bg-violet-100 text-violet-700 border-violet-300',
  },
  {
    name: 'Transparent',
    icon: Eye,
    description: 'Full fund flow visibility',
    color: 'bg-sky-100 text-sky-700 border-sky-300',
  },
  {
    name: 'Data Protected',
    icon: Lock,
    description: 'Data privacy compliant',
    color: 'bg-indigo-100 text-indigo-700 border-indigo-300',
  },
  {
    name: 'Community Endorsed',
    icon: MessageSquare,
    description: 'Peer-validated by community',
    color: 'bg-pink-100 text-pink-700 border-pink-300',
  },
  {
    name: 'Impact Tracked',
    icon: TrendingUp,
    description: 'Post-campaign impact reported',
    color: 'bg-orange-100 text-orange-700 border-orange-300',
  },
]

export function VerificationFrameworkPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      <PageHeader
        title="Verification Framework"
        headline="Verification should be layered, documented, and campaign-specific."
        description="Fundraise.ph uses a five-level verification framework that scales with campaign complexity. Higher-risk campaigns require deeper verification — protecting everyone involved."
      />

      {/* Verification Levels */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Verification Framework
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Five Levels of Verification
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each level adds a layer of trust. Most campaigns require Levels 1–3.
            Levels 4–5 are triggered by campaign type, value, or risk
            indicators.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {verificationLevels.map((level) => {
            const Icon = level.icon
            return (
              <Card
                key={level.level}
                className={`overflow-hidden border-2 ${level.borderColor} hover:shadow-lg transition-all duration-300`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${level.color}`} />
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${level.bgColor} flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`h-7 w-7 ${level.textColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <Badge
                          variant="outline"
                          className={`font-bold ${level.bgColor} ${level.textColor} border-current`}
                        >
                          Level {level.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{level.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {level.description}
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {level.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <ChevronRight
                            className={`h-4 w-4 mt-0.5 shrink-0 ${level.textColor}`}
                          />
                          <span className="text-foreground/80 leading-relaxed">
                            {req}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Campaign Badges */}
      <Section dark>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Campaign Badges
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Verification Badges
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Badges are earned through our verification process. They signal to
            donors what level of review a campaign has passed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {campaignBadges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl border ${badge.color} transition-all duration-300 hover:shadow-md hover:scale-[1.02]`}
              >
                <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{badge.name}</h3>
                  <p className="text-xs opacity-75">{badge.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Important Statement */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Alert className="border-amber-200 bg-amber-50/50">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800 font-semibold">
              Important
            </AlertTitle>
            <AlertDescription className="text-amber-700/90 leading-relaxed">
              A verification badge is not a blanket guarantee, legal clearance,
              or endorsement. It indicates that a specific verification process
              has been completed for a specific campaign at a specific point in
              time. Donors should always exercise their own judgment, and
              beneficiaries should understand what verification means — and what
              it does not.
            </AlertDescription>
          </Alert>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <CTABlock
          headline="Discover verified campaigns"
          subheadline="See which campaigns have earned verification badges and explore transparent fund flows on Fundraising.ph."
          primaryText="View Verified Campaigns on Fundraising.ph"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
