import { BACKDROP_1280_URL } from "@/utils/constants/api_constants";
import Image from "next/image";
import { AiFillStar, AiOutlineCalendar } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import {
  HiClock,
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
} from "react-icons/hi";

type movieDetailsProps = {
  movie: {
    title: string;
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
  const NO_IMAGE = "/images/No-Image-Placeholder.svg";
  const posterPath = movie.poster_path
    ? `${BACKDROP_1280_URL}${movie.poster_path}`
    : NO_IMAGE;

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = NO_IMAGE;
  };

  return (
    <div className="flex-1 flex flex-col mt-8 md:mt-20 justify-center items-center lg:items-start lg:flex-row gap-20 w-full">
      <div className="">
        <Image
          width={300}
          height={310}
          src={posterPath}
          alt="Movie Poster"
          className="rounded-lg p-2 max-w-full"
          onError={() => handleImageError}
        />
      </div>

      <div className="md:justify-between max-w-[600px] md:min-w-[500px] flex flex-col gap-5 px-4 py-2">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
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
          <div className="flex gap-1">
            {movie.genres.map((genre: { id: number; name: string }) => (
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
        <button className="w-full py-2 btn btn-accent rounded-lg flex items-center justify-center">
          <BsPlusCircleFill size={22} className="mr-2" />
          ADD TO WISHLIST
        </button>
      </div>
    </div>
  );
};

export default FullPosterCard;
