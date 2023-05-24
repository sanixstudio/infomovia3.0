import { GET_PEOPLE_DETAILS_URL, PEOPLE_URL } from "@/utils/constants/api_constants";
import React from "react";

const MainMenu = () => {
  console.log(PEOPLE_URL)
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
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
          <ul className="p-2 bg-slate-800 z-10">
            <li>
              <a>Action</a>
            </li>
            <li>
              <a>Animation </a>
            </li>
            <li>
              <a>Comedy</a>
            </li>
            <li>
              <a>Horror</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li tabIndex={0}>
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
          <ul className="p-2 bg-slate-800 z-10">
            <li>
              <a>Movies </a>
            </li>
            <li>
              <a>TV Shows</a>
            </li>
            <li>
              <a>People</a>
            </li>
            <li>
              <a>News</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
