'use client'

interface PageHeaderProps {
  title: string
  headline: string
  description?: string
  children?: React.ReactNode
}

export function PageHeader({ title, headline, description, children }: PageHeaderProps) {
  return (
    <section className="bg-gradient-hero text-white pattern-overlay relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">{title}</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl">{headline}</h1>
        {description && (
          <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </section>
  )
}
