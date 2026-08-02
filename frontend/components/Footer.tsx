import Link from "next/link"
import { Scale } from "lucide-react"

export default function Footer() {
    const links = ["About", "Practice Areas", "Pricing", "Contact"];
    const socials = ["FB", "TW", "LI"];

  return (
    <footer className="bg-brand-navy text-brand-cream border-t border-white/10 py-16" id="contact">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
                <Link href={"/"} className="flex  items-center gap-2 text-brand-gold font-serif text-2xl font-bold"><Scale className="w-6 h-6" /> Kinya & Co.</Link>
                <p className="text-brand-cream/60 text-sm max-w-xs">Providing trusted legal representation with integrity and excellence since 2021.</p>
            </div>
            <div><h4 className="font-bold mb-4">Quick Links</h4><ul className="space-y-2 text-brand-cream/60 text-sm">{links.map(item => <li key={item}><Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-gold transition">{item}</Link></li>)}</ul></div>
            <div><h4 className="font-bold mb-4">Contact Info</h4><ul className="space-y-2 text-brand-cream/60 text-sm"><li>254 Legal Ave, Jevanjee<br/>Nairobi, NBO 00200</li><li>+254 (0) 701234567</li><li>contact@kinyaandco.com</li></ul></div>
            <div><h4 className="font-bold mb-4">Follow Us</h4><div className="flex gap-4">{socials.map(social => <div key={social} className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold/20 flex items-center justify-center transition cursor-pointer">{social}</div>)}</div></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/10 text-brand-cream/50 text-sm text-center">&copy; {new Date().getFullYear()} Kinya & Co. All rights reserved.</div>
    </footer>
  )
}
