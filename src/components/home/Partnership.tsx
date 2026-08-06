"use client";

import { motion } from "framer-motion";

const eventPartners = [
  { tier: "PLATINUM", price: "1.500.000.000", color: "bg-surface-variant text-on-surface" },
  { tier: "GOLD", price: "1.000.000.000", color: "bg-tertiary-container text-on-tertiary-container" },
  { tier: "SILVER", price: "750.000.000", color: "bg-surface-variant text-on-surface" },
  { tier: "BRONZE", price: "500.000.000", color: "bg-surface-variant text-on-surface" },
];

const programPartners = [
  { tier: "SPARK", price: "1.500.000.000", color: "bg-primary-container text-on-primary-container" },
  { tier: "BOOST", price: "1.000.000.000", color: "bg-secondary-container text-on-secondary-container" },
  { tier: "IMPACT", price: "750.000.000", color: "bg-white/15 text-white" },
  { tier: "SUPPORT", price: "500.000.000", color: "bg-white/5 text-white/80" },
];

export default function Partnership() {
  return (
    <section id="partnership" className="py-[80px] bg-primary text-surface relative" style={{ backgroundColor: "rgb(5, 22, 48)" }}>
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-4xl font-bold text-surface mb-4">Partnership Program</h2>
          <p className="text-surface-variant/80 text-lg max-w-2xl mx-auto">
            Mari berkolaborasi dan jelajahi berbagai kemungkinan bersama Bandung Great Sale 2026.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-tertiary-container">Official Event Partner</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventPartners.map((p, i) => (
              <motion.div 
                key={p.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${p.color} rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-transform border border-white/10`}
              >
                <h4 className="font-headline-md font-bold text-xl mb-2">{p.tier}</h4>
                <div className="font-bold text-2xl mb-6">Rp {p.price}</div>
                <ul className="space-y-3 text-sm opacity-80 mb-8">
                  <li>✓ Logo pada materi promosi</li>
                  <li>✓ Logo pada LED main stage</li>
                  <li>✓ Booth Aktivasi</li>
                </ul>
                <button className="w-full py-3 rounded-full bg-primary text-surface font-bold text-sm hover:brightness-125 transition-all">
                  Pilih Paket
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-secondary-fixed">Official Program Participant</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programPartners.map((p, i) => (
              <motion.div 
                key={p.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${p.color} rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-transform border border-white/10`}
              >
                <h4 className="font-headline-md font-bold text-xl mb-2">{p.tier}</h4>
                <div className="font-bold text-2xl mb-6">Rp {p.price}</div>
                <ul className="space-y-3 text-sm opacity-80 mb-8">
                  <li>✓ Logo komunikasi program</li>
                  <li>✓ Publikasi kanal digital BGS</li>
                  <li>✓ Campaign bersama</li>
                </ul>
                <button className="w-full py-3 rounded-full bg-surface text-primary font-bold text-sm hover:bg-surface-variant transition-all">
                  Pilih Paket
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-surface-variant/80">Hubungi kami untuk detail lengkap:</p>
          <p className="font-bold text-xl mt-2 text-surface">nbaorganizer@gmail.com | +62 813 953 382 05</p>
        </div>
      </div>
    </section>
  );
}
