'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useNavigation, type PageId } from '@/lib/navigation'
import { Menu, ChevronDown, ArrowRight } from 'lucide-react'

const primaryNav: { label: string; page: PageId }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Why We Exist', page: 'why-we-exist' },
  { label: 'Mission', page: 'mission' },
  { label: 'Trust & Transparency', page: 'trust-transparency' },
  { label: 'Technology Roadmap', page: 'technology-roadmap' },
  { label: 'Governance', page: 'governance' },
  { label: 'Impact', page: 'impact' },
  { label: 'Stories', page: 'bayanihan-stories' },
  { label: 'Blog', page: 'blog' },
  { label: 'Partner With Us', page: 'partner-with-us' },
]

const moreNav: { label: string; page: PageId }[] = [
  { label: 'Fundraise.ph vs Fundraising.ph', page: 'fundraise-vs-fundraising' },
  { label: 'Team & Trustees', page: 'team-trustees' },
  { label: 'Founding Story', page: 'founding-story' },
  { label: "Serg's Chocolates Story", page: 'sergs-chocolates' },
  { label: 'Annual Reports', page: 'annual-reports' },
  { label: 'Campaign Standards', page: 'campaign-standards' },
  { label: 'Compliance Library', page: 'compliance-library' },
  { label: 'Verification Framework', page: 'verification-framework' },
  { label: 'Public Impact Dashboard', page: 'public-impact-dashboard' },
  { label: 'Diaspora Giving', page: 'diaspora-giving' },
  { label: 'Research & Policy', page: 'research-policy' },
  { label: 'Contact', page: 'contact' },
  { label: 'FAQ', page: 'faq' },
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src="/logo.png" alt="Fundraise.ph" className="w-8 h-8 rounded-lg object-contain" />
            <span className="font-bold text-lg text-foreground">
              Fundraise<span className="text-primary">.ph</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {primaryNav.slice(0, 6).map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === item.page
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1">
                  More <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {primaryNav.slice(6).map((item) => (
                  <DropdownMenuItem
                    key={item.page}
                    onClick={() => handleNav(item.page)}
                    className={currentPage === item.page ? 'bg-primary/5 text-primary' : ''}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-2" disabled>
                  Additional Pages
                </DropdownMenuItem>
                {moreNav.map((item) => (
                  <DropdownMenuItem
                    key={item.page}
                    onClick={() => handleNav(item.page)}
                    className={currentPage === item.page ? 'bg-primary/5 text-primary' : ''}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Header CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link href="https://fundraising.ph" target="_blank" rel="noopener noreferrer">
                <ArrowRight className="mr-1.5 h-3.5 w-3.5" />
                Go to Fundraising.ph
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-1 mt-6">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <img src="/logo.png" alt="Fundraise.ph" className="w-8 h-8 rounded-lg object-contain" />
                  <span className="font-bold text-lg">Fundraise<span className="text-primary">.ph</span></span>
                </div>
                {[...primaryNav, ...moreNav].map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleNav(item.page)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-md text-left transition-colors ${
                      currentPage === item.page
                        ? 'text-primary bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    <Link href="https://fundraising.ph" target="_blank" rel="noopener noreferrer">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Go to Fundraising.ph
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
