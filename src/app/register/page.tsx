"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import { cities } from "../../lib/data/cities";
import { searchTicketByEmail } from "@/app/actions/ticket";

export default function Register() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const filteredCities = cities.filter(c => c.toLowerCase().includes(citySearch.toLowerCase())).slice(0, 50);

  // Search Ticket State
  const [searchEmail, setSearchEmail] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

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

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchEmail) return;
    
    setIsSearching(true);
    setSearchError("");
    
    const result = await searchTicketByEmail(searchEmail);
    if (result.success && result.id) {
      router.push("/ticket?id=" + result.id);
    } else {
      setSearchError(result.error || "Gagal mencari tiket");
      setIsSearching(false);
    }
  };

  return (
    <div className="font-body-md text-black antialiased relative min-h-screen flex flex-col bg-bgs-yellow bg-polka">
      
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center py-20 px-6 md:px-[64px] relative z-10">
        {/* Registration Card */}
        <div className="w-full max-w-[672px] bg-white rounded-3xl comic-border comic-shadow-lg relative transform rotate-1 mt-8">
          
          <div className="p-8 md:p-12 relative z-10">
            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 bg-bgs-red text-white px-6 py-2 rounded-2xl comic-border comic-shadow-sm transform -rotate-6 font-black text-lg uppercase flex items-center gap-2 z-20">
              <span className="material-symbols-outlined text-[24px]">local_activity</span>
              FREE ENTRY
            </div>

            <div className="text-center mb-10 relative z-10 mt-2">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-bgs-yellow comic-border comic-shadow-sm mb-5 transform rotate-2">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>confirmation_number</span>
              </div>
              <h1 className="font-headline-lg text-4xl md:text-5xl font-black text-black mb-3 uppercase italic transform -rotate-1">Dapatkan Tiketmu</h1>
              <p className="font-body-md text-black font-bold max-w-md mx-auto bg-white p-4 rounded-xl comic-border comic-shadow-sm mt-4">
                Bergabunglah dengan festival belanja paling dinanti tahun ini. Isi data diri Anda di bawah ini!
              </p>
            </div>
          
          {error && (
            <div className="mb-6 p-4 bg-bgs-red text-white comic-border comic-shadow-sm rounded-xl font-bold flex items-center gap-2 relative z-10 transform -rotate-1">
              <span className="material-symbols-outlined">error</span>
              {error}
            </div>
          )}

          {/* Search Ticket Section */}
          <div className="mb-8 pb-6 border-b-4 border-dashed border-black relative z-10 text-left">
            <h2 className="font-black text-xl md:text-2xl text-black mb-4 uppercase italic transform -rotate-1">Sudah Mendaftar?</h2>
            <p className="text-black font-bold mb-4 text-sm">Cari dan lihat e-tiket Anda dengan memasukkan alamat email yang terdaftar.</p>
            {searchError && (
              <div className="mb-4 p-3 bg-bgs-red text-white comic-border comic-shadow-sm rounded-xl font-bold flex items-center gap-2 text-sm transform rotate-1">
                <span className="material-symbols-outlined">error</span>
                {searchError}
              </div>
            )}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <input 
                className="flex-grow bg-white comic-border rounded-xl py-3 px-4 text-black font-bold outline-none focus:ring-4 focus:ring-bgs-blue transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]" 
                placeholder="Masukkan email terdaftar..." 
                type="email"
                required
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
              />
              <button 
                className={`bg-bgs-blue text-white font-black px-6 py-3 rounded-xl comic-border comic-shadow hover:-translate-y-1 hover:comic-shadow-hover transition-all whitespace-nowrap flex items-center justify-center gap-2 ${isSearching ? 'opacity-70 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={isSearching}
              >
                {isSearching ? "MENCARI..." : (
                  <>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
                    CARI TIKET
                  </>
                )}
              </button>
            </form>
          </div>

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
