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
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  verification: {
    icon: FileCheck,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  compliance: {
    icon: Scale,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  general: {
    icon: ShieldCheck,
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
  },
  default: {
    icon: AlertTriangle,
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
  },
}

export function ProofBlock({ variant = 'default', title, description, items, children }: ProofBlockProps) {
  const config = variantConfig[variant] || variantConfig.default
  const Icon = config.icon

  return (
    <div className={`${config.bgColor} border ${config.borderColor} rounded-[2rem] p-8 md:p-10`}>
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl ${config.iconBg} ${config.iconColor} flex items-center justify-center shrink-0`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-black text-slate-900 mb-1">{title}</h3>
          {description && <p className="text-[#4A5568] leading-relaxed">{description}</p>}
        </div>
      </div>
      {items && items.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 border border-slate-100">
              <span className="text-sm font-bold text-slate-900 block mb-1">{item.label}</span>
              <p className="text-sm text-[#4A5568] leading-relaxed">{item.description}</p>
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
