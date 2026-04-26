'use client'

import { Card, CardContent } from '@/components/ui/card'

interface TeamCardProps {
  role: string
  description: string
  icon: React.ReactNode
}

export function TeamCard({ role, description, icon }: TeamCardProps) {
  return (
    <Card className="border-border/50 hover:shadow-md transition-shadow duration-300 h-full">
      <CardContent className="pt-6">
        <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-navy mb-2">{role}</h3>
        <p className="text-[#4A5568] text-sm leading-relaxed mb-3">{description}</p>
        <p className="text-xs text-gold font-semibold">Profile coming soon</p>
      </CardContent>
    </Card>
  )
}
