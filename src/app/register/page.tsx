"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Register() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    city: "",
    date: "August 21, 2026",
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
      <style dangerouslySetInnerHTML={{__html: `
        .floating-input:focus ~ .floating-label,
        .floating-input:not(:placeholder-shown) ~ .floating-label {
            transform: translateY(-50%) scale(0.85);
            top: 0;
            background-color: white;
            padding: 0 4px;
            color: #006591;
        }
      `}} />
      <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col md:flex-row">
        
        {/* Left Split: Image/Brand Section (Hidden on small screens, takes half on lg) */}
        <div className="hidden lg:flex lg:w-1/2 lg:sticky lg:top-0 lg:h-screen bg-primary-container relative flex-col justify-between overflow-hidden">
          {/* Overlay Pattern/Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-primary opacity-90 z-0"></div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
            className="absolute -top-32 -right-32 w-96 h-96 bg-tertiary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"
          ></motion.div>
          
          {/* Navigation / Brand */}
          <div className="relative z-10 p-12">
            <Link className="inline-flex items-center gap-2 text-on-primary font-label-lg hover:text-secondary-fixed transition-colors" href="/">
              <span className="material-symbols-outlined">chevron_left</span>
              Kembali ke Beranda
            </Link>
          </div>
          
          {/* Center Logo */}
          <div className="relative z-10 flex-grow flex items-center justify-center pointer-events-none">
            <Image 
              src="/logo/LOGO BGS 2026.webp" 
              alt="Bandung Great Sale 2026" 
              width={350} 
              height={140} 
              className="w-72 md:w-80 h-auto drop-shadow-2xl opacity-95" 
            />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 p-12 mt-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-6 shadow-md">
              <span className="material-symbols-outlined text-sm">festival</span>
              Bandung Great Sale 2026
            </span>
            <h1 className="font-display-lg text-display-lg text-on-primary mb-6 leading-tight">
              Dapatkan <br /> Tiket Eksklusif Anda
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary/80 max-w-md">
              Bergabunglah dengan ribuan pengunjung di Laswi Heritage untuk festival belanja perayaan terbesar di Jawa Barat. Promo tak tertandingi menanti Anda.
            </p>
          </div>
        </div>

        {/* Right Split: Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col min-h-screen bg-surface overflow-y-auto" >
          
          {/* Mobile Header (Visible only on mobile/tablet) */}
          <header className="lg:hidden w-full px-6 py-6 border-b border-outline-variant/30 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20">
            <Link className="inline-flex items-center gap-2 text-primary font-label-lg" href="/">
              <span className="material-symbols-outlined">chevron_left</span>
              Kembali
            </Link>
            <span className="font-label-lg text-primary-container font-bold">Pendaftaran</span>
          </header>
          
          <main className="flex-grow flex flex-col justify-center px-6 md:px-12 py-12 w-full max-w-2xl mx-auto">
            
            {/* Mobile Title */}
            <div className="lg:hidden mb-8">
              <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Pendaftaran</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Ikuti Bandung Great Sale 2026. Dapatkan tiket Anda untuk menikmati promo eksklusif.</p>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,101,145,0.1)] border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
              <form onSubmit={handleRegister} className="space-y-10 relative z-10">
              
              {/* Notice Box */}
              <div className="bg-surface-container-low border-l-4 border-primary p-5 flex gap-4 rounded-r-3xl">
                <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">info</span>
                <div>
                  <h3 className="font-label-lg text-label-lg text-on-surface mb-1">Informasi Pendaftaran</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Pendaftaran Bandung Great Sale di Laswi Heritage. Lokasi tidak dapat diubah.</p>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-error-container text-on-error-container rounded-lg text-sm border border-error/20 flex items-center gap-2">
                  <span className="material-symbols-outlined text-error">error</span>
                  {error}
                </div>
              )}
              
              {/* Personal Information Section */}
              <div>
                <h2 className="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                  Informasi Pribadi
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  {/* Tempat (Read-only) */}
                  <div className="relative md:col-span-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline/70">location_on</span>
                    </div>
                    <input 
                      className="w-full pl-10 pr-4 py-3.5 bg-surface-container-low border border-outline-variant/30 text-on-surface font-body-md focus:ring-0 focus:border-outline-variant cursor-not-allowed text-sm rounded-xl" 
                      readOnly 
                      type="text" 
                      value="Laswi Heritage" 
                       
                    />
                    <label className="absolute left-10 top-0 -translate-y-1/2 text-xs font-label-md text-on-surface-variant bg-white px-1">Lokasi</label>
                  </div>
                  
                  {/* Tanggal (Dropdown Style) */}
                  <div className="relative md:col-span-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <span className="material-symbols-outlined text-outline/70">calendar_today</span>
                    </div>
                    <select 
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-10 py-3.5 bg-white border border-outline-variant/40 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 appearance-none text-sm transition-all duration-300 cursor-pointer rounded-xl hover:border-primary/50 shadow-sm" 
                      
                    >
                      <option>21 Agustus 2026</option>
                      <option>22 Agustus 2026</option>
                      <option>23 Agustus 2026</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline">expand_more</span>
                    </div>
                    <label className="absolute left-10 top-0 -translate-y-1/2 text-xs font-label-md text-on-surface-variant bg-white px-1">Tanggal</label>
                  </div>
                  
                  {/* Nama Lengkap (Floating Label) */}
                  <div className="relative md:col-span-2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline/70">badge</span>
                    </div>
                    <input 
                      className="floating-input w-full pl-10 pr-4 py-3.5 bg-white border-1.5 border border-outline-variant/40 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-sm transition-all duration-300 placeholder-transparent rounded-xl hover:border-primary/50 shadow-sm" 
                      id="nama" 
                      placeholder="Nama Anda" 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                       
                    />
                    <label className="floating-label absolute left-10 top-1/2 -translate-y-1/2 text-sm font-body-md text-outline transition-all duration-200 pointer-events-none" htmlFor="nama">Nama Lengkap</label>
                  </div>
                  
                  {/* Email (Floating Label) */}
                  <div className="relative md:col-span-2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline/70">mail</span>
                    </div>
                    <input 
                      className="floating-input w-full pl-10 pr-4 py-3.5 bg-white border-1.5 border border-outline-variant/40 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-sm transition-all duration-300 placeholder-transparent rounded-xl hover:border-primary/50 shadow-sm" 
                      id="email" 
                      placeholder="youremail@gmail.com" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                       
                    />
                    <label className="floating-label absolute left-10 top-1/2 -translate-y-1/2 text-sm font-body-md text-outline transition-all duration-200 pointer-events-none" htmlFor="email">Email</label>
                  </div>
                  
                  {/* Nomor WhatsApp */}
                  {/* Nomor WhatsApp */}
                  <div className="md:col-span-1">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-outline/70">call</span>
                      </div>
                      <input 
                        className="floating-input w-full pl-10 pr-4 py-3.5 bg-white border-1.5 border border-outline-variant/40 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-sm transition-all duration-300 placeholder-transparent rounded-xl hover:border-primary/50 shadow-sm" 
                        id="whatsapp" 
                        placeholder="081234567890" 
                        type="tel" 
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                         
                      />
                      <label className="floating-label absolute left-10 top-1/2 -translate-y-1/2 text-sm font-body-md text-outline transition-all duration-200 pointer-events-none" htmlFor="whatsapp">Nomor WhatsApp</label>
                    </div>
                  </div>
                  
                  {/* Kota / Wilayah (Floating Label) */}
                  <div className="relative md:col-span-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline/70">location_city</span>
                    </div>
                    <input 
                      className="floating-input w-full pl-10 pr-4 py-3.5 bg-white border-1.5 border border-outline-variant/40 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-sm transition-all duration-300 placeholder-transparent rounded-xl hover:border-primary/50 shadow-sm" 
                      id="kota" 
                      placeholder="Bandung, Jakarta, dll." 
                      type="text" 
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                       
                    />
                    <label className="floating-label absolute left-10 top-1/2 -translate-y-1/2 text-sm font-body-md text-outline transition-all duration-200 pointer-events-none" htmlFor="kota">Kota / Domisili</label>
                  </div>
                </div>
              </div>
              

              {/* Action Button */}
              <div className="pt-6">
                <button 
                  className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-400 hover:to-yellow-400 text-gray-900 font-headline-md text-headline-md py-4 px-8 rounded-xl transition-all shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:-translate-y-0.5 active:scale-[0.98] duration-300 flex justify-center items-center gap-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`} 
                  type="submit" 
                  
                  disabled={isLoading}
                >
                  {isLoading ? "Sedang memproses..." : "Daftar Sekarang"}
                  {!isLoading && <span className="material-symbols-outlined">arrow_forward</span>}
                </button>
              </div>
            </form>
            </div>
          </main>
          
          {/* Simple Footer */}
          <footer className="w-full py-8 px-6 md:px-12 mt-auto text-center border-t border-outline-variant/20 text-sm text-on-surface-variant flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span>© 2026 Bandung Great Sale</span>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs opacity-70">Website by</span>
                <Image src="/logo/LOGO TACTLINK.png" alt="Tactlink" width={80} height={20} className="h-4 w-auto object-contain" />
              </div>
            </div>
            <div className="flex gap-4">
              <Link className="hover:text-primary transition-colors" href="#">Privasi</Link>
              <Link className="hover:text-primary transition-colors" href="#">Syarat</Link>
              <Link className="hover:text-primary transition-colors" href="#">Bantuan</Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
