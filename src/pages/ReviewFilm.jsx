import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";
import Button from "../components/Button";

function ReviewFilm() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    GlobalApi.getMovieDetails(id)
      .then((res) => {
        setMovie(res.data);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <div className="text-white p-8">Loading...</div>;

  return (
    <div className="pt-16 sm:pt-20">
      <div className="relative px-4 sm:px-8 md:px-12 lg:px-20 pt-8 sm:pt-25">
        <img
          src={`${import.meta.env.VITE_IMG_URL}${movie.backdrop_path}`}
          alt={movie.title || movie.name}
          className="absolute inset-0 w-full h-full rounded-lg opacity-50 object-cover"
        />

        <div className="relative z-10 min-h-[400px] sm:min-h-[500px] lg:h-[650px] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-8">
          <div className="lg:col-span-8 text-white text-center lg:text-left">
            <p className="text-[28px] sm:text-[35px] lg:text-[45px] font-bold mb-4 leading-tight">
              {movie.title || movie.name}
            </p>

            <div className="mb-6">
              <p
                className={`text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed ${
                  expanded ? "" : "line-clamp-3"
                }`}
              >
                {movie.overview}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
              <div>
                <Button
                  title="Trailer Film"
                  className="bg-blue-500 rounded-3xl hover:bg-blue-600 px-6 py-3"
                />
              </div>
              <div>
                <Button
                  title="Watch Film"
                  className="bg-red-500 rounded-3xl hover:bg-red-600 px-6 py-3"
                />
              </div>
              {movie.overview.length > 200 && (
                <div onClick={() => setExpanded(!expanded)}>
                  <Button
                    title={expanded ? "Read less" : "Read more"}
                    className="bg-green-500 rounded-3xl hover:bg-green-600 cursor-pointer px-6 py-3"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end order-first lg:order-last">
            <img
              src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="w-[200px] sm:w-[240px] lg:w-[280px] max-w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewFilm;
