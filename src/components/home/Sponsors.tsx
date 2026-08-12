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
        <div className="mb-12 md:mb-16 flex flex-col items-center px-4 sm:px-8 max-w-4xl mx-auto w-full">
          <div className="bg-white comic-border px-4 py-2 sm:p-4 inline-block transform -rotate-1 comic-shadow-sm mb-6 md:mb-8 w-fit max-w-full overflow-hidden">
            <h3 className="font-headline-md text-[19px] min-[375px]:text-[22px] sm:text-2xl md:text-3xl font-black text-black uppercase text-center whitespace-nowrap text-ellipsis">Support Event Partner</h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-row flex-nowrap justify-center items-center gap-3 sm:gap-8 md:gap-16 bg-white comic-border comic-shadow p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl transform rotate-1 mx-auto w-full"
          >
            {supportEventPartners.map((logo, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative flex-1 h-10 min-[375px]:h-12 sm:h-20 md:h-24 group transition-all"
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
        <div className="flex flex-col items-center px-4 sm:px-8 mt-8 md:mt-0 max-w-4xl mx-auto w-full">
          <div className="bg-white comic-border px-4 py-2 sm:p-4 inline-block transform rotate-1 comic-shadow-sm mb-6 md:mb-8 w-fit max-w-full overflow-hidden">
            <h3 className="font-headline-md text-xl min-[375px]:text-[22px] sm:text-2xl md:text-3xl font-black text-black uppercase text-center whitespace-nowrap text-ellipsis">Event Contribution</h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-row flex-nowrap justify-center items-center gap-2 sm:gap-6 md:gap-16 bg-white comic-border comic-shadow p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl transform -rotate-1 mx-auto w-full"
          >
            {eventContributions.map((logo, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative flex-1 h-8 min-[375px]:h-10 sm:h-16 md:h-16 group transition-all"
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
