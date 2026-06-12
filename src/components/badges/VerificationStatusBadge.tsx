import { STATUS_DISPLAY } from '@/lib/badge-config'

interface VerificationStatusBadgeProps {
  status: string
  size?: 'sm' | 'md'
}

export function VerificationStatusBadge({ status, size = 'md' }: VerificationStatusBadgeProps) {
  const config = STATUS_DISPLAY[status] || STATUS_DISPLAY.NOT_STARTED
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${config.bgColor} ${config.color} ${sizeClasses}`}
    >
      {config.label}
    </span>
  )
}
