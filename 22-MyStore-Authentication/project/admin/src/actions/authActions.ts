"use server";

import { db } from "@/lib/db";
import { createJWT, verifyJWT } from "@/lib/utils";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { setCookie, getCookie } from "@/lib/cookies";
import { verify } from "crypto";
import { User } from "@/types/user";

export async function loginUser(formData: FormData) {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const user = await db.adminUser.findUnique({
    where: {
      userName: data.username as string,
    },
  });

  const isValidPassword = await bcrypt.compare(
    data.password as string,
    user?.password as string,
  );

  if (!user || !isValidPassword) {
    return redirect(
      "/login?errorMessage=Invalid credentials. Please try again.",
    );
  }

  const token = await createJWT(user);
  await setCookie({ name: "jwt_token", value: token, maxAge: 2 * 60 * 60 }); // 2 hours
  redirect("/");
}

export async function jwtTokenVerification() {
  const token = await getCookie("jwt_token");
  const tokenData = await verifyJWT(token || "");

  if (!tokenData) {
    redirect("/login");
  }

  return tokenData;
}

export async function getUserData(): Promise<User | null> {
  const decodedToken = await jwtTokenVerification();
  const userData = await db.adminUser.findUnique({
    where: {
      id: decodedToken.id as number,
    },
  });

  return userData;
}
