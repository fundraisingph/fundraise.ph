'use client'

import Link from 'next/link'
import { Section } from '@/components/shared/section'
import { ArrowRight } from 'lucide-react'

interface CTABlockProps {
  headline?: string
  subheadline?: string
  ctaLabel?: string
  ctaHref?: string
}

export function CTABlock({
  headline = 'Ready to raise, support, or explore verified Filipino campaigns?',
  subheadline = 'Fundraise.ph builds the trust layer. Fundraising.ph is where campaigns come to life.',
  ctaLabel = 'Go to Fundraising.ph Platform',
  ctaHref = 'https://fundraising.ph',
}: CTABlockProps) {
  return (
    <Section>
      <div className="bg-light-gray rounded-2xl p-8 md:p-12 text-center border border-[#0A1F44]/10">
        <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">{headline}</h3>
        <p className="text-[#4A5568] mb-6 max-w-2xl mx-auto text-lg">{subheadline}</p>
        <Link
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gold hover:bg-[#B8943F] text-navy font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
        >
          <ArrowRight className="mr-2 h-4 w-4" />
          {ctaLabel}
          <span className="sr-only"> (opens in new tab)</span>
        </Link>
      </div>
    </Section>
  )
}
