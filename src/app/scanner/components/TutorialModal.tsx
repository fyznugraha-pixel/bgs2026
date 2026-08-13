export default function TutorialModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-5">
      <div className="bg-white border-4 border-black rounded-2xl p-6 max-w-sm w-full shadow-[8px_8px_0px_0px_#ffe085] relative transform rotate-1">
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-bgs-red text-white border-4 border-black w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform font-black text-xl shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex items-center gap-3 mb-4 text-black">
          <span className="material-symbols-outlined text-4xl text-bgs-blue" style={{ fontVariationSettings: "'FILL' 1" }}>help</span>
          <h2 className="text-2xl font-black uppercase italic">Tutorial Scan</h2>
        </div>
        <ul className="space-y-4 text-black font-bold">
          <li className="flex gap-3">
            <span className="bg-bgs-yellow w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black text-sm">1</span>
            <span>Pastikan Anda telah memberikan <strong>izin kamera</strong> pada browser.</span>
          </li>
          <li className="flex gap-3">
            <span className="bg-bgs-yellow w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black text-sm">2</span>
            <span>Pilih opsi <strong>Jadwal Event Aktif</strong> sesuai hari ini di layar utama.</span>
          </li>
          <li className="flex gap-3">
            <span className="bg-bgs-yellow w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black text-sm">3</span>
            <span>Arahkan kamera ke <strong>QR Code tiket</strong> milik pengunjung.</span>
          </li>
          <li className="flex gap-3">
            <span className="bg-bgs-yellow w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black text-sm">4</span>
            <span>Tunggu animasi <em>Validating</em> hingga muncul hasil <strong>Valid (Hijau)</strong> atau <strong>Invalid (Merah)</strong>.</span>
          </li>
          <li className="flex gap-3">
            <span className="bg-bgs-yellow w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black text-sm">5</span>
            <span>Klik <strong>Lanjut</strong> untuk bersiap men-scan pengunjung berikutnya.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
