"use client";

import React, { Suspense } from "react";
import Loading from "./loading";

export default function Error({ error, reset }) {
  return (
    <Suspense>
      <div className="text-center mt10">
        <h1>Something went wrong. Please try again later.</h1>
        <button className="hover: text-amber-600" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </Suspense>
  );
}
