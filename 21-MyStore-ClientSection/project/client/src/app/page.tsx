import HomeScreen from "@/screens/home";
import { SearchParams } from "next/dist/server/request/search-params";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchParamsObj = await searchParams;
  return <HomeScreen searchParams={searchParamsObj} />;
}
