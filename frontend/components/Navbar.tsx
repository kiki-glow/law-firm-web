import Link from "next/link";
import { Scale } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur-md border-b border-white/10">
              <nav className="container mx-auto px-6 py-4 flex items-center justify-between" aria-label="Main navigation">
                <Link href={"/"} className="flex items-center gap-2 text-brand-gold font-serif text-2xl font-bold">
                    <Scale className="w-6 h-6" aria-hidden="true" /> Kinya & Co.
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-cream/80">
                    <Link href={"/"} className="hover:text-brand-gold transition">Home</Link>
                    <Link href={"/about"} className="hover:text-brand-gold transition">About Us</Link>
                    <Link href={"/practice-areas"} className="hover:text-brand-gold transition">Practice Areas</Link>
                    <Link href={"/pricing"} className="hover:text-brand-gold transition">Pricing</Link>
                    <Link href={"/contact"} className="hover:text-brand-gold transition">Contact</Link>
                </div>
                <Link 
                    href={"/contact"}
                    className="bg-brand-gold text-brand-navy px-5 py-2 rounded-full font-medium hover:bg-brand-bronze transition"
                >
                    Book Consultation
                </Link>
            </nav>
        </header>
    )
}