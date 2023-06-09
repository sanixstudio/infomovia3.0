import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function session(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    res.status(200).json({ session });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
