"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-variant text-on-surface font-body-md w-full pt-16 pb-8 border-t border-outline/20">
      <div className="px-margin-mobile md:px-margin-desktop w-full max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Image 
              src="/logo/LOGO BGS 2026.webp" 
              alt="Bandung Great Sale 2026" 
              width={140} 
              height={56} 
              className="h-12 w-auto object-contain mb-4" 
            />
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Pemerintah Kota Bandung × Dinas Perdagangan Kota Bandung.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a className="hover:text-secondary transition-colors" href="#">Tentang</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Lineup</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Rute Konvoi</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Tenant</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a className="hover:text-secondary transition-colors" href="#">FAQ</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Partnership</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a className="hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-outline/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm text-on-surface-variant opacity-80 text-center md:text-left">
              © 2026 Bandung Great Sale. Hak Cipta Dilindungi. Didukung oleh Dinas Perdagangan Kota Bandung.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <span className="text-xs opacity-70">Website by</span>
              <Image src="/logo/LOGO TACTLINK.png" alt="Tactlink" width={80} height={20} className="h-4 w-auto object-contain" />
            </div>
          </div>
          <div className="flex gap-4 text-primary">
            <a className="hover:text-secondary" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="hover:text-secondary" href="#"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
