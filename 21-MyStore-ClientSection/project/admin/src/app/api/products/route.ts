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
      search: searchParams.get("search") || undefined,
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
      ...(filters.search
        ? {
            name: {
              contains: filters.search?.toLocaleLowerCase(),
            },
          }
        : {}),
    };

    const products = await db.product.findMany({
      include: {
        productType: true,
      },
      where: { ...whereClause, isActive: true },
      orderBy: {
        sellPrice:
          filters.sortBy === "priceLowToHigh"
            ? "asc"
            : filters.sortBy === "priceHighToLow"
              ? "desc"
              : undefined,
      },
    });

    return NextResponse.json(
      {
        message: "Products fetched successfully",
        data: products,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      {
        message: "An error occurred while fetching products",
        data: null,
      },
      {
        status: 500,
      },
    );
  }
}
