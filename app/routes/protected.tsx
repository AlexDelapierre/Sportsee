import { Outlet, redirect } from "react-router";
import { Nav } from "~/components/Nav";
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
  return (
    <UserContext value={loaderData}>
      <Nav />
      <Outlet />
    </UserContext>
  );
}
