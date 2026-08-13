"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cities } from "@/lib/data/cities";

export default function RegistrationForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const filteredCities = cities.filter(c => c.toLowerCase().includes(citySearch.toLowerCase())).slice(0, 50);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    date: "21 Agustus 2026",
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
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
        {/* Custom Dropdown: Date Selection */}
        <div className="relative w-full">
          <label className="block text-black font-black uppercase mb-2 text-lg">Tanggal Kehadiran</label>
          
          <div 
            className={`w-full bg-white comic-border p-4 rounded-xl font-bold text-black cursor-pointer flex justify-between items-center transition-all ${isDateDropdownOpen ? 'comic-shadow-sm' : 'shadow-[2px_2px_0_0_rgba(0,0,0,1)]'}`}
            onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
            tabIndex={0}
            onBlur={() => setTimeout(() => setIsDateDropdownOpen(false), 200)}
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-black">calendar_today</span>
              {formData.date}
            </div>
            <span className={`material-symbols-outlined transition-transform duration-200 ${isDateDropdownOpen ? "rotate-180" : ""}`}>expand_more</span>
          </div>
          
          {isDateDropdownOpen && (
            <ul className="absolute z-20 w-full bg-white comic-border comic-shadow-sm mt-2 rounded-xl overflow-hidden">
              {["21 Agustus 2026", "22 Agustus 2026", "23 Agustus 2026"].map((d, i) => (
                <li 
                  key={i}
                  className={`px-4 py-3 font-bold cursor-pointer border-b-2 border-black last:border-0 hover:bg-bgs-yellow transition-colors ${formData.date === d ? 'bg-bgs-yellow' : ''}`}
                  onClick={() => {
                    setFormData({ ...formData, date: d });
                    setIsDateDropdownOpen(false);
                  }}
                >
                  {d}
                </li>
              ))}
            </ul>
          )}
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
        
        {/* Input: City */}
        <div className="relative w-full mb-8">
          <label className="block text-black font-black uppercase mb-2 text-lg">Kota / Kabupaten</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black pointer-events-none">
              <span className="material-symbols-outlined">location_city</span>
            </div>
            <input 
              className="w-full bg-white comic-border rounded-xl py-4 pl-12 pr-4 text-black font-bold outline-none focus:ring-4 focus:ring-bgs-yellow transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]" 
              id="city" 
              placeholder="Ketik kota..." 
              required 
              type="text"
              autoComplete="off"
              value={citySearch}
              onChange={(e) => {
                setCitySearch(e.target.value);
                setFormData({ ...formData, city: e.target.value });
                setIsCityDropdownOpen(true);
              }}
              onFocus={() => setIsCityDropdownOpen(true)}
              onBlur={() => setTimeout(() => setIsCityDropdownOpen(false), 200)}
            />
          </div>
          
          {isCityDropdownOpen && filteredCities.length > 0 && (
            <ul className="absolute z-20 w-full bg-white comic-border comic-shadow-sm mt-2 rounded-xl max-h-48 overflow-y-auto hide-scrollbar">
              {filteredCities.map((c, i) => (
                <li 
                  key={i}
                  className="px-4 py-3 font-bold hover:bg-bgs-yellow cursor-pointer border-b-2 border-black last:border-0 transition-colors"
                  onClick={() => {
                    setCitySearch(c);
                    setFormData({ ...formData, city: c });
                    setIsCityDropdownOpen(false);
                  }}
                >
                  {c}
                </li>
              ))}
              {filteredCities.length === 0 && (
                <li className="px-4 py-3 font-bold text-center">
                  Tidak ditemukan
                </li>
              )}
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
