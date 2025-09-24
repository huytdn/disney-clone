import React from "react";
import Slider from "../components/Slider";
import ProductionHouse from "../components/ProductionHouse";
import PersonListTitle from "../components/PersonList/PersonListTitle";
import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";
import GenreMovieListHome from "../components/MovieList/GenreMovieListHome";

function Home() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #131520 0%, #1f2230 50%, #2a2e40 100%)",
      }}
    >
      <div className="pt-20">
        <Slider />
        <ProductionHouse />
        <GenreMovieListHome number={3} />
        <PersonListTitle title={"Hot Acting"} />
        <Advertisement />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
