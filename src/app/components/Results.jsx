import React from "react";

import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="grid max-w-7xl py-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
