"use client";

import { motion } from "framer-motion";

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
        className="space-y-6"
      >
        <h2 className="font-headline-md text-4xl font-bold text-primary">About the Festival</h2>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Digelar selama 3 hari puncak di bulan Agustus, event ini menjadi klimaks perayaan promo lintas sektor fashion, kuliner, dan produk kreatif. Sepanjang bulan Agustus, seluruh pelaku usaha di Bandung turut memberi penawaran spesial, menjadikan kota ini surga belanja penuh kejutan.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6"
      >
        <motion.div variants={itemVariants} className="bg-surface p-8 rounded-3xl shadow-sm border border-surface-variant text-center flex flex-col items-center justify-center">
          <span className="font-headline-md text-4xl md:text-5xl font-extrabold text-secondary mb-2">120+</span>
          <span className="text-xs font-bold text-outline uppercase tracking-wider">TENANT</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-surface p-8 rounded-3xl shadow-sm border border-surface-variant text-center flex flex-col items-center justify-center">
          <span className="font-headline-md text-4xl md:text-5xl font-extrabold text-tertiary mb-2">15+</span>
          <span className="text-xs font-bold text-outline uppercase tracking-wider">KOMUNITAS PARTISIPAN</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-surface p-8 rounded-3xl shadow-sm border border-surface-variant text-center flex flex-col items-center justify-center">
          <span className="font-headline-md text-4xl md:text-5xl font-extrabold text-primary mb-2">11</span>
          <span className="text-xs font-bold text-outline uppercase tracking-wider">ARTIST LINEUP</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-surface p-8 rounded-3xl shadow-sm border border-surface-variant text-center flex flex-col items-center justify-center">
          <span className="font-headline-md text-4xl md:text-5xl font-extrabold text-secondary mb-2">3</span>
          <span className="text-xs font-bold text-outline uppercase tracking-wider">HARI PUNCAK EVENT</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
