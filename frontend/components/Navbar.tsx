"use client";

import Link from "next/link";
import { Scale, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Attorneys", href: "/attorneys" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        
        return () => {
            document.body.style.overflow = "unset"
        };
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur-md border-b border-white/10">
              <nav className="container py-4 flex items-center justify-between" aria-label="Main navigation">
                {/* logo */}
                <Link 
                    href={"/"} 
                    className="flex items-center gap-2 text-brand-gold font-serif text-xl font-bold transition hover:opacity-90"
                    aria-label="Kinya & Co. home"
                >
                    <Scale className="w-6 h-6" aria-hidden="true" /> Kinya & Co.
                </Link>

                {/* desktop menu */}
                <div className="hidden md:flex items-center gap-7 text-sm font-medium text-brand-cream/80">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-brand-gold transition">
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={"/contact"}
                        className="inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-2.5 font-semibold text-brand-navy shadow-lg shadow-brand-gold/20 hover:bg-brand-bronze hover:text-brand-cream"
                    >
                        Book Consultation
                    </Link>
                </div>
               
               {/* mobile menu hamburger */}
               <button 
                    type="button"
                    onClick={() => setIsOpen((current) => !current)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-brand-cream transition hover:border-brand-gold hover:text-brand-gold md:hidden"
                    aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                >
                    {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
                </button>
            </nav>

            <div 
                id="mobile-navigation"
                className={`fixed inset-x-0 top-[72px] z-40 bg-brand-navy/95 pb-8 pt-6 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden 
                ${isOpen ? "opacity-100 translate-y-0" : "pointer-events-none -translate-y-3 opacity-0"}`}
            >
                <div className="flex flex-col items-center gap-6 text-lg font-medium text-brand-cream">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-serif text-brand-cream hover:text-brand-gold transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={"/contact"}
                        onClick={() => setIsOpen(false)}
                        className="mt-2 bg-brand-gold text-brand-navy px-8 py-3 rounded-full font-bold text-base hover:bg-brand-bronze"
                    >
                        Book Consultation
                    </Link>
                </div>
            </div>
        </header>
    )
}