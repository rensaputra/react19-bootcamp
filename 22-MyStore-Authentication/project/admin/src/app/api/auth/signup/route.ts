"use server";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createJWT } from "@/lib/utils";

const POST = async (req: Request) => {
  try {
    const { name, email, password } = await req.json();

    const existingCustomer = await db.buyerMaster.findUnique({
      where: { email },
    });

    if (existingCustomer) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 },
      );
    }

    const salt = bcrypt.genSaltSync(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newCustomer = await db.buyerMaster.create({
      data: {
        customerName: name,
        email: email,
        password: hashedPassword,
        address: "",
        city: "",
      },
    });

    const token = await createJWT(newCustomer);

    return NextResponse.json(
      {
        message: "User registered successfully",
        data: newCustomer,
        token,
      },
      { status: 201 },
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: errorMessage,
      },
      { status: 500 },
    );
  }
};

export { POST };
