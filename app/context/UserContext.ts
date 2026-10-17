import { createContext, useContext } from "react";
import type { User } from "~/utils/formatUserInfo";

export const UserContext = createContext<User | null>(null);

export function useUser() {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error("useUser doit être utilisé dans une page protégée");
  }

  return user;
}
