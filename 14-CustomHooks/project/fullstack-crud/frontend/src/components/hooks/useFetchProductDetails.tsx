import { useState, useEffect } from "react";
import { Product } from "../../types";

const useFetchProductData = (
  id: string | undefined,
  callBackfn: (data: Product) => void = () => {},
): {
  data: Product;
  setData: React.Dispatch<React.SetStateAction<Product>>;
  loading: boolean;
  error: string | null;
} => {
  const [data, setData] = useState<Product>({
    name: "",
    price: 0,
    image: "",
    description: "",
  } as Product);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${id}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Failed to fetch product data");
          }
        })
        .then((data) => {
          if (data.length > 0) {
            data = data[0]; // Assuming the API returns an array of products, we take the first one
          }

          callBackfn(data);
        })
        .catch((error) => {
          console.error(error);
          setError("An error occurred while fetching the product data.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, callBackfn]);

  return { data, setData, loading, error };
};

export default useFetchProductData;
