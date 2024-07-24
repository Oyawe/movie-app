"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  };
  return (
    <form
      className="flex justify-between max-w-7xl px-5 mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search Keywords..."
        className="flex-1 w-full placeholder-gray-300 bg-transparent rounded-md outline-none h-14"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-300"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
