"use client";
import React from "react";
import { SectionTitleProps } from "@/utils/typings/typings";
import useMediaData from "@/hooks/useFetchMovies";
import { TRENDING_TV_URL } from "@/utils/constants/api_constants";
import Loading from "../Loading/Loading";

const Stats = ({ title }: SectionTitleProps) => {
  const trendingTv = useMediaData("trendingTv", TRENDING_TV_URL);
  const { data, isLoading, error } = trendingTv;

  if (isLoading) return <Loading />;

  if (error) return <h1>Error:</h1>;

  return (
    <div className="py-12 max-w-[1440px] rounded-xl bg-slate-900 p-4 mx-auto">
      <h1 className="text-4xl mb-10">{title}</h1>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="bg-slate-950">
              <th className="bg-slate-800"></th>
              <th className="bg-slate-800">Name</th>
              <th className="bg-slate-800">Genre</th>
              <th className="bg-slate-800">Release Date</th>
            </tr>
          </thead>
          <tbody>
            {data.results.slice(0, 10).map(
              (
                movie: {
                  first_air_date: string;
                  genre_ids: [];
                  name: string;
                  id: React.Key;
                },
                idx: number
              ) => (
                <tr key={movie.id} className="hover">
                  <th className="bg-slate-700">{idx + 1}</th>
                  <td className="bg-slate-700">{movie.name}</td>
                  <td className="bg-slate-700">{movie.genre_ids}</td>
                  <td className="bg-slate-700">{movie.first_air_date}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;
