"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img alt="Bandung Great Sale Festive Atmosphere" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfne3wnji178Ya0D05qbjkujIenvtd6V1ySUAT92HQax-wgips0C1Zz78nqr9zUmvytTGJIUhRMSj80XIrQnJXce7vOi2w5ei7AbWTzV1dP-2W0lRPM_ksz8uJsr8_YOj6V0ftCBGeR-DrDk2pzgeXLUAXlaS58_ppHZmt3p2UHESD4NuwMgOZgLJQ2ytRIrieJID9uaxhfZqhli5liFBckXp7Vq33KAC44WF5XCHEL0qJ35XYp1ScLA" />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" style={{ backgroundColor: "rgba(5, 22, 48, 0.8)" }}></div>
      </div>
      
      {/* Scattered Floating Promotional Tags (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Left Side */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, type: "spring", bounce: 0.5 }} className="absolute top-[15%] left-[5%] xl:left-[8%]">
          <div className="animate-bounce" style={{ animationDuration: '3.5s' }}>
            <div className="bg-error text-on-error px-6 py-3 rounded-2xl font-extrabold text-xl shadow-xl shadow-error/30 transform -rotate-12 border-2 border-white/20 backdrop-blur-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">local_offer</span> DISKON s/d 70%
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, type: "spring", bounce: 0.5 }} className="absolute top-[35%] left-[2%] xl:left-[4%]">
          <div className="animate-bounce" style={{ animationDelay: '1s', animationDuration: '4.2s' }}>
            <div className="bg-tertiary text-on-tertiary px-5 py-2.5 rounded-full font-bold text-lg shadow-lg shadow-tertiary/30 transform rotate-12 border-2 border-white/20 backdrop-blur-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">shopping_cart_checkout</span> FLASH SALE
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4, type: "spring", bounce: 0.5 }} className="absolute top-[55%] left-[8%] xl:left-[12%]">
          <div className="animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '3.8s' }}>
            <div className="bg-surface text-primary px-5 py-2.5 rounded-full font-bold text-lg shadow-lg shadow-black/20 transform -rotate-6 border-2 border-white/40 backdrop-blur-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">redeem</span> BUY 1 GET 1
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.7, type: "spring", bounce: 0.5 }} className="absolute top-[75%] left-[3%] xl:left-[6%]">
          <div className="animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '4.5s' }}>
            <div className="bg-secondary text-on-secondary px-5 py-2.5 rounded-2xl font-bold text-lg shadow-lg shadow-secondary/30 transform rotate-12 border-2 border-white/20 backdrop-blur-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">card_giftcard</span> FREE MERCH
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0, type: "spring", bounce: 0.5 }} className="absolute top-[20%] right-[6%] xl:right-[10%]">
          <div className="animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.8s' }}>
            <div className="bg-secondary text-on-secondary px-6 py-3 rounded-2xl font-bold text-lg shadow-xl shadow-secondary/30 transform rotate-12 border-2 border-white/20 backdrop-blur-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">storefront</span> FASHION & KULINER
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3, type: "spring", bounce: 0.5 }} className="absolute top-[40%] right-[3%] xl:right-[5%]">
          <div className="animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>
            <div className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-extrabold text-lg shadow-lg shadow-primary/30 transform -rotate-12 border-2 border-white/20 backdrop-blur-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">celebration</span> PESTA RAKYAT
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6, type: "spring", bounce: 0.5 }} className="absolute top-[60%] right-[8%] xl:right-[12%]">
          <div className="animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '3.2s' }}>
            <div className="bg-error text-on-error px-5 py-2.5 rounded-full font-bold text-lg shadow-lg shadow-error/30 transform rotate-6 border-2 border-white/20 backdrop-blur-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">stars</span> DOORPRIZE MILYARAN
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.9, type: "spring", bounce: 0.5 }} className="absolute top-[80%] right-[4%] xl:right-[7%]">
          <div className="animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
            <div className="bg-tertiary-container text-on-tertiary-container px-6 py-3 rounded-2xl font-bold text-lg shadow-lg shadow-tertiary/30 transform -rotate-12 border-2 border-white/20 backdrop-blur-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">nightlife</span> LATE NIGHT SALE
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-8"
      >
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-md text-surface px-4 py-1.5 rounded-full text-sm font-medium border border-surface/20">
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            21–23 AGUSTUS 2026
          </span>
          <span className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-md text-surface px-4 py-1.5 rounded-full text-sm font-medium border border-surface/20">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            LASWI HERITAGE, BANDUNG
          </span>
          <span className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-md text-surface px-4 py-1.5 rounded-full text-sm font-medium border border-surface/20">
            <span className="material-symbols-outlined text-[16px]">local_activity</span>
            FREE ENTRY
          </span>
        </div>
        {/* Headline */}
        <h1 className="font-headline-lg text-6xl md:text-7xl lg:text-[100px] font-extrabold text-surface leading-[1.1] tracking-tight flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            BANDUNG
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.5 }}
            className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-xl shadow-orange-500/30 px-6 py-2 rounded-2xl inline-block my-2 lg:my-6"
          >
            GREAT SALE
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            2026
          </motion.span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-surface-variant max-w-2xl mx-auto leading-relaxed">
          Festival belanja terbesar di Kota Kembang dengan diskon spektakuler dari fashion, kuliner, hingga produk kreatif.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all hover:-translate-y-1">
            JELAJAHI TENANT
          </button>
          <Link href="/register" className="px-8 py-4 rounded-full border-2 border-surface text-surface font-bold text-sm hover:bg-surface hover:text-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            REGISTER NOW
          </Link>
        </div>
        
        {/* Badge/Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <div className="flex items-center gap-4 border-r-0 sm:border-r-2 border-white/20 sm:pr-6">
            <Image src="/logo/Logo Pemkot Bandung.webp" alt="Pemkot Bandung" width={50} height={50} className="h-10 w-auto object-contain drop-shadow-md" />
            <Image src="/logo/Logo Disdagin 2026 Final.webp" alt="Dinas Perdagangan Bandung" width={100} height={50} className="h-10 w-auto object-contain drop-shadow-md" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Website by</span>
            <Image src="/logo/LOGO TACTLINK.png" alt="Tactlink" width={150} height={45} className="h-12 w-auto object-contain drop-shadow-md brightness-0 invert" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
