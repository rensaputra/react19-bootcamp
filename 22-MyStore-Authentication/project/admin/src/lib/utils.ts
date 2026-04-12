import clsx from "clsx";
import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";
import { twMerge } from "tailwind-merge";
import { Buyer, User } from "@/types/user";
export function cn(...classNames: (string | boolean | undefined)[]) {
  return twMerge(clsx(classNames));
}

// Type guard to safely narrow User vs Buyer types, type predicate is used to inform TypeScript about the type of user
function isUser(user: User | Buyer): user is User {
  return "userName" in user && "userType" in user;
}

export async function createJWT(user: User): Promise<string>;
export async function createJWT(user: Buyer): Promise<string>;
export async function createJWT(user: User | Buyer): Promise<string> {
  const payload = isUser(user)
    ? {
        id: user.id,
        userName: user.userName,
        userType: user.userType,
      }
    : {
        id: user.id,
        customerName: user.customerName,
        email: user.email,
      };

  const token = await new SignJWT(payload)
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
