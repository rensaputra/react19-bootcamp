"use server";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { ApiResponse, ProductType } from "@/types";
const GET = async (): Promise<NextResponse<ApiResponse<ProductType[]>>> => {
  try {
    const res = await db.productType.findMany();
    return NextResponse.json(
      {
        message: "Product types fetched successfully",
        data: res,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error fetching product types:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch product types",
        data: [],
      },
      {
        status: 500,
      },
    );
  }
};

export { GET };
