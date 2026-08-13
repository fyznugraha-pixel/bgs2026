import DeleteButton from '@/components/admin/DeleteButton';

export default function DashboardTable({ registrations }: { registrations: any[] }) {
  return (
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
          {registrations.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                Belum ada data pada filter ini.
              </td>
            </tr>
          ) : (
            registrations.map((reg) => (
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
  );
}
