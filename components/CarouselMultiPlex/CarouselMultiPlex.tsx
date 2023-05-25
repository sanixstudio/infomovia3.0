"use client";
import { useState, useRef, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { MovieProps, SectionTitleProps } from "@/utils/typings/typings";
import { useQuery } from "@tanstack/react-query";
import { fetchMedia } from "@/utils/fetchMoviesList";
import { IMG_URL, PLAYING_NOW_URL } from "@/utils/constants/api_constants";
import useMediaData from "@/hooks/useFetchMovies";

const Carousel = ({ title }: SectionTitleProps) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const usePlayingNowMovies = useMediaData("playingNow", PLAYING_NOW_URL);
  const { data, status, isLoading, error } = usePlayingNowMovies;

  console.log(data);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  if (status === "loading" || isLoading) {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>{(error as Error).message}</div>;
  }

  return (
    <div className="carousel my-24 max-w-[1440px] rounded-xl bg-slate-900 p-4 mx-auto">
      <div className="relative overflow-hidden">
        <h1 className="text-4xl mb-10">{title}</h1>
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-accent text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-accent text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-5 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.results.map((media: MovieProps, index: number) => {
            return (
              <div
                key={media.id}
                className="carousel-item w-[185px] snap-start flex flex-col rounded-md cursor-pointer border border-transparent hover:outline-top ease-in duration-150"
                onClick={() => alert("hi")}
              >
                <a
                  href={media.link}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${media.imageUrl || ""})` }}
                >
                  <Image
                    width={185}
                    height={185}
                    src={IMG_URL + media.poster_path}
                    alt={media.title}
                    className="w-full aspect-square object-cover hidden rounded-t-md bg-slate-800"
                  />
                </a>
                <div className="h-full rounded-b-md items-left p-4 w-full top-[100px] left-0 transition-opacity duration-300 hover:opacity-100 bg-slate-800 bg-opacity-50 z-10">
                  <h3 className="text-lg font-bold mb-3 line-clamp-2">
                    {media.title}
                  </h3>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
