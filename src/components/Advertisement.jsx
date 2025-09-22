import React from "react";
import disneyShop from "../assets/images/disneyShop.png";
import urlshop from "../assets/images/urlshop.png";
import Button from "./Button";

function Advertisement() {
  return (
    <div className="relative p-4 px-10 md:px-20">
      <img
        src={disneyShop}
        alt="Advertisement"
        className=" w-full rounded-lg"
      />

      <div className="absolute hidden md:top-20 md:left-25  lg:top-45 lg:left-50 md:flex md:flex-col gap-4">
        <img
          src={urlshop}
          alt="linkshop"
          className=" w-32 md:w-110 cursor-pointer"
        />

        <p className="text-black text-lg md:text-xl font-semibold ml-10">
          Make a huggable new friend today.
        </p>

        <Button
          title={"SHOP NOW"}
          className={
            "bg-blue-900 rounded-3xl hover:bg-blue-800 transition w-40 ml-20 mt-5"
          }
        />
      </div>
    </div>
  );
}

export default Advertisement;
