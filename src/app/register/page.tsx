"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import { cities } from "../../lib/data/cities";

export default function Register() {
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
    <div className="font-body-md text-on-background antialiased relative min-h-screen flex flex-col">
      {/* Global Background with Navy Overlay */}
      <div className="fixed inset-0 z-[-1]">
        <img alt="Bandung Great Sale Festive Atmosphere" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfne3wnji178Ya0D05qbjkujIenvtd6V1ySUAT92HQax-wgips0C1Zz78nqr9zUmvytTGJIUhRMSj80XIrQnJXce7vOi2w5ei7AbWTzV1dP-2W0lRPM_ksz8uJsr8_YOj6V0ftCBGeR-DrDk2pzgeXLUAXlaS58_ppHZmt3p2UHESD4NuwMgOZgLJQ2ytRIrieJID9uaxhfZqhli5liFBckXp7Vq33KAC44WF5XCHEL0qJ35XYp1ScLA" fetchPriority="high" />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" style={{ backgroundColor: "rgba(5, 22, 48, 0.8)" }}></div>
      </div>
      
      {/* TopAppBar removed as per request */}
      
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center py-20 px-6 md:px-[64px] mt-[80px]">
        {/* Registration Card */}
        <div className="w-full max-w-[672px] bg-surface rounded-[24px] shadow-2xl relative border border-outline-variant/30 bg-white">
          
          {/* Decorative Element Container */}
          <div className="absolute inset-0 overflow-hidden rounded-[24px] pointer-events-none">
            {/* Soft blurred blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
            
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.04) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          </div>
          
          <div className="p-8 md:p-12 relative z-10">
            {/* Floating Badge */}
            <div className="absolute -top-4 -left-4 md:-left-6 md:-top-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-5 py-2 rounded-2xl shadow-lg shadow-orange-500/30 transform -rotate-6 font-bold text-sm border-2 border-white flex items-center gap-1.5 z-20">
              <span className="material-symbols-outlined text-[20px]">local_activity</span>
              FREE ENTRY
            </div>

            <div className="text-center mb-10 relative z-10 mt-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary mb-5 ring-4 ring-white shadow-sm">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>confirmation_number</span>
              </div>
              <h1 className="font-headline-lg text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tight">Dapatkan Tiketmu</h1>
              <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
                Bergabunglah dengan festival belanja paling dinanti tahun ini. Isi data diri Anda di bawah ini untuk mendapatkan tiket akses eksklusif.
              </p>
            </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100 flex items-center gap-2 relative z-10">
              <span className="material-symbols-outlined">error</span>
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-8 relative z-10 mt-6">
            
            {/* Custom Dropdown: Date Selection */}
            <div className="relative w-full">
              <div className="absolute left-0 top-6 text-slate-400 pointer-events-none z-10">
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              </div>
              
              <div 
                className={`w-full border-0 border-b-2 bg-transparent pt-6 pb-2 pl-9 pr-8 cursor-pointer font-body-md text-slate-800 transition-colors outline-none focus:border-primary ${isDateDropdownOpen ? 'border-primary' : 'border-slate-300'}`}
                onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
                tabIndex={0}
                onBlur={() => setTimeout(() => setIsDateDropdownOpen(false), 200)}
              >
                {formData.date}
              </div>
              
              <div className={`absolute right-0 top-6 text-slate-400 pointer-events-none transition-transform duration-200 ${isDateDropdownOpen ? "rotate-180" : ""}`}>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              
              <label 
                className={`absolute left-0 -top-4 text-xs font-body-md transition-all ${isDateDropdownOpen ? 'text-primary' : 'text-slate-500'}`} 
              >
                Tanggal Kehadiran
              </label>

              {isDateDropdownOpen && (
                <ul className="absolute z-20 w-full bg-white border border-slate-200 mt-1 rounded-xl shadow-lg overflow-hidden">
                  {["21 Agustus 2026", "22 Agustus 2026", "23 Agustus 2026"].map((d, i) => (
                    <li 
                      key={i}
                      className={`px-4 py-3 text-sm cursor-pointer border-b border-slate-100 last:border-0 transition-colors ${formData.date === d ? 'bg-[#f4f7fa] text-primary font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'}`}
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

            {/* Floating Label Input: Full Name */}
            <div className="relative w-full">
              <div className="absolute left-0 top-6 text-slate-400 pointer-events-none">
                <span className="material-symbols-outlined text-[20px]">person</span>
              </div>
              <input 
                className="peer w-full border-0 border-b-2 border-slate-300 bg-transparent pt-6 pb-2 pl-9 pr-0 text-slate-800 focus:border-primary focus:ring-0 outline-none transition-colors placeholder-transparent font-body-md" 
                id="fullname" 
                placeholder="Nama Lengkap" 
                required 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <label 
                className="absolute left-9 top-6 text-slate-500 font-body-md transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:left-9 peer-focus:-top-4 peer-focus:left-0 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:left-0 peer-valid:text-xs" 
                htmlFor="fullname"
              >
                Nama Lengkap
              </label>
            </div>
            
            {/* Floating Label Input: Email */}
            <div className="relative w-full">
              <div className="absolute left-0 top-6 text-slate-400 pointer-events-none">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <input 
                className="peer w-full border-0 border-b-2 border-slate-300 bg-transparent pt-6 pb-2 pl-9 pr-0 text-slate-800 focus:border-primary focus:ring-0 outline-none transition-colors placeholder-transparent font-body-md" 
                id="email" 
                placeholder="Alamat Email" 
                required 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <label 
                className="absolute left-9 top-6 text-slate-500 font-body-md transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:left-9 peer-focus:-top-4 peer-focus:left-0 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:left-0 peer-valid:text-xs" 
                htmlFor="email"
              >
                Alamat Email
              </label>
            </div>
            

            {/* Floating Label Input: City (Searchable Dropdown) */}
            <div className="relative w-full mb-10">
              <div className="absolute left-0 top-6 text-slate-400 pointer-events-none">
                <span className="material-symbols-outlined text-[20px]">location_city</span>
              </div>
              <input 
                className="peer w-full border-0 border-b-2 border-slate-300 bg-transparent pt-6 pb-2 pl-9 pr-0 text-slate-800 focus:border-primary focus:ring-0 outline-none transition-colors placeholder-transparent font-body-md" 
                id="city" 
                placeholder="Kota / Kabupaten" 
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
              <label 
                className="absolute left-9 top-6 text-slate-500 font-body-md transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:left-9 peer-focus:-top-4 peer-focus:left-0 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:left-0 peer-valid:text-xs" 
                htmlFor="city"
              >
                Kota / Kabupaten
              </label>
              
              {isCityDropdownOpen && filteredCities.length > 0 && (
                <ul className="absolute z-20 w-full bg-white border border-slate-200 mt-1 rounded-xl shadow-lg max-h-48 overflow-y-auto hide-scrollbar">
                  {filteredCities.map((c, i) => (
                    <li 
                      key={i}
                      className="px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary cursor-pointer border-b border-slate-100 last:border-0 transition-colors"
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
                    <li className="px-4 py-3 text-sm text-slate-500 text-center">
                      Tidak ditemukan
                    </li>
                  )}
                </ul>
              )}
            </div>
            
            <div className="pt-4">
              <button 
                className={`w-full bg-[#facc15] hover:bg-[#eab308] text-[#574500] font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-3 transition-colors active:scale-[0.98] shadow-md ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`} 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Memproses..." : "Daftar Sekarang"}
                {!isLoading && <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>}
              </button>
            </div>
          </form>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <div className="w-full mt-auto bg-surface relative z-10">
        <Footer />
      </div>
    </div>
  );
}
