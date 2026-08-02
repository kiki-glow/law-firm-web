import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { STATS } from '@/lib/data'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-gold blur-[150px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-bronze blur-[120px] -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="space-y-8">
                <h1 className="text-5xl md:text-7xl leading-[1.1] text-brand-cream">
                    Navigate legal hurdles with <span className="text-brand-gold">ease and certainty.</span>
                </h1>
                <p className="text-brand-cream/70 text-lg max-w-md leading-relaxed">
                    Professional support to help you overcome legal issues and achieve the outcome you deserve.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href={"/contact"} 
                        className="flex items-center gap-2 bg-brand-gold text-brand-navy font-medium px-8 py-3.5 rounded-full hover:bg-brand-bronze hover:text-brand-cream transition shadow-lg shadow-brand-gold/25"
                    >
                        Free Consultation <ArrowRight w-4 h-4 />
                    </Link>
                    <Link 
                        href={"/attorneys"}
                        className="px-8 py-3 rounded-full border border-brand-cream/20 text-brand-cream font-medium hover:bg-white/10 transition"
                    >
                        Meet Attorneys
                    </Link>
                </div>
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                    <div key={i} className={`p-6 rounded-xl backdrop-blur-sm border ${stat.highlight ? 'bg-brand-gold/10 border-brand-gold/40' : 'bg-white/5 border-white/10'}`}>
                        <p className={`font-serif text-4xl font-bold ${stat.highlight ? 'text-brand-gold' : 'text-brand-cream'}`}>{stat.value}</p>
                        <p className={`text-sm mt-1 ${stat.highlight ? 'text-brand-gold/80' : 'text-brand-cream/70'}`}>{stat.label}</p>
                    </div>
                ))}
            </div> */}
        </div>
    </section>
  )
}