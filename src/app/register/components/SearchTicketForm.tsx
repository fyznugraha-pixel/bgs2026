"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { searchTicketByEmail } from "@/app/actions/ticket";

export default function SearchTicketForm() {
  const router = useRouter();
  const [searchEmail, setSearchEmail] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

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
  );
}
