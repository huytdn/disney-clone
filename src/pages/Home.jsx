import React from "react";
import Slider from "../components/Slider";
import ProductionHouse from "../components/ProductionHouse";
import PersonListTitle from "../components/PersonList/PersonListTitle";
import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";
import GenreMovieListHome from "../components/MovieList/GenreMovieListHome";

function Home() {
  return (
    <>
      <Slider />
      <ProductionHouse />
      <GenreMovieListHome number={3} />
      <PersonListTitle title={"Acting"} />
      <Advertisement />
      <Footer />
    </>
  );
}

export default Home;
