import { ReactNode } from 'react'

interface AnswerBlockProps {
  question?: string
  answer?: string
  children?: ReactNode
}

export function AnswerBlock({ question, answer, children }: AnswerBlockProps) {
  const content = answer || children
  return (
    <div className="bg-light-gray rounded-2xl p-6 md:p-8 border border-navy/10">
      {question && (
        <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">{question}</p>
      )}
      {typeof content === 'string' ? (
        <p className="text-navy text-lg md:text-xl font-semibold leading-relaxed">{content}</p>
      ) : (
        <div className="text-navy leading-relaxed space-y-3">{content}</div>
      )}
    </div>
  )
}
