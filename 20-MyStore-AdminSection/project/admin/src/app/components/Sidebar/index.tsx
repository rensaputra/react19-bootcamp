import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const menuItems = [
    {
      text: "Dashboard",
      url: "/dashboard",
    },
    {
      text: "Users",
      url: "/users",
    },
    {
      text: "Product Type",
      url: "/product-type",
    },
    {
      text: "Products",
      url: "/products",
    },
  ];

  return (
    <div>
      <div>
        <h1>eStore</h1>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.text}>
            <Link href={item.url}>
              <div>{item.text}</div>
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <div>
          <Image
            height={50}
            width={50}
            src="./user.svg"
            alt="User"
            style={{ borderRadius: "50%" }}
          ></Image>
        </div>
        <div> Rendy Saputra </div>
      </div>
    </div>
  );
}
