"use client";
import React from "react";
import { usePathname } from "next/navigation";
import useMediaData from "@/hooks/useFetchMovies";
import { API_KEY, BASE_URL, IMG_URL } from "@/utils/constants/api_constants";
import { LoadingDots } from "@/components";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = usePathname();
  const params = path.split("/")[2];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, error } = useMediaData(
    "getSearchedMoviesDetails",
    `${BASE_URL}search/multi?query=${params}&api_key=${API_KEY}`
  );

  if (isLoading) return <LoadingDots />;

  if (error) return <h1 className="text-6xl">Error</h1>;

  return (
    <>
      {data.results?.length ? (
        <div className="my-10 max-w-[1440px] mx-auto p-4">
          <h1 className="text-4xl mb-10">Results</h1>
          <div className="flex flex-wrap gap-10 justify-center">
            {data.results.map(
              (movie: {
                id: number;
                title: string;
                poster_path: string;
                release_date: string;
              }) => (
                <Link key={movie.id} href={`/movie/${movie.id}`}>
                  <Image
                    src={IMG_URL + movie.poster_path}
                    width={185}
                    height={200}
                    alt={movie.title}
                  />
                </Link>
              )
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default page;
