import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import icons from "../assets/icons/icon";

const { IoChevronBackSharp, IoChevronForwardSharp } = icons;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    GlobalApi.getTrendingVideos()
      .then((res) => setMovieList(res.data.results || []))
      .catch(console.error);
  }, []);

  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (!slider || !slider.children || !slider.children[index]) return;

    const slide = slider.children[index];
    const slideWidth = slide.offsetWidth;

    const scrollPos =
      slide.offsetLeft - slider.clientWidth / 2 + slideWidth / 2;

    slider.scrollTo({
      left: scrollPos,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (movieList.length === 0) return;
    if (currentIndex === 0) return;
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    if (movieList.length === 0) return;
    if (currentIndex >= movieList.length - 1) return;
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    if (movieList.length > 0) {
      setTimeout(() => scrollToIndex(currentIndex), 50);
    }
  }, [movieList]);

  return (
    <div className="relative">
      <div
        onClick={handlePrev}
        className={`hidden md:flex items-center justify-center absolute top-1/2 left-14 transform -translate-y-1/2 z-10 
              w-12 h-12 rounded-full bg-black/30 cursor-pointer
              ${currentIndex === 0 ? "opacity-40 pointer-events-none" : ""}`}
      >
        <IoChevronBackSharp className="text-white text-[30px]" />
      </div>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto w-full px-20 py-4 no-scrollbar scroll-smooth"
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={`${import.meta.env.VITE_IMG_URL}${item.backdrop_path}`}
            alt={item.title || item.name}
            className="min-w-full h-[110px] md:h-[320px] lg:h-[420px] object-top  mr-10 rounded-md hover:border-[4px] border-gray-400 transition-all duration-200 ease-in-out"
            onLoad={() => {}}
          />
        ))}
      </div>

      <div
        onClick={handleNext}
        className={`hidden md:flex items-center justify-center absolute top-1/2 right-14 transform -translate-y-1/2 z-10 
              w-12 h-12 rounded-full bg-black/30 cursor-pointer
              ${
                currentIndex >= movieList.length - 1
                  ? "opacity-40 pointer-events-none"
                  : ""
              }`}
      >
        <IoChevronForwardSharp className="text-white text-[30px]" />
      </div>
    </div>
  );
}

export default Slider;
