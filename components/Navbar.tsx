"use client";

import { useState } from "react";
import { Menu, Plus } from "lucide-react";
import { FaHome, FaBriefcase, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Image from "next/image";
import DropdownSearch from "./ui/DropdownSearch";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {mobileSearchOpen && (
        <div className="fixed top-[56px] left-0 w-full h-screen bg-white z-40 p-4 border-t border-gray-200 lg:hidden">
          <input
            type="text"
            placeholder="Search your city"
            className="w-full border border-gray-300 rounded-3xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
      )}

      <nav className="sticky top-0 z-50 bg-white px-4 py-[10px] flex items-center gap-4 border-b border-gray-200">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-1 px-2 hover:bg-gray-100 rounded-md border border-gray-300 cursor-pointer"
        >
          <Menu size={22} />
        </button>

        <Link
          href="https://www.addressguru.in"
          className="mx-auto md:mx-1 font-bold text-xl"
        >
          <Image
            src="/assets/logo.png"
            width={160}
            height={160}
            alt="logo"
            className="h-auto"
          />
        </Link>

        <div className="hidden md:block ml-8">
          <DropdownSearch />
        </div>

        <button
          onClick={() => setMobileSearchOpen((prev) => !prev)}
          className="p-1 lg:hidden cursor-pointer"
        >
          <p className="flex items-center gap-0.5 text-blue-500 text-sm">
            Dehradun
            <FaChevronDown size={14} className="mt-1"/>
          </p>
        </button>

        <div className="hidden md:flex items-center gap-2 ml-auto text-blue-500">
          <div className="flex gap-8">
            <Link href="#" className="hover:text-blue-600 flex flex-col items-center">
              <FaHome size={22} />
              <span className="text-blue-500 text-xs">To Let</span>
            </Link>
            <Link href="#" className="hover:text-blue-600 flex flex-col items-center">
              <FaBriefcase size={22} />
              <span className="text-blue-500 text-xs">Jobs</span>
            </Link>
            <Link href="#" className="hover:text-blue-600 flex flex-col items-center">
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
