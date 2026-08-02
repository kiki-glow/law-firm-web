import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section className="py-24 bg-[#f3efe9]" aria-labelledby="process-heading">
        <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl" id="process-heading">Our Legal Process</h2>
                <p className="mt-4 text-brand-navy/70">We simplify the legal journey into four transparent, manageable steps.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PROCESS_STEPS.map((step, i) => (
                    <div key={i} className="relative p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="absolute top-0 right-0 text-6xl font-bold text-brand-gold/10 -mt-2 -mr-2">{step.step}</div>
                        <h3 className="text-xl font-bold text-brand-navy mt-2 mb-2">{step.title}</h3>
                        <p className="text-brand-navy/60 text-sm">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
