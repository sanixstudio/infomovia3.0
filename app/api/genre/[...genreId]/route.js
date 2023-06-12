import { UP_COMING_URL } from "@/utils/constants/api_constants";

export async function GET() {
  try {
    const res = await fetch(UP_COMING_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Could not get resource");
    const upcomingMovies = await res.json();
    return new Response(JSON.stringify(upcomingMovies));
  } catch (err) {
    return new Response(JSON.stringify(err));
  }
}
