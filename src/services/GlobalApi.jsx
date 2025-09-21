import axios from "axios";

const movieBaseUrl = import.meta.env.VITE_MOVIE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;
const movieByGenreBaseURL = import.meta.env.VITE_GENRE_BASE_URL;

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getTrendingPerson = axios.get(
  movieBaseUrl + "/person/popular?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "?api_key=" + api_key + "&with_genres=" + id);

export default { getTrendingVideos, getMovieByGenreId, getTrendingPerson };
