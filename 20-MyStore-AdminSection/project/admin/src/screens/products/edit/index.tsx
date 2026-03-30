const EditProductPageScreen = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { productId } = await params;

  return <div>Edit Product Page: {productId}</div>;
};
export default EditProductPageScreen;
