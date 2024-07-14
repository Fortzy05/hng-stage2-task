"use client";

import React from 'react';
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';
import { useCart } from '../app/context/CartContext';

function ShoppingCartSection() {
  const { getTotalItems } = useCart();

  return (
    <div className="bg-[#fdfdfd] w-full overflow-hidden">
      <div>
        <Link
          href="/cart-page"
          className="flex justify-end md:px-[80px] px-[32px] py-[32px] gap-2 text-[16px] items-center"
        >
          <img src="/cart.svg" alt="cart" className="" />
          <h1>Cart</h1>
          <span className="absolute mb-6 mx-[56px] rounded-full border-[#FF0000] border bg-[#FF0000] text-white py-[1px] px-[6px] text-[13px]">
            {getTotalItems()}
          </span>
        </Link>
      </div>

      <div className="relative text-white pt-[2rem] flex flex-col justify-center items-center gap-6">
        <div className="absolute bg-[#0F172A]/35 top-8 md:bg-[#0F172A]/45 h-[619px] md:h-[376px] w-full" />
        <ResponsiveImage
          className="w-full md:h-[376px] h-[619px] object-cover"
          mobileSrc="/mobile-view-image.png"
          desktopSrc="/homepage.png"
          alt="Homepage Banner"
        />
        <div className="text-white flex flex-col justify-center items-center gap-6">
          <h1 className="absolute top-[50px] md:top-24 px-8 text-[68px] md:text-[64px] leading-[77.45px] text-center font-bold">
            How To Wear A Watch <br /> The Right Way
          </h1>
          <button className="absolute top-[300px] md:top-8 px-[14px] py-[9px] mt-[250px] rounded-[23.86px] text-[19.09px] bg-[#AC702F]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartSection