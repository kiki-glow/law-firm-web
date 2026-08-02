import Image from "next/image"
import FAQAccordion from "./FAQAccordion"

export default function FAQ() {
  return (
    <section className="py-24 bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80" alt="Scales of justice on a wooden desk" fill className="object-cover" />
            </div>
            <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl" id="faq-heading">Frequently Asked Legal Questions</h2>
                <FAQAccordion />
            </div>
        </div>
    </section>
  )
}
