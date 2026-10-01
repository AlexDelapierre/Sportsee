import { Outlet, redirect, useNavigate } from "react-router";
import { getCookieToken, removeCookieToken } from "~/utils/token";

export function clientLoader() {
  if (!getCookieToken()) {
    throw redirect("/login");
  }
}

export default function Protected() {
  const navigate = useNavigate();

  function handleLogout() {
    removeCookieToken();
    navigate("/login");
  }

  return (
    <>
      <button onClick={handleLogout}>Se déconnecter</button>
      <Outlet />
    </>
  );
}
