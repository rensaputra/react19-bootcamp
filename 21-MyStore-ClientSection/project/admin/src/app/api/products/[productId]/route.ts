"use server";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { ApiResponse, Product } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } },
): Promise<NextResponse<ApiResponse<Product | null>>> {
  try {
    const { productId } = await params;

    const product = await db.product.findUnique({
      where: {
        id: parseInt(productId),
      },
      include: {
        productType: true,
      },
    });

    if (!product) {
      return NextResponse.json(
        {
          message: "Product not found",
          data: null,
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Product found",
        data: product,
      },
      {
        status: 200,
      },
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error instanceof Error ? error.message : "Unknown error",
        data: null,
      },
      {
        status: 500,
      },
    );
  }
}
