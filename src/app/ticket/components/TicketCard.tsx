"use client";

import QRCode from "react-qr-code";

export default function TicketCard({ registration }: { registration: any }) {
  const shortId = `BGS26-${registration.id.split("-")[0].toUpperCase()}-VIP`;

  return (
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
  );
}
