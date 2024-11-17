import { debounce } from "lodash";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const usePopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  try {
    const fetchPopularMovies = async (page) => {
      if (loading) return;
      setLoading(true);
      const res = await fetch(POPULAR_MOVIES_URL + page, API_OPTIONS);
      const data = await res.json();
      setPopularMovies((prevMovies) => [...prevMovies, ...data.results]);
      setLoading(false);
    };
    useEffect(() => {
      const handleScroll = debounce(() => {
        const { scrollTop, scrollHeight } = document.documentElement;
        if (window.innerHeight + scrollTop >= scrollHeight - 10) {
          setPage((prevPage) => prevPage + 1);
        }
      }, 300);

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
      fetchPopularMovies(page);
    }, [page]);
  } catch (error) {
    console.log(error);
  }

  return popularMovies;
};

export default usePopularMovies;
