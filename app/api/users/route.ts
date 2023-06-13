import prisma from "@/prisma";
import { NextResponse } from "next/server";

async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const users = await prisma.users.findMany();
    return NextResponse.json({ message: "Success: ", users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error: ", err }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { email, password } = await req.json();
    await main();

    const user = await prisma.users.create({ data: { email, password } });
    return NextResponse.json({ message: "Success: ", user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error: ", err }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
