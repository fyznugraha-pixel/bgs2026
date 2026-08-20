import prisma from '@/lib/prisma';
import ExportButton from '@/components/admin/ExportButton';

export const dynamic = 'force-dynamic';

const packageLabel: Record<string, string> = {
  roundtrip: 'Opsi 1 · Round Trip',
  oneway: 'Opsi 2 · One Way',
};

export default async function LaporanWhoosh() {
  const registrations = await prisma.whooshRegistration.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const exportData = registrations.map((reg) => ({
    'ID': reg.id,
    'Nama Lengkap': reg.name,
    'Email': reg.email,
    'No. WhatsApp': reg.whatsapp,
    'Paket': reg.packageType === 'roundtrip' ? 'Opsi 1 - Round Trip (10 Orang)' : 'Opsi 2 - One Way (20 Orang)',
    'Jumlah Peserta': reg.visitorCount,
    'Waktu Daftar': new Date(reg.createdAt).toLocaleString('id-ID')
  }));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-gray-900 tracking-tight">Laporan Pendaftar Voucher Whoosh</span>
            <span className="text-sm text-gray-500">BGS 2026</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <p className="mt-1 text-sm text-gray-500">Daftar pengajuan paket rombongan promo Whoosh Bandung Great Sale 2026.</p>
        </div>

        <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200 mb-8 max-w-xs">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Total Pengajuan Voucher</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{registrations.length}</dd>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-end bg-gray-50/50">
            <ExportButton data={exportData} type="whoosh" />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Nama & Kontak
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Paket
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Jumlah Peserta
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tanggal Daftar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                      Belum ada data voucher Whoosh.
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                          {packageLabel[reg.packageType] || reg.packageType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {reg.visitorCount} Orang
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(reg.createdAt).toLocaleString('id-ID')}
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
