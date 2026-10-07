import { MOCK_CREDENTIALS, MOCK_USER_INFO } from "~/mocks/api";
import type { LoginResponse, UserInfoResponse } from "~/types/api";

const API_URL = "http://localhost:8000";
const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

async function request<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${API_URL}${path}`, options);
  } catch {
    throw new Response(null, {
      status: 503,
      statusText: "Serveur indisponible",
    });
  }

  if (!response.ok) {
    throw response;
  }

  return response.json();
}

export async function login(
  username: string,
  password: string
): Promise<LoginResponse> {
  if (USE_MOCK) {
    const account = MOCK_CREDENTIALS[username];

    if (!account || account.password !== password) {
      throw new Response(null, { status: 401 });
    }

    return { token: account.userId, userId: account.userId };
  }

  return request("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
}

export async function getUserInfo(token: string): Promise<UserInfoResponse> {
  if (USE_MOCK) {
    const userInfo = MOCK_USER_INFO[token];

    if (!userInfo) {
      throw new Response(null, { status: 403 });
    }

    return userInfo;
  }

  return request("/api/user-info", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
