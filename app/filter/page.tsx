"use client";
import { GENRES } from "@/utils/constants/api_constants";
import { Button, Checkbox } from "flowbite-react";
import { useSession } from "next-auth/react";
import React from "react";

const Page = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="w-full max-w-[1440px] mx-auto my-8">
      <div className="flex gap-8">
        {/* Left Sidebar */}
        <div className="w-full max-w-xs px-4">
          <div className="w-full max-w-xs px-4 mb-8">
            <h1 className="text-xl font-bold mb-2 uppercase">Media Type</h1>
            <select className="bg-gray-700 w-full rounded-md">
              <option value="movies">Movies</option>
              <option value="tv">TV Shows</option>
              <option value="people">People</option>
            </select>
          </div>
          <div className="w-full max-w-xs px-4 mb-8">
            <h1 className="text-xl font-bold mb-2 uppercase">Adult</h1>
            <Checkbox />
          </div>
          <div className="w-full max-w-xs px-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {Object.entries(GENRES.moviesList).map(([key, value]) => (
                <button key={key} className="text-red-500 bg-slate-500">
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Main Section */}
        <div className="w-full pr-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          reprehenderit distinctio magnam incidunt sunt laborum odit eaque vero
          iste itaque expedita illo voluptates sequi nostrum eos dolorem
          facilis, eveniet sed?
        </div>
      </div>
    </div>
  );
};

export default Page;
