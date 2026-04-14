import AddProductTypeScreen from "@/screens/product-type/add";

const AddProductTypePage = ({
  searchParams,
}: {
  searchParams: { error: string };
}) => {
  return <AddProductTypeScreen searchParams={searchParams} />;
};

export default AddProductTypePage;
