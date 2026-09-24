const TOKEN_COOKIE_NAME = "sportsee_token";

export function setCookieToken(token: string) {
  document.cookie = `${TOKEN_COOKIE_NAME}=${token}; path=/; max-age=86400; SameSite=Strict`;
}

export function getCookieToken(): string | null {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${TOKEN_COOKIE_NAME}=([^;]+)`)
  );
  return match ? match[1] : null;
}

export function removeCookieToken() {
  document.cookie = `${TOKEN_COOKIE_NAME}=; path=/; max-age=0`;
}
