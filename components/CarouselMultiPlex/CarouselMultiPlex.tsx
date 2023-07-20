"use client";
import { MovieProps, SectionTitleProps } from "@/utils/typings/typings";
import useMediaData from "@/hooks/useFetchMovies";
import LoadingDots from "../LoadingDots/LoadingDots";
import Poster from "../Poster/Poster";
import { getDeploymentEnv } from "@/utils/helpers";

const Carousel = ({ title }: SectionTitleProps) => {
  const usePlayingNowMovies = useMediaData(
    "playingNow",
    `${getDeploymentEnv()}/api/movies/playingnow`
  );
  const { data, status, isLoading, error } = usePlayingNowMovies;

  if (status === "loading" || isLoading) {
    return <LoadingDots />;
  }

  if (status === "error") {
    return <div>{(error as Error).message}</div>;
  }

  return (
    <div className="carousel my-24 max-w-[1440px] bg-slate-900 p-4 mx-auto ">
      <div className="relative overflow-hidden">
        <h1 className="text-4xl mb-20 border-b border-slate-600 pb-2">
          {title}
        </h1>
        <div className="relative flex flex-wrap gap-10 justify-between content-between">
          {data.results.slice(0, 10).map((media: MovieProps) => {
            return <Poster key={media.id} media={media} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
