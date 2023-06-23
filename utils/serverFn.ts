"use server";
import { main } from "@/app/lib/helper";
import prisma from "@/prisma";
import { MovieProps } from "./typings/typings";

export const getWatchList = async (id: string) => {
  try {
    main();
    const res = await prisma.watchItem.findMany({
      where: { id },
    });
    if (!res) {
      console.log("Something went wrong");
    }
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const addToWatchList = async (userId: string, movies: MovieProps) => {
  try {
    main();
    const res = await prisma.watchItem.create({ data: { userId, movies } });
    if (!res) {
      console.log("Something went wrong");
    }
    return res;
  } catch (error) {
    console.error(error);
  }
};
