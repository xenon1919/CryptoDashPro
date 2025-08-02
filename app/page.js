"use client";
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import SearchBar from "../components/SearchBar";
import CoinTable from "../components/CoinTable";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import useDebounce from "../utils/useDebounce";

export default function HomePage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const [volume, setVolume] = useState("");
  const [percentChange, setPercentChange] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    setLoading(true);
    setError(false);
    api
      .get("/coins/markets", {
        params: { vs_currency: "usd", per_page: 50, page },
      })
      .then((res) => {
        setCoins(
          res.data.map((coin, index) => ({
            ...coin,
            local_rank: (page - 1) * 50 + index + 1,
          }))
        );
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const filtered = coins.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      c.symbol.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesMarketCap = marketCap
      ? c.market_cap >= parseInt(marketCap)
      : true;
    const matchesVolume = volume ? c.total_volume >= parseInt(volume) : true;
    const matchesPercent = percentChange
      ? c.price_change_percentage_24h >= parseFloat(percentChange)
      : true;
    return matchesSearch && matchesMarketCap && matchesVolume && matchesPercent;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Top Cryptocurrencies</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar
        marketCap={marketCap}
        setMarketCap={setMarketCap}
        volume={volume}
        setVolume={setVolume}
        percentChange={percentChange}
        setPercentChange={setPercentChange}
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading data.</p>
      ) : filtered.length === 0 ? (
        <p>No coins match your filters.</p>
      ) : (
        <CoinTable coins={filtered} />
      )}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
