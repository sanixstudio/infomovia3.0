import prisma from "@/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const params = req.url;
  const userId = params?.split("/").at(-1);

  try {
    const watchlist = await prisma.watchItem.findMany({
      where: {
        userId: userId,
      },
    });

    const data = JSON.stringify(watchlist);

    return new Response(data, {});
  } catch (err) {
    return new Response(JSON.stringify({ error: err }), {
      status: 500,
    });
  }
}
