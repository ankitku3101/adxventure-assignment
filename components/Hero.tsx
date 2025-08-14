'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaPhoneAlt, FaShareAlt } from "react-icons/fa";
import { FaComment, FaStar as FaStarSolid } from "react-icons/fa6";
import { FaRegStar as FaStarRegular } from "react-icons/fa6";

function Hero() {

  const [showNumber, setShowNumber] = useState(false);

  return (
    <div className="container">
      <div className="flex gap-1 text-[13px] m-2 w-full whitespace-nowrap overflow-x-auto">
        <Link href="#" className="underline text-blue-500">Home</Link> /
        <Link href="#" className="underline text-blue-500">Coaching Institute</Link> /
        <p className="text-slate-600">Tulips IELTS Academy - dehradun</p>
      </div>

      <div className="h-screen bg-gray-50 hidden lg:flex">
        <div className="flex items-start space-x-4 bg-white shadow-md rounded-lg p-3 max-w-3xl min-w-full">
          <div className="flex-shrink-0 w-44 h-28 overflow-hidden border border-gray-300 p-1 rounded">
            <Image
              src={"/assets/tulips-sm.jpg"} 
              alt="Tulips IELTS Academy"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">
              Tulips IELTS Academy - dehradun
            </h2>

            <div className="flex items-center space-x-2 mt-1">
              <span className="bg-green-700 text-white text-xs px-2 py-0.5 rounded">
                4.0
              </span>
              <div className="flex text-orange-500 gap-1 text-[13px]">
                <FaStarSolid />
                <FaStarSolid />
                <FaStarSolid />
                <FaStarSolid />
                <FaStarRegular />
              </div>
              <span className="text-gray-600 text-sm">(1 Review)</span>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              Police Headquarters and Uttaraknand Secretari ...
              <Link
                href="https://www.google.com/maps?daddr=Tulips+IELTS+Academy++-+dehradun+Dehradun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                view map
              </Link>
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => setShowNumber(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm w-38 px-4 py-1 cursor-pointer rounded flex items-center justify-center gap-1 font-bold"
              >
                <FaPhoneAlt />
                {showNumber ? "7055859684" : "Show Number"}
              </button>
              <button className="bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-1 cursor-pointer rounded flex items-center gap-1 font-bold">
                <FaComment />
                Enquire Now
              </button>
              <button className="border hover:bg-black hover:text-white text-gray-700 text-sm px-4 py-1 cursor-pointer rounded flex items-center gap-1">
                <FaShareAlt />
                Share
              </button>
              <button className="border border-blue-400 hover:bg-gray-200 text-blue-400 hover:text-white text-sm px-4 py-1 cursor-pointer rounded flex items-center gap-1">
                <FaStarSolid className="text-yellow-500"/>
                <p>Write a Review</p>
              </button>
              <button className="border border-gray-300 text-gray-600 text-sm px-4 py-1 cursor-pointer rounded flex items-center space-x-1">
                <FaEye />
                <span>665</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
