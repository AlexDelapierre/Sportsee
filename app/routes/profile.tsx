import { ProfileSummary } from "~/components/ProfileSummary";
import { StatCard } from "~/components/StatCard";
import { useUser } from "~/context/UserContext";
import { useUserActivity } from "~/hooks/useUserActivity";
import { countDays, toApiDate } from "~/utils/dates";

export default function Profile() {
  const user = useUser();
  const today = toApiDate(new Date());
  const { sessions, isLoading, error } = useUserActivity(user.createdAt, today);

  const calories = sessions.reduce(
    (total, session) => total + session.caloriesBurned,
    0
  );
  const activeDays = new Set(sessions.map((session) => session.date)).size;
  const restDays = countDays(user.createdAt, today) - activeDays;

  return (
    <div className="flex gap-[57px]">
      <div className="flex w-[508px] shrink-0 flex-col gap-4">
        <section className="rounded-[10px] bg-white py-6 pr-[52px] pl-8 shadow-card">
          <ProfileSummary />
        </section>

        <section className="rounded-[10px] bg-white px-7 pt-10 pb-[60px] shadow-card">
          <h2 className="border-b border-light-grey pb-6 text-[22px] font-medium">
            Votre profil
          </h2>
          <ul className="mt-8 flex flex-col gap-6 font-medium text-grey">
            <li>Âge : {user.age}</li>
            <li>Taille : {user.height}</li>
            <li>Poids : {user.weight}kg</li>
          </ul>
        </section>
      </div>

      <section className="flex-1">
        <h2 className="text-[22px] font-medium">Vos statistiques</h2>
        <p className="text-sm text-grey">depuis le {user.memberSince}</p>

        <div className="mt-[30px] grid grid-cols-2 gap-[19px]">
          <StatCard
            label="Temps total couru"
            value={`${user.totalHours}h`}
            unit={`${user.totalMinutes}min`}
          />
          <StatCard
            label="Calories brûlées"
            value={isLoading ? "..." : calories}
            unit="cal"
          />
          <StatCard
            label="Distance totale parcourue"
            value={user.totalDistance}
            unit="km"
          />
          <StatCard
            label="Nombre de jours de repos"
            value={isLoading ? "..." : restDays}
            unit="jours"
          />
          <StatCard
            label="Nombre de sessions"
            value={user.totalSessions}
            unit="sessions"
          />
        </div>
        {error && (
          <p className="mt-4 text-sm text-secondary">
            Impossible de charger les calories et les jours de repos.
          </p>
        )}
      </section>
    </div>
  );
}
