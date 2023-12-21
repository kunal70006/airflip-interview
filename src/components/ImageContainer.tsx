"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const imagesArray = ["front.jpg", "side.jpg", "back.jpg"];

const ImageContainer = () => {
  const [selected, setSelected] = useState(0);

  function handleSelectChange(val: number) {
    setSelected(val);
  }

  return (
    <div className="flex flex-col w-2/3 sticky">
      <div className="rounded-lg border border-brand-gray-200 shadow-sm lg:h-[310px] lg:w-[480px] relative">
        <Image
          src={`/assets/images/${imagesArray[selected]}`}
          alt="front"
          fill
          className="object-contain"
        />
      </div>
      <div className="mt-4 flex gap-4">
        {imagesArray.map((img, idx) => (
          <div
            className={twMerge(
              "rounded-lg border border-brand-gray-200shadow-sm w-[150px] h-[75px] relative hover:border-brand-gray-400 focus:border-brand-gray-400",
              selected === idx
                ? "border-2 border-brand-gray-700 focus:border-brand-gray-700"
                : ""
            )}
            key={img}
            onClick={() => handleSelectChange(idx)}
          >
            <Image
              src={`/assets/images/${img}`}
              alt="front"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
