'use client'

interface GlossaryTermProps {
  term: string
  definition: string
  relatedTerms?: string[]
}

export function GlossaryTerm({ term, definition, relatedTerms }: GlossaryTermProps) {
  return (
    <div className="bg-white border border-navy/10 rounded-xl p-5 md:p-6 hover:shadow-md hover:border-gold/30 transition-all duration-200">
      <h3 className="text-lg font-bold text-navy mb-2">{term}</h3>
      <p className="text-[#4A5568] leading-relaxed mb-3">{definition}</p>
      {relatedTerms && relatedTerms.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {relatedTerms.map((rt, i) => (
            <span
              key={i}
              className="inline-flex items-center text-xs font-medium text-trust-blue bg-trust-blue/10 rounded-full px-3 py-1"
            >
              {rt}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
