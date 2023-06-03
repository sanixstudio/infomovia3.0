"use client";
import { FullCelebCard, FullPosterCard } from "@/components";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = usePathname();
  const params = path.split("/").join("");

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
