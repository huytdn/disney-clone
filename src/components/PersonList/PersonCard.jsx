import React from "react";
import { Link } from "react-router-dom";

function PersonCard({ item }) {
  return (
    <div className="flex-shrink-0 mx-2">
      <Link to={`/reviewactor/${item.id}`}>
        <img
          src={`${import.meta.env.VITE_IMG_URL}${item.profile_path}`}
          alt={item.name}
          className="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover cursor-pointer 
                   hover:border-[4px] border-gray-400 hover:scale-105
                   transition-all duration-200 ease-in"
        />
        <p className="text-white mt-2 text-center">{item.name}</p>
      </Link>
    </div>
  );
}

export default PersonCard;
