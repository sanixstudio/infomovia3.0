"use client";
import { FullCelebCard, LoadingDots } from "@/components";
import { usePathname } from "next/navigation";
import useMediaData from "../../../hooks/useFetchMovies";
import React from "react";
import { API_KEY, BASE_URL } from "@/utils/constants/api_constants";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = usePathname();
  const params = path?.split("/")[2];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status } = useMediaData(
    "getCelebrityDetails",
    `${BASE_URL}person/${params}?api_key=${API_KEY}`
  );

  if (status === "loading") return <LoadingDots />;

  return (
    <div className="my-10 mx-auto">
      <div className="w-full max-w-[1200px] mx-auto">
        <FullCelebCard celebrity={data} />
      </div>
    </div>
  );
};

export default page;
