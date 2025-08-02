export default function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center mt-8 gap-4">
      <button
        className="px-5 py-2 text-sm font-medium bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 disabled:opacity-50 transition"
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        ⬅ Previous
      </button>
      <span className="text-lg font-semibold">Page {page}</span>
      <button
        className="px-5 py-2 text-sm font-medium bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next ➡
      </button>
    </div>
  );
}
