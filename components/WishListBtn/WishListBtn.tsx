"use client";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import LoadingDots from "../LoadingDots/LoadingDots";

const WishListBtn = () => {
  const { data: session } = useSession();

  const getWatchItems = async () => {
    const user = session?.user as User;
    const id = user?.id;

    if (id === undefined) return null;

    const res = await (await fetch(`/api/watchlist/${id}`)).json();
    return res;
  };

  const { data, isLoading, error } = useQuery(["getWatchlist"], getWatchItems);

  if (error) return <h1>Error: </h1>;

  return (
    <div className="dropdown dropdown-end hidden sm:flex w-[200px] justify-center">
      <Link href="/watchlist">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="flex items-center justify-center h-full relative">
            <span className="absolute top-0 -right-2 badge badge-sm indicator-item bg-accent text-neutral">
              {data?.length || 0}
            </span>
            <button>
              <BiMessageSquareAdd color="turquoise" size={24} />
            </button>
          </div>
        </label>
      </Link>
    </div>
  );
};

export default WishListBtn;
