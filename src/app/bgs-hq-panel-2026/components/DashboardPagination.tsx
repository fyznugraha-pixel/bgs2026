import Link from 'next/link';

interface PaginationProps {
  page: number;
  limit: number;
  totalFiltered: number;
  totalPages: number;
  filterDate: string;
}

export default function DashboardPagination({ page, limit, totalFiltered, totalPages, filterDate }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
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
  );
}
