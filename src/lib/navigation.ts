import { create } from 'zustand'

export type PageId = 
  | 'home'
  | 'why-we-exist'
  | 'mission'
  | 'trust-transparency'
  | 'fundraise-vs-fundraising'
  | 'technology-roadmap'
  | 'governance'
  | 'team-trustees'
  | 'founding-story'
  | 'sergs-chocolates'
  | 'impact'
  | 'annual-reports'
  | 'campaign-standards'
  | 'compliance-library'
  | 'verification-framework'
  | 'public-impact-dashboard'
  | 'bayanihan-stories'
  | 'diaspora-giving'
  | 'research-policy'
  | 'partner-with-us'
  | 'contact'
  | 'faq'
  | 'blog'

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
  'home', 'why-we-exist', 'mission', 'trust-transparency',
  'fundraise-vs-fundraising', 'technology-roadmap', 'governance',
  'team-trustees', 'founding-story', 'sergs-chocolates', 'impact',
  'annual-reports', 'campaign-standards', 'compliance-library',
  'verification-framework', 'public-impact-dashboard', 'bayanihan-stories',
  'diaspora-giving', 'research-policy', 'partner-with-us', 'contact',
  'faq', 'blog'
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
  'why-we-exist': 'Why We Exist',
  'mission': 'Mission, Vision & Objectives',
  'trust-transparency': 'Trust & Transparency',
  'fundraise-vs-fundraising': 'Fundraise.ph & Fundraising.ph',
  'technology-roadmap': 'Technology Roadmap',
  'governance': 'Governance',
  'team-trustees': 'Team & Trustees',
  'founding-story': 'Our Founding Story',
  'sergs-chocolates': "Serg's Chocolates",
  'impact': 'Our Impact',
  'annual-reports': 'Annual Reports',
  'campaign-standards': 'Campaign Standards',
  'compliance-library': 'Compliance Library',
  'verification-framework': 'Verification Framework',
  'public-impact-dashboard': 'Public Impact Dashboard',
  'bayanihan-stories': 'Bayanihan Stories',
  'diaspora-giving': 'Diaspora Giving',
  'research-policy': 'Research & Policy',
  'partner-with-us': 'Partner With Us',
  'contact': 'Contact',
  'faq': 'FAQ',
  'blog': 'Trustee Notes & Blog',
}
