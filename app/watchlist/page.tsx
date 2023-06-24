"use client";
import React, { Key, useEffect } from "react";
import { IMG_URL } from "@/utils/constants/api_constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LoadingDots } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const Page = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!session) router.push("/signin");
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [router, session]);

  const getWatchItems = async () => {
    const { id } = session?.user as User;
    const res = await (await fetch(`/api/watchlist/${id}`)).json();
    return res;
  };

  const { data, isLoading, error } = useQuery(["getWatchlist"], getWatchItems);

  if (isLoading) return <LoadingDots />;

  if (error) return <h1>Error: </h1>;

  console.log(data[0].movies)

  return (
    <>
      <div className="max-w-[1440px] mx-auto my-8 p-4">
        {/* <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            All categories
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Shoes
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Electronics
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Gaming
          </button>
        </div> */}
        <h1 className="text-4xl mb-8">Watchlist</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {data?.map((movie: { movies: any; id: Key | null | undefined }) => (
            <Link href={`/movie/${movie.movies.id}`} key={movie.id}>
              <div>
                <Image
                  width={185}
                  height={270}
                  className="max-w-full rounded-lg"
                  src={IMG_URL + movie.movies.poster_path}
                  alt={movie.movies.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
