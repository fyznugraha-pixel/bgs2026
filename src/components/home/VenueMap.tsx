"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VenueMap() {
  return (
    <section id="venue" className="bg-[#0A192F] text-white pt-[80px] relative border-b-8 border-black pb-[80px]">
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop mb-8 z-10 relative flex justify-center text-center">
        <div className="bg-white text-black comic-border p-4 inline-block transform rotate-1 comic-shadow-sm mb-4">
          <h2 className="font-headline-md text-4xl font-black uppercase">Venue Layout: Laswi Heritage</h2>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-[90%] md:w-[80%] mx-auto bg-white relative rounded-2xl overflow-hidden comic-border comic-shadow-sm group p-2 transform -rotate-1"
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
