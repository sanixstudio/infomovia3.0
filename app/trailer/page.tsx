"use client";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export type movieDetailsProps = {
  movie: {};
};

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Show Modal</button>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } z-10 absolute w-full h-full bg-black/90 justify-center items-center`}
      >
        <div className="aspect-video">
          <button className="" onClick={() => setIsOpen(false)}>
            <AiOutlineCloseCircle size="32" className="ml-2" />
          </button>
          <iframe
            className="w-screen max-w-[1440px] h-full p-4"
            src="https://www.youtube.com/embed/FF3fuYLnApQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
