"use client";
import React, { useEffect } from "react";
import { IMG_URL } from "@/utils/constants/api_constants";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { LoadingDots } from "@/components";
import useGetUserId from "@/hooks/useGetUserId";

interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const Page = async () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { id } = session?.user as User;

  const getWatchItems = async () => {
    const delay = setTimeout(async () => {
      console.log(id);
      const res = await fetch(`/api/watchlist/${id}`);
      const items = await res.json();
      return items;
    }, 2000);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, error } = useQuery(["getWatchlist"], getWatchItems);

  if (isLoading) return <LoadingDots />;

  if (error) return <h1>Error: </h1>;

  console.log(data);

  return session?.user ? (
    <>
      <div className="max-w-[1440px] mx-auto my-8 p-4">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
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
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2F8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg&w=256&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2FfiVW06jE7z9YnO4trhaMEdclSiC.jpg&w=256&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2Fym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg&w=256&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2F3IhGkkalwXguTlceGSl8XUJZOVI.jpg&w=256&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2F8riWcADI1ekEiBguVB9vkilhiQm.jpg&w=256&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2FwDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg&w=256&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2F8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg&w=256&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2FfiVW06jE7z9YnO4trhaMEdclSiC.jpg&w=256&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2Fym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg&w=256&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2F3IhGkkalwXguTlceGSl8XUJZOVI.jpg&w=256&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2F8riWcADI1ekEiBguVB9vkilhiQm.jpg&w=256&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw185%2F%2FwDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg&w=256&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Page;
