'use client';

import * as XLSX from 'xlsx';

interface RegistrationData {
  'ID': string;
  'Nama Lengkap': string;
  'Email': string;
  'Kota/Kabupaten': string;
  'Tanggal Event': string;
  'Status Hadir': string;
  'Waktu Scan (Hadir)': string;
  'Waktu Daftar': string;
}

export default function ExportButton({ data }: { data: RegistrationData[] }) {
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
    XLSX.writeFile(workbook, "Data_Pendaftar_BGS_2026.xlsx");
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
