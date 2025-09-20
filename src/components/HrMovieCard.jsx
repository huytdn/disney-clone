import React from "react";

function HrMovieCard({ movie }) {
  return (
    <div className="relative w-[110px] md:w-[242px] flex-shrink-0">
      <div>
        <img
          src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`}
          alt={movie.title || movie.name}
          className="w-[110px] md:w-[200px] rounded-lg
        hover:border-[4px] border-gray-400 cursor-pointer
        hover:scale-105 transition-all duration-200 ease-in"
        />
      </div>
    </div>
  );
}

export default HrMovieCard;
