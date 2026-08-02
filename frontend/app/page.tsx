import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <section className="py-16 bg-brand-cream text-center">
        <h2 className="text-3xl font-serif text-brand-navy">Trusted by over 290 clients.</h2>
        <p className="mt-2 text-brand-navy/70">Explore our practice areas or meet out team.</p>
      </section> */}
      <CTABanner />
      <Process />
    </main>
  );
}
