export default function ChartRangeSelector({ range, setRange }) {
  const ranges = ["1", "7", "30", "90"];
  return (
    <div className="flex gap-2 mb-4">
      {ranges.map((r) => (
        <button
          key={r}
          className={`px-3 py-1 border rounded ${range === r ? "bg-blue-500 text-white" : ""}`}
          onClick={() => setRange(r)}
        >
          {r}d
        </button>
      ))}
    </div>
  );
}
