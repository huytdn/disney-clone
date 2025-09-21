import React from "react";
import PersonCard from "./PersonCard";
import GlobalApi from "../../services/GlobalApi";
import { useState, useEffect, useRef } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

function PersonList({ itemsPerPage }) {
  const [personList, setPersonList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    getPersonList();
  }, []);

  const getPersonList = () => {
    GlobalApi.getTrendingPerson.then((res) => {
      console.log(res);
      setPersonList(res.data.results);
    });
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - itemsPerPage;
      setCurrentIndex(newIndex < 0 ? 0 : newIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex < personList.length - itemsPerPage) {
      const newIndex = currentIndex + itemsPerPage;
      setCurrentIndex(
        newIndex > personList.length - itemsPerPage
          ? personList.length - itemsPerPage
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
      {/* Nút prev */}
      <div
        onClick={handlePrev}
        className={`hidden md:flex items-center justify-center absolute top-1/2 left-[-19px] transform -translate-y-1/2 z-10 
                  w-12 h-12 rounded-full bg-black/30 cursor-pointer
                  ${
                    currentIndex === 0 ? "opacity-40 pointer-events-none" : ""
                  }`}
      >
        <IoChevronBackSharp className="text-white text-[30px]" />
      </div>
      {/* List */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto px-6 no-scrollbar pt-5 pb-5 scroll-smooth gap-2 md:gap-8"
      >
        {personList.map((item, index) => (
          <PersonCard item={item} key={index} />
        ))}
      </div>

      {/* Nút next */}
      <div
        onClick={handleNext}
        className={`hidden md:flex items-center justify-center absolute top-1/2 right-[-22px] transform -translate-y-1/2 z-10 
                  w-12 h-12 rounded-full bg-black/30 cursor-pointer
                  ${
                    currentIndex >= personList.length - itemsPerPage
                      ? "opacity-40 pointer-events-none"
                      : ""
                  }`}
      >
        <IoChevronForwardSharp className="text-white text-[30px]" />
      </div>
    </div>
  );
}

export default PersonList;
