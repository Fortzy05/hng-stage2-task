"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Casio CA-500WE-1AEF", price: 160002, quantity: 1 },
    { id: 2, name: "Mondaine Classic 40mm", price: 160002, quantity: 1 },
  ]);

  
  const handleIncrement = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity++;
    setItems(updatedItems);
  };


  const handleDecrement = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = Math.max(
      updatedItems[index].quantity - 1,
      1
    );
    setItems(updatedItems);
  };


  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  
  const removeFromCart = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="w-full md:px-[5rem] bg-[#f4f4f479] overflow-hidden">
      <div className="flex justify-between md:px-0 px-[2rem] py-[2rem]">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            className="w-[100px] h-10"
            // layout="fill"
            
            width={100}
            height={40}
          />
        </Link>
        <div className="flex items-center gap-1">
          <Image src="/cart.svg" alt="cart" width={30} height={30} />
          <h1 className="text-[#334155]">Cart</h1>
        </div>
      </div>

      <div className="md:py-[5rem] md:px-0 w-full md:flex grid md:gap-5 justify-center">
        <div className="w-full justify-center md:border border-none px-[2rem] border-white bg-white md:rounded-lg">
          <h1 className="border-b w-full py-[2rem] border-[#94A3B8] md:text-2xl text-base font-semibold">
            Item Summary
          </h1>

          {items.map((item, index) => (
            <div
              key={item.id}
              className="py-[2rem] flex gap-[2rem] border-b border-[#94A3B8]"
            >
              <Image
                src="/casio.svg"
                alt="casio watch"
                width={80}
                height={80}
                className="border border-[#AC702F] rounded-md bg-transparent"
              />
              <div className="flex flex-col gap-5">
                <h1 className="md:text-2xl text-sm font-semibold">
                  {item.name}
                </h1>
                <h2 className="md:text-2xl text-sm font-semibold">
                  N{item.price}
                </h2>
                <div className="md:text-base text-xs">
                  <button className="border border-[#AC702F] px-1 rounded-2xl flex items-center">
                    <span
                      className="mr-2 cursor-pointer"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </span>
                    {item.quantity}
                    <span
                      className="ml-1 cursor-pointer"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </span>
                  </button>
                </div>
                <div>
                  <p className="text-[#12DF00] md:text-base text-xs mb-5">
                    In Stock
                  </p>
                  <button
                    className="text-red-500 md:text-base text-xs "
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:border border-none md:w-1/3 px-[2rem] border-white bg-white md:rounded-lg w-full">
          <div className="py-[2rem]">
            <h1 className="w-full md:text-2xl text-base font-semibold">
              Delivery
            </h1>
            <p className="text-[#0F172A] md:text-base text-xs mt-2">
              July 13, 2024, 3:00pm - 5:00pm
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <div className="md:w-[20rem] w-[14rem]">
              <input
                type="text"
                placeholder="Discount code or gift card"
                className="w-full border border-[#AC702F] input-place md:px-2 md:py-1 px-3 py-2 rounded-xl outline-none md:text-base text-xs"
              />
            </div>
            <button className="border-[#AC702F] border rounded-xl md:py-1 md:px-6 py-2 px-6 bg-[#AC702F] text-white md:text-base text-xs">
              Apply
            </button>
          </div>

          <div className="mt-[4rem] flex justify-between text-[#0F172A] md:text-base text-xs">
            <h2>Subtotal</h2>
            <span>N{calculateTotal()}</span>
          </div>
          <div className="mt-[2rem] flex justify-between text-[#0F172A] md:text-base text-xs">
            <h2>Discount</h2>
            <span>N00.00</span>
          </div>
          <div className="flex justify-between text-[#0F172A] border-b border-[#94A3B8] py-[2rem] md:text-base text-xs">
            <h2>Shipping</h2>
            <span>N00.00</span>
          </div>
          <div className="mt-[2rem] flex justify-between text-[#0F172A] md:text-base text-xs">
            <h2>Total</h2>
            <span>N{calculateTotal()}</span>
          </div>
          <Link href="/checkout">
            <button className="w-full my-[2rem] border-[#AC702F] bg-[#AC702F] text-white md:py-2 py-3 rounded-xl md:text-base text-xs">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
