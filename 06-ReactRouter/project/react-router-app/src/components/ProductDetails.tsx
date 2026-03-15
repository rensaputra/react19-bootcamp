import { useParams } from "react-router";

const ProductDetails = () => {
    const params = useParams();
    const { id } = params;
    return (
        <div>Product details component {id}</div>
    )
}

export default ProductDetails;