import axios from "axios";

const movieBaseUrl = import.meta.env.VITE_MOVIE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;
const movieByGenreBaseURL = import.meta.env.VITE_GENRE_BASE_URL;

const getTrendingVideos = () =>
  axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

const getTrendingPerson = () =>
  axios.get(movieBaseUrl + "/person/popular?api_key=" + api_key);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "?api_key=" + api_key + "&with_genres=" + id);

const searchMovie = (query) =>
  axios.get(
    `${movieBaseUrl}/search/movie?api_key=${api_key}&query=${query}&include_adult=false&language=vi-US&page=1`
  );

const getMovieDetails = (movieId) => {
  return axios.get(
    `${movieBaseUrl}/movie/${movieId}?api_key=${api_key}&language=vi-US`
  );
};

const getPersonDetails = (personId) =>
  axios.get(
    `${movieBaseUrl}/person/${personId}?api_key=${api_key}&language=en-US`
  );
976;
export default {
  getTrendingVideos,
  getMovieByGenreId,
  getTrendingPerson,
  searchMovie,
  getMovieDetails,
  getPersonDetails,
};
