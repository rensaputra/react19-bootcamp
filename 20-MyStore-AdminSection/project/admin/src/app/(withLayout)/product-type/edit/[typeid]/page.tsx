import EditProductTypePageScreen from "@/screens/product-type/edit";

const EditProductTypePage = async ({
  params,
  searchParams,
}: {
  params: { typeid: string };
  searchParams: { error?: string };
}) => {
  return (
    <EditProductTypePageScreen params={params} searchParams={searchParams} />
  );
};

export default EditProductTypePage;
