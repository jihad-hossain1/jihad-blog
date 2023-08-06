import gettAllProducts from "@/utils/gettAllProducts";
import ManageProducts from "./ManageProduct";

const ManageProduct = async () => {
  const products = await gettAllProducts();
  return (
    <div className="w-full mt-16">
      <h4 className="mb-5 text-2xl font-semibold">Manage All Products</h4>
      <ManageProducts products={products}></ManageProducts>
    </div>
  );
};

export default ManageProduct;
