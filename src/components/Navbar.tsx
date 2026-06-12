'use client'

import Link from 'next/link'
import { ShieldCheck, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center gap-2">
            <ShieldCheck className="h-7 w-7 text-[#C8A951]" />
            <span className="font-bold text-navy text-lg">Fundraise.ph</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/fundraising-guide" className="text-sm font-medium text-[#4A5568] hover:text-navy transition-colors">Fundraising Guide</Link>
            <Link href="/medical-fundraising" className="text-sm font-medium text-[#4A5568] hover:text-navy transition-colors">Medical</Link>
            <Link href="/education-fundraising" className="text-sm font-medium text-[#4A5568] hover:text-navy transition-colors">Education</Link>
            <Link href="/disaster-relief-fundraising" className="text-sm font-medium text-[#4A5568] hover:text-navy transition-colors">Disaster Relief</Link>
            <Link href="/community-fundraising" className="text-sm font-medium text-[#4A5568] hover:text-navy transition-colors">Community</Link>
            <Link href="/" className="bg-gradient-to-r from-[#0A1F44] to-[#2B4C7E] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Start a Campaign
            </Link>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-navy"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
          <Link href="/fundraising-guide" className="block text-sm font-medium text-[#4A5568] hover:text-navy" onClick={() => setMobileOpen(false)}>Fundraising Guide</Link>
          <Link href="/medical-fundraising" className="block text-sm font-medium text-[#4A5568] hover:text-navy" onClick={() => setMobileOpen(false)}>Medical</Link>
          <Link href="/education-fundraising" className="block text-sm font-medium text-[#4A5568] hover:text-navy" onClick={() => setMobileOpen(false)}>Education</Link>
          <Link href="/disaster-relief-fundraising" className="block text-sm font-medium text-[#4A5568] hover:text-navy" onClick={() => setMobileOpen(false)}>Disaster Relief</Link>
          <Link href="/community-fundraising" className="block text-sm font-medium text-[#4A5568] hover:text-navy" onClick={() => setMobileOpen(false)}>Community</Link>
          <Link href="/" className="block bg-gradient-to-r from-[#0A1F44] to-[#2B4C7E] text-white px-5 py-2 rounded-full text-sm font-semibold text-center" onClick={() => setMobileOpen(false)}>Start a Campaign</Link>
        </div>
      )}
    </nav>
  )
}
