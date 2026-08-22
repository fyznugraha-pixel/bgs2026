import Link from 'next/link';
import prisma from '@/lib/prisma';
import ExportButton from '@/components/admin/ExportButton';
import { redirect } from 'next/navigation';
import DashboardStats from './components/DashboardStats';
import DashboardTable from './components/DashboardTable';
import UmkmDashboardTable from './components/UmkmDashboardTable';
import WhooshDashboardTable from './components/WhooshDashboardTable';
import DashboardPagination from './components/DashboardPagination';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard(props: {
  searchParams: Promise<{ page?: string; date?: string; type?: string; package?: string }>;
}) {
  const searchParams = await props.searchParams;
  const page = parseInt(searchParams?.page || '1', 10);
  const limit = 50;
  const filterDate = searchParams?.date || 'all';
  const type = searchParams?.type || 'visitor';
  const filterPackage = searchParams?.package || 'all';

  // Build where clause based on filter (Whoosh registrations are filtered by package, not event date)
  const whereClause = type === 'whoosh'
    ? (filterPackage !== 'all' ? { packageType: filterPackage } : {})
    : (filterDate !== 'all' ? { date: filterDate } : {});

  // Get data
  let allRegistrations: any[] = [];
  let globalStatsData: any[] = [];

  if (type === 'umkm') {
    allRegistrations = await prisma.umkmRegistration.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' }
    });
    globalStatsData = await prisma.umkmRegistration.findMany();
  } else if (type === 'whoosh') {
    allRegistrations = await prisma.whooshRegistration.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' }
    });
  } else {
    allRegistrations = await prisma.registration.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' }
    });
    globalStatsData = await prisma.registration.findMany();
  }

  const totalRegistrations = filterDate === 'all'
    ? globalStatsData.length
    : globalStatsData.filter(r => r.date === filterDate).length;
  const totalAttended = globalStatsData.filter(r => r.isAttended).length;
  const count21 = globalStatsData.filter(r => r.date === "21 Agustus 2026" && r.isAttended).length;
  const count22 = globalStatsData.filter(r => r.date === "22 Agustus 2026" && r.isAttended).length;
  const count23 = globalStatsData.filter(r => r.date === "23 Agustus 2026" && r.isAttended).length;

  const totalFiltered = allRegistrations.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / limit));

  // Protect against out of bounds page
  if (page > totalPages && totalPages > 0) {
    const extraParam = type === 'whoosh'
      ? (filterPackage !== 'all' ? `&package=${filterPackage}` : '')
      : (filterDate !== 'all' ? `&date=${filterDate}` : '');
    redirect(`/bgs-hq-panel-2026?page=${totalPages}&type=${type}${extraParam}`);
  }

  const currentRegistrations = allRegistrations.slice((page - 1) * limit, page * limit);

  const exportData = type === 'umkm' ? allRegistrations.map((reg) => ({
    'ID': reg.id,
    'Nama Lengkap': reg.name,
    'Email': reg.email,
    'Nama Usaha': reg.businessName,
    'Kategori': reg.category,
    'No. WhatsApp': reg.whatsapp,
    'Tanggal Event': reg.date,
    'Status Hadir': reg.isAttended ? 'Hadir' : 'Belum Hadir',
    'Waktu Scan (Hadir)': reg.attendedAt ? new Date(reg.attendedAt).toLocaleString('id-ID') : '-',
    'Waktu Daftar': new Date(reg.createdAt).toLocaleString('id-ID')
  })) : type === 'whoosh' ? allRegistrations.map((reg) => ({
    'ID': reg.id,
    'Nama Lengkap': reg.name,
    'Email': reg.email,
    'No. WhatsApp': reg.whatsapp,
    'Paket': reg.packageType === 'roundtrip' ? 'Opsi 1 - Round Trip (10 Orang)' : 'Opsi 2 - One Way (20 Orang)',
    'Jumlah Peserta': reg.visitorCount,
    'Waktu Daftar': new Date(reg.createdAt).toLocaleString('id-ID')
  })) : allRegistrations.map((reg) => ({
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
        {type === 'whoosh' ? (
          <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200 mb-8 max-w-xs">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Total Pengajuan Voucher</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{allRegistrations.length}</dd>
            </div>
          </div>
        ) : (
          <DashboardStats stats={{ totalRegistrations, totalAttended, count21, count22, count23 }} />
        )}

        {/* Tabs */}
        <div className="mb-6 flex gap-4 border-b border-gray-200 mt-8">
          <Link href={`/bgs-hq-panel-2026?type=visitor&date=${filterDate}`} className={`pb-2 px-4 border-b-2 font-medium text-sm transition-colors ${type === 'visitor' ? 'border-bgs-blue text-bgs-blue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            Pengunjung Umum
          </Link>
          <Link href={`/bgs-hq-panel-2026?type=whoosh`} className={`pb-2 px-4 border-b-2 font-medium text-sm transition-colors ${type === 'whoosh' ? 'border-bgs-blue text-bgs-blue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            Data Voucher Whoosh
          </Link>
        </div>

        {/* Filters and Table */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
            <div className="flex items-center gap-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {type === 'umkm' ? 'Data UMKM' : type === 'whoosh' ? 'Data Voucher Whoosh' : 'Data Pengunjung'}
              </h3>

              {/* Date Filter (untuk Pengunjung Umum & UMKM) */}
              {type !== 'whoosh' && (
                <form method="GET" action="/bgs-hq-panel-2026" className="flex items-center gap-2">
                  <input type="hidden" name="type" value={type} />
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
              )}

              {/* Package Filter (untuk Voucher Whoosh) */}
              {type === 'whoosh' && (
                <form method="GET" action="/bgs-hq-panel-2026" className="flex items-center gap-2">
                  <input type="hidden" name="type" value={type} />
                  <select
                    name="package"
                    defaultValue={filterPackage}
                    className="text-sm border-gray-300 rounded-md shadow-sm focus:border-bgs-blue focus:ring-bgs-blue py-1.5 pl-3 pr-8"
                  >
                    <option value="all">Semua Paket</option>
                    <option value="roundtrip">Opsi 1 - Round Trip</option>
                    <option value="oneway">Opsi 2 - One Way</option>
                  </select>
                  <button type="submit" className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1.5 rounded-md font-medium border border-gray-300 transition-colors">
                    Filter
                  </button>
                </form>
              )}
            </div>

            <ExportButton data={exportData} type={type} />
          </div>

          {type === 'umkm' ? (
            <UmkmDashboardTable registrations={currentRegistrations} />
          ) : type === 'whoosh' ? (
            <WhooshDashboardTable registrations={currentRegistrations} />
          ) : (
            <DashboardTable registrations={currentRegistrations} />
          )}

          <DashboardPagination
            page={page}
            limit={limit}
            totalFiltered={totalFiltered}
            totalPages={totalPages}
            filterDate={filterDate}
            filterPackage={filterPackage}
            type={type}
          />
        </div>
      </main>
    </div>
  );
}
