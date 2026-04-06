import ProductScreen from "@/screens/product";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = await params;
  return <ProductScreen productId={productId} />;
};

export default ProductPage;
