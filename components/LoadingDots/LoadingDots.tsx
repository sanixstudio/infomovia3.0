'use client'
import React from "react";
import { ThreeDots } from "react-loader-spinner";

const LoadingDots = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-[300px] bg-slate-700 animate-pulse flex justify-center items-center">
      <ThreeDots color="#1fb2a5" />
    </div>
  );
};

export default LoadingDots;
