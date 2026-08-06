"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-variant text-on-surface font-body-md w-full pt-16 pb-8 border-t border-outline/20">
      <div className="px-margin-mobile md:px-margin-desktop w-full max-w-[1536px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Image 
              src="/logo/Logo BGS 2026.webp" 
              alt="Bandung Great Sale 2026" 
              width={140} 
              height={56} 
              className="h-12 w-auto object-contain mb-4" 
            />
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              Pemerintah Kota Bandung × Dinas Perdagangan Kota Bandung.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Image src="/logo/Logo Pemkot Bandung.webp" alt="Pemkot Bandung" width={40} height={40} className="h-8 w-auto object-contain" />
              <Image src="/logo/Logo Disdagin 2026 Final.webp" alt="Dinas Perdagangan" width={80} height={40} className="h-8 w-auto object-contain" />
              <Image src="/logo/logo bandung horisontal.webp" alt="Kota Bandung" width={80} height={40} className="h-8 w-auto object-contain" />
              <Image src="/logo/LOGO TACTLINK.png" alt="Tactlink" width={100} height={30} className="h-8 w-auto object-contain" />
            </div>
          </div>
          
          {/* Links Section */}
          <div className="w-full md:w-2/3 lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><a className="hover:text-secondary transition-colors" href="#">Tentang</a></li>
                <li><a className="hover:text-secondary transition-colors" href="#">Lineup</a></li>
                <li><a className="hover:text-secondary transition-colors" href="#">Rute Konvoi</a></li>
                <li><a className="hover:text-secondary transition-colors" href="#tenant">Tenant</a></li>
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
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><a className="hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-outline/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm text-on-surface-variant opacity-80 text-center md:text-left">
              © 2026 Bandung Great Sale. Hak Cipta Dilindungi. Didukung oleh Dinas Perdagangan Kota Bandung.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <span className="text-xs opacity-70">Website by</span>
              <Image src="/logo/LOGO TACTLINK.png" alt="Tactlink" width={100} height={28} className="h-6 w-auto object-contain" />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="https://byfayiz.web.id/portofolio" target="_blank" rel="author noopener noreferrer" className="text-sm text-on-surface-variant/60 hover:text-secondary transition-colors mt-2 md:mt-0">
              Made by <span className="font-bold">Fayiz Apriwansyah Nugraha</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
