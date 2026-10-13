export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
      <div className="w-16 h-16 bg-[#FBE8E2] rounded-full flex items-center justify-center mb-4 text-[#FF7A59]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-slate-700 mb-1">
        No Stations Found
      </h3>
      <p className="text-sm text-slate-400 max-w-sm">
        There are no stations added yet. Click the &quot;+ ADD NEW&quot; button
        below to create your first station.
      </p>
    </div>
  );
}
