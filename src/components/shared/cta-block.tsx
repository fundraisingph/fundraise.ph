'use client'

import { Section } from '@/components/shared/section'
import { CTAButton } from '@/components/shared/cta-button'

interface CTABlockProps {
  headline?: string
  subheadline?: string
  primaryText?: string
  primaryHref?: string
}

export function CTABlock({
  headline = 'Ready to raise, support, or explore verified Filipino campaigns?',
  subheadline = 'Fundraise.ph builds the trust layer. Fundraising.ph is where campaigns come to life.',
  primaryText = 'Go to Fundraising.ph Platform',
  primaryHref = 'https://fundraising.ph',
}: CTABlockProps) {
  return (
    <Section>
      <div className="bg-light-gray rounded-2xl p-8 md:p-12 text-center border border-[#0A1F44]/10">
        <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">{headline}</h3>
        <p className="text-[#4A5568] mb-6 max-w-2xl mx-auto text-lg">{subheadline}</p>
        <CTAButton href={primaryHref} variant="primary" size="lg">
          {primaryText}
        </CTAButton>
      </div>
    </Section>
  )
}
