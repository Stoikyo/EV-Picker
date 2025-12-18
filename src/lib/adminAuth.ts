import { cookies } from "next/headers";
import { requireEnv } from "./env";

const COOKIE_NAME = "admin_auth";

export async function isAdminAuthed() {
  const cookieStore = await cookies();
  const flag = cookieStore.get(COOKIE_NAME)?.value;
  return flag === "1";
}

export function verifyAdminPassword(input: string) {
  const expected = requireEnv("ADMIN_PASSWORD");
  return input === expected;
}

export async function setAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set({
    name: COOKIE_NAME,
    value: "1",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 6, // 6 hours
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
