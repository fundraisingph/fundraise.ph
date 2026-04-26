'use client'

import { HeroVariation } from '@/lib/hero-variations'

interface PageHeaderProps {
  title: string
  headline: string
  description?: string
  children?: React.ReactNode
  variation?: HeroVariation
}

function renderHeadline(text: string, accentClass: string) {
  const parts = text.split(/(\{[^}]+\})/g)
  return parts.map((part, i) => {
    const match = part.match(/^\{(.+)\}$/)
    if (match) {
      return <span key={i} className={accentClass}>{match[1]}</span>
    }
    return <span key={i}>{part}</span>
  })
}

export function PageHeader({ title, headline, description, children, variation }: PageHeaderProps) {
  const accentClass = variation?.accentColor || 'text-[#C8A951]'

  return (
    <section className="relative bg-light-gray overflow-hidden">
      {/* Subtle decorative pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(10, 31, 68, 0.04) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-[#C8A951] font-semibold text-sm uppercase tracking-wider mb-3">{title}</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl text-navy">
          {renderHeadline(headline, accentClass)}
        </h1>
        {description && (
          <p className="text-[#4A5568] text-lg md:text-xl max-w-3xl leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </section>
  )
}
