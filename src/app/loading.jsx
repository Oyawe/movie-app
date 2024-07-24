/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center mt-16 ">
      <img src="spinner.svg" alt="loading..." />
    </div>
  );
}
