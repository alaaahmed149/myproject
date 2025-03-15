import Link from "next/link";
import React from "react";
import { ShoppingBag } from "lucide-react";
import { roboto } from "../fonts";
import Menu from "./Menu";
const Sidemenu = () => {
  return (
    <div className="w-[20%] xl:w-[20%] lg:w-[18%] md:w-[10%]">
      {/* Logo bar */}
      <Link href="/">
        <div className="flex w-full p-6 items-center gap-3 drop-shadow-xl">
          <ShoppingBag
            size={50}
            className="block sm:justify-self-center md:justify-self-center"
          />
          <h1
            className={`${roboto.className} font-bold text-3xl hidden md:hidden lg:block`}
          >
            OrdersM.
          </h1>
        </div>
      </Link>
      <hr className="w-[85%] justify-self-center text-gray-300" />
      <Menu />
    </div>
  );
};

export default Sidemenu;
