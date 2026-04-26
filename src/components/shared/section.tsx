'use client'

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  dark?: boolean
}

export function Section({ children, className = '', dark = false }: SectionProps) {
  return (
    <section className={`${dark ? 'bg-muted/50' : 'bg-background'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {children}
      </div>
    </section>
  )
}
