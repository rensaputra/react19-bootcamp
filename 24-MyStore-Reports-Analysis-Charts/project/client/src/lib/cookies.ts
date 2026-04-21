import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export const setCookie = async (options: ResponseCookie) => {
  const cookieStore = await cookies();

  const cookieOptions: ResponseCookie = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    ...options,
  };

  cookieStore.set(cookieOptions);
};

export const getCookie = async (cookieName: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(cookieName)?.value || null;
};

export const deleteCookie = async (cookieName: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
};
