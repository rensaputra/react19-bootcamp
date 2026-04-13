"use server";
import { redirect } from "next/navigation";
import { setCookie } from "@/lib/cookies";

export async function registerUser(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const response = await fetch(`${process.env.MYSTORE_API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errRes = await response.json();
    return redirect(
      `/sign-up?errorMessage=${errRes.message || "Something went wrong. Please try again."}`,
    );
  }

  const resData = await response.json();
  await setCookie({
    name: "customer_jwt_token",
    value: resData.token,
    maxAge: 2 * 60 * 60, // 2 hours
  });
  redirect("/");
}
