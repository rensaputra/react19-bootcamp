"use server";

import { redirect } from "next/navigation";
import { deleteCookie, getCookie, setCookie } from "@/lib/cookies";
import { User } from "@/types/users";

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

export async function loginUser(formData: FormData) {
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const res = await fetch(`${process.env.MYSTORE_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errRes = await res.json();
    return redirect(
      `/login?errorMessage=${errRes.message || "Something went wrong. Please try again."}`,
    );
  }

  const resData = await res.json();
  await setCookie({
    name: "customer_jwt_token",
    value: resData.token,
    maxAge: 2 * 60 * 60,
  }); // 2 hours
  redirect("/");
}

export async function getCustomerData(): Promise<User | null> {
  const res = await fetch(`${process.env.MYSTORE_API_URL}/customer`, {
    credentials: "include",
    headers: {
      Cookie: "customer_jwt_token=" + (await getCookie("customer_jwt_token")),
    },
  });

  if (!res.ok) {
    await deleteCookie("customer_jwt_token");
  }

  const data = await res.json();
  return data?.data || null;
}

export async function logoutUser() {
  await deleteCookie("customer_jwt_token");
}
