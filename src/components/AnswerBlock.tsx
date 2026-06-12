interface AnswerBlockProps {
  question: string
  answer: string
}

export function AnswerBlock({ question, answer }: AnswerBlockProps) {
  return (
    <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-2xl font-black text-slate-900 mb-4">
          {question}
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}
