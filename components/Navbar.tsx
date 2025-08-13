"use client";

import { useState } from "react";
import { Menu, Plus } from "lucide-react";
import { FaHome, FaBriefcase, FaShoppingCart } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Image from "next/image";
import DropdownSearch from "./ui/DropdownSearch";

export default function StickyNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <nav className="sticky top-0 z-30 bg-white px-4 py-[9px] flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-1 px-2 hover:bg-gray-100 rounded-md border border-gray-300"
        >
          <Menu size={22} />
        </button>

        <Link href={'https://www.addressguru.in'} className="font-bold text-xl mr-10">
          <Image src={'/assets/logo.png'} width={160} height={160} alt="logo"/>
        </Link>

        <DropdownSearch />

        <div className="flex items-center gap-2 ml-auto text-blue-500">
          <div className="flex gap-8">
            <Link href={"#"} className="hover:text-blue-600 flex flex-col items-center">
              <FaHome size={22} />
              <span className="text-blue-500 text-xs">To Let</span>
            </Link>

            <Link href={"#"} className="hover:text-blue-600 flex flex-col items-center">
              <FaBriefcase size={22} />
              <span className="text-blue-500 text-xs">Jobs</span>
            </Link>

            <Link href={"#"} className="hover:text-blue-600 flex flex-col items-center">
              <FaShoppingCart size={22} />
              <span className="text-blue-500 text-xs">Marketplace</span>
            </Link>
          </div>

          <div className="h-10 w-px bg-gray-400 mx-2"></div>

          <button className="flex items-center gap-1 bg-orange-500 text-white px-3 py-[6px] rounded-md hover:bg-yellow-400 hover:text-black cursor-pointer">
            Post Free Ad <Plus size={16} />
          </button>

          <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-[6px] rounded-md hover:bg-blue-700 cursor-pointer">
            <FaArrowRightToBracket size={16} />
            Login
          </button>
        </div>
      </nav>
    </>
  );
}
