import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import icons from "../assets/icons/icon";
import HeaderItem from "./HeaderItem";

const {
  HiHome,
  HiMagnifyingGlass,
  HiPlus,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiDotsVertical,
} = icons;
function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome, path: "/" },
    { name: "SEARCH", icon: HiMagnifyingGlass, path: "/search" },
    { name: "WATCH LIST", icon: HiPlus, path: "/watchlist" },
    { name: "ORIGINALS", icon: HiStar, path: "/originals" },
    { name: "MOVIES", icon: HiPlayCircle, path: "/movies" },
    { name: "SERIES", icon: HiTv, path: "/series" },
  ];
  return (
    <div className="flex items-center gap-8 justify-between p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          alt="Logo"
          className="w-[80px] lg:w-[115px] object-cover"
        />
        <div className="hidden lg:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItem
              key={index}
              name={item.name}
              Icon={item.icon}
              to={item.path}
            />
          ))}
        </div>
        <div className="flex lg:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem
                  key={index}
                  name={""}
                  Icon={item.icon}
                  to={item.path}
                />
              )
          )}
        </div>
        <div
          className="lg:hidden relative"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle && (
            <div className="absolute mt-3 bg-[#121212] border border-gray-700 p-4 rounded-lg">
              {menu.slice(3).map((item, index) => (
                <HeaderItem
                  key={index}
                  name={item.name}
                  Icon={item.icon}
                  to={item.path}
                  className={"mb-3"}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <Link
          to="/signin"
          className="font-semibold cursor-pointer hover:underline underline-offset-8"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="font-semibold cursor-pointer hover:underline underline-offset-8"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Header;
