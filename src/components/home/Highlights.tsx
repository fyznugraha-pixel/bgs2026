"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    prefix: "MIRAH",
    title: "Bandung Mirah Pisan",
    desc: "Bazar pelaku usaha & brand lokal (fashion, kuliner, craft, komunitas)",
    colorClass: "bg-primary-container text-on-primary-container",
  },
  {
    prefix: "MERIAH",
    title: "Bandung Meriah Pisan",
    desc: "Hiburan, brand activation, pertunjukan musik",
    colorClass: "bg-secondary-container text-on-secondary-container",
  },
  {
    prefix: "AING",
    title: "Bandung Aing Pisan",
    desc: "Booth komunitas & merchandise khas Bandung (cth. Persib Store)",
    colorClass: "bg-tertiary-container text-on-tertiary-container",
  },
];

export default function Highlights() {
  return (
    <section className="py-[80px] max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="mb-12">
        <h2 className="font-headline-md text-4xl font-bold text-primary mb-4 text-center">Event Highlights</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-surface rounded-3xl overflow-hidden shadow-sm border border-surface-variant flex flex-col hover:shadow-md transition-shadow group"
          >
            <div className={`h-48 relative flex items-center justify-center transition-colors duration-300 ${item.colorClass} group-hover:brightness-110`}>
              <span className="font-headline-md text-5xl font-extrabold opacity-80 uppercase tracking-wider">{item.prefix}</span>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="font-headline-md text-2xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
