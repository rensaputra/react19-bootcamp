const Product = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width={120} height={120} />
      <span>{product.id}</span>
      <span>{product.name}</span>
      <span>${product.price}</span>
    </div>
  );
};

const ProductDetails = () => {
  return <h1>Product Details</h1>;
};

const ProductName = "Apple";

export default Product;
export { ProductDetails, ProductName };
