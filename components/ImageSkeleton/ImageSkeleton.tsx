"use client";
import Image from "next/image";
import React, { useState } from "react";

type ImageSkeletonProps = {
  src: string;
  alt: string;
};

const ImageSkeleton = ({ src, alt }: ImageSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
      )}
      <Image
        width={300}
        height={300}
        src={src}
        alt={alt}
        className={`w-full h-full ${isLoading ? "hidden" : ""}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageSkeleton;
