import Image from "next/image"
import FAQAccordion from "./FAQAccordion"

export default function FAQ() {
  return (
    <section className="section-shell py-16 bg-white md:py-20" aria-labelledby="faq-heading">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-[320px] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_rgba(11,26,46,0.12)] md:h-[440px]">
                <Image 
                    src="https://unsplash.com/photos/a-wooden-table-topped-with-an-hourglass-and-a-scale-XZ" 
                    alt="Scales of justice on a wooden desk" 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                />
            </div>
            
            <div className="space-y-6">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">FAQs</p>
                <h2 className="text-4xl md:text-5xl" id="faq-heading">
                    Frequently Asked Legal Questions
                </h2>
                <FAQAccordion />
            </div>
        </div>
    </section>
  )
}
