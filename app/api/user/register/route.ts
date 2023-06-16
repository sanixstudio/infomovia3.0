import { hashPassword, main } from "@/app/lib/helper";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { signIn } from "next-auth/react";

// Create new user
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { email, password } = await req.json();
    await main();

    const encryptedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: { email, password: encryptedPassword },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Error: Something went wrong" },
        { status: 401 }
      );
    }

    // const payload = {
    //   user: {
    //     id: user.id,
    //   },
    // };

    // const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    //   expiresIn: "1h",
    // });

    const result = await signIn("credentials", {
      redirect: false,
      email: "user@example.com",
      password: "password",
    });

    return NextResponse.json(
      { message: "Success: ", result, user },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error: ", err }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
