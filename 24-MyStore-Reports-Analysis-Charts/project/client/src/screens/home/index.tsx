import { SearchParams } from "next/dist/server/request/search-params";
import FilterSection from "./FilterSection";
import ProductCard from "@/components/ui/ProductCard";
import { FilterOption, Product } from "@/types";

const HomeScreen = async ({
  searchParams,
  products,
  productTypes,
}: {
  searchParams: SearchParams;
  products: Product[];
  productTypes: FilterOption[];
}) => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold">Products</h1>
      <div className="my-5 grid grid-cols-4 gap-5">
        <FilterSection
          searchParams={searchParams}
          productTypes={productTypes}
        />
        <div className="col-span-3 grid grid-cols-2 gap-5">
          {products?.length > 0 ? (
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          ) : (
            <div className="flex justify-center items-center col-span-2">
              <span className="text-xl font-medium">No products found.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
