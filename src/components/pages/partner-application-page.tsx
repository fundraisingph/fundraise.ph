'use client'

import { useState, useCallback } from 'react'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { useNavigation } from '@/lib/navigation'
import { PageHeader } from '@/components/shared/page-header'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Building2,
  User,
  MessageSquare,
  ClipboardCheck,
  Loader2,
  AlertCircle,
  FileText,
  Handshake,
} from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  organizationName: string
  partnerType: string
  website: string
  description: string
  mission: string
  contactPerson: string
  email: string
  phone: string
  howHeard: string
  agreedToTerms: boolean
}

interface FormErrors {
  [key: string]: string
}

type Step = 1 | 2 | 3 | 4

const PARTNER_TYPES = [
  'NGO',
  'School',
  'Church',
  'LGU',
  'Corporate Sponsor',
  'Supplier',
  'Diaspora Organization',
  'Technology Partner',
  'Legal/Compliance',
] as const

const HOW_HEARD_OPTIONS = [
  'Social Media',
  'Word of Mouth',
  'Search Engine',
  'News Article',
  'Community Event',
  'Partner Referral',
  'Website',
  'Other',
] as const

const STEPS = [
  { number: 1 as Step, title: 'Organization', icon: Building2 },
  { number: 2 as Step, title: 'Contact', icon: User },
  { number: 3 as Step, title: 'Additional', icon: MessageSquare },
  { number: 4 as Step, title: 'Review', icon: ClipboardCheck },
]

const INITIAL_FORM: FormData = {
  organizationName: '',
  partnerType: '',
  website: '',
  description: '',
  mission: '',
  contactPerson: '',
  email: '',
  phone: '',
  howHeard: '',
  agreedToTerms: false,
}

// ─── Step Indicator ──────────────────────────────────────────────────────────

function StepIndicator({ currentStep }: { currentStep: Step }) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Progress bar */}
      <div className="relative mb-6">
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentStep - 1) / 3) * 100}%`,
              background: 'linear-gradient(90deg, #0A1F44, #C8A951)',
            }}
          />
        </div>
      </div>

      {/* Step circles and labels */}
      <div className="flex justify-between">
        {STEPS.map((step) => {
          const isCompleted = currentStep > step.number
          const isCurrent = currentStep === step.number
          const Icon = step.icon

          return (
            <div key={step.number} className="flex flex-col items-center gap-2">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${isCompleted
                    ? 'bg-[#0A1F44] text-white'
                    : isCurrent
                      ? 'bg-[#C8A951] text-[#0A1F44] ring-4 ring-[#C8A951]/20'
                      : 'bg-gray-100 text-gray-400'
                  }
                `}
              >
                {isCompleted ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Icon className="h-5 w-5" />
                )}
              </div>
              <span
                className={`text-xs font-medium hidden sm:block ${
                  isCurrent ? 'text-[#0A1F44]' : isCompleted ? 'text-[#0A1F44]' : 'text-gray-400'
                }`}
              >
                {step.title}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Validation ──────────────────────────────────────────────────────────────

function validateStep(step: Step, data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (step === 1) {
    if (!data.organizationName.trim()) errors.organizationName = 'Organization name is required'
    if (!data.partnerType) errors.partnerType = 'Partner type is required'
    if (!data.description.trim()) errors.description = 'Description is required'
    if (data.description.trim() && data.description.trim().length < 20) {
      errors.description = 'Description must be at least 20 characters'
    }
  }

  if (step === 2) {
    if (!data.contactPerson.trim()) errors.contactPerson = 'Contact person name is required'
    if (!data.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address'
    }
    if (!data.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-+()]{7,}$/.test(data.phone)) {
      errors.phone = 'Please enter a valid phone number'
    }
  }

  if (step === 3) {
    if (!data.agreedToTerms) errors.agreedToTerms = 'You must agree to the terms to proceed'
  }

  return errors
}

// ─── Step 1: Organization Details ────────────────────────────────────────────

