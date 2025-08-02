"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "../../../utils/api";
import PriceChart from "../../../components/PriceChart";

export default function CoinDetailPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [chart, setChart] = useState([]);

  useEffect(() => {
    if (!id) return;
    api.get(`/coins/${id}`).then((res) => setCoin(res.data));
    api
      .get(`/coins/${id}/market_chart`, {
        params: { vs_currency: "usd", days: 7 },
      })
      .then((res) => setChart(res.data.prices));
  }, [id]);

  if (!coin) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        {coin.name} ({coin.symbol.toUpperCase()})
      </h1>
      <p>
        Current Price: ${coin.market_data.current_price.usd.toLocaleString()}
      </p>
      <p>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
      <p>Rank: #{coin.market_cap_rank}</p>
      <p>Volume: ${coin.market_data.total_volume.usd.toLocaleString()}</p>
      <PriceChart data={chart} />
    </div>
  );
}
