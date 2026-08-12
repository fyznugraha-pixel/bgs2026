"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bgs-blue bg-halftone text-white font-body-md w-full pt-16 pb-8 border-t-8 border-black">
      <div className="px-margin-mobile md:px-margin-desktop w-full max-w-[1536px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white p-4 rounded-xl comic-border inline-block transform -rotate-2 mb-6">
              <Image 
                src="/logo/Logo BGS 2026.webp" 
                alt="Bandung Great Sale 2026" 
                width={140} 
                height={56} 
                className="h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-base font-bold bg-white text-black p-4 rounded-xl comic-border inline-block transform rotate-1 mb-6">
              Pemerintah Kota Bandung × Dinas Perdagangan Kota Bandung.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 bg-white p-4 rounded-xl comic-border comic-shadow-sm">
              <Image src="/logo/Logo Pemkot Bandung.webp" alt="Pemkot Bandung" width={40} height={40} className="h-8 w-auto object-contain drop-shadow-md" />
              <Image src="/logo/logo bandung horisontal.webp" alt="Kota Bandung" width={100} height={40} className="h-8 w-auto object-contain drop-shadow-md" />
              <Image src="/logo/Logo Disdagin 2026 Final.webp" alt="Dinas Perdagangan" width={120} height={40} className="h-8 w-auto object-contain drop-shadow-md" />
              <Image src="/logo/logo-tactlink.webp" alt="Tactlink" width={120} height={40} className="h-10 w-auto object-contain drop-shadow-md" />
            </div>
          </div>
          
          {/* Links Section */}
          <div className="w-full md:w-2/3 lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4">
            <div>
              <h4 className="font-black text-bgs-yellow mb-4 uppercase tracking-wider text-xl italic">Quick Links</h4>
              <ul className="space-y-3 font-bold text-lg">
                <li><a className="hover:text-bgs-red transition-colors" href="#">Tentang</a></li>
                <li><a className="hover:text-bgs-red transition-colors" href="#">Lineup</a></li>
                <li><a className="hover:text-bgs-red transition-colors" href="#">Rute Konvoi</a></li>
                <li><a className="hover:text-bgs-red transition-colors" href="#tenant">Tenant</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-bgs-yellow mb-4 uppercase tracking-wider text-xl italic">Partnership & Support</h4>
              <ul className="space-y-3 font-bold text-lg">
                <li className="font-black text-white">NBA Indonesia Event</li>
                <li>Jl. H. Bardan Raya No. 33A, Bandung 40287, West Jawa</li>
                <li>+62 813 953 382 05</li>
                <li><a className="hover:text-bgs-blue transition-colors" href="mailto:nbaorganizer@gmail.com">nbaorganizer@gmail.com</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-black text-bgs-yellow mb-4 uppercase tracking-wider text-xl italic">Legal</h4>
              <ul className="space-y-3 font-bold text-lg">
                <li><a className="hover:text-bgs-green transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-bgs-green transition-colors" href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t-4 border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-bold text-center md:text-left">
              © 2026 Bandung Great Sale. Hak Cipta Dilindungi. Didukung oleh Dinas Perdagangan Kota Bandung.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <span className="font-bold opacity-70">Website by</span>
              <Image src="/logo/logo-tactlink.webp" alt="Tactlink" width={100} height={28} className="h-6 w-auto object-contain brightness-0 invert" />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="https://byfayiz.web.id/portofolio" target="_blank" rel="author noopener noreferrer" className="font-bold hover:text-bgs-yellow transition-colors mt-2 md:mt-0">
              Made by <span className="font-black">Fayiz Apriwansyah Nugraha</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
