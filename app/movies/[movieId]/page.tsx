"use client";
import { FullCelebCard, FullPosterCard } from "@/components";
import { usePathname } from "next/navigation";
import useMediaData from "../../../hooks/useFetchMovies";
import React from "react";
import {
  API_KEY,
  BASE_URL,
  SEARCH_MOVIES_URL,
} from "@/utils/constants/api_constants";
import { BsThreeDots } from "react-icons/bs";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = usePathname();
  const params = path.split("/")[2];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status } = useMediaData(
    "movieDetails",
    `${BASE_URL}movie/${params}?api_key=${API_KEY}`
  );

  if (status === "loading")
    return (
      <BsThreeDots
        height="80"
        width="80"
        radius="9"
        color="#0BC9C1"
        aria-label="three-dots-loading"
      />
    );

  return (
    <div className="min-h-[1000px] navbar max-w -[1440px] mx-auto my-0">
      <div className="w-full max-w-[1200px] mx-auto">
        <FullPosterCard movie={...data} />
      </div>
    </div>
  );
};

export default page;
