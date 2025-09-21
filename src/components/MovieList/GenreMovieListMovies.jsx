import React from "react";
import GenresList from "../../constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieListMovies({ number }) {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index > number && (
            <div key={index} className=" md:p-1 px-10 md:px-20">
              <h2 className="text-[20px] md:text-[30px] text-white font-bold">
                {item.name}
              </h2>
              <MovieList genreId={item.id} type="backdrop" itemsPerPage={3} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieListMovies;
