export default function SearchBar({ search, setSearch }) {
  return (
    <input
      className="p-2 w-full mb-4 border rounded"
      type="text"
      placeholder="Search by name or symbol..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
