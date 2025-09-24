import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";

function ReviewActor() {
  const { id } = useParams();
  const [personMovieList, setPersonMovieList] = useState([]);
  const [actor, setActor] = useState(null);

  useEffect(() => {
    GlobalApi.getPersonDetails(id)
      .then((res) => setActor(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    GlobalApi.getTrendingPerson()
      .then((res) => {
        setPersonMovieList(res.data.results || []);
      })
      .catch(console.error);
  }, []);

  if (!actor) return <div className="text-white p-8">Loading...</div>;

  const actorFromTrending = personMovieList.find((p) => p.id === Number(id));

  return (
    <div
      className="pt-20 min-h-[100vh] text-white px-8 md:px-20"
      style={{
        background:
          "linear-gradient(135deg, #131520 0%, #1f2230 50%, #2a2e40 100%)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10 items-start">
        <div className="w-full max-w-[250px] md:w-[250px] justify-self-center md:justify-self-start pt-20">
          <div className="rounded-2xl border-4 border-gray-600 shadow-lg overflow-hidden">
            <img
              src={`${import.meta.env.VITE_IMG_URL}${actor.profile_path}`}
              alt={actor.name}
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>

        <div>
          <h1 className="text-[32px] md:text-[45px] font-bold mb-4 md:pt-15 pt-5">
            {actor.name}
          </h1>
          <p className="text-lg mb-4">
            {actor.biography || "No biography available."}
          </p>

          <p className="text-gray-300">
            <span className="font-semibold">Birthday:</span>{" "}
            {actor.birthday || "N/A"}
          </p>
          {actor.place_of_birth && (
            <p className="text-gray-300">
              <span className="font-semibold">Place of birth:</span>{" "}
              {actor.place_of_birth}
            </p>
          )}
          {actor.known_for_department && (
            <p className="text-gray-300 mb-6">
              <span className="font-semibold">Known for:</span>{" "}
              {actor.known_for_department}
            </p>
          )}

          {actorFromTrending && actorFromTrending.known_for?.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Movies</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {actorFromTrending.known_for.map((movie) => (
                  <div
                    key={movie.id}
                    className="bg-[#1f2230] rounded-lg shadow-md p-2 mb-10 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#2a2e40]"
                  >
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}${
                        movie.poster_path
                      }`}
                      alt={movie.title || movie.original_title}
                      className="w-full rounded-lg"
                    />
                    <h3 className="mt-2 text-sm font-medium">
                      {movie.title || movie.original_title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {movie.release_date || "N/A"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewActor;
