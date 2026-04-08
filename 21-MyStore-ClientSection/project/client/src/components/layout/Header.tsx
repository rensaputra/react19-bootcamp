"use client";

import { SearchIcon, UserIcon, CartIcon } from "@/components/icons";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Input from "@/components/ui/Input";
import { useSearchParams } from "next/navigation";
import { objectToQueryString } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useProductContext } from "@/store/ProductContext";

const Header = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const existingSearchParams: Record<string, string | string[] | undefined> = {
    productTypeId: searchParams.get("productTypeId") || undefined,
    sortBy: searchParams.get("sortBy") || undefined,
    minPrice: searchParams.get("minPrice") || "0",
    maxPrice: searchParams.get("maxPrice") || "100",
    rating: searchParams.get("rating") || undefined,
    inStock: searchParams.get("inStock") || undefined,
    openAccordion: searchParams.get("openAccordion") || undefined,
  };

  const router = useRouter();

  const updateSearchParams = (
    newParamsArray: Record<string, string | null>[],
  ) => {
    const updatedSearchParams: Record<string, string | string[] | undefined> = {
      ...existingSearchParams,
      search: search,
    };
    newParamsArray?.forEach((param) => {
      Object.entries(param).forEach(([key, value]) => {
        if (value === null || value === "" || value === "all") {
          delete updatedSearchParams[key];
        } else {
          updatedSearchParams[key] = value as string;
        }
      });
    });
    router.push(`/?${objectToQueryString(updatedSearchParams)}`);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateSearchParams([{ [name]: value }]);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const { cartItems } = useProductContext();

  return (
    <div className="navbar">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-3xl font-semibold">MyStore</h1>
          </Link>
          <div className="relative w-full max-w-lg ">
            <SearchIcon className="absolute left-2 top-2 w-7 h-7" />
            <Input
              placeholder="Search Product..."
              className="pl-10!"
              value={search}
              onChange={handleFilterChange}
              name="search"
            />
          </div>
          <div className="relative" ref={dropdownRef}>
            <div className="flex gap-3">
              <Link href="/cart">
                <div className="relative">
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white flex justify-center items-center text-xs font-semibold">
                    {cartItems.length}
                  </div>
                  <CartIcon className="w-7 h-7" />
                </div>
              </Link>
              <button className="icon-button" onClick={toggleDropdown}>
                <UserIcon className="w-7 h-7" />
              </button>
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link
                  href="/"
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 hover:rounded-md"
                >
                  My Wishlist
                </Link>
                <button className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 hover:rounded-md text-left w-full">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
