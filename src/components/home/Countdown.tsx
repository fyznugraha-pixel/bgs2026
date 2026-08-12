"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-08-21T08:00:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-bgs-red text-black w-full py-16 relative overflow-hidden border-b-8 border-black bg-grid">
      <div className="absolute top-0 left-0 w-full h-8 bg-black"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10"
      >
        <div className="bg-black text-white px-6 py-2 comic-border rounded-xl transform -rotate-2 inline-block font-black text-lg mb-8 uppercase tracking-widest shadow-[4px_4px_0_0_#fff]">EVENT STARTS IN</div>
        
        <div className="flex justify-center items-center gap-2 md:gap-6 font-headline-md">
          <div className="flex flex-col items-center bg-white comic-border comic-shadow p-4 md:p-6 rounded-2xl transform rotate-2">
            <span className="text-5xl md:text-7xl font-black text-black">{String(timeLeft.days).padStart(2, "0")}</span>
            <span className="text-xs md:text-sm font-bold text-black uppercase mt-2 tracking-widest">DAYS</span>
          </div>
          <span className="text-4xl md:text-6xl text-black font-black pb-6">:</span>
          
          <div className="flex flex-col items-center bg-white comic-border comic-shadow p-4 md:p-6 rounded-2xl transform -rotate-2">
            <span className="text-5xl md:text-7xl font-black text-black">{String(timeLeft.hours).padStart(2, "0")}</span>
            <span className="text-xs md:text-sm font-bold text-black uppercase mt-2 tracking-widest">HOURS</span>
          </div>
          <span className="text-4xl md:text-6xl text-black font-black pb-6">:</span>
          
          <div className="flex flex-col items-center bg-white comic-border comic-shadow p-4 md:p-6 rounded-2xl transform rotate-1">
            <span className="text-5xl md:text-7xl font-black text-black">{String(timeLeft.minutes).padStart(2, "0")}</span>
            <span className="text-xs md:text-sm font-bold text-black uppercase mt-2 tracking-widest">MINS</span>
          </div>
          <span className="text-4xl md:text-6xl text-black font-black pb-6 hidden md:block">:</span>
          
          <div className="flex-col items-center bg-white comic-border comic-shadow p-4 md:p-6 rounded-2xl transform -rotate-1 hidden md:flex">
            <span className="text-5xl md:text-7xl font-black text-black">{String(timeLeft.seconds).padStart(2, "0")}</span>
            <span className="text-xs md:text-sm font-bold text-black uppercase mt-2 tracking-widest">SECS</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