function StepOne({
  data,
  errors,
  onChange,
  onPartnerTypeChange,
}: {
  data: FormData
  errors: FormErrors
  onChange: (field: keyof FormData, value: string) => void
  onPartnerTypeChange: (value: string) => void
}) {
  return (
    <Card className="border-gray-200 shadow-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0A1F44]/10 flex items-center justify-center">
            <Building2 className="h-5 w-5 text-[#0A1F44]" />
          </div>
          <div>
            <CardTitle className="text-[#0A1F44] text-lg">Organization Details</CardTitle>
            <CardDescription>Tell us about your organization and why you want to partner with Fundraise.ph</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Organization Name */}
        <div className="space-y-2">
          <Label htmlFor="organizationName" className="text-[#0A1F44] font-medium">
            Organization Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="organizationName"
            placeholder="e.g. Philippine Red Cross - Cebu Chapter"
            value={data.organizationName}
            onChange={(e) => onChange('organizationName', e.target.value)}
            className={errors.organizationName ? 'border-red-400 focus-visible:border-red-500' : ''}
            aria-invalid={!!errors.organizationName}
          />
          {errors.organizationName && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.organizationName}
            </p>
          )}
        </div>

        {/* Partner Type */}
        <div className="space-y-2">
          <Label className="text-[#0A1F44] font-medium">
            Partner Type <span className="text-red-500">*</span>
          </Label>
          <Select value={data.partnerType} onValueChange={onPartnerTypeChange}>
            <SelectTrigger
              className={`w-full ${errors.partnerType ? 'border-red-400' : ''}`}
              aria-invalid={!!errors.partnerType}
            >
              <SelectValue placeholder="Select your partner type" />
            </SelectTrigger>
            <SelectContent>
              {PARTNER_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.partnerType && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.partnerType}
            </p>
          )}
        </div>

        {/* Website */}
        <div className="space-y-2">
          <Label htmlFor="website" className="text-[#0A1F44] font-medium">
            Website <span className="text-gray-400 font-normal">(optional)</span>
          </Label>
          <Input
            id="website"
            type="url"
            placeholder="https://your-organization.org"
            value={data.website}
            onChange={(e) => onChange('website', e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-[#0A1F44] font-medium">
            Organization Description <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="description"
            placeholder="Describe your organization, what you do, and the communities you serve..."
            value={data.description}
            onChange={(e) => onChange('description', e.target.value)}
            className={`min-h-28 ${errors.description ? 'border-red-400' : ''}`}
            aria-invalid={!!errors.description}
          />
          {errors.description && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.description}
            </p>
          )}
        </div>

        {/* Mission */}
        <div className="space-y-2">
          <Label htmlFor="mission" className="text-[#0A1F44] font-medium">
            Mission Statement <span className="text-gray-400 font-normal">(optional)</span>
          </Label>
          <Textarea
            id="mission"
            placeholder="Share your organization's mission and values..."
            value={data.mission}
            onChange={(e) => onChange('mission', e.target.value)}
            className="min-h-20"
          />
        </div>
      </CardContent>
    </Card>
  )
}

// ─── Step 2: Contact Information ─────────────────────────────────────────────

function StepTwo({
  data,
  errors,
  onChange,
}: {
  data: FormData
  errors: FormErrors
  onChange: (field: keyof FormData, value: string) => void
}) {
  return (
    <Card className="border-gray-200 shadow-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#2B4C7E]/10 flex items-center justify-center">
            <User className="h-5 w-5 text-[#2B4C7E]" />
          </div>
          <div>
            <CardTitle className="text-[#0A1F44] text-lg">Contact Information</CardTitle>
            <CardDescription>How can our team reach you regarding your application?</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Contact Person */}
        <div className="space-y-2">
          <Label htmlFor="contactPerson" className="text-[#0A1F44] font-medium">
            Contact Person <span className="text-red-500">*</span>
          </Label>
          <Input
            id="contactPerson"
            placeholder="Full name of primary contact"
            value={data.contactPerson}
            onChange={(e) => onChange('contactPerson', e.target.value)}
            className={errors.contactPerson ? 'border-red-400' : ''}
            aria-invalid={!!errors.contactPerson}
          />
          {errors.contactPerson && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.contactPerson}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#0A1F44] font-medium">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="contact@organization.org"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            className={errors.email ? 'border-red-400' : ''}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#0A1F44] font-medium">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+63 9XX XXX XXXX"
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className={errors.phone ? 'border-red-400' : ''}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.phone}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// ─── Step 3: Additional Info ─────────────────────────────────────────────────

