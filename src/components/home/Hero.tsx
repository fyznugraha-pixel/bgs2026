"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[700px] flex items-start justify-center overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 bg-halftone border-b-8 border-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
        <img alt="Bandung Great Sale Festive Atmosphere" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfne3wnji178Ya0D05qbjkujIenvtd6V1ySUAT92HQax-wgips0C1Zz78nqr9zUmvytTGJIUhRMSj80XIrQnJXce7vOi2w5ei7AbWTzV1dP-2W0lRPM_ksz8uJsr8_YOj6V0ftCBGeR-DrDk2pzgeXLUAXlaS58_ppHZmt3p2UHESD4NuwMgOZgLJQ2ytRIrieJID9uaxhfZqhli5liFBckXp7Vq33KAC44WF5XCHEL0qJ35XYp1ScLA" fetchPriority="high" />
      </div>
      
      {/* Scattered Floating Promotional Tags (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: [0, -15, 0] }} 
          transition={{ opacity: { delay: 1.0 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} 
          className="absolute top-[8%] left-[2%] xl:left-[5%] z-0"
        >
          <Image src="/aset visual/qris.webp" alt="QRIS" width={150} height={200} className="w-24 xl:w-32 h-auto object-contain drop-shadow-2xl opacity-90 transform -rotate-12" />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, type: "spring", bounce: 0.5 }} className="absolute top-[20%] left-[8%] xl:left-[12%] z-10">
          <div className="animate-bounce" style={{ animationDuration: '3.5s' }}>
            <div className="bg-bgs-red text-white px-6 py-3 rounded-2xl font-black text-xl comic-shadow-sm comic-border transform -rotate-12 flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">local_offer</span> DISKON s/d 70%
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, type: "spring", bounce: 0.5 }} className="absolute top-[40%] left-[3%] xl:left-[6%] z-10">
          <div className="animate-bounce" style={{ animationDelay: '1s', animationDuration: '4.2s' }}>
            <div className="bg-bgs-yellow text-black px-5 py-2.5 rounded-full font-black text-lg comic-shadow-sm comic-border transform rotate-12 flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">shopping_cart_checkout</span> FLASH SALE
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4, type: "spring", bounce: 0.5 }} className="absolute top-[60%] left-[10%] xl:left-[15%] z-10">
          <div className="animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '3.8s' }}>
            <div className="bg-white text-black px-5 py-2.5 rounded-full font-black text-lg comic-shadow-sm comic-border transform -rotate-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">redeem</span> BUY 1 GET 1
            </div>
          </div>
        </motion.div>
        
        {/* Right Side */}

        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0, type: "spring", bounce: 0.5 }} className="absolute top-[18%] right-[8%] xl:right-[12%] z-10">
          <div className="animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.8s' }}>
            <div className="bg-bgs-blue text-white px-6 py-3 rounded-2xl font-black text-lg comic-shadow-sm comic-border transform rotate-12 flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">storefront</span> FASHION & KULINER
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }} 
          transition={{ opacity: { delay: 1.2 }, scale: { delay: 1.2, type: "spring", bounce: 0.6 }, y: { delay: 2.2, duration: 4, repeat: Infinity, ease: "easeInOut" } }} 
          className="absolute top-[35%] right-[5%] xl:right-[8%] z-10 pointer-events-none"
        >
          <Image src="/aset visual/Great Deals.webp" alt="Great Deals" width={180} height={180} className="w-32 md:w-40 h-auto object-contain drop-shadow-2xl transform -rotate-12" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3, type: "spring", bounce: 0.5 }} className="absolute top-[50%] right-[3%] xl:right-[5%] z-10">
          <div className="animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>
            <div className="bg-bgs-green text-white px-5 py-2.5 rounded-full font-black text-lg comic-shadow-sm comic-border transform -rotate-12 flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">celebration</span> PESTA RAKYAT
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }} 
          transition={{ opacity: { delay: 1.5 }, x: { delay: 1.5, type: "spring", bounce: 0.4 }, y: { delay: 2.5, duration: 7, repeat: Infinity, ease: "easeInOut" } }} 
          className="absolute top-[8%] right-[2%] xl:right-[5%] z-0"
        >
          <Image src="/aset visual/tas.webp" alt="Tas Belanja" width={100} height={100} className="w-16 xl:w-24 h-auto object-contain drop-shadow-2xl opacity-60 transform rotate-12" />
        </motion.div>
      </div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-8"
      >
        {/* Top Partner Logos */}
        <div className="flex flex-row flex-nowrap justify-center items-center gap-2 sm:gap-4 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl mx-auto w-max mb-6 sm:mb-8 comic-border comic-shadow transform rotate-1">
          <Image src="/aset logo/LOGO ASET BGS 2026/LOGO ASET BGS 2026/PEMKOT BANDUNG.png" alt="Pemkot Bandung" width={40} height={40} className="h-6 sm:h-10 w-auto object-contain drop-shadow-[0_1px_0_rgba(0,0,0,0.5)]" />
          <Image src="/aset logo/LOGO ASET BGS 2026/LOGO ASET BGS 2026/LOGO BANDUNG.png" alt="Bandung" width={90} height={40} className="h-5 sm:h-8 w-auto object-contain drop-shadow-[0_1px_0_rgba(0,0,0,0.5)]" />
          <Image src="/logo/Logo Disdagin 2026 Final.webp" alt="Disdagin Bandung" width={110} height={30} className="h-4 sm:h-6 w-auto object-contain drop-shadow-[0_1px_0_rgba(0,0,0,0.5)]" />
          <Image src="/aset logo/LOGO ASET BGS 2026/LOGO ASET BGS 2026/LOGO BULAN BELANJA BANDUNG.PNG" alt="Bulan Belanja Bandung" width={90} height={40} className="h-6 sm:h-10 w-auto object-contain drop-shadow-[0_1px_0_rgba(0,0,0,0.5)]" />
          <Image src="/aset logo/LOGO ASET BGS 2026/LOGO ASET BGS 2026/LOGO HUT RI 81.png" alt="HUT RI 81" width={40} height={40} className="h-6 sm:h-10 w-auto object-contain drop-shadow-[0_1px_0_rgba(0,0,0,0.5)]" />
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 w-full px-2 mb-4">
          <span className="inline-flex items-center gap-1 sm:gap-2 bg-bgs-red text-white comic-border px-3 sm:px-5 py-2 rounded-xl text-[10px] sm:text-sm font-bold uppercase comic-shadow-sm transform -rotate-2">
            <span className="material-symbols-outlined text-[14px] sm:text-[20px]">calendar_month</span>
            21-23 AGS 2026
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-2 bg-bgs-yellow text-black comic-border px-3 sm:px-5 py-2 rounded-xl text-[10px] sm:text-sm font-bold uppercase comic-shadow-sm transform rotate-1">
            <span className="material-symbols-outlined text-[14px] sm:text-[20px]">location_on</span>
            LASWI HERITAGE
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-2 bg-bgs-green text-white comic-border px-3 sm:px-5 py-2 rounded-xl text-[10px] sm:text-sm font-bold uppercase comic-shadow-sm transform -rotate-1">
            <span className="material-symbols-outlined text-[14px] sm:text-[20px]">local_activity</span>
            FREE ENTRY
          </span>
        </div>
        {/* Headline */}
        <h1 className="font-headline-lg text-[13vw] sm:text-6xl md:text-8xl lg:text-[100px] font-black text-white leading-none tracking-tighter italic text-outline-black flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="z-20 relative"
          >
            BANDUNG
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.5 }}
            className="inline-block origin-center -mt-2 lg:-mt-4 z-10 relative"
          >
            <motion.span
              animate={{ rotate: [0, 5, -5, 5, -5, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
                delay: 2
              }}
              className="bg-bgs-red text-bgs-yellow comic-border px-6 sm:px-8 py-2 rounded-3xl inline-block origin-center whitespace-nowrap text-[12vw] sm:text-5xl md:text-7xl lg:text-[90px] transform -rotate-3 comic-shadow"
            >
              GREAT SALE
            </motion.span>
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="z-20 relative -mt-2 lg:-mt-4"
          >
            2026
          </motion.span>
        </h1>
        
        {/* Subheadline */}
        <div className="max-w-2xl mx-auto mt-8 mb-8">
          <p className="text-lg md:text-xl text-black font-bold leading-relaxed bg-bgs-yellow p-4 md:p-6 rounded-2xl comic-border comic-shadow-sm transform -rotate-1">
            Festival belanja terbesar di Kota Kembang dengan diskon spektakuler dari fashion, kuliner, hingga produk kreatif.
          </p>
        </div>
        
        {/* CTAs */}
        <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 pt-4 w-full relative">
          <a href="#tenant" className="bg-bgs-yellow text-black comic-border px-8 py-4 rounded-xl font-black text-lg md:text-xl uppercase transition-all comic-shadow comic-shadow-hover inline-block whitespace-nowrap z-20">
            JELAJAHI TENANT
          </a>
          <Link href="/register" className="bg-white text-black comic-border px-8 py-4 rounded-xl font-black text-lg md:text-xl uppercase transition-all comic-shadow comic-shadow-hover inline-block whitespace-nowrap z-20">
            REGISTER NOW
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
