import { SearchParams } from "next/dist/server/request/search-params";
import FilterSection from "./FilterSection";

const HomeScreen = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold">Products</h1>
      <div className="my-5 grid grid-cols-4 gap-5">
        <FilterSection searchParams={searchParams} />
        <div className="col-span-3">Product Section</div>
      </div>
    </div>
  );
};

export default HomeScreen;
