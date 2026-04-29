'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  LayoutDashboard, Users, FileText, Settings, LogOut, Menu, X,
  ChevronRight, Eye, CheckCircle2, XCircle, Clock, AlertCircle,
  Loader2, Plus, Trash2, Edit3, ExternalLink, Shield, Search,
  Building2, Mail, Phone, Globe, MessageSquare, Calendar,
  FileEdit, Star, ToggleLeft, ToggleRight, Save, RefreshCw,
  UserCog, UserPlus, Lock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle,
} from '@/components/ui/dialog'
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// ─── Types ───────────────────────────────────────────────────────────────────

interface AdminUser {
  id: string
  email: string
  name: string
  role: string
}

interface PartnerApp {
  id: string
  organizationName: string
  contactPerson: string
  email: string
  phone: string
  partnerType: string
  website: string | null
  description: string
  mission: string | null
  howHeard: string | null
  agreedToTerms: boolean
  status: string
  reviewNotes: string | null
  reviewedBy: string | null
  reviewedAt: string | null
  createdAt: string
  updatedAt: string
}

interface BlogPost {
  id: string
  slug: string
  title: string
  category: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  readTime: string
  published: boolean
  featured: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string | null
}

type AdminView = 'dashboard' | 'partners' | 'blog' | 'settings' | 'users'

// ─── Helpers ─────────────────────────────────────────────────────────────────

const statusColors: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-800 border-amber-200',
  under_review: 'bg-blue-100 text-blue-800 border-blue-200',
  approved: 'bg-green-100 text-green-800 border-green-200',
  rejected: 'bg-red-100 text-red-800 border-red-200',
}

const statusLabels: Record<string, string> = {
  pending: 'Pending',
  under_review: 'Under Review',
  approved: 'Approved',
  rejected: 'Rejected',
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// ─── Login Screen ────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: (admin: AdminUser) => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Login failed')
        return
      }
      onLogin(data.admin)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-gray p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-3">
            <Shield className="w-7 h-7 text-gold" />
          </div>
          <CardTitle className="text-2xl text-navy">Admin Dashboard</CardTitle>
          <CardDescription>Fundraise.ph Administration Portal</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@fundraise.ph"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-11 bg-navy hover:bg-navy/90 text-white"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// ─── Dashboard Overview ──────────────────────────────────────────────────────

