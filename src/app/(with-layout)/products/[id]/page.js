import getSingleProducts from "@/utils/getSingleProducts";

const SingleProduct = async ({ params }) => {
    const product = await getSingleProducts(params.id)
    return (
        <div>
            {product?.body}
        </div>
    );
};

export default SingleProduct;