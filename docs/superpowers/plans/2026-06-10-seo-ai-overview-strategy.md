# SEO & AI Overview Content Strategy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build separate SEO clusters for Fundraise.ph (trust/education) and Fundraising.ph (transactional/campaign), with answer-first pages, schema markup, llms.txt, proof blocks, internal linking, author boxes, glossary, knowledge center, comparison pages, template pages, local pages, and sample campaigns.

**Architecture:** Fundraise.ph is a Next.js 16 SPA with hash-based routing (pages are components in `src/components/pages/`, registered in `src/lib/navigation.ts`). Fundraising.ph is a Next.js 14 App Router app (pages in `src/app/[route]/page.tsx`, learn content in `content/learn/` as markdown). Each site gets its own set of new pages, shared schema utilities, and consistent internal linking.

**Tech Stack:** Next.js 14/16, React 18/19, Tailwind CSS, Lucide React, shadcn/ui (fundraise.ph), gray-matter + next-mdx-remote (fundraising.ph learn content)

---

## File Structure Overview

### Fundraise.ph (`/proj/www/fundraise.ph/`)

**New shared components:**
- `src/components/shared/schema-markup.tsx` — JSON-LD schema injection component
- `src/components/shared/author-box.tsx` — Author/reviewer/date display
- `src/components/shared/proof-block.tsx` — Compliance/verification/trust proof callout
- `src/components/shared/internal-links.tsx` — Structured internal link block
- `src/components/shared/answer-block.tsx` — Answer-first paragraph component
- `src/components/shared/glossary-term.tsx` — Glossary definition component

**New page components (in `src/components/pages/`):**
- `philippines-compliance-guide-page.tsx`
- `verified-standards-page.tsx`
- `campaign-verification-framework-page.tsx`
- `donor-protection-page.tsx`
- `transparency-reporting-page.tsx`
- `product-based-fundraising-guide-page.tsx`
- `marketplace-fundraising-guide-page.tsx` (update existing)
- `diaspora-giving-safety-page.tsx`
- `fundraise-vs-fundraising-page.tsx`
- `knowledge-center-page.tsx`
- `glossary-page.tsx`

**Modified files:**
- `src/lib/navigation.ts` — Add new PageId entries
- `src/components/layout/header.tsx` — Add new nav items
- `src/components/layout/footer.tsx` — Add new footer links
- `src/app/layout.tsx` — Add Organization + WebSite schema
- `src/app/page.tsx` — Register new page components
- All existing page components — Add schema, author boxes, proof blocks, internal links

**New static files:**
- `public/llms.txt`

### Fundraising.ph (`/proj/www/fundraising.ph/`)

**New route pages (in `src/app/`):**
- `fundraising-guide/page.tsx` — How to Start a Fundraising Campaign in the Philippines
- `medical-fundraising/page.tsx`
- `education-fundraising/page.tsx`
- `disaster-relief-fundraising/page.tsx`
- `community-fundraising/page.tsx`
- `church-fundraising/page.tsx`
- `school-fundraising/page.tsx`
- `business-fundraising/page.tsx`
- `compare/gofundme/page.tsx`
- `compare/giveasia/page.tsx`
- `compare/facebook/page.tsx`
- `compare/best-platforms/page.tsx`
- `local/manila/page.tsx`
- `local/quezon-city/page.tsx`
- `local/cebu/page.tsx`
- `local/davao/page.tsx`
- `local/metro-manila-schools/page.tsx`
- `local/philippines-church/page.tsx`
- `local/philippines-community/page.tsx`
- `templates/campaign-description/page.tsx`
- `templates/medical-letter/page.tsx`
- `templates/school-letter/page.tsx`
- `templates/church-letter/page.tsx`
- `templates/sponsorship-request/page.tsx`
- `templates/donor-thank-you/page.tsx`
- `templates/campaign-update/page.tsx`
- `templates/product-order-form/page.tsx`
- `templates/donation-acknowledgment/page.tsx`
- `templates/beneficiary-checklist/page.tsx`
- `templates/campaign-budget/page.tsx`
- `templates/payout-checklist/page.tsx`
- `samples/medical/page.tsx`
- `samples/school/page.tsx`
- `samples/community-pantry/page.tsx`
- `samples/disaster-relief/page.tsx`
- `samples/product-fundraiser/page.tsx`

**New shared components:**
- `src/components/SchemaMarkup.tsx`
- `src/components/AuthorBox.tsx`
- `src/components/ProofBlock.tsx`
- `src/components/InternalLinks.tsx`
- `src/components/AnswerBlock.tsx`

**New learn content (in `content/learn/`):**
- `guides/what-is-product-based-fundraising.md`
- `guides/how-online-fundraising-works-ph.md`
- `guides/what-documents-needed-fundraising.md`
- `guides/how-to-write-fundraising-story.md`
- `guides/how-to-show-proof-to-donors.md`
- `guides/how-to-update-donors-after-funds.md`
- `guides/how-payouts-work-online-fundraising.md`
- `guides/how-to-avoid-fake-campaigns.md`
- `guides/what-donors-should-check.md`
- `guides/medical-fundraising-philippines.md`
- `guides/education-fundraising-philippines.md`
- `guides/disaster-relief-fundraising-philippines.md`
- `guides/community-fundraising-philippines.md`
- `guides/church-fundraising-philippines.md`
- `guides/school-fundraising-philippines.md`

