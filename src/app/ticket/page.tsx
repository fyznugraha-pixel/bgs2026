import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import QRCode from "react-qr-code";
import { redirect } from "next/navigation";
import DownloadImageButton from "@/components/DownloadImageButton";

export default async function Ticket({ searchParams }: { searchParams: Promise<{ id?: string }> | { id?: string } }) {
  const params = await searchParams;
  const id = params?.id;

  if (!id) {
    redirect("/register");
  }

  const registration = await prisma.registration.findUnique({
    where: { id },
  });

  if (!registration) {
    return (
      <div className="min-h-screen bg-halftone flex items-center justify-center text-white p-6 text-center">
        <div className="bg-white text-black p-8 rounded-2xl comic-border border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-md">
          <h1 className="text-3xl font-black mb-4 uppercase italic">Tiket Ga Ketemu!</h1>
          <p className="mb-8 font-bold text-gray-700">Waduh, data pendaftaran Anda hilang atau salah alamat. Silakan daftar lagi ya.</p>
          <Link href="/register" className="bg-bgs-yellow text-black py-4 px-8 rounded-xl inline-block font-black uppercase tracking-wider comic-border border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            Daftar Ulang
          </Link>
        </div>
      </div>
    );
  }

  // Format the ID for display
  const shortId = `BGS26-${registration.id.split("-")[0].toUpperCase()}-VIP`;

  return (
    <div className="bg-halftone min-h-screen flex flex-col font-body-md relative overflow-x-hidden">
      
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 md:py-12 w-full max-w-5xl mx-auto relative z-10">
        {/* Success Header */}
        <div className="text-center mb-12 flex flex-col items-center gap-4 relative">
          <div className="w-20 h-20 rounded-full bg-bgs-green comic-border border-4 border-black flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="material-symbols-outlined text-5xl font-black">check_circle</span>
          </div>
          <h1 className="font-black text-4xl md:text-6xl text-white uppercase tracking-tighter italic text-outline-black drop-shadow-xl transform -rotate-2">
            BERHASIL<br/><span className="text-bgs-yellow">MENDAFTAR!</span>
          </h1>
        </div>
        
        {/* Ticket Container */}
        <div 
          id="ticket-element"
          className="flex flex-col md:flex-row w-full max-w-5xl rounded-2xl mb-12 relative overflow-hidden bg-white comic-border border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform md:-rotate-1"
        >
          {/* Left Side: Event Details */}
          <div className="p-5 md:p-8 md:w-[70%] flex flex-col justify-between relative bg-white bg-[radial-gradient(#cbd5e1_3px,transparent_3px)] [background-size:24px_24px]">
            <div>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <span className="bg-bgs-red text-white px-3 py-1 rounded-lg font-black text-[10px] sm:text-xs uppercase tracking-wider comic-border border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">E-TIKET</span>
                <span className="material-symbols-outlined text-bgs-blue text-3xl font-black" style={{ fontVariationSettings: "'FILL' 1" }}>local_activity</span>
              </div>
              
              <h2 className="font-black text-2xl md:text-3xl text-bgs-blue mb-1 leading-tight uppercase italic tracking-tighter">Bandung Great Sale 2026</h2>
              <p className="text-gray-600 font-bold mb-4 md:mb-6 uppercase tracking-widest text-[10px] sm:text-xs">Tiket Akses Eksklusif</p>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-2 md:mb-4">
                <div className="bg-white p-3 md:p-3 rounded-xl comic-border border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-bgs-red font-black text-[9px] md:text-[10px] uppercase block mb-1">NAMA PESERTA</span>
                  <span className="font-bold text-black flex flex-col md:flex-row md:items-center gap-1 md:gap-2 break-words text-xs md:text-base">
                    <span className="material-symbols-outlined text-bgs-blue font-black text-sm md:text-base hidden md:block">person</span>
                    {registration.name}
                  </span>
                </div>
                <div className="bg-white p-3 md:p-3 rounded-xl comic-border border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-bgs-red font-black text-[9px] md:text-[10px] uppercase block mb-1">ALAMAT EMAIL</span>
                  <span className="font-bold text-black flex flex-col md:flex-row md:items-center gap-1 md:gap-2 break-all text-[10px] md:text-sm">
                    <span className="material-symbols-outlined text-bgs-blue font-black text-sm md:text-base hidden md:block">mail</span>
                    {registration.email}
                  </span>
                </div>
                <div className="bg-white p-3 md:p-3 rounded-xl comic-border border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-bgs-red font-black text-[9px] md:text-[10px] uppercase block mb-1">LOKASI / GEDUNG</span>
                  <span className="font-bold text-black flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-xs md:text-base leading-tight">
                    <span className="material-symbols-outlined text-bgs-blue font-black text-sm md:text-base hidden md:block">location_on</span>
                    Laswi Heritage
                  </span>
                </div>
                <div className="bg-white p-3 md:p-3 rounded-xl comic-border border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-bgs-red font-black text-[9px] md:text-[10px] uppercase block mb-1">TANGGAL HADIR</span>
                  <span className="font-bold text-black flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-xs md:text-base leading-tight">
                    <span className="material-symbols-outlined text-bgs-blue font-black text-sm md:text-base hidden md:block">calendar_month</span>
                    {registration.date}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t-4 border-dashed border-gray-300 font-black text-gray-400 text-xs md:text-sm flex justify-between items-center">
              <span>ID: {shortId}</span>
              <span className="uppercase tracking-widest">{registration.whatsapp ? "TERVERIFIKASI" : "STANDAR"}</span>
            </div>
          </div>
          
          {/* Right Side: QR Stub */}
          <div className="bg-bgs-yellow p-5 md:p-8 md:w-[30%] flex flex-col items-center justify-center text-center relative border-t-8 md:border-t-0 md:border-l-8 border-dashed border-black">
            <span className="text-black font-black text-base md:text-lg uppercase mb-4 tracking-widest bg-white px-3 py-1 rounded-xl comic-border border-2 border-black transform rotate-2">SCAN SINI!</span>
            
            <div className="w-40 h-40 md:w-48 md:h-48 bg-white border-4 border-black rounded-xl p-2 md:p-3 mb-4 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <QRCode
                value={registration.id}
                size={192}
                style={{ height: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
                fgColor="#000000"
              />
            </div>
            <p className="font-bold text-black text-sm max-w-[200px] bg-white p-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              Tunjukkan kode ini kepada petugas
            </p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center max-w-3xl mt-4">
          <DownloadImageButton targetId="ticket-element" className="bg-bgs-blue text-white rounded-xl py-4 px-8 font-black text-lg uppercase tracking-wider hover:-translate-y-1 hover:-translate-x-1 transition-transform flex items-center justify-center gap-2 comic-border border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <span className="material-symbols-outlined font-black">download</span>
            Simpan Tiket
          </DownloadImageButton>
          <Link href="/" className="bg-white text-black rounded-xl py-4 px-8 font-black text-lg uppercase tracking-wider hover:-translate-y-1 hover:-translate-x-1 transition-transform flex items-center justify-center gap-2 comic-border border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <span className="material-symbols-outlined font-black">home</span>
            Ke Beranda
          </Link>
        </div>
      </main>
      
    </div>
  );
}
