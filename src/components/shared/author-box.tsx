'use client'

import { User, Calendar, BookOpen, CheckCircle2 } from 'lucide-react'

interface AuthorBoxProps {
  author?: string
  role?: string
  lastUpdated: string
  writtenBy?: string
  reviewedBy?: string
  sources?: string[]
}

export function AuthorBox({ author, role, lastUpdated, writtenBy, reviewedBy, sources }: AuthorBoxProps) {
  const displayName = writtenBy || author || 'Fundraise.ph Team'
  const displayRole = role || 'Nonprofit Trust Organization'

  return (
    <div className="bg-light-gray rounded-2xl p-6 md:p-8 border border-navy/10">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-navy/10 text-navy flex items-center justify-center shrink-0">
          <User className="h-7 w-7" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-navy">{displayName}</h3>
          {role && <p className="text-[#4A5568] text-sm mb-1">{displayRole}</p>}
          {reviewedBy && (
            <p className="text-[#4A5568] text-sm mb-1">Reviewed by: {reviewedBy}</p>
          )}
          <div className="flex items-center gap-2 text-[#4A5568] text-sm">
            <Calendar className="h-4 w-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>
      {sources && sources.length > 0 && (
        <div className="mt-4 pt-4 border-t border-navy/10">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-4 w-4 text-[#4A5568]" />
            <span className="text-sm font-semibold text-navy">Sources & References</span>
          </div>
          <ul className="space-y-1.5">
            {sources.map((source, index) => (
              <li key={index} className="flex items-start gap-2 text-[#4A5568] text-xs leading-relaxed">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                {source}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
