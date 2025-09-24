import React from "react";
import { Link } from "react-router-dom";

function HrMovieCard({ movie }) {
  return (
    <div className="relative w-[110px] md:w-[242px] flex-shrink-0">
      <Link to={`/reviewfilm/${movie.id}`}>
        <div>
          <img
            src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="w-[110px] md:w-[200px] rounded-lg
          hover:border-[4px] border-gray-400 cursor-pointer
          hover:scale-105 transition-all duration-200 ease-in"
          />
        </div>
      </Link>
    </div>
  );
}

export default HrMovieCard;
