import React from "react";

const ManageProducts = () => {
  return (
    <div>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border border-slate-400 ">Title</th>
            <th className="border border-slate-400 ">Price</th>
            <th className="border border-slate-400 ">Update</th>
            <th className="border border-slate-400 ">Delete</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ManageProducts;
