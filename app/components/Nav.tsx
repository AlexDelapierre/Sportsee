import { Link, useNavigate } from "react-router";
import { removeCookieToken } from "~/utils/token";

export function Nav() {
  const navigate = useNavigate();

  function handleLogout() {
    removeCookieToken();
    navigate("/login");
  }

  return (
    <nav>
      <Link to="/dashboard">Tableau de bord</Link>
      <Link to="/profile">Profil</Link>
      <button onClick={handleLogout}>Se déconnecter</button>
    </nav>
  );
}
