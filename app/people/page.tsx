"use client";
import { LoadingDots } from "@/components";
import useMediaData from "@/hooks/useFetchMovies";
import {
  GET_TRENDING_PEOPLE_URL,
  IMG_URL,
} from "@/utils/constants/api_constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, error } = useMediaData(
    "getPeople",
    GET_TRENDING_PEOPLE_URL
  );

  if (isLoading) return <LoadingDots />;

  if (error) return <h1 className="text-4xl">Error:</h1>;

  console.log(data.results);

  return (
    <div className="flex max-w-[1440px] flex-wrap mt-10 gap-10 justify-center mx-auto my-8">
      {data.results.map(
        (person: { profile_path: string; name: string; id: React.Key }) => (
          <Link href={`/celeb/${person.id}`} key={person.id}>
            <div className="">{person.name}</div>
            <Image
              src={IMG_URL + person.profile_path}
              width={185}
              height={200}
              alt={person.name}
            />
          </Link>
        )
      )}
    </div>
  );
};

export default page;
