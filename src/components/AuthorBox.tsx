import { ShieldCheck, CalendarDays, BookOpen, ExternalLink } from 'lucide-react'

interface AuthorBoxProps {
  writtenBy?: string
  reviewedBy?: string
  lastUpdated: string
  sources?: string[]
}

export function AuthorBox({
  writtenBy = 'Written by Fundraising.ph Editorial Team',
  reviewedBy,
  lastUpdated,
  sources,
}: AuthorBoxProps) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2.5 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-slate-500 shrink-0" />
          <span className="font-medium text-slate-800">{writtenBy}</span>
        </div>
        {reviewedBy && (
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-slate-500 shrink-0" />
            <span className="font-medium text-slate-800">
              Reviewed by {reviewedBy}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-slate-400 shrink-0" />
          <span>Last updated: {lastUpdated}</span>
        </div>
      </div>
      {sources && sources.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5 mb-2">
            <BookOpen className="h-4 w-4 text-slate-500" />
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
              Sources
            </span>
          </div>
          <ul className="space-y-1">
            {sources.map((source, idx) => (
              <li
                key={idx}
                className="flex items-start gap-1.5 text-xs text-slate-500"
              >
                <ExternalLink className="h-3 w-3 shrink-0 mt-0.5 text-slate-400" />
                <span>{source}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
