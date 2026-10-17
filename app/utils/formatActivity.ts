import type { ActivitySession } from "~/types/api";
import { addDays, formatDayMonth, toApiDate } from "~/utils/dates";

export interface WeekDistance {
  week: string;
  distance: number;
  period: string;
}

export function getWeeklyDistances(
  sessions: ActivitySession[],
  firstMonday: Date
): WeekDistance[] {
  const weeks: WeekDistance[] = [];

  for (let i = 0; i < 4; i++) {
    const monday = addDays(firstMonday, i * 7);
    const sunday = addDays(monday, 6);
    const weekSessions = sessions.filter(
      (session) =>
        session.date >= toApiDate(monday) && session.date <= toApiDate(sunday)
    );
    const distance = weekSessions.reduce(
      (total, session) => total + session.distance,
      0
    );

    weeks.push({
      week: `S${i + 1}`,
      distance: Math.round(distance * 10) / 10,
      period: `${formatDayMonth(monday)} au ${formatDayMonth(sunday)}`,
    });
  }

  return weeks;
}