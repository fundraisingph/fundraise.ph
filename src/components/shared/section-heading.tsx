'use client'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = true, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
    </div>
  )
}
