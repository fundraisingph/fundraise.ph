'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface SEOBlockProps {
  items: { question: string; answer: string }[]
}

export function SEOBlock({ items }: SEOBlockProps) {
  return (
    <div className="bg-[#F7F8FA] rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-bold text-navy mb-6">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, idx) => (
          <AccordionItem key={idx} value={`seo-${idx}`}>
            <AccordionTrigger className="text-left text-navy font-semibold hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#4A5568] leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
