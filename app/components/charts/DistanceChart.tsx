import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

const weeks = [
  { week: "S1", distance: 20 },
  { week: "S2", distance: 25 },
  { week: "S3", distance: 16 },
  { week: "S4", distance: 30 },
];

export function DistanceChart() {
  return (
    <section className="rounded-[20px] bg-white p-10 shadow-card">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={weeks}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="week" tickLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Bar dataKey="distance" fill="#b6bdfc" radius={30} barSize={14} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}