import React from "react";
import Image from "next/image";
import useMediaData from "@/hooks/useFetchMovies";
import { API_KEY, BASE_URL } from "@/utils/constants/api_constants";
import LoadingDots from "../LoadingDots/LoadingDots";
import * as timeago from "timeago.js";

type MoviesReviewsProps = {
  movieId: number;
};

const MoviesReviews = ({ movieId }: MoviesReviewsProps) => {
  const MOVIE_REVIEWS_URL = `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`;
  const { data, isLoading, error } = useMediaData(
    "getMovieReview",
    MOVIE_REVIEWS_URL
  );

  if (isLoading) return <LoadingDots />;

  if (error) return <h1 className="text-4xl">Error:</h1>;

  return (
    <div className="mb-8 flex flex-col gap-3 p-2">
      {data.results.map(
        (review: {
          created_at: string;
          author: string;
          url: string;
          content: string;
          author_details: { avatar_path: string; rating: number };
        }) => (
          <article
            key={movieId}
            className="p-8 bg-[#343b49] rounded-md shadow-lg"
          >
            <div className="flex items-center mb-4 space-x-4">
              <Image
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
                src={"https://picsum.photos/id/237/200/300"}
                alt={review.author}
              />
              <div className="space-y-1 font-medium dark:text-white">
                <p>{review.author}</p>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              {review.author_details.rating}
            </div>
            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
              <p>
                <time dateTime="2017-03-03 19:00">{review.created_at}</time>
              </p>
            </footer>
            <p className="mb-2 text-gray-500 dark:text-gray-400 line-clamp-3">
              {review.content}
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              It is obviously not the same build quality as those very expensive
              watches. But that is like comparing a Citroën to a Ferrari. This
              watch was well under £100! An absolute bargain.
            </p>
            <a
              href={review.url}
              className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Read more
            </a>
          </article>
        )
      )}
    </div>
  );
};

export default MoviesReviews;
