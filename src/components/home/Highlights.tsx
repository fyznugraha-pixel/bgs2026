"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  {
    prefix: "MIRAH",
    title: "Bandung Mirah Pisan",
    desc: "Bazar pelaku usaha & brand lokal (fashion, kuliner, craft, komunitas)",
    topBg: "bg-bgs-blue bg-halftone",
    lineColor: "border-bgs-blue"
  },
  {
    prefix: "MERIAH",
    title: "Bandung Meriah Pisan",
    desc: "Hiburan, brand activation, pertunjukan musik",
    topBg: "bg-bgs-red bg-sunburst",
    lineColor: "border-bgs-red"
  },
  {
    prefix: "AING",
    title: "Bandung Aing Pisan",
    desc: "Booth komunitas & merchandise khas Bandung (cth. Persib Store)",
    topBg: "bg-bgs-yellow bg-halftone",
    lineColor: "border-bgs-yellow"
  },
];

export default function Highlights() {
  return (
    <section className="py-[80px] w-full bg-bgs-yellow bg-sunburst border-b-8 border-black overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 flex justify-center px-4 sm:px-0 overflow-hidden">
          <div className="bg-bgs-blue comic-border px-4 sm:px-8 py-2 sm:py-3 inline-block transform -rotate-1 comic-shadow-sm rounded-2xl max-w-full">
            <h2 className="font-headline-md text-2xl min-[375px]:text-3xl md:text-5xl font-black text-white uppercase italic text-outline-black-sm whitespace-nowrap">Event Highlights</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`bg-white rounded-2xl overflow-hidden comic-border comic-shadow-sm flex flex-col transition-all group ${i === 0 ? 'transform rotate-1' : i === 2 ? 'transform -rotate-1' : ''}`}
            >
              {/* Top Half */}
              <div className={`h-48 md:h-56 relative flex items-center justify-center border-b-4 border-black overflow-hidden ${item.topBg}`}>
                <h3 className="font-headline-md text-5xl md:text-6xl font-black italic text-white text-outline-black-sm drop-shadow-md z-10 relative transform -rotate-2">
                  {item.prefix}
                </h3>
              </div>
              
              {/* Bottom Half */}
              <div className="p-6 md:p-8 flex-grow bg-white">
                <h4 className="font-headline-md text-xl md:text-2xl font-black text-black uppercase italic mb-4">
                  {item.title}
                </h4>
                <div className={`border-l-4 ${item.lineColor} pl-4`}>
                  <p className="text-black text-sm md:text-base font-bold leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
