'use client'

import { Card, CardContent } from '@/components/ui/card'

interface TimelineCardProps {
  phase: number
  title: string
  description: string
  items: string[]
  progress: number
}

export function TimelineCard({ phase, title, description, items, progress }: TimelineCardProps) {
  return (
    <Card className="border-l-4 border-l-gold hover:shadow-md transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg">
            {phase}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-navy mb-1">{title}</h3>
            <p className="text-[#4A5568] text-sm leading-relaxed">{description}</p>
          </div>
        </div>
        <ul className="space-y-2 ml-16">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-[#4A5568]">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        {progress > 0 && (
          <div className="mt-4 ml-16">
            <div className="flex items-center justify-between text-xs text-[#4A5568] mb-1">
              <span>Progress</span>
              <span className="font-semibold">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-[#F7F8FA] rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
