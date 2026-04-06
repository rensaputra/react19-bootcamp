import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { ApiResponse, Product } from "@/types";

export async function GET(
  request: Request,
): Promise<NextResponse<ApiResponse<Product[] | null>>> {
  try {
    const { searchParams } = new URL(request.url);

    const filters = {
      productTypeId: searchParams.get("productTypeId")
        ? parseInt(searchParams.get("productTypeId")!)
        : undefined,
      sortBy: searchParams.get("sortBy") || undefined,
      minPrice: searchParams.get("minPrice")
        ? Number(searchParams.get("minPrice"))
        : undefined,
      maxPrice: searchParams.get("maxPrice")
        ? Number(searchParams.get("maxPrice"))
        : undefined,
      rating: searchParams.get("rating")
        ? Number(searchParams.get("rating"))
        : undefined,
      inStock: searchParams.get("inStock") || undefined,
    };

    const whereClause = {
      ...(filters.productTypeId
        ? { productTypeId: filters.productTypeId }
        : {}),
      ...(filters.minPrice || filters.maxPrice
        ? {
            sellPrice: {
              gte: filters.minPrice ?? undefined,
              lte: filters.maxPrice ?? undefined,
            },
          }
        : {}),
      ...(filters.rating
        ? {
            rating: {
              gte: filters.rating,
            },
          }
        : {}),
      ...(filters.inStock === "true"
        ? { currentStock: { gt: 0 } }
        : filters.inStock === "false"
          ? { currentStock: 0 }
          : {}),
    };

    const products = await db.product.findMany({
      include: {
        productType: true,
      },
      where: whereClause,
      orderBy: {
        sellPrice:
          filters.sortBy === "priceLowToHigh"
            ? "asc"
            : filters.sortBy === "priceHighToLow"
              ? "desc"
              : undefined,
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
