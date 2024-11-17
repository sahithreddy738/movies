import React, {  useState } from "react";
import Spinner from "../Spinner";
import MovieCard from "../MovieCard";
import MovieModal from "../Model";
import usePopularMovies from "../../hooks/usePopularMovies";

const MovieList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const popularMovies=usePopularMovies();
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
