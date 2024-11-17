import React, { useEffect, useState } from "react";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../../utils/constants";
import Spinner from "../Spinner";
import MovieCard from "../MovieCard";
import MovieModal from "../Model";

const MovieList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const fetchPopularMovies = async () => {
    const res = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
    const data = await res.json();
    setPopularMovies([...data?.results]);
    console.log(popularMovies)
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
  const openModal = (id) => {
    setIsModalOpen(true);
    setSelectedMovieId(id);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovieId(null);
  };
  return (
    <div className="w-full bg-black items-center flex rounded-md">
      {popularMovies && popularMovies.length === 0 ? (
        <div className="flex items-center p-4 justify-center w-full">
          <Spinner />
        </div>
      ) : (
        <div className=" p-4 flex flex-wrap gap-2 items-center justify-center">
          {popularMovies.map((movie) => (
            <MovieCard
              imageURL={movie.poster_path}
              movieName={movie.title}
              year={movie.release_date}
              key={movie.id}
              onOpen={openModal}
              id={movie.id}
            />
          ))}
        </div>
      )}
      {isModalOpen && (
        <MovieModal movieId={selectedMovieId} onClose={closeModal} />
      )}
    </div>
  );
};

export default MovieList;
