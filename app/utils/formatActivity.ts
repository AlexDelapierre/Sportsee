import type { ActivitySession } from "~/types/api";

export interface ActivityChartPoint {
  day: number;
  distance: number;
  duration: number;
  caloriesBurned: number;
  heartRateAvg: number;
}

export function formatActivityForChart(
  sessions: ActivitySession[]
): ActivityChartPoint[] {
  return sessions.map((session, index) => ({
    day: index + 1,
    distance: session.distance,
    duration: session.duration,
    caloriesBurned: session.caloriesBurned,
    heartRateAvg: session.heartRate.average,
  }));
}
