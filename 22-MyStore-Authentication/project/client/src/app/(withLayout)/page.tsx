import HomeScreen from "@/screens/home";
import { SearchParams } from "next/dist/server/request/search-params";
import { getProducts } from "@/actions/productActions";
import { getProductTypes } from "@/actions/productActions";
import { FilterOption } from "@/types/ui";
export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchParamsObj = await searchParams;

  const products = await getProducts(searchParamsObj);
  const productTypes: FilterOption[] = [
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
