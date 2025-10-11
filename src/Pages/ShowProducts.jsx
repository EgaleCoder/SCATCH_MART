import React from "react";
import FillterComponent from "../Components/Home/ShowProduct/FillterComponent";
import ProductCard from "../Components/Home/ShowProduct/ProductCard";
import { useFilter } from "../context/fillterContext";
import { useProductsContext } from "../context/productContext";

function ShowProducts() {
  const { filterProducts } = useFilter();
  const { isError, isLoading } = useProductsContext();

  if (isLoading) {
    return (
      <div className="allProduct">
        <span className="flex items-center mt-6 mb-6 md:mt-4 mb-4 lg:mt-6 mb-6 md:text-3xl lg:text-4xl font-semibold">
          <span className="shrink-0 pe-4 text-purple-900">Products for you</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-700"></span>
        </span>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-blue-500 text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="allProduct">
        <span className="flex items-center mt-6 mb-6 md:mt-4 mb-4 lg:mt-6 mb-6 md:text-3xl lg:text-4xl font-semibold">
          <span className="shrink-0 pe-4 text-purple-900">Products for you</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-700"></span>
        </span>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-red-500 text-lg">Unable to load products. Please check if the backend server is running on localhost:5000.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="allProduct">
      <span className="flex items-center mt-6 mb-6 md:mt-4 mb-4 lg:mt-6 mb-6 md:text-3xl lg:text-4xl font-semibold">
        <span className="shrink-0 pe-4 text-purple-900">Products for you</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-700"></span>
      </span>
      <div className="flex flex-col md:flex-row gap-2 items-center md:items-start w-full min-h-screen">
        {/* Fillter Div */}
        <div className="w-full md:w-[20%] min-h-auto md:min-h-full shrink-0 flex items-center justify-center p-4">
          <FillterComponent />
        </div>

        {/* Product Card Div */}
        <div className="w-full md:w-[80%] h-auto flex items-center justify-center p-4">
          <ProductCard products={filterProducts} />
        </div>
      </div>
    </div>
  );
}

export default ShowProducts;
