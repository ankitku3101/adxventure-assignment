"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaChevronLeft, FaChevronRight, FaShare, FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

const images = [
  { src: "/assets/tulips-lg.png", alt: "Tulips IELTS Academy 1" },
  { src: "/assets/tulips-lg2.png", alt: "Tulips IELTS Academy 2" },
  { src: "/assets/tulips-lg3.png", alt: "Tulips IELTS Academy 3" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50; 

    if (deltaX > swipeThreshold) {
      nextSlide();
    } else if (deltaX < -swipeThreshold) {
      prevSlide();
    }
  };

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth < 1024) return true;
        return false;
        };

        if (handleResize()) {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
        }
    }, [current]);

  return (
    <div className="relative w-full sm:w-[90%] md:w-[54rem] h-52 md:h-60 lg:h-[30rem] overflow-hidden rounded">
        <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {images.map((img, idx) => (
            <div key={idx} className="relative flex-shrink-0 w-full h-52 md:h-60 lg:h-[30rem]">
                <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={idx === 0}
                />
            </div>
            ))}
        </div>

      <button
        onClick={prevSlide}
        className="hidden lg:block absolute top-1/2 left-2 -translate-y-1/2 text-white cursor-pointer"
      >
        <FaChevronLeft size={48} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden lg:block absolute top-1/2 right-2 -translate-y-1/2 text-white cursor-pointer"
      >
        <FaChevronRight size={48} />
      </button>

      <button
        onClick={() => setShowShareModal(true)}
        className="block lg:hidden absolute top-0.5 right-0.5 bg-white p-2 text-black rounded"
      >
        <FaShare size={16} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={cn(
              "w-6 h-1 rounded-full transition-colors duration-300",
              current === idx ? "bg-orange-500" : "bg-white"
            )}
          />
        ))}
      </div>

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
    </div>
  );
}
