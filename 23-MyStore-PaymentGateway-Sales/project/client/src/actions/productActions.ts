"use server";

import { ApiResponse, Product, ProductType } from "@/types";
import { SearchParams } from "next/dist/server/request/search-params";
import { objectToQueryString } from "@/lib/utils";
export async function getProducts(
  searchParams: SearchParams,
): Promise<Product[]> {
  try {
    const filteredSearchParams = { ...searchParams };
    delete filteredSearchParams.openAccordion;
    const queryString = objectToQueryString(filteredSearchParams);

    const response = await fetch(
      `${process.env.MYSTORE_API_URL}/products?${queryString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok || response.status !== 200) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const apiResponse: ApiResponse<Product[]> = await response.json();

    return apiResponse.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProductTypes(): Promise<ProductType[]> {
  try {
    const response = await fetch(
      `${process.env.MYSTORE_API_URL}/products/product-type`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok || response.status !== 200) {
      throw new Error(`Failed to fetch product types: ${response.statusText}`);
    }

    const apiResponse: ApiResponse<ProductType[]> = await response.json();

    return apiResponse.data;
  } catch (error) {
    console.error("Error fetching product types:", error);
    throw error;
  }
}

export async function getProductById(productId: number): Promise<Product> {
  try {
    const res = await fetch(
      `${process.env.MYSTORE_API_URL}/products/${productId}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      },
    );

    if (!res.ok || res.status !== 200) {
      throw new Error(`Failed to get product,: ${res.statusText}`);
    }

    const apiResponse: ApiResponse<Product> = await res.json();

    return apiResponse.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
