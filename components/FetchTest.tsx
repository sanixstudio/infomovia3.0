"use client";
import useMediaData from "@/hooks/useFetchMovies";
import { PLAYING_NOW_URL } from "@/utils/constants/api_constants";

const FetchTest = () => {
  const usePlayingNowMovies = useMediaData("playingNow", PLAYING_NOW_URL);
  const { data, isLoading, error } = usePlayingNowMovies;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return <div>{""}</div>;
};

export default FetchTest;
