import React from "react";
import Slider from "../components/Slider";
import ProductionHouse from "../components/ProductionHouse";
import GenreMovieList from "../components/MovieList/GenreMovieList";
import PersonListTitle from "../components/PersonList/PersonListTitle";
import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      <PersonListTitle title={"Acting"} />
      <Advertisement />
      <Footer />
    </>
  );
}

export default Home;
