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
  const [hasSelectedPackage, setHasSelectedPackage] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setHasSelectedPackage(true);

    setFormData((current) => ({
      ...current,
      visitors: value === "roundtrip" ? "10" : "20",
    }));

    setError("");

    setTimeout(() => {
      document
        .getElementById("whoosh-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const visitorCount = Number(formData.visitors);

    if (!visitorCount || visitorCount < minimumVisitors) {
      setError(
        `Jumlah peserta untuk paket ini minimal ${minimumVisitors} orang.`
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/register-whoosh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          packageType: selectedPackage,
          visitorCount,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal mengirim pengajuan");
      }

      setIsSubmitted(true);

      setTimeout(() => {
        document
          .getElementById("whoosh-ticket")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
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

  const packageLabel =
    selectedPackage === "roundtrip" ? "Round Trip / PP" : "One Way / Sekali Jalan";

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">

        {/* Back */}
        <div className="mb-6">
          <Link
            href="/daftar"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Kembali
          </Link>
        </div>

        {/* Hero / Keyvisual */}
        <section className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="relative min-h-[420px] sm:min-h-[380px] md:min-h-[400px]">
            {/* Background train photo, pre-cropped to frame the train's nose */}
            <Image
              src="/aset visual/kereta-whoosh-hero.png"
              alt="Kereta Cepat Whoosh"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "42% 58%" }}
              priority
            />

            {/* Fade so the photo blends into the text area */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 sm:via-white/65 to-transparent" />
            <div className="absolute inset-y-0 left-[24%] sm:left-[30%] w-24 sm:w-32 backdrop-blur-md [mask-image:linear-gradient(to_right,black,transparent)] [-webkit-mask-image:linear-gradient(to_right,black,transparent)]" />

            {/* Content */}
            <div className="relative z-10 p-6 md:p-10 max-w-md">
              <Image
                src="/aset logo/LOGO SPONSOR BGS 2026/LOGO SPONSOR BGS 2026/KCIC/Logo-Whoosh-MOK-01.png"
                width={140}
                height={40}
                alt="Whoosh"
                className="h-7 w-auto object-contain mb-5"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
                Paket Spesial Rombongan Bersama Whoosh
              </h1>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Nikmati perjalanan cepat, nyaman, dan hemat bersama rombongan Anda.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <span className="shrink-0 bg-red-700 text-white font-black text-xl leading-none px-3.5 py-2.5 rounded-lg">
                  20%
                </span>
                <p className="text-gray-700 text-sm font-semibold leading-snug">
                  Diskon 20% khusus rombongan
                  <br />
                  berlaku s/d 30 September 2026
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowTerms(!showTerms)}
                className="self-start inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
              >
                Lihat Syarat & Ketentuan
                <span
                  className={`material-symbols-outlined text-lg transition-transform ${showTerms ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
            </div>
          </div>

          {showTerms && (
            <div className="border-t border-gray-100 bg-gray-50 p-6 md:p-8">
              <h4 className="font-bold text-gray-900 mb-4">
                Syarat dan Ketentuan Diskon 20%
              </h4>

              <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-700 shrink-0" />
                  <span>
                    Diskon berlaku khusus untuk pemesanan perjalanan secara grup dengan jumlah minimal <strong className="font-semibold text-gray-900">10 orang untuk perjalanan pulang-pergi (round trip)</strong> atau <strong className="font-semibold text-gray-900">20 orang untuk perjalanan satu arah (one way)</strong>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-700 shrink-0" />
                  <span>
                    Diskon berlaku untuk rute <strong className="font-semibold text-gray-900">Jakarta–Bandung dan Bandung–Jakarta</strong>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-700 shrink-0" />
                  <span>
                    Program diskon berlaku hingga <strong className="font-semibold text-gray-900">30 September 2026</strong>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-700 shrink-0" />
                  <span>
                    Pemesanan dilakukan melalui <strong className="font-semibold text-gray-900">Contact Center Whoosh</strong>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-700 shrink-0" />
                  <span>
                    Pemesanan wajib dilakukan paling lambat <strong className="font-semibold text-gray-900">H-3 sebelum tanggal keberangkatan</strong>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-700 shrink-0" />
                  <span>
                    Pada saat melakukan pemesanan, pelanggan wajib menunjukkan <strong className="font-semibold text-gray-900">barcode/entry pass Bandung Great Sale</strong> dan <strong className="font-semibold text-gray-900">Bukti Pengajuan ini</strong> kepada <strong className="font-semibold text-gray-900">Contact Center Whoosh</strong> sebagai bukti untuk mendapatkan diskon.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-700 shrink-0" />
                  <span>
                    No. Contact center KCIC : <strong className="font-semibold text-gray-900">08118888111</strong>
                  </span>
                </li>
              </ul>
            </div>
          )}
        </section>

        {/* Package selection */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-6">
          <h2 className="font-bold text-lg text-gray-900 mb-1">
            Pilih Paket Rombongan
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Pilih salah satu paket di bawah ini untuk melanjutkan pengisian formulir.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Option 1 */}
            <button
              type="button"
              onClick={() => handlePackageChange("roundtrip")}
              className={`text-left rounded-xl p-5 transition-all border-2 ${
                hasSelectedPackage && selectedPackage === "roundtrip"
                  ? "border-red-700 bg-red-50/50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="bg-red-700 text-white rounded-md px-2.5 py-1 font-bold text-xs">
                  Opsi 1
                </span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    hasSelectedPackage && selectedPackage === "roundtrip" ? "border-red-700" : "border-gray-300"
                  }`}
                >
                  {hasSelectedPackage && selectedPackage === "roundtrip" && (
                    <div className="w-2.5 h-2.5 bg-red-700 rounded-full" />
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 shrink-0 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-700 text-3xl">
                    groups
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500">Paket Rombongan</div>
                  <div className="font-bold text-2xl text-gray-900">10 Orang</div>
                  <span className="inline-block mt-1 bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-semibold">
                    Round Trip / PP
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-sm text-gray-600">
                <div className="flex gap-2 items-center">
                  <span className="material-symbols-outlined text-red-700 text-base">check</span>
                  Minimal 10 orang
                </div>
                <div className="flex gap-2 items-center">
                  <span className="material-symbols-outlined text-red-700 text-base">check</span>
                  Perjalanan pulang-pergi
                </div>
                <div className="flex gap-2 items-center">
                  <span className="material-symbols-outlined text-red-700 text-base">check</span>
                  Diskon 20%
                </div>
              </div>
            </button>

            {/* Option 2 */}
            <button
              type="button"
              onClick={() => handlePackageChange("oneway")}
              className={`text-left rounded-xl p-5 transition-all border-2 ${
                hasSelectedPackage && selectedPackage === "oneway"
                  ? "border-red-700 bg-red-50/50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="bg-red-700 text-white rounded-md px-2.5 py-1 font-bold text-xs">
                  Opsi 2
                </span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    hasSelectedPackage && selectedPackage === "oneway" ? "border-red-700" : "border-gray-300"
                  }`}
                >
                  {hasSelectedPackage && selectedPackage === "oneway" && (
                    <div className="w-2.5 h-2.5 bg-red-700 rounded-full" />
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 shrink-0 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-700 text-3xl">
                    groups
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500">Paket Rombongan</div>
                  <div className="font-bold text-2xl text-gray-900">20 Orang</div>
                  <span className="inline-block mt-1 bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-semibold">
                    One Way / Sekali Jalan
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-sm text-gray-600">
                <div className="flex gap-2 items-center">
                  <span className="material-symbols-outlined text-red-700 text-base">check</span>
                  Minimal 20 orang
                </div>
                <div className="flex gap-2 items-center">
                  <span className="material-symbols-outlined text-red-700 text-base">check</span>
                  Perjalanan sekali jalan
                </div>
                <div className="flex gap-2 items-center">
                  <span className="material-symbols-outlined text-red-700 text-base">check</span>
                  Diskon 20%
                </div>
              </div>
            </button>
          </div>
        </section>

        {/* Application Form */}
        {hasSelectedPackage && (
        <section id="whoosh-form" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 shrink-0 rounded-full bg-red-50 text-red-700 flex items-center justify-center">
              <span className="material-symbols-outlined">assignment</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">
                Formulir Pendaftaran Paket Rombongan {minimumVisitors} Orang ({packageLabel})
              </h3>
              <p className="text-xs text-gray-500">
                Silakan lengkapi data di bawah ini dengan benar.
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">error</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold text-sm mb-2">
                Nama Lengkap <span className="text-red-700">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="Masukkan nama lengkap"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 font-medium outline-none focus:border-red-700 focus:ring-2 focus:ring-red-100 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold text-sm mb-2">
                Email <span className="text-red-700">*</span>
              </label>
              <input
                required
                type="email"
                placeholder="email@contoh.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 font-medium outline-none focus:border-red-700 focus:ring-2 focus:ring-red-100 transition-all"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-gray-700 font-semibold text-sm mb-2">
                Nomor WhatsApp <span className="text-red-700">*</span>
              </label>
              <input
                required
                type="tel"
                placeholder="Contoh: 0812-3456-7890"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 font-medium outline-none focus:border-red-700 focus:ring-2 focus:ring-red-100 transition-all"
              />
            </div>

            {/* Visitors */}
            <div>
              <label className="block text-gray-700 font-semibold text-sm mb-2">
                Jumlah Pengunjung <span className="text-red-700">*</span>
              </label>
              <input
                required
                min={minimumVisitors}
                type="number"
                placeholder="Masukkan jumlah pengunjung"
                value={formData.visitors}
                onChange={(e) => setFormData({ ...formData, visitors: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 font-medium outline-none focus:border-red-700 focus:ring-2 focus:ring-red-100 transition-all"
              />
              <p className="mt-1.5 text-xs text-gray-400">
                Minimum untuk paket ini: {minimumVisitors} peserta.
              </p>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-red-700 hover:bg-red-800 text-white font-bold text-base py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? "Mengirim..." : "Daftarkan Voucher"}
                {!isSubmitting && <span className="material-symbols-outlined text-lg">send</span>}
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-gray-400 text-center">
                <span className="material-symbols-outlined text-base">lock</span>
                Data Anda hanya digunakan untuk keperluan pengajuan paket rombongan.
              </div>
            </div>
          </form>
        </section>
        )}

        {/* Success + Confirmation */}
        {isSubmitted && (
          <div ref={ticketRef} id="whoosh-ticket" className="space-y-6 mb-6">
            {/* Success */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Pengajuan Berhasil!</h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed mb-5">
                Terima kasih! Pengajuan voucher rombongan Anda telah kami terima. Tim kami akan segera menghubungi Anda untuk konfirmasi lebih lanjut.
              </p>
              <Link
                href="/daftar"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 rounded-xl px-5 py-2.5 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Kembali ke Promo
              </Link>
            </section>

            {/* Confirmation Receipt */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-2 text-green-600 font-bold mb-5">
                <span className="material-symbols-outlined">check_circle</span>
                Bukti Konfirmasi Pengajuan
              </div>

              <h4 className="font-bold text-gray-900 text-lg mb-3">Selamat!</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Pengajuan Anda untuk mendapatkan potongan harga 20% khusus rombongan Whoosh telah berhasil diterima.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Terima kasih telah melakukan pendaftaran melalui Bandung Great Sale.
              </p>

              <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex gap-3 items-start mb-6">
                <span className="material-symbols-outlined text-red-700">description</span>
                <p className="text-sm text-gray-700 font-medium">
                  Lampirkan bukti konfirmasi ini di loket pembelian tiket KCIC Bandung/Jakarta untuk mendapatkan potongan 20%.
                </p>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-gray-900 mb-3">Detail Pengajuan</h5>
                <div className="space-y-2.5 text-sm">
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-semibold text-gray-500 sm:w-40 shrink-0">Nama</span>
                    <span className="text-gray-900">: {formData.name}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-semibold text-gray-500 sm:w-40 shrink-0">Paket</span>
                    <span className="text-gray-900">
                      : {selectedPackage === "roundtrip" ? "10 Orang - Round Trip (PP)" : "20 Orang - One Way"}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-semibold text-gray-500 sm:w-40 shrink-0">Jumlah Pengunjung</span>
                    <span className="text-gray-900">: {formData.visitors} Orang</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-semibold text-gray-500 sm:w-40 shrink-0">Email</span>
                    <span className="text-gray-900 break-all">: {formData.email}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-semibold text-gray-500 sm:w-40 shrink-0">WhatsApp</span>
                    <span className="text-gray-900">: {formData.whatsapp}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-semibold text-gray-500 sm:w-40 shrink-0">Tanggal Pengajuan</span>
                    <span className="text-gray-900">: {new Date().toLocaleDateString("id-ID")}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={saveConfirmation}
                className="w-full border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold rounded-xl py-3 transition-colors"
              >
                Simpan Bukti Konfirmasi
              </button>
            </section>
          </div>
        )}

        {/* Important Note */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-5 md:p-6">
          <div className="flex items-center gap-2 font-bold text-amber-800 mb-3">
            <span className="material-symbols-outlined">warning</span>
            Catatan Penting
          </div>
          <ul className="text-sm text-amber-800 space-y-1.5">
            <li>
              • Diskon 20% hanya berlaku untuk pembelian paket rombongan sesuai ketentuan.
            </li>
            <li>
              • Promo berlaku sampai 30 September 2026.
            </li>
            <li>
              • Bukti pengajuan bukan tiket keberangkatan Whoosh.
            </li>
            <li>
              • Konfirmasi akhir mengikuti prosedur dan ketersediaan perjalanan.
            </li>
          </ul>
        </section>

      </main>

      <Footer />
    </div>
  );
}
