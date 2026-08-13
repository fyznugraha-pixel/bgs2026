export default function ScannerHeader({ onHelpClick }: { onHelpClick: () => void }) {
  return (
    <header className="bg-[#051630] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-b-4 border-black flex justify-between items-center w-full px-5 h-16 z-50 fixed top-0">
      <div className="w-8"></div>
      <div className="text-xl font-black italic uppercase tracking-tighter text-bgs-yellow">
        BGS 2026 STAFF
      </div>
      <div className="flex gap-4">
        <button 
          onClick={onHelpClick}
          className="text-bgs-yellow hover:bg-white/10 p-2 rounded-full transition-transform duration-100 hover:translate-y-1"
          aria-label="Help Tutorial"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>help</span>
        </button>
      </div>
    </header>
  );
}
