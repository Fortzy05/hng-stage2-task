import React from "react";
import ShoppingCard from "./ShoppingCard";

function ShoppingPage({ products, addToCart }) {
  return (
    <div className=" w-full md:px-20 px-3 mb-20 container mx-auto grid grid-cols-2 md:grid-cols-4 gap-7 bg-[#f4f4f479]">
      {products.map((product, index) => (
        <ShoppingCard key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ShoppingPage;
