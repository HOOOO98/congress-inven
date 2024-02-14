import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="fixed w-full h-[500px] top-0 left-0">
      <div className="absolute bottom-0 left-0 w-full h-2/6 bg-gradient-to-b from-transparent to-white z-10" />
      <Image src="/banner.webp" alt="국회의사당 야경" layout="fill" objectFit="cover" objectPosition="center 65%" />
    </div>
  );
}

export default Banner;
