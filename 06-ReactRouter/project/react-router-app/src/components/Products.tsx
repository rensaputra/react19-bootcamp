import { Link, Outlet } from "react-router";

const Products = () => {
  const products = [
    {
      id: "1",
      image: "/apple.png",
      name: "Apple",
      price: 20,
      description:
        "Presenting the best of Apples. Crisp and sweet, it’s perfect for a healthy snack. Packed with fiber and antioxidants, it's a great addition to your daily diet.",
    },
    {
      id: "2",
      image: "/banana.png",
      name: "Banana",
      price: 30,
      description:
        "Enrich your diet with Bananas. Rich in potassium, they help maintain healthy blood pressure. A quick and easy snack, perfect for on-the-go energy.",
    },
    {
      id: "3",
      image: "/orange.png",
      name: "Orange",
      price: 35,
      description:
        "Oranges, known for their tangy sweetness, they’re a great way to boost your immune system. Enjoy them as a refreshing snack or in juices.",
    },
    {
      id: "4",
      image: "/pineapple.png",
      name: "Pineapple",
      price: 50,
      description:
        "Tasty and Nutritional Pineapples. A tropical delight, full of vitamin C and manganese. The sweet, tart flavor makes it perfect for smoothies, desserts, or just a refreshing bite.",
    },
  ];
  return (
    <>
      <div className="m-6 flex gap-4">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} state={product}>
            <div
              key={product.id}
              className="border border-gray-50 rounded-md shadow-md w-fit"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-[240px] w-[240px] object-contain"
              />
              <div className="bg-gray-300 text-xl text-center font-semibold p-2 rounded-b-md">
                <span>{product.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Products;
