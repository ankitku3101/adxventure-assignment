"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaInfo,
  FaGavel,
  FaCreditCard,
} from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { useEffect } from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999]"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-96 max-w-full h-full bg-white shadow-lg z-[10000] transform transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <Link href="https://www.addressguru.in">
            <Image src="/assets/logo.png" width={190} height={60} alt="logo" />
          </Link>
          <IoMdClose
            className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
            size={28}
            onClick={onClose}
          />
        </div>

        <div className="container px-6">
          <div className="flex items-center gap-3 p-4">
            <Image
              src="/assets/DummyProfile.png"
              width={60}
              height={60}
              alt="profile"
              className="rounded-full"
            />
            <div>
              <p className="text-gray-600">Hi,</p>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm cursor-pointer">
                Login to your account
              </button>
            </div>
          </div>

          <ul className="p-4 space-y-4 text-gray-700">
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <FaInfo /> About Us
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <FaPhone /> Contact Us
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <FaGavel /> Posting Rules
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <FaCreditCard /> Our Plans
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <FaCogs /> Infringement Policy
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <IoSettingsSharp /> Privacy Policy
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <IoSettingsSharp /> Terms and Conditions
            </li>
          </ul>

          <div className="p-4 mt-auto">
            <p className="mb-2 text-2xl">Follow us on:</p>
            <div className="flex gap-3 text-blue-600 text-2xl">
              <Link href="https://www.facebook.com/addressguru.in/">
                <FaFacebookF />
              </Link>
              <Link href="https://instagram.com/addressguru?igshid=YmM0MjE2YWMzOA==">
                <FaInstagram />
              </Link>
              <Link href="https://www.addressguru.in/tulips-ielts-academy-dehradun?">
                <FaXTwitter />
              </Link>
              <Link href="https://youtube.com/@AddressGuru">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
