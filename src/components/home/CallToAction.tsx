"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-[60px] pb-[100px]">
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="relative bg-bgs-red comic-border comic-shadow overflow-hidden transform rotate-1">
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 bg-halftone opacity-30 mix-blend-overlay"></div>
          
          {/* Visual Asset Left Side - Music and Vibe */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 bottom-0 z-10 pointer-events-none hidden lg:block"
          >
            <Image src="/aset visual/Live Music - Orang.webp" alt="Live Music" width={300} height={300} className="w-56 xl:w-72 h-auto object-contain drop-shadow-2xl opacity-90 transform -scale-x-100 translate-x-4" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-[15%] bottom-0 z-10 pointer-events-none hidden xl:block"
          >
            <Image src="/aset visual/Untitled design (8).webp" alt="Visitor" width={200} height={200} className="w-40 xl:w-48 h-auto object-contain drop-shadow-2xl" />
          </motion.div>

          {/* Visual Asset Right Side - Visitors and Fun */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute right-0 md:right-[5%] bottom-0 z-10 pointer-events-none hidden lg:block"
          >
            <Image src="/aset visual/Selfie Full Body.webp" alt="Selfie Group" width={350} height={350} className="w-56 xl:w-72 h-auto object-contain drop-shadow-2xl" />
          </motion.div>

          {/* Main Content (Center) */}
          <div className="relative z-20 py-24 px-8 text-center max-w-3xl mx-auto flex flex-col items-center justify-center transform -rotate-1">
            <span className="bg-bgs-yellow text-black comic-border comic-shadow-sm px-6 py-2 rounded-xl text-lg font-black tracking-wider mb-6 transform -rotate-2 uppercase">
              JOIN THE FESTIVAL
            </span>
            <h2 className="font-headline-md text-4xl md:text-5xl xl:text-6xl font-black text-white mb-6 leading-tight uppercase italic text-outline-black-sm">
              Mari Rayakan Puncak Bandung Great Sale 2026!
            </h2>
            <div className="bg-white comic-border p-4 rounded-xl transform rotate-1 mb-10 comic-shadow-sm">
              <p className="text-black font-bold text-lg md:text-xl leading-relaxed">
                Belanja, bermusik, dan berkumpul bersama. Ribuan tenant, puluhan komunitas, dan ragam hiburan spektakuler menanti Anda.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center relative z-30">
              <Link href="/register" className="bg-bgs-yellow text-black px-10 py-4 rounded-xl font-black comic-border comic-shadow hover:bg-white hover:-translate-y-1 transition-all text-center uppercase">
                DAFTAR SEKARANG
              </Link>
              <a href="#tenant" className="bg-bgs-blue text-white px-10 py-4 rounded-xl font-black comic-border comic-shadow hover:bg-white hover:text-black hover:-translate-y-1 transition-all text-center uppercase">
                LIHAT TENANT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
