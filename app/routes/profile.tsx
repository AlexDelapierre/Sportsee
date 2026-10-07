import { useUser } from "~/context/UserContext";

export default function Profile() {
  const { profile, statistics } = useUser();

  return (
    <main>
      <h1>
        {profile.firstName} {profile.lastName}
      </h1>
      <p>Âge : {profile.age} ans</p>
      <p>Taille : {profile.height} cm</p>
      <p>Poids : {profile.weight} kg</p>
      <p>Distance totale : {statistics.totalDistance} km</p>
      <p>Sessions : {statistics.totalSessions}</p>
      <p>Durée totale : {statistics.totalDuration} min</p>
    </main>
  );
}
