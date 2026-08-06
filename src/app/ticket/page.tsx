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
      <div className="min-h-screen bg-[#003751] flex items-center justify-center text-white p-6 text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Tiket Tidak Ditemukan</h1>
          <p className="mb-6 text-primary-fixed">Maaf, data pendaftaran Anda tidak dapat ditemukan. Silakan daftar kembali.</p>
          <Link href="/register" className="bg-primary text-on-primary py-3 px-6 rounded-full inline-block">
            Kembali ke Pendaftaran
          </Link>
        </div>
      </div>
    );
  }

  // Format the ID for display
  const shortId = `BGS26-${registration.id.split("-")[0].toUpperCase()}-VIP`;

  return (
    <div className="bg-[#003751] min-h-screen flex flex-col font-body-md text-on-surface relative overflow-x-hidden">
      {/* Background Confetti/Festive Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center z-0">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-tertiary-container/20 to-transparent rounded-full blur-3xl absolute -top-[200px] -left-[200px]"></div>
        <div className="w-[600px] h-[600px] bg-gradient-to-bl from-primary-container/30 to-transparent rounded-full blur-3xl absolute -bottom-[100px] -right-[100px]"></div>
      </div>
      
      {/* Header / Back Navigation */}
      <header className="w-full px-6 md:px-12 py-6 flex items-center justify-start max-w-[1280px] mx-auto relative z-10">
        <Link className="flex items-center gap-2 text-primary-fixed hover:opacity-80 transition-opacity font-label-lg text-label-lg" href="/">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back_ios</span>
          Kembali ke Beranda
        </Link>
      </header>
      
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 w-full max-w-5xl mx-auto relative z-10">
        {/* Success Header */}
        <div className="text-center mb-12 flex flex-col items-center gap-4 relative">
          <div className="absolute -top-12 -left-8 text-tertiary-fixed opacity-80 material-symbols-outlined text-4xl animate-bounce">auto_awesome</div>
          <div className="absolute -bottom-8 -right-8 text-tertiary-fixed opacity-80 material-symbols-outlined text-4xl animate-pulse">auto_awesome</div>
          <div className="w-20 h-20 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container shadow-[0_0_30px_rgba(206,167,0,0.4)]">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg md:font-display-lg text-white drop-shadow-md">Berhasil Mendaftar!</h1>
          <p className="font-body-lg text-body-lg text-primary-fixed max-w-md">Tiket digital Anda sudah siap. Simpan tiket ini atau tunjukkan QR code kepada petugas saat kedatangan.</p>
        </div>
        
        {/* Ticket Container - Horizontal Layout */}
        <div 
          id="ticket-element"
          className="flex flex-col md:flex-row w-full max-w-4xl rounded-[24px] mb-12 relative overflow-hidden bg-transparent"
          style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)" }}
        >
          {/* Left Side: Event Details */}
          <div 
            className="bg-surface-container-lowest p-8 md:p-[32px] md:w-[65%] flex flex-col justify-between relative z-10 border-r-2 border-dashed border-outline-variant rounded-t-[24px] md:rounded-l-[24px] md:rounded-tr-none min-h-[400px]"
            style={{ 
              backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0, 76, 110, 0.05) 1px, transparent 0)", 
              backgroundSize: "20px 20px" 
            }}
          >
            {/* Top Cutouts (Vertical layout only visible on mobile) */}
            <div className="absolute -bottom-4 left-[50%] w-8 h-8 bg-[#003751] rounded-full -translate-x-1/2 md:hidden"></div>
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="bg-yellow-400 text-white px-4 py-1 rounded-full font-label-md text-label-md uppercase tracking-wider font-bold shadow-sm">E-TIKET</span>
                <span className="material-symbols-outlined text-primary text-3xl opacity-20">festival</span>
              </div>
              <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-2 leading-tight">Bandung Great Sale 2026</h2>
              <p className="text-on-surface-variant font-body-md mb-8">Tiket Akses Eksklusif</p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <span className="text-tertiary font-label-md text-label-md uppercase block mb-1">NAMA PESERTA</span>
                  <span className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 break-words">
                    <span className="material-symbols-outlined text-primary shrink-0">person</span>
                    {registration.name}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-tertiary font-label-md text-label-md uppercase block mb-1">ALAMAT EMAIL</span>
                  <span className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 break-all">
                    <span className="material-symbols-outlined text-primary shrink-0">mail</span>
                    {registration.email}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-4">
                <div className="flex-1">
                  <span className="text-tertiary font-label-md text-label-md uppercase block mb-1">LOKASI / GEDUNG</span>
                  <span className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                    Laswi Heritage
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-tertiary font-label-md text-label-md uppercase block mb-1">TANGGAL HADIR</span>
                  <span className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary shrink-0">calendar_month</span>
                    {registration.date}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-outline-variant/30 text-sm text-outline font-label-md">
              ID: {shortId}
            </div>
          </div>
          
          {/* Right Side: QR Stub */}
          <div className="bg-surface-bright p-8 md:p-[32px] md:w-[35%] flex flex-col items-center justify-center text-center relative z-10 rounded-b-[24px] md:rounded-r-[24px] md:rounded-bl-none min-h-[400px]">
            {/* Side Cutouts (Horizontal layout visible on desktop) */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#003751] rounded-full hidden md:block"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#003751] rounded-full hidden md:block"></div>
            <span className="text-primary font-label-lg text-label-lg uppercase mb-6 tracking-widest font-bold">SCAN DI SINI</span>
            
            {/* Real QR Code generated from UID */}
            <div className="w-56 h-56 bg-white border-4 border-primary rounded-xl p-3 mb-6 flex items-center justify-center shadow-lg relative group overflow-hidden">
              <div className="absolute inset-0 border-2 border-tertiary opacity-0 group-hover:opacity-100 transition-opacity rounded-xl m-2 pointer-events-none"></div>
              <QRCode
                value={registration.id}
                size={256}
                style={{ height: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
                fgColor="#003751"
              />
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm max-w-[200px]">
              Tunjukkan kode ini kepada petugas pendaftaran
            </p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center max-w-3xl">
          <DownloadImageButton targetId="ticket-element" className="bg-primary text-on-primary rounded-full py-4 px-8 font-label-lg text-label-lg hover:opacity-80 transition-colors flex items-center justify-center gap-2 shadow-lg">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>download</span>
            Unduh PNG
          </DownloadImageButton>
          <Link href="/" className="bg-transparent border-2 border-primary-fixed text-primary-fixed rounded-full py-4 px-8 font-label-lg text-label-lg hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>home</span>
            Kembali ke Beranda
          </Link>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-inverse-surface/90 backdrop-blur-sm text-inverse-on-surface font-body-md text-body-md w-full mt-auto relative z-10 border-t border-outline/20">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-12 w-full max-w-[1280px] mx-auto">
          <div className="mb-6 md:mb-0 text-center md:text-left flex flex-col gap-2">
            <span className="font-headline-md text-headline-md font-bold text-inverse-primary">Bandung Great Sale 2026</span>
            <span className="text-sm opacity-80">© 2026 Bandung Great Sale. Hak Cipta Dilindungi. Didukung oleh Dinas Perdagangan Kota Bandung.</span>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <span className="text-xs opacity-70">Website by</span>
              <Image src="/logo/LOGO TACTLINK.png" alt="Tactlink" width={100} height={28} className="h-6 w-auto object-contain" />
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link className="text-surface-variant hover:text-inverse-primary transition-colors opacity-80 hover:opacity-100 font-label-md text-label-md uppercase" href="#">Kebijakan Privasi</Link>
            <Link className="text-surface-variant hover:text-inverse-primary transition-colors opacity-80 hover:opacity-100 font-label-md text-label-md uppercase" href="#">Syarat & Ketentuan</Link>
            <Link className="text-surface-variant hover:text-inverse-primary transition-colors opacity-80 hover:opacity-100 font-label-md text-label-md uppercase" href="#">Bantuan</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
