"use client";
import { CarouselSlider, Loading } from "@/components";
import React from "react";
import Image from "next/image";
import useMediaData from "@/hooks/useFetchMovies";
import { PLAYING_NOW_URL } from "@/utils/constants/api_constants";

const Hero = () => {
  const heroData = useMediaData("getMoviesForHero", PLAYING_NOW_URL);
  const { data, isLoading, error } = heroData;

  if (isLoading) return <Loading />;

  if (error) return <h1>Error</h1>;

  return (
    <div className="bg-gradient-to-t from-slate-950">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex gap-5">
          <div className="main-carousel">
            <CarouselSlider play data={data.results} />
          </div>
          <div className="flex flex-col gap-6 min-w-[300px]">
            <div className="border-8 border-slate-700 hover:border-accent hover:brightness-75 relative	 hover:cursor-pointer hover:ease-out duration-200 h-full">
              <Image
                width={284}
                height={191.33}
                src="https://picsum.photos/id/947/1280/720"
                alt=""
                className="object-conver w-full h-full"
              />
              <div className="w-full flex flex-col bg-black h-1/2 absolute bottom-0 opacity-70 overflow-hidden p-4 truncate">
                <h2 className="block">This Summer 2022 - New Horizon</h2>
                <p className="line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias ratione nemo corrupti, aliquid repellendus
                  quibusdam. Itaque quam consequuntur quos ut?
                </p>
              </div>
            </div>
            <div className="border-8 border-slate-700 hover:border-accent hover:brightness-75 relative	 hover:cursor-pointer hover:ease-out duration-200 h-full">
              <Image
                width={284}
                height={191.33}
                src="https://picsum.photos/id/27/1280/720"
                alt=""
                className="object-conver w-full h-full"
              />
              <div className="w-full flex flex-col bg-black h-1/2 absolute bottom-0 opacity-70 overflow-hidden p-4 truncate">
                <h2 className="block">This Summer 2022 - New Horizon</h2>
                <p className="line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias ratione nemo corrupti, aliquid repellendus
                  quibusdam. Itaque quam consequuntur quos ut?
                </p>
              </div>
            </div>
            <div className="border-8 border-slate-700 hover:border-accent hover:brightness-75 relative	 hover:cursor-pointer hover:ease-out duration-200 h-full">
              <Image
                width={284}
                height={191.33}
                src="https://picsum.photos/id/277/1280/720"
                alt=""
                className="object-conver w-full h-full"
              />
              <div className="w-full flex flex-col bg-black h-1/2 absolute bottom-0 opacity-70 overflow-hidden p-4 truncate">
                <h2 className="block">This Summer 2022 - New Horizon</h2>
                <p className="line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias ratione nemo corrupti, aliquid repellendus
                  quibusdam. Itaque quam consequuntur quos ut?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
