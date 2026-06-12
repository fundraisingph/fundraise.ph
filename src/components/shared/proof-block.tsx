'use client'

import { ShieldCheck, FileCheck, AlertTriangle, Scale } from 'lucide-react'
import { ReactNode } from 'react'

interface ProofBlockItem {
  icon?: string
  label: string
  description: string
}

interface ProofBlockProps {
  variant?: 'product' | 'verification' | 'default' | 'compliance' | 'general'
  title?: string
  description?: string
  items?: ProofBlockItem[]
  children?: ReactNode
}

const variantConfig = {
  product: {
    icon: ShieldCheck,
    label: 'Product Fundraising Standard',
    bgColor: 'bg-gold/5',
    borderColor: 'border-gold/30',
    iconBg: 'bg-gold/10',
    iconColor: 'text-gold',
  },
  verification: {
    icon: FileCheck,
    label: 'Verification Standard',
    bgColor: 'bg-trust-blue/5',
    borderColor: 'border-trust-blue/30',
    iconBg: 'bg-trust-blue/10',
    iconColor: 'text-trust-blue',
  },
  compliance: {
    icon: Scale,
    label: 'Compliance Guidance',
    bgColor: 'bg-trust-blue/5',
    borderColor: 'border-trust-blue/30',
    iconBg: 'bg-trust-blue/10',
    iconColor: 'text-trust-blue',
  },
  general: {
    icon: ShieldCheck,
    label: 'Trust Standard',
    bgColor: 'bg-gold/5',
    borderColor: 'border-gold/30',
    iconBg: 'bg-gold/10',
    iconColor: 'text-gold',
  },
  default: {
    icon: AlertTriangle,
    label: 'Important',
    bgColor: 'bg-navy/5',
    borderColor: 'border-navy/20',
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
  },
}

export function ProofBlock({ variant = 'default', title, description, items, children }: ProofBlockProps) {
  const config = variantConfig[variant] || variantConfig.default
  const Icon = config.icon
  const displayTitle = title || config.label

  return (
    <div className={`${config.bgColor} border ${config.borderColor} rounded-2xl p-6 md:p-8`}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl ${config.iconBg} ${config.iconColor} flex items-center justify-center shrink-0`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-navy mb-1">{displayTitle}</h3>
          {description && <p className="text-[#4A5568] text-sm leading-relaxed">{description}</p>}
        </div>
      </div>
      {items && items.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-white/50">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
              <div>
                <span className="text-sm font-semibold text-navy">{item.label}</span>
                <p className="text-xs text-[#4A5568] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {children && typeof children === 'string' && (
        <p className="text-[#4A5568] leading-relaxed">{children}</p>
      )}
      {children && typeof children !== 'string' && <>{children}</>}
    </div>
  )
}
