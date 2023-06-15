import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { hashPassword, main } from "../../lib/helper";
import jwt from "jsonwebtoken";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const users = await prisma.user.findMany();
    return NextResponse.json({ message: "Success: ", users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error: ", err }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

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
        { message: "Error: not found" },
        { status: 404 }
      );
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    return NextResponse.json({ message: "Success: ", token }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error: ", err }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
