'use client'

import { useEffect } from 'react'
import { initializeNavigation, useNavigation } from '@/lib/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { StickyCTA } from '@/components/layout/sticky-cta'
import { HomePage } from '@/components/pages/home-page'
import { WhyWeExistPage } from '@/components/pages/why-we-exist-page'
import { MissionPage } from '@/components/pages/mission-page'
import { TrustTransparencyPage } from '@/components/pages/trust-transparency-page'
import { TechnologyRoadmapPage } from '@/components/pages/technology-roadmap-page'
import { FoundingStoryPage } from '@/components/pages/founding-story-page'
import { SergsChocolatesPage } from '@/components/pages/sergs-chocolates-page'
import { TeamPage } from '@/components/pages/team-page'
import { GovernancePage } from '@/components/pages/governance-page'
import { ImpactPage } from '@/components/pages/impact-page'
import { PartnerWithUsPage } from '@/components/pages/partner-with-us-page'
import { PartnerApplicationPage } from '@/components/pages/partner-application-page'
import { BlogPage } from '@/components/pages/blog-page'
import { AdminDashboardPage } from '@/components/pages/admin-dashboard-page'

const pageComponents: Record<string, React.ComponentType> = {
  'home': HomePage,
  'why-we-exist': WhyWeExistPage,
  'mission': MissionPage,
  'trust-transparency': TrustTransparencyPage,
  'technology-roadmap': TechnologyRoadmapPage,
  'founding-story': FoundingStoryPage,
  'sergs-chocolates': SergsChocolatesPage,
  'team': TeamPage,
  'governance': GovernancePage,
  'impact': ImpactPage,
  'partner-with-us': PartnerWithUsPage,
  'partner-application': PartnerApplicationPage,
  'blog': BlogPage,
  'admin': AdminDashboardPage,
}

export default function Home() {
  const { currentPage } = useNavigation()

  useEffect(() => {
    initializeNavigation()
  }, [])

  const PageComponent = pageComponents[currentPage] || HomePage

  // Admin page has its own full layout (sidebar, no header/footer)
  if (currentPage === 'admin') {
    return <AdminDashboardPage />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-18 pb-16 lg:pb-0">
        <PageComponent />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}
