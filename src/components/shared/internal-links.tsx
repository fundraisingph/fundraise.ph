'use client'

import { ArrowRight } from 'lucide-react'
import { useNavigation } from '@/lib/navigation'
import { ReactNode } from 'react'

interface SimpleLinkItem {
  label: string
  page?: string
  href?: string
  description?: string
  category?: string
}

interface StructuredLink {
  label: string
  href: string
  page?: string
  description?: string
}

interface InternalLinksProps {
  title?: string
  links?: SimpleLinkItem[]
  pillar?: StructuredLink
  compliance?: StructuredLink
  category?: StructuredLink
  extra?: StructuredLink[]
}

export function InternalLinks({ title = 'Related Pages', links, pillar, compliance, category, extra }: InternalLinksProps) {
  const { navigate } = useNavigation()

  const structuredLinks: StructuredLink[] = []
  if (pillar) structuredLinks.push(pillar)
  if (compliance) structuredLinks.push(compliance)
  if (category) structuredLinks.push(category)
  if (extra) structuredLinks.push(...extra)

  const allLinks = links || structuredLinks

  if (!allLinks || allLinks.length === 0) return null

  return (
    <div className="bg-light-gray rounded-2xl p-6 md:p-8 border border-navy/10">
      <h3 className="text-lg font-bold text-navy mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {allLinks.map((link, index) => {
          const handleClick = () => {
            if (link.page) {
              navigate(link.page as Parameters<typeof navigate>[0])
            } else if (link.href) {
              window.open(link.href, '_blank', 'noopener,noreferrer')
            }
          }

          return (
            <button
              key={index}
              onClick={handleClick}
              className="flex items-start gap-2 text-trust-blue hover:text-navy font-medium text-sm transition-colors text-left group"
            >
              <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
              <div>
                <span>{link.label}</span>
                {link.description && (
                  <p className="text-[#4A5568] text-xs font-normal leading-relaxed mt-0.5">{link.description}</p>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
