import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";
import MovieCard from "../MovieCard";
import MovieModal from "../Model";
import useSearchMovies from "../../hooks/useSearchMovies";

const MoviesSearchList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { movieName } = useParams();
  const searchedMovies = useSearchMovies(movieName);
  if (!searchedMovies)
    return (
      <div>
        <Spinner />
      </div>
    );
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
      <div className=" p-4 flex flex-wrap gap-2 items-center justify-center">
        {searchedMovies.length === 0 ? (
          <p className="text-lg text-white">No Movies Found</p>
        ) : (
          searchedMovies.map((movie) => (
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
          ))
        )}
      </div>
      {isModalOpen && (
        <MovieModal movieId={selectedMovieId} onClose={closeModal} />
      )}
    </div>
  );
};

export default MoviesSearchList;
