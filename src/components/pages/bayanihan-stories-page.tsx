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
  Heart,
  GraduationCap,
  CloudRain,
  Users,
  School,
  Church,
  Globe,
  ShoppingBag,
  HandCoins,
  Candy,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  MapPin,
  Target,
  Trophy,
  ListChecks,
  X,
} from 'lucide-react'

const storyCategories = [
  { label: 'Medical help', icon: Heart, color: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100' },
  { label: 'Education support', icon: GraduationCap, color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100' },
  { label: 'Disaster relief', icon: CloudRain, color: 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100' },
  { label: 'Community projects', icon: Users, color: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' },
  { label: 'School fundraising', icon: School, color: 'bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100' },
  { label: 'Church and parish support', icon: Church, color: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100' },
  { label: 'Diaspora giving', icon: Globe, color: 'bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100' },
  { label: 'Marketplace fundraising', icon: ShoppingBag, color: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100' },
  { label: 'Sponsor-supported campaigns', icon: HandCoins, color: 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100' },
  { label: "Serg's Chocolates giving stories", icon: Candy, color: 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100' },
]

const sampleStories = [
  {
    title: 'Helping Nanay Maria Beat Cancer',
    community: 'Barangay San Roque, Quezon City',
    type: 'Medical help',
    typeColor: 'bg-red-50 text-red-700',
    achieved: 'Raised ₱350,000 for chemotherapy sessions. Nanay Maria completed her treatment and is now in remission.',
    tags: ['Medical help', 'Diaspora giving'],
  },
  {
    title: 'Rebuilding After Typhoon Paeng',
    community: 'Coastal communities, Catanduanes',
    type: 'Disaster relief',
    typeColor: 'bg-slate-50 text-slate-700',
    achieved: 'Provided emergency shelter kits and rebuilding materials for 47 families. All homes rebuilt within 3 months.',
    tags: ['Disaster relief', 'Community projects'],
  },
  {
    title: 'Scholarships for Mangyan Students',
    community: 'Mangyan communities, Oriental Mindoro',
    type: 'Education support',
    typeColor: 'bg-blue-50 text-blue-700',
    achieved: 'Funded 12 full scholarships for the school year. 100% retention rate. Students now have school supplies, uniforms, and meal allowances.',
    tags: ['Education support', 'School fundraising'],
  },
  {
    title: 'New Roof for Sto. Niño Chapel',
    community: 'Sto. Niño Parish, Cebu',
    type: 'Church and parish support',
    typeColor: 'bg-purple-50 text-purple-700',
    achieved: 'Raised ₱180,000 through local and diaspora donations. Chapel roof replaced before the rainy season.',
    tags: ['Church and parish support', 'Diaspora giving'],
  },
]

const storyTemplateItems = [
  { label: 'Campaign title and organizer', icon: BookOpen },
  { label: 'Community or beneficiary name', icon: MapPin },
  { label: 'Type of help provided', icon: Target },
  { label: 'What was achieved (outcomes, not just outputs)', icon: Trophy },
  { label: 'Donor and community participation', icon: Users },
  { label: 'Post-campaign report link', icon: ListChecks },
  { label: 'Lessons learned', icon: CheckCircle2 },
]

export function BayanihanStoriesPage() {
  const { navigate } = useNavigation()
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filteredStories = activeFilter
    ? sampleStories.filter((story) => story.tags.includes(activeFilter))
    : sampleStories

  return (
    <div>
      <PageHeader
        title="Bayanihan Stories"
        headline="Stories of giving, support, recovery, and community."
        description="Every campaign on Fundraising.ph is a bayanihan story — a community coming together to lift someone up. These are the narratives behind the numbers."
      />

      {/* Story Categories Filter */}
      <Section>
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 text-sm">
            Story Categories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore by Type of Help
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Filter stories by the kind of bayanihan that inspires you most.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {storyCategories.map((category) => {
            const Icon = category.icon
            const isActive = activeFilter === category.label
            return (
              <Button
                key={category.label}
                variant="outline"
                size="sm"
                className={`rounded-full transition-all duration-200 ${category.color} ${
                  isActive ? 'ring-2 ring-primary shadow-md' : ''
                }`}
                onClick={() => setActiveFilter(isActive ? null : category.label)}
              >
                <Icon className="h-3.5 w-3.5 mr-1.5" />
                {category.label}
                {isActive && <X className="h-3 w-3 ml-1" />}
              </Button>
            )
          })}
        </div>
        {activeFilter && (
          <div className="text-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveFilter(null)}
              className="text-muted-foreground"
            >
              <X className="h-3.5 w-3.5 mr-1" />
              Clear filter
            </Button>
          </div>
        )}
      </Section>

      {/* Story Cards */}
      <Section dark>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {activeFilter ? `Stories: ${activeFilter}` : 'Sample Bayanihan Stories'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            These are representative stories of the kinds of campaigns Fundraising.ph supports. Real stories will populate as campaigns are completed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStories.map((story, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-emerald-500"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-snug">{story.title}</CardTitle>
                  <Badge variant="secondary" className={`shrink-0 text-xs ${story.typeColor}`}>
                    {story.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {story.community}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">What was achieved</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{story.achieved}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {story.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="link"
                  className="p-0 h-auto text-emerald-600 hover:text-emerald-700 font-semibold"
                  onClick={() => navigate('bayanihan-stories')}
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No stories found for this category yet.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setActiveFilter(null)}
            >
              View all stories
            </Button>
          </div>
        )}
      </Section>

      {/* Story Template Section */}
      <Section>
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4 text-sm">
            Story Template
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Every Bayanihan Story Includes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every completed campaign has the opportunity to share their story following this structured template, ensuring transparency, respect, and accountability.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-emerald-200 bg-emerald-50/30">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {storyTemplateItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-medium text-sm">{item.label}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Required element for every published story
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <CTABlock
          headline="Every campaign is a bayanihan story"
          subheadline="Read, share, and contribute to stories of Filipino communities helping each other on Fundraising.ph."
          primaryText="Read More Campaigns on Fundraising.ph"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
