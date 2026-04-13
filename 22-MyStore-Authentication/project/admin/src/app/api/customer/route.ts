import { NextResponse } from "next/server";
import { verifyJWT } from "@/lib/utils";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const token = request?.cookies?.get("customer_jwt_token")?.value;
    const decodedToken = await verifyJWT(token || "");

    if (
      !decodedToken ||
      !decodedToken.email ||
      typeof decodedToken.email !== "string"
    ) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    const customerData = await db.buyerMaster.findUnique({
      where: {
        email: decodedToken.email,
      },
    });

    if (!customerData) {
      return NextResponse.json(
        {
          message: "Customer not found",
        },
        { status: 404 },
      );
    }
    const { password: _, ...customerDataWithoutPassword } = customerData;
    return NextResponse.json(
      {
        message: "Customer data fetched successfully",
        data: customerDataWithoutPassword,
      },
      { status: 200 },
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      {
        message: "Something went wrong fetching customer data",
        error: errorMessage,
      },
      { status: 500 },
    );
  }
}
