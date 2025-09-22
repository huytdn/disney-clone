import React, { useEffect, useState } from "react";
import SearchInput from "../components/Search/SearchInput";
import MovieListSearch from "../components/Search/MovieListSearch";
import GlobalApi from "../services/GlobalApi";

function Search() {
  const [movieSearch, setMovieSearch] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const handleSearch = async (searchValue) => {
    try {
      const res = await GlobalApi.searchMovie(searchValue);
      setMovieSearch(res.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    GlobalApi.getTrendingVideos()
      .then((res) => setMovieList(res.data.results || []))
      .catch(console.error);
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #131520 0%, #1f2230 50%, #2a2e40 100%)",
      }}
    >
      <SearchInput onSearch={handleSearch} />
      {movieSearch.length > 0 ? (
        <MovieListSearch data={movieSearch} title={"Kết quả tìm kiếm"} />
      ) : (
        <MovieListSearch data={movieList} title={"Hot Film"} />
      )}
    </div>
  );
}

export default Search;
