import { createContext, useContext } from "react";
import type { UserInfoResponse } from "~/types/api";

export const UserContext = createContext<UserInfoResponse | null>(null);

export function useUser() {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error("useUser doit être utilisé dans une page protégée");
  }

  return user;
}
