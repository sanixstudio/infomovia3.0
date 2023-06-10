"use client";
import React from "react";
import { handleImageError } from "@/utils/helpers";
import Image from "next/image";
import { AiFillStar, AiOutlineCalendar } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { LoadingDots, MoviesReviews, Trailer } from "@/components";
import {
  HiClock,
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import {
  API_KEY,
  BACKDROP_1280_URL,
  BASE_URL,
  YT_VIDEO_URL,
} from "@/utils/constants/api_constants";
import useMediaData from "@/hooks/useFetchMovies";

type movieDetailsProps = {
  movie: {
    id: number;
    first_air_date?: string;
    title: string;
    original_name?: string;
    release_date: string;
    ratings: number;
    popularity: number;
    vote_count: number;
    totalVotes: number;
    runtime: number;
    poster_path: string;
    overview: string;
    genres: [];
  };
};

const FullPosterCard = ({ movie }: movieDetailsProps) => {
  const VIDEOS_MOVIES_URL = `${BASE_URL}movie/${movie.id}/videos?language=en-US&api_key=${API_KEY}`;

  const { data, isLoading, error } = useMediaData(
    "getVideo",
    VIDEOS_MOVIES_URL
  );

  if (isLoading) return <LoadingDots />;

  if (error) return <h1 className="text-4xl">Error:</h1>;

  const trailerLink = data.results[0].key || data.results[1].key;

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
                  <AiFillStar className="mr-2" />
                  {/* //TODO: get IMDB ratings */}
                  <p className="min-w-[150px]">IMDB Ratings</p>
                </div>
                <span>{movie.ratings}</span>
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
                  <button key={genre.id} className="btn btn-sm">
                    {genre.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-2">
              <h2 className="text-lg font-semibold mb-1">Overview</h2>
              <p className="text-lg text-gray-500 md:text-xl dark:text-gray-400">
                {movie.overview}
              </p>
            </div>
            {/* <button
              className="sm:w-full py-2 btn btn-accent rounded-lg flex items-center justify-center"
              onClick={() => openModal()}
            >
              <BiMoviePlay size={22} className="mr-2" />
              Watch Trailer
            </button> */}
            {data && (
              <div className="w-full flex aspect-video">
                <iframe
                  className="w-full"
                  src={`${YT_VIDEO_URL}/${trailerLink}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <button className="sm:w-full py-2 btn btn-accent rounded-lg flex items-center justify-center">
              <BsPlusCircleFill size={22} className="mr-2" />
              ADD TO WISHLIST
            </button>
          </div>
        </div>
        {!movie.first_air_date ? <MoviesReviews movieId={movie.id} /> : null}
      </div>
    </>
  );
};

export default FullPosterCard;
