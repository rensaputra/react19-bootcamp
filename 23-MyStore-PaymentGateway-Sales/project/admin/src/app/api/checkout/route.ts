import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyJWT } from "@/lib/utils";
import { ProductSize } from "@/types/product";
import { parse } from "path";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const token = request?.cookies?.get("customer_jwt_token")?.value;
    const decodedToken = token ? await verifyJWT(token) : null;

    if (!decodedToken) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    // Update buyer's address and city
    await db.buyerMaster.update({
      where: {
        email: data.customerEmail,
      },
      data: {
        address: data.address,
        city: data.city,
      },
    });

    // Update product stock based on the order
    for (const product of data.products) {
      const currentProduct = await db.product.findUnique({
        where: {
          id: parseInt(product.id),
        },
      });

      if (currentProduct) {
        const newSizeQuantity =
          currentProduct[product.size as ProductSize] - product.quantity;
        const newCurrentStock = currentProduct.currentStock - product.quantity;

        await db.product.update({
          where: {
            id: parseInt(product.id),
          },
          data: {
            [product.size as ProductSize]: newSizeQuantity,
            currentStock: newCurrentStock,
          },
        });
      }
    }

    // Create a new sales record
    const SODateTime = new Date(data.SODateTime * 1000); // Convert seconds to milliseconds
    const salesData = await db.salesMaster.create({
      data: {
        bId: parseInt(data.customerId),
        SODateTime: SODateTime,
        grandTotalPrice: data.grandTotalPrice,
        paymentMode: data.paymentMode,
        paymentDetails: data.paymentDetails,
      },
    });

    for (const product of data.products) {
      await db.salesTransaction.create({
        data: {
          SMOId: salesData.id,
          productId: parseInt(product.id),
          unitPrice: product.sellPrice,
          qtyPurchased: product.quantity,
          total: product.quantity * product.sellPrice,
        },
      });
    }

    return NextResponse.json({
      message: "Order processed successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
