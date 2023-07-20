"use client";
import React from "react";
import Image from "next/image";
import useMediaData from "@/hooks/useFetchMovies";
import { IMG_URL } from "@/utils/constants/api_constants";
import { LoadingDots } from "@/components";
import { getDeploymentEnv } from "@/utils/helpers";

const Celebrities = () => {
  const celebrities = useMediaData(
    "getFamousCelebs",
    `${getDeploymentEnv()}/api/people/popular`
  );
  const { data, isLoading, error } = celebrities;

  if (error) throw error;

  if (isLoading) {
    return <LoadingDots />;
  }

  return (
    <div className="my-24 max-w-[1440px] rounded-xl bg-slate-900 p-4 mx-auto">
      <h1 className="text-4xl mb-20 border-b border-slate-600 pb-2">Famous Celebrities</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 place-items-center	lg:grid-cols-4 gap-4">
        {data.results
          .slice(0, 8)
          .map(
            (celebrity: {
              name: string;
              profile_path: string;
              id: React.Key;
            }) => (
              <div
                key={celebrity.id}
                className="flex-col-center max-w-md relative ease-in duration-150 border-8 border-slate-800 rounded-full hover:border-accent cursor-pointer "
              >
                <a href={`/person/${celebrity.id}`}>
                  <Image
                    width={200}
                    height={200}
                    src={IMG_URL + celebrity.profile_path}
                    alt={celebrity.name}
                    className="rounded-full w-[200px] h-[200px] object-cover"
                  />
                  <p className="text-xl font-semibold absolute bottom-0 bg-gradient-to-t from-black to-transparent bg-opacity-20 w-full rounded-b-full h-1/2 flex-row-center pt-4">
                    {celebrity.name}
                  </p>
                </a>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Celebrities;
