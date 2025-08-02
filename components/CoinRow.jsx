"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toggleWatchlist, getWatchlist } from "../utils/localStorage";

export default function CoinRow({ coin, index }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const list = getWatchlist();
    setIsSaved(list.includes(coin.id));
  }, [coin.id]);

  const toggle = () => {
    const updated = toggleWatchlist(coin.id);
    setIsSaved(updated.includes(coin.id));
  };

  return (
    <tr className="border-b hover:bg-gray-100 text-sm">
      <td>{index}</td>
      <td>
        <Link href={`/coin/${coin.id}`} className="flex items-center gap-2">
          <img src={coin.image} alt={coin.name} className="w-6 h-6" />
          <div>
            <div>{coin.name}</div>
            <div className="text-gray-500 text-xs">
              {coin.symbol.toUpperCase()}
            </div>
          </div>
        </Link>
      </td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td
        className={
          coin.price_change_percentage_24h >= 0
            ? "text-green-600"
            : "text-red-600"
        }
      >
        {coin.price_change_percentage_24h?.toFixed(2)}%
      </td>
      <td>${coin.market_cap.toLocaleString()}</td>
      <td className="flex items-center justify-between">
        ${coin.total_volume.toLocaleString()}
        <button onClick={toggle}>{isSaved ? "⭐" : "☆"}</button>
      </td>
    </tr>
  );
}
