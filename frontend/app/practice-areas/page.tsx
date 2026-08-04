import { SERVICES } from "@/lib/data"

export default function PracticeAreasPage() {
  return (
    <section className="py-12 bg-brand-navy text-brand-cream">
        <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-5xl font-serif mb-12">Our Practice Areas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SERVICES.map((service, i) => (
                    <div key={i} id={service.title.toLowerCase().replace(/ /g, '-')} className="p-8 bg-white/5 rounded-xl border border-white/10 scroll-mt-24">
                        <service.icon className="w-10 h-10 text-brand-gold mb-4" />
                        <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                        <p className="text-brand-cream/70 leading-relaxed mb-4">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
