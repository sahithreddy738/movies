import React, { useEffect, useState } from "react";
import {
  API_OPTIONS,
  MOVIE_DETAILS_URL,
  MOVIE_IMAGES_CDN_URL,
} from "../../utils/constants";
import Spinner from "../Spinner";

const MovieModal = ({ movieId, onClose}) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const fetchMovieDetails = async () => {
    const res = await fetch(MOVIE_DETAILS_URL + movieId, API_OPTIONS);
    const data = await res.json();
    setSelectedMovie(data);
  };
  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-full max-w-80 max-h-80 sm:max-w-96 overflow-scroll scrollbar sm:max-h-96 md:max-h-full md:max-w-2xl flex flex-col items-center gap-3">
        {selectedMovie ? (
          <>
            <div className="flex md:flex-row flex-col gap-3 items-center">
              <img
                src={MOVIE_IMAGES_CDN_URL + selectedMovie.poster_path}
                className="w-[70%] sm:w-[40%] rounded-lg"
              ></img>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-bold">
                  {selectedMovie.title}
                </h2>
                <p className="mt-4">{selectedMovie.overview}</p>
                <span className="font-semibold">
                  {selectedMovie.release_date}
                </span>
                <span className="font-semibold">
                  {selectedMovie.vote_average.toFixed(1)}
                </span>
                <span className="font-semibold">
                  {selectedMovie.runtime + " minutes"}
                </span>
                <span className="font-semibold"></span>
                <div className="flex flex-row gap-1">
                  {selectedMovie.genres.length > 0 ? (
                    selectedMovie.genres.map((genre) => (
                      <p className="font-semibold" key={genre.id}>
                        {genre.name}
                      </p>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default MovieModal;
