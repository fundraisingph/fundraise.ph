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
import { FundraiseVsFundraisingPage } from '@/components/pages/fundraise-vs-fundraising-page'
import { TechnologyRoadmapPage } from '@/components/pages/technology-roadmap-page'
import { GovernancePage } from '@/components/pages/governance-page'
import { TeamTrusteesPage } from '@/components/pages/team-trustees-page'
import { FoundingStoryPage } from '@/components/pages/founding-story-page'
import { SergsChocolatesPage } from '@/components/pages/sergs-chocolates-page'
import { ImpactPage } from '@/components/pages/impact-page'
import { AnnualReportsPage } from '@/components/pages/annual-reports-page'
import { CampaignStandardsPage } from '@/components/pages/campaign-standards-page'
import { ComplianceLibraryPage } from '@/components/pages/compliance-library-page'
import { VerificationFrameworkPage } from '@/components/pages/verification-framework-page'
import { PublicImpactDashboardPage } from '@/components/pages/public-impact-dashboard-page'
import { BayanihanStoriesPage } from '@/components/pages/bayanihan-stories-page'
import { DiasporaGivingPage } from '@/components/pages/diaspora-giving-page'
import { ResearchPolicyPage } from '@/components/pages/research-policy-page'
import { PartnerWithUsPage } from '@/components/pages/partner-with-us-page'
import { ContactPage } from '@/components/pages/contact-page'
import { FAQPage } from '@/components/pages/faq-page'
import { BlogPage } from '@/components/pages/blog-page'

const pageComponents: Record<string, React.ComponentType> = {
  'home': HomePage,
  'why-we-exist': WhyWeExistPage,
  'mission': MissionPage,
  'trust-transparency': TrustTransparencyPage,
  'fundraise-vs-fundraising': FundraiseVsFundraisingPage,
  'technology-roadmap': TechnologyRoadmapPage,
  'governance': GovernancePage,
  'team-trustees': TeamTrusteesPage,
  'founding-story': FoundingStoryPage,
  'sergs-chocolates': SergsChocolatesPage,
  'impact': ImpactPage,
  'annual-reports': AnnualReportsPage,
  'campaign-standards': CampaignStandardsPage,
  'compliance-library': ComplianceLibraryPage,
  'verification-framework': VerificationFrameworkPage,
  'public-impact-dashboard': PublicImpactDashboardPage,
  'bayanihan-stories': BayanihanStoriesPage,
  'diaspora-giving': DiasporaGivingPage,
  'research-policy': ResearchPolicyPage,
  'partner-with-us': PartnerWithUsPage,
  'contact': ContactPage,
  'faq': FAQPage,
  'blog': BlogPage,
}

export default function Home() {
  const { currentPage } = useNavigation()

  useEffect(() => {
    initializeNavigation()
  }, [])

  const PageComponent = pageComponents[currentPage] || HomePage

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
