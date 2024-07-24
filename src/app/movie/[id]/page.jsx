import Image from "next/image";
import React from "react";
const API_KEY = process.env.API_KEY;

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  const movie = await res.json();
  //   console.log(movie);
  return (
    <div className="w-full">
      <div className="flex flex-col content-center max-w-6xl p-6 mx-auto md:pt-8 md:flex-row md:space-x-6">
        <Image
          alt=""
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-xl"
        ></Image>
        <div className="flex flex-col justify-center p-2">
          <h2 className="mb-3 text-2xl font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3 text-lg">{movie.overview}</p>
          <p className="mb-3">
            {" "}
            <span className="mr-1 font-semibold">Date Released: </span>{" "}
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Rating: </span>{" "}
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
