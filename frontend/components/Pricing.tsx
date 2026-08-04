import { CheckCircle } from "lucide-react";
import { PRICING_PLANS } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 bg-brand-navy text-brand-cream" aria-labelledby="pricing-heading">
        <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl" id="pricing-heading">Transparent Pricing</h2>
                <p className="mt-4 text-brand-cream/70">Choose a plan that fits your needs. No hidden fees.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
                {PRICING_PLANS.map((plan, i) => (
                    <div key={i} className={`relative rounded-2xl p-8 flex flex-col h-full ${plan.popular ? 'bg-brand-gold text-brand-navy border-2 border-brand-gold scale-105 shadow-2xl' : 'bg-white/10 border border-white/20'}`}>
                        {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-cream text-brand-navy px-4 py-1 rounded-full text-xs font-bold uppercase">Most Popular</span>}
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <div className="flex items-end mb-6">
                            <span className="text-4xl font-serif font-bold">Ksh {plan.price}</span>
                            <span className={`text-sm ml-1 ${plan.popular ? 'text-brand-navy/70' : 'text-brand-cream/60'}`}>/month</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            {plan.features.map((feat, f) => (
                                <li key={f} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-brand-navy' : 'text-brand-gold'}`} />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full py-3 rounded-full font-medium transition ${plan.popular ? 'bg-brand-navy text-brand-cream hover:bg-brand-navy/90' : 'bg-brand-gold text-brand-navy hover:bg-brand-bronze'}`}>
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
