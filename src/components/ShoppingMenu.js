"use client"

import React, {useState} from 'react'

function ShoppingMenu() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
      setActiveIndex(index);
    };
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center md:px-[2rem] px-[1rem] py-[2rem] bg-[#f4f4f479] overflow-hidden">
      {/* <div className="flex justify-center items-center text-[16px] gap-5">
        <div className="flex items-center gap-1">
          <h1>Brands</h1>
          <img src="/down_arrow.svg" alt="arrow" />
        </div>

        <h2 className="border border-[#AC702F] bg-[#AC702F] text-white py-1 px-3 rounded-full">
          Inspiration
        </h2>

        <div className="flex items-center gap-1">
          <h3>Categories</h3>
          <img src="/down_arrow.svg" alt="arrow" />
        </div>
      </div> */}

      <h1 className="text-[#0F172A] text-[32px] font-semibold text-center">
        Explore beautiful Inspiration from our Watch Collection
      </h1>

      <div className="About md:w-[80rem] w-[20rem] md:justify-center md:gap-[5.5rem] gap-[1.5rem]">
        <ul className="flex gap-16 font-normal text-[16px] items-center justify-center">
          <li
            className={`py-2 rounded-[6px] px-4 ${
              activeIndex === 0 ? "border border-[#0F172A]" : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            All
          </li>
          <li
            className={`py-2 rounded-[6px] px-4 ${
              activeIndex === 1 ? "border border-[#0F172A]" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            Casio
          </li>
          <li
            className={`py-2 rounded-[6px] px-4 ${
              activeIndex === 2 ? "border border-[#0F172A]" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            Seiko
          </li>
          <li
            className={`py-2 rounded-[6px] px-4 ${
              activeIndex === 3 ? "border border-[#0F172A]" : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            Rolex
          </li>
          <li
            className={`py-2 rounded-[6px] px-4 ${
              activeIndex === 4 ? "border border-[#0F172A]" : ""
            }`}
            onClick={() => handleItemClick(4)}
          >
            Richard Millie
          </li>
          <li
            className={`py-2 rounded-[6px] px-4 ${
              activeIndex === 5 ? "border border-[#0F172A]" : ""
            }`}
            onClick={() => handleItemClick(5)}
          >
            Timex
          </li>
          <li
            className={`py-2 rounded-[6px] px-4 ${
              activeIndex === 6 ? "border border-[#0F172A]" : ""
            }`}
            onClick={() => handleItemClick(6)}
          >
            Mondaine
          </li>
          <li
            className={`py-2 rounded-[6px] px-4 ${
              activeIndex === 7 ? "border border-[#0F172A]" : ""
            }`}
            onClick={() => handleItemClick(7)}
          >
            Hauer
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShoppingMenu