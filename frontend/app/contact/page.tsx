import Contact from "@/components/Contact"

export default function ContactPage() {
  return (
    <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <h1 className="text-5xl font-serif text-brand-navy mb-6">Book a Consultation</h1>
                <p className="text-brand-navy/70 text-lg mb-8">Schedule a 30-minute introductory call with one of our senior attorneys. No obligation, entirely confidential.</p>
                <div className="space-y-4 text-brand-navy/80">
                    <p><span className="font-bold">Phone:</span> +254 (0) 701234567</p>
                    <p><span className="font-bold">Email:</span> contact@kinyaandco.com</p>
                    <p><span className="font-bold">Location:</span> 254 Legal Ave, Jevanjee, Nairobi</p>
                </div>
            </div>

            <form className="bg-white p-8 rounded-xl shadow-lg border border-brand-navy/5 space-y-6">
                <div><label className="block text-sm font-medium text-brand-navy mb-1">Full Name</label><input type="text" className="w-full px-4 py-3 rounded-lg border border-brand-navy/10 focus:outline-none focus:ring-2 focus:ring-brand-gold" placeholder="John Doe" /></div>
                <div><label className="block text-sm font-medium text-brand-navy mb-1">Email</label><input type="email" className="w-full px-4 py-3 rounded-lg border border-brand-navy/10 focus:outline-none focus:ring-2 focus:ring-brand-gold" placeholder="john@example.com" /></div>
                <div><label className="block text-sm font-medium text-brand-navy mb-1">Case Type</label><select className="w-full px-4 py-3 rounded-lg border border-brand-navy/10 focus:outline-none focus:ring-2 focus:ring-brand-gold"><option>Criminal Defense</option><option>Corporate Law</option><option>Family Law</option></select></div>
                <button className="w-full bg-brand-gold text-brand-navy py-3 rounded-full font-bold hover:bg-brand-bronze transition">Submit Request</button>
            </form>
        </div>
    </section>
  )
}
