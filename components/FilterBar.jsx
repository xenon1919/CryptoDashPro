export default function FilterBar({
  marketCap,
  setMarketCap,
  volume,
  setVolume,
  percentChange,
  setPercentChange,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-6 bg-white p-4 rounded-xl shadow-md">
      <input
        type="number"
        placeholder="Min Market Cap"
        className="p-3 w-full md:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={marketCap}
        onChange={(e) => setMarketCap(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Volume"
        className="p-3 w-full md:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min 24h %"
        className="p-3 w-full md:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={percentChange}
        onChange={(e) => setPercentChange(e.target.value)}
      />
    </div>
  );
}
