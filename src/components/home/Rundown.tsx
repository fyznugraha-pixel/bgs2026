"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timelineEvents = [
  {
    time: "08:00",
    title: "Konvoi Bandros (Happening Art)",
    desc: "Start dari Balai Kota Bandung, rute: Jl. Merdeka → Jl. Wastukencana → Jl. Riau → Jl. Laswi → Jl. Sukabumi, finish di Laswi Heritage, dipimpin Walikota Bandung.",
    color: "bg-tertiary-container",
  },
  {
    time: "[TBA]",
    title: "Grand Opening Ceremony",
    desc: "Berlokasi di panggung utama Laswi Heritage.",
    color: "bg-surface-variant",
  },
  {
    time: "[TBA]",
    title: "Live Music Performance",
    desc: "Menampilkan: The Changcuters, Kuburan, The Sigit, PAS Band, Rocket Rockers, Danilla.",
    color: "bg-surface-variant",
  },
];

export default function Rundown() {
  return (
    <section id="konvoi" className="py-[80px] w-full mx-auto px-margin-mobile md:px-margin-desktop max-w-[1536px]">
      <div className="text-center mb-16">
        <h2 className="font-headline-md text-4xl font-bold text-primary mb-4">Rundown & Konvoi</h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-surface-variant ml-4 md:ml-0 md:pl-0 space-y-8">
          {timelineEvents.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-start justify-between">
                <div className="md:w-1/4 mb-2 md:mb-0 text-left md:text-right md:pr-8 pt-6">
                  <span className="font-bold text-secondary text-lg">{event.time}</span>
                </div>
                
                {/* Node */}
                <div className={`absolute left-[-9px] md:left-1/4 md:-ml-[9px] top-8 w-4 h-4 rounded-full border-4 border-surface shadow-sm z-10 ${event.color}`}></div>
                
                <div className="md:w-3/4 md:pl-8">
                  <div className="bg-surface p-6 rounded-2xl shadow-sm border border-surface-variant hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-headline-md text-xl font-bold text-primary mb-2">{event.title}</h3>
                      <p className="text-on-surface-variant text-sm mb-3">{event.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Hide md border */}
          <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-0.5 bg-surface-variant -ml-px"></div>
        </div>
      </div>
    </section>
  );
}
