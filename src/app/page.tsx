'use client'

import { useEffect } from 'react'
import { initializeNavigation, useNavigation } from '@/lib/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { StickyCTA } from '@/components/layout/sticky-cta'
import { HomePage } from '@/components/pages/home-page'
import { WhyWeExistPage } from '@/components/pages/why-we-exist-page'
import { MissionPage } from '@/components/pages/mission-page'
import { TrustGovernanceCompliancePage } from '@/components/pages/trust-governance-compliance-page'
import { TrustTransparencyPage } from '@/components/pages/trust-transparency-page'
import { GovernancePage } from '@/components/pages/governance-page'
import { CompliancePage } from '@/components/pages/compliance-page'
import { VerificationFrameworkPage } from '@/components/pages/verification-framework-page'
import { CampaignStandardsPage } from '@/components/pages/campaign-standards-page'
import { PoliciesPage } from '@/components/pages/policies-page'
import { ReportsDisclosuresPage } from '@/components/pages/reports-disclosures-page'
import { FaqPage } from '@/components/pages/faq-page'
import { TechnologyRoadmapPage } from '@/components/pages/technology-roadmap-page'
import { TechnologyImpactPage } from '@/components/pages/technology-impact-page'
import { PlatformInfrastructurePage } from '@/components/pages/platform-infrastructure-page'
import { ImpactPage } from '@/components/pages/impact-page'
import { AiAutomationPage } from '@/components/pages/ai-automation-page'
import { MarketplaceFundraisingPage } from '@/components/pages/marketplace-fundraising-page'
import { DiasporaGivingTechnologyPage } from '@/components/pages/diaspora-giving-technology-page'
import { OpenDataResearchPage } from '@/components/pages/open-data-research-page'
import { TechnologyGovernancePage } from '@/components/pages/technology-governance-page'
import { TechFaqPage } from '@/components/pages/tech-faq-page'
import { FoundingStoryPage } from '@/components/pages/founding-story-page'
import { SergsChocolatesPage } from '@/components/pages/sergs-chocolates-page'
import { TeamPage } from '@/components/pages/team-page'
import { PartnerWithUsPage } from '@/components/pages/partner-with-us-page'
import { PartnerApplicationPage } from '@/components/pages/partner-application-page'
import { BlogPage } from '@/components/pages/blog-page'
import { AdminDashboardPage } from '@/components/pages/admin-dashboard-page'

const pageComponents: Record<string, React.ComponentType> = {
  'home': HomePage,
  'why-we-exist': WhyWeExistPage,
  'mission': MissionPage,
  'trust-governance-compliance': TrustGovernanceCompliancePage,
  'trust-transparency': TrustTransparencyPage,
  'governance': GovernancePage,
  'compliance': CompliancePage,
  'verification-framework': VerificationFrameworkPage,
  'campaign-standards': CampaignStandardsPage,
  'policies': PoliciesPage,
  'reports-disclosures': ReportsDisclosuresPage,
  'faq': FaqPage,
  'technology-impact': TechnologyImpactPage,
  'technology-roadmap': TechnologyRoadmapPage,
  'platform-infrastructure': PlatformInfrastructurePage,
  'impact': ImpactPage,
  'ai-automation': AiAutomationPage,
  'marketplace-fundraising': MarketplaceFundraisingPage,
  'diaspora-giving-technology': DiasporaGivingTechnologyPage,
  'open-data-research': OpenDataResearchPage,
  'technology-governance': TechnologyGovernancePage,
  'tech-faq': TechFaqPage,
  'founding-story': FoundingStoryPage,
  'sergs-chocolates': SergsChocolatesPage,
  'team': TeamPage,
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
