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
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset"
        };
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur-md border-b border-white/10">
              <nav className="container mx-auto px-6 py-4 flex items-center justify-between" aria-label="Main navigation">

                {/* logo */}
                <Link href={"/"} className="flex items-center gap-2 text-brand-gold font-serif text-2xl font-bold">
                    <Scale className="w-6 h-6" aria-hidden="true" /> Kinya & Co.
                </Link>

                {/* desktop menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-cream/80">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-brand-gold transition">
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={"/contact"}
                        className="hidden md:inline-block bg-brand-gold text-brand-navy px-5 py-2 rounded-full font-medium hover:bg-brand-bronze transition-colors"
                    >
                        Book Consultation
                    </Link>
                </div>
               
               {/* mobile menu hamburger */}
               <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-brand-cream hover:text-brand-gold transition-colors z-50"
                    aria-label="Toggle mobile menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            <div 
                className={`fixed inset-x-0 bg-brand-navy/95 backdrop-blur-lg flex flex-col items-center justify-start gap-6 transition-all duration-300 ease-in-out md:hidden 
                ${isOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"} 
                md-hidden  pt-16 px-6 space-y-4`}
            >
                <div className="flex flex-col items-center gap-8 text-xl font-medium text-brand-cream">
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
                        className="mt-4 bg-brand-gold text-brand-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-bronze transition-colors mb-4"
                    >
                        Book Consultation
                    </Link>
                </div>
            </div>
        </header>
    )
}