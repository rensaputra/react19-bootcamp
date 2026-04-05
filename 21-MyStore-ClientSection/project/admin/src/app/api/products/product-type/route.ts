"use server";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { ApiResponse, ProductType } from "@/types";
const GET = async (): Promise<NextResponse<ApiResponse<ProductType[]>>> => {
  try {
    const res = await db.productType.findMany();
    return NextResponse.json({
      status: 200,
      message: "Product types fetched successfully",
      data: res,
    });
  } catch (error) {
    console.error("Error fetching product types:", error);
    return NextResponse.json({
      status: 500,
      message: "Failed to fetch product types",
      data: [],
    });
  }
};

export { GET };
