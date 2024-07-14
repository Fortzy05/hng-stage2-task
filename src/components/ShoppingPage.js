"use client"
  
  import React, { useEffect, useState } from 'react';
import ShoppingCard from './ShoppingCard';
import { useCart } from '../app/context/CartContext';

function ShoppingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { addToCart } = useCart();

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
         `/api/products?organization_id=${process.env.NEXT_PUBLIC_ORGANIZATION_ID}&reverse_sort=false&page=${currentPage}&size=${itemsPerPage}&Appid=${process.env.NEXT_PUBLIC_APP_ID}&Apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        );

        if (!response.ok) {
          const errorData = await response.text();
          console.error('Error response:', errorData);
          throw new Error('Failed to fetch products: ${errorData}');
        }

        const data = await response.json();
        console.log('Fetched data:', data);
        setProducts(data.items || []);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full md:px-20 px-3 mb-20 container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 bg-[#f4f4f479]">
        {products.length === 0 ? (
          <div>No products found</div>
        ) : (
          products.map((product, index) => (
            <ShoppingCard key={index} product={product} addToCart={addToCart} />
          ))
        )}
      </div>
      <div className="flex justify-between mt-5">
        <button
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ShoppingPage;