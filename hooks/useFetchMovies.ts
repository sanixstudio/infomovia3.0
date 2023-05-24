import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchMovies = async (fetchUrl: string, _limit: number | null = 10) => {
  const res = await axios.get(fetchUrl);
  const data = res.data;
  return data;
};

const useMovies = (fetchUrl: string, limit?: number | null) => {
  return useQuery(["getMovies", limit], () => fetchMovies(fetchUrl, limit));
};

export { useMovies, fetchMovies };
