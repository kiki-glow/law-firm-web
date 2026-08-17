import Link from "next/link";
import { Scale } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy py-16 text-brand-cream" id="contact">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold font-serif text-brand-gold">
            <Scale className="h-6 w-6" aria-hidden="true" />
            Kinya & Co.
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-brand-cream/60">
            Providing trusted legal representation with integrity and excellence since 2021.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-base font-bold">Quick Links</h4>
          <ul className="space-y-3 text-sm text-brand-cream/60">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-brand-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-bold">Contact Info</h4>
          <ul className="space-y-3 text-sm leading-relaxed text-brand-cream/60">
            <li>254 Legal Ave, Jevanjee<br />Nairobi, NBO 00200</li>
            <li>+254 (0) 701 234567</li>
            <li>contact@kinyaandco.com</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-bold">Follow Us</h4>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-brand-cream hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold"
              >
                {social.label.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mt-12 border-t border-white/10 pt-6 text-center text-sm text-brand-cream/50">
        &copy; {new Date().getFullYear()} Kinya & Co. All rights reserved.
      </div>
    </footer>
  );
}

