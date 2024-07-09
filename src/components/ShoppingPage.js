import React from "react";
import Image from "next/image";
import Link from "next/link";

function ShoppingPage({ products, addToCart }) {
  return (
    <div className="px-20 mb-20 w-full grid md:grid-cols-4 grid-cols-2 gap-5 bg-[#f4f4f479]">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[292px] h-[538px] border border-[#AC702F] py-2 px-4 rounded-lg flex flex-col justify-between"
        >
          <div className="flex items-center justify-center bg-white">
            <Image
              src={product.Image}
              alt={product.model}
              width={150}
              height={150}
              className="w-full bg-white"
            />
          </div>

          <div>
            <h1 className="md:text-lg text-sm font-semibold mt-4">
              {product.type}
            </h1>

            <h2 className="md:text-base text-sm text-[#334155] mt-2 text-nowrap md:text-clip truncate">
              {product.model}
            </h2>

            <p className="md:text-md text-sm text-[#94A3B8] mt-2 break-all md:text-nowrap truncate md:text-clip">
              {product.description}
            </p>

            <h4 className="md:text-2xl text-xl font-semibold text-[#0F172A]">
              {product.price}
            </h4>

            <div className="flex items-center gap-2">
              <Image
                src={product.rating}
                alt="rating"
                width={112}
                height={20}
                className="md:w-[7rem] w-[5rem] h-5"
              />
              <p className="md:text-base text-xs text-[#334155]">
                {product.Number}
              </p>
            </div>

            <h5 className="md:text-sm text-xs text-gray-500 mt-5">
              <span className="font-bold text-[#AC702F]">{product.stock}</span>{" "}
              left in stock
            </h5>
          </div>

          <div className="md:flex grid mt-2 md:gap-[.5rem] gap-2">
            <button
              className="border w-full text-center md:text-base text-xs rounded-[20px] md:py-1 py-1.5 md:px-2 bg-[#AC702F] border-none text-white"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <Link
              href="/cart-page"
              className="border w-full text-center md:text-base text-xs rounded-[20px] md:py-1 py-1.5 md:px-2 border-[#AC702F]"
            >
              Buy now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingPage;
