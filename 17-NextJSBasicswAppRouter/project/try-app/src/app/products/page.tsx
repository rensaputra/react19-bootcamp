import Link from "next/link";

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <Link href="/products/Apple">Apple</Link>{" "}
      <Link href="/products/Orange">Orange</Link>
    </div>
  );
};

export default Products;
