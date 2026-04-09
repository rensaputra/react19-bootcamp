import EditProductPageScreen from "@/screens/products/edit";

const EditProductPage = async ({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return <EditProductPageScreen params={params} searchParams={searchParams} />;
};

export default EditProductPage;
