import { useUser } from "~/context/UserContext";

export default function Dashboard() {
  const { profile } = useUser();

  return <h1>Bonjour {profile.firstName}</h1>;
}
