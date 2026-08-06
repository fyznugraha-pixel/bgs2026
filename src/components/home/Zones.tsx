"use client";

import { motion } from "framer-motion";

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
    <section className="bg-surface-variant/30 py-[80px]">
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-4xl font-bold text-primary mb-4">Shop by Venue Zones</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {zones.map((zone, i) => (
            <motion.div 
              key={zone.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface transition-colors">
                <span className="material-symbols-outlined text-3xl">{zone.icon}</span>
              </div>
              <span className="font-bold text-primary">{zone.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
