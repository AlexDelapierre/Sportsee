import { MOCK_CREDENTIALS } from "~/mocks/api";
import type { LoginResponse } from "~/types/api";

export async function login(
  username: string,
  password: string
): Promise<LoginResponse> {
  const account = MOCK_CREDENTIALS[username];

  if (!account || account.password !== password) {
    throw new Error("Identifiants invalides");
  }

  return { token: `mock-token-${account.userId}`, userId: account.userId };
}