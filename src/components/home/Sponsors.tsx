"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Sponsors() {
  const supportEventPartners = [
    { name: "Bank BJB", src: "/aset logo/LOGO SPONSOR BGS 2026/LOGO SPONSOR BGS 2026/BJB/BJB UTAMA.webp" },
    { name: "Interworld", src: "/aset logo/LOGO SPONSOR BGS 2026/LOGO SPONSOR BGS 2026/GUDANG GARAM/INTERWORLD 3D HORISONTAL.webp" },
    { name: "KAI", src: "/aset logo/LOGO SPONSOR BGS 2026/LOGO SPONSOR BGS 2026/PT. KERETA API INDONESIA/PNG/LOGO KAI 2020-01.webp" }
  ];

  const eventContributions = [
    { name: "Gojek", src: "/aset logo/LOGO SPONSOR BGS 2026/LOGO SPONSOR BGS 2026/GOJEK/LOGO GOJEK.webp" },
    { name: "Telkomsel", src: "/aset logo/LOGO SPONSOR BGS 2026/LOGO SPONSOR BGS 2026/TELKOMSEL/Logo 5G Full Color.webp" },
    { name: "Fruit Tea", src: "/aset logo/LOGO-LOGO BRAND F&B-/LOGO-LOGO BRAND F&B/SOSRO.webp" }, // Menggunakan Sosro karena file Fruit Tea berformat PDF
    { name: "Kartika Sari", src: "/aset logo/LOGO SPONSOR BGS 2026/LOGO SPONSOR BGS 2026/KARTIKASARI/IMG_8168.webp" },
    { name: "Tactlink", src: "/logo/logo-tactlink.webp" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-bgs-yellow bg-polka border-y-8 border-black relative overflow-hidden">
      <div className="container-max text-center relative z-10">

        {/* Support Event Partner */}
        <div className="mb-16 flex flex-col items-center">
          <div className="bg-white comic-border p-4 inline-block transform -rotate-1 comic-shadow-sm mb-8 w-fit">
            <h3 className="font-headline-md text-3xl font-black text-black uppercase">Support Event Partner</h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 bg-white comic-border comic-shadow p-8 rounded-3xl transform rotate-1 mx-auto w-fit max-w-full"
          >
            {supportEventPartners.map((logo, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative w-32 h-16 md:w-48 md:h-24 group transition-all"
              >
                <Image
                  src={logo.src}
                  alt={`Sponsor ${logo.name}`}
                  fill
                  className="object-contain group-hover:scale-110 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Event Contribution */}
        <div className="flex flex-col items-center">
          <div className="bg-white comic-border p-4 inline-block transform rotate-1 comic-shadow-sm mb-8 w-fit">
            <h3 className="font-headline-md text-3xl font-black text-black uppercase">Event Contribution</h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 bg-white comic-border comic-shadow p-8 rounded-3xl transform -rotate-1 mx-auto w-fit max-w-full"
          >
            {eventContributions.map((logo, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative w-24 h-12 md:w-36 md:h-16 group transition-all"
              >
                <Image
                  src={logo.src}
                  alt={`Sponsor ${logo.name}`}
                  fill
                  className="object-contain group-hover:scale-110 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
