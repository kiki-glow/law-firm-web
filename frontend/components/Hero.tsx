import Link from "next/link";
import { ArrowRight, Scale, ShieldCheck } from "lucide-react";
import { STATS } from "@/lib/data";

export default function Hero() {
  return (
    <section className="section-shell relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute right-[-5rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full bg-brand-gold blur-[140px]" />
        <div className="absolute bottom-[-6rem] left-[-4rem] h-[22rem] w-[22rem] rounded-full bg-brand-bronze blur-[120px]" />
      </div>

      <div className="container relative z-10 flex min-h-[78vh] items-center py-16 md:py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Trusted legal guidance
            </div>

            <h1 className="max-w-xl text-4xl leading-[1.05] text-brand-cream sm:text-5xl md:text-6xl xl:text-7xl">
              Navigate legal hurdles with <span className="text-brand-gold">ease and certainty.</span>
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-brand-cream/75 sm:text-lg">
              Professional support to help you overcome legal issues and achieve the outcome you deserve.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 font-semibold text-brand-navy shadow-lg shadow-brand-gold/25 hover:bg-brand-bronze hover:text-brand-cream"
              >
                Free Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/attorneys"
                className="inline-flex items-center justify-center rounded-full border border-brand-cream/20 px-7 py-3.5 font-semibold text-brand-cream hover:bg-white/10"
              >
                Meet Attorneys
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-5 shadow-soft backdrop-blur-sm ${
                  stat.highlight
                    ? "border-brand-gold/40 bg-brand-gold/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <p
                  className={`font-serif text-3xl font-bold sm:text-4xl ${
                    stat.highlight ? "text-brand-gold" : "text-brand-cream"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-brand-cream/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
