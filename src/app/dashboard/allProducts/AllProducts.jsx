"use client";
import db from "@/db.json";
import { useRef, useState } from "react";
import ManageSingleProducts from "../manageProduct/ManageSingleProducts";
import Modal from "../manageProduct/Modal";
import useProducts from "@/hooks/useProducts";
import { ThreeDots } from "react-loader-spinner";

const AllProducts = () => {
  const { products, isLoading, isValidating, error, mutate } = useProducts();

  const modalRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);

  const openModal = (product) => {
    setUpdateData(product);
    modalRef.current.showModal();
  };
  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const data = {
      title,
      price,
    };
    if (title && price) {
      try {
        const res = await fetch(
          `http://localhost:5000/products/${updateData?.id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const result = await res.json();
        console.log(result);
        mutate();
        form.reset();
        closeModal();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      console.log(result);
      mutate();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      {isLoading && (
        <div className="flex justify-center items-center">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#19D9FF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
      {!isLoading && (
        <table
          className={`border-collapse w-full ${
            isValidating ? "opacity-30" : "opacity-100"
          }`}
        >
          <thead>
            <tr>
              <th className="border border-slate-400 ">Title</th>
              <th className="border border-slate-400 ">Price</th>
              <th className="border border-slate-400 ">Update</th>
              <th className="border border-slate-400 ">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ManageSingleProducts
                key={product.id}
                product={product}
                openModal={openModal}
                handleDelete={handleDelete}
              ></ManageSingleProducts>
            ))}
          </tbody>
        </table>
      )}
      <Modal
        ref={modalRef}
        closeModal={closeModal}
        updateData={updateData}
        handleSubmit={handleSubmit}
      ></Modal>
    </div>
  );
};

export default AllProducts;
