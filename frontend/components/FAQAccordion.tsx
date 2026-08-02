// the only client component
"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    
  return (
    <div className="space-y-4 mt-4">
        {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-brand-navy/10 pb-4 last:border-0">
                <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex justify-between items-center w-full text-left font-medium text-lg py-2 hover:text-brand-gold transition"
                >
                    {faq.q}
                    {openIndex === i ? <ChevronUp className="w-5 h-5 text-brand-gold" /> : <ChevronDown className="w-5 h-5 text-brand-navy/40" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <p className="text-brand-navy/70 text-sm">{faq.a}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
