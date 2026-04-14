import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createJWT } from "@/lib/utils";

export const POST = async (request: Request) => {
  try {
    const { email, password } = await request.json();

    const user = await db.buyerMaster.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid email or password",
        },
        {
          status: 401,
        },
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const token = await createJWT(user);
    return NextResponse.json({
      message: "Login successful",
      token,
    });
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
