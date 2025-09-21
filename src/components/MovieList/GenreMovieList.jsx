import React from "react";
import GenresList from "../../constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index < 3 && (
            <div key={index} className="p-1 md:p-4 px-10 md:px-20">
              <h2 className="text-[20px] md:text-[30px] text-white font-bold">
                {item.name}
              </h2>
              <MovieList genreId={item.id} type="poster" itemsPerPage={6} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
