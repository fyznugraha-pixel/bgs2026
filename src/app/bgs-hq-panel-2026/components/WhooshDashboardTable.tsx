import DeleteButton from '@/components/admin/DeleteButton';

const packageLabel: Record<string, string> = {
  roundtrip: 'Opsi 1 · Round Trip',
  oneway: 'Opsi 2 · One Way',
};

export default function WhooshDashboardTable({ registrations }: { registrations: any[] }) {
  return (
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
            <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {registrations.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                Belum ada data voucher Whoosh pada filter ini.
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
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <DeleteButton id={reg.id} type="whoosh" />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
