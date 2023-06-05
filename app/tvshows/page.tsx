"use client";
import { SetStateAction, useCallback, useState } from "react";
import { LoadingDots } from "@/components";
import useMediaData from "@/hooks/useFetchMovies";
import {
  IMG_URL,
  AIRING_TODAY_TV_URL,
  TRENDING_TV_URL,
  TOP_RATED_TV_URL,
} from "@/utils/constants/api_constants";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [selectedPage, setSelectedPage] = useState(AIRING_TODAY_TV_URL);

  const getQueryKey = useCallback(() => {
    if (selectedPage === AIRING_TODAY_TV_URL) {
      return "getAiringTodayTv";
    } else if (selectedPage === TRENDING_TV_URL) {
      return "getTrendingTV";
    } else if (selectedPage === TOP_RATED_TV_URL) {
      return "getTopRated";
    } else {
      return "";
    }
  }, [selectedPage]);

  const { data, isLoading, error } = useMediaData(getQueryKey(), selectedPage);

  const handleTabClick = useCallback((pageUrl: SetStateAction<string>) => {
    setSelectedPage(pageUrl);
  }, []);

  if (isLoading) {
    return <LoadingDots />;
  }

  if (error) {
    return <h1 className="text-4xl">Error:</h1>;
  }

  console.log(data.results);

  return (
    <div className="max-w-[1440px] w-full mx-auto p-4">
      <div className="my-5">
        <div className="tabs tabs-boxed py-2 max-w-fit">
          <button
            onClick={() => handleTabClick(AIRING_TODAY_TV_URL)}
            className={`tab ${
              selectedPage === AIRING_TODAY_TV_URL ? "tab-active" : ""
            }`}
          >
            Airing Today
          </button>
          <button
            onClick={() => handleTabClick(TOP_RATED_TV_URL)}
            className={`tab ${
              selectedPage === TOP_RATED_TV_URL ? "tab-active" : ""
            }`}
          >
            Trending TV Shows
          </button>
          <button
            onClick={() => handleTabClick(TRENDING_TV_URL)}
            className={`tab ${
              selectedPage === TRENDING_TV_URL ? "tab-active" : ""
            }`}
          >
            Top TV Shows
          </button>
        </div>
        <div className="flex flex-wrap mt-10 gap-10 justify-center">
          {data.results.map(
            (movie: {
              id: number;
              title: string;
              poster_path: string;
              release_date: string;
            }) => (
              <Link key={movie.id} href={`/tv/${movie.id}`}>
                <Image
                  src={IMG_URL + movie.poster_path}
                  width={185}
                  height={200}
                  alt=""
                />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
