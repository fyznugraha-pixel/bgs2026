"use client";

import { motion } from "framer-motion";

const communities = [
  "BBQRIDE", "Pickers Store", "Ride with Dad", "Terror Garage",
  "Wahon Indonesia", "Old School BMX", "Jumat Blarr", "Kamis Inggris",
  "Bujang Rimba", "Kemis Motret", "Duck Garage", "Sukaria Bertamasya",
  "Reborn Royal Enfield", "Iron Pipe", "Kaki Besi Club"
];

export default function Community() {
  return (
    <section id="komunitas" className="py-[80px]">
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3"
          >
            <h2 className="font-headline-md text-4xl font-bold text-primary mb-4">Community Act</h2>
            <h3 className="text-2xl font-semibold text-secondary mb-4">Bandung Collective</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Berkolaborasi dengan puluhan komunitas lokal Bandung untuk menghadirkan aktivasi kreatif dan interaktif selama festival berlangsung.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3"
          >
            <div className="flex flex-wrap gap-3">
              {communities.map((name, i) => (
                <span 
                  key={name}
                  className="inline-block px-5 py-2.5 bg-secondary-container text-on-secondary-container font-medium rounded-full text-sm hover:bg-secondary hover:text-surface transition-colors cursor-default"
                >
                  {name}
                </span>
              ))}
              <span className="inline-block px-5 py-2.5 border-2 border-dashed border-outline-variant text-outline font-medium rounded-full text-sm">
                + Komunitas Lainnya
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
