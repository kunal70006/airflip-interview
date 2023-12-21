"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Details = () => {
  const [selected, setSelected] = useState(0);

  function handleSelectedChange(val: number) {
    setSelected(val);
  }

  return (
    <div className="flex flex-col w-full">
      <span className="flex flex-col gap-1">
        <p className="text-brand-gray-500 text-sm font-medium">Starting at</p>
        <h2 className="font-extrabold text-5xl text-brand-gray-900">$1,799</h2>
      </span>
      <div className="mt-6 flex flex-col gap-4">
        <p className="text-lg text-brand-gray-900">
          The KEMPER PROFILER™ is the leading-edge digital guitar amplifier and
          all-in-one effects processor.
        </p>
        <p className="text-brand-gray-500">
          Hailed as a game-changer by guitarists the world over, the PROFILER™
          is the first digital guitar amp to really nail the full and dynamic
          sound of a guitar or bass amp.
        </p>
        <p className="text-brand-gray-500">
          This is made possible by a radical, patented technology and concept
          which we call "PROFILING".
        </p>
      </div>
      <div className="mt-12 flex flex-col ">
        <span className="text-lg font-medium text-brand-gray-900 mb-2">
          Form Factor
        </span>
        <div className="flex gap-4">
          <div
            className={twMerge(
              "rounded-lg shadow-sm px-6 py-5 border border-brand-gray-300 cursor-pointer",
              selected === 0 ? "border-2 border-brand-gray-700" : ""
            )}
            onClick={() => handleSelectedChange(0)}
          >
            <p className="text-brand-gray-900 text-sm font-medium mb-2">
              Profiler Head
            </p>
            <span className="text-brand-gray-500 text-sm">
              Compact amplifier head, perfect for
              <br /> a speaker cabinet or desk.
            </span>
          </div>
          <div
            className={twMerge(
              "rounded-lg shadow-sm px-6 py-5 border border-brand-gray-300 cursor-pointer",
              selected === 1 ? "border-2 border-brand-gray-700" : ""
            )}
            onClick={() => handleSelectedChange(1)}
          >
            <p className="text-brand-gray-900 text-sm font-medium mb-2">
              Profiler Rack
            </p>
            <span className="text-brand-gray-500 text-sm">
              3U rackmount version of the classic
              <br /> profiling amplifier.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