function StepThree({
  data,
  errors,
  onChange,
  onHowHeardChange,
  onTermsChange,
}: {
  data: FormData
  errors: FormErrors
  onChange: (field: keyof FormData, value: string) => void
  onHowHeardChange: (value: string) => void
  onTermsChange: (checked: boolean) => void
}) {
  return (
    <Card className="border-gray-200 shadow-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C8A951]/15 flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-[#C8A951]" />
          </div>
          <div>
            <CardTitle className="text-[#0A1F44] text-lg">Additional Information</CardTitle>
            <CardDescription>A few more details to complete your application</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* How did you hear about us */}
        <div className="space-y-2">
          <Label className="text-[#0A1F44] font-medium">
            How did you hear about Fundraise.ph? <span className="text-gray-400 font-normal">(optional)</span>
          </Label>
          <Select value={data.howHeard} onValueChange={onHowHeardChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {HOW_HEARD_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Terms Agreement */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F7F8FA] border border-gray-100">
            <Checkbox
              id="agreedToTerms"
              checked={data.agreedToTerms}
              onCheckedChange={(checked) => onTermsChange(checked === true)}
              className="mt-0.5 data-[state=checked]:bg-[#0A1F44] data-[state=checked]:border-[#0A1F44]"
            />
            <div className="space-y-1">
              <Label htmlFor="agreedToTerms" className="text-[#0A1F44] font-medium cursor-pointer">
                Terms of Partnership Agreement <span className="text-red-500">*</span>
              </Label>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                By submitting this application, I confirm that the information provided is accurate and I agree
                to the Fundraise.ph partnership standards, including verification requirements, transparency
                commitments, compliance awareness, and beneficiary protection principles. I understand that
                all partners are held to the same trust standards that define the Fundraise.ph ecosystem.
              </p>
            </div>
          </div>
          {errors.agreedToTerms && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.agreedToTerms}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// ─── Step 4: Review & Submit ─────────────────────────────────────────────────

function StepFour({ data }: { data: FormData }) {
  const reviewSections = [
    {
      title: 'Organization Details',
      icon: Building2,
      items: [
        { label: 'Organization Name', value: data.organizationName },
        { label: 'Partner Type', value: data.partnerType },
        { label: 'Website', value: data.website || 'Not provided' },
        { label: 'Description', value: data.description },
        { label: 'Mission', value: data.mission || 'Not provided' },
      ],
    },
    {
      title: 'Contact Information',
      icon: User,
      items: [
        { label: 'Contact Person', value: data.contactPerson },
        { label: 'Email', value: data.email },
        { label: 'Phone', value: data.phone },
      ],
    },
    {
      title: 'Additional Information',
      icon: MessageSquare,
      items: [
        { label: 'How did you hear about us', value: data.howHeard || 'Not provided' },
        { label: 'Terms Agreement', value: data.agreedToTerms ? 'Agreed' : 'Not agreed' },
      ],
    },
  ]

  return (
    <Card className="border-gray-200 shadow-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C8A951]/15 flex items-center justify-center">
            <ClipboardCheck className="h-5 w-5 text-[#C8A951]" />
          </div>
          <div>
            <CardTitle className="text-[#0A1F44] text-lg">Review Your Application</CardTitle>
            <CardDescription>Please review all details before submitting your partner application</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {reviewSections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="border border-gray-100 rounded-lg overflow-hidden">
              <div className="bg-[#F7F8FA] px-4 py-3 flex items-center gap-2">
                <Icon className="h-4 w-4 text-[#0A1F44]" />
                <h4 className="font-semibold text-[#0A1F44] text-sm">{section.title}</h4>
              </div>
              <div className="divide-y divide-gray-50">
                {section.items.map((item) => (
                  <div key={item.label} className="px-4 py-3 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                    <span className="text-sm font-medium text-[#4A5568] min-w-[160px] shrink-0">
                      {item.label}
                    </span>
                    <span className="text-sm text-[#0A1F44] break-words">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* Submission notice */}
        <div className="bg-[#0A1F44]/5 border border-[#0A1F44]/10 rounded-lg p-4 flex gap-3">
          <FileText className="h-5 w-5 text-[#0A1F44] shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-[#0A1F44]">What happens next?</p>
            <p className="text-sm text-[#4A5568] mt-1">
              After submission, our team will review your application for alignment with Fundraise.ph trust
              standards. You can expect a response within 5-7 business days. Approved partners proceed to
              onboarding and then go live in the ecosystem.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// ─── Success State ───────────────────────────────────────────────────────────

function SuccessState({ onBackToPartners }: { onBackToPartners: () => void }) {
  return (
    <div className="max-w-xl mx-auto text-center py-12">
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="h-10 w-10 text-green-600" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F44] mb-3">
        Application Submitted!
      </h2>
      <p className="text-[#4A5568] text-lg leading-relaxed mb-2">
        Thank you for your interest in partnering with Fundraise.ph.
      </p>
      <p className="text-[#4A5568] leading-relaxed mb-8 max-w-md mx-auto">
        Our team will review your application for alignment with our trust standards.
        You can expect a response within 5-7 business days. We look forward to building trust together.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          onClick={onBackToPartners}
          variant="outline"
          className="border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Partners
        </Button>
      </div>
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function PartnerApplicationPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['partner-application'] || heroVariations['partner-with-us'])
  const { navigate } = useNavigation()

  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear field error on change
    setErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }, [])

  const handlePartnerTypeChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, partnerType: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next.partnerType
      return next
    })
  }, [])

  const handleHowHeardChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, howHeard: value }))
  }, [])

  const handleTermsChange = useCallback((checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreedToTerms: checked }))
    if (checked) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next.agreedToTerms
        return next
      })
    }
  }, [])

  const goToNext = useCallback(() => {
    const stepErrors = validateStep(currentStep, formData)
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }
    setErrors({})
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as Step)
    }
  }, [currentStep, formData])

  const goToPrev = useCallback(() => {
    setErrors({})
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step)
    }
  }, [currentStep])

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to submit application')
      }

      setIsSubmitted(true)
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <div>
      <PageHeader
        title="Partner Application"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Success state */}
          {isSubmitted ? (
            <SuccessState onBackToPartners={() => navigate('partner-with-us')} />
          ) : (
            <>
              {/* Step indicator */}
              <StepIndicator currentStep={currentStep} />

              {/* Step content */}
              {currentStep === 1 && (
                <StepOne
                  data={formData}
                  errors={errors}
                  onChange={handleChange}
                  onPartnerTypeChange={handlePartnerTypeChange}
                />
              )}
              {currentStep === 2 && (
                <StepTwo
                  data={formData}
                  errors={errors}
                  onChange={handleChange}
                />
              )}
              {currentStep === 3 && (
                <StepThree
                  data={formData}
                  errors={errors}
                  onChange={handleChange}
                  onHowHeardChange={handleHowHeardChange}
                  onTermsChange={handleTermsChange}
                />
              )}
              {currentStep === 4 && (
                <StepFour data={formData} />
              )}

              {/* Error message */}
              {submitError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-800">Submission Failed</p>
                    <p className="text-sm text-red-600 mt-1">{submitError}</p>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  {currentStep > 1 ? (
                    <Button
                      variant="outline"
                      onClick={goToPrev}
                      className="border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      onClick={() => navigate('partner-with-us')}
                      className="text-[#4A5568] hover:text-[#0A1F44]"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Partners
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {currentStep < 4 ? (
                    <Button
                      onClick={goToNext}
                      className="bg-[#C8A951] hover:bg-[#B8943F] text-[#0A1F44] font-semibold"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-[#C8A951] hover:bg-[#B8943F] text-[#0A1F44] font-semibold min-w-[180px]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Handshake className="mr-2 h-4 w-4" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>

              {/* Step counter text */}
              <p className="mt-4 text-center text-sm text-gray-400">
                Step {currentStep} of 4
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
