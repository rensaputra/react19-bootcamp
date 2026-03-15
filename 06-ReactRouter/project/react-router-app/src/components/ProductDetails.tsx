import { useOutletContext, useParams } from "react-router";
import { Product } from "../types";
const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const productObj: Product[] = useOutletContext();
  const selectedProduct = productObj.find((product) => product.id === id);
  return (
    <div>
      Product details component {id} <br /> {JSON.stringify(selectedProduct)}
    </div>
  );
};

export default ProductDetails;
