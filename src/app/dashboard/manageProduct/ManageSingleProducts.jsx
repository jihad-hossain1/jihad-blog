import React from "react";

const ManageSingleProducts = ({ product, openModal, handleDelete }) => {
  const { id, title, price } = product;
  return (
    <tr>
      <td className="border border-slate-400 p-2">{title}</td>
      <td className="border border-slate-400 p-2">{price}</td>
      <td className="border border-slate-400 p-2">
        <button
          className="bg-cyan-50 border border-cyan-600 px-2 rounded text-slate-950"
          onClick={() => openModal(product)}
        >
          Update
        </button>
      </td>
      <td className="border border-slate-400 p-2">
        <button
          className="bg-cyan-50 border border-cyan-600 px-2 rounded text-slate-950"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageSingleProducts;
