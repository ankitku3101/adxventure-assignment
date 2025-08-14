'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaPhoneAlt, FaShareAlt, FaTelegramPlane } from "react-icons/fa";
import { FaComment, FaStar as FaStarSolid, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaXTwitter  } from "react-icons/fa6";
import { FaRegStar as FaStarRegular } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import ReCAPTCHA from "react-google-recaptcha";

function Hero() {
  const [showNumber, setShowNumber] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const sitekey = process.env.NEXT_PUBLIC_SITE_KEY as string

  return (
    <div className="container">
      <div className="flex gap-1 text-[13px] m-2 w-full whitespace-nowrap overflow-x-auto">
        <Link href="#" className="underline text-blue-500">Home</Link> /
        <Link href="#" className="underline text-blue-500">Coaching Institute</Link> /
        <p className="text-slate-600">Tulips IELTS Academy - dehradun</p>
      </div>

      <div className="h-screen bg-gray-50 hidden lg:flex">
        <div className="flex items-start space-x-4 bg-white shadow-md rounded-lg p-3 min-w-full">
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
              <button
                onClick={() => setShowModal(true)}
                className="bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-1 cursor-pointer rounded flex items-center gap-1 font-bold"
              >
                <FaComment />
                Enquire Now
              </button>
              <button
                onClick={() => setShowShareModal(true)}
                className="border hover:bg-black hover:text-white text-gray-700 text-sm px-4 py-1 cursor-pointer rounded flex items-center gap-1"
              >
                <FaShareAlt />
                Share
              </button>
              <button
                onClick={() => setShowReviewModal(true)}
                className="border border-blue-400 hover:bg-gray-200 text-blue-400 text-sm px-4 py-1 cursor-pointer rounded flex items-center gap-1"
              >
                <FaStarSolid className="text-yellow-500" />
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-full max-w-sm relative">
            <div className="flex items-center justify-between py-2 px-4">
              <h2 className="font-bold text-black">
                Enquire: <span className="text-orange-400">Tulips IELTS Academy - dehradun</span>
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-2xl font-bold text-gray-500 hover:text-gray-700"
              >
                <IoMdClose
                  className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
                  size={28}
                />
              </button>
            </div>

            <div className="p-4 border-t border-gray-300">
              <form className="space-y-3 flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 w-full p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 w-full p-2 rounded"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="border border-gray-300 w-full p-2 rounded"
                />
                <textarea
                  placeholder="Type your message..."
                  rows={3}
                  className="border border-gray-300 w-full p-2 rounded"
                ></textarea>

                <ReCAPTCHA
                  sitekey={sitekey}
                  onChange={handleCaptchaChange}
                />

                <button
                  type="submit"
                  disabled={!captchaValue}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-2 rounded disabled:bg-gray-400 cursor-pointer"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {showShareModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-72 relative">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-2 right-2 text-blue-500 hover:text-blue-700 text-lg"
            >
              <IoMdClose
                className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
                size={28}
              />
            </button>

            <h2 className="text-center font-bold mb-4">Share on</h2>

            <div className="flex justify-center gap-3">
              <Link href={"whatsapp://send?text=https://www.addressguru.in/tulips-ielts-academy-dehradun"} target="_blank" rel="noopener noreferrer" className="bg-green-500 p-2 rounded text-white">
                <FaWhatsapp size={20} />
              </Link>
              <Link href={"tg://msg_url?url=https://www.addressguru.in/tulips-ielts-academy-dehradun"} target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded text-white">
                <FaTelegramPlane size={20} />
              </Link>
              <Link href={"https://www.facebook.com/sharer/sharer.php?u=https://www.addressguru.in/tulips-ielts-academy-dehradun"} target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded text-white">
                <FaFacebookF size={20} />
              </Link>
              <Link href={"https://www.linkedin.com/shareArticle?url=https://www.addressguru.in/tulips-ielts-academy-dehradun&title=Tulips%20IELTS%20Academy%20%20-%20dehradun"} target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-2 rounded text-white">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href={"https://twitter.com/share?url=https://www.addressguru.in/tulips-ielts-academy-dehradun"} target="_blank" rel="noopener noreferrer" className="bg-black p-2 rounded text-white">
                <FaXTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {showReviewModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-96 relative">
            
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
            >
              <IoMdClose
                className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
                size={28}
              />
            </button>

            <h2 className="font-semibold text-xl mb-4">
              Review: Tulips IELTS Academy - dehradun
            </h2>

            <div className="flex justify-center gap-6 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStarRegular
                  key={i}
                  className="w-10 h-10  transition-transform duration-500 hover:-rotate-[30deg] hover:scale-125 cursor-pointer"
                />
              ))}
            </div>


            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 w-full p-2 rounded mb-2"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="border border-gray-300 w-full p-2 rounded mb-2"
            />
            <textarea
              placeholder="Type here"
              rows={3}
              className="border border-gray-300 w-full p-2 rounded mb-4"
            ></textarea>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-2 rounded flex items-center justify-center gap-2 cursor-pointer">
              <FaStarSolid className="text-white animate-spin" />
              Rate Now
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Hero;
