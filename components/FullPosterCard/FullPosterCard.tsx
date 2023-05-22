import Image from "next/image";
import { AiFillStar, AiOutlineCalendar } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import {
  HiClock,
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const FullPosterCard = () => {
  return (
    <div className="flex-1 flex flex-col items-center lg:items-start lg:flex-row gap-20 w-full">
      <div className="">
        <Image
          width={450}
          height={659}
          src="https://image.tmdb.org/t/p/w1280//aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg"
          alt="Movie Poster"
          className="rounded-lg border-8 border-gray-300 p-2"
        />
      </div>

      <div className="flex-1 md:justify-between max-w-[600px] md:min-w-[500px] flex flex-col gap-5 px-4 py-2">
        <h1 className="text-4xl font-bold mb-4">Movie Name Here</h1>
        <div>
          <div className="flex gap-3">
            <div className="flex items-center mb-2">
              <AiOutlineCalendar className="mr-2" />
              <p className="min-w-[150px]">Date Released</p>
            </div>
            <span>{"2/33/2320"}</span>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center mb-2">
              <AiFillStar className="mr-2" />
              <p className="min-w-[150px]">Ratings</p>
            </div>
            <span>{3232}</span>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center mb-2">
              <HiClock className="mr-2" />
              <p className="min-w-[150px]">Popularity</p>
            </div>
            <span>{235}</span>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center mb-2">
              <HiOutlineCheckCircle className="mr-2" />
              <p className="min-w-[150px]">Total Votes</p>
            </div>
            <span>{623}</span>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center mb-2">
              <HiOutlineLightningBolt className="mr-2" />
              <p className="min-w-[150px]">Run Time</p>
            </div>
            <span>{"120 Minutes"}</span>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-lg font-semibold mb-1">Genres</h2>
          <div className="flex gap-1">
            <button className="btn btn-sm">Action</button>
            <button className="btn btn-sm">History</button>
            <button className="btn btn-sm">Biography</button>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-lg font-semibold mb-1">Overview</h2>
          <p className="text-lg text-gray-500 md:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            minus doloremque in repellat voluptas quidem inventore praesentium
            ipsam et quo cumque dolore eius eaque magni dolorem officiis
            sapiente, tenetur nobis.
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
