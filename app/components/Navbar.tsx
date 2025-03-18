"use client";
import React from "react";
// import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import { useSession } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);

  const name = session?.user?.name;
  const avatar = session?.user?.image;
  return (
    <div className="w-full h-[80px] flex justify-end items-center px-4">
      <div className="pl-7 pr-2 py-2 flex items-center gap-3 bg-gray-100 rounded-3xl my-2">
        <div className="flex flex-col items-end">
          <span className="font-semibold text-sm">{name}</span>
          <span className="text-xs opacity-30 font-bold">Admin</span>
        </div>
        <Image className="rounded-full" src={avatar || "/avatar.svg"} alt="" width={40} height={40} />
      </div>
    </div>
  );
};

export default Navbar;
