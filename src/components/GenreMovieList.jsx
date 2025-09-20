import React from "react";
import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index < 4 && (
            <div key={index} className="p-4 px-10 md:px-20">
              <h2 className="text-[30px] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} type="poster" />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
