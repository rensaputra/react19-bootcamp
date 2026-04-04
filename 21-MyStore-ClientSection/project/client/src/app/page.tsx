import HomeScreen from "@/screens/home";
import { SearchParams } from "next/dist/server/request/search-params";
import { getProducts } from "@/actions/productActions";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchParamsObj = await searchParams;

  const products = await getProducts();
  console.log("Fetched products:", products);

  return <HomeScreen searchParams={searchParamsObj} products={products} />;
}
