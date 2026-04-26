'use client'

import { HeroVariation } from '@/lib/hero-variations'

interface HeroProps {
  badge?: string
  headline: string
  subheadline: string
  children?: React.ReactNode
  variation?: HeroVariation
}

function renderHeadline(text: string, accentClass: string) {
  // Split by {keyword} markers and render keywords with accent color
  const parts = text.split(/(\{[^}]+\})/g)
  return parts.map((part, i) => {
    const match = part.match(/^\{(.+)\}$/)
    if (match) {
      return <span key={i} className={accentClass}>{match[1]}</span>
    }
    return <span key={i}>{part}</span>
  })
}

export function Hero({ badge, headline, subheadline, children, variation }: HeroProps) {
  const gradientFrom = variation?.gradientFrom || '#0A1F44'
  const gradientTo = variation?.gradientTo || '#1A3A6B'
  const patternColor = variation?.patternColor || 'rgba(200, 169, 81, 0.08)'
  const accentClass = variation?.accentColor || 'text-[#C8A951]'

  return (
    <section
      className="relative text-white overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${patternColor} 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-10">
        <img src="/hero-banner.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl">
          {badge && (
            <span className="inline-flex items-center bg-[#C8A951]/20 text-[#C8A951] border border-[#C8A951]/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {renderHeadline(headline, accentClass)}
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
            {subheadline}
          </p>
          {children}
        </div>
      </div>
    </section>
  )
}
