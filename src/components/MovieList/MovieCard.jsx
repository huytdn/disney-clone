import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="relative w-[110px] md:w-[280px] flex-shrink-0">
      <div className="relative w-full h-0 pb-[56.25%]">
        <img
          src={`${import.meta.env.VITE_IMG_URL}${movie.backdrop_path}`}
          alt={movie.title || movie.name}
          className="absolute top-0 left-0 w-full h-full rounded-md cursor-pointer
                     hover:border-[4px] border-grey-400 hover:scale-105
                     transition-all duration-200 ease-in"
        />
      </div>
      <p className=" text-white truncate text-center text-xs md:text-[15px] lg:text-lg">
        {movie.title}
      </p>
    </div>
  );
}

export default MovieCard;
