import { create } from 'zustand'

export type PageId = 
  | 'home'
  | 'why-we-exist'
  | 'mission'
  | 'trust-transparency'
  | 'technology-roadmap'
  | 'founding-story'
  | 'sergs-chocolates'
  | 'team'
  | 'governance'
  | 'impact'
  | 'partner-with-us'
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
  'technology-roadmap', 'founding-story', 'sergs-chocolates',
  'team', 'governance', 'impact', 'partner-with-us', 'blog'
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
  'trust-transparency': 'Trust & Transparency',
  'technology-roadmap': 'Technology Roadmap',
  'founding-story': 'Founding Story',
  'sergs-chocolates': "Serg's Chocolates",
  'team': 'Team & Trustees',
  'governance': 'Governance',
  'impact': 'Impact',
  'partner-with-us': 'Partner With Us',
  'blog': 'Trustee Notes & Blog',
}
