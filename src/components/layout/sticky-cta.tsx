'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 shadow-lg" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="px-4 py-3">
        <Link
          href="https://fundraising.ph"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-gold hover:bg-[#B8943F] text-navy font-semibold h-11 rounded-lg transition-colors"
        >
          <ArrowRight className="mr-2 h-4 w-4" />
          Open Fundraising.ph
        </Link>
      </div>
    </div>
  )
}
