import { WeeklyGoalChart } from "~/components/charts/WeeklyGoalChart";
import { useUserActivity } from "~/hooks/useUserActivity";
import { addDays, getMonday, toApiDate } from "~/utils/dates";

const WEEKLY_GOAL = 6;

export function ThisWeek() {
  const monday = getMonday(new Date());
  const sunday = addDays(monday, 6);

  const { sessions, isLoading, error } = useUserActivity(
    toApiDate(monday),
    toApiDate(sunday)
  );
  const done = sessions.length;
  const duration = sessions.reduce((total, session) => total + session.duration, 0);
  const totalDistance = sessions.reduce((total, session) => total + session.distance, 0);
  const distance = Math.round(totalDistance * 10) / 10;

  return (
    <section>
      <h2 className="text-[22px] font-medium">Cette semaine</h2>
      <p className="mt-1 text-grey">
        Du {monday.toLocaleDateString("fr-FR")} au {sunday.toLocaleDateString("fr-FR")}
      </p>

      {isLoading && <p className="mt-8 text-sm text-grey">Chargement...</p>}
      {error && (
        <p className="mt-8 text-sm text-secondary">
          Impossible de charger les données.
        </p>
      )}
      {!isLoading && !error && (
        <div className="mt-8 grid grid-cols-[445px_1fr] gap-6">
          <WeeklyGoalChart done={done} goal={WEEKLY_GOAL} />

          <div className="flex flex-col gap-6">
            <div className="rounded-[20px] bg-white px-9 py-6 shadow-card">
              <p className="text-sm text-grey">Durée d'activité</p>
              <p className="mt-3 text-[22px] font-medium text-primary">
                {duration}{" "}
                <span className="text-base text-primary-light">minutes</span>
              </p>
            </div>
            <div className="rounded-[20px] bg-white px-9 py-6 shadow-card">
              <p className="text-sm text-grey">Distance</p>
              <p className="mt-3 text-[22px] font-medium text-secondary">
                {distance}{" "}
                <span className="text-base text-secondary-light">kilomètres</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
