import React, { useState } from "react";
import BACKGROUND from "../../assets/background-8.jpg";
import LOGO from "../../assets/logo-1.png";
import SEARCH from "../../assets/search.png";
import { HOME_PAGE_SENTENCE, PLACEHOLDER_TEXT } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/search/" + searchInput);
    setSearchInput("");
  };
  return (
    <div className="w-full relative h-[80vh]">
      <div
        className="absolute top-2 left-4 sm:top-5 sm:left-5 cursor-pointer z-10"
        onClick={() => navigate("/")}
      >
        <img
          className="w-8 sm:h-8 md:w-14 md:h-14 cursor-pointer"
          src={LOGO}
          alt="logo-image"
        ></img>
      </div>

      <img
        src={BACKGROUND}
        className="w-full h-full"
        alt="background-image"
      ></img>

      <div className="  absolute w-full inset-0 flex  flex-col gap-6 md:gap-12 justify-center items-center text-center bg-black bg-opacity-40">
        <h1 className=" text-sm sm:text-xl md:text-3xl font-semibold text-white">
          {HOME_PAGE_SENTENCE}
        </h1>
        <div className="flex">
          <input
            className="w-28 sm:w-32 md:w-auto px-3 py-2 md:px-5 md:py-3 rounded-l-full border-none text-sm md:text-lg"
            placeholder={PLACEHOLDER_TEXT}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
          <button
            className="w-12 sm:w-16 md:w-auto px-3 py-2 md:px-5 md:py-3 rounded-r-full bg-rose-600 font-poppins text-sm md:text-lg "
            onClick={buttonHandler}
          >
            <img src={SEARCH} className="w-4 h-4 md:w-6 md:h-6"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
