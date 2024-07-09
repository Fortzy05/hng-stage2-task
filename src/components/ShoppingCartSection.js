"use client";

import React from "react";
import Link from "next/link";

function ShoppingCartSection({ cart }) {
  return (
    <div className=" bg-[#fdfdfd] w-full overflow-hidden">
      <Link
        href="/cart-page"
        className="relative flex justify-end md:px-[80px] px-[32px] py-[32px] gap-2 text-[16px] items-center"
      >
        <img src="/cart.svg" alt="cart" className="" />
        <h1>Cart</h1>
        <span className="absolute mb-6 mx-[56px] rounded-full border-[#FF0000] border bg-[#FF0000] text-white py-[1px] px-[6px] text-[13px]">
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
        <div className=" text-white py-8  flex flex-col justify-center items-center gap-6">
          <h1 className="absolute top-[60px] md:top-24 px-8 tracking-wider text-[40px] md:text-[64px] text-center font-bold">
            How To Wear A Watch <br /> The Right Way
          </h1>
          <button className="absolute top-[80px] md:top-20 px-4 py-2 mt-[250px] rounded-[23.86px] text-[19.09px] bg-[#AC702F]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartSection;
