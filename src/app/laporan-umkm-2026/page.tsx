import prisma from '@/lib/prisma';
import ExportButton from '@/components/admin/ExportButton';

export const dynamic = 'force-dynamic';

export default async function LaporanUmkm() {
  const registrations = await prisma.umkmRegistration.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const totalAttended = registrations.filter((reg) => reg.isAttended).length;

  const exportData = registrations.map((reg) => ({
    'ID': reg.id,
    'Nama Lengkap': reg.name,
    'Email': reg.email,
    'Nama Usaha': reg.businessName,
    'Kategori': reg.category,
    'No. WhatsApp': reg.whatsapp,
    'Tanggal Event': reg.date,
    'Status Hadir': reg.isAttended ? 'Hadir' : 'Belum Hadir',
    'Waktu Daftar': new Date(reg.createdAt).toLocaleString('id-ID')
  }));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-gray-900 tracking-tight">Laporan Pendaftar UMKM</span>
            <span className="text-sm text-gray-500">BGS 2026</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <p className="mt-1 text-sm text-gray-500">Daftar pelaku usaha yang telah mendaftar sebagai UMKM Bandung Great Sale 2026.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 max-w-xl">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Total Pendaftar UMKM</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{registrations.length}</dd>
            </div>
          </div>

          <div className="bg-blue-50 overflow-hidden shadow-sm rounded-lg border border-blue-200">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-bold text-blue-700 truncate">Total Check-in</dt>
              <dd className="mt-1 text-3xl font-black text-blue-900">{totalAttended}</dd>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-end bg-gray-50/50">
            <ExportButton data={exportData} type="umkm" />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Nama & Info
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Usaha & Kategori
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tanggal Event
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status Hadir
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                      Belum ada data pendaftar UMKM.
                    </td>
                  </tr>
                ) : (
                  registrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{reg.name}</div>
                        <div className="text-sm text-gray-500">{reg.email}</div>
                        <div className="text-sm text-gray-500">{reg.whatsapp}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{reg.businessName}</div>
                        <div className="text-sm text-gray-500">{reg.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          {reg.date}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {reg.isAttended ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-bold rounded-full bg-green-100 text-green-800">
                            Hadir
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-gray-100 text-gray-600">
                            Belum Hadir
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
