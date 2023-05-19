"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BACKDROP_1280 } from "@/utils/constants/media-constants";
import data from "../../utils/data.json";

export default function CarouselSlider(): JSX.Element {
  return (
    <div className="width-[1440px] overflow-hidden">
      <Carousel autoPlay infiniteLoop emulateTouch showIndicators={false}>
        {data.map((el) => (
          <div key={el.id}>
            <Image
              width={1280}
              height={720}
              alt={el.title}
              src={BACKDROP_1280 + el.backdrop_path}
            />
            <div className="legend h-1/3 absolute flex flex-col gap-5">
              <h2 className="text-6xl text-left font-bold">
                {el.title} - {new Date(el.release_date).getFullYear()}
              </h2>
              <p className="text-left text-lg">{el.overview}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
