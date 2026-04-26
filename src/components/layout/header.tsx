'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
import { Menu, ArrowRight, ChevronDown } from 'lucide-react'
import { useNavigation, type PageId } from '@/lib/navigation'

interface NavGroup {
  label: string
  items: { label: string; page: PageId }[]
}

const navGroups: NavGroup[] = [
  {
    label: 'About',
    items: [
      { label: 'Why We Exist', page: 'why-we-exist' },
      { label: 'Mission & Objectives', page: 'mission' },
      { label: 'Founding Story', page: 'founding-story' },
      { label: "Serg's Chocolates Story", page: 'sergs-chocolates' },
      { label: 'Team & Trustees', page: 'team' },
    ],
  },
  {
    label: 'Trust & Governance',
    items: [
      { label: 'Trust & Transparency', page: 'trust-transparency' },
      { label: 'Governance', page: 'governance' },
    ],
  },
  {
    label: 'Technology & Impact',
    items: [
      { label: 'Technology Roadmap', page: 'technology-roadmap' },
      { label: 'Impact', page: 'impact' },
    ],
  },
]

const standaloneLinks: { label: string; page: PageId }[] = [
  { label: 'Blog', page: 'blog' },
  { label: 'Partner With Us', page: 'partner-with-us' },
]

// Flat list for mobile menu
const mobileGroups: { type: 'group'; label: string; items: { label: string; page: PageId }[] }[] = navGroups.map(g => ({
  type: 'group' as const,
  label: g.label,
  items: g.items,
}))

function isPageInGroup(page: PageId, group: NavGroup): boolean {
  return group.items.some(item => item.page === page)
}

export function Header() {
  const { currentPage, navigate } = useNavigation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (page: PageId) => {
    navigate(page)
    setMobileOpen(false)
  }

  const toggleGroup = (label: string) => {
    setExpandedGroups(prev => ({ ...prev, [label]: !prev[label] }))
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
            {/* Dropdown Groups */}
            {navGroups.map((group) => {
              const isActive = isPageInGroup(currentPage, group)
              return (
                <DropdownMenu key={group.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                        isActive
                          ? 'text-gold bg-white/10'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {group.label}
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="bg-white border-border shadow-lg min-w-[200px]">
                    {group.items.map((item) => (
                      <DropdownMenuItem
                        key={item.page}
                        onClick={() => handleNav(item.page)}
                        className={`cursor-pointer ${
                          currentPage === item.page
                            ? 'text-trust-blue font-semibold bg-trust-blue/5'
                            : 'text-[#4A5568]'
                        }`}
                      >
                        {item.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            })}

            {/* Standalone Links */}
            {standaloneLinks.map((item) => (
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

                {/* Mobile Dropdown Groups */}
                {mobileGroups.map((group) => {
                  const isExpanded = expandedGroups[group.label]
                  const isActive = group.items.some(item => item.page === currentPage)
                  return (
                    <div key={group.label}>
                      <button
                        onClick={() => toggleGroup(group.label)}
                        className={`w-full px-3 py-2.5 text-sm font-medium rounded-md text-left transition-colors flex items-center justify-between ${
                          isActive
                            ? 'text-gold bg-white/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {group.label}
                        <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                      {isExpanded && (
                        <div className="ml-3 border-l border-white/10 pl-3 space-y-0.5 mt-0.5 mb-1">
                          {group.items.map((item) => (
                            <button
                              key={item.page}
                              onClick={() => handleNav(item.page)}
                              className={`w-full px-3 py-2 text-sm rounded-md text-left transition-colors ${
                                currentPage === item.page
                                  ? 'text-gold bg-white/10'
                                  : 'text-white/50 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}

                {/* Standalone Links */}
                {standaloneLinks.map((item) => (
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