**Modified files:**
- `src/app/layout.tsx` — Add Organization + WebSite schema
- `src/components/Navbar.tsx` — Add new nav items
- `src/components/Footer.tsx` — Add new footer sections
- Existing pages — Add schema, proof blocks, internal links

**New static files:**
- `public/llms.txt`

---

## Tasks

### Task 1: Fundraise.ph — Shared SEO Components

Create reusable components for schema markup, author boxes, proof blocks, internal links, answer blocks, and glossary terms.

**Files:**
- Create: `src/components/shared/schema-markup.tsx`
- Create: `src/components/shared/author-box.tsx`
- Create: `src/components/shared/proof-block.tsx`
- Create: `src/components/shared/internal-links.tsx`
- Create: `src/components/shared/answer-block.tsx`
- Create: `src/components/shared/glossary-term.tsx`

### Task 2: Fundraise.ph — New Page Components (Part 1: Citation Pages)

Create the core citation-worthy page components for Fundraise.ph.

**Files:**
- Create: `src/components/pages/philippines-compliance-guide-page.tsx`
- Create: `src/components/pages/verified-standards-page.tsx`
- Create: `src/components/pages/campaign-verification-framework-page.tsx`
- Create: `src/components/pages/donor-protection-page.tsx`
- Create: `src/components/pages/transparency-reporting-page.tsx`

### Task 3: Fundraise.ph — New Page Components (Part 2: Guides & Hub)

**Files:**
- Create: `src/components/pages/product-based-fundraising-guide-page.tsx`
- Create: `src/components/pages/diaspora-giving-safety-page.tsx`
- Create: `src/components/pages/fundraise-vs-fundraising-page.tsx`
- Create: `src/components/pages/knowledge-center-page.tsx`
- Create: `src/components/pages/glossary-page.tsx`

### Task 4: Fundraise.ph — Register All New Pages

Update navigation, header, footer, and page registry to include all new pages.

**Files:**
- Modify: `src/lib/navigation.ts`
- Modify: `src/components/layout/header.tsx`
- Modify: `src/components/layout/footer.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/layout.tsx`

### Task 5: Fundraise.ph — llms.txt + Schema on Layout

Create llms.txt and add Organization/WebSite schema to layout.

**Files:**
- Create: `public/llms.txt`
- Modify: `src/app/layout.tsx`

### Task 6: Fundraising.ph — Shared SEO Components

Create reusable components for schema, author boxes, proof blocks, internal links, answer blocks.

**Files:**
- Create: `src/components/SchemaMarkup.tsx`
- Create: `src/components/AuthorBox.tsx`
- Create: `src/components/ProofBlock.tsx`
- Create: `src/components/InternalLinks.tsx`
- Create: `src/components/AnswerBlock.tsx`

### Task 7: Fundraising.ph — Category Fundraising Pages

Create dedicated category landing pages for each fundraising type.

**Files:**
- Create: `src/app/fundraising-guide/page.tsx`
- Create: `src/app/medical-fundraising/page.tsx`
- Create: `src/app/education-fundraising/page.tsx`
- Create: `src/app/disaster-relief-fundraising/page.tsx`
- Create: `src/app/community-fundraising/page.tsx`
- Create: `src/app/church-fundraising/page.tsx`
- Create: `src/app/school-fundraising/page.tsx`
- Create: `src/app/business-fundraising/page.tsx`

### Task 8: Fundraising.ph — Comparison Pages

**Files:**
- Create: `src/app/compare/gofundme/page.tsx`
- Create: `src/app/compare/giveasia/page.tsx`
- Create: `src/app/compare/facebook/page.tsx`
- Create: `src/app/compare/best-platforms/page.tsx`

### Task 9: Fundraising.ph — Local / Near-Me Pages

**Files:**
- Create: `src/app/local/manila/page.tsx`
- Create: `src/app/local/quezon-city/page.tsx`
- Create: `src/app/local/cebu/page.tsx`
- Create: `src/app/local/davao/page.tsx`
- Create: `src/app/local/metro-manila-schools/page.tsx`
- Create: `src/app/local/philippines-church/page.tsx`
- Create: `src/app/local/philippines-community/page.tsx`

### Task 10: Fundraising.ph — Template Pages

**Files:**
- Create 12 template pages in `src/app/templates/`

### Task 11: Fundraising.ph — Sample Campaign Pages

**Files:**
- Create: `src/app/samples/medical/page.tsx`
- Create: `src/app/samples/school/page.tsx`
- Create: `src/app/samples/community-pantry/page.tsx`
- Create: `src/app/samples/disaster-relief/page.tsx`
- Create: `src/app/samples/product-fundraiser/page.tsx`

### Task 12: Fundraising.ph — Learn Content (Markdown)

Create pillar and supporting articles as markdown files in `content/learn/`.

**Files:**
- Create ~15 markdown files in `content/learn/guides/`

### Task 13: Fundraising.ph — Navigation, Footer & Layout Updates

Update nav, footer, layout with new sections and schema.

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/app/layout.tsx`

### Task 14: Fundraising.ph — llms.txt

**Files:**
- Create: `public/llms.txt`

### Task 15: Update Existing Pages with Proof Blocks, Author Boxes, Internal Links

Add proof blocks, author boxes, schema, and internal links to existing pages on both sites.
