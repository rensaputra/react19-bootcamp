const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = await params;
  return <div>ProductPage: {productId}</div>;
};

export default ProductPage;
