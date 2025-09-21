import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import icons from "../../assets/icons/icon";
import HeaderItem from "./HeaderItem";

const {
  HiHome,
  HiMagnifyingGlass,
  HiPlus,
  HiStar,
  HiPlayCircle,
  HiDotsVertical,
  IoMdMenu,
} = icons;
function Header() {
  const navigate = useNavigate();
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome, path: "/" },
    { name: "SEARCH", icon: HiMagnifyingGlass, path: "/search" },
    { name: "WATCH LIST", icon: HiPlus, path: "/watchlist" },
    { name: "ORIGINALS", icon: HiStar, path: "/originals" },
    { name: "MOVIES", icon: HiPlayCircle, path: "/movies" },
  ];
  return (
    <div className="flex items-center gap-8 justify-between p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          alt="Logo"
          className="w-[80px] lg:w-[115px] object-cover"
          onClick={() => navigate("/")}
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
            setToggle1(!toggle1);
          }}
        >
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle1 && (
            <div className="absolute right-4 mt-3 bg-[#121212] border border-gray-700 p-3 rounded-lg z-10">
              {menu.slice(3).map((item, index) => (
                <HeaderItem
                  key={index}
                  name={item.name}
                  Icon={item.icon}
                  to={item.path}
                  className={"p-1"}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <Link
          to="/signin"
          className="font-semibold text-[15px] cursor-pointer hover:underline underline-offset-8 md:block hidden"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="font-semibold text-[15px] cursor-pointer hover:underline underline-offset-8 md:block hidden"
        >
          Register
        </Link>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => {
            setToggle2(!toggle2);
          }}
        >
          <IoMdMenu />
          {toggle2 && (
            <div className="absolute right-5 mt-2 bg-[#121212] border border-gray-700 p-4 rounded-lg shadow-lg z-20">
              <Link
                to="/signin"
                className="block font-semibold text-[15px] cursor-pointer hover:underline underline-offset-8 mb-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block font-semibold text-[15px] cursor-pointer hover:underline underline-offset-8"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
