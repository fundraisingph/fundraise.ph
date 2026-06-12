import { create } from 'zustand'

export type PageId = 
  | 'home'
  | 'why-we-exist'
  | 'mission'
  | 'trust-governance-compliance'
  | 'trust-transparency'
  | 'governance'
  | 'compliance'
  | 'verification-framework'
  | 'campaign-standards'
  | 'policies'
  | 'reports-disclosures'
  | 'faq'
  | 'technology-impact'
  | 'technology-roadmap'
  | 'platform-infrastructure'
  | 'impact'
  | 'ai-automation'
  | 'marketplace-fundraising'
  | 'diaspora-giving-technology'
  | 'open-data-research'
  | 'technology-governance'
  | 'tech-faq'
  | 'founding-story'
  | 'sergs-chocolates'
  | 'team'
  | 'partner-with-us'
  | 'partner-application'
  | 'blog'
  | 'admin'
  | 'philippines-compliance-guide'
  | 'verified-standards'
  | 'campaign-verification-framework'
  | 'donor-protection'
  | 'transparency-reporting'
  | 'product-based-fundraising-guide'
  | 'diaspora-giving-safety'
  | 'fundraise-vs-fundraising'
  | 'knowledge-center'
  | 'glossary'

interface NavigationState {
  currentPage: PageId
  navigate: (page: PageId) => void
}

const getPageFromHash = (): PageId => {
  if (typeof window === 'undefined') return 'home'
  const hash = window.location.hash.replace('#', '')
  if (hash && isValidPage(hash)) return hash as PageId
  return 'home'
}

const validPages: PageId[] = [
  'home', 'why-we-exist', 'mission', 'trust-governance-compliance',
  'trust-transparency', 'governance', 'compliance', 'verification-framework',
  'campaign-standards', 'policies', 'reports-disclosures', 'faq',
  'technology-impact', 'technology-roadmap', 'platform-infrastructure',
  'impact', 'ai-automation', 'marketplace-fundraising',
  'diaspora-giving-technology', 'open-data-research', 'technology-governance',
  'tech-faq', 'founding-story', 'sergs-chocolates',
  'team', 'partner-with-us',
  'partner-application', 'blog', 'admin',
  'philippines-compliance-guide', 'verified-standards', 'campaign-verification-framework',
  'donor-protection', 'transparency-reporting', 'product-based-fundraising-guide',
  'diaspora-giving-safety', 'fundraise-vs-fundraising', 'knowledge-center', 'glossary'
]

function isValidPage(hash: string): boolean {
  return validPages.includes(hash as PageId)
}

export const useNavigation = create<NavigationState>((set) => ({
  currentPage: 'home',
  navigate: (page: PageId) => {
    set({ currentPage: page })
    window.location.hash = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}))

export const initializeNavigation = () => {
  const page = getPageFromHash()
  useNavigation.setState({ currentPage: page })
  
  window.addEventListener('hashchange', () => {
    const page = getPageFromHash()
    useNavigation.setState({ currentPage: page })
  })
}

export const pageTitles: Record<PageId, string> = {
  'home': 'Home',
  'why-we-exist': 'Why Fundraise.ph Exists',
  'mission': 'Mission, Vision & Objectives',
  'trust-governance-compliance': 'Trust, Governance & Compliance',
  'trust-transparency': 'Trust & Transparency',
  'governance': 'Governance',
  'compliance': 'Compliance',
  'verification-framework': 'Verification Framework',
  'campaign-standards': 'Campaign Standards',
  'policies': 'Policies',
  'reports-disclosures': 'Reports & Disclosures',
  'faq': 'Trust, Governance & Compliance FAQ',
  'technology-impact': 'Technology & Impact',
  'technology-roadmap': 'Technology Roadmap',
  'platform-infrastructure': 'Platform Infrastructure',
  'impact': 'Impact Dashboard',
  'ai-automation': 'AI & Automation',
  'marketplace-fundraising': 'Marketplace Fundraising',
  'diaspora-giving-technology': 'Diaspora Giving Technology',
  'open-data-research': 'Open Data & Research',
  'technology-governance': 'Technology Governance',
  'tech-faq': 'Technology & Impact FAQ',
  'founding-story': 'Founding Story',
  'sergs-chocolates': "Serg's Chocolates",
  'team': 'Team & Trustees',
  'partner-with-us': 'Partner With Us',
  'partner-application': 'Partner Application',
  'blog': 'Trustee Notes & Blog',
  'admin': 'Admin Dashboard',
  'philippines-compliance-guide': 'Philippines Compliance Guide',
  'verified-standards': 'Verified Standards',
  'campaign-verification-framework': 'Campaign Verification Framework',
  'donor-protection': 'Donor Protection',
  'transparency-reporting': 'Transparency Reporting',
  'product-based-fundraising-guide': 'Product-Based Fundraising Guide',
  'diaspora-giving-safety': 'Diaspora Giving Safety',
  'fundraise-vs-fundraising': 'Fundraise.ph vs Fundraising.ph',
  'knowledge-center': 'Knowledge Center',
  'glossary': 'Glossary',
}
