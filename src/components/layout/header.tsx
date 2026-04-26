'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import { Menu, ArrowRight } from 'lucide-react'
import { useNavigation, type PageId } from '@/lib/navigation'

const navLinks: { label: string; page: PageId }[] = [
  { label: 'Why We Exist', page: 'why-we-exist' },
  { label: 'Mission', page: 'mission' },
  { label: 'Trust & Transparency', page: 'trust-transparency' },
  { label: 'Roadmap', page: 'technology-roadmap' },
  { label: 'Impact', page: 'impact' },
  { label: 'Governance', page: 'governance' },
  { label: 'Team', page: 'team' },
  { label: 'Blog', page: 'blog' },
  { label: 'Partner With Us', page: 'partner-with-us' },
]

export function Header() {
  const { currentPage, navigate } = useNavigation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (page: PageId) => {
    navigate(page)
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-navy'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <img src="/logo.png" alt="Fundraise.ph" className="w-8 h-8 rounded-lg object-contain" />
            <span className="font-bold text-lg text-white">
              Fundraise<span className="text-gold">.ph</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === item.page
                    ? 'text-gold bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://fundraising.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gold hover:bg-[#B8943F] text-navy font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowRight className="mr-1.5 h-3.5 w-3.5" />
              Go to Fundraising.ph
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className="p-2 text-white hover:bg-white/10 rounded-md transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto bg-navy text-white border-white/10">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-1 mt-6">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <img src="/logo.png" alt="Fundraise.ph" className="w-8 h-8 rounded-lg object-contain" />
                  <span className="font-bold text-lg text-white">Fundraise<span className="text-gold">.ph</span></span>
                </div>
                {navLinks.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleNav(item.page)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-md text-left transition-colors ${
                      currentPage === item.page
                        ? 'text-gold bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Link
                    href="https://fundraising.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gold hover:bg-[#B8943F] text-navy font-semibold text-sm px-4 py-3 rounded-lg transition-colors"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Go to Fundraising.ph
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
