"use client";
import useMediaData from "@/hooks/useFetchMovies";
import { BACKDROP_1280_URL } from "@/utils/constants/api_constants";
import Image from "next/image";
import LoadingDots from "../LoadingDots/LoadingDots";
import { Carousel } from "react-responsive-carousel";
import { Key } from "react";
import { getDeploymentEnv } from "@/utils/helpers";

type CarouselProps = {};

const TvCarousel: React.FC<CarouselProps> = () => {
  const upComing = useMediaData(
    "upComingForHero",
    `${getDeploymentEnv()}/api/movies/playingnow`
  );
  const { data, isLoading, error } = upComing;

  if (isLoading) return <LoadingDots />;

  if (error) return <h1 className="text-4xl">Error:</h1>;

  return (
    <Carousel autoPlay>
      {data.results.map(
        (tvShow: { id: Key; name: string; poster_path: string }) => (
          <div
            key={tvShow.id}
            className="max-w-[1280px] max-h-[500px] mx-auto px-4"
          >
            <Image
              height={1280}
              width={720}
              alt={tvShow.name}
              src={BACKDROP_1280_URL + tvShow.poster_path}
              className=""
            />
            <p className="legend">{tvShow.name}</p>
          </div>
        )
      )}
    </Carousel>
  );
};

export default TvCarousel;
