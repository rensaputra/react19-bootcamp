"use client";

import { useRouter } from "next/navigation";
import { SearchParams } from "next/dist/server/request/search-params";
import { objectToQueryString } from "@/lib/utils";
import Accordion from "@/components/ui/Accordion";
import PriceRangeSlider from "@/components/ui/PriceRangeSlider";

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

  const SortByItems = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Price: Low to High",
      value: "priceLowToHigh",
    },
    {
      label: "Price: High to Low",
      value: "priceHighToLow",
    },
  ];

  const RatingItems = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "1 Star & Up",
      value: "1",
    },
    {
      label: "2 Stars & Up",
      value: "2",
    },
    {
      label: "3 Stars & Up",
      value: "3",
    },
    {
      label: "4 Stars & Up",
      value: "4",
    },
    {
      label: "5 Stars",
      value: "5",
    },
  ];

  const AvailabilityItems = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "In Stock",
      value: "true",
    },
    {
      label: "Out of Stock",
      value: "false",
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

  const sliderMinPrice = 0;
  const sliderMaxPrice = 100;
  const minPrice = Number(searchParams.minPrice ?? sliderMinPrice);
  const maxPrice = Number(searchParams.maxPrice ?? sliderMaxPrice);

  const handlePriceRangeChange = (value: number | number[]) => {
    if (!Array.isArray(value) || value.length !== 2) {
      return;
    }

    updateSearchParams([
      { minPrice: String(value[0]) },
      { maxPrice: String(value[1]) },
    ]);
  };
  return (
    <div className="rounded-lg shadow-lg space-y-3 p-5 bg-white h-fit">
      <h1 className="text-2xl mb-8 font-semibold">Filters</h1>
      <Accordion
        title="Category"
        type="productTypeId"
        isOpened={openAccordionArr.includes("productTypeId")}
        handleAccordion={handleAccordion}
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
      </Accordion>

      <Accordion
        title="Sort By"
        type="sortBy"
        isOpened={openAccordionArr.includes("sortBy")}
        handleAccordion={handleAccordion}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          {SortByItems.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`sortBy-${item.value}`}
                  className="hidden peer"
                />
                <label
                  htmlFor={`sortBy-${item.value}`}
                  className="checkbox-button-label"
                >
                  {item.label}
                </label>
              </div>
            );
          })}
        </div>
      </Accordion>

      <Accordion
        title="Price Range"
        type="priceRange"
        isOpened={openAccordionArr.includes("priceRange")}
        handleAccordion={handleAccordion}
      >
        <div className="p-3">
          <PriceRangeSlider
            minValue={sliderMinPrice}
            maxValue={sliderMaxPrice}
            value={[minPrice, maxPrice]}
            handleChange={handlePriceRangeChange}
          />
        </div>
        <div className="flex justify-between">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </Accordion>

      <Accordion
        title="Rating"
        type="rating"
        isOpened={openAccordionArr.includes("rating")}
        handleAccordion={handleAccordion}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          {RatingItems.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`rating-${item.value}`}
                  className="hidden peer"
                />
                <label
                  htmlFor={`rating-${item.value}`}
                  className="checkbox-button-label"
                >
                  {item.label}
                </label>
              </div>
            );
          })}
        </div>
      </Accordion>

      <Accordion
        title="Availability"
        type="availability"
        isOpened={openAccordionArr.includes("availability")}
        handleAccordion={handleAccordion}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          {AvailabilityItems.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`availability-${item.value}`}
                  className="hidden peer"
                />
                <label
                  htmlFor={`availability-${item.value}`}
                  className="checkbox-button-label"
                >
                  {item.label}
                </label>
              </div>
            );
          })}
        </div>
      </Accordion>
    </div>
  );
};

export default FilterSection;
