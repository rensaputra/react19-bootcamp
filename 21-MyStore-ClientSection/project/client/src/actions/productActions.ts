"use server";

import { ApiResponse, Product } from "@/types";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${process.env.MYSTORE_API_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const apiResponse: ApiResponse<Product[]> = await response.json();

    if (apiResponse.status !== 200) {
      throw new Error(apiResponse.message);
    }

    return apiResponse.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
