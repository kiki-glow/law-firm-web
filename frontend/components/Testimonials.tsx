import { Star } from "lucide-react"
import { TESTIMONIALS } from "@/lib/data"

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-cream" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl" id="testimonials-heading">Trusted by Those We Serve</h2>
                <div className="flex justify-center mt-4 text-brand-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((test, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-navy/5 relative">
                        <div className="absolute top-6 right-6 text-brand-gold/20 text-6xl font-serif">"</div>
                        <p className="relative z-10 text-brand-navy/80 italic leading-relaxed mb-6">"{test.quote}"</p>
                        <div className="border-t border-brand-navy/10 pt-4">
                            <p className="font-bold text-brand-navy">{test.name}</p>
                            <p className="text-sm text-brand-navy/60">{test.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
