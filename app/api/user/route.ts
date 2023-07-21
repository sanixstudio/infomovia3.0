import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { main } from "../../lib/helper";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const users = await prisma.user.findMany({});
    return NextResponse.json({ message: "Success: ", users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error: ", err }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
