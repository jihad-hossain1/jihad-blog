import Link from "next/link";
import React from "react";

const SingleCategory = ({ category }) => {
  const { id, title } = category;
  return (
    <div className="container mx-auto border border-neutral-300 shadow-sm hover:shadow px-2 py-1 rounded">
      <Link href={`/products?categoryId=${id}`}>
        <h1>{title}</h1>
      </Link>
    </div>
  );
};

export default SingleCategory;
