import { Stats, TVCarousel } from "@/components";
import { Celebrities, Hero } from "@/containers";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const TheCarousel = dynamic(
  () => import("../components/CarouselMultiPlex/CarouselMultiPlex"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Infomovia",
  description: "Movies and TV shows information database",
};

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Hero />
      <TheCarousel title={"Upcoming Movies"} />
      <Celebrities />
      <Stats title="Trending Now" />
      <TVCarousel />
    </div>
  );
}
