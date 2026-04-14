"use client";

import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  UsersIcon,
  SwatchIcon,
  ShoppingIcon,
  LogoutIcon,
} from "../icons";
import { User } from "@/types/user";
import { Button } from "../ui/Button";
import { logout } from "@/actions/authActions";

export default function Sidebar({ userData }: { userData: User | null }) {
  const menuItems = [
    {
      text: "Dashboard",
      url: "/",
      icon: <HomeIcon />,
    },
    {
      text: "Users",
      url: "/users",
      icon: <UsersIcon />,
    },
    {
      text: "Product Type",
      url: "/product-type",
      icon: <SwatchIcon />,
    },
    {
      text: "Products",
      url: "/products",
      icon: <ShoppingIcon />,
    },
  ];

  return (
    <div className="sidebar-main">
      <div className="p-4 m-4">
        <h1 className="text-3xl font-semibold">eStore</h1>
      </div>
      <ul className="mx-auto text-lg flex flex-col">
        {menuItems.map((item) => (
          <li key={item.text}>
            <Link href={item.url}>
              <div className="sidebar-list-item">
                <span className="mx-2">{item.icon}</span>
                {item.text}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="sidebar-usercard">
        <div className="flex flex-row m-5 mb-8 items-center">
          <Image
            height={50}
            width={50}
            src="/user.svg"
            alt="User"
            style={{ borderRadius: "50%" }}
            className="border-gray-600 rounded-full border-2"
          ></Image>
          <div className="m-auto text-lg">{userData?.userName}</div>
          <Button className="bg-transparent text-black p-0" onClick={logout}>
            <LogoutIcon className="h-7 w-7" />
          </Button>
        </div>
      </div>
    </div>
  );
}
