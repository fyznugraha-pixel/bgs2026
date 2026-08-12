"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const zones = [
  { icon: "checkroom", name: "Clothing Brand" },
  { icon: "styler", name: "Women Fashion" },
  { icon: "fastfood", name: "Kuliner & Food Truck" },
  { icon: "groups", name: "Komunitas & Sponsor" },
  { icon: "palette", name: "Craft" },
  { icon: "music_note", name: "Musik & Hiburan" },
];

export default function Zones() {
  return (
    <section className="bg-white border-y-8 border-black py-[80px] overflow-hidden bg-stripes">
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop relative">
        <div className="text-center mb-12 relative z-10 bg-bgs-yellow comic-border p-4 inline-block transform -rotate-1 mx-auto comic-shadow-sm">
          <h2 className="font-headline-md text-4xl md:text-5xl font-black text-black uppercase italic">Shop by Venue Zones</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {zones.map((zone, i) => (
            <motion.div 
              key={zone.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-bgs-blue comic-border comic-shadow-sm p-6 rounded-2xl flex flex-col items-center text-center gap-4 group hover:-translate-y-2 hover:scale-105 transition-all cursor-pointer ${i % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}
            >
              <div className="w-16 h-16 rounded-full bg-bgs-yellow comic-border flex items-center justify-center text-black group-hover:bg-white transition-colors comic-shadow-sm">
                <span className="material-symbols-outlined text-3xl">{zone.icon}</span>
              </div>
              <span className="font-bold text-white text-lg">{zone.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
