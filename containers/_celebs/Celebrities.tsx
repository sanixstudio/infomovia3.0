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
        {data.results.slice(0, 8).map(
          (celebrity: {
            name: string;
            profile_path: string;
            id: React.Key;
          }) => (
            <div
              key={celebrity.id}
              className="flex flex-col items-center max-w-md"
            >
              <Image
                width={200}
                height={200}
                src={IMG_URL + celebrity.profile_path}
                alt=""
                className="rounded-full"
              />
              <h3 className="text-xl font-bold my-6">{celebrity.name}</h3>
              {/* <p className="px-4 line-clamp-2">
                Benedict Timothy Carlton Cumberbatch CBE is an English actor.
                Known for his work on screen and stage, he has received various
                accolades, including a BAFTA TV Award, a Primetime Emmy Award
                and a Laurence Olivier Award, in addition to nominations for two
                Academy Awards, two BAFTA Film Awards and four Golden Globes.
              </p> */}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Celebrities;
