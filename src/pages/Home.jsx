import React from "react";
import Slider from "../components/Slider";
import ProductionHouse from "../components/ProductionHouse";
import GenreMovieList from "../components/GenreMovieList";

function Home() {
  return (
    <>
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </>
  );
}

export default Home;
