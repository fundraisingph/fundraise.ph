import { CheckCircle2 } from 'lucide-react'
import { BADGE_DISPLAY_CONFIG } from '@/lib/badge-config'
import type { VerificationLayer } from '@/lib/badge-types'

interface VerificationBadgeDisplayProps {
  layer: VerificationLayer
  showDescription?: boolean
  showIcon?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function VerificationBadgeDisplay({
  layer,
  showDescription = false,
  showIcon = true,
  size = 'md',
}: VerificationBadgeDisplayProps) {
  const config = BADGE_DISPLAY_CONFIG[layer]
  if (!config) return null

  const Icon = config.icon
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
  }
  const iconSizes = { sm: 'h-3 w-3', md: 'h-4 w-4', lg: 'h-5 w-5' }

  return (
    <span
      className={`inline-flex items-center ${config.bgColor} ${config.textColor} ${config.borderColor} border rounded-full font-semibold ${sizeClasses[size]}`}
    >
      {showIcon && (
        <>
          <Icon className={iconSizes[size]} />
          <CheckCircle2 className={iconSizes[size]} />
        </>
      )}
      {config.shortName}
    </span>
  )
}
