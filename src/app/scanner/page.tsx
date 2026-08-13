'use client';

import { useEffect, useState, useRef } from 'react';
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import Link from 'next/link';

interface ScanResult {
  success: boolean;
  message: string;
  data?: any;
}

interface RecentScan {
  id: string;
  name: string;
  status: 'valid' | 'invalid';
  time: Date;
}

export default function ScannerPage() {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [cameraPermissionGranted, setCameraPermissionGranted] = useState(false);
  const [recentScans, setRecentScans] = useState<RecentScan[]>([]);
  const [selectedDate, setSelectedDate] = useState('21 Agustus 2026');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Html5Qrcode instance
    scannerRef.current = new Html5Qrcode("qr-reader");

    return () => {
      if (scannerRef.current && scannerRef.current.isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
      scannerRef.current?.clear();
    };
  }, []);

  const requestCameraAndStart = async () => {
    try {
      const devices = await Html5Qrcode.getCameras();
      if (devices && devices.length) {
        setCameraPermissionGranted(true);
        startScanner();
      } else {
        alert("Tidak ada kamera yang ditemukan pada perangkat ini.");
      }
    } catch (err) {
      console.error("Camera permission error:", err);
      alert("Mohon berikan izin akses kamera untuk menggunakan scanner.");
    }
  };

  const startScanner = () => {
    if (!scannerRef.current) return;
    
    setScanResult(null);
    setIsScanning(true);

    scannerRef.current.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 250, height: 250 }
      },
      onScanSuccess,
      onScanFailure
    ).catch((err) => {
      console.error("Failed to start scanner", err);
      setIsScanning(false);
    });
  };

  const onScanSuccess = async (decodedText: string) => {
    // Play beep sound
    try {
      const audio = new Audio('/sound/store-scanner-beep-sound-effect.mp3');
      audio.play().catch(e => console.error("Could not play sound:", e));
    } catch (err) {
      // Ignore audio errors
    }

    // Pause scanner and freeze video frame
    if (scannerRef.current) {
      scannerRef.current.pause(true);
      setIsScanning(false);
    }

    setIsValidating(true);

    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: decodedText, scanDate: selectedDate }),
      });

      const data = await response.json();
      setScanResult(data);
      
      // Tambahkan ke history
      setRecentScans(prev => {
        const newScan: RecentScan = {
          id: decodedText,
          name: data.data?.name || 'Tiket Tidak Dikenal',
          status: data.success ? 'valid' : 'invalid',
          time: new Date()
        };
        return [newScan, ...prev].slice(0, 5);
      });

    } catch (error) {
      console.error('Error parsing QR data:', error);
      setScanResult({
        success: false,
        message: 'Gagal menghubungi server. Silakan coba lagi.'
      });
    } finally {
      setIsValidating(false);
    }
  };

  const onScanFailure = () => {
    // Berjalan terus tiap frame, abaikan
  };

  const handleResumeScan = () => {
    if (scannerRef.current) {
      setScanResult(null);
      setIsScanning(true);
      scannerRef.current.resume();
    }
  };

  return (
    <div className="bg-[#051630] text-white min-h-screen flex flex-col font-sans overflow-x-hidden relative">
      <style dangerouslySetInnerHTML={{__html: `
        .halftone-bg {
            background-image: radial-gradient(circle, rgba(255,255,255,0.1) 2px, transparent 2.5px);
            background-size: 12px 12px;
        }
        .sunburst-bg {
            background: repeating-conic-gradient(
                rgba(255,255,255,0.02) 0deg 15deg,
                rgba(255,255,255,0.05) 15deg 30deg
            );
        }
        .scan-line {
            animation: scan 2s linear infinite;
        }
        @keyframes scan {
            0% { top: 0; }
            50% { top: 100%; }
            100% { top: 0; }
        }
        #qr-reader {
          width: 100%;
          height: 100%;
        }
        #qr-reader video {
          object-fit: cover;
          width: 100% !important;
          height: 100% !important;
        }
      `}} />

      {/* TopAppBar */}
      <header className="bg-[#051630] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-b-4 border-black flex justify-between items-center w-full px-5 h-16 z-50 fixed top-0">
        <Link href="/bgs-hq-panel-2026" className="flex items-center gap-2 text-white hover:text-bgs-yellow transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div className="text-xl font-black italic uppercase tracking-tighter text-bgs-yellow">
            BGS 2026 STAFF
        </div>
        <div className="flex gap-4">
          <button className="text-bgs-yellow hover:bg-white/10 p-2 rounded-full transition-transform duration-100 hover:translate-y-1">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>help</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-12 relative overflow-hidden flex flex-col items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 sunburst-bg opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 halftone-bg opacity-20 pointer-events-none"></div>
        
        <div className="w-full max-w-md px-5 flex flex-col items-center z-10 space-y-6">
          
          {/* Custom Dropdown Date Selector */}
          <div className="w-full flex flex-col items-center relative z-40">
            <p className="text-white font-bold text-sm mb-2 opacity-80 uppercase tracking-widest">Jadwal Event Aktif:</p>
            <div className="relative w-[200px]">
              <button 
                onClick={() => !isScanning && setIsDropdownOpen(!isDropdownOpen)}
                disabled={isScanning}
                className={`w-full bg-bgs-yellow text-black border-4 border-black px-4 py-3 rounded-xl font-black uppercase flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${isScanning ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'} transition-all`}
              >
                <span>{selectedDate.split(' ')[0]} AGS</span>
                <span className="material-symbols-outlined font-black">
                  {isDropdownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col z-50">
                  {['21 Agustus 2026', '22 Agustus 2026', '23 Agustus 2026'].map((date) => (
                    <button
                      key={date}
                      onClick={() => {
                        setSelectedDate(date);
                        setIsDropdownOpen(false);
                      }}
                      className={`px-4 py-3 text-left font-black uppercase border-b-2 border-gray-200 last:border-b-0 hover:bg-bgs-yellow transition-colors ${selectedDate === date ? 'bg-black text-bgs-yellow' : 'text-black'}`}
                    >
                      {date.split(' ')[0]} AGS
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Scanner Viewfinder */}
          <div className="relative w-full aspect-square max-w-[320px] mx-auto bg-black/40 rounded-xl overflow-hidden border-8 border-black shadow-[8px_8px_0px_0px_#ffe085]">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-bgs-yellow m-4 z-20"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-bgs-yellow m-4 z-20"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-bgs-yellow m-4 z-20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-bgs-yellow m-4 z-20"></div>
            
            {/* Animated Scan Line */}
            {isScanning && (
              <div className="absolute left-0 right-0 h-1 bg-bgs-red shadow-[0_0_15px_3px_rgba(186,26,26,0.8)] scan-line z-30"></div>
            )}
            
            {/* Video Feed Mount Point */}
            <div className="absolute inset-0 z-10">
              <div id="qr-reader" className="w-full h-full"></div>
            </div>

            {/* Overlay if not scanning */}
            {!cameraPermissionGranted && !isScanning && !scanResult && !isValidating && (
              <div className="absolute inset-0 bg-[#051630]/80 backdrop-blur-sm flex flex-col items-center justify-center z-30 p-6 text-center">
                <span className="material-symbols-outlined text-white opacity-50 mb-4" style={{ fontSize: '64px' }}>qr_code_scanner</span>
                <button 
                  onClick={requestCameraAndStart}
                  className="bg-bgs-yellow text-black border-4 border-black px-6 py-2 rounded-xl font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Buka Kamera
                </button>
              </div>
            )}

            {/* Overlay Validating */}
            {isValidating && (
              <div className="absolute inset-0 bg-[#051630]/80 backdrop-blur-md flex flex-col items-center justify-center z-40 p-6 text-center">
                <div className="w-12 h-12 border-4 border-bgs-yellow border-t-transparent rounded-full animate-spin mb-4 shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
                <h3 className="text-xl font-black text-white uppercase italic text-outline-black-sm mb-1">
                  Validating...
                </h3>
                <p className="text-white font-bold text-sm">Sedang mengecek data tiket</p>
              </div>
            )}

            {/* Overlay Scan Result */}
            {scanResult && (
              <div className={`absolute inset-0 ${scanResult.success ? 'bg-bgs-green/90' : 'bg-bgs-red/90'} backdrop-blur-md flex flex-col items-center justify-center z-40 p-4 text-center`}>
                <span className="material-symbols-outlined text-white text-6xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {scanResult.success ? 'check_circle' : 'error'}
                </span>
                <h3 className="text-2xl font-black text-white uppercase italic text-outline-black-sm mb-1">
                  {scanResult.success ? 'Valid' : 'Invalid'}
                </h3>
                <p className="text-white font-bold text-sm mb-4 leading-tight">{scanResult.message}</p>
                <button 
                  onClick={handleResumeScan}
                  className="bg-white text-black border-4 border-black px-6 py-2 rounded-xl font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  {scanResult.success ? 'Lanjut' : 'Scan Lagi'}
                </button>
              </div>
            )}
          </div>

          {/* Status Message */}
          <div className="bg-bgs-yellow text-black border-4 border-black px-8 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-xl transform -rotate-2 uppercase">
            {isScanning ? 'Scanning...' : (isValidating ? 'Validating...' : (scanResult ? (scanResult.success ? 'Verified' : 'Rejected') : 'Ready to Scan'))}
          </div>

          {/* Instructional Text */}
          <p className="text-center text-white font-bold text-base bg-[#0b1b35]/80 px-4 py-3 rounded-lg backdrop-blur-md border-2 border-black max-w-sm">
            {isScanning ? 'Arahkan QR Code tiket ke dalam bingkai kamera untuk memvalidasi.' : 'Tekan Buka Kamera untuk memulai verifikasi tiket.'}
          </p>

          {/* Recent Scans */}
          <div className="w-full bg-white text-black border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden mt-4">
            <div className="bg-black text-white px-4 py-3 font-black text-lg border-b-4 border-black flex items-center gap-2 uppercase">
              <span className="material-symbols-outlined text-xl">history</span> Recent Scans
            </div>
            <div className="max-h-40 overflow-y-auto p-3 space-y-3 bg-gray-50">
              {recentScans.length === 0 ? (
                <p className="text-center text-gray-500 font-bold py-4">Belum ada riwayat scan.</p>
              ) : (
                recentScans.map((scan, idx) => (
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
          
        </div>
      </main>
    </div>
  );
}
