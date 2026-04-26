'use client'

import Link from 'next/link'
import { useNavigation, type PageId } from '@/lib/navigation'
import { ArrowRight, Heart, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const orgLinks: { label: string; page: PageId }[] = [
  { label: 'About Fundraise.ph', page: 'home' },
  { label: 'Why We Exist', page: 'why-we-exist' },
  { label: 'Mission & Objectives', page: 'mission' },
  { label: 'Team & Trustees', page: 'team-trustees' },
  { label: 'Governance', page: 'governance' },
  { label: 'Contact', page: 'contact' },
]

const trustLinks: { label: string; page: PageId }[] = [
  { label: 'Trust & Transparency', page: 'trust-transparency' },
  { label: 'Campaign Standards', page: 'campaign-standards' },
  { label: 'Compliance Library', page: 'compliance-library' },
  { label: 'Verification Framework', page: 'verification-framework' },
  { label: 'Donor Acknowledgment Policy', page: 'trust-transparency' },
  { label: 'Beneficiary Dignity Policy', page: 'trust-transparency' },
  { label: 'Annual Reports', page: 'annual-reports' },
]

const techLinks: { label: string; page: PageId }[] = [
  { label: 'Technology Roadmap', page: 'technology-roadmap' },
  { label: 'Fundraising.ph Platform', page: 'fundraise-vs-fundraising' },
  { label: 'AI and Automation', page: 'technology-roadmap' },
  { label: 'Marketplace Fundraising', page: 'sergs-chocolates' },
  { label: 'Public Impact Dashboard', page: 'public-impact-dashboard' },
  { label: 'Open Data and Reports', page: 'research-policy' },
]

const communityLinks: { label: string; page: PageId }[] = [
  { label: 'Bayanihan Stories', page: 'bayanihan-stories' },
  { label: 'Founding Story', page: 'founding-story' },
  { label: "Serg's Chocolates Story", page: 'sergs-chocolates' },
  { label: 'Trustee Notes', page: 'blog' },
  { label: 'Partner With Us', page: 'partner-with-us' },
  { label: 'Diaspora Giving', page: 'diaspora-giving' },
]

export function Footer() {
  const { navigate } = useNavigation()

  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Fundraise.ph" className="w-8 h-8 rounded-lg object-contain" />
              <span className="font-bold text-lg text-background">
                Fundraise<span className="text-primary">.ph</span>
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-4">
              The Trust Layer for Filipino Giving. Building trusted, transparent, and compliant fundraising infrastructure for Filipinos worldwide.
            </p>
            <div className="flex flex-col gap-2 text-sm text-background/60">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@fundraise.ph</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Philippines</span>
              </div>
            </div>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">Organization</h4>
            <ul className="space-y-2.5">
              {orgLinks.map((link) => (
                <li key={link.page + link.label}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Compliance */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">Trust & Compliance</h4>
            <ul className="space-y-2.5">
              {trustLinks.map((link) => (
                <li key={link.page + link.label}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">Technology</h4>
            <ul className="space-y-2.5">
              {techLinks.map((link) => (
                <li key={link.page + link.label}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">Community</h4>
            <ul className="space-y-2.5">
              {communityLinks.map((link) => (
                <li key={link.page + link.label}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-background/10" />

        {/* Bottom CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-background/60 text-sm">
            <Heart className="h-4 w-4 text-primary" />
            <span>Bayanihan deserves modern infrastructure.</span>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Link href="https://fundraising.ph" target="_blank" rel="noopener noreferrer">
              <ArrowRight className="mr-2 h-4 w-4" />
              Start or Support a Campaign on Fundraising.ph
            </Link>
          </Button>
        </div>

        <Separator className="my-6 bg-background/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/40">
          <p>&copy; {new Date().getFullYear()} Fundraise.ph. All rights reserved.</p>
          <p>The Trust Layer for Filipino Giving</p>
        </div>
      </div>
    </footer>
  )
}
