import prisma from "@/prisma";
import { NextResponse } from "next/server";

async function main() {
  try {
    await prisma.$connect();
  } catch (e) {
    return Error(`Error: ${e}`);
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const users = await prisma.user.findMany();
    return NextResponse.json({ message: "Success: ", users }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Error: ", e }, { status: 500 });
  }
};
export const POST = (req: Request, res: NextResponse) => {
  console.log("POST");
};
