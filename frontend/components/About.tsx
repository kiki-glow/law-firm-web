import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-12 bg-brand-cream" aria-labelledby="about-heading">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" alt="Kinya & Co. law office interior with book-filled wooden shelves" fill className="object-cover" />
            </div>
            <div className="space-y-6">
                <p className="text-brand-gold font-bold tracking-widest uppercase text-sm">Our Legacy</p>
                <h2 className="text-4xl md:text-5xl leading-tight" id="about-heading">A Tradition of <br />Legal Excellence</h2>
                <p className="text-brand-navy/70 leading-relaxed">Since our founding in 2021, Kinya & Co. has built a reputation as one of the most trusted law firms in Nairobi.</p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-navy/10">
                    <div><h3 className="font-serif text-2xl font-bold text-brand-gold">5+</h3><p className="text-sm text-brand-navy/60">Years Excellence</p></div>
                    <div><h3 className="font-serif text-2xl font-bold text-brand-gold">30+</h3><p className="text-sm brand-navy/60">Cases Won</p></div>
                    <div><h3 className="font-serif text-2xl font-bold text-brand-gold">98%</h3><p className="text-sm text-brand-navy/60">Client Satisfaction</p></div>
                </div>
            </div>
        </div>
    </section>
  )
}
