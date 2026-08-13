import Link from "next/link";

export default function TicketNotFound() {
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
