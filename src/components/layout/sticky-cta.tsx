'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-border shadow-lg" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="px-4 py-3">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11">
          <Link href="https://fundraising.ph" target="_blank" rel="noopener noreferrer">
            <ArrowRight className="mr-2 h-4 w-4" />
            Open Fundraising.ph
          </Link>
        </Button>
      </div>
    </div>
  )
}
