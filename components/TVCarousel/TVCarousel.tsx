"use client";
import useMediaData from "@/hooks/useFetchMovies";
import { BACKDROP_1280_URL } from "@/utils/constants/api_constants";
import Image from "next/image";
import LoadingDots from "../LoadingDots/LoadingDots";
import { Carousel } from "react-responsive-carousel";
import { Key } from "react";
import { getDeploymentEnv } from "@/utils/helpers";

type CarouselProps = {};

const TVCarousel: React.FC<CarouselProps> = () => {
  const upComing = useMediaData(
    "upComingForHero",
    `${getDeploymentEnv()}/api/tv/airing`
  );
  const { data, isLoading, error } = upComing;

  if (isLoading) return <LoadingDots />;

  if (error) return <h1 className="text-4xl">Error:</h1>;

  return (
    <div className="max-w-[1440px] mx-auto my-20 px-5">
      <h1 className="text-4xl mb-20 border-b border-slate-600 pb-2">
        TV Shows Airing Now
      </h1>
      <Carousel infiniteLoop emulateTouch autoPlay className="max-w-md mx-auto">
        {data.results.map(
          (tvShow: { id: Key; name: string; poster_path: string }) => (
            <div key={tvShow.id}>
              <Image
                height={600}
                width={720}
                alt={tvShow.name}
                src={BACKDROP_1280_URL + tvShow.poster_path}
                className="max-h-[700px] object-contain"
              />
              <p className="bg-black">{tvShow.name}</p>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default TVCarousel;
