import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="section-shell py-16 bg-brand-cream md:py-20" aria-labelledby="about-heading">
        <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-2 h-[320px] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(11,26,46,0.12)] md:h-[440px] lg:order-1">
                <Image 
                    src="https://unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" 
                    alt="Kinya & Co. law office interior with book-filled wooden shelves" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw" 
                />
            </div>

            <div className="order-1 space-y-6 lg:order-2">
                <p className="text-brand-gold font-bold tracking-[0.22em] uppercase text-sm">Our Legacy</p>
                <h2 className="max-w-lg text-4xl md:text-5xl leading-tight" id="about-heading">A Tradition of <br />Legal Excellence</h2>
                <p className="max-w-xl text-brand-navy/70 leading-relaxed md:text-lg">Since our founding in 2021, Kinya & Co. has built a reputation as one of the most trusted law firms in Nairobi.</p>

                <div className="grid gap-4 pt-6 border-t border-brand-navy/10 sm:grid-cols-3">
                    <div>
                        <h3 className="font-serif text-3xl font-bold text-brand-gold">5+</h3>
                        <p className="mt-2 text-sm text-brand-navy/60">Years Excellence</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-3xl font-bold text-brand-gold">30+</h3>
                        <p className="mt-2 text-sm text-brand-navy/60">Cases Won</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-3xl font-bold text-brand-gold">98%</h3>
                        <p className="mt-2 text-sm text-brand-navy/60">Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
