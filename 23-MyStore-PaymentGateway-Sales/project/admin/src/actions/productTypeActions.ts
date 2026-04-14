"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { jwtTokenVerification } from "@/actions/authActions";

async function checkProductTypeExists(name: string, redirectPath: string) {
  await jwtTokenVerification();

  const existingProductType = await db.productType.findUnique({
    where: {
      name: name,
    },
  });

  if (existingProductType) {
    return redirect(`${redirectPath}?error=Product Type already exists`);
  }
}

export async function createProductType(formData: FormData) {
  await jwtTokenVerification();

  const data = {
    name: formData.get("name") as string,
  };

  await checkProductTypeExists(data.name, "/product-type/add");

  await db.productType.create({
    data: {
      name: data.name,
    },
  });
  revalidatePath("/product-type", "page");
  redirect("/product-type");
}

export async function getProductTypes() {
  await jwtTokenVerification();
  return await db.productType.findMany();
}

export async function getProductTypeById(id: number) {
  await jwtTokenVerification();

  return await db.productType.findUnique({
    where: {
      id,
    },
  });
}

export async function updateProductType(formData: FormData) {
  await jwtTokenVerification();

  const data = {
    id: Number(formData.get("typeId")),
    name: formData.get("name") as string,
  };

  await checkProductTypeExists(data.name, `/product-type/edit/${data.id}`);

  await db.productType.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.name,
    },
  });

  revalidatePath("/product-type", "page");
  redirect("/product-type");
}

export async function deleteProductType(id: number) {
  await jwtTokenVerification();

  await db.productType.delete({
    where: {
      id,
    },
  });
  revalidatePath("/product-type", "page");
  redirect("/product-type");
}
