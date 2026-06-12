import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface InternalLinkItem {
  label: string
  href: string
  description?: string
  category?: string
}

interface InternalLinksProps {
  title?: string
  links: InternalLinkItem[]
}

export function InternalLinks({ title = 'Explore More', links }: InternalLinksProps) {
  if (!links || links.length === 0) return null

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-navy mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group flex flex-col gap-1.5 rounded-2xl border border-slate-100 bg-white p-5 hover:shadow-lg hover:border-[#C8A951]/20 transition-all duration-200"
          >
            <span className="font-bold text-sm text-slate-900 group-hover:text-[#2B4C7E] transition-colors">
              {link.label}
            </span>
            {link.description && (
              <span className="text-xs text-[#4A5568] leading-relaxed">
                {link.description}
              </span>
            )}
            <span className="flex items-center gap-1 text-xs text-[#C8A951] font-medium mt-1">
              <ArrowRight className="h-3 w-3" />
              Learn more
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
