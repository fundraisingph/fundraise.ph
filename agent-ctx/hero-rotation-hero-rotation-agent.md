# Task ID: hero-rotation
# Agent: hero-rotation-agent

## Task
Update all 12 page files in `/src/components/pages/` to use the rotating hero system.

## Work Done

### Changes Made to Each File

For all 12 page components, the following pattern was applied:

1. **Added imports:**
   - `import { useRotatingContent } from '@/hooks/use-rotating-content'`
   - `import { heroVariations } from '@/lib/hero-variations'`

2. **Added hook call inside the component function:**
   - `const { current: heroVar } = useRotatingContent(heroVariations['PAGE_KEY'])`

3. **Updated Hero/PageHeader props:**
   - Replaced hardcoded `headline` string with `headline={heroVar.headline}`
   - Replaced hardcoded `subheadline`/`description` string with `subheadline={heroVar.subheadline}` / `description={heroVar.subheadline}`
   - Added `variation={heroVar}` prop

### Files Modified

| File | Page Key | Component | Hero Type |
|------|----------|-----------|-----------|
| home-page.tsx | 'home' | HomePage | Hero |
| why-we-exist-page.tsx | 'why-we-exist' | WhyWeExistPage | PageHeader |
| mission-page.tsx | 'mission' | MissionPage | PageHeader |
| trust-transparency-page.tsx | 'trust-transparency' | TrustTransparencyPage | PageHeader |
| technology-roadmap-page.tsx | 'technology-roadmap' | TechnologyRoadmapPage | PageHeader |
| founding-story-page.tsx | 'founding-story' | FoundingStoryPage | PageHeader |
| sergs-chocolates-page.tsx | 'sergs-chocolates' | SergsChocolatesPage | PageHeader |
| team-page.tsx | 'team' | TeamPage | PageHeader |
| governance-page.tsx | 'governance' | GovernancePage | PageHeader |
| impact-page.tsx | 'impact' | ImpactPage | PageHeader |
| partner-with-us-page.tsx | 'partner-with-us' | PartnerWithUsPage | PageHeader |
| blog-page.tsx | 'blog' | BlogPage | PageHeader |

### Verification
- Lint check: PASSED (zero errors)
- Dev server: Compiles cleanly (all 12 pages compile successfully)
- All existing page content below hero/header sections preserved unchanged
- All component export names unchanged

## Summary
All 12 page components now use the rotating hero system with `useRotatingContent` and `heroVariations`. Each page rotates through 5 variations with different headlines, subheadlines, accent colors, and gradient patterns every 8 seconds.
