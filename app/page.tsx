import { Stats, TvShowCarousel } from "@/components";
import { Celebrities, Hero } from "@/containers";
import { UP_COMING_URL } from "@/utils/constants/api_constants";
import dynamic from "next/dynamic";
const Carousel = dynamic(
  () => import("../components/CarouselMultiPlex/CarouselMultiPlex"),
  {
    ssr: false,
  }
);

export default function Home() {
  const images = [
    "https://picsum.photos/id/43/500/300",
    "https://picsum.photos/id/23/500/300",
    "https://picsum.photos/id/37/500/300",
  ];

  return (
    <div className="bg-slate-900">
      <Hero />
      <Carousel
        title={"Top Picks"}
        fetchUrl={UP_COMING_URL}
        queryName={"upComingMovies"}
      />
      <Celebrities />
      {/* <Carousel title={"Upcoming Movies"} /> */}
      <TvShowCarousel />
      {/* <Stats title="Upcoming Movies" /> */}
    </div>
  );
}
