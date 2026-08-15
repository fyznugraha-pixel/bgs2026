import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-halftone flex flex-col font-body-md relative overflow-x-hidden pt-24 pb-12">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-bgs-yellow rounded-full comic-border border-4 border-black mix-blend-multiply opacity-50 blur-lg animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-bgs-blue rounded-full comic-border border-4 border-black mix-blend-multiply opacity-50 blur-lg animate-pulse delay-700" />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 relative z-10">
        <div className="bg-white text-black p-8 md:p-12 rounded-2xl comic-border border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full text-center relative overflow-hidden transform md:-rotate-1">
          {/* Decorative shapes inside card */}
          <div className="absolute -top-10 -right-10 text-bgs-yellow opacity-20">
            <span className="material-symbols-outlined text-[150px]" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h1 className="font-black text-7xl md:text-9xl text-bgs-red mb-2 uppercase italic tracking-tighter text-outline-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              404
            </h1>
            
            <div className="inline-block bg-bgs-blue text-white px-4 py-2 rounded-xl comic-border border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-2 mb-6">
              <h2 className="font-black text-xl md:text-2xl uppercase tracking-widest">
                NYASAR YA, BOS?
              </h2>
            </div>
            
            <p className="mb-8 font-bold text-gray-700 text-lg md:text-xl max-w-md mx-auto">
              Waduh, halaman yang Anda cari sepertinya hilang ditelan diskon gede-gedean atau salah alamat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Link 
                href="/" 
                className="bg-bgs-yellow text-black py-4 px-8 rounded-xl font-black uppercase tracking-wider comic-border border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined font-black">home</span>
                Balik ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
