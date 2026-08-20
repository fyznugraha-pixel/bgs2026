"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
type PackageType = "roundtrip" | "oneway";

export default function PromoWhooshPage() {
  const ticketRef = useRef<HTMLDivElement>(null);
  const [selectedPackage, setSelectedPackage] =
    useState<PackageType>("roundtrip");

  const [showTerms, setShowTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    visitors: "10",
  });

  const minimumVisitors = selectedPackage === "roundtrip" ? 10 : 20;

  const handlePackageChange = (value: PackageType) => {
    setSelectedPackage(value);

    setFormData((current) => ({
      ...current,
      visitors: value === "roundtrip" ? "10" : "20",
    }));

    setError("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const visitorCount = Number(formData.visitors);

    if (!visitorCount || visitorCount < minimumVisitors) {
      setError(
        `Jumlah peserta untuk paket ini minimal ${minimumVisitors} orang.`
      );
      return;
    }

    setIsSubmitted(true);

    setTimeout(() => {
      document
        .getElementById("whoosh-ticket")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const ticketCode = `BGS-WHOOSH-${formData.name
    .trim()
    .replace(/\s+/g, "")
    .slice(0, 4)
    .toUpperCase() || "USER"}26`;

const saveConfirmation = useReactToPrint({
  contentRef: ticketRef,
  documentTitle: "Bukti-Konfirmasi-Whoosh",
});


  return (
    <div className="font-body-md text-black antialiased relative min-h-screen flex flex-col bg-bgs-yellow bg-polka">
      <main className="flex-grow relative z-10 px-5 md:px-[64px] py-12 md:py-16">
        <div className="w-full max-w-5xl mx-auto">

          {/* Back */}
          <div className="mb-6">
            <Link
              href="/daftar"
              className="inline-flex items-center gap-2 bg-white px-4 py-3 rounded-xl comic-border comic-shadow-sm font-black uppercase hover:-translate-y-1 transition-transform"
            >
              <span className="material-symbols-outlined">
                arrow_back
              </span>
              Kembali
            </Link>
          </div>

          {/* Hero */}
<section className="bg-white rounded-3xl comic-border comic-shadow p-5 md:p-8 mb-10 overflow-hidden relative">

  <div className="relative z-10">

    {/* Logo Partner */}
    <div className="flex justify-center items-center gap-2 md:gap-4 mb-6 md:mb-8">

      <Image
        src="/aset logo/LOGO ASET BGS 2026/LOGO ASET BGS 2026/LOGO BGS 2026.png"
        width={120}
        height={60}
        alt="BGS Logo"
        className="object-contain w-[90px] md:w-[140px] h-auto"
      />

      <span className="font-black text-lg md:text-xl">
        ×
      </span>

      <Image
        src="/aset logo/LOGO SPONSOR BGS 2026/LOGO SPONSOR BGS 2026/KCIC/Logo-Whoosh-MOK-01.png"
        width={150}
        height={60}
        alt="Whoosh Logo"
        className="object-contain w-[120px] md:w-[180px] h-auto"
      />

    </div>


    {/* Hero Content */}
    <div className="flex flex-col items-center text-center">

      <h1 className="
        font-black 
        text-4xl 
        md:text-6xl 
        uppercase 
        italic 
        leading-tight 
        max-w-4xl
      ">
        Paket Spesial Rombongan
        <br />
        Bersama Whoosh
      </h1>


      <p className="
        mt-4
        text-base
        md:text-lg
        font-bold
        max-w-3xl
        leading-relaxed
      ">
        Nikmati perjalanan rombongan menggunakan Whoosh
        dengan potongan khusus selama periode Bandung
        Great Sale 2026.
      </p>


      {/* Promo Cards */}
      <div className="
        flex 
        flex-col 
        md:flex-row 
        gap-4 
        justify-center 
        items-center 
        mt-6
      ">


        {/* Discount */}
        <div className="
          bg-bgs-red 
          text-white 
          rounded-xl 
          border-4 
          border-black 
          shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          w-[220px]
          h-[85px]
          flex
          items-center
          justify-center
        ">

          <div className="flex flex-col">

            <div className="flex items-center gap-2 leading-none">
              <span className="text-3xl font-black">
                20%
              </span>

              <span className="text-lg font-black">
                DISKON
              </span>
            </div>

            <span className="text-sm font-bold text-center mt-1">
              Khusus rombongan
            </span>

          </div>

        </div>



        {/* Date */}
        <div className="
          bg-white
          rounded-xl
          border-4
          border-black
          shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          w-[220px]
          h-[85px]
          flex
          flex-col
          items-center
          justify-center
        ">

          <span className="text-xs md:text-sm font-black">
            BERLAKU SAMPAI
          </span>

          <span className="text-lg md:text-xl text-bgs-red font-black">
            31 Agustus 2026
          </span>

        </div>


      </div>

    </div>


    {/* Terms */}
    <div className="mt-10 md:mt-20 flex justify-center md:justify-start">

      <button
        type="button"
        onClick={() => setShowTerms(!showTerms)}
        className="
          bg-white 
          comic-border 
          rounded-xl 
          px-5 
          py-3 
          font-black 
          flex 
          items-center 
          gap-2 
          shadow-[3px_3px_0_0_rgba(0,0,0,1)]
        "
      >

        <span className="material-symbols-outlined">
          description
        </span>


        Lihat Syarat & Ketentuan


        <span
          className={`material-symbols-outlined transition-transform ${
            showTerms ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>

      </button>


    </div>


    {showTerms && (
      <div className="mt-4 bg-[#fff8d7] comic-border rounded-xl p-5 font-bold">

        <ul className="space-y-2">

          <li>
            • Promo berlaku untuk pengajuan paket rombongan sesuai ketentuan.
          </li>

          <li>
            • Diskon khusus sebesar 20% selama periode promo.
          </li>

          <li>
            • Paket pulang-pergi memiliki minimum 10 peserta.
          </li>

          <li>
            • Paket sekali jalan memiliki minimum 20 peserta.
          </li>

          <li>
            • Promo berlaku sampai 31 Agustus 2026.
          </li>

        </ul>

      </div>
    )}

  </div>

</section>

          {/* Main Form Card */}
          <section className="bg-white rounded-3xl comic-border comic-shadow p-5 md:p-10">
            <div className="text-center mb-9">
              <span className="inline-block bg-bgs-blue text-white px-4 py-2 rounded-full comic-border border-[3px] font-black uppercase text-sm mb-4">
                Promo Partner
              </span>

              <h2 className="font-headline-lg text-3xl md:text-4xl font-black uppercase italic">
                Pilih Paket Rombongan
              </h2>

              <p className="font-bold opacity-70 mt-2">
                Pilih salah satu paket sebelum melanjutkan pengisian
                formulir.
              </p>
            </div>

            {/* Package Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

              {/* Option 1 */}
              <button
                type="button"
                onClick={() => handlePackageChange("roundtrip")}
                className={`text-left rounded-3xl p-6 transition-all ${
                  selectedPackage === "roundtrip"
                    ? "comic-border comic-shadow-sm bg-[#fff8d7] -rotate-1"
                    : "border-4 border-black bg-white hover:-translate-y-1"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="bg-bgs-red text-white rounded-full px-4 py-2 font-black uppercase text-sm">
                    Opsi 1
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full border-4 border-black flex items-center justify-center ${
                      selectedPackage === "roundtrip"
                        ? "bg-bgs-red"
                        : "bg-white"
                    }`}
                  >
                    {selectedPackage === "roundtrip" && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-5 mb-5">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-red-50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-bgs-red text-5xl">
                      groups
                    </span>
                  </div>

                  <div>
                    <div className="font-black text-xl">
                      Paket Rombongan
                    </div>

                    <div className="font-black text-3xl text-bgs-red">
                      10 Orang
                    </div>

                    <span className="inline-block mt-2 bg-bgs-red text-white px-3 py-1 rounded-lg font-black text-sm">
                      Round Trip / PP
                    </span>
                  </div>
                </div>

                <div className="space-y-3 font-bold">
                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-bgs-red">
                      check
                    </span>
                    Minimal 10 orang
                  </div>

                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-bgs-red">
                      check
                    </span>
                    Perjalanan pulang-pergi
                  </div>

                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-bgs-red">
                      check
                    </span>
                    Diskon 20%
                  </div>
                </div>
              </button>

              {/* Option 2 */}
              <button
                type="button"
                onClick={() => handlePackageChange("oneway")}
                className={`text-left rounded-3xl p-6 transition-all ${
                  selectedPackage === "oneway"
                    ? "comic-border comic-shadow-sm bg-[#fff8d7] rotate-1"
                    : "border-4 border-black bg-white hover:-translate-y-1"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="bg-bgs-blue text-white rounded-full px-4 py-2 font-black uppercase text-sm">
                    Opsi 2
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full border-4 border-black flex items-center justify-center ${
                      selectedPackage === "oneway"
                        ? "bg-bgs-red"
                        : "bg-white"
                    }`}
                  >
                    {selectedPackage === "oneway" && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-5 mb-5">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-red-50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-bgs-red text-5xl">
                      groups
                    </span>
                  </div>

                  <div>
                    <div className="font-black text-xl">
                      Paket Rombongan
                    </div>

                    <div className="font-black text-3xl text-bgs-red">
                      20 Orang
                    </div>

                    <span className="inline-block mt-2 bg-bgs-red text-white px-3 py-1 rounded-lg font-black text-sm">
                      One Way / Sekali Jalan
                    </span>
                  </div>
                </div>

                <div className="space-y-3 font-bold">
                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-bgs-red">
                      check
                    </span>
                    Minimal 20 orang
                  </div>

                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-bgs-red">
                      check
                    </span>
                    Perjalanan sekali jalan
                  </div>

                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-bgs-red">
                      check
                    </span>
                    Diskon 20%
                  </div>
                </div>
              </button>
            </div>

            {/* Application Form */}
            <div className="border-4 border-black rounded-3xl p-5 md:p-8 bg-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-bgs-blue text-white comic-border border-[3px] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">
                    assignment
                  </span>
                </div>

                <div>
                  <h3 className="font-black text-xl md:text-2xl">
                    Formulir Pengajuan Paket Rombongan
                  </h3>

                  <p className="font-bold opacity-70 text-sm">
                    Silakan lengkapi data berikut dengan benar.
                  </p>
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-bgs-red text-white comic-border comic-shadow-sm rounded-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    error
                  </span>

                  {error}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Name */}
                <div>
                  <label className="block text-black font-black uppercase mb-2">
                    Nama Lengkap *
                  </label>

                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
                      person
                    </span>

                    <input
                      required
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full bg-white comic-border rounded-xl py-4 pl-12 pr-4 text-black font-bold outline-none focus:ring-4 focus:ring-bgs-yellow transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-black font-black uppercase mb-2">
                    Email *
                  </label>

                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
                      mail
                    </span>

                    <input
                      required
                      type="email"
                      placeholder="email@contoh.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-white comic-border rounded-xl py-4 pl-12 pr-4 text-black font-bold outline-none focus:ring-4 focus:ring-bgs-yellow transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-black font-black uppercase mb-2">
                    Nomor WhatsApp *
                  </label>

                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
                      call
                    </span>

                    <input
                      required
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          whatsapp: e.target.value,
                        })
                      }
                      className="w-full bg-white comic-border rounded-xl py-4 pl-12 pr-4 text-black font-bold outline-none focus:ring-4 focus:ring-bgs-yellow transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                    />
                  </div>
                </div>

                {/* Visitors */}
                <div>
                  <label className="block text-black font-black uppercase mb-2">
                    Jumlah Peserta *
                  </label>

                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
                      groups
                    </span>

                    <input
                      required
                      min={minimumVisitors}
                      type="number"
                      placeholder={`Minimal ${minimumVisitors} orang`}
                      value={formData.visitors}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          visitors: e.target.value,
                        })
                      }
                      className="w-full bg-white comic-border rounded-xl py-4 pl-12 pr-4 text-black font-bold outline-none focus:ring-4 focus:ring-bgs-yellow transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                    />
                  </div>

                  <p className="mt-2 text-sm font-bold opacity-60">
                    Minimum untuk paket ini: {minimumVisitors} peserta.
                  </p>
                </div>

                {/* Submit */}
                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-bgs-red text-white font-black text-xl py-4 rounded-xl flex items-center justify-center gap-3 transition-all comic-border comic-shadow hover:-translate-y-1 hover:comic-shadow-hover uppercase"
                  >
                    Ajukan Sekarang

                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      send
                    </span>
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-sm font-bold opacity-70 text-center">
                    <span className="material-symbols-outlined text-lg">
                      lock
                    </span>

                    Data Anda hanya digunakan untuk keperluan
                    pengajuan paket rombongan.
                  </div>
                </div>
              </form>
            </div>

{/* Success Confirmation */}
{isSubmitted && (
  <div
  ref={ticketRef}
  id="whoosh-ticket"
    className="
      mt-8
      bg-green-50
      rounded-3xl
      comic-border
      p-5
      md:p-8
    "
  >

    {/* Header */}
    <div className="flex items-center gap-3 mb-6">

      <div className="
        w-12
        h-12
        rounded-full
        bg-green-600
        text-white
        flex
        items-center
        justify-center
        comic-border
      ">
        <span className="material-symbols-outlined text-3xl">
          check
        </span>
      </div>


      <h3 className="
        font-black
        text-xl
        md:text-2xl
        text-green-700
      ">
        Pengajuan Berhasil
      </h3>

    </div>



    {/* Confirmation Card */}
    <div className="
      bg-white
      rounded-2xl
      comic-border
      p-5
      md:p-6
    ">


      <h4 className="
        font-black
        text-lg
        mb-3
      ">
        Selamat!
      </h4>


      <p className="
        font-bold
        opacity-80
        mb-5
      ">
        Pengajuan Anda untuk mendapatkan potongan harga 20%
        khusus rombongan Whoosh telah berhasil diterima.
      </p>


      <p className="
        font-bold
        opacity-80
        mb-5
      ">
        Terima kasih telah melakukan pendaftaran melalui
        Bandung Great Sale.
      </p>



      {/* Info Box */}
      <div className="
        bg-green-50
        border-2
        border-green-300
        rounded-xl
        p-4
        flex
        gap-3
        items-start
        mb-5
      ">

        <span className="
          material-symbols-outlined
          text-green-700
        ">
          description
        </span>


        <p className="font-bold text-sm">
          Lampirkan bukti konfirmasi ini di loket pembelian
          tiket KCIC Bandung/Jakarta untuk mendapatkan
          potongan 20%.
        </p>

      </div>



      {/* Detail */}
<div className="space-y-3 font-bold text-sm md:text-base">

  <h5 className="font-black">
    Detail Pengajuan
  </h5>


  <div className="space-y-4 text-sm md:text-base">


    <div className="flex flex-col md:flex-row md:gap-2">
      <span className="font-black md:w-44">
        Nama
      </span>
      <span>
        : {formData.name}
      </span>
    </div>


    <div className="flex flex-col md:flex-row md:gap-2">
      <span className="font-black md:w-44">
        Paket
      </span>

      <span>
        :
        {selectedPackage === "roundtrip"
          ? " 10 Orang - Round Trip (PP)"
          : " 20 Orang - One Way"}
      </span>
    </div>


    <div className="flex flex-col md:flex-row md:gap-2">
      <span className="font-black md:w-44">
        Jumlah Pengunjung
      </span>

      <span>
        : {formData.visitors} Orang
      </span>
    </div>


    <div className="flex flex-col md:flex-row md:gap-2">
      <span className="font-black md:w-44">
        Email
      </span>

      <span className="break-all">
        : {formData.email}
      </span>
    </div>


    <div className="flex flex-col md:flex-row md:gap-2">
      <span className="font-black md:w-44">
        WhatsApp
      </span>

      <span>
        : {formData.whatsapp}
      </span>
    </div>


    <div className="flex flex-col md:flex-row md:gap-2">
      <span className="font-black md:w-44">
        Tanggal Pengajuan
      </span>

      <span>
        : {new Date().toLocaleDateString("id-ID")}
      </span>
    </div>


  </div>

</div>



      <button
type="button"
onClick={saveConfirmation}
className="
mt-6
w-full
bg-white
comic-border
rounded-xl
py-3
font-black
hover:-translate-y-1
transition-all
"
>
Simpan Bukti Konfirmasi
</button>


    </div>

  </div>
)}

            {/* Important Note */}
            <div className="mt-8 bg-red-50 border-4 border-bgs-red rounded-2xl p-5 md:p-6">
              <div className="flex items-center gap-2 font-black text-bgs-red mb-3">
                <span className="material-symbols-outlined">
                  warning
                </span>

                Catatan Penting
              </div>

              <ul className="font-bold text-sm md:text-base space-y-1">
                <li>
                  • Diskon 20% hanya berlaku untuk pembelian paket
                  rombongan sesuai ketentuan.
                </li>

                <li>
                  • Promo berlaku sampai 31 Agustus 2026.
                </li>

                <li>
                  • Bukti pengajuan bukan tiket keberangkatan Whoosh.
                </li>

                <li>
                  • Konfirmasi akhir mengikuti prosedur dan ketersediaan
                  perjalanan.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <div className="w-full mt-auto relative z-10">
        <Footer />
      </div>
    </div>
  );
}