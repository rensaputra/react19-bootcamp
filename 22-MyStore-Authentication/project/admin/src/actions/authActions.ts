"use server";

import { db } from "@/lib/db";
import { createJWT } from "@/lib/utils";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

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
  console.log("Generated JWT:", token);
}
