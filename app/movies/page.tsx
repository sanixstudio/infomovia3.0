"use client";
import { SetStateAction, useCallback, useState } from "react";
import { LoadingDots, Poster } from "@/components";
import useMediaData from "@/hooks/useFetchMovies";
import {
  PLAYING_NOW_URL,
  TOP_RATED_URL,
  UP_COMING_URL,
} from "@/utils/constants/api_constants";
import { MovieProps } from "@/utils/typings/typings";
import { Button } from "flowbite-react";

const Page = () => {
  const [selectedPage, setSelectedPage] = useState(PLAYING_NOW_URL);

  const getQueryKey = useCallback(() => {
    if (selectedPage === PLAYING_NOW_URL) {
      return "playingNowMovies";
    } else if (selectedPage === TOP_RATED_URL) {
      return "topRatedMovies";
    } else if (selectedPage === UP_COMING_URL) {
      return "upComingMovies";
    } else {
      return "";
    }
  }, [selectedPage]);

  const { data, isLoading, error } = useMediaData(getQueryKey(), selectedPage);

  const handleTabClick = useCallback((pageUrl: SetStateAction<string>) => {
    setSelectedPage(pageUrl);
  }, []);

  if (isLoading) {
    return <LoadingDots />;
  }

  if (error) {
    return <h1 className="text-4xl">Error:</h1>;
  }

  return (
    <div className="carousel max-w-[1440px] w-full mx-auto p-4">
      <div className="my-5">
        <Button.Group>
          <Button
            className={`${
              selectedPage === PLAYING_NOW_URL ? "tab-active" : ""
            }`}
            color="gray"
            onClick={() => handleTabClick(PLAYING_NOW_URL)}
          >
            Playing Now
          </Button>
          <Button
            className={`${selectedPage === UP_COMING_URL ? "tab-active" : ""}`}
            color="gray"
            onClick={() => handleTabClick(UP_COMING_URL)}
          >
            Upcoming
          </Button>
          <Button
            className={`${selectedPage === TOP_RATED_URL ? "tab-active" : ""}`}
            color="gray"
            onClick={() => handleTabClick(TOP_RATED_URL)}
          >
            Top Rated
          </Button>
        </Button.Group>
        <div className="flex flex-wrap mt-10 gap-10 justify-center">
          {data.results.map((media: MovieProps) => {
            return <Poster key={media.id} media={media} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
