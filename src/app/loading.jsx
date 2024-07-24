// /* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center mt-16 ">
      <Image src="/spinner.svg" alt="" height={100} width={200}></Image>
    </div>
  );
}
