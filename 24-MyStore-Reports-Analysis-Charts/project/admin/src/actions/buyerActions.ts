"use server";
import { db } from "@/lib/db";
import { jwtTokenVerification } from "./authActions";

export const getAllBuyers = async () => {
  await jwtTokenVerification(); // Ensure the user is authenticated before fetching buyers

  const buyers = await db.buyerMaster.findMany({
    select: {
      id: true,
      customerName: true,
      email: true,
      address: true,
      city: true,
      createdAt: true,
    },
  });
  return buyers;
};
