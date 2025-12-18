import { cookies } from "next/headers";
import { requireEnv } from "./env";

const COOKIE_NAME = "admin_auth";

export function isAdminAuthed() {
  const cookieStore = cookies();
  const flag = cookieStore.get(COOKIE_NAME)?.value;
  return flag === "1";
}

export function verifyAdminPassword(input: string) {
  const expected = requireEnv("ADMIN_PASSWORD");
  return input === expected;
}

export function setAdminSession() {
  const cookieStore = cookies();
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

export function clearAdminSession() {
  const cookieStore = cookies();
  cookieStore.delete(COOKIE_NAME);
}
