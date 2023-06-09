// @ts-ignore
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const TMDB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;

// Base URLs
export const LOCAL_HOST = "http://localhost:3000";
export const PROD_URL = "https://infomovia3-0.vercel.app/";
export const IS_PROD_ENV = process.env.NODE_ENV === "production";
export const IS_DEV_ENV = process.env.NODE_ENV === "development";
export const BASE_URL = "https://api.themoviedb.org/3/";
export const IMG_URL = "https://image.tmdb.org/t/p/w185/";
export const BACKDROP_1280_URL = "https://image.tmdb.org/t/p/w1280/";

// General Categories
export const PLAYING_NOW_URL = `${BASE_URL}movie/now_playing?language=en-US&api_key=${API_KEY}`;
export const UP_COMING_URL = `${BASE_URL}movie/upcoming?language=en-US&api_key=${API_KEY}`;
export const TOP_RATED_URL = `${BASE_URL}movie/top_rated?language=en-US&api_key=${API_KEY}`;
export const MULTI = `${BASE_URL}search/multi?language=en-US&api_key=${API_KEY}`;

// Genres

export const GET_MOVIES_GENRE_LIST_URL = `${BASE_URL}genre/movie/list?language=en-US&api_key=${API_KEY}`;
export const GET_TV_GENRE_LIST_URL = `${BASE_URL}genre/tv/list?language=en-US&api_key=${API_KEY}`;
export const GET_MOVIES_BY_GENRE_URL = `${BASE_URL}discover/movie&api_key=${API_KEY}&genre/movie/list`;
export const GET_TVs_BY_GENRE_URL = `${BASE_URL}discover/movie&api_key=${API_KEY}&with_genres=`;

// People
export const GET_POPULAR_PEOPLE_URL = `${BASE_URL}/person/popular?language=en-US&api_key=${API_KEY}`;
export const GET_TRENDING_PEOPLE_URL = `${BASE_URL}trending/person/day?api_key=${API_KEY}&language=en-US`;
export const GET_PEOPLE_DETAILS_URL = `${BASE_URL}/person?api_key=${API_KEY}&person_id=`;
export const PEOPLE_URL = `${BASE_URL}search/person?api_key=${API_KEY}&query=`;

// Movies
export const DISCOVER_MOVIES = `${BASE_URL}discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
export const SEARCH_MOVIES_URL = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

// TV
export const SEARCH_TV_URL = `${BASE_URL}search/tv?query=`;
export const TRENDING_TV_URL = `${BASE_URL}trending/tv/day?api_key=${API_KEY}&language=en-US&`;
export const AIRING_TODAY_TV_URL = `${BASE_URL}tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`;
export const TOP_RATED_TV_URL = `${BASE_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

// Image Fallback
export const NO_IMAGE = "/images/No-Image-Placeholder.svg";

export const GENRES = {
  moviesList: {
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    fantasy: 14,
    history: 36,
    horror: 27,
    music: 10402,
    mystery: 9648,
    romance: 10749,
    scienceFiction: 878,
    tVMovie: 10770,
    thriller: 53,
    war: 10752,
    western: 37,
  },
  tvList: {
    actionAndAdventure: 10759,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    kids: 10762,
    mystery: 9648,
    news: 10763,
    reality: 10764,
    sciFiAndFantasy: 10765,
    soap: 10766,
    talk: 10767,
    warAndPolitics: 10768,
    western: 37,
  },
};
