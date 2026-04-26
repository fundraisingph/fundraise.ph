'use client'

import { Card, CardContent } from '@/components/ui/card'

interface TrustPillarProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function TrustPillar({ icon, title, description }: TrustPillarProps) {
  return (
    <Card className="border-border/50 hover:shadow-md transition-shadow duration-300 h-full">
      <CardContent className="pt-6">
        <div className="p-3 rounded-xl bg-gold/10 text-gold w-fit mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
        <p className="text-[#4A5568] leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
