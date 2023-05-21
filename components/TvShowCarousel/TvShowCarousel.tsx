import React from "react";
import Image from "next/image";

const TvShowCarousel = () => {
  return (
    <div className="my-24 max-w-[1440px] rounded-xl bg-slate-900 p-4 mx-auto">
      <h1 className="text-4xl mb-10">Latest TV Show</h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            width={1280}
            height={720}
            alt=""
            src="https://image.tmdb.org/t/p/w1280/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg"
            className="object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            width={1280}
            height={720}
            alt=""
            src="https://image.tmdb.org/t/p/w1280/eTvN54pd83TrSEOz6wbsXEJktCV.jpg"
            className="object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            width={1280}
            height={720}
            alt=""
            src="https://picsum.photos/id/7/1280/720"
            className="object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            width={1280}
            height={720}
            alt=""
            src="https://picsum.photos/id/267/1280/720"
            className="object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShowCarousel;
