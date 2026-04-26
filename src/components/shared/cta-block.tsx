'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart } from 'lucide-react'

interface CTABlockProps {
  headline?: string
  subheadline?: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryOnClick?: () => void
  variant?: 'default' | 'compact' | 'hero'
}

export function CTABlock({
  headline = 'Ready to raise, support, or explore verified Filipino campaigns?',
  subheadline = 'Fundraise.ph builds the trust layer. Fundraising.ph is where campaigns come to life.',
  primaryText = 'Go to Fundraising.ph Platform',
  primaryHref = 'https://fundraising.ph',
  secondaryText,
  secondaryOnClick,
  variant = 'default',
}: CTABlockProps) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-4">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          <Link href={primaryHref} target="_blank" rel="noopener noreferrer">
            <ArrowRight className="mr-2 h-4 w-4" />
            {primaryText}
          </Link>
        </Button>
        {secondaryText && secondaryOnClick && (
          <Button variant="outline" size="lg" onClick={secondaryOnClick}>
            {secondaryText}
          </Button>
        )}
      </div>
    )
  }

  if (variant === 'hero') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 h-12">
          <Link href={primaryHref} target="_blank" rel="noopener noreferrer">
            <ArrowRight className="mr-2 h-5 w-5" />
            {primaryText}
          </Link>
        </Button>
        {secondaryText && secondaryOnClick && (
          <Button variant="outline" size="lg" onClick={secondaryOnClick} className="text-base px-8 h-12">
            {secondaryText}
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="bg-gradient-hero text-white rounded-2xl p-8 md:p-12 text-center">
      <Heart className="h-10 w-10 mx-auto mb-4 text-accent" />
      <h3 className="text-2xl md:text-3xl font-bold mb-3">{headline}</h3>
      <p className="text-white/80 mb-6 max-w-2xl mx-auto text-lg">{subheadline}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 h-12">
          <Link href={primaryHref} target="_blank" rel="noopener noreferrer">
            <ArrowRight className="mr-2 h-5 w-5" />
            {primaryText}
          </Link>
        </Button>
        {secondaryText && secondaryOnClick && (
          <Button variant="outline" size="lg" onClick={secondaryOnClick} className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-base px-8 h-12">
            {secondaryText}
          </Button>
        )}
      </div>
    </div>
  )
}
