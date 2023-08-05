import gettAllProducts from "@/utils/gettAllProducts";
import SingleProduct from "./SingleProduct";


const ProductsPage = async ({ searchParams }) => {
    const products = await gettAllProducts(searchParams.categoryId)
    return (
        <div className="container mx-auto">
            <div className="flex gap-3 py-6 ">
                {
                    products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;