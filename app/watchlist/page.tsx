"use client";
import React, { Key, useCallback, useEffect, useState } from "react";
import { IMG_URL } from "@/utils/constants/api_constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LoadingDots } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { User } from "@/utils/typings/typings";

const Page = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [userId, setUserId] = useState<string | null>(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user) {
      const { id } = user as User;
      setUserId(id);
    }
  }, [user]);

  const fetchWatchList = useCallback(async () => {
    if (userId) {
      const res = await fetch(`api/watchlist/${userId}`);
      const data = await res.json();
      setData(data);
    }
  }, [userId]);

  useEffect(() => {
    fetchWatchList();
  }, [fetchWatchList]);

  return (
    <>
      <div className="max-w-[1440px] mx-auto my-8 p-4">
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
