export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer "+import.meta.env.VITE_TMDB_KEY,
    },
  };
  export const POPULAR_MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?page=";
  export const MOVIE_DETAILS_URL="https://api.themoviedb.org/3/movie/";
  export const SEARCH_MOVIES_URL_1="https://api.themoviedb.org/3/search/movie?query=";
  export const SEARCH_MOVIES_URL_2="&page=";
  export const HOME_PAGE_SENTENCE="Lights, camera, action – find your next blockbuster!";
  export const PLACEHOLDER_TEXT="Search Movies";
  export const MOVIE_IMAGES_CDN_URL = "https://image.tmdb.org/t/p/w500/";