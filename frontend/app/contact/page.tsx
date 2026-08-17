export default function ContactPage() {
  return (
    <main className="bg-brand-cream py-16 md:py-20">
      <section className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="space-y-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Consultation</p>
          <h1 className="text-4xl font-serif text-brand-navy md:text-5xl">Book a Consultation</h1>
          <p className="max-w-xl text-lg leading-relaxed text-brand-navy/70">
            Schedule a 30-minute introductory call with one of our senior attorneys. No obligation, entirely
            confidential.
          </p>

          <div className="space-y-4 rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
            <p>
              <span className="font-bold text-brand-navy">Phone:</span> +254 (0) 701 234567
            </p>
            <p>
              <span className="font-bold text-brand-navy">Email:</span> contact@kinyaandco.com
            </p>
            <p>
              <span className="font-bold text-brand-navy">Location:</span> 254 Legal Ave, Jevanjee, Nairobi
            </p>
          </div>
        </div>

        <form className="space-y-6 rounded-[2rem] border border-brand-navy/10 bg-white p-6 shadow-[0_24px_60px_rgba(11,26,46,0.08)] sm:p-8">
          <div>
            <label htmlFor="full-name" className="mb-2 block text-sm font-medium text-brand-navy">
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              className="w-full rounded-xl border border-brand-navy/10 bg-brand-cream px-4 py-3 text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand-navy">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-xl border border-brand-navy/10 bg-brand-cream px-4 py-3 text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand-navy">
              Tell us about your case
            </label>
            <textarea
              id="message"
              rows={6}
              className="h-32 w-full resize-none rounded-xl border border-brand-navy/10 bg-brand-cream px-4 py-3 text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
              placeholder="Briefly describe your legal situation..."
            />
          </div>

          <button type="submit" className="w-full rounded-full bg-brand-gold px-4 py-3.5 text-base font-bold text-brand-navy hover:bg-brand-bronze hover:text-brand-cream">
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}

