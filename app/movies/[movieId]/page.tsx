"use client";
import { FullCelebCard, FullPosterCard } from "@/components";
import { usePathname } from "next/navigation";
import useMediaData from "../../../hooks/useFetchMovies";
import React from "react";
import { SEARCH_MOVIES_URL } from "@/utils/constants/api_constants";
import { BsThreeDots } from "react-icons/bs";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = usePathname();
  const params = path.split("/")[2];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status } = useMediaData(
    "playingNow",
    SEARCH_MOVIES_URL + params
  );

  console.log(SEARCH_MOVIES_URL + params);

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

  console.log(params);

  const celebrity = {
    name: "Tom Hanks",
    popularity: 90,
    gender: "Male",
    knownFor: ["Forrest Gump", "Cast Away", "Toy Story"],
    image: "https://picsum.photos/id/354/450/659",
  };

  return (
    <div className="min-h-[1000px] navbar max-w -[1440px] mx-auto my-0">
      <div className="w-full max-w-[1200px] mx-auto">
        <FullPosterCard />
      </div>
    </div>
  );
};

export default page;
