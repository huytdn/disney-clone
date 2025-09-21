import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../../services/GlobalApi";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

function MovieList({ genreId, type, itemsPerPage }) {
  const [movieList, setMovieList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      console.log(res);
      setMovieList(res.data.results);
    });
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - itemsPerPage;
      setCurrentIndex(newIndex < 0 ? 0 : newIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex < movieList.length - itemsPerPage) {
      const newIndex = currentIndex + itemsPerPage;
      setCurrentIndex(
        newIndex > movieList.length - itemsPerPage
          ? movieList.length - itemsPerPage
          : newIndex
      );
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.children[0];
      const secondChild = containerRef.current.children[1];

      if (firstChild && secondChild) {
        const cardWidth =
          secondChild.getBoundingClientRect().left -
          firstChild.getBoundingClientRect().left;

        containerRef.current.scrollTo({
          left: currentIndex * cardWidth,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  return (
    <div className="relative">
      <div
        onClick={handlePrev}
        className={`hidden md:flex items-center justify-center absolute top-1/2 left-[-19px] transform -translate-y-1/2 z-10 
                w-12 h-12 rounded-full bg-black/30 cursor-pointer
                ${currentIndex === 0 ? "opacity-40 pointer-events-none" : ""}`}
      >
        <IoChevronBackSharp className="text-white text-[30px] " />
      </div>

      <div
        ref={containerRef}
        className={`flex overflow-x-auto ${
          type === "poster" ? "gap-5" : "gap-7"
        } px-3 no-scrollbar pt-5 pb-5 scroll-smooth`}
      >
        {movieList.map((item, index) =>
          type === "poster" ? (
            <HrMovieCard key={index} movie={item} />
          ) : (
            <MovieCard key={index} movie={item} />
          )
        )}
      </div>

      <div
        onClick={handleNext}
        className={`hidden md:flex items-center justify-center absolute top-1/2 right-[-22px] transform -translate-y-1/2 z-10 
                w-12 h-12 rounded-full bg-black/30 cursor-pointer
                ${
                  currentIndex >= movieList.length - itemsPerPage
                    ? "opacity-40 pointer-events-none"
                    : ""
                }`}
      >
        <IoChevronForwardSharp className="text-white text-[30px]" />
      </div>
    </div>
  );
}

export default MovieList;
