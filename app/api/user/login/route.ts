import { main } from "@/app/lib/helper";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// User Login
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { email, password } = await req.json();
    await main();

    const foundUser = await prisma.user.findUnique({ where: { email: email } });

    if (!foundUser) {
      return NextResponse.json(
        { message: "Error: User does not exist" },
        { status: 404 }
      );
    }

    const encryptedPassword = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (!encryptedPassword) {
      return NextResponse.json(
        { message: "Error: Please, check your credentials" },
        { status: 403 }
      );
    }

    const payload = {
      user: {
        id: foundUser.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    return NextResponse.json(
      { message: "Success: ", token, foundUser },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error: ", err }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
