"use client";
import { useState, useRef, useEffect } from "react";
import { FaCaretDown, FaCaretUp, FaSearch } from "react-icons/fa";

export default function DropdownSearch() {
  const cities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Bangomunda",
    "Bangra Manjeshwar",
    "Bangramanjeshwar",
    "Bangsidharpur",
    "Bangura",
    "Bangursinga",
    "Banguwan Kalan",
    "Bani",
    "Baniara",
    "Baniban",
    "Baniban Jagadishpur",
    "Banihal",
    "Banjar",
    "Banjarepur",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="flex shadow-sm relative">
      <div className="relative w-84">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-between text-sm w-full px-2 py-2 border border-r-0 rounded rounded-r-none border-gray-300 bg-white cursor-pointer"
        >
          <span>{selected || "Choose City"}</span>
          {isOpen ? (
            <FaCaretUp size={13} className="text-gray-500" />
          ) : (
            <FaCaretDown size={13} className="text-gray-500" />
          )}
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md rounded-t-none shadow-lg">
            <div className="flex items-center px-2 py-2 border-b">
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-sm w-full outline-none"
              />
            </div>

            <div className="max-h-50 overflow-y-auto">
              {filteredCities.map((city) => (
                <div
                  key={city}
                  onClick={() => {
                    setSelected(city);
                    setIsOpen(false);
                  }}
                  className="px-2 py-2 text-sm hover:bg-blue-400 hover:text-white cursor-pointer"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <input
        type="text"
        placeholder="Search"
        className="text-sm border flex-1 border-r-0 px-2 w-52 border-gray-300 outline-blue-300"
      />

      <button className="px-3 py-2 hover:bg-green-700 text-green-700 hover:text-slate-100 border border-green-700 rounded-md rounded-l-none cursor-pointer">
        <FaSearch size={18}/>
      </button>
    </div>
  );
}
