"use server";
import { getCookie } from "@/lib/cookies";
import type { PaymentStatusSession } from "@/types";

export const updateCheckoutData = async (data: PaymentStatusSession) => {
  const token = await getCookie("customer_jwt_token");
  const response = await fetch(`${process.env.MYSTORE_API_URL}/checkout`, {
    method: "POST",
    credentials: "include",
    headers: {
      Cookie: `customer_jwt_token=${token}`,
    },
    body: JSON.stringify(data),
  });

  const resData = await response.json();
  return resData;
};
