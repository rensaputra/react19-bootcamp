"use client";

import { ChevronDownIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import { SearchParams } from "next/dist/server/request/search-params";
import { objectToQueryString } from "@/lib/utils";

const FilterSection = ({ searchParams }: { searchParams: SearchParams }) => {
  const CategoryItems = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Kid's Clothing",
      value: "Kid's Clothing",
    },
    {
      label: "Men's Clothing",
      value: "Men's Clothing",
    },
  ];

  const router = useRouter();
  const openAccordionArr =
    String(searchParams.openAccordion ?? "").split(",") || [];

  const updateSearchParams = (
    newParamsArray: Record<string, string | null>[],
  ) => {
    const updatedSearchParams = { ...searchParams }; // Create a copy of current search params
    newParamsArray?.forEach((param) => {
      Object.entries(param).forEach(([key, value]) => {
        if (value === null || value === "") {
          delete updatedSearchParams[key]; // Remove the key if value is null or empty string
        } else {
          updatedSearchParams[key] = value as string; // Update or add the key-value pair
        }
      });
    });
    router.push(`/?${objectToQueryString(updatedSearchParams)}`); // Update the URL with new search params
  };

  const handleAccordion = (accordionName: string) => {
    // add and remove accordion name from openAccordionArr based on if it already exists in the array or not
    const newOpenAccordion = openAccordionArr.includes(accordionName)
      ? openAccordionArr.filter((name) => name !== accordionName)
      : [...openAccordionArr, accordionName];
    updateSearchParams([{ openAccordion: newOpenAccordion.join(",") }]);
  };
  return (
    <div className="rounded-lg shadow-lg space-y-3 p-5 bg-white h-fit">
      <h1 className="text-2xl mb-8 font-semibold">Filters</h1>

      <div className="space-y-2 border-b border-b-gray-300 pb-3">
        <div
          className="accordion-button"
          onClick={() => handleAccordion("category")}
        >
          <span>Category</span>
          <ChevronDownIcon />
        </div>
        <div
          className={
            openAccordionArr.includes("category")
              ? "max-h-40 overflow-hidden transition-all duration-300"
              : "max-h-0 overflow-hidden transition-all duration-300"
          }
        >
          <div className="flex flex-wrap gap-3 pt-2">
            {CategoryItems.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`productType-${item.value}`}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={`productType-${item.value}`}
                    className="checkbox-button-label"
                  >
                    {item.label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
