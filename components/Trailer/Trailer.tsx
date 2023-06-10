"use client";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export type movieDetailsProps = {
  movie: {};
};

type TrailerProps = {
  isOpen: boolean;
  closeModal: () => void;
  src: string;
};

const Trailer = ({ isOpen, closeModal, src }: TrailerProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  console.log(isOpen);

  return (
    <div
      className={`max-h-screen`}
    >
      <div className="aspect-video">
        <button className="" onClick={() => closeModal}>
          <AiOutlineCloseCircle size="32" className="ml-2" />
        </button>
        <iframe
          className="w-screen max-w-[1440px] h-full p-4"
          src={(src && src) || "https://www.youtube.com/embed/FF3fuYLnApQ"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Trailer;
