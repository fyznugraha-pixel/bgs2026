export interface RecentScan {
  id: string;
  name: string;
  status: 'valid' | 'invalid';
  time: Date;
}

export default function RecentScansList({ scans }: { scans: RecentScan[] }) {
  return (
    <div className="w-full bg-white text-black border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden mt-4">
      <div className="bg-black text-white px-4 py-3 font-black text-lg border-b-4 border-black flex items-center gap-2 uppercase">
        <span className="material-symbols-outlined text-xl">history</span> Recent Scans
      </div>
      <div className="max-h-40 overflow-y-auto p-3 space-y-3 bg-gray-50">
        {scans.length === 0 ? (
          <p className="text-center text-gray-500 font-bold py-4">Belum ada riwayat scan.</p>
        ) : (
          scans.map((scan, idx) => (
            <div key={idx} className="flex justify-between items-center bg-white p-3 rounded-lg border-2 border-black shadow-sm">
              <span className="font-bold text-base text-black truncate max-w-[150px]">{scan.name}</span>
              <span className={`font-black text-sm flex items-center gap-1 ${scan.status === 'valid' ? 'text-bgs-green' : 'text-bgs-red'}`}>
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {scan.status === 'valid' ? 'check_circle' : 'cancel'}
                </span> 
                {scan.status === 'valid' ? 'VALID' : 'INVALID'}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
