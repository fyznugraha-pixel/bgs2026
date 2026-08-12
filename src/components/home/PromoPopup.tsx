"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 px-margin-mobile">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
            className="relative bg-bgs-blue p-6 md:p-8 rounded-2xl comic-border border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-lg w-full z-10 text-center flex flex-col items-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 bg-bgs-red text-white w-10 h-10 rounded-full comic-border border-4 border-black flex items-center justify-center font-black text-xl hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <span className="material-symbols-outlined font-black">close</span>
            </button>

            {/* Decorative Element */}
            <div className="bg-bgs-yellow p-3 rounded-full comic-border border-4 border-black mb-4 transform -rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="material-symbols-outlined text-4xl text-black" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_activity
              </span>
            </div>

            <h3 className="font-black text-3xl md:text-4xl text-white uppercase tracking-tighter mb-2 italic">
              Jangan Sampai<br/><span className="text-bgs-yellow">Kehabisan!</span>
            </h3>
            
            <p className="text-white font-bold mb-6 text-sm md:text-base opacity-90">
              Jadilah bagian dari festival belanja dan hiburan terbesar di Bandung. Daftar sekarang dan dapatkan akses prioritas!
            </p>

            <Link 
              href="/register"
              onClick={() => setIsOpen(false)}
              className="w-full sm:w-auto bg-bgs-yellow text-black px-8 py-4 rounded-xl font-black uppercase tracking-wider comic-border border-4 border-black hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>app_registration</span>
              Registrasi Sekarang
            </Link>
            
            <p className="text-white/60 text-xs font-bold mt-4 uppercase tracking-widest">
              GRATIS & CEPAT
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
