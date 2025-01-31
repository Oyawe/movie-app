import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="p-2 overflow-hidden transition duration-200 rounded-lg cursor-pointer group sm:p-0 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-3">
      <Link href={`/movie/${result.id}`}>
        <Image
          alt={result.title || result.name}
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={400}
          height={400}
          className="p-2 transition-opacity duration-300 rounded-2xl sm:p-0 sm:rounded-t-lg group-hover:opacity-75"
        ></Image>
        <div className="p-2">
          <p className="mt-2 mb-4 text-sm line-clamp-2">{result.overview}</p>
          <h2 className="mb-2 text-xl font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center justify-start ">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 ml-3 mr-1" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
