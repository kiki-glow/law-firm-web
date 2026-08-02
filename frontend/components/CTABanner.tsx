export default function CTABanner() {
  return (
    <section className="py-20 bg-brand-gold text-brand-navy">
        <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Simplify Your Legal Process?</h2>
            <p className="text-brand-navy/80 max-w-2xl mx-auto mb-8">Sign up for a consultation today and let our experts handle the heavy lifting.</p>
            <button className="bg-brand-navy text-brand-cream px-10 py-4 rounded-full font-bold hover:bg-brand-navy/90 transition shadow-lg shadow-brand-navy/25">
                Get Started Now
            </button>
        </div>
    </section>
  )
}
