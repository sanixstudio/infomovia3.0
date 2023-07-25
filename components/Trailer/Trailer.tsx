"use client";
import React, { useEffect, useState } from "react";
import {
  API_KEY,
  BASE_URL,
  YT_VIDEO_URL,
} from "@/utils/constants/api_constants";
import useMediaData from "@/hooks/useFetchMovies";
import LoadingDots from "../LoadingDots/LoadingDots";
import { useParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";

type TrailerProps = {
  id: number;
};

interface TrailerData {
  results: {
    key: string;
  }[];
}

const Trailer = ({ id }: TrailerProps) => {
  const [data, setData] = useState<TrailerData | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const urlParams = Object.keys(useParams() ?? {});
  const requestIsTv = urlParams[0] !== "movieId";
  const handledUrlParams = requestIsTv ? "tv" : "movie";

  const getTrailer = async () => {
    try {
      const response = await fetch("/api/trailer", {
        method: "POST",
        body: JSON.stringify({
          requestMediaType: handledUrlParams,
          movieId: id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const trailerData: TrailerData = await response.json();
      setData(trailerData);

      // Set the thumbnail using the first video's key, if available
      if (trailerData.results.length > 0) {
        setThumbnail(trailerData.results[0].key);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    getTrailer();
  }, []);

  return (
    <div className="aspect-video">
      {thumbnail ? (
        <iframe
          className="w-full h-full"
          src={`${YT_VIDEO_URL}/${thumbnail}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <Image
          width={450}
          height={250}
          className="w-full object-contain"
          src="/images/no-video.jpg" // Replace with the path to your default thumbnail image
          alt="Video not available"
        />
      )}
    </div>
  );
};

export default Trailer;
