import React from "react";
import Slider from "../components/Slider";
import ProductionHouse from "../components/ProductionHouse";
import GenreMovieList from "../components/MovieList/GenreMovieList";
import PersonListTitle from "../components/PersonList/PersonListTitle";

function Home() {
  return (
    <>
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      <PersonListTitle title={"Acting"} />
    </>
  );
}

export default Home;
