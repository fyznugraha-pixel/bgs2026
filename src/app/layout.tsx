import type { Metadata } from "next";
import { Hanken_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BGS 2026 - Bandung Great Sale",
  description: "Festival belanja terbesar di Kota Kembang dengan diskon spektakuler dari fashion, kuliner, hingga produk kreatif.",
  authors: [{ name: "Fayiz Apriwansyah Nugraha", url: "https://byfayiz.web.id/portofolio" }],
  creator: "Fayiz Apriwansyah Nugraha",
  keywords: ["Bandung Great Sale 2026", "BGS 2026", "Fayiz Apriwansyah Nugraha", "Web Developer", "Tactlink", "Event Bandung"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${hankenGrotesk.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BGS 2026 - Bandung Great Sale",
              "url": "https://bgs2026.vercel.app",
              "author": {
                "@type": "Person",
                "name": "Fayiz Apriwansyah Nugraha",
                "url": "https://byfayiz.web.id/portofolio",
                "jobTitle": "Web Developer",
                "sameAs": ["https://byfayiz.web.id"]
              },
              "creator": {
                "@type": "Person",
                "name": "Fayiz Apriwansyah Nugraha",
                "url": "https://byfayiz.web.id/portofolio"
              }
            })
          }}
        />
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col hide-scrollbar">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
