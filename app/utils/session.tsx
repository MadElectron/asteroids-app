import { SignJWT } from "jose";

export async function encrypt(payload: SessionPayload) {
  // const encodedKey = new TextEncoder().encode(process.env.JWT_SECRET);

  const encodedKey = new TextEncoder().encode("1234567890");

  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function createSession(userId: number) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const token = await encrypt({ userId, expiresAt });

  localStorage.setItem("token", token);
}

export async function destroySession() {
  localStorage.removeItem("token");
}

export function getToken() {
  return localStorage.getItem("token");
}
