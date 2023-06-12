import { Stats, Carousel } from "@/components";
import FetchTest from "@/components/FetchTest";
import { Celebrities, Hero } from "@/containers";
import dynamic from "next/dynamic";
const TheCarousel = dynamic(
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
      <TheCarousel title={"Upcoming Movies"} />
      <Celebrities />
      <Stats title="Trending Now" />
      <Carousel />
    </div>
  );
}
