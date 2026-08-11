"use client";

import { ReactNode, useState } from "react";
import { toPng } from "html-to-image";

export default function DownloadImageButton({ children, className, targetId }: { children: ReactNode, className?: string, targetId: string }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const element = document.getElementById(targetId);
      if (!element) {
        throw new Error("Element not found");
      }

      // Add a small delay to ensure rendering is complete
      await new Promise((resolve) => setTimeout(resolve, 100));
      
      const dataUrl = await toPng(element, { 
        quality: 1.0, 
        pixelRatio: 2, // High resolution
        backgroundColor: "transparent"
      });
      
      const link = document.createElement('a');
      link.download = 'BGS26-Ticket.webp';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to download image", err);
      alert("Gagal mengunduh gambar tiket. Silakan coba lagi.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button onClick={handleDownload} disabled={isDownloading} className={`${className} ${isDownloading ? 'opacity-70 cursor-wait' : ''}`}>
      {isDownloading ? (
        <>
          <span className="material-symbols-outlined animate-spin" style={{ fontVariationSettings: "'FILL' 0" }}>sync</span>
          Menyimpan...
        </>
      ) : children}
    </button>
  );
}
