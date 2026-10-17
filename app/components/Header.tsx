import { NavLink, useNavigate } from "react-router";
import { removeCookieToken } from "~/utils/token";

function getLinkClass(link: { isActive: boolean }) {
  return link.isActive ? "text-primary" : "text-dark";
}

export function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    removeCookieToken();
    navigate("/");
  }

  return (
    <header className="flex items-center justify-between">
      <img src="/logo.svg" alt="SportSee" />

      <nav className="flex items-center gap-10 rounded-[40px] bg-white/90 px-12 py-4 text-sm">
        <NavLink to="/dashboard" className={getLinkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/profile" className={getLinkClass}>
          Mon profil
        </NavLink>
        <span className="h-[17px] w-px bg-dark" />
        <button onClick={handleLogout} className="text-primary">
          Se déconnecter
        </button>
      </nav>
    </header>
  );
}
