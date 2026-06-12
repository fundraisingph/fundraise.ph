import Link from 'next/link'
import { ShieldCheck, Heart, ArrowRight } from 'lucide-react'

export default function Footer() {
  const categoryLinks = [
    { href: '/fundraising-guide', label: 'Fundraising Guide' },
    { href: '/medical-fundraising', label: 'Medical Fundraising' },
    { href: '/education-fundraising', label: 'Education Fundraising' },
    { href: '/disaster-relief-fundraising', label: 'Disaster Relief' },
    { href: '/community-fundraising', label: 'Community Fundraising' },
    { href: '/church-fundraising', label: 'Church Fundraising' },
    { href: '/school-fundraising', label: 'School Fundraising' },
    { href: '/business-fundraising', label: 'Business Fundraising' },
  ]

  const trustLinks = [
    { href: '/', label: 'About Fundraise.ph' },
    { href: '/#why-we-exist', label: 'Why We Exist' },
    { href: '/#trust-transparency', label: 'Trust & Transparency' },
    { href: '/#verification-framework', label: 'Verification Framework' },
    { href: '/#governance', label: 'Governance' },
    { href: '/#compliance', label: 'Compliance' },
  ]

  return (
    <footer className="bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-7 w-7 text-[#C8A951]" />
              <span className="font-bold text-white text-lg">Fundraise.ph</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              The trust layer for Filipino giving. Building transparent, verified, and compliant fundraising infrastructure for Filipinos worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Fundraising Categories</h4>
            <ul className="space-y-2">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 text-sm hover:text-[#C8A951] transition-colors flex items-center gap-1">
                    <ArrowRight className="h-3 w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Trust & Governance</h4>
            <ul className="space-y-2">
              {trustLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 text-sm hover:text-[#C8A951] transition-colors flex items-center gap-1">
                    <ArrowRight className="h-3 w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/fundraising-guide" className="text-slate-300 text-sm hover:text-[#C8A951] transition-colors flex items-center gap-1"><ArrowRight className="h-3 w-3" />How to Start</Link></li>
              <li><Link href="/templates/campaign-description" className="text-slate-300 text-sm hover:text-[#C8A951] transition-colors flex items-center gap-1"><ArrowRight className="h-3 w-3" />Templates</Link></li>
              <li><Link href="/compare/best-platforms" className="text-slate-300 text-sm hover:text-[#C8A951] transition-colors flex items-center gap-1"><ArrowRight className="h-3 w-3" />Compare Platforms</Link></li>
              <li><Link href="/trust" className="text-slate-300 text-sm hover:text-[#C8A951] transition-colors flex items-center gap-1"><ArrowRight className="h-3 w-3" />Trust & Safety</Link></li>
              <li><Link href="/help" className="text-slate-300 text-sm hover:text-[#C8A951] transition-colors flex items-center gap-1"><ArrowRight className="h-3 w-3" />Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Local</h4>
            <ul className="space-y-2">
              <li><Link href="/local/manila" className="text-slate-300 text-sm hover:text-[#C8A951] transition-colors flex items-center gap-1"><ArrowRight className="h-3 w-3" />Manila</Link></li>
              <li><Link href="/local/quezon-city" className="text-slate-300 text-sm hover:text-[#C8A951] transition-colors flex items-center gap-1"><ArrowRight className="h-3 w-3" />Quezon City</Link></li>
              <li><Link href="/local/cebu" className="text-slate-300 text-sm hover:text-[#C8A951] transition-colors flex items-center gap-1"><ArrowRight className="h-3 w-3" />Cebu</Link></li>
              <li><Link href="/local/davao" className="text-slate-300 text-sm hover:text-[#C8A951] transition-colors flex items-center gap-1"><ArrowRight className="h-3 w-3" />Davao</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Start Giving</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Join thousands of Filipinos building a more transparent future for giving.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-[#C8A951] text-navy font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-[#B8943F] transition-colors">
              <Heart className="h-4 w-4" />
              Start a Campaign
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Fundraise.ph. All rights reserved. A nonprofit technology organization.
          </p>
        </div>
      </div>
    </footer>
  )
}
