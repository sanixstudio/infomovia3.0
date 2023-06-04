import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { IMG_URL } from "@/utils/constants/api_constants";
import { PosterProps } from "@/utils/typings/typings";

const Poster = ({ media }: PosterProps) => {
  const NO_IMAGE = "/images/No-Image-Placeholder.svg";
  const posterPath = media.poster_path
    ? `${IMG_URL}${media.poster_path}`
    : NO_IMAGE;

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = NO_IMAGE;
  };

  return (
    <div
      key={media.id}
      className="carousel-item w-[185px] snap-start flex flex-col rounded-md cursor-pointer border border-transparent hover:outline-top ease-in duration-150"
    >
      <a
        href={`/movie/${media.id}`}
        className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
      >
        <Image
          width={185}
          height={185}
          src={posterPath}
          onError={() => handleImageError}
          alt={media.title}
          className="w-full aspect-square object-cover hidden rounded-t-md bg-slate-800"
        />
        <div className="h-full rounded-b-md items-left p-4 w-full top-[100px] left-0 transition-opacity duration-300 hover:opacity-100 bg-slate-800 bg-opacity-50 z-10">
          <h3 className="text-lg font-bold mb-3 line-clamp-2">{media.title}</h3>
          <div className="flex gap-5">
            <p className="text-sm w-24">Year Released: </p>
            <div className="text-sm flex justify-end w-12 gap-2 items-center">
              <span>{new Date(media.release_date).getFullYear()}</span>
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-sm w-24">Ratings: </p>
            <div className="text-sm flex justify-end w-12 gap-1 items-center">
              <AiFillStar color="yellow" />
              <p>5.8</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Poster;
