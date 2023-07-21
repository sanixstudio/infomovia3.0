"use client";
import React, { Key, useEffect } from "react";
import { IMG_URL } from "@/utils/constants/api_constants";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LoadingDots } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Page = () => {
  // const router = useRouter();
  // const session = useSession();
  // const path = usePathname();
  // const splitterPath = path.split("/");
  // const id = splitterPath[splitterPath.length - 1];

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     if (!session) router.push("/signin");
  //   }, 1000); 
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [router, session]);

  // const getWatchItems = async () => {
  //   const res = await (await fetch(`/api/watchlist/${id}`)).json();
  //   return res;
  // };

  // const { data, isLoading, error } = useQuery(["getWatchlist"], getWatchItems);
  // console.log(data);

  // if (isLoading) return <LoadingDots />;

  // if (error) return <h1>Error: </h1>;

  return (
    <>
      <div className="max-w-[1440px] mx-auto my-8 p-4">
        <h1 className="text-4xl mb-8">Watchlist</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          <h1 className="text-4xl">Construction in progress:</h1>
          {/* {data?.map((movie: { movies: any; id: Key | null | undefined }) => (
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
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Page;
