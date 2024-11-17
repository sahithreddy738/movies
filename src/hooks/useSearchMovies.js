import { useEffect, useState } from "react";
import {
  API_OPTIONS,
  SEARCH_MOVIES_URL_1,
} from "../utils/constants";


const useSearchMovies = (movieName) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  try {
    const fetchMoviesBasedOnSearch = async () => {
      const res = await fetch(
        SEARCH_MOVIES_URL_1 + movieName,
        API_OPTIONS
      );
      const data = await res.json();
      setSearchedMovies((prevState) => [...prevState, ...data.results]);
    };
    useEffect(() => {
      fetchMoviesBasedOnSearch();
    }, [movieName]);
  } catch (error) {
    console.log(error);
  }
  return searchedMovies;
};
export default useSearchMovies