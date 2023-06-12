"use client";
import React from "react";
import { usePathname } from "next/navigation";
import useMediaData from "@/hooks/useFetchMovies";
import { DISCOVER_MOVIES, IMG_URL } from "@/utils/constants/api_constants";
import { LoadingDots } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const Page = () => {
  const path = usePathname();
  const params = path?.split("/")[2];

  const { data, status, error } = useMediaData(
    "getMoviesByGenre",
    DISCOVER_MOVIES
  );

  if (status === "loading") return <LoadingDots />;

  if (error) return <h1 className="text-6xl">Error</h1>;

  const filteredResults = data?.results.filter((movie: any) =>
    movie.genre_ids.includes(Number(params))
  );

  return (
    <div className="my-10 max-w-[1440px] mx-auto p-4">
      <h1 className="text-3xl mb-8">Results</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {filteredResults?.map((movie: any) => (
          <div key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={IMG_URL + movie.poster_path}
                width={185}
                height={200}
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
