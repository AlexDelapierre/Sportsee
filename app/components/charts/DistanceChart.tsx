import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useUserActivity } from "~/hooks/useUserActivity";
import { addDays, getMonday, toApiDate } from "~/utils/dates";
import { getWeeklyDistances } from "~/utils/formatActivity";

export function DistanceChart() {
  const lastMonday = getMonday(new Date());
  const firstMonday = addDays(lastMonday, -21);
  const lastSunday = addDays(lastMonday, 6);

  const { sessions, isLoading, error } = useUserActivity(
    toApiDate(firstMonday),
    toApiDate(lastSunday)
  );
  const weeks = getWeeklyDistances(sessions, firstMonday);
  const totalDistance = weeks.reduce((total, week) => total + week.distance, 0);
  const average = Math.round(totalDistance / weeks.length);

  return (
    <section className="rounded-[20px] bg-white p-10 shadow-card">
      <h3 className="text-[22px] font-medium text-primary">
        {average}km en moyenne
      </h3>
      <p className="mt-2 text-xs text-grey">
        Total des kilomètres 4 dernières semaines
      </p>

      {isLoading && <p className="mt-8 text-sm text-grey">Chargement...</p>}
      {error && (
        <p className="mt-8 text-sm text-secondary">
          Impossible de charger les données.
        </p>
      )}
      {!isLoading && !error && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeks} margin={{ top: 30 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="week" tickLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Legend iconType="circle" align="left" />
            <Bar
              dataKey="distance"
              name="Km"
              fill="#b6bdfc"
              radius={30}
              barSize={14}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </section>
  );
}