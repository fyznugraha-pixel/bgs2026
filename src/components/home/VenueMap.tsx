"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VenueMap() {
  return (
    <section id="venue" className="bg-primary text-surface pt-[80px] relative" style={{ backgroundColor: "rgb(5, 22, 48)" }}>
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop mb-8 z-10 relative text-center">
        <h2 className="font-headline-md text-4xl font-bold mb-4">Venue Layout: Laswi Heritage</h2>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-secondary/20 relative rounded-none overflow-hidden border border-surface/20 hover:border-surface/40 transition-colors shadow-xl group"
      >
        <Image 
          src="/venue-layout.webp" 
          alt="Venue Layout Laswi Heritage Bandung" 
          width={1920} 
          height={1080} 
          className="w-full h-auto object-cover" 
          quality={100}
        />
        <div className="absolute inset-0 bg-primary/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
      </motion.div>
    </section>
  );
}
