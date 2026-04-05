import HomeScreen from "@/screens/home";
import { SearchParams } from "next/dist/server/request/search-params";
import { getProducts } from "@/actions/productActions";
import { getProductTypes } from "@/actions/productActions";
export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchParamsObj = await searchParams;

  const products = await getProducts();
  const productTypes = [
    { label: "All", value: "all" },
    ...(await getProductTypes()).map((type) => ({
      label: type.name,
      value: type.id,
    })),
  ];
  return (
    <HomeScreen
      searchParams={searchParamsObj}
      products={products}
      productTypes={productTypes}
    />
  );
}
