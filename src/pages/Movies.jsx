import React from "react";
import GenreMovieListMovies from "../components/MovieList/GenreMovieListMovies";

function Movies() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #131520 0%, #1f2230 50%, #2a2e40 100%)",
      }}
    >
      <div className="pt-20">
        <GenreMovieListMovies number={3} />
      </div>
    </div>
  );
}

export default Movies;
