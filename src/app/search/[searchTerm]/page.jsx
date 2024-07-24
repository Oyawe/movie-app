import Results from "@/app/components/Results";
import React from "react";
const API_KEY = process.env.API_KEY;

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${API_KEY}`
  );
  const data = await res.json();
  const results = data.results;
  //   console.log(results);
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="pt-6 text-center ">No results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
