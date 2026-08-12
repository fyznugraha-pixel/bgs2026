import Link from 'next/link';
import prisma from '@/lib/prisma';
import ExportButton from '@/components/admin/ExportButton';
import DeleteButton from '@/components/admin/DeleteButton';
import { redirect } from 'next/navigation';

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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 mb-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Total Pendaftar</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{totalRegistrations}</dd>
            </div>
          </div>
          
          <div className="bg-blue-50 overflow-hidden shadow-sm rounded-lg border border-blue-200">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-bold text-blue-700 truncate">Total Check-in (Semua)</dt>
              <dd className="mt-1 text-3xl font-black text-blue-900">{totalAttended}</dd>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Check-in 21 Ags</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">{count21}</dd>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Check-in 22 Ags</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">{count22}</dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Check-in 23 Ags</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">{count23}</dd>
            </div>
          </div>
        </div>

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
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Nama & Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Kota
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tanggal Event
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status Hadir
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                      Belum ada data pada filter ini.
                    </td>
                  </tr>
                ) : (
                  currentRegistrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{reg.name}</div>
                        <div className="text-sm text-gray-500">{reg.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {reg.city}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {reg.date}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {reg.isAttended ? (
                          <div>
                            <span className="px-2 inline-flex text-xs leading-5 font-bold rounded-full bg-green-100 text-green-800">
                              Hadir
                            </span>
                            <div className="text-xs text-gray-500 mt-1">
                              {reg.attendedAt ? new Date(reg.attendedAt).toLocaleTimeString('id-ID', {hour: '2-digit', minute:'2-digit'}) : ''}
                            </div>
                          </div>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-gray-100 text-gray-600">
                            Belum Hadir
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <DeleteButton id={reg.id} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 bg-gray-50">
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Menampilkan <span className="font-medium">{(page - 1) * limit + 1}</span> hingga <span className="font-medium">{Math.min(page * limit, totalFiltered)}</span> dari <span className="font-medium">{totalFiltered}</span> data
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <Link
                      href={`/bgs-hq-panel-2026?page=${page > 1 ? page - 1 : 1}${filterDate !== 'all' ? `&date=${filterDate}` : ''}`}
                      className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${page <= 1 ? 'text-gray-300 cursor-not-allowed pointer-events-none' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                      <span className="sr-only">Previous</span>
                      <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                    </Link>
                    
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <Link
                        key={i}
                        href={`/bgs-hq-panel-2026?page=${i + 1}${filterDate !== 'all' ? `&date=${filterDate}` : ''}`}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          page === i + 1
                            ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {i + 1}
                      </Link>
                    ))}

                    <Link
                      href={`/bgs-hq-panel-2026?page=${page < totalPages ? page + 1 : totalPages}${filterDate !== 'all' ? `&date=${filterDate}` : ''}`}
                      className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${page >= totalPages ? 'text-gray-300 cursor-not-allowed pointer-events-none' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                      <span className="sr-only">Next</span>
                      <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
