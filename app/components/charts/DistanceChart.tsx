import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PeriodNav } from "~/components/charts/PeriodNav";
import { useUserActivity } from "~/hooks/useUserActivity";
import { addDays, formatShortDate, getMonday, toApiDate } from "~/utils/dates";
import { getWeeklyDistances } from "~/utils/formatActivity";

export function DistanceChart() {
  const [weeksBack, setWeeksBack] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const lastMonday = addDays(getMonday(new Date()), -weeksBack * 7);
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
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-[20px] bg-white p-10 shadow-card hover:shadow-card-hover"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[22px] font-medium whitespace-nowrap text-primary">
          {average}km en moyenne
        </h3>
        <PeriodNav
          label={`${formatShortDate(firstMonday)} - ${formatShortDate(lastSunday)}`}
          onPrevious={() => setWeeksBack(weeksBack + 4)}
          onNext={() => setWeeksBack(weeksBack - 4)}
          isNextDisabled={weeksBack === 0}
        />
      </div>
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
          <BarChart data={weeks} margin={{ top: 30, right: 0, left: 0 }}>
            <CartesianGrid vertical={false} stroke="#f1f1f1" strokeDasharray="3 3" />
            <XAxis
              dataKey="week"
              tickLine={false}
              tickMargin={16}
              axisLine={{ stroke: "#717171" }}
              tick={{ fontSize: 12, fill: "#707070" }}
            />
            <YAxis
              tickLine={false}
              width={24}
              tickCount={4}
              axisLine={{ stroke: "#717171" }}
              tick={{ fontSize: 10, fill: "#707070" }}
            />
            <Tooltip
              cursor={false}
              separator=""
              labelFormatter={(_, payload) => payload[0]?.payload.period}
              formatter={(value) => [`${Number(value).toLocaleString("fr-FR")} km`, ""]}
              contentStyle={{ background: "#111111", border: "none", borderRadius: 10 }}
              labelStyle={{ color: "white" }}
              itemStyle={{ color: "white" }}
            />
            <Legend
              align="left"
              wrapperStyle={{ paddingTop: 16 }}
              content={() => (
                <div className="ml-1 flex items-center gap-1 text-xs text-grey">
                  <span className="h-2 w-2 rounded-full bg-[#7987ff]" />
                  Km
                </div>
              )}
            />
            <Bar
              dataKey="distance"
              name="Km"
              fill={isHovered ? "#0b23f4" : "#b6bdfc"}
              radius={30}
              barSize={14}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </section>
  );
}