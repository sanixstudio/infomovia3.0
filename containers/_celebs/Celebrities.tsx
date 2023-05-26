"use client";
import React from "react";
import Image from "next/image";
import useMediaData from "@/hooks/useFetchMovies";
import {
  GET_POPULAR_PEOPLE_URL,
  IMG_URL,
} from "@/utils/constants/api_constants";
import { Loading } from "@/components";

const Celebrities = () => {
  const celebrities = useMediaData("getFamousCelebs", GET_POPULAR_PEOPLE_URL);
  const { data, status, isLoading, error } = celebrities;

  console.log(data);

  if (error) throw error;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-24 max-w-[1440px] rounded-xl bg-slate-900 p-4 mx-auto">
      <h1 className="text-4xl mb-10">Famous Celebrities</h1>
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
                <Image
                  width={200}
                  height={200}
                  src={IMG_URL + celebrity.profile_path}
                  alt=""
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
                <p className="text-xl font-semibold absolute bottom-0 bg-gradient-to-t from-black to-transparent bg-opacity-20 w-full rounded-b-full h-1/2 flex-row-center pt-4">
                  {celebrity.name}
                </p>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Celebrities;
