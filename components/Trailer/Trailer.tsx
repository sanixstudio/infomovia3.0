"use client";
import React from "react";
import {
  API_KEY,
  BASE_URL,
  YT_VIDEO_URL,
} from "@/utils/constants/api_constants";
import useMediaData from "@/hooks/useFetchMovies";
import LoadingDots from "../LoadingDots/LoadingDots";
import { useParams } from "next/navigation";

type TrailerProps = {
  id: number;
};

const Trailer = ({ id }: TrailerProps) => {
  const VIDEOS_MOVIES_URL = `${BASE_URL}movie/${id}/videos?language=en-US&api_key=${API_KEY}`;
  const VIDEOS_TV_URL = `${BASE_URL}tv/${id}/videos?language=en-US&api_key=${API_KEY}`;

  const urlParams = Object.keys(useParams() ?? {});
  const requestIsTv = urlParams[0] !== "movieId";

  const handledUrlParams = requestIsTv ? VIDEOS_TV_URL : VIDEOS_MOVIES_URL;

  console.log(handledUrlParams);

  const { data, isLoading, error } = useMediaData("getVideo", handledUrlParams);

  if (isLoading) return <LoadingDots />;

  if (error) return <h1 className="text-4xl">Error:</h1>;

  const trailerLink = data?.results[0]?.key || data?.results[1]?.key;

  return (
    <div className="aspect-video">
      <iframe
        className="w-full h-full"
        src={`${YT_VIDEO_URL}/${trailerLink}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
