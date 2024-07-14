import { NextResponse } from "next/server";

const products = [
  // Your product list here
  {
    id: "1",
    name: "Casio Watch",
    description: "A reliable Casio watch.",
    photos: [
      {
        url: "fortune-stores/product_casio_fe6d82_2.jpg",
      },
    ],
    current_price: [
      {
        NGN: [160002.0],
      },
    ],
    available_quantity: 17,
  },
  {
    id: "2",
    name: "Rolex Watch",
    description: "A luxurious Rolex watch.",
    photos: [
      {
        url: "fortune-stores/product_rolex_c947ac_3.jpg",
      },
    ],
    current_price: [
      {
        NGN: [3018990.0],
      },
    ],
    available_quantity: 6,
  },
];

export async function GET(req, { params }) {
  const { productId } = params;
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return new Response(JSON.stringify({ message: "Product not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(product), {
    status: 200,
  });
}
