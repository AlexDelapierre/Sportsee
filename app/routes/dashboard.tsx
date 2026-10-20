import { ProfileSummary } from "~/components/ProfileSummary";
import { useUser } from "~/context/UserContext";
import { DistanceChart } from "~/components/charts/DistanceChart";
import { HeartRateChart } from "~/components/charts/HeartRateChart";
import { ThisWeek } from "~/components/ThisWeek";

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
        <div className="mt-8 grid grid-cols-[445px_1fr] gap-6">
          <DistanceChart />
          <HeartRateChart />
        </div>
      </section>

      <ThisWeek />
    </div>
  );
}
