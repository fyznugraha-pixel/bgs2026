import Link from "next/link";
import prisma from "@/lib/prisma";
import { UMKM_REGISTRATION_ENABLED, UMKM_REGISTRATION_QUOTA } from "@/lib/constants";
import SearchTicketForm from "@/app/register/components/SearchTicketForm";
import RegistrationFormUmkm from "./components/RegistrationFormUmkm";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-dynamic";

export default async function RegisterUmkm() {
  const totalUmkm = await prisma.umkmRegistration.count();
  const isQuotaFull = !UMKM_REGISTRATION_ENABLED || totalUmkm >= UMKM_REGISTRATION_QUOTA;

  return (
    <div className="font-body-md text-black antialiased relative min-h-screen flex flex-col bg-bgs-yellow bg-polka">

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center py-20 px-6 md:px-[64px] relative z-30">
        {/* Registration Card */}
        <div className="w-full max-w-[672px] bg-white rounded-3xl comic-border comic-shadow-lg relative transform rotate-1 mt-8">

          <div className="p-8 md:p-12 relative z-10">
            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 bg-bgs-red text-white px-6 py-2 rounded-2xl comic-border comic-shadow-sm transform -rotate-6 font-black text-lg uppercase flex items-center gap-2 z-20">
              <span className="material-symbols-outlined text-[24px]">storefront</span>
              UMKM
            </div>

            <div className="text-center mb-10 relative z-10 mt-2">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-bgs-yellow comic-border comic-shadow-sm mb-5 transform rotate-2">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
              </div>
              <h1 className="font-headline-lg text-4xl md:text-5xl font-black text-black mb-3 uppercase italic transform -rotate-1">Daftar Sebagai UMKM</h1>
              <p className="font-body-md text-black font-bold max-w-md mx-auto bg-white p-4 rounded-xl comic-border comic-shadow-sm mt-4">
                Bawa produk usahamu ke festival belanja paling dinanti tahun ini. Isi data usaha Anda di bawah ini!
              </p>
            </div>

          <SearchTicketForm />

          {isQuotaFull ? (
            <div className="mt-6 text-center relative z-10">
              <div className="bg-bgs-red text-white p-6 rounded-2xl comic-border comic-shadow-sm transform -rotate-1">
                <span className="material-symbols-outlined text-4xl mb-2 block">block</span>
                <h2 className="font-black text-xl uppercase italic mb-2">Pendaftaran UMKM Ditutup</h2>
                <p className="font-bold text-sm opacity-90">
                  Kuota pendaftar UMKM sudah penuh. Kamu masih bisa hadir sebagai pengunjung!
                </p>
              </div>
              <Link
                href="/register"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-bgs-yellow text-black px-6 py-4 rounded-xl font-black uppercase tracking-wider comic-border border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Daftar Sebagai Visitor
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
              </Link>
            </div>
          ) : (
            <RegistrationFormUmkm />
          )}

          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="w-full mt-auto relative z-10">
        <Footer />
      </div>
    </div>
  );
}
