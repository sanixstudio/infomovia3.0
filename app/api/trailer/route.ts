import { API_KEY, BASE_URL } from "@/utils/constants/api_constants";
import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get("trailer");

//   return NextResponse.json(id);
// }

export async function POST(request: Request) {
  const body = await request.json();
  const movieId = body.movieId;
  const requestMediaType = body.requestMediaType;

  const VIDEOS_MOVIES_URL = `${BASE_URL}movie/${movieId}/videos?language=en-US&api_key=${API_KEY}`;
  const VIDEOS_TV_URL = `${BASE_URL}tv/${movieId}/videos?language=en-US&api_key=${API_KEY}`;

  const trailerUrl =
    requestMediaType === "tv" ? VIDEOS_TV_URL : VIDEOS_MOVIES_URL;

  try {
    const res = await fetch(trailerUrl);
    const trailer = await res.json();
    return NextResponse.json(trailer);
  } catch (err) {
    JSON.stringify({ Error: err });
  }
}
