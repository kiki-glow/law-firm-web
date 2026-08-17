import { SERVICES } from "@/lib/data";

export default function PracticeAreasPage() {
  return (
    <main className="bg-brand-navy py-16 text-brand-cream md:py-20">
      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Practice Areas</p>
          <h1 className="mt-4 text-4xl font-serif md:text-5xl">Our Practice Areas</h1>
          <p className="mt-4 text-base leading-relaxed text-brand-cream/70 md:text-lg">
            Whether you are navigating a business dispute, family matter, or criminal case, our team brings strategic
            advocacy and practical legal guidance to every challenge.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              id={service.title.toLowerCase().replace(/ /g, "-")}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_24px_60px_rgba(11,26,46,0.16)] scroll-mt-24"
            >
              <service.icon className="mb-5 h-10 w-10 text-brand-gold" aria-hidden="true" />
              <h2 className="mb-3 text-2xl font-bold">{service.title}</h2>
              <p className="text-base leading-relaxed text-brand-cream/70">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

