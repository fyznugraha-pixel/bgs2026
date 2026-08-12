"use client";

import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Hanya menggunakan ReactLenis dengan opsi standar untuk performa terbaik
  return (
    <ReactLenis root options={{ 
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    }}>
      {children}
    </ReactLenis>
  );
}
