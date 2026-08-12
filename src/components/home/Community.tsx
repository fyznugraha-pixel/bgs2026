"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { communityLogos } from "@/lib/data/logos";

export default function Community() {
  // Deduplicate community logos so that multiple variations from the same folder or prefix only show once
  const uniqueCommunityLogos: string[] = [];
  const seenPrefixes = new Set();
  
  communityLogos.forEach(logo => {
    const parts = logo.split('/');
    // Check if it's in a subfolder (e.g. .../KEMISMOTRET/IMG_4084.webp)
    if (parts.length > 5) {
      const folderName = parts[parts.length - 2];
      if (!seenPrefixes.has(folderName)) {
        seenPrefixes.add(folderName);
        uniqueCommunityLogos.push(logo);
      }
    } else {
      // It's a file in the root directory (e.g. EXODOS-01.webp)
      const filename = parts[parts.length - 1];
      const prefix = filename.split('-')[0].replace(/\d/g, '').toLowerCase().substring(0, 6);
      if (!seenPrefixes.has(prefix)) {
        seenPrefixes.add(prefix);
        uniqueCommunityLogos.push(logo);
      }
    }
  });

  // Split logos into two rows for a denser, more engaging marquee
  const half = Math.ceil(uniqueCommunityLogos.length / 2);
  const row1 = [...uniqueCommunityLogos.slice(0, half), ...uniqueCommunityLogos.slice(0, half)];
  const row2 = [...uniqueCommunityLogos.slice(half), ...uniqueCommunityLogos.slice(half)];

  return (
    <section id="komunitas" className="py-[80px] overflow-hidden bg-bgs-blue bg-zigzag border-b-8 border-black relative">
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop relative mb-12">
        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="bg-white text-black comic-border p-4 sm:p-5 inline-block transform rotate-1 comic-shadow-sm mb-4 max-w-full overflow-hidden">
              <h2 className="font-headline-md text-2xl min-[375px]:text-[26px] sm:text-4xl font-black uppercase whitespace-nowrap text-ellipsis">Community Act</h2>
            </div>
            <h3 className="text-3xl font-black text-bgs-yellow mb-4 uppercase text-outline-black-sm italic">Bandung Collective</h3>
            <div className="bg-white comic-border p-4 rounded-xl comic-shadow-sm transform -rotate-1">
              <p className="text-black font-bold text-lg leading-relaxed">
                Berkolaborasi dengan puluhan komunitas lokal Bandung untuk menghadirkan aktivasi kreatif dan interaktif selama festival berlangsung.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Area */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1 */}
        <div className="flex mb-6 w-max">
          <motion.div
            className="flex gap-6 px-3 py-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 80, ease: "linear", repeat: Infinity }}
          >
            {[...row1, ...row1].map((logo, i) => (
              <div 
                key={`row1-${i}`}
                className={`flex-shrink-0 w-32 h-16 md:w-40 md:h-20 relative flex items-center justify-center p-2 comic-border rounded-2xl comic-shadow-sm transition-all duration-300 hover:scale-110 hover:z-10 transform ${['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1'][i % 4]} ${['bg-white', 'bg-bgs-yellow', 'bg-white', 'bg-bgs-yellow'][i % 4]}`}
              >
                <Image 
                  src={logo}
                  alt={`Community Logo ${i}`}
                  fill
                  className="object-contain p-3 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 (Moves Left to Right) */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap gap-6 px-3 py-6 items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
          >
            {[...row2, ...row2].map((logo, i) => (
              <div 
                key={`row2-${i}`}
                className={`flex-shrink-0 w-32 h-16 md:w-40 md:h-20 relative flex items-center justify-center p-2 comic-border rounded-2xl comic-shadow-sm transition-all duration-300 hover:scale-110 hover:z-10 transform ${['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1'][i % 4]} ${['bg-bgs-yellow', 'bg-white', 'bg-bgs-yellow', 'bg-white'][i % 4]}`}
              >
                <Image 
                  src={logo}
                  alt={`Community Logo ${i}`}
                  fill
                  className="object-contain p-3 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
