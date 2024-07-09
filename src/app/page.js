"use client";

import React, { useState } from "react";
import ShoppingCartSection from "@/components/ShoppingCartSection";
import ShoppingMenu from "@/components/ShoppingMenu";
import ShoppingPage from "@/components/ShoppingPage";
import { products } from "@/components/ProductData";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <main className="">
      <Header/>
      <ShoppingCartSection cart={cart} />
      <ShoppingMenu />
      <ShoppingPage products={products} addToCart={addToCart} />
      <Footer/>
    </main>
  );
}
