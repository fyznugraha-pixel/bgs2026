"use client";

import { ReactNode } from "react";

export default function PrintButton({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <button onClick={() => window.print()} className={className}>
      {children}
    </button>
  );
}
