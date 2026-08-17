import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// SEO 
export const metadata: Metadata = {
  title: "Kinya & Co. Law Firm",
  description: "Top-rated law firm specializing in criminal defense, corporate law, and family litigation. Over 5 years of excellence with 98% client satisfaction.",
  metadataBase: new URL("https://law-firm-web-smoky.vercel.app"),
  keywords: "law firm, criminal defense attorney, corporate lawyer, family law, legal consultation, NBO legal services",
  authors: [{ name: "Kinya & Co. Law Firm" }],
  creator: "Kinya & Co.",
  publisher: "Kinya & Co.",
  robots: "index, follow",
  manifest: "/manifest.json",
  openGraph: {
    title: "Kinya & Co. | Trusted Legal Counsel",
    description: "Navigating legal hurdles with ease and certainty. Book a free consultation today.",
    url: "https://law-firm-web-smoky.vercel.app",
    siteName: "Kinya & Co. Law Firm",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // 1200x630px image in public
        width: 1200,
        height: 630,
        alt: "Kinya & Co. Law Firm Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinya & Co. | Top-Rated Law Firm",
    description: "Expert legal defense and corporate counsel with a 98% success rate.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://law-firm-web-smoky.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1a2e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Schema - for Google knowledge panel 
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Kinya & Co. Law Firm",
  image: "https://law-firm-web-smoky.vercel.app/og-image.jpg",
  telephone: "+254-701-234567",
  email: "contact@kinyaandco.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "254 Legal Ave, Jevanjee",
    addressLocality: "Nairobi",
    addressRegion: "NBO",
    postalCode: "00200",
    addressCountry: "KE",
  },
  openingHours: "Mo-Fr 08:00-17:00",
  priceRange: "KSH",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "124",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased bg-brand-cream text-brand-navy`}
    >
      <body className="min-h-full flex flex-col">
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
