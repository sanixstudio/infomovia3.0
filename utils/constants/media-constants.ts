export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3/";
export const IMG_URL = "https://image.tmdb.org/t/p/w185/";
export const BACKDROP_1280 = "https://image.tmdb.org/t/p/w1280";
export const PLAYING_NOW = `${BASE_URL}movie/now_playing?language=en-US&api_key=${API_KEY}`;
export const UP_COMING = `${BASE_URL}movie/upcoming?language=en-US&api_key=${API_KEY}`;
export const TOP_RATED = `${BASE_URL}movie/top_rated?language=en-US&api_key=${API_KEY}`;
export const SEARCH_URL = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
export const GENRES_URL = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=`;

export const GENRES = {
  movies: {
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
  tvShows: {
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
