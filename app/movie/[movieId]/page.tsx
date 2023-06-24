/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { FullPosterCard, LoadingDots } from "@/components";
import { usePathname } from "next/navigation";
import useMediaData from "../../../hooks/useFetchMovies";
import React from "react";
import { API_KEY, BASE_URL } from "@/utils/constants/api_constants";

const page = () => {
  const path = usePathname();
  const params = path?.split("/")[2];

  const { data, status } = useMediaData(
    "movieDetails",
    `${BASE_URL}movie/${params}?api_key=${API_KEY}`
  );

  if (status === "loading") return <LoadingDots />;

  return (
    <div className="min-h-fit navbar max-w -[1440px] mx-auto my-0">
      <div className="w-full max-w-[1200px] mx-auto">
        <FullPosterCard movie={data} />
      </div>
    </div>
  );
};

export default page;
