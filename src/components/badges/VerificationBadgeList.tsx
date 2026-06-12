import { VerificationBadgeDisplay } from './VerificationBadgeDisplay'
import { BADGE_DISPLAY_CONFIG } from '@/lib/badge-config'
import type { VerificationLayer } from '@/lib/badge-types'

interface VerificationBadgeListProps {
  completedLayers: VerificationLayer[]
  allLayers?: VerificationLayer[]
  showIncomplete?: boolean
  layout?: 'grid' | 'inline'
}

export function VerificationBadgeList({
  completedLayers,
  allLayers,
  showIncomplete = true,
  layout = 'grid',
}: VerificationBadgeListProps) {
  const layers = allLayers || completedLayers
  const completedSet = new Set(completedLayers)

  if (layout === 'inline') {
    return (
      <div className="flex flex-wrap gap-2">
        {completedLayers.map((layer) => (
          <VerificationBadgeDisplay key={layer} layer={layer} size="sm" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {layers.map((layer) => {
        const config = BADGE_DISPLAY_CONFIG[layer]
        const completed = completedSet.has(layer)
        const Icon = config?.icon

        if (!completed && !showIncomplete) return null

        return (
          <div
            key={layer}
            className={`flex items-center gap-3 rounded-xl p-3 border transition-all ${
              completed
                ? `${config?.bgColor} ${config?.borderColor} border`
                : 'bg-slate-50 border-slate-200 border-dashed opacity-50'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                completed ? `${config?.bgColor} ${config?.textColor}` : 'bg-slate-100 text-slate-400'
              }`}
            >
              {Icon && <Icon className="h-4 w-4" />}
            </div>
            <div>
              <p className={`text-sm font-semibold ${completed ? 'text-slate-900' : 'text-slate-400'}`}>
                {config?.shortName || layer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
