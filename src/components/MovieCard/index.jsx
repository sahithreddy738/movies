import React from "react";
import { MOVIE_IMAGES_CDN_URL } from "../../utils/constants";
import IMAGE_NOT_AVAILABLE from "../../assets/cover_not_available.jpg";

const MovieCard = ({ id,imageURL, movieName, year,onOpen }) => {
  return (
    <div className="w-[90%] sm:w-[40%] md:w-[30%] p-4 cursor-pointer" onClick={()=>onOpen(id)}>
      <div className="flex flex-col gap-3 items-start">
        <img
          src={imageURL?MOVIE_IMAGES_CDN_URL + imageURL:IMAGE_NOT_AVAILABLE}
          className="w-full h-full rounded-md"
        ></img>
        <div className="flex flex-col gap-2">
          <h1 className="text-white md:text-lg md:font-semibold">{movieName}</h1>
          <span className="text-white">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
