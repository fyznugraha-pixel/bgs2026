"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-surface/90 backdrop-blur-md text-primary font-body-md fixed top-0 w-full z-50 shadow-sm transition-all duration-300"
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 w-full max-w-[1536px] mx-auto">
        <div className="flex items-center gap-4">
          <Image 
            src="/logo/Logo BGS 2026.webp" 
            alt="Bandung Great Sale 2026" 
            width={180} 
            height={72} 
            className="h-16 w-auto object-contain" 
            priority
          />
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          <a className="text-primary font-semibold hover:text-secondary transition-colors" href="#tentang">Tentang</a>
          <a className="text-primary font-semibold hover:text-secondary transition-colors" href="#lineup">Lineup Artis</a>
          <a className="text-primary font-semibold hover:text-secondary transition-colors" href="#komunitas">Komunitas</a>
          <a className="text-primary font-semibold hover:text-secondary transition-colors" href="#tenant">Tenant</a>
          <a className="text-primary font-semibold hover:text-secondary transition-colors" href="#konvoi">Rute Konvoi</a>
          <a className="text-primary font-semibold hover:text-secondary transition-colors" href="#venue">Venue Layout</a>
          <a className="text-primary font-semibold hover:text-secondary transition-colors" href="#partnership">Partnership</a>
        </nav>
        <Link href="/register" className="hidden md:flex items-center gap-2 bg-secondary text-surface font-bold py-3 px-6 rounded-full hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-md shadow-secondary/20">
          Register
        </Link>
        <button className="lg:hidden p-2 text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </motion.header>
  );
}
