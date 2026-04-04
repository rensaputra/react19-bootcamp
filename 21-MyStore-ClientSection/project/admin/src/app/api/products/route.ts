import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { ApiResponse, Product } from "@/types";

export async function GET(): Promise<
  NextResponse<ApiResponse<Product[] | null>>
> {
  try {
    const products = await db.product.findMany({
      include: {
        productType: true,
      },
    });

    return NextResponse.json({
      status: 200,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({
      status: 500,
      message: "An error occurred while fetching products",
      data: null,
    });
  }
}
