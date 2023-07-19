"use client";
import useMediaData from "@/hooks/useFetchMovies";
import { BACKDROP_1280_URL } from "@/utils/constants/api_constants";
import Image from "next/image";
import LoadingDots from "../LoadingDots/LoadingDots";
import { Carousel } from "react-responsive-carousel";
import { Key } from "react";
import { getDeploymentEnv } from "@/utils/helpers";

type CarouselProps = {};

const SliderTrending: React.FC<CarouselProps> = () => {
  const upComing = useMediaData(
    "upComingForHero",
    `${getDeploymentEnv()}/api/tv/trending`
  );
  const { data, isLoading, error } = upComing;

  if (isLoading) return <LoadingDots />;

  if (error) return <h1 className="text-4xl">Error:</h1>;

  console.log(data)

  return (
    <Carousel autoPlay className="max-w-md">
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
  );
};

export default SliderTrending;
