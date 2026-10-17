import { useEffect, useState } from "react";
import { getUserActivity } from "~/services/api";
import type { ActivitySession } from "~/types/api";
import { getCookieToken } from "~/utils/token";

export function useUserActivity(startDate: string, endDate: string) {
  const [sessions, setSessions] = useState<ActivitySession[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadSessions() {
      const token = getCookieToken();
      if (!token) return;

      setIsLoading(true);
      setError(false);

      try {
        setSessions(await getUserActivity(token, startDate, endDate));
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadSessions();
  }, [startDate, endDate]);

  return { sessions, isLoading, error };
}