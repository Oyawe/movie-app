"use client";

import React, { Suspense } from "react";
import { useEffect } from "react";
import Loading from "./loading";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <Suspense fallback={<Loading />}>
      <div className="text-center mt10">
        <h1>Something went wrong. Please try again later.</h1>
        <button className="hover: text-amber-600" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </Suspense>
  );
}
