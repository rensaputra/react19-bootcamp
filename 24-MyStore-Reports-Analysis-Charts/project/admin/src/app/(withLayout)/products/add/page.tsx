import ProductAddScreen from "@/screens/products/add";

const Page = async ({ searchParams }: { searchParams: { error?: string } }) => {
  return <ProductAddScreen searchParams={searchParams} />;
};

export default Page;
