'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'lg'
  className?: string
}

export function CTAButton({ href, onClick, children, variant = 'primary', size = 'default', className = '' }: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-colors duration-200 rounded-lg'
  const sizeClasses = size === 'lg' ? 'px-8 py-3.5 text-base' : 'px-6 py-2.5 text-sm'
  
  const variantClasses = variant === 'primary'
    ? 'bg-gold hover:bg-[#B8943F] text-navy'
    : 'border-2 border-navy text-navy hover:bg-navy hover:text-white'

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        <ArrowRight className="mr-2 h-4 w-4" />
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {variant === 'primary' && <ArrowRight className="mr-2 h-4 w-4" />}
      {children}
    </button>
  )
}
