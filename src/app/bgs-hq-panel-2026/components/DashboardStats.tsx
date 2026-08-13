export interface StatsData {
  totalRegistrations: number;
  totalAttended: number;
  count21: number;
  count22: number;
  count23: number;
}

export default function DashboardStats({ stats }: { stats: StatsData }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 mb-8">
      <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">Total Pendaftar</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.totalRegistrations}</dd>
        </div>
      </div>
      
      <div className="bg-blue-50 overflow-hidden shadow-sm rounded-lg border border-blue-200">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-bold text-blue-700 truncate">Total Check-in (Semua)</dt>
          <dd className="mt-1 text-3xl font-black text-blue-900">{stats.totalAttended}</dd>
        </div>
      </div>
      
      <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">Check-in 21 Ags</dt>
          <dd className="mt-1 text-2xl font-semibold text-gray-900">{stats.count21}</dd>
        </div>
      </div>
      
      <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">Check-in 22 Ags</dt>
          <dd className="mt-1 text-2xl font-semibold text-gray-900">{stats.count22}</dd>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">Check-in 23 Ags</dt>
          <dd className="mt-1 text-2xl font-semibold text-gray-900">{stats.count23}</dd>
        </div>
      </div>
    </div>
  );
}
