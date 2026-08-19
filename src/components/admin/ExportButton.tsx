'use client';

import * as XLSX from 'xlsx';

export default function ExportButton({ data, type = 'visitor' }: { data: any[], type?: string }) {
  const handleExport = () => {
    if (data.length === 0) {
      alert("Tidak ada data untuk diexport.");
      return;
    }
    
    // 1. Buat worksheet dari data JSON
    const worksheet = XLSX.utils.json_to_sheet(data);
    
    // 2. Buat workbook dan tambahkan worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Pendaftar");
    
    // 3. Simpan sebagai file .xlsx
    const filename = type === 'umkm' ? "Data_UMKM_BGS_2026.xlsx" : "Data_Pengunjung_BGS_2026.xlsx";
    XLSX.writeFile(workbook, filename);
  };

  return (
    <button 
      onClick={handleExport}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
    >
      <span className="material-symbols-outlined mr-2 text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>download</span>
      Export ke Excel (.xlsx)
    </button>
  );
}
