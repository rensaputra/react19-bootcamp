import ProductScreen from "@/screens/product";
import { getProductById } from "@/actions/productActions";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = await params;
  const product = await getProductById(Number(productId));

  return <ProductScreen productId={productId} product={product} />;
};

export default ProductPage;
