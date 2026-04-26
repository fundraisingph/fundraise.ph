'use client'

import { Card, CardContent } from '@/components/ui/card'

interface TrustFrameworkStepProps {
  step: number
  icon: React.ReactNode
  title: string
  description: string
}

export function TrustFrameworkStep({ step, icon, title, description }: TrustFrameworkStepProps) {
  return (
    <Card className="border-border/50 hover:shadow-md transition-shadow duration-300 h-full">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
            {step}
          </div>
          <div className="p-2 rounded-lg bg-trust-blue/10 text-trust-blue">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
        <p className="text-[#4A5568] text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
