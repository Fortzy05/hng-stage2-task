"use client"
import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);

  const toggleBrandsDropdown = () => {
    setShowBrandsDropdown(!showBrandsDropdown);
  };

  const toggleCategoriesDropdown = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown);
  };

  return (
    <header className="h-[128px] cursor-pointer bg-[#f4f4f479] flex justify-between py-10 px-20 items-center w-full">
      <section className="flex items-center h-[80px]">
        <div className="pl-2 pr-20 flex items-center font-bold">
          <Link href="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>
        </div>
        <ul className="flex gap-[60px]">
          <li
            className="flex gap-1 items-center relative cursor-pointer"
            onClick={toggleBrandsDropdown}
          >
            <span className="hover:text-[#AC702F]">Brands</span>
            <img src="/down_arrow.svg" alt="arrow down" />
            <span
              className={`absolute w-[900px] h-[480px] gap-[134px] flex top-full left-0 right-0 bg-white shadow-md rounded-md py-2 px-10 mt-1 z-10 ${
                showBrandsDropdown ? "block" : "hidden"
              }`}
            >
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Luxury Brands</h3>
                <ul className="list-disc">
                  <li>Montblanc</li>
                  <li>Baume & Mercier</li>
                  <li>Oris</li>
                  <li>Rado</li>
                  <li>Fortis</li>
                  <li>Raymond Weil</li>
                  <li>Roamer</li>
                  <li>Richard Millie</li>
                  <li>Hauer</li>
                  <li>Seiko</li>
                  <li>Tissot</li>
                  <li>Maurice Lacroix</li>
                  <li>Lorus</li>
                  <li>Timex</li>
                  <li>Certina</li>
                  <li>Rolex</li>
                  <li>Balmain</li>
                </ul>
              </div>
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Designer Watch Brands</h3>
                <ul className="list-disc">
                  <li>Vivienne Westwood</li>
                  <li>Versace</li>
                  <li>Casio</li>
                  <li>Diesel</li>
                  <li>Emporio Armani</li>
                  <li>Ligure</li>
                  <li>Fossil</li>
                  <li>Guess</li>
                  <li>Maserati</li>
                  <li>Rotary</li>
                  <li>Sekonda</li>
                  <li>Swatch</li>
                  <li>Mondaine</li>
                  <li>Icewatch</li>
                  <li>Calypso</li>
                  <li>Garonne</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Luxury Jewellery</h3>
                <ul className="list-disc">
                  <li>Ambush</li>
                  <li>Balenciaga</li>
                  <li>Common Lines</li>
                  <li>Dsquared2</li>
                  <li>Juicy Couture</li>
                  <li>MICHAEL Michael Kors</li>
                  <li>Missoma</li>
                  <li>Olivia Burton</li>
                  <li>Radley</li>
                  <li>Swarovski</li>
                  <li>Ted Baker</li>
                  <li>Tory Burch</li>
                </ul>
              </div>
            </span>
          </li>
          <li className="hover:text-[#AC702F]">Inspirations</li>
          <li
            className="flex gap-1 items-center relative cursor-pointer"
            onClick={toggleCategoriesDropdown}
          >
            <span className="hover:text-[#AC702F]">Categories</span>
            <img src="/down_arrow.svg" alt="arrow down" />
            <span
              className={`absolute w-[300px] h-[100px] gap-[134px]  flex top-full left-0 right-0 bg-white shadow-md rounded-md py-2 px-10 mt-1 z-10 ${
                showCategoriesDropdown ? "block" : "hidden"
              }`}
            >
              <div className="mb-3">
                
                <ul className="flex flex-col justify-center items-center space-y-2">
                  <li>Luxury Brands</li>
                  <li>Designer Watch Brands</li>
                  <li>Luxury Jewellery</li>
                </ul>
              </div>
            </span>
          </li>
          <li className="hover:text-[#AC702F]">Sale</li>
        </ul>
      </section>

      <div className="md:border md:w-[8rem] rounded-lg py-1 px-4 border-[#E2E8F0] bg-[#FFFFFF] flex items-center gap-3">
        <img src="/search.svg" alt="search icon" className="md:w-5 w-8 " />
        <input
          className="w-full outline-none md:block hidden "
          type="text"
          placeholder="search"
        />
      </div>
    </header>
  );
}

export default Header;
