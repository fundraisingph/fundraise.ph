'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useNavigation } from '@/lib/navigation'
import {
  PenLine,
  Calendar,
  ArrowRight,
  BookOpen,
  FileText,
  Tag,
  Search,
  GraduationCap,
} from 'lucide-react'

const blogCategories = [
  'All',
  'Trust & Transparency',
  'Compliance',
  'Verification',
  'Technology',
  'Bayanihan',
  'Diaspora Giving',
  'Governance',
  'Fundraising Standards',
  'Ethical Storytelling',
  'Product Partnerships',
  'Policy & Research',
  'Community Impact',
  'Platform Updates',
]

const blogPosts = [
  {
    id: 1,
    title: 'Why Verification Must Be Layered, Not Binary',
    category: 'Verification',
    date: 'February 28, 2025',
    excerpt:
      'A single "verified" badge tells donors nothing about what was actually checked. At Fundraise.ph, verification is progressive — from basic identity review to compliance-sensitive review — because trust is earned in layers, not granted in one step.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 2,
    title: 'The Case for a Filipino Fundraising Trust Layer',
    category: 'Trust & Transparency',
    date: 'February 15, 2025',
    excerpt:
      'Without standardized verification, transparent fund tracking, and compliance guidance, Filipino fundraising remains vulnerable. Here\'s why a dedicated trust organization is essential — and why it must be independent from any single platform.',
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 3,
    title: 'How Serg\'s Chocolates Validates the Marketplace Model',
    category: 'Product Partnerships',
    date: 'January 30, 2025',
    excerpt:
      'Serg\'s Chocolates isn\'t just a product — it\'s proof that Filipino businesses can participate in the fundraising ecosystem through verified marketplace transactions. Every purchase supports both the entrepreneur and the trust infrastructure.',
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    badgeColor: 'bg-rose-100 text-rose-700',
  },
]

const coreAuthorityArticles = [
  'What Is Fundraise.ph? The Trust Layer for Filipino Fundraising',
  'What Is Fundraising.ph? The Verified Campaign Platform',
  'How Fundraise.ph Verifies Campaigns: A Complete Guide',
  'Campaign Standards: The Minimum Requirements for Every Filipino Campaign',
  'Verification Badges Explained: What Each Badge Means for Donors',
  'Compliance Library: A Free Resource for Responsible Fundraising',
  'The Verification Framework: From Basic Identity to Compliance-Sensitive Review',
  'Why Filipino Fundraising Needs a Nonprofit Trust Organization',
  'Fundraise.ph vs. Fundraising.ph: Understanding the Ecosystem',
  'How to Start a Verified Campaign on Fundraising.ph',
]

const complianceEducationArticles = [
  'Do You Need a DSWD Permit to Fundraise in the Philippines?',
  'Understanding LGU Requirements for Community Fundraising',
  'Data Privacy Act Compliance for Filipino Campaigns',
  'When Does Fundraising Require SEC Registration?',
  'Ethical Storytelling: How to Share Beneficiary Stories Responsibly',
  'Payment and Fund Flow: A Guide for Filipino Campaigners',
  'Post-Campaign Reporting: What Donors Deserve to Know',
  'Beneficiary Consent Protocols: Why No Campaign Goes Live Without It',
  'Solicitation vs. Donation: Understanding the Legal Distinction',
  'The Role of Independent Governance in Fundraising Trust',
]

export function BlogPage() {
  const { navigate } = useNavigation()
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <div>
      <PageHeader
        title="Trustee Notes & Bayanihan Insights"
        headline="Insights on trust, transparency, technology, and Filipino giving."
        description="Perspectives from the Fundraise.ph team and trustees on building the trust layer for Filipino fundraising."
      />

      {/* Blog Category Filters + Posts */}
      <Section>
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 text-sm">
            <PenLine className="h-3.5 w-3.5 mr-1.5" />
            Latest Insights
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Posts
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our latest thinking on trust, verification, compliance, and
            the future of Filipino fundraising.
          </p>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {blogCategories.map((cat) => (
            <Badge
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              className={`cursor-pointer px-3 py-1.5 text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'hover:bg-primary/10'
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card
                key={post.id}
                className={`border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${post.color}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`text-xs ${post.badgeColor}`}>
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-snug">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed opacity-80 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm font-medium opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                    Read more
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Search className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
              <p className="text-muted-foreground">
                No posts found in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* SEO Article Library */}
      <Section dark>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            <BookOpen className="h-3.5 w-3.5 mr-1.5" />
            SEO Article Library
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Authority & Education Resources
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            In-depth articles designed to rank for key search queries and serve as
            definitive resources on Filipino fundraising trust and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Core Authority Articles */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <FileText className="h-4 w-4" />
                </div>
                <CardTitle className="text-lg">Core Authority Articles</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                Foundational content defining the Fundraise.ph ecosystem and its trust framework.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {coreAuthorityArticles.map((title, index) => (
                  <li key={index}>
                    <div className="flex items-start gap-2 group cursor-pointer">
                      <ArrowRight className="h-3.5 w-3.5 text-emerald-500 mt-1.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm leading-snug group-hover:text-emerald-600 transition-colors">
                        {title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Compliance Education Articles */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <CardTitle className="text-lg">Compliance Education</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                Practical guides on legal requirements, ethical practices, and compliance for Filipino campaigners.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {complianceEducationArticles.map((title, index) => (
                  <li key={index}>
                    <div className="flex items-start gap-2 group cursor-pointer">
                      <ArrowRight className="h-3.5 w-3.5 text-amber-500 mt-1.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm leading-snug group-hover:text-amber-600 transition-colors">
                        {title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <CTABlock
          headline="Explore the ecosystem"
          subheadline="Read our standards, explore verified campaigns, or start your own transparent fundraiser on Fundraising.ph."
          primaryText="Go to Fundraising.ph"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
