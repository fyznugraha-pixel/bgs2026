import Link from 'next/link';
import prisma from '@/lib/prisma';
import ExportButton from '@/components/admin/ExportButton';
import { redirect } from 'next/navigation';
import DashboardStats from './components/DashboardStats';
import DashboardTable from './components/DashboardTable';
import DashboardPagination from './components/DashboardPagination';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard(props: {
  searchParams: Promise<{ page?: string; date?: string }>;
}) {
  const searchParams = await props.searchParams;
  const page = parseInt(searchParams?.page || '1', 10);
  const limit = 50;
  const filterDate = searchParams?.date || 'all';

  // Build where clause based on filter
  const whereClause = filterDate !== 'all' ? { date: filterDate } : {};

  // Get data
  const allRegistrations = await prisma.registration.findMany({
    where: whereClause,
    orderBy: {
      createdAt: 'desc'
    }
  });

  // Calculate stats based on ALL data (ignoring current filter for global stats)
  const globalStatsData = await prisma.registration.findMany();
  
  const totalRegistrations = globalStatsData.length;
  const totalAttended = globalStatsData.filter(r => r.isAttended).length;
  const count21 = globalStatsData.filter(r => r.date === "21 Agustus 2026" && r.isAttended).length;
  const count22 = globalStatsData.filter(r => r.date === "22 Agustus 2026" && r.isAttended).length;
  const count23 = globalStatsData.filter(r => r.date === "23 Agustus 2026" && r.isAttended).length;

  const totalFiltered = allRegistrations.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / limit));
  
  // Protect against out of bounds page
  if (page > totalPages && totalPages > 0) {
    redirect(`/bgs-hq-panel-2026?page=${totalPages}${filterDate !== 'all' ? `&date=${filterDate}` : ''}`);
  }

  const currentRegistrations = allRegistrations.slice((page - 1) * limit, page * limit);

  const exportData = allRegistrations.map((reg) => ({
    'ID': reg.id,
    'Nama Lengkap': reg.name,
    'Email': reg.email,
    'Kota/Kabupaten': reg.city,
    'Tanggal Event': reg.date,
    'Status Hadir': reg.isAttended ? 'Hadir' : 'Belum Hadir',
    'Waktu Scan (Hadir)': reg.attendedAt ? new Date(reg.attendedAt).toLocaleString('id-ID') : '-',
    'Waktu Daftar': new Date(reg.createdAt).toLocaleString('id-ID')
  }));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 tracking-tight">BGS 2026 Admin</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/scanner" className="text-sm font-bold text-bgs-blue hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
                Buka Scanner QR
              </Link>
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Kembali ke Website
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard Kehadiran</h1>
          <p className="mt-1 text-sm text-gray-500">Pemantauan pendaftaran tiket dan check-in fisik di venue.</p>
        </div>

        {/* Stats */}
        <DashboardStats stats={{ totalRegistrations, totalAttended, count21, count22, count23 }} />

        {/* Filters and Table */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
            <div className="flex items-center gap-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Data Pengunjung</h3>
              
              {/* Date Filter */}
              <form method="GET" action="/bgs-hq-panel-2026" className="flex items-center gap-2">
                <select 
                  name="date" 
                  defaultValue={filterDate}
                  className="text-sm border-gray-300 rounded-md shadow-sm focus:border-bgs-blue focus:ring-bgs-blue py-1.5 pl-3 pr-8"
                >
                  <option value="all">Semua Tanggal</option>
                  <option value="21 Agustus 2026">21 Agustus 2026</option>
                  <option value="22 Agustus 2026">22 Agustus 2026</option>
                  <option value="23 Agustus 2026">23 Agustus 2026</option>
                </select>
                <button type="submit" className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1.5 rounded-md font-medium border border-gray-300 transition-colors">
                  Filter
                </button>
              </form>
            </div>

            <ExportButton data={exportData} />
          </div>
          
          <DashboardTable registrations={currentRegistrations} />
          
          <DashboardPagination 
            page={page} 
            limit={limit} 
            totalFiltered={totalFiltered} 
            totalPages={totalPages} 
            filterDate={filterDate} 
          />
        </div>
      </main>
    </div>
  );
}
