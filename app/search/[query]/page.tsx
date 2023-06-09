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
  const params = path?.split("/")[2];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, error } = useMediaData(
    "getSearchedMoviesDetails",
    `${BASE_URL}search/multi?query=${params}&api_key=${API_KEY}`
  );

  if (isLoading) return <LoadingDots />;

  if (error) return <h1 className="text-6xl">Error</h1>;

  const getCorrespondingImage = (movie: {
    media_type: string;
    profile_path: string;
    poster_path: string;
  }) => {
    if (movie.media_type === "person") return IMG_URL + movie.profile_path;
    if (movie.poster_path === null || movie.profile_path === null)
      return "/images/no_img.jpg";
    return IMG_URL + movie.poster_path;
  };

  console.log(data.results);

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
                media_type: string;
                profile_path: string;
              }) => (
                //media_type is based on, if a media type is "movie" or "tv" or "person"
                <Link key={movie.id} href={`/${movie.media_type}/${movie.id}`}>
                  <Image
                    src={getCorrespondingImage(movie)}
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
