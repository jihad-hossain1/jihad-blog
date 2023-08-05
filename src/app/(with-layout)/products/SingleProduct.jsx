import Link from "next/link";
import React from "react";

const SingleProduct = ({ product }) => {
  const { id, body } = product;
  return (
    <div className="border inline-block border-cyan-200 shadow-sm px-1 rounded">
      <Link href={`/products/${id}`}>{body}</Link>
    </div>
  );
};

export default SingleProduct;
