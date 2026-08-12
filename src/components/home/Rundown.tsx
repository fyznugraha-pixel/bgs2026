"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timelineEvents = [
  {
    time: "[TBA]",
    title: "Grand Opening Ceremony",
    desc: "Berlokasi di panggung utama Laswi Heritage.",
    color: "bg-bgs-red",
  },
  {
    time: "[TBA]",
    title: "Live Music Performance",
    desc: "Menampilkan: Ebith Beat A, Plat Merah, Tonewaves, Pinky Cong, Sundanis, Katakita.",
    color: "bg-bgs-green",
  },
];

export default function Rundown() {
  return (
    <section id="rundown" className="py-[80px] w-full mx-auto px-margin-mobile md:px-margin-desktop bg-white border-y-8 border-black">
      <div className="text-center mb-16">
        <div className="bg-bgs-red comic-border p-4 inline-block transform -rotate-1 comic-shadow-sm mx-auto">
          <h2 className="font-headline-md text-4xl md:text-5xl font-black text-white uppercase italic text-outline-black">Rundown</h2>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-8 border-black ml-4 md:ml-0 md:pl-0 space-y-8">
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
                <div className="md:w-1/4 mb-2 md:mb-0 text-left md:text-right md:pr-8 pt-4">
                  <span className="font-black text-bgs-red text-2xl comic-border bg-white px-4 py-2 rounded-xl comic-shadow-sm inline-block transform rotate-2">{event.time}</span>
                </div>
                
                {/* Node */}
                <div className={`absolute left-[-14px] md:left-1/4 md:-ml-[14px] top-6 w-6 h-6 rounded-full border-4 border-black z-10 ${event.color}`}></div>
                
                <div className="md:w-3/4 md:pl-8">
                  <div className={`bg-white p-6 rounded-2xl comic-border comic-shadow hover:shadow-lg transition-shadow relative overflow-hidden group ${i % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}>
                    <div className="relative z-10">
                      <h3 className="font-headline-md text-2xl font-black text-black uppercase mb-2">{event.title}</h3>
                      <p className="text-black font-bold text-base mb-3">{event.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Hide md border */}
          <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-2 bg-black -ml-1 z-0"></div>
        </div>
      </div>
    </section>
  );
}
