import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PriceChart({ data }) {
  const chartData = data.map(([timestamp, price]) => ({
    time: new Date(timestamp).toLocaleDateString(),
    price,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#3b82f6" />
      </LineChart>
    </ResponsiveContainer>
  );
}
