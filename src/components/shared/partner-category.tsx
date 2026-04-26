'use client'

import { Card, CardContent } from '@/components/ui/card'

interface PartnerCategoryProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function PartnerCategory({ icon, title, description }: PartnerCategoryProps) {
  return (
    <Card className="border-border/50 hover:shadow-md transition-shadow duration-300 h-full">
      <CardContent className="pt-6">
        <div className="p-3 rounded-xl bg-trust-blue/10 text-trust-blue w-fit mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
        <p className="text-[#4A5568] text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
