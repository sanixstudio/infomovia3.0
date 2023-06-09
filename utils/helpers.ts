import {
  BACKDROP_1280_URL,
  IS_PROD_ENV,
  LOCAL_HOST,
  NO_IMAGE,
  PROD_URL,
} from "./constants/api_constants";
import React from "react";

export const getPosterWithFallback = (posterPath: string | null): string => {
  if (posterPath) {
    return `${BACKDROP_1280_URL}${posterPath}`;
  }
  return NO_IMAGE;
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
): void => {
  e.currentTarget.src = NO_IMAGE;
};

export const getDeploymentEnv = () => (IS_PROD_ENV ? PROD_URL : LOCAL_HOST);
