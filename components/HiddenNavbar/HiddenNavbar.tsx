"use client";
import React, { useEffect, useRef, useState } from "react";
import { GENRES } from "@/utils/constants/api_constants";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const HiddenNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = inputRef.current?.value.trim();
    query && setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery !== "") {
      router.push(`/search/${searchQuery}`);
    }
  }, [router, searchQuery]);

  return (
    <>
      <div className="mr-2 dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-slate-800 min-w-fit"
        >
          <li tabIndex={0}>
            <a>
              Genre
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-slate-800 w-full list left-0 z-10 top-[100%]">
              {Object.entries(GENRES.moviesList).map(([key, value]) => (
                <li key={value}>
                  <Link href={`/genre/${value}`} className="py-1">
                    {key}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li tabIndex={1}>
            <a>
              Explore
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-slate-800 z-10 left-0 top-[100%]">
              <li>
                <Link href={"/movies"}>Movies</Link>
              </li>
              <li>
                <Link href={"/tvshows"}>TV Shows</Link>
              </li>
              <li>
                <Link href={"/people"}>People</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="md:hidden form-control">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  ref={inputRef}
                  placeholder="Search"
                  className="input input-bordered rounded-full"
                />
              </form>
            </div>
          </li>
          <div className="flex gap-2 ml-5 py-2">
            {session?.user ? (
              <button
                className="btn btn-sm btn-outline btn-accent"
                onClick={() => signOut()}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn btn-sm btn-outline btn-accent"
                onClick={() => router.push("/signin")}
              >
                Login
              </button>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default HiddenNavbar;
