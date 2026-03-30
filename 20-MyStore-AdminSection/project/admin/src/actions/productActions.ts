"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";

const UPLOAD_DIR = path.resolve("public/uploads");

export async function createProduct(formData: FormData) {
  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    sellPrice: formData.get("sellPrice"),
    mrp: formData.get("mrp"),
    smallSIze: formData.get("smallSize"),
    mediumSize: formData.get("mediumSize"),
    largeSize: formData.get("largeSize"),
    productTypeId: formData.get("productType"),
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
}
