'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  MessageSquare,
  Handshake,
  Newspaper,
  Shield,
  Headphones,
  Send,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

const contactCategories = [
  {
    id: 'general',
    label: 'General Inquiry',
    icon: MessageSquare,
    fields: ['name', 'email', 'subject', 'message'],
    subjectOptions: [
      'About Fundraise.ph',
      'About Fundraising.ph',
      'Partnership Possibilities',
      'Media Request',
      'Other',
    ],
  },
  {
    id: 'partner',
    label: 'Partner Inquiry',
    icon: Handshake,
    fields: ['name', 'email', 'organization', 'partnerType', 'message'],
    partnerTypes: [
      'NGO / Nonprofit',
      'School / Alumni Group',
      'Church / Faith Community',
      'LGU / Community Organization',
      'Corporate Sponsor',
      'Supplier / Product Partner',
      'Diaspora Organization',
      'Technology Partner',
      'Legal / Compliance Partner',
    ],
  },
  {
    id: 'media',
    label: 'Media Inquiry',
    icon: Newspaper,
    fields: ['name', 'email', 'outlet', 'deadline', 'message'],
  },
  {
    id: 'trustee',
    label: 'Trustee / Advisor Interest',
    icon: Shield,
    fields: ['name', 'email', 'background', 'motivation', 'message'],
  },
  {
    id: 'support',
    label: 'Campaign Platform Support',
    icon: Headphones,
    redirect: true,
  },
]

export function ContactPage() {
  const [activeTab, setActiveTab] = useState('general')

  return (
    <div>
      <PageHeader
        title="Contact Fundraise.ph"
        headline="Get in touch with the Fundraise.ph team."
        description="We welcome inquiries from individuals, organizations, media, and anyone interested in building trusted Filipino fundraising."
      />

      {/* Contact Info Bar */}
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-4 p-4 bg-card border rounded-xl">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">hello@fundraise.ph</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-card border rounded-xl">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Phone</p>
              <p className="text-sm text-muted-foreground">+63 (2) 8XXX-XXXX</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-card border rounded-xl">
            <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Location</p>
              <p className="text-sm text-muted-foreground">Metro Manila, Philippines</p>
            </div>
          </div>
        </div>

        {/* Contact Form Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-muted p-1 rounded-xl">
            {contactCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {/* General Inquiry */}
          <TabsContent value="general" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">General Inquiry</h3>
                  <p className="text-muted-foreground text-sm">
                    Have a question about Fundraise.ph or Fundraising.ph? We&apos;d love to hear from you.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="general-name">Full Name</Label>
                    <Input id="general-name" placeholder="Juan Dela Cruz" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="general-email">Email Address</Label>
                    <Input id="general-email" type="email" placeholder="juan@example.com" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="general-subject">Subject</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactCategories[0].subjectOptions?.map((opt) => (
                          <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, '-')}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="general-message">Message</Label>
                    <Textarea
                      id="general-message"
                      placeholder="Tell us how we can help..."
                      rows={5}
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send className="mr-2 h-4 w-4" />
                    Send Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partner Inquiry */}
          <TabsContent value="partner" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Partner Inquiry</h3>
                  <p className="text-muted-foreground text-sm">
                    Interested in joining the Fundraise.ph ecosystem as a partner organization?
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="partner-name">Full Name</Label>
                    <Input id="partner-name" placeholder="Juan Dela Cruz" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partner-email">Email Address</Label>
                    <Input id="partner-email" type="email" placeholder="juan@organization.org" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partner-org">Organization Name</Label>
                    <Input id="partner-org" placeholder="Your organization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partner-type">Partner Type</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select partner type" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactCategories[1].partnerTypes?.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="partner-message">Tell us about your partnership interest</Label>
                    <Textarea
                      id="partner-message"
                      placeholder="Describe your organization and how you'd like to partner with Fundraise.ph..."
                      rows={5}
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Partner Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Media Inquiry */}
          <TabsContent value="media" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Media Inquiry</h3>
                  <p className="text-muted-foreground text-sm">
                    For press coverage, interviews, or story requests about Fundraise.ph.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="media-name">Full Name</Label>
                    <Input id="media-name" placeholder="Reporter Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="media-email">Email Address</Label>
                    <Input id="media-email" type="email" placeholder="reporter@news.ph" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="media-outlet">Media Outlet</Label>
                    <Input id="media-outlet" placeholder="News organization or publication" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="media-deadline">Deadline</Label>
                    <Input id="media-deadline" type="date" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="media-message">What is your story about?</Label>
                    <Textarea
                      id="media-message"
                      placeholder="Tell us about the story you're working on and how we can help..."
                      rows={5}
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Media Request
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trustee / Advisor Interest */}
          <TabsContent value="trustee" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Trustee / Advisor Interest</h3>
                  <p className="text-muted-foreground text-sm">
                    Interested in serving as a trustee or advisor for Fundraise.ph? We value expertise in governance, law, technology, and nonprofit leadership.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="trustee-name">Full Name</Label>
                    <Input id="trustee-name" placeholder="Juan Dela Cruz" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trustee-email">Email Address</Label>
                    <Input id="trustee-email" type="email" placeholder="juan@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trustee-background">Professional Background</Label>
                    <Input id="trustee-background" placeholder="e.g., Lawyer, CPA, Tech Executive" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trustee-motivation">Area of Interest</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="governance">Governance</SelectItem>
                        <SelectItem value="legal">Legal & Compliance</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="nonprofit">Nonprofit Leadership</SelectItem>
                        <SelectItem value="finance">Finance & Audit</SelectItem>
                        <SelectItem value="community">Community & Advocacy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="trustee-message">Why do you want to be involved?</Label>
                    <Textarea
                      id="trustee-message"
                      placeholder="Share your motivation and what you'd bring to Fundraise.ph..."
                      rows={5}
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send className="mr-2 h-4 w-4" />
                    Express Interest
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Campaign Platform Support - Redirect */}
          <TabsContent value="support" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <Headphones className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Campaign Platform Support</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    For technical support, campaign management, and platform-related questions,
                    please visit the Fundraising.ph platform directly.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a
                      href="https://fundraising.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Go to Fundraising.ph
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <CTABlock
          headline="For campaigns, visit Fundraising.ph"
          subheadline="Fundraise.ph builds the trust layer. Fundraising.ph is where campaigns are created, managed, and supported."
          primaryText="Go to Fundraising.ph"
          primaryHref="https://fundraising.ph"
        />
      </Section>
    </div>
  )
}
