import { SearchParams } from "next/dist/server/request/search-params";
import FilterSection from "./FilterSection";
import ProductCard from "@/components/ui/ProductCard";

const HomeScreen = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold">Products</h1>
      <div className="my-5 grid grid-cols-4 gap-5">
        <FilterSection searchParams={searchParams} />
        <div className="col-span-3 grid grid-cols-2 gap-5">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
