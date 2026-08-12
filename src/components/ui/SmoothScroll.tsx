"use client";

import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Matikan pointer events di body saat lagi scroll (bikin mobile jauh lebih lancar!)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleScroll = () => {
      document.body.style.pointerEvents = 'none';
      
      clearTimeout(timer);
      timer = setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <ReactLenis root options={{ 
      lerp: 0.08,
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    }}>
      {children}
    </ReactLenis>
  );
}
