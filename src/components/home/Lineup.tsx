"use client";

import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";

const artists = [
  "Ebith Beat A",
  "Plat Merah",
  "Tonewaves",
  "Pinky Cong",
  "Sundanis",
  "Katakita",
  "MC BDG"
];

export default function Lineup() {
  return (
    <section id="lineup" className="py-[80px] bg-bgs-red bg-diagonal-cross border-b-8 border-black overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="bg-bgs-yellow text-black comic-border px-6 py-3 inline-block transform rotate-2 comic-shadow-sm mb-4 rounded-2xl">
            <h2 className="font-headline-md text-4xl md:text-5xl font-black uppercase italic">Artist Lineup</h2>
          </div>
          <p className="text-black font-bold text-lg max-w-2xl mx-auto bg-white comic-border p-4 rounded-xl comic-shadow-sm transform -rotate-1">
            Penampilan musik spesial dari artis dan band asal Bandung yang siap memeriahkan puncak perayaan.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {artists.map((artist, i) => (
            <motion.div
              key={artist}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SpotlightCard className="h-32 flex items-center justify-center text-center p-6 cursor-pointer bg-white comic-border comic-shadow-sm hover:-translate-y-2 transition-all transform hover:rotate-1" spotlightColor="rgba(0, 0, 0, 0.05)">
                <h3 className="font-headline-md text-xl font-black text-black uppercase relative z-10">{artist}</h3>
              </SpotlightCard>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: artists.length * 0.1 }}
            className="bg-bgs-yellow rounded-xl comic-border comic-shadow-sm p-6 flex items-center justify-center text-center h-32 transform -rotate-1"
          >
            <h3 className="font-headline-md text-xl font-black text-black uppercase">And Many More...</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
