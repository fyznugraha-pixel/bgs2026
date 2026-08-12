"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutStats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="tentang" className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop py-[80px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 relative"
      >

        <h2 className="font-headline-md text-5xl md:text-6xl font-black text-bgs-blue italic uppercase relative z-10 pt-8 md:pt-4 mb-6">About the Festival</h2>
        <div className="bg-white comic-border comic-shadow p-6 md:p-8 rounded-2xl transform rotate-1 relative z-10">
          <p className="text-lg md:text-xl text-black font-bold leading-relaxed">
            Digelar selama 3 hari puncak di bulan Agustus, event ini menjadi klimaks perayaan promo lintas sektor fashion, kuliner, dan produk kreatif. Sepanjang bulan Agustus, seluruh pelaku usaha di Bandung turut memberi penawaran spesial, menjadikan kota ini surga belanja penuh kejutan.
          </p>
        </div>
        <div className="pt-4 relative z-10 flex justify-center md:justify-start">
          <Image src="/aset visual/Maskot (Robel).webp" alt="Maskot Robel BGS" width={400} height={500} className="w-56 md:w-72 h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" />
        </div>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6"
      >
        <motion.div variants={itemVariants} className="bg-bgs-yellow comic-border comic-shadow-sm p-6 rounded-2xl text-center flex flex-col items-center justify-center transform -rotate-2">
          <span className="font-headline-md text-5xl md:text-6xl font-black text-black mb-2">120+</span>
          <span className="text-sm font-bold text-black uppercase tracking-wider">TENANT</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-bgs-green comic-border comic-shadow-sm p-6 rounded-2xl text-center flex flex-col items-center justify-center transform rotate-2">
          <span className="font-headline-md text-5xl md:text-6xl font-black text-white mb-2">15+</span>
          <span className="text-sm font-bold text-white uppercase tracking-wider">KOMUNITAS PARTISIPAN</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-bgs-blue comic-border comic-shadow-sm p-6 rounded-2xl text-center flex flex-col items-center justify-center transform rotate-1">
          <span className="font-headline-md text-5xl md:text-6xl font-black text-white mb-2">11</span>
          <span className="text-sm font-bold text-white uppercase tracking-wider">ARTIST LINEUP</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-bgs-red comic-border comic-shadow-sm p-6 rounded-2xl text-center flex flex-col items-center justify-center transform -rotate-1">
          <span className="font-headline-md text-5xl md:text-6xl font-black text-white mb-2">3</span>
          <span className="text-sm font-bold text-white uppercase tracking-wider">HARI PUNCAK EVENT</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
