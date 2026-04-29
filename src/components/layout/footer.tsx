'use client'

import Link from 'next/link'
import { useNavigation, type PageId } from '@/lib/navigation'
import { ArrowRight, Heart, Mail, MapPin, ShieldCheck, Eye, Scale } from 'lucide-react'

const orgLinks: { label: string; page: PageId }[] = [
  { label: 'About Fundraise.ph', page: 'home' },
  { label: 'Why We Exist', page: 'why-we-exist' },
  { label: 'Mission & Objectives', page: 'mission' },
  { label: 'Team & Trustees', page: 'team' },
  { label: 'Founding Story', page: 'founding-story' },
  { label: "Serg's Chocolates Story", page: 'sergs-chocolates' },
]

const trustLinks: { label: string; page: PageId }[] = [
  { label: 'Overview', page: 'trust-governance-compliance' },
  { label: 'Trust & Transparency', page: 'trust-transparency' },
  { label: 'Governance', page: 'governance' },
  { label: 'Compliance', page: 'compliance' },
  { label: 'Verification Framework', page: 'verification-framework' },
  { label: 'Campaign Standards', page: 'campaign-standards' },
  { label: 'Policies', page: 'policies' },
  { label: 'Reports & Disclosures', page: 'reports-disclosures' },
  { label: 'FAQ', page: 'faq' },
]

const techLinks: { label: string; page: PageId }[] = [
  { label: 'Overview', page: 'technology-impact' },
  { label: 'Technology Roadmap', page: 'technology-roadmap' },
  { label: 'Platform Infrastructure', page: 'platform-infrastructure' },
  { label: 'Impact Dashboard', page: 'impact' },
  { label: 'AI & Automation', page: 'ai-automation' },
  { label: 'Marketplace Fundraising', page: 'marketplace-fundraising' },
  { label: 'Diaspora Giving', page: 'diaspora-giving-technology' },
  { label: 'Open Data & Research', page: 'open-data-research' },
  { label: 'Technology Governance', page: 'technology-governance' },
  { label: 'FAQ', page: 'tech-faq' },
]

const communityLinks: { label: string; page: PageId }[] = [
  { label: 'Partner With Us', page: 'partner-with-us' },
  { label: 'Trustee Notes & Blog', page: 'blog' },
]

export function Footer() {
  const { navigate } = useNavigation()

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Fundraise.ph" className="w-8 h-8 rounded-lg object-contain" />
              <span className="font-bold text-lg text-white">
                Fundraise<span className="text-gold">.ph</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              The Trust Layer for Filipino Giving. Building trusted, transparent, and compliant fundraising infrastructure for Filipinos worldwide.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@fundraise.ph</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Philippines</span>
              </div>
            </div>
            {/* Newsletter Placeholder */}
            <div className="mt-6">
              <p className="text-white/80 font-semibold text-sm mb-2">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold"
                />
                <button className="bg-gold hover:bg-[#B8943F] text-navy font-semibold px-3 py-2 rounded-lg text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Organization</h4>
            <ul className="space-y-2.5">
              {orgLinks.map((link) => (
                <li key={link.page + link.label}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust, Governance & Compliance */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Trust, Governance & Compliance</h4>
            <ul className="space-y-2.5">
              {trustLinks.map((link) => (
                <li key={link.page + link.label}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology & Community */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Technology & Impact</h4>
            <ul className="space-y-2.5">
              {techLinks.map((link) => (
                <li key={link.page + link.label}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2.5">
              {communityLinks.map((link) => (
                <button
                  key={link.page + link.label}
                  onClick={() => navigate(link.page)}
                  className="block text-sm text-white/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-3">Trust Indicators</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  <span>Campaign Verification</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Eye className="h-3.5 w-3.5 text-gold" />
                  <span>Transparency by Default</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Scale className="h-3.5 w-3.5 text-gold" />
                  <span>Compliance Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Heart className="h-4 w-4 text-gold" />
            <span>Bayanihan deserves modern infrastructure.</span>
          </div>
          <Link
            href="https://fundraising.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gold hover:bg-[#B8943F] text-navy font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            Start or Support a Campaign on Fundraising.ph
          </Link>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Fundraise.ph. All rights reserved.</p>
          <p>The Trust Layer for Filipino Giving</p>
        </div>
      </div>
    </footer>
  )
}
