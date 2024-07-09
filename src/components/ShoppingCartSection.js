"use client";

import React from "react";
import Link from "next/link";

function ShoppingCartSection({ cart }) {
  return (
    <div className="w-full bg-[#fdfdfd] overflow-hidden">
      <Link
        href="/cart-page"
        className="flex justify-end md:px-[5rem] px-[2rem] py-[2rem] gap-2 text-[16px] items-center relative"
      >
        <img src="/cart.svg" alt="this is an image of a cart" className="" />
        <h1>Cart</h1>
        <span className="absolute mb-6 mx-[3.5rem] rounded-full border-[#FF0000] border bg-[#FF0000] text-white py-0.7 px-1.5 text-[13px]">
          {cart.length}
        </span>
      </Link>

      <div className="relative text-white py-[2rem] flex flex-col justify-center items-center gap-6">
        <div className="absolute top-8 bg-[#0F172A]/45 h-[376px] w-full" />
        <img
          className="w-full h-[376px] object-cover"
          src="/homepage.png"
          alt=""
        />
        <h1 className="absolute text-[64px] text-center font-bold">
          How To Wear A Watch <br /> The Right Way
        </h1>
        <button className="absolute px-4 py-2 mt-[250px] rounded-[23.86px] text-[19.09px] bg-[#AC702F]">
          Read more
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartSection;
