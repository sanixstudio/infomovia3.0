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

  if (isLoading)
    return (
      <div className="max-w-[46px] max-h-[20px] overflow-hidden border border-white">
        <LoadingDots />
      </div>
    );

  if (error) return <h1>Error: </h1>;

  return (
    <div className="dropdown dropdown-end hidden sm:flex w-[200px] justify-center">
      <Link href="/watchlist">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <BiMessageSquareAdd size={24} />
            <span className="badge badge-sm indicator-item bg-accent text-neutral">
              {data?.length || 0}
            </span>
          </div>
        </label>
      </Link>
    </div>
  );
};

export default WishListBtn;
