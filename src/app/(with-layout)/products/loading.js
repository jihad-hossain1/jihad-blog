"use client";
import React from "react";
import { Dna } from "react-loader-spinner";

const ProductsLoading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default ProductsLoading;
