import clsx from "clsx";
import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";
import { twMerge } from "tailwind-merge";
import { User } from "@/types/user";
export function cn(...classNames: (string | boolean | undefined)[]) {
  return twMerge(clsx(classNames));
}

export async function createJWT(user: User) {
  const token = await new SignJWT({
    id: user.id,
    userName: user.userName,
    userType: user.userType,
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
  return token;
}

export async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET),
    );
    return payload;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return false;
  }
}
