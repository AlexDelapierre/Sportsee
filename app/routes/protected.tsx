import { Outlet, redirect } from "react-router";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { UserContext } from "~/context/UserContext";
import { getUserInfo } from "~/services/api";
import { getCookieToken, removeCookieToken } from "~/utils/token";
import type { Route } from "./+types/protected";

export async function clientLoader() {
  const token = getCookieToken();
  if (!token) {
    throw redirect("/");
  }

  try {
    return await getUserInfo(token);
  } catch (error) {
    if (
      error instanceof Response &&
      // backend: 401 = no token, 403 = invalid or expired token
      (error.status === 401 || error.status === 403)
    ) {
      removeCookieToken();
      throw redirect("/");
    }

    throw error;
  }
}

export default function Protected({ loaderData }: Route.ComponentProps) {
  return (
    <UserContext value={loaderData}>
      <div className="flex min-h-screen flex-col">
        <div className="flex-1 px-10 pt-[35px] pb-20">
          <div className="mx-auto max-w-[1140px]">
            <Header />
            <main className="mt-[108px]">
              <Outlet />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </UserContext>
  );
}
