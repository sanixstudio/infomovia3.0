import { hashPassword, main } from "@/app/lib/helper";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

// Create new user
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { email, password } = await req.json();
    await main();

    const userAlreadyExists = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userAlreadyExists) {
      return NextResponse.json({ message: "Error: User already exists" });
    }

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

    // const result = await signIn("credentials", {
    //   redirect: false,
    //   email,
    //   password,
    // });

    return NextResponse.json({ message: "Success: ", user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error: ", err }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
