"use client";

import { useEffect } from "react";

const ProductsError = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="text-center">
      <h1>{error?.message || "Something went wrong ...."}</h1>
      <button
        onClick={() => reset()}
        className="hover:font-semibold px-1 shadow-sm hover:shadow rounded border border-neutral-300"
      >
        Reset
      </button>
    </div>
  );
};

export default ProductsError;
