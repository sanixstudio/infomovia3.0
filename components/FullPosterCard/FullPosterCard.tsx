"use client";
import React from "react";
import { handleImageError } from "@/utils/helpers";
import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { MoviesReviews, Trailer } from "@/components";
import {
  HiClock,
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { BACKDROP_1280_URL } from "@/utils/constants/api_constants";
import { Badge, Button } from "flowbite-react";
import { movieDetailsProps } from "@/utils/typings/typings";

const FullPosterCard = ({ movie }: movieDetailsProps) => {
  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div className="flex-1 flex flex-col my-6 md:mt-20 justify-center items-center lg:items-start lg:flex-row gap-20 w-full">
          <div>
            <Image
              width={300}
              height={310}
              src={BACKDROP_1280_URL + movie.poster_path}
              alt="Movie Poster"
              className="max-w-full rounded-lg shadow-xl"
              onError={() => handleImageError}
            />
          </div>

          <div className="md:justify-between max-w-[600px] md:min-w-[500px] flex flex-col gap-5 px-4 py-2">
            <h1 className="text-4xl font-bold mb-4">
              {movie.title ? movie.title : movie.original_name}
            </h1>
            <div>
              <div className="flex gap-3">
                <div className="flex items-center mb-2">
                  <AiOutlineCalendar className="mr-2" />
                  <p className="min-w-[150px]">Date Released</p>
                </div>
                <span>{movie.release_date}</span>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center mb-2">
                  <HiClock className="mr-2" />
                  <p className="min-w-[150px]">Popularity</p>
                </div>
                <span>{movie.popularity}</span>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center mb-2">
                  <HiOutlineCheckCircle className="mr-2" />
                  <p className="min-w-[150px]">Total Votes</p>
                </div>
                <span>{movie.vote_count}</span>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center mb-2">
                  <HiOutlineLightningBolt className="mr-2" />
                  <p className="min-w-[150px]">Run Time</p>
                </div>
                <span>{movie.runtime} mins</span>
              </div>
            </div>
            <div className="mb-2">
              <h2 className="text-lg font-semibold mb-1">Genres</h2>
              <div className="flex gap-1 flex-wrap">
                {movie.genres?.map((genre: { id: number; name: string }) => (
                  <Badge
                    className="bg-slate-500 text-white px-2"
                    key={genre.id}
                  >
                    {genre.name}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mb-2">
              <h2 className="text-lg font-semibold mb-1">Overview</h2>
              <p className="text-lg text-gray-500 md:text-xl dark:text-gray-400">
                {movie.overview}
              </p>
            </div>
            <Trailer key={movie.id} id={movie.id} />
            <Button className="sm:w-full py-2 rounded-lg flex items-center justify-center">
              <BsPlusCircleFill size={22} className="mr-2" />
              ADD TO WISHLIST
            </Button>
          </div>
        </div>
        {!movie.first_air_date ? (
          <MoviesReviews key={movie.id} movieId={movie.id} />
        ) : null}
      </div>
    </>
  );
};

export default FullPosterCard;
