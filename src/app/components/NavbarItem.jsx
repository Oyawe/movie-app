"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Loading from "../loading";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Link
          className={`hover:text-amber-600 transition ease-in duration-300 font-semibold ${
            genre === param
              ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
              : ""
          }`}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </div>
    </Suspense>
  );
}
