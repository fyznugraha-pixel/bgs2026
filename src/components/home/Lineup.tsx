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
    <section id="lineup" className="py-[80px] bg-surface-variant/30 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-4xl font-bold text-primary mb-4">Artist Lineup</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
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
              <SpotlightCard className="h-32 flex items-center justify-center text-center p-6 group cursor-pointer" spotlightColor="rgba(0, 114, 169, 0.15)">
                <h3 className="font-headline-md text-lg font-bold text-primary group-hover:text-secondary transition-colors relative z-10">{artist}</h3>
              </SpotlightCard>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: artists.length * 0.1 }}
            className="bg-tertiary-container/20 rounded-2xl p-6 border-2 border-dashed border-tertiary-container flex items-center justify-center text-center h-32"
          >
            <h3 className="font-headline-md text-lg font-bold text-on-tertiary-container opacity-70">And Many More...</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
