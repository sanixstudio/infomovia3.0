import { Celebrities, Hero } from "@/containers";
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
    <div>
      <Hero />
      <Carousel title={"Top Picks"} />
      <Celebrities />
    </div>
  );
}