function DashboardOverview({
  partners,
  posts,
  loading,
}: {
  partners: PartnerApp[]
  posts: BlogPost[]
  loading: boolean
}) {
  const pending = partners.filter((p) => p.status === 'pending').length
  const underReview = partners.filter((p) => p.status === 'under_review').length
  const approved = partners.filter((p) => p.status === 'approved').length
  const published = posts.filter((p) => p.published).length
  const drafts = posts.filter((p) => !p.published).length
  const featured = posts.filter((p) => p.featured).length

  const recentPartners = partners.slice(0, 3)
  const recentPosts = posts.slice(0, 3)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-amber-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Partner Applications</p>
                <p className="text-2xl font-bold text-navy">{partners.length}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{pending} pending review</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Approved Partners</p>
                <p className="text-2xl font-bold text-navy">{approved}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{underReview} under review</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Blog Posts</p>
                <p className="text-2xl font-bold text-navy">{posts.length}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{published} published, {drafts} drafts</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-gold">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Featured Posts</p>
                <p className="text-2xl font-bold text-navy">{featured}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-gold" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Highlighted content</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Recent Partner Applications</CardTitle>
          </CardHeader>
          <CardContent>
            {recentPartners.length === 0 ? (
              <p className="text-sm text-muted-foreground py-4 text-center">No applications yet</p>
            ) : (
              <div className="space-y-3">
                {recentPartners.map((p) => (
                  <div key={p.id} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{p.organizationName}</p>
                        <p className="text-xs text-muted-foreground">{p.partnerType}</p>
                      </div>
                    </div>
                    <Badge className={statusColors[p.status] || ''} variant="outline">
                      {statusLabels[p.status] || p.status}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Recent Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            {recentPosts.length === 0 ? (
              <p className="text-sm text-muted-foreground py-4 text-center">No posts yet</p>
            ) : (
              <div className="space-y-3">
                {recentPosts.map((p) => (
                  <div key={p.id} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center">
                        <FileEdit className="w-4 h-4 text-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium line-clamp-1">{p.title}</p>
                        <p className="text-xs text-muted-foreground">{p.category}</p>
                      </div>
                    </div>
                    <Badge variant={p.published ? 'default' : 'secondary'}>
                      {p.published ? 'Published' : 'Draft'}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// ─── Partner Management ──────────────────────────────────────────────────────

function PartnerManagement({
  admin,
}: {
  admin: AdminUser
}) {
  const [partners, setPartners] = useState<PartnerApp[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedPartner, setSelectedPartner] = useState<PartnerApp | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [reviewNotes, setReviewNotes] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [updating, setUpdating] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const fetchPartners = useCallback(async () => {
    setLoading(true)
    try {
      const query = statusFilter !== 'all' ? `?status=${statusFilter}` : ''
      const res = await fetch(`/api/partners${query}`)
      const data = await res.json()
      setPartners(data.applications || [])
    } catch (err) {
      console.error('Failed to fetch partners:', err)
    } finally {
      setLoading(false)
    }
  }, [statusFilter])

  useEffect(() => {
    fetchPartners()
  }, [fetchPartners])

  const handleViewPartner = (partner: PartnerApp) => {
    setSelectedPartner(partner)
    setReviewNotes(partner.reviewNotes || '')
    setNewStatus(partner.status)
    setDetailOpen(true)
  }

  const handleUpdateStatus = async () => {
    if (!selectedPartner) return
    setUpdating(true)
    try {
      const res = await fetch(`/api/partners/${selectedPartner.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: newStatus,
          reviewNotes,
          reviewedBy: admin.name,
        }),
      })
      if (res.ok) {
        const data = await res.json()
        setPartners((prev) =>
          prev.map((p) => (p.id === selectedPartner.id ? data.application : p))
        )
        setSelectedPartner(data.application)
        setDetailOpen(false)
      }
    } catch (err) {
      console.error('Failed to update partner:', err)
    } finally {
      setUpdating(false)
    }
  }

  const handleDelete = async () => {
    if (!deleteId) return
    setDeleting(true)
    try {
      const res = await fetch(`/api/partners/${deleteId}`, { method: 'DELETE' })
      if (res.ok) {
        setPartners((prev) => prev.filter((p) => p.id !== deleteId))
        setDeleteId(null)
      }
    } catch (err) {
      console.error('Failed to delete partner:', err)
    } finally {
      setDeleting(false)
    }
  }

  const filteredPartners = partners.filter((p) => {
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    return (
      p.organizationName.toLowerCase().includes(q) ||
      p.contactPerson.toLowerCase().includes(q) ||
      p.email.toLowerCase().includes(q)
    )
  })

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <Tabs value={statusFilter} onValueChange={setStatusFilter}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="under_review">Review</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search partners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9"
            />
          </div>
          <Button variant="outline" size="sm" onClick={fetchPartners}>
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="flex items-center justify-center h-48">
              <Loader2 className="w-6 h-6 animate-spin text-navy" />
            </div>
          ) : filteredPartners.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-muted-foreground">
              <Users className="w-10 h-10 mb-2 opacity-40" />
              <p className="text-sm">No partner applications found</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Organization</TableHead>
                  <TableHead className="hidden md:table-cell">Type</TableHead>
                  <TableHead className="hidden sm:table-cell">Contact</TableHead>
                  <TableHead className="hidden lg:table-cell">Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPartners.map((p) => (
                  <TableRow key={p.id} className="cursor-pointer" onClick={() => handleViewPartner(p)}>
                    <TableCell className="font-medium">{p.organizationName}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="outline" className="text-xs">{p.partnerType}</Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{p.contactPerson}</TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground">{p.email}</TableCell>
                    <TableCell>
                      <Badge className={statusColors[p.status] || ''} variant="outline">
                        {statusLabels[p.status] || p.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground text-xs">
                      {formatDate(p.createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleViewPartner(p)
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={(e) => {
                            e.stopPropagation()
                            setDeleteId(p.id)
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Partner Detail Dialog */}
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-navy">Partner Application Details</DialogTitle>
            <DialogDescription>Review and manage this partner application</DialogDescription>
          </DialogHeader>
          {selectedPartner && (
            <div className="space-y-6">
              {/* Application Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Organization</p>
                      <p className="text-sm font-medium">{selectedPartner.organizationName}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Partner Type</p>
                      <p className="text-sm font-medium">{selectedPartner.partnerType}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Contact Person</p>
                      <p className="text-sm font-medium">{selectedPartner.contactPerson}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Mail className="w-4 h-4 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium">{selectedPartner.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium">{selectedPartner.phone}</p>
                    </div>
                  </div>
                  {selectedPartner.website && (
                    <div className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-navy mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Website</p>
                        <p className="text-sm font-medium">{selectedPartner.website}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-xs text-muted-foreground mb-1">Description</p>
                <p className="text-sm whitespace-pre-wrap">{selectedPartner.description}</p>
              </div>

              {selectedPartner.mission && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Mission</p>
                  <p className="text-sm whitespace-pre-wrap">{selectedPartner.mission}</p>
                </div>
              )}

              {selectedPartner.howHeard && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">How They Heard About Us</p>
                  <p className="text-sm">{selectedPartner.howHeard}</p>
                </div>
              )}

              <Separator />

              {/* Current Status */}
              <div className="flex items-center gap-3">
                <p className="text-sm text-muted-foreground">Current Status:</p>
                <Badge className={statusColors[selectedPartner.status] || ''} variant="outline">
                  {statusLabels[selectedPartner.status] || selectedPartner.status}
                </Badge>
                {selectedPartner.reviewedAt && (
                  <p className="text-xs text-muted-foreground">
                    Reviewed {formatDate(selectedPartner.reviewedAt)}
                    {selectedPartner.reviewedBy && ` by ${selectedPartner.reviewedBy}`}
                  </p>
                )}
              </div>

              {/* Review Actions */}
              <div className="space-y-4 bg-light-gray rounded-lg p-4">
                <div className="space-y-2">
                  <Label>Change Status</Label>
                  <Select value={newStatus} onValueChange={setNewStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="under_review">Under Review</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Review Notes</Label>
                  <Textarea
                    placeholder="Add notes about this application..."
                    value={reviewNotes}
                    onChange={(e) => setReviewNotes(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => { setNewStatus('approved') }}
                    disabled={selectedPartner.status === 'approved'}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => { setNewStatus('under_review') }}
                    disabled={selectedPartner.status === 'under_review'}
                  >
                    <Eye className="w-4 h-4" />
                    Set Under Review
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => { setNewStatus('rejected') }}
                    disabled={selectedPartner.status === 'rejected'}
                  >
                    <XCircle className="w-4 h-4" />
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDetailOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-navy hover:bg-navy/90 text-white"
              onClick={handleUpdateStatus}
              disabled={updating || newStatus === selectedPartner?.status}
            >
              {updating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Application</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this partner application. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              {deleting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

// ─── Blog / CMS Management ──────────────────────────────────────────────────

function BlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Editor state
  const [editorOpen, setEditorOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)

  // Form fields
  const [formTitle, setFormTitle] = useState('')
  const [formSlug, setFormSlug] = useState('')
  const [formCategory, setFormCategory] = useState('')
  const [formExcerpt, setFormExcerpt] = useState('')
  const [formContent, setFormContent] = useState('')
  const [formAuthor, setFormAuthor] = useState('')
  const [formAuthorRole, setFormAuthorRole] = useState('')
  const [formReadTime, setFormReadTime] = useState('')
  const [formPublished, setFormPublished] = useState(false)
  const [formFeatured, setFormFeatured] = useState(false)
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false)

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    try {
      const query = statusFilter !== 'all' ? `?published=${statusFilter === 'published'}` : ''
      const res = await fetch(`/api/blog-posts${query}`)
      const data = await res.json()
      setPosts(data.posts || [])
    } catch (err) {
      console.error('Failed to fetch posts:', err)
    } finally {
      setLoading(false)
    }
  }, [statusFilter])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const resetForm = () => {
    setFormTitle('')
    setFormSlug('')
    setFormCategory('')
    setFormExcerpt('')
    setFormContent('')
    setFormAuthor('')
    setFormAuthorRole('')
    setFormReadTime('')
    setFormPublished(false)
    setFormFeatured(false)
    setSlugManuallyEdited(false)
    setEditingPost(null)
  }

  const openCreate = () => {
    resetForm()
    setEditorOpen(true)
  }

  const openEdit = (post: BlogPost) => {
    setEditingPost(post)
    setFormTitle(post.title)
    setFormSlug(post.slug)
    setFormCategory(post.category)
    setFormExcerpt(post.excerpt)
    setFormContent(post.content)
    setFormAuthor(post.author)
    setFormAuthorRole(post.authorRole)
    setFormReadTime(post.readTime)
    setFormPublished(post.published)
    setFormFeatured(post.featured)
    setSlugManuallyEdited(true)
    setEditorOpen(true)
  }

  const handleTitleChange = (value: string) => {
    setFormTitle(value)
    if (!slugManuallyEdited) {
      setFormSlug(slugify(value))
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      if (editingPost) {
        const res = await fetch(`/api/blog-posts/${editingPost.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            slug: formSlug,
            title: formTitle,
            category: formCategory,
            excerpt: formExcerpt,
            content: formContent,
            author: formAuthor,
            authorRole: formAuthorRole,
            readTime: formReadTime,
            published: formPublished,
            featured: formFeatured,
          }),
        })
        if (res.ok) {
          const data = await res.json()
          setPosts((prev) => prev.map((p) => (p.id === editingPost.id ? data.post : p)))
          setEditorOpen(false)
          resetForm()
        } else {
          const data = await res.json()
          alert(data.error || 'Failed to update post')
        }
      } else {
        const res = await fetch('/api/blog-posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            slug: formSlug,
            title: formTitle,
            category: formCategory,
            excerpt: formExcerpt,
            content: formContent,
            author: formAuthor,
            authorRole: formAuthorRole,
            readTime: formReadTime,
            published: formPublished,
            featured: formFeatured,
          }),
        })
        if (res.ok) {
          const data = await res.json()
          setPosts((prev) => [data.post, ...prev])
          setEditorOpen(false)
          resetForm()
        } else {
          const data = await res.json()
          alert(data.error || 'Failed to create post')
        }
      }
    } catch (err) {
      console.error('Failed to save post:', err)
      alert('Network error. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!deleteId) return
    setDeleting(true)
    try {
      const res = await fetch(`/api/blog-posts/${deleteId}`, { method: 'DELETE' })
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== deleteId))
        setDeleteId(null)
      }
    } catch (err) {
      console.error('Failed to delete post:', err)
    } finally {
      setDeleting(false)
    }
  }

  const isFormValid =
    formTitle.trim() &&
    formSlug.trim() &&
    formCategory.trim() &&
    formExcerpt.trim() &&
    formContent.trim() &&
    formAuthor.trim() &&
    formAuthorRole.trim() &&
    formReadTime.trim()

  const filteredPosts = posts.filter((p) => {
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    return (
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q)
    )
  })

  const categories = [
    'Trust & Transparency',
    'Compliance',
    'Technology',
    'Fundraising',
    'Governance',
    'Community',
    'Impact Stories',
    'Policy',
  ]

  return (
    <div className="space-y-4">
      {/* Filters & Actions */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <Tabs value={statusFilter} onValueChange={setStatusFilter}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="draft">Drafts</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9"
            />
          </div>
          <Button variant="outline" size="sm" onClick={fetchPosts}>
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            className="bg-gold hover:bg-gold/90 text-navy font-semibold"
            onClick={openCreate}
          >
            <Plus className="w-4 h-4" />
            New Post
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="flex items-center justify-center h-48">
              <Loader2 className="w-6 h-6 animate-spin text-navy" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-muted-foreground">
              <FileText className="w-10 h-10 mb-2 opacity-40" />
              <p className="text-sm">No blog posts found</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead className="hidden sm:table-cell">Author</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden lg:table-cell">Featured</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium max-w-[200px] truncate">{p.title}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="outline" className="text-xs">{p.category}</Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{p.author}</TableCell>
                    <TableCell>
                      <Badge variant={p.published ? 'default' : 'secondary'}>
                        {p.published ? 'Published' : 'Draft'}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {p.featured ? (
                        <Star className="w-4 h-4 text-gold fill-gold" />
                      ) : (
                        <Star className="w-4 h-4 text-muted-foreground/30" />
                      )}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground text-xs">
                      {formatDate(p.createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => openEdit(p)}
                        >
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => setDeleteId(p.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Blog Post Editor Dialog */}
      <Dialog open={editorOpen} onOpenChange={(open) => { if (!open) resetForm(); setEditorOpen(open) }}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-navy">
              {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
            </DialogTitle>
            <DialogDescription>
              {editingPost ? 'Update the blog post details below' : 'Fill in the details for the new blog post'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="post-title">Title *</Label>
                <Input
                  id="post-title"
                  placeholder="Post title"
                  value={formTitle}
                  onChange={(e) => handleTitleChange(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="post-slug">Slug *</Label>
                <Input
                  id="post-slug"
                  placeholder="post-url-slug"
                  value={formSlug}
                  onChange={(e) => {
                    setFormSlug(e.target.value)
                    setSlugManuallyEdited(true)
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="post-category">Category *</Label>
                <Select value={formCategory} onValueChange={setFormCategory}>
                  <SelectTrigger id="post-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="post-excerpt">Excerpt *</Label>
                <Textarea
                  id="post-excerpt"
                  placeholder="Brief summary of the post..."
                  value={formExcerpt}
                  onChange={(e) => setFormExcerpt(e.target.value)}
                  rows={2}
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="post-content">Content *</Label>
                <Textarea
                  id="post-content"
                  placeholder="Full post content (supports plain text)..."
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  rows={8}
                  className="min-h-[200px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="post-author">Author *</Label>
                <Input
                  id="post-author"
                  placeholder="Author name"
                  value={formAuthor}
                  onChange={(e) => setFormAuthor(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="post-role">Author Role *</Label>
                <Input
                  id="post-role"
                  placeholder="e.g., Executive Director"
                  value={formAuthorRole}
                  onChange={(e) => setFormAuthorRole(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="post-readtime">Read Time *</Label>
                <Input
                  id="post-readtime"
                  placeholder="e.g., 5 min read"
                  value={formReadTime}
                  onChange={(e) => setFormReadTime(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <Switch
                    id="post-published"
                    checked={formPublished}
                    onCheckedChange={setFormPublished}
                  />
                  <Label htmlFor="post-published" className="cursor-pointer">Published</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    id="post-featured"
                    checked={formFeatured}
                    onCheckedChange={setFormFeatured}
                  />
                  <Label htmlFor="post-featured" className="cursor-pointer">Featured</Label>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => { resetForm(); setEditorOpen(false) }}>
              Cancel
            </Button>
            <Button
              className="bg-navy hover:bg-navy/90 text-white"
              onClick={handleSave}
              disabled={saving || !isFormValid}
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  {editingPost ? 'Update Post' : 'Create Post'}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this blog post. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              {deleting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

// ─── Site Settings ───────────────────────────────────────────────────────────

function SiteSettingsManagement() {
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [newKey, setNewKey] = useState('')
  const [newValue, setNewValue] = useState('')
  const [showAdd, setShowAdd] = useState(false)

  const fetchSettings = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/settings')
      const data = await res.json()
      setSettings(data.settings || {})
    } catch (err) {
      console.error('Failed to fetch settings:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSettings()
  }, [fetchSettings])

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings }),
      })
      if (res.ok) {
        alert('Settings saved successfully!')
      } else {
        alert('Failed to save settings')
      }
    } catch {
      alert('Network error. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleAddSetting = () => {
    if (!newKey.trim()) return
    setSettings((prev) => ({ ...prev, [newKey.trim()]: newValue }))
    setNewKey('')
    setNewValue('')
    setShowAdd(false)
  }

  const handleRemoveSetting = (key: string) => {
    setSettings((prev) => {
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const wellKnownKeys = ['site_name', 'site_description', 'contact_email', 'fundraising_platform_url']

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-navy">Site Settings</h3>
          <p className="text-sm text-muted-foreground">Manage your website configuration</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={fetchSettings}>
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            className="bg-navy hover:bg-navy/90 text-white"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save All
              </>
            )}
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-48">
          <Loader2 className="w-6 h-6 animate-spin text-navy" />
        </div>
      ) : (
        <div className="space-y-4">
          {/* Well-known settings */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">General Settings</CardTitle>
              <CardDescription>Core site configuration values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {wellKnownKeys.map((key) => (
                <div key={key} className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                  <Label className="text-sm font-mono text-muted-foreground">{key}</Label>
                  <div className="sm:col-span-2 flex items-center gap-2">
                    <Input
                      value={settings[key] || ''}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, [key]: e.target.value }))
                      }
                      placeholder={`Enter ${key.replace(/_/g, ' ')}`}
                      className="h-9"
                    />
                    {!(key in settings) && (
                      <Badge variant="outline" className="text-xs shrink-0">New</Badge>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Custom settings */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Custom Settings</CardTitle>
                  <CardDescription>Additional site configuration</CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAdd(true)}
                >
                  <Plus className="w-4 h-4" />
                  Add Setting
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {showAdd && (
                <div className="flex flex-col sm:flex-row gap-2 mb-4 p-3 bg-light-gray rounded-lg">
                  <Input
                    placeholder="Setting key"
                    value={newKey}
                    onChange={(e) => setNewKey(e.target.value)}
                    className="h-9"
                  />
                  <Input
                    placeholder="Setting value"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="h-9"
                  />
                  <div className="flex gap-1">
                    <Button size="sm" onClick={handleAddSetting} disabled={!newKey.trim()}>
                      Add
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setShowAdd(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {Object.entries(settings)
                .filter(([key]) => !wellKnownKeys.includes(key))
                .length === 0 && !showAdd ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No custom settings. Click &ldquo;Add Setting&rdquo; to create one.
                </p>
              ) : (
                <div className="space-y-3">
                  {Object.entries(settings)
                    .filter(([key]) => !wellKnownKeys.includes(key))
                    .map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2 p-3 bg-light-gray rounded-lg">
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <p className="text-sm font-mono text-muted-foreground">{key}</p>
                          <Input
                            value={value}
                            onChange={(e) =>
                              setSettings((prev) => ({ ...prev, [key]: e.target.value }))
                            }
                            className="h-8 text-sm"
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50 shrink-0"
                          onClick={() => handleRemoveSetting(key)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

const ROLE_LABELS: Record<string, string> = {
  admin: 'Administrator',
  editor: 'Editor',
  viewer: 'Viewer',
}

const ROLE_COLORS: Record<string, string> = {
  admin: 'bg-purple-100 text-purple-800 border-purple-200',
  editor: 'bg-blue-100 text-blue-800 border-blue-200',
  viewer: 'bg-gray-100 text-gray-800 border-gray-200',
}

function canAccess(role: string, resource: string, action: string): boolean {
  const perms: Record<string, Record<string, string[]>> = {
    admin: { users: ['create', 'read', 'update', 'delete'], blog: ['create', 'read', 'update', 'delete', 'publish'], partner: ['create', 'read', 'update', 'delete'], settings: ['read', 'update'] },
    editor: { users: [], blog: ['create', 'read', 'update', 'publish'], partner: ['read'], settings: ['read'] },
    viewer: { users: [], blog: ['read'], partner: ['read'], settings: ['read'] },
  }
  return perms[role]?.[resource]?.includes(action) ?? false
}

// ─── User Management ──────────────────────────────────────────────────────────

function UserManagement({ admin }: { admin: AdminUser }) {
  const [users, setUsers] = useState<Array<AdminUser & { status?: string; lastLoginAt?: string | null; createdAt?: string }>>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editUser, setEditUser] = useState<typeof users[0] | null>(null)
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'viewer' })
  const [saving, setSaving] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  const fetchUsers = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/users')
      if (res.ok) {
        const data = await res.json()
        setUsers(data.users || [])
      }
    } catch (err) {
      console.error('Failed to fetch users:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchUsers() }, [fetchUsers])

  const handleCreate = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setDialogOpen(false)
        setForm({ name: '', email: '', password: '', role: 'viewer' })
        fetchUsers()
      } else {
        const data = await res.json()
        alert(data.error || 'Failed to create user')
      }
    } catch {
      alert('Network error')
    } finally {
      setSaving(false)
    }
  }

  const handleUpdateRole = async (userId: string, role: string) => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role }),
      })
      if (res.ok) fetchUsers()
    } catch {
      alert('Failed to update role')
    }
  }

  const handleToggleStatus = async (userId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'suspended' : 'active'
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) fetchUsers()
      else {
        const data = await res.json()
        alert(data.error || 'Failed to update status')
      }
    } catch {
      alert('Network error')
    }
  }

  const handleDelete = async (userId: string) => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, { method: 'DELETE' })
      if (res.ok) fetchUsers()
      else {
        const data = await res.json()
        alert(data.error || 'Failed to delete user')
      }
    } catch {
      alert('Network error')
    }
    setDeleteConfirm(null)
  }

  const handleResetPassword = async (userId: string) => {
    const newPassword = prompt('Enter new password (min 8 characters):')
    if (!newPassword || newPassword.length < 8) {
      if (newPassword !== null) alert('Password must be at least 8 characters')
      return
    }
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: newPassword }),
      })
      if (res.ok) alert('Password updated successfully')
      else alert('Failed to reset password')
    } catch {
      alert('Network error')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-navy">User Management</h2>
          <p className="text-sm text-[#4A5568]">Manage admin users and role-based access control</p>
        </div>
        {canAccess(admin.role, 'users', 'create') && (
          <Button onClick={() => { setEditUser(null); setForm({ name: '', email: '', password: '', role: 'viewer' }); setDialogOpen(true) }} className="bg-navy hover:bg-navy/90">
            <UserPlus className="w-4 h-4 mr-2" /> Add User
          </Button>
        )}
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge className={`text-xs ${ROLE_COLORS[user.role] || 'bg-gray-100'}`}>
                      {ROLE_LABELS[user.role] || user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`text-xs ${user.status === 'active' ? 'text-green-700 border-green-200' : 'text-red-700 border-red-200'}`}>
                      {user.status || 'active'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-[#4A5568]">
                    {user.lastLoginAt ? formatDate(user.lastLoginAt) : 'Never'}
                  </TableCell>
                  <TableCell className="text-right">
                    {user.id !== admin.id && canAccess(admin.role, 'users', 'update') && (
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => handleUpdateRole(user.id, user.role === 'admin' ? 'editor' : user.role === 'editor' ? 'viewer' : 'admin')} title="Change role">
                          <UserCog className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleToggleStatus(user.id, user.status || 'active')} title={user.status === 'active' ? 'Suspend' : 'Activate'}>
                          {user.status === 'active' ? <XCircle className="w-4 h-4 text-red-500" /> : <CheckCircle2 className="w-4 h-4 text-green-500" />}
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleResetPassword(user.id)} title="Reset password">
                          <Lock className="w-4 h-4" />
                        </Button>
                        {canAccess(admin.role, 'users', 'delete') && (
                          <Button variant="ghost" size="sm" onClick={() => setDeleteConfirm(user.id)} title="Delete user">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        )}
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>Create a new admin user with role-based access</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Juan Dela Cruz" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="user@fundraise.ph" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Min 8 characters" />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={form.role} onValueChange={(v) => setForm({ ...form, role: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrator — Full access</SelectItem>
                  <SelectItem value="editor">Editor — Content management</SelectItem>
                  <SelectItem value="viewer">Viewer — Read only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleCreate} disabled={saving || !form.name || !form.email || !form.password} className="bg-navy hover:bg-navy/90">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Create User'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete User</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone. This will permanently delete this admin user.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteConfirm && handleDelete(deleteConfirm)} className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

// ─── Main Admin Dashboard ────────────────────────────────────────────────────

export function AdminDashboardPage() {
  const [admin, setAdmin] = useState<AdminUser | null>(null)
  const [currentView, setCurrentView] = useState<AdminView>('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [partners, setPartners] = useState<PartnerApp[]>([])
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [dataLoading, setDataLoading] = useState(true)
  const [sessionChecked, setSessionChecked] = useState(false)

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('/api/admin/session')
        if (res.ok) {
          const data = await res.json()
          setAdmin(data.admin)
        }
      } catch {
        // no session
      } finally {
        setSessionChecked(true)
      }
    }
    checkSession()
  }, [])

  useEffect(() => {
    if (!admin) return
    const fetchData = async () => {
      setDataLoading(true)
      try {
        const [partnersRes, postsRes] = await Promise.all([
          fetch('/api/partners'),
          fetch('/api/blog-posts'),
        ])
        const partnersData = await partnersRes.json()
        const postsData = await postsRes.json()
        setPartners(partnersData.applications || [])
        setPosts(postsData.posts || [])
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err)
      } finally {
        setDataLoading(false)
      }
    }
    fetchData()
  }, [admin])

  const handleLogin = (adminUser: AdminUser) => {
    setAdmin(adminUser)
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/session', { method: 'DELETE' })
    } catch {}
    setAdmin(null)
    setCurrentView('dashboard')
  }

  const allSidebarItems: { id: AdminView; label: string; icon: React.ReactNode; requiresPermission?: [string, string] }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'partners', label: 'Partners', icon: <Users className="w-5 h-5" />, requiresPermission: ['partner', 'read'] },
    { id: 'blog', label: 'Blog Posts', icon: <FileText className="w-5 h-5" />, requiresPermission: ['blog', 'read'] },
    { id: 'users', label: 'Users', icon: <UserCog className="w-5 h-5" />, requiresPermission: ['users', 'read'] },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" />, requiresPermission: ['settings', 'read'] },
  ]

  const sidebarItems = allSidebarItems.filter(
    (item) => !item.requiresPermission || canAccess(admin?.role || 'viewer', item.requiresPermission[0], item.requiresPermission[1])
  )

  if (!sessionChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light-gray">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </div>
    )
  }

  if (!admin) {
    return <LoginScreen onLogin={handleLogin} />
  }

  // ─── Authenticated: Show dashboard ───────────────────────────────────────
  return (
    <div className="min-h-screen flex bg-light-gray">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-navy text-white
          transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center">
              <Shield className="w-5 h-5 text-navy" />
            </div>
            <div>
              <p className="font-bold text-sm">Fundraise.ph</p>
              <p className="text-xs text-white/60">Admin Panel</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10 h-8 w-8"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Nav items */}
        <ScrollArea className="flex-1 py-4">
          <nav className="space-y-1 px-3">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id)
                  setSidebarOpen(false)
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                  transition-colors duration-150
                  ${
                    currentView === item.id
                      ? 'bg-gold/20 text-gold'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                {item.icon}
                {item.label}
                {currentView === item.id && (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </button>
            ))}
          </nav>
        </ScrollArea>

        {/* User info & logout */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
              {admin.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{admin.name}</p>
              <p className="text-xs text-white/50 truncate">{admin.email}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start text-white/60 hover:text-white hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-lg font-semibold text-navy">
                {sidebarItems.find((i) => i.id === currentView)?.label || 'Dashboard'}
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Welcome back, {admin.name}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs capitalize">
              {admin.role}
            </Badge>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6">
          {currentView === 'dashboard' && (
            <DashboardOverview partners={partners} posts={posts} loading={dataLoading} />
          )}
          {currentView === 'partners' && (
            <PartnerManagement admin={admin} />
          )}
          {currentView === 'blog' && (
            <BlogManagement />
          )}
          {currentView === 'settings' && (
            <SiteSettingsManagement />
          )}
          {currentView === 'users' && (
            <UserManagement admin={admin} />
          )}
        </main>
      </div>
    </div>
  )
}
