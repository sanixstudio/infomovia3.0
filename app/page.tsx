import { Stats, TvShowCarousel } from "@/components";
import FetchTest from "@/components/FetchTest";
import { Celebrities, Hero } from "@/containers";
import dynamic from "next/dynamic";
const Carousel = dynamic(
  () => import("../components/CarouselMultiPlex/CarouselMultiPlex"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Hero />
      <FetchTest />
      <Carousel title={"Upcoming Movies"} />
      <Celebrities />
      {/* <Carousel title={"Upcoming Movies"} /> */}
      <Stats title="Trending Now" />
      <TvShowCarousel />
    </div>
  );
}
