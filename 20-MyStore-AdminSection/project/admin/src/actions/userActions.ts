import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as bcrypt from "bcrypt";

export const createUser = async (formData: FormData) => {
  "use server";

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
