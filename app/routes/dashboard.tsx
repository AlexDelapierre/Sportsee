import { ProfileSummary } from "~/components/ProfileSummary";
import { useUser } from "~/context/UserContext";

export default function Dashboard() {
  const user = useUser();

  return (
    <div className="mx-auto flex max-w-[1052px] flex-col gap-[120px]">
      <section className="flex items-center justify-between rounded-[20px] bg-white px-[50px] py-[30px] shadow-card">
        <ProfileSummary />

        <div className="flex items-center gap-[18px]">
          <p className="text-sm text-grey">Distance totale parcourue</p>
          <div className="flex h-[90px] w-[183px] items-center justify-center gap-[22px] rounded-[10px] bg-primary">
            <img src="/icon-achievement.svg" alt="" />
            <p className="text-[22px] font-medium text-white">
              {user.totalDistance} km
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-[22px] font-medium">Vos dernières performances</h2>
      </section>

      <section>
        <h2 className="text-[22px] font-medium">Cette semaine</h2>
      </section>
    </div>
  );
}
