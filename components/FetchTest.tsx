"use client";
import useMediaData from "@/hooks/useFetchMovies";
import { PLAYING_NOW_URL } from "@/utils/constants/api_constants";
import LoadingDots from "./LoadingDots/LoadingDots";

const FetchTest = () => {
  const usePlayingNowMovies = useMediaData("playingNow", PLAYING_NOW_URL);
  const { data, isLoading, error } = usePlayingNowMovies;

  if (isLoading) {
    return <LoadingDots />;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return <div>{""}</div>;
};

export default FetchTest;
