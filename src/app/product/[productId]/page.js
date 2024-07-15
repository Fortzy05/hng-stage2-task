"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCart } from '../../context/CartContext';

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://timbu-get-single-product.reavdev.workers.dev/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen">Error: {error}</div>;
  }

  if (!product) {
    return <div className="flex items-center justify-center min-h-screen">No product found</div>;
  }

  const imageUrl =
    `https://api.timbu.cloud/images/${product.photos[0]?.url}` ||
    "/casio.svg"; 

  const price = product.current_price?.[0]?.NGN?.[0] ?? 'Price not available';
  const description = product.description || 'No description available';
 

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <h2 className="text-xl text-gray-700">{product.unique_id}</h2>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            N{product.current_price[0]?.NGN[0]}
          </p>
          <p className="mb-4 text-gray-600">
            <Image
              src={product.rating || "/rating.svg"}
              alt="rating"
              width={112}
              height={20}
              className="md:w-[112px] w-[80px] h-5"
            />
            Available Quantity: {product.available_quantity}
          </p>
          <p className="mb-4 text-yellow-500">Ratings: {ratings}</p>
          <div className="flex items-center mb-4">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full mr-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <Link href="/">
              <a className="text-blue-500 underline">Back to Shop</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;