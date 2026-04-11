"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { jwtTokenVerification } from "@/actions/authActions";

const UPLOAD_DIR = path.resolve("public/uploads");

export async function createProduct(formData: FormData) {
  await jwtTokenVerification();

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

  if (!file || file.size === 0) {
    return redirect(
      "/products/add?error=Image file is required. Please choose an image to upload.",
    );
  }

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
  await jwtTokenVerification();

  const products = await db.product.findMany({
    include: {
      productType: true,
    },
  });
  return products;
}

export async function getProductById(id: number) {
  await jwtTokenVerification();

  const product = await db.product.findUnique({
    where: {
      id: parseInt(id as unknown as string),
    },
    include: {
      productType: true,
    },
  });

  return product;
}

export async function updateProduct(formData: FormData) {
  await jwtTokenVerification();

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
  const existingImage = formData.get("existingImage") as string;
  const productId = formData.get("productId") as string;

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
  let imagePath = existingImage;

  if (file && file.size > 0) {
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

  await handleDeleteImage(existingImage);

  await db.product.update({
    where: {
      id: Number(productId),
    },
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

export async function handleDeleteImage(imagePath: string) {
  await jwtTokenVerification();

  if (imagePath) {
    const existingImageFullPath = path.join(process.cwd(), "public", imagePath);
    if (fs.existsSync(existingImageFullPath)) {
      fs.unlinkSync(existingImageFullPath); // Delete the existing image file
    }
  }
}

export async function deleteProduct(id: number) {
  await jwtTokenVerification();

  const product = await db.product.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (product) {
    await handleDeleteImage(product.image);
    await db.product.delete({
      where: {
        id: Number(id),
      },
    });
  }

  revalidatePath("/products", "page");
  redirect("/products");
}
