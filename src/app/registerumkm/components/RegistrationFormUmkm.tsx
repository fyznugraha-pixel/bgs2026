"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
  "Fashion",
  "Kuliner",
  "Kecantikan & Kesehatan",
  "Kerajinan / Craft",
  "Jasa",
  "Lainnya",
];

export default function RegistrationFormUmkm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    businessName: "",
    category: "",
    date: "23 Agustus 2026",
  });

  useEffect(() => {
    if (!isCategoryDropdownOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(e.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCategoryDropdownOpen]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.category) {
      setError("Kategori usaha wajib dipilih");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/register-umkm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal mendaftar");
      }

      router.push("/ticket?id=" + data.registration.id);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div className="mb-6 p-4 bg-bgs-red text-white comic-border comic-shadow-sm rounded-xl font-bold flex items-center gap-2 relative z-10 transform -rotate-1">
          <span className="material-symbols-outlined">error</span>
          {error}
        </div>
      )}

      <form onSubmit={handleRegister} className="space-y-6 relative z-10 mt-6 text-left">
        {/* Info: Fixed Date */}
        <div className="relative w-full">
          <label className="block text-black font-black uppercase mb-2 text-lg">Tanggal Kehadiran</label>

          <div className="w-full bg-white comic-border p-4 rounded-xl font-bold text-black flex justify-between items-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-black">calendar_today</span>
              {formData.date}
            </div>
          </div>
        </div>

        {/* Input: Full Name */}
        <div className="relative w-full">
          <label className="block text-black font-black uppercase mb-2 text-lg">Nama Lengkap</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black pointer-events-none">
              <span className="material-symbols-outlined">person</span>
            </div>
            <input
              className="w-full bg-white comic-border rounded-xl py-4 pl-12 pr-4 text-black font-bold outline-none focus:ring-4 focus:ring-bgs-yellow transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
              id="fullname"
              placeholder="Masukkan nama lengkap"
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </div>

        {/* Input: Email */}
        <div className="relative w-full">
          <label className="block text-black font-black uppercase mb-2 text-lg">Alamat Email</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black pointer-events-none">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <input
              className="w-full bg-white comic-border rounded-xl py-4 pl-12 pr-4 text-black font-bold outline-none focus:ring-4 focus:ring-bgs-yellow transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
              id="email"
              placeholder="email@contoh.com"
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        {/* Input: WhatsApp */}
        <div className="relative w-full">
          <label className="block text-black font-black uppercase mb-2 text-lg">Nomor WhatsApp</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black pointer-events-none">
              <span className="material-symbols-outlined">call</span>
            </div>
            <input
              className="w-full bg-white comic-border rounded-xl py-4 pl-12 pr-4 text-black font-bold outline-none focus:ring-4 focus:ring-bgs-yellow transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
              id="whatsapp"
              placeholder="08xxxxxxxxxx"
              required
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            />
          </div>
        </div>

        {/* Input: Business Name */}
        <div className="relative w-full">
          <label className="block text-black font-black uppercase mb-2 text-lg">Nama Usaha</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black pointer-events-none">
              <span className="material-symbols-outlined">storefront</span>
            </div>
            <input
              className="w-full bg-white comic-border rounded-xl py-4 pl-12 pr-4 text-black font-bold outline-none focus:ring-4 focus:ring-bgs-yellow transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
              id="businessName"
              placeholder="Masukkan nama usaha"
              required
              type="text"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            />
          </div>
        </div>

        {/* Custom Dropdown: Category Selection */}
        <div className="relative w-full" ref={categoryDropdownRef}>
          <label className="block text-black font-black uppercase mb-2 text-lg">Kategori Usaha</label>

          <div
            className={`w-full bg-white comic-border p-4 rounded-xl font-bold text-black cursor-pointer flex justify-between items-center transition-all ${isCategoryDropdownOpen ? 'comic-shadow-sm' : 'shadow-[2px_2px_0_0_rgba(0,0,0,1)]'}`}
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-black">category</span>
              {formData.category || "Pilih kategori usaha"}
            </div>
            <span className={`material-symbols-outlined transition-transform duration-200 ${isCategoryDropdownOpen ? "rotate-180" : ""}`}>expand_more</span>
          </div>

          {isCategoryDropdownOpen && (
            <ul className="absolute z-20 w-full bg-white comic-border comic-shadow-sm mt-2 rounded-xl overflow-hidden">
              {categories.map((c, i) => (
                <li
                  key={i}
                  className={`px-4 py-3 font-bold cursor-pointer border-b-2 border-black last:border-0 hover:bg-bgs-yellow transition-colors ${formData.category === c ? 'bg-bgs-yellow' : ''}`}
                  onClick={() => {
                    setFormData({ ...formData, category: c });
                    setIsCategoryDropdownOpen(false);
                  }}
                >
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-4">
          <button
            className={`w-full bg-bgs-yellow text-black font-black text-xl py-4 rounded-xl flex items-center justify-center gap-3 transition-all comic-border comic-shadow hover:-translate-y-1 hover:comic-shadow-hover ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "MEMPROSES..." : "DAFTAR SEKARANG"}
            {!isLoading && <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>}
          </button>
        </div>
      </form>
    </>
  );
}
