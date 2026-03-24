import Link from "next/link";

const ProductPage = async ({ params }) => {
  const { slug } = await params;
  console.log("ProductPage params:", slug);

  return (
    <div>
      <h1>Product: {slug}</h1>
      <Link href="/products">Go Back to Products</Link>
    </div>
  );
};

export default ProductPage;
