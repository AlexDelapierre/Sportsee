import { Outlet, redirect, useNavigate } from "react-router";
import { UserContext } from "~/context/UserContext";
import { getUserInfo } from "~/services/api";
import { getCookieToken, removeCookieToken } from "~/utils/token";
import type { Route } from "./+types/protected";

export async function clientLoader() {
  const token = getCookieToken();
  if (!token) {
    throw redirect("/login");
  }

  try {
    return await getUserInfo(token);
  } catch {
    removeCookieToken();
    throw redirect("/login");
  }
}

export default function Protected({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();

  function handleLogout() {
    removeCookieToken();
    navigate("/login");
  }

  return (
    <UserContext value={loaderData}>
      <button onClick={handleLogout}>Se déconnecter</button>
      <Outlet />
    </UserContext>
  );
}
