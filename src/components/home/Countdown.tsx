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
    <section className="bg-primary text-surface w-full py-12 relative overflow-hidden" style={{ backgroundColor: "rgb(5, 22, 48)" }}>
      <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-container"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-tertiary-container"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10"
      >
        <p className="text-tertiary-container text-sm font-bold mb-6 uppercase tracking-widest">EVENT STARTS IN</p>
        
        <div className="flex justify-center items-center gap-4 md:gap-8 font-headline-md">
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-7xl font-extrabold text-surface">{String(timeLeft.days).padStart(2, "0")}</span>
            <span className="text-xs md:text-sm text-surface-variant uppercase mt-2 tracking-widest">DAYS</span>
          </div>
          <span className="text-4xl md:text-6xl text-tertiary-container font-light pb-6">:</span>
          
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-7xl font-extrabold text-surface">{String(timeLeft.hours).padStart(2, "0")}</span>
            <span className="text-xs md:text-sm text-surface-variant uppercase mt-2 tracking-widest">HOURS</span>
          </div>
          <span className="text-4xl md:text-6xl text-tertiary-container font-light pb-6">:</span>
          
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-7xl font-extrabold text-surface">{String(timeLeft.minutes).padStart(2, "0")}</span>
            <span className="text-xs md:text-sm text-surface-variant uppercase mt-2 tracking-widest">MINS</span>
          </div>
          <span className="text-4xl md:text-6xl text-tertiary-container font-light pb-6 hidden md:block">:</span>
          
          <div className="flex-col items-center hidden md:flex">
            <span className="text-5xl md:text-7xl font-extrabold text-surface">{String(timeLeft.seconds).padStart(2, "0")}</span>
            <span className="text-xs md:text-sm text-surface-variant uppercase mt-2 tracking-widest">SECS</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
