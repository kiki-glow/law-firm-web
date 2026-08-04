import { TESTIMONIALS } from "@/lib/data"
import Image from "next/image"

export default function AttorneysPage() {
  return (
    <section className="py-12 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-5xl font-serif text-brand-navy mb-4">Meet Our Legal Team</h1>
            <p className="text-brand-navy/70 max-w-2xl mb-16">Dedicated legal professionals with a combined 20+ years of courtroom experience.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {TESTIMONIALS.map((person, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center border-brand-navy/5">
                        <div className="w-32 h-32 mx-auto rounded-full bg-brand-gold/20 overflow-hidden mb-4 relative">
                            <Image src={`https://i.pravatar.cc/300?img=${i + 12}`} alt={person.name} fill className="object-cover" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy">{person.name}</h3>
                        <p className="text-brand-gold text-sm font-medium">{person.title}</p>
                        <p className="mt-4 text-brand-navy/60 text-sm italic">"{person.quote}"</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
