import prisma from "@/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const params = req.url;
  const id = params?.split("/").at(-1);
  try {
    const watchItems = await prisma.watchItem.findMany({
      where: { userId: id },
    });

    return new Response(JSON.stringify({ msg: "success", watchItems }));
  } catch (err) {
    return new Response(JSON.stringify({ msg: "Error: " + err, status: 500 }));
  }
}
