import { MOCK_CREDENTIALS, MOCK_USER_INFO } from "~/mocks/api";
import type { LoginResponse, UserInfoResponse } from "~/types/api";

export async function login(
  username: string,
  password: string
): Promise<LoginResponse> {
  const account = MOCK_CREDENTIALS[username];

  if (!account || account.password !== password) {
    throw new Error("Identifiants invalides");
  }

  return { token: account.userId, userId: account.userId };
}

export async function getUserInfo(token: string): Promise<UserInfoResponse> {
  const userInfo = MOCK_USER_INFO[token];

  if (!userInfo) {
    throw new Error("Utilisateur introuvable");
  }

  return userInfo;
}
