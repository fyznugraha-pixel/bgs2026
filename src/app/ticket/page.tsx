import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import DownloadImageButton from "@/components/DownloadImageButton";
import TicketNotFound from "./components/TicketNotFound";
import TicketCard from "./components/TicketCard";

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
    return <TicketNotFound />;
  }

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
        
        <TicketCard registration={registration} />
        
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
