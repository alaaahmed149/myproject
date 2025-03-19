"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { roboto } from "../fonts";
import { redirect, usePathname } from "next/navigation";
import clsx from "clsx";
import { useAuth } from "../features/auth/hooks";

const menuItems = [
  {
    icon: "/house.svg",
    label: "Home",
    href: "/",
  },
  {
    icon: "/products.svg",
    label: "Products",
    href: "/products",
  },
  {
    icon: "/wallet-cards.svg",
    label: "Orders",
    href: "/orders",
  },
  {
    icon: "/users.svg",
    label: "Customers",
    href: "/customers",
  },
  {
    icon: "/contact.svg",
    label: "Users",
    href: "/users",
  },
];

const Menu = () => {
  const { signOut } = useAuth();
  const pathname = usePathname();
  return (
    <div className={`${roboto} flex flex-col gap-3 p-4 font-semibold`}>
      <span className="opacity-50 font-normal hidden md:hidden lg:block">
        Management
      </span>
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={clsx(
            "rounded-xl",
            pathname === item.href ? "bg-gray-100" : "bg-white"
          )}
        >
          <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100 rounded-md">
            <Image src={item.icon} alt="" width={30} height={30} />
            <span className="hidden md:hidden lg:block ">{item.label}</span>
          </div>
        </Link>
      ))}
      <span className="opacity-50 font-normal">Other</span>
      <button
        onClick={() => signOut(redirect("/login"))}
        className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100 rounded-md"
      >
        <Image src="/log-out.svg" alt="" width={30} height={30}></Image>
        <span className="hidden md:hidden lg:block">Sign Out</span>
      </button>
    </div>
  );
};

export default Menu;
