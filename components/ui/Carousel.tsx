"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const images = [
  { src: "/assets/tulips-lg.png", alt: "Tulips IELTS Academy 1" },
  { src: "/assets/tulips-lg2.png", alt: "Tulips IELTS Academy 2" },
  { src: "/assets/tulips-lg3.png", alt: "Tulips IELTS Academy 3" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-[54rem] h-[30rem] overflow-hidden rounded">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="relative flex-shrink-0 w-full h-[30rem]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-fit"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white cursor-pointer"
      >
        <FaChevronLeft size={48} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white cursor-pointer"
      >
        <FaChevronRight size={48} />
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
    </div>
  );
}
