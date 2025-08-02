"use client";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { getWatchlist } from "../../utils/localStorage";
import CoinTable from "../../components/CoinTable";

export default function WatchlistPage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ids = getWatchlist();
    if (ids.length === 0) {
      setCoins([]);
      setLoading(false);
      return;
    }

    api
      .get("/coins/markets", {
        params: { vs_currency: "usd", ids: ids.join(",") },
      })
      .then((res) => setCoins(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">My Watchlist</h1>
      {loading ? <p>Loading...</p> : <CoinTable coins={coins} />}
    </div>
  );
}
