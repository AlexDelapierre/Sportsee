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
  } catch (error) {
    if (
      error instanceof Response &&
      (error.status === 401 || error.status === 403)
    ) {
      removeCookieToken();
      throw redirect("/login");
    }

    throw error;
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
