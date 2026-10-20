import { useState } from "react";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { PeriodNav } from "~/components/charts/PeriodNav";
import { useUserActivity } from "~/hooks/useUserActivity";
import { addDays, formatShortDate, getMonday, toApiDate } from "~/utils/dates";
import { getDailyHeartRates } from "~/utils/formatActivity";

export function HeartRateChart() {
  const [weeksBack, setWeeksBack] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const monday = addDays(getMonday(new Date()), -weeksBack * 7);
  const sunday = addDays(monday, 6);

  const { sessions, isLoading, error } = useUserActivity(
    toApiDate(monday),
    toApiDate(sunday)
  );
  const days = getDailyHeartRates(sessions, monday);
  const totalAverage = sessions.reduce(
    (total, session) => total + session.heartRate.average,
    0
  );
  const average = sessions.length > 0 ? Math.round(totalAverage / sessions.length) : 0;

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-[20px] bg-white p-10 shadow-card hover:shadow-card-hover"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[22px] font-medium whitespace-nowrap text-secondary">
          {average} BPM
        </h3>
        <PeriodNav
          label={`${formatShortDate(monday)} - ${formatShortDate(sunday)}`}
          onPrevious={() => setWeeksBack(weeksBack + 1)}
          onNext={() => setWeeksBack(weeksBack - 1)}
          isNextDisabled={weeksBack === 0}
        />
      </div>
      <p className="mt-2 text-xs text-grey">Fréquence cardiaque moyenne</p>

      {isLoading && <p className="mt-8 text-sm text-grey">Chargement...</p>}
      {error && (
        <p className="mt-8 text-sm text-secondary">
          Impossible de charger les données.
        </p>
      )}
      {!isLoading && !error && (
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            data={days}
            margin={{ top: 30, right: 0, left: 0 }}
            barGap={4}
          >
            <CartesianGrid vertical={false} stroke="#f1f1f1" strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={16}
              axisLine={{ stroke: "#717171" }}
              tick={{ fontSize: 12, fill: "#707070" }}
            />
            <YAxis
              domain={["dataMin - 5", "dataMax + 5"]}
              tickLine={false}
              width={24}
              tickCount={4}
              axisLine={{ stroke: "#717171" }}
              tick={{ fontSize: 10, fill: "#707070" }}
            />
            <Legend
              align="left"
              wrapperStyle={{ paddingTop: 16 }}
              content={() => (
                <div className="ml-1 flex items-center gap-5 text-xs text-grey">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#fcc1b6]" />
                    Min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#f4320b]" />
                    Max BPM
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#0b23f4]" />
                    BPM moyen
                  </div>
                </div>
              )}
            />
            <Bar dataKey="min" name="Min" fill="#fcc1b6" radius={30} barSize={14} />
            <Bar dataKey="max" name="Max BPM" fill="#f4320b" radius={30} barSize={14} />
            <Line
              dataKey="average"
              name="BPM moyen"
              type="monotone"
              stroke={isHovered ? "#0b23f4" : "#f2f3ff"}
              strokeWidth={3}
              dot={{ r: 4, fill: "#0b23f4", stroke: "#fff", strokeWidth: 1 }}
              connectNulls
            />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </section>
  );
}