import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function Daftar() {
  return (
    <div className="font-body-md text-black antialiased relative min-h-screen flex flex-col bg-bgs-yellow bg-polka">

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center py-20 px-6 md:px-[64px] relative z-10">
        <div className="w-full max-w-4xl">

          <div className="text-center mb-12">
            <h1 className="font-headline-lg text-4xl md:text-5xl font-black text-black mb-3 uppercase italic transform -rotate-1">Daftar Sebagai Apa?</h1>
            <p className="font-body-md text-black font-bold max-w-md mx-auto bg-white p-4 rounded-xl comic-border comic-shadow-sm mt-4 inline-block">
              Pilih jenis pendaftaran yang sesuai dengan kebutuhanmu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visitor Card */}
            <Link
              href="/register"
              className="group bg-white rounded-3xl comic-border comic-shadow-lg p-8 md:p-10 flex flex-col items-center text-center transform -rotate-1 hover:-translate-y-2 hover:rotate-0 transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-bgs-blue comic-border comic-shadow-sm mb-6 flex items-center justify-center transform rotate-2 group-hover:rotate-0 transition-transform">
                <span className="material-symbols-outlined text-4xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>confirmation_number</span>
              </div>
              <h2 className="font-black text-2xl md:text-3xl uppercase italic mb-3">Pengunjung</h2>
              <p className="text-black font-bold text-sm md:text-base opacity-80 mb-8">
                Daftar sebagai pengunjung untuk dapatkan tiket masuk gratis ke Bandung Great Sale 2026.
              </p>
              <span className="mt-auto w-full bg-bgs-yellow text-black px-6 py-4 rounded-xl font-black uppercase tracking-wider comic-border border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2">
                Register as Pengunjung
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
              </span>
            </Link>

            {/* UMKM Card */}
            <Link
              href="/registerumkm"
              className="group bg-white rounded-3xl comic-border comic-shadow-lg p-8 md:p-10 flex flex-col items-center text-center transform rotate-1 hover:-translate-y-2 hover:rotate-0 transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-bgs-red comic-border comic-shadow-sm mb-6 flex items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-transform">
                <span className="material-symbols-outlined text-4xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
              </div>
              <h2 className="font-black text-2xl md:text-3xl uppercase italic mb-3">UMKM</h2>
              <p className="text-black font-bold text-sm md:text-base opacity-80 mb-8">
                Daftar sebagai pelaku usaha untuk dapatkan tiket masuk gratis ke Bandung Great Sale 2026.
              </p>
              <span className="mt-auto w-full bg-bgs-yellow text-black px-6 py-4 rounded-xl font-black uppercase tracking-wider comic-border border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2">
                Register as UMKM
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
              </span>
            </Link>
          </div>
        </div>
      </main>

        {/* Whoosh Section */}
        <div className="mt-4 mb-16 md:mb-24">

          <div className="text-center mb-10">
            <h2 className="blink-red-black font-headline-lg text-2xl md:text-4xl font-black uppercase italic transform -rotate-1">
              Promo Khusus Whoosh
            </h2>

        <p className="
          font-body-md
          text-black
          font-bold
          text-base
          md:text-base
          max-w-[320px]
          md:max-w-md
          mx-auto
          bg-white
          px-4
          py-4
          rounded-xl
          comic-border
          comic-shadow-sm
          mt-4
          inline-block
        ">
          Ajukan paket perjalanan rombongan dan dapatkan promo spesial Whoosh.
        </p>
          </div>


          <Link
            href="/promo-whoosh"
            className="
              group
              mx-auto
              w-[90%]
              md:max-w-xl
              bg-white
              rounded-3xl
              comic-border
              comic-shadow-lg
              p-5
              md:p-10
              flex 
              flex-col 
              items-center 
              text-center 
              transform 
              hover:-translate-y-2 
              transition-all
            "
          >

            <div className="
              w-16 h-16
              md:w-20 md:h-20
              rounded-full 
              bg-bgs-red 
              comic-border 
              comic-shadow-sm 
              mb-5 
              flex 
              items-center 
              justify-center
            ">
              <span
                className="material-symbols-outlined text-3xl md:text-4xl text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                train
              </span>
            </div>


          <h3 className="
          font-black
          text-2xl
          sm:text-xl
          md:text-3xl
          uppercase
          italic
          mb-3
        ">
          Paket Rombongan Whoosh
        </h3>


            <p className="
              text-black 
              font-bold 
              text-sm 
              md:text-base 
              opacity-80 
              mb-8 
              max-w-sm
            ">
              Nikmati perjalanan cepat dan nyaman bersama Whoosh dengan diskon khusus Bandung Great Sale 2026.
            </p>


            <span className="
              w-full
              bg-bgs-yellow 
              text-black 
              px-5 
              py-3
              md:px-6 
              md:py-4
              rounded-xl 
              font-black 
              text-sm
              md:text-base
              uppercase 
              tracking-wider 
              comic-border 
              border-4 
              border-black 
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
              transition-all 
              flex 
              items-center 
              justify-center 
              gap-2
            ">

              Ajukan Sekarang

              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                arrow_forward
              </span>

            </span>

          </Link>

        </div>

      {/* Footer */}
      <div className="w-full mt-auto relative z-10">
        <Footer />
      </div>
    </div>
  );
}
