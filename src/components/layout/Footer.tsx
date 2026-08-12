"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bgs-blue bg-halftone text-white font-body-md w-full pt-16 pb-8 border-t-8 border-black">
      <div className="px-margin-mobile md:px-margin-desktop w-full max-w-[1536px] mx-auto">
        <div className="flex flex-col mb-16 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
            <div className="bg-white p-4 rounded-xl comic-border inline-block transform -rotate-2">
              <Image 
                src="/aset logo/LOGO ASET BGS 2026/LOGO ASET BGS 2026/LOGO BGS 2026.png" 
                alt="Bandung Great Sale 2026" 
                width={180} 
                height={64} 
                className="h-14 md:h-16 w-auto object-contain" 
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 bg-white p-4 rounded-xl comic-border comic-shadow-sm">
              <Image src="/logo/logo-tactlink.webp" alt="Tactlink" width={140} height={48} className="h-12 w-auto object-contain drop-shadow-md" />
              <div className="w-px h-10 bg-gray-300 hidden sm:block"></div>
              <Image src="/logo/logo nba.avif" alt="NBA" width={100} height={32} className="h-8 w-auto object-contain drop-shadow-md brightness-0" />
            </div>
          </div>
          
          {/* Social Media Section */}
          <div className="w-full text-left">
            <h4 className="font-black text-bgs-yellow mb-2 uppercase tracking-wider text-xl flex items-center gap-2">
              <span className="material-symbols-outlined">photo_camera</span>
              OFFICIAL INFORMATION CHANNELS
            </h4>
            <p className="mb-6 font-medium text-white/90">Untuk update resmi terbaru, pengumuman, dan informasi pengunjung, ikuti channel Instagram berikut.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <a href="https://www.instagram.com/bdg_greatsale/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-xl comic-border comic-shadow-sm hover:-translate-y-1 hover:-translate-x-1 hover:comic-shadow transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform border-2 border-black">
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 0" }}>photo_camera</span>
                </div>
                <div className="flex-grow">
                  <h5 className="font-black text-lg text-black group-hover:text-bgs-blue transition-colors leading-tight">@bdg_greatsale</h5>
                  <p className="text-sm text-gray-700 font-bold leading-tight mt-1">Bandung Great Sale</p>
                </div>
                <div className="bg-bgs-yellow p-1 rounded-full border-2 border-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-black text-sm font-bold">open_in_new</span>
                </div>
              </a>
              
              {/* Card 2 */}
              <a href="https://www.instagram.com/bdg.perdaganganindustri/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-xl comic-border comic-shadow-sm hover:-translate-y-1 hover:-translate-x-1 hover:comic-shadow transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform border-2 border-black">
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 0" }}>photo_camera</span>
                </div>
                <div className="flex-grow">
                  <h5 className="font-black text-lg text-black group-hover:text-bgs-blue transition-colors leading-tight">@bdg.perdaganganindustri</h5>
                  <p className="text-sm text-gray-700 font-bold leading-tight mt-1">Disdagin Kota Bandung</p>
                </div>
                <div className="bg-bgs-yellow p-1 rounded-full border-2 border-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-black text-sm font-bold">open_in_new</span>
                </div>
              </a>
              
              {/* Card 3 */}
              <a href="https://www.instagram.com/tic.bandung/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-xl comic-border comic-shadow-sm hover:-translate-y-1 hover:-translate-x-1 hover:comic-shadow transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform border-2 border-black">
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 0" }}>photo_camera</span>
                </div>
                <div className="flex-grow">
                  <h5 className="font-black text-lg text-black group-hover:text-bgs-blue transition-colors leading-tight">@tic.bandung</h5>
                  <p className="text-sm text-gray-700 font-bold leading-tight mt-1">Tourist Info Center BDG</p>
                </div>
                <div className="bg-bgs-yellow p-1 rounded-full border-2 border-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-black text-sm font-bold">open_in_new</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t-4 border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-bold text-center md:text-left">
              © 2026 Bandung Great Sale. Hak Cipta Dilindungi. Didukung oleh Dinas Perdagangan dan Perindustrian Kota Bandung.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <span className="font-bold opacity-70 italic">Powered by</span>
              <Image src="/logo/logo-tactlink.webp" alt="Tactlink" width={100} height={28} className="h-6 w-auto object-contain brightness-0 invert" />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="https://byfayiz.web.id/portofolio" target="_blank" rel="author noopener noreferrer" className="font-bold hover:text-bgs-yellow transition-colors mt-2 md:mt-0">
              Dev by <span className="font-black">Fayiz Apriwansyah Nugraha</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
