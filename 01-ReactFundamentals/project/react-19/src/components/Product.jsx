const Product = () => {
  const product = {
    id: "0001",
    name: "Apple",
    price: 12,
    image: "/apple.png",
  };
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width={120} />
      <span>{product.id}</span>
      <span>{product.name}</span>
      <span>${product.price}</span>
    </div>
  );
};

export default Product;
