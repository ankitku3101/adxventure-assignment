'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaComment, FaEye, FaShareAlt, FaTelegramPlane, FaFacebookF, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaGlobe, FaHandPointRight } from 'react-icons/fa';
import { FaLocationDot, FaRegEye, FaSquareXmark, FaStar as FaStarSolid } from "react-icons/fa6";
import { FaRegStar as FaStarRegular } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import ReCAPTCHA from 'react-google-recaptcha';

interface AcademyCardProps {
  name: string;
  location: string;
  fullAddress: string;
  mapUrl: string;
  rating: number;
  reviewCount: number;
  phoneNumber: string;
  views: number;
  isVerified?: boolean;
  type?: string;
  shareUrl?: string;
  siteKey?: string;
  className?: string;
}

const AcademyCard: React.FC<AcademyCardProps> = ({
  name,
  location,
  fullAddress,
  mapUrl,
  rating,
  reviewCount,
  phoneNumber,
  views,
  isVerified = false,
  type = "Coaching Institute",
  shareUrl = "",
  siteKey = process.env.NEXT_PUBLIC_SITE_KEY,
  className = ""
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");

  const reportReasons = [
    "Illegal/Fraudulent",
    "Spam Ad",
    "Duplicate Ad",
    "Ad is in the wrong category",
    "Against Posting Rules",
    "Adult Content",
    "Other than above",
  ];

  const handleStarClick = (starIndex: number) => {
    setSelectedRating(starIndex + 1);
  };

  return (
    <>
      <div className={`lg:hidden w-full ${className}`}>
        <div className="pb-1">
          <h2 className="text-base font-bold text-gray-900 mb-1">
            {name}
          </h2>
          <div className="flex items-center text-xs gap-1 text-gray-600 mb-2">
            <FaLocationDot />
            <span className="flex-1">{fullAddress}</span>
            <Link
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-xs underline ml-2 whitespace-nowrap"
            >
              View More
            </Link>
          </div>
        </div>

        <div className="pb-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-bold">{type}</span>
            {isVerified && (
              <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                <MdVerified className='text-green-600' size={18}/>  
                <span className="text-xs font-medium">AGVerified</span>
              </div>
            )}
          </div>
        </div>

        <div className="pb-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="bg-green-700 text-white text-lg px-2 rounded font-bold flex items-center gap-1">
                  {rating.toFixed(1)}
                  <FaStarSolid className="text-white text-lg" />
                </span>
              </div>
              <span className="text-orange-500 text-sm">({" "}{reviewCount} Review{reviewCount !== 1 ? 's' : ''}{" "})</span>
            </div>
            <button 
              onClick={() => setShowReviewModal(true)}
              className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-lg hover:bg-blue-700 flex gap-1 items-center"
            >
              <FaStarSolid className='text-yellow-400' />
              View Reviews
            </button>
          </div>
        </div>

        <div className="pb-1">
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <span>{location}</span>
          </div>
        </div>

        <div className="pb-3">
          <div className="flex items-center gap-2">
            <FaRegEye />
            <span>Views: {views}</span>
          </div>
        </div>

        <div className="pb-1">
          <div className="flex justify-between gap-2">
            <a href="tel:7055859684">
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded flex flex-row items-center justify-center gap-1 font-medium px-2 py-1">
                <FaPhoneAlt className="text-sm" />
                <span className="text-sm">Call</span>
              </button>
            </a>
            <button
              onClick={() => window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}`, '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white rounded flex flex-row items-center justify-center gap-1 font-medium px-2 py-1"
            >
              <FaWhatsapp className="text-sm" />
              <span className="text-sm">WhatsApp</span>
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-700 hover:bg-green-800 text-white rounded flex flex-row items-center justify-center gap-1 font-medium px-2 py-1"
            >
              <FaComment className="text-sm" />
              <span className="text-sm">Enquiry</span>
            </button>
            <Link
              href={'https://tulipsacademyofenglishlanguage.justdial.com/?utm_source=AddressGuru_India&utm_medium=AddressGuru&utm_campaign=AddressGuru_Listing'}
              className="border border-gray-600 rounded py-1 px-2 text-gray-600"
            >
              <FaGlobe />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex justify-between text-xs">
        <button
            onClick={() => setShowReportModal(true)}
            className="flex items-center text-red-600 gap-1 cursor-pointer"
          >
            <FaSquareXmark />
            Report
        </button>
        <button
          onClick={() => setShowClaimModal(true)} 
          className="flex items-center text-blue-700 gap-1 cursor-pointer"
        >
          <FaHandPointRight />
          Claim this business
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-full max-w-sm relative">
            <div className="flex items-center justify-between py-2 px-4">
              <h2 className="font-bold text-black">
                Enquire: <span className="text-orange-400">{name}</span>
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
              <div className="space-y-3 flex flex-col items-center">
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

                {siteKey && (
                  <ReCAPTCHA sitekey={siteKey} className="py-2"/>
                )}

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Enquiry submitted');
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-2 rounded cursor-pointer"
                >
                  Send Enquiry
                </button>
              </div>
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
              <Link href={`whatsapp://send?text=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 p-2 rounded text-white hover:bg-green-600">
                <FaWhatsapp size={20} />
              </Link>
              <Link href={`tg://msg_url?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded text-white hover:bg-sky-600">
                <FaTelegramPlane size={20} />
              </Link>
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded text-white hover:bg-blue-700">
                <FaFacebookF size={20} />
              </Link>
              <Link href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${encodeURIComponent(name)}`} target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-2 rounded text-white hover:bg-blue-800">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href={`https://twitter.com/share?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="bg-black p-2 rounded text-white hover:bg-gray-800">
                <FaTwitter size={20} />
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
              Review: {name}
            </h2>

            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleStarClick(i)}
                  className="focus:outline-none"
                >
                  {i < selectedRating ? (
                    <FaStarSolid className="w-8 h-8 text-yellow-500 transition-transform duration-300 hover:scale-125 cursor-pointer" />
                  ) : (
                    <FaStarRegular className="w-8 h-8 text-gray-300 transition-transform duration-300 hover:scale-125 cursor-pointer hover:text-yellow-500" />
                  )}
                </button>
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
              <FaStarSolid className="text-white" />
              Rate Now
            </button>
          </div>
        </div>
      )}

      {showReportModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowReportModal(false)}
          />
          <div className="relative bg-white rounded-lg w-[90%] max-w-sm p-3 shadow-lg z-10">
            <button
              onClick={() => setShowReportModal(false)}
              className="absolute top-3 right-3"
            >
              <IoMdClose
                className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
                size={28}
              />
            </button>
            <h2 className="text-xl font-semibold">Report</h2>
            <p className="mb-2 text-center font-semibold">Tulips IELTS Academy - dehradun</p>
            <form className="space-y-1">
              {reportReasons.map((reason) => (
                <label key={reason} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="reportReason"
                    value={reason}
                    onChange={(e) => setSelectedReason(e.target.value)}
                  />
                  {reason}
                </label>
              ))}
              {siteKey && (
                <ReCAPTCHA sitekey={siteKey} className="py-2"/>
              )}
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded font-bold mt-3"
              >
                Report
              </button>
            </form>
          </div>
        </div>
      )}

      {showClaimModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowClaimModal(false)}
          />
          <div className="relative bg-white rounded-lg w-[90%] max-w-sm p-3 shadow-lg z-10">
            <button
              onClick={() => setShowClaimModal(false)}
              className="absolute top-3 right-3"
            >
              <IoMdClose
                className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
                size={28}
              />
            </button>

            <h2 className="text-xl font-semibold mb-1">Claim Ownership</h2>
            <p className="mb-2 text-center font-bold text-gray-700">
              Tulips IELTS Academy - dehradun
            </p>

            <form className="space-y-3">
              <label className="text-gray-700 text-sm">Full Name *</label>
              <input
                type="text"
                placeholder="Full Name.."
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <label className="text-gray-700 text-sm">Email *</label>
              <input
                type="email"
                placeholder="example@example.com"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <label className="text-gray-700 text-sm">Mobile Number *</label>
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <label className="text-gray-700 text-sm">Reason for ownership claim *</label>
              <textarea
                placeholder="Type here..."
                required
                rows={3}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>

              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input type="checkbox" required />
                By Claiming I agree to terms & conditions.
              </label>

              {siteKey && (
                <ReCAPTCHA sitekey={siteKey} className="py-2"/>
              )}

              <button
                type="submit"
                className="bg-green-600/60 hover:bg-green-600 text-white w-full py-2 rounded font-semibold mt-2 cursor-pointer"
              >
                Claim Business
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AcademyCard