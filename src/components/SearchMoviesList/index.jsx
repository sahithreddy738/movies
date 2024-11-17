import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  API_OPTIONS,
  SEARCH_MOVIES_URL_1,
  SEARCH_MOVIES_URL_2,
} from "../../utils/constants";
import Spinner from "../Spinner";
import MovieCard from "../MovieCard";
import MovieModal from "../Model";

const MoviesSearchList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { movieName } = useParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const fetchMoviesBasedOnSearch = async () => {
    const res = await fetch(SEARCH_MOVIES_URL_1 + movieName, API_OPTIONS);
    const data = await res.json();
    setSearchedMovies([...data.results]);
  };
  useEffect(() => {
    fetchMoviesBasedOnSearch();
  }, [movieName]);
  if (searchedMovies && searchedMovies.length === 0)
    return (
      <div>
        <Spinner />
      </div>
    );
    const openModal=(id) =>{
        setIsModalOpen(true);
        setSelectedMovieId(id);
    }
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMovieId(null);
      };
  return (
    <div className="w-full bg-black items-center flex rounded-md">
      <div className=" p-4 flex flex-wrap gap-2 items-center justify-center">
        {searchedMovies.map((movie) => (
          <MovieCard
            imageURL={
              movie.poster_path ? movie.poster_path : movie.backdrop_path
            }
            movieName={movie.title}
            year={movie.release_date}
            key={movie.id}
            onOpen={openModal}
            id={movie.id}
          />
        ))}
      </div>
      {
         isModalOpen && <MovieModal movieId={selectedMovieId} onClose={closeModal} />
      }
    </div>
  );
};

export default MoviesSearchList;
