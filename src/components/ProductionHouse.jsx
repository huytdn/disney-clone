import React from "react";
import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";

import disneyVideo from "../assets/videos/disney.mp4";
import marvelVideo from "../assets/videos/marvel.mp4";
import nationalGVideo from "../assets/videos/national-geographic.mp4";
import pixarVideo from "../assets/videos/pixar.mp4";
import starwarVideo from "../assets/videos/star-wars.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyVideo,
    },
    {
      id: 2,
      image: pixar,
      video: pixarVideo,
    },
    {
      id: 3,
      image: marvel,
      video: marvelVideo,
    },
    {
      id: 4,
      image: starwar,
      video: starwarVideo,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGVideo,
    },
  ];
  return (
    <div className="flex gap-3 md:gap-8 p-2 md:px-20 px-10">
      {productionHouseList.map((item) => {
        return (
          <div
            key={item.id}
            className="border-[2px] rounded-lg border-gray-500 hover:scale-110 transition-all duration-300 ease-in-outs cursor-pointer relative shadow-xl shadow-gray-800"
          >
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              muted
              className="absolute top-0 rounded-lg z-0 opacity-0 hover:opacity-80"
            />
            <img src={item.image} className="w-full z-[1] opacity-100" />
          </div>
        );
      })}
    </div>
  );
}

export default ProductionHouse;
