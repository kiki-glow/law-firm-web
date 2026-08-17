import { TESTIMONIALS } from "@/lib/data";
import Image from "next/image";

export default function AttorneysPage() {
  return (
    <main className="bg-brand-cream py-16 md:py-20">
      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Our Team</p>
          <h1 className="mt-4 text-4xl font-serif text-brand-navy md:text-5xl">Meet Our Legal Team</h1>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/70 md:text-lg">
            Dedicated legal professionals with a combined 20+ years of courtroom experience and a reputation for
            thoughtful, strategic advocacy.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((person, i) => (
            <article key={person.name} className="rounded-[2rem] border border-brand-navy/5 bg-white p-7 text-center shadow-sm">
              <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full bg-brand-gold/20">
                <Image src={`https://i.pravatar.cc/300?img=${i + 12}`} alt={person.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-gold">{person.title}</p>
              <p className="mt-4 text-sm italic leading-relaxed text-brand-navy/60">“{person.quote}”</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

