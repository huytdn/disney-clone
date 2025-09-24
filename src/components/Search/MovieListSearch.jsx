import React from "react";
import { Link } from "react-router-dom";

function MovieListSearch({ data, title }) {
  return (
    <div className="py-1 px-20">
      <div className="text-[20px] md:text-[30px] text-white font-bold pb-5">
        {title}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-13 md:gap-10 gap-5 ">
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <Link to={`/reviewfilm/${item.id}`}>
                {item.poster_path ? (
                  <img
                    src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                    alt={item.title || item.name}
                    className="w-full h-auto  hover:border-[4px] border-gray-300 rounded-lg overflow-hidden cursor-pointer 
                           hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                ) : (
                  <div
                    className="w-full aspect-[2/3] bg-gray-600 rounded-lg flex items-center justify-center hover:border-[4px] border-gray-300 cursor-pointer 
                           hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    <span className="text-gray-400 text-sm">Không có hình</span>
                  </div>
                )}
                <p className=" text-white truncate text-center text-xs md:text-[15px] lg:text-lg pt-3">
                  {item.title || item.name}
                </p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MovieListSearch;
