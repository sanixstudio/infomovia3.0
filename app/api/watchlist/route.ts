import prisma from "@/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { movies, userId } = await req.json();
    const watchItem = await prisma.watchItem.create({
      data: {
        movies,
        user: {
          connect: {
            id: userId as string,
          },
        },
      },
    });
    if (!watchItem) {
      return new NextResponse(
        JSON.stringify({ message: "Error: Something went wrong" })
      );
    }
    return new NextResponse(JSON.stringify({ message: "Success", watchItem }));
  } catch (err) {
    return res.status(500).json({ message: "Error", error: err });
  }
}
