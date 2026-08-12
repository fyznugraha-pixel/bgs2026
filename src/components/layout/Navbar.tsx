"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header 
      className="bg-bgs-blue comic-border border-b-8 border-black text-white font-body-md fixed top-0 w-full z-50 transition-all duration-300"
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 w-full max-w-[1536px] mx-auto">
        <div className="flex items-center gap-4">
          <Image 
            src="/aset logo/LOGO ASET BGS 2026/LOGO ASET BGS 2026/LOGO BGS 2026.png" 
            alt="Bandung Great Sale 2026" 
            width={180} 
            height={72} 
            className="h-16 w-auto object-contain drop-shadow-[0_2px_0_rgba(0,0,0,1)]" 
            priority
          />
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          <a className="text-white hover:text-bgs-yellow transition-colors font-bold uppercase tracking-wider text-sm" href="#tentang">Tentang</a>
          <a className="text-white hover:text-bgs-yellow transition-colors font-bold uppercase tracking-wider text-sm" href="#lineup">Lineup Artis</a>
          <a className="text-white hover:text-bgs-yellow transition-colors font-bold uppercase tracking-wider text-sm" href="#komunitas">Komunitas</a>
          <a className="text-white hover:text-bgs-yellow transition-colors font-bold uppercase tracking-wider text-sm" href="#tenant">Tenant</a>
          <a className="text-white hover:text-bgs-yellow transition-colors font-bold uppercase tracking-wider text-sm" href="#venue">Venue Layout</a>
        </nav>
        <Link href="/register" className="hidden md:flex items-center justify-center bg-bgs-yellow text-black comic-border px-6 py-2 rounded-xl font-bold hover:bg-white transition-colors comic-shadow-sm uppercase">
          Register
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white">
          <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-bgs-blue border-t-4 border-black overflow-hidden"
          >
            <div className="flex flex-col px-margin-mobile py-6 space-y-6">
              <a onClick={() => setIsOpen(false)} className="text-white hover:text-bgs-yellow transition-colors font-bold uppercase tracking-wider text-sm" href="#tentang">Tentang</a>
              <a onClick={() => setIsOpen(false)} className="text-white hover:text-bgs-yellow transition-colors font-bold uppercase tracking-wider text-sm" href="#lineup">Lineup Artis</a>
              <a onClick={() => setIsOpen(false)} className="text-white hover:text-bgs-yellow transition-colors font-bold uppercase tracking-wider text-sm" href="#komunitas">Komunitas</a>
              <a onClick={() => setIsOpen(false)} className="text-white hover:text-bgs-yellow transition-colors font-bold uppercase tracking-wider text-sm" href="#tenant">Tenant</a>
              <a onClick={() => setIsOpen(false)} className="text-white hover:text-bgs-yellow transition-colors font-bold uppercase tracking-wider text-sm" href="#venue">Venue Layout</a>
              <Link onClick={() => setIsOpen(false)} href="/register" className="inline-block text-center bg-bgs-yellow text-black comic-border px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors comic-shadow-sm uppercase mt-4">
                Register
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
