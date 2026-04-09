import clsx from "clsx";
import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: (string | boolean | undefined)[]) {
  return twMerge(clsx(classNames));
}

export async function createJWT(user) {
  const token = await new SignJWT(user)
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
  return token;
}

export async function verifyJWT(token) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET),
    );
    return payload;
  } catch (error) {
    return false;
  }
}
