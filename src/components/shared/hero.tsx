'use client'

interface HeroProps {
  badge?: string
  headline: string
  subheadline: string
  children?: React.ReactNode
}

export function Hero({ badge, headline, subheadline, children }: HeroProps) {
  return (
    <section className="bg-gradient-hero text-white pattern-overlay relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/hero-banner.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl">
          {badge && (
            <span className="inline-flex items-center bg-gold/20 text-gold border border-gold/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {headline}
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
