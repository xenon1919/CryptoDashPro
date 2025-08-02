import CoinRow from "./CoinRow";

export default function CoinTable({ coins }) {
  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="border-b">
          <th className="text-left">#</th>
          <th className="text-left">Coin</th>
          <th className="text-left">Price</th>
          <th className="text-left">24h %</th>
          <th className="text-left">Market Cap</th>
          <th className="text-left">Volume</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
