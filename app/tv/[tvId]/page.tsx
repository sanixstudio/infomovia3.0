"use client";
import { FullCelebCard, FullPosterCard } from "@/components";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = usePathname();
  const params = path.split("/").join("");

  return (
    <div className="min-h-[1000px] navbar max-w -[1440px] mx-auto my-0">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* <FullPosterCard
          movie={{
            title: "",
            release_date: 0,
            ratings: 0,
            popularity: 0,
            vote_count: 0,
            totalVotes: 0,
            runtime: 0,
            poster_path: "",
            overview: "",
            genres: [],
          }}
        /> */}
      </div>
    </div>
  );
};

export default page;
