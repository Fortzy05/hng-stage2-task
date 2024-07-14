import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ShoppingCard({ product, addToCart }) {
  const productPrice = product.current_price?.[0]?.NGN?.[0] || 'Price not available';
  const productImage = product.photos?.[0]?.url
    ? `https://api.timbu.cloud/images/${product.photos[0]?.url}`
    : "/rolex.svg"; 

  return (
    <div className="md:w-[292px] md:h-[563px] border border-[#AC702F] py-2 px-4 rounded-lg flex flex-col justify-between">
      
        <Image
          src={productImage}
          alt={product.name}
          width={150}
          height={150}
          className="w-full bg-white"
        />
      

      <div>
        <h1 className="md:text-lg text-sm font-semibold mt-4">
          {product.name}
        </h1>

        <h2 className="md:text-base text-sm text-[#334155] mt-2 text-nowrap md:text-clip truncate">
          {product.unique_id}
        </h2>

        <p className="md:text-md text-sm text-[#94A3B8] mt-2 break-all md:text-nowrap truncate md:text-clip">
          {product.description}
        </p>

        <h4 className="md:text-2xl text-xl font-semibold text-[#0F172A]">
          {productPrice ? `N${productPrice}` : 'Price not available'}
        </h4>

        <div className="flex items-center gap-2">
          <Image
            src={product.rating || '/rating.svg'}
            alt="rating"
            width={112}
            height={20}
            className="md:w-[112px] w-[80px] h-5"
          />
          <p className="md:text-base text-xs text-[#334155]">
            {product.available_quantity}
          </p>
        </div>

        <h5 className="md:text-sm text-xs text-gray-500 mt-5">
          <span className="font-bold text-[#AC702F]">{product.available_quantity}</span> left
          in stock
        </h5>
      </div>

      <div className="md:flex grid mt-2 md:gap-[8px] gap-2">
        <button
          className="border md:w-full text-center md:text-base text-xs rounded-[20px] md:py-1 py-1.5 md:px-2 bg-[#AC702F] border-none text-white"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <Link
          href="/cart-page"
          className="border md:w-full text-center md:text-base text-xs rounded-[20px] md:py-1 py-1.5 md:px-2 border-[#AC702F]"
        >
          Buy now
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCard;