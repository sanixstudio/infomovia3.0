import { BACKDROP_1280_URL, IMG_URL } from "@/utils/constants/api_constants";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineCalendar,
  AiOutlineRead,
  AiOutlineUser,
  AiFillCrown,
  AiOutlineEye,
} from "react-icons/ai";

type FullCelebCardProps = {
  celebrity: {
    id: number;
    name: string;
    also_known_as: [];
    biography: string;
    birthday: string;
    deathday: string;
    gender: number;
    imdb_id: string;
    known_for_department: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string;
  };
};

const FullCelebCard = ({ celebrity }: FullCelebCardProps) => {
  console.log(celebrity);
  const getGender = () => {
    if (celebrity.gender === 1) return "Female";
    if (celebrity.gender === 2) return "Male";
    return "";
  };

  return (
    <div className="flex-1 flex flex-col items-center lg:items-start lg:flex-row gap-20 w-full">
      <div>
        <Image
          width={400}
          height={659}
          src={BACKDROP_1280_URL + celebrity.profile_path}
          alt="Celebrity Poster"
          className="max-w-full rounded-[20px] border-gray-300 p-2"
        />
      </div>

      <div className="flex-1 md:justify-between max-w-[600px] md:min-w-[500px] flex flex-col gap-5 px-4 py-2">
        <h1 className="text-4xl font-bold mb-4">{celebrity.name}</h1>
        <div>
          <div className="flex gap-3">
            <div className="flex items-center mb-2">
              <AiFillCrown className="mr-2" />
              <p className="min-w-[150px]">Also Known As</p>
            </div>
            <span>{celebrity.also_known_as.slice(0, 1)}</span>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center mb-2">
              <AiOutlineCalendar className="mr-2" />
              <p className="min-w-[150px]">Birth Date</p>
            </div>
            <span>{celebrity.birthday}</span>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center mb-2">
              <AiOutlineEye className="mr-2" />
              <p className="min-w-[150px]">Popularity</p>
            </div>
            <span>{celebrity.popularity}</span>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center mb-2">
              <AiOutlineUser className="mr-2" />
              <p className="min-w-[150px]">Gender</p>
            </div>
            <span>{getGender()}</span>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-lg font-semibold mb-1">Known For</h2>
          <div className="flex gap-1">
            <button className="btn btn-sm">
              {celebrity.known_for_department}
            </button>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-lg font-semibold mb-1">Biography</h2>
          <p className="text-lg text-gray-500 md:text-xl dark:text-gray-400 line-clamp-6">
            {celebrity.biography}
          </p>
        </div>
        <Link
          href={`https://www.imdb.com/name/${celebrity.imdb_id}`}
          target="_blank"
        >
          <button className="w-full py-2 btn btn-neutral rounded-lg flex items-center justify-center">
            <AiOutlineRead size={22} className="mr-2" />
            Read More...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FullCelebCard;
