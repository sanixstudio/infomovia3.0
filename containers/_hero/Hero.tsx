"use client";
import { CarouselSlider, LoadingDots } from "@/components";
import React from "react";
import useMediaData from "@/hooks/useFetchMovies";
import { getDeploymentEnv } from "@/utils/helpers";

const Hero = () => {
  const heroData = useMediaData(
    "getMoviesForHero",
    `${getDeploymentEnv()}/api/movies/upcoming`
  );
  const { data, isLoading, error } = heroData;

  if (isLoading) return <LoadingDots />;

  if (error) return <h1>Error</h1>;

  return (
    <div className="bg-gradient-to-t from-slate-950">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex gap-5">
          <div className="main-carousel">
            <CarouselSlider play data={data.results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
