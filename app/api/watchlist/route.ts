import { main } from "@/app/lib/helper";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextResponse) {
  const movie = {
    id: 385687,
    adult: false,
    backdrop_path: "/2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg",
    genre_ids: [28, 80, 53],
    overview:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    popularity: 11708.862,
    poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    release_date: "2023-05-17",
    title: "Fast X",
    vote_average: 7.4,
    vote_count: 1413,
  };

  try {
    await main();
    const watchlist = await prisma.watchItem.findMany();
    return NextResponse.json(
      { message: "Error: ", watchlist },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error: ", err }, { status: 500 });
  }
}

export async function POST(req: Request, res: NextResponse) {
  try {
    const { movies, userId } = await req.json();
    await main();
    const watchItem = await prisma.watchItem.create({
      data: {
        movies,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return NextResponse.json(
      { message: "Success: ", watchItem },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error: ", err }, { status: 500 });
  }
}
