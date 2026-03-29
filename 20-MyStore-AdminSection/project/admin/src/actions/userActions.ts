"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as bcrypt from "bcrypt";

export const createUser = async (formData: FormData) => {
  const data = {
    userName: formData.get("userName"),
    userType: formData.get("userType"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const existingUser = await db.adminUser.findUnique({
    where: {
      userName: String(data.userName),
    },
  });

  if (existingUser) {
    return redirect(
      `/users/add?error=Username already exists. Please choose another one.`,
    );
  }

  const salt = bcrypt.genSaltSync(5);
  const hashedPassword = await bcrypt.hash(String(data.password), salt);

  await db.adminUser.create({
    data: {
      userName: String(data.userName),
      userType: String(data.userType),
      password: hashedPassword,
    },
  });

  revalidatePath("/users", "page");
  redirect("/users");
};

export const getUsers = async () => {
  const users = await db.adminUser.findMany();
  return users;
};

export const getUniqueUser = async (id: number) => {
  const user = await db.adminUser.findUnique({
    where: {
      id: id,
    },
  });
  return user;
};

export const updateUser = async (formData: FormData) => {
  const userId = Number(formData.get("userId"));
  const data = {
    userName: formData.get("userName"),
    userType: formData.get("userType"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  let hashedPassword = "";
  if (data.password) {
    const salt = bcrypt.genSaltSync(5);
    hashedPassword = await bcrypt.hash(String(data.password), salt);
  }

  await db.adminUser.update({
    where: {
      id: userId,
    },
    data: {
      userName: String(data.userName),
      userType: String(data.userType),
      ...(data.password && { password: hashedPassword }),
    },
  });

  revalidatePath("/users", "page");
  redirect("/users");
};

export const deleteUser = async (userId: number) => {
  await db.adminUser.delete({
    where: {
      id: userId,
    },
  });

  revalidatePath("/users", "page");
  redirect("/users");
};
