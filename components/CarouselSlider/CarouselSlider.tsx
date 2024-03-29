"use client";
import { BACKDROP_1280_URL } from "@/utils/constants/api_constants";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselSliderProps = {
  data: {
    id: number;
    title: string;
    backdrop_path: string;
    release_date: string;
    overview: string;
  }[];
  play?: boolean;
};

export default function CarouselSlider({
  data,
  play,
}: CarouselSliderProps): JSX.Element {
  return (
    <Carousel autoPlay={play} infiniteLoop emulateTouch showIndicators={false}>
      {data?.map((el) => (
        <div key={el.id}>
          <Image
            width={1280}
            height={720}
            alt={el.title}
            src={BACKDROP_1280_URL + el.backdrop_path}
            className="object-cover"
          />
          <div className="legend h-1/2 absolute flex flex-col gap-5 justify-end">
            <h2 className="text-xl md:text-4xl px-4 pt-4 text-left font-bold">
              {el.title} - {new Date(el.release_date).getFullYear()}
            </h2>
            <p className="text-md md:text-xl text-left px-4">{el.release_date}</p>
            <p className="max-w-2xl text-left text-lg px-4 line-clamp-3">{el.overview}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
