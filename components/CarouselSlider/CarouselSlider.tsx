"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BACKDROP_1280 } from "@/utils/constants/media-constants";
import data from "../../utils/data.json";

export default function CarouselSlider(): JSX.Element {
  return (
    <div className="max-h-[720px] width-[1440px] overflow-hidden">
      <Carousel autoPlay infiniteLoop emulateTouch>
        {data.map((el) => (
          <div key={el.id}>
            <Image
              width={1280}
              height={720}
              alt={el.title}
              src={BACKDROP_1280 + el.backdrop_path}
            />
            <p className="legend">{el.overview}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
