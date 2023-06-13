import { useAppContext } from "@/context/appContext";
import { GENRES } from "@/utils/constants/api_constants";
import Link from "next/link";
import React from "react";

const MainMenu = () => {
  const { darkMode } = useAppContext();
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li tabIndex={0} className={`${darkMode ? "" : "text-slate-800"}`}>
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
          <ul
            className={`${
              darkMode ? "bg-slate-800" : "bg-slate-200 text-slate-800"
            } p-2 z-10`}
          >
            {Object.entries(GENRES.moviesList).map(([key, value]) => (
              <li key={value}>
                <Link href={`/genre/${value}`} className="py-1 capitalize">
                  {key}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li tabIndex={0} className={`${darkMode ? "" : "text-slate-800"}`}>
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
          <ul
            className={`${
              darkMode ? "bg-slate-800" : "bg-slate-200 text-slate-800"
            } p-2 z-10`}
          >
            <li>
              <Link href={"/movies"}>Movies </Link>
            </li>
            <li>
              <Link href={"/tvshows"}>TV Shows</Link>
            </li>
            <li>
              <Link href={"/people"}>People</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(MainMenu);
