import { WHY_US } from "@/lib/data";

export default function WhyUs() {
  return (
    <section className="py-24 bg-brand-cream" aria-labelledby="why-heading">
        <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl" id="why-heading">Why Choose Kinya & Co.?</h2>
                <p className="mt-4 text-brand-navy/70">We combine years of courtroom experience with a client-first approach.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {WHY_US.map((item, i) => (
                    <div key={i} className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition">
                        <div className="w-16 h-16 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-4">
                            <item.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                        <p className="text-brand-navy/60 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
