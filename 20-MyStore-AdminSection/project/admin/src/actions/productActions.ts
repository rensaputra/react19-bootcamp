"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";

const UPLOAD_DIR = path.resolve("public/uploads");

export async function createProduct(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    sellPrice: formData.get("sellPrice") as string,
    mrp: formData.get("mrp") as string,
    smallSize: formData.get("smallSize") as string,
    mediumSize: formData.get("mediumSize") as string,
    largeSize: formData.get("largeSize") as string,
    productTypeId: formData.get("productType") as string,
    isActive: formData.get("isActive") === "on" ? true : false,
  };
  console.log("Received form data:", data);

  const productType = await db.productType.findUnique({
    where: {
      id: Number(data.productTypeId),
    },
  });

  if (!productType) {
    return redirect(
      "/products/add?error=Product type not found. Please try with different product type.",
    );
  }

  const file = formData.get("image") as File;
  let imagePath = "";

  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const fileName = Date.now() + path.extname(file.name);
    imagePath = `/uploads/${fileName}`;

    const fullPath = path.join(process.cwd(), "public", imagePath);
    await writeFile(fullPath, buffer);
  }

  const totalStock =
    parseInt(data.smallSize) +
    parseInt(data.mediumSize) +
    parseInt(data.largeSize);

  await db.product.create({
    data: {
      name: data.name,
      description: data.description,
      sellPrice: parseFloat(data.sellPrice),
      mrp: parseFloat(data.mrp),
      smallSize: parseInt(data.smallSize),
      mediumSize: parseInt(data.mediumSize),
      largeSize: parseInt(data.largeSize),
      currentStock: totalStock,
      productTypeId: Number(data.productTypeId),
      isActive: data.isActive,
      image: imagePath,
    },
  });

  revalidatePath("/products", "page");
  redirect("/products");
}

export async function getProducts() {
  const products = await db.product.findMany({
    include: {
      productType: true,
    },
  });
  return products;
}
