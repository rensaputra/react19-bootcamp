import EditProductPageScreen from "@/screens/products/edit";

const EditProductPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  return <EditProductPageScreen params={params} />;
};

export default EditProductPage;
