import { LoadingDots } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const useGetWatchlist = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!session) router.push("/signin");
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [router, session]);

  const getWatchItems = async () => {
    const { id } = session?.user as User;
    const res = await (await fetch(`/api/watchlist/${id}`)).json();
    return res;
  };

  const { data, isLoading, error } = useQuery(["getWatchlist"], getWatchItems);

  if (isLoading) return <LoadingDots />;

  if (error) return <h1>Error: </h1>;

  
  return data
};

export default useGetWatchlist;
