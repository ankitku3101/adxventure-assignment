'use client'

import Image from "next/image";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaSquareXmark, FaHandPointRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import AcademyCard from "./ui/AcademyCard";
import Carousel from "./ui/Carousel";

export default function MainSection() {
  const sitekey = process.env.NEXT_PUBLIC_SITE_KEY as string;
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

  return (
    <div className="container mx-auto p-4 lg:flex gap-6">
      
      <div className="lg:w-2/3 w-full space-y-6 h-full">
        
        <Carousel />

        <AcademyCard
          name="Tulips IELTS Academy - dehradun"
          location="Dehradun/Uttarakhand"
          fullAddress="Police Headquarters and Uttarakhand Secre..."
          mapUrl="https://www.google.com/maps?daddr=Tulips+IELTS+Academy++-+dehradun+Dehradun"
          rating={4.0}
          reviewCount={1}
          phoneNumber="7055859684"
          views={666}
          isVerified={true}
          shareUrl="https://www.addressguru.in/tulips-ielts-academy-dehradun"
          siteKey={process.env.NEXT_PUBLIC_SITE_KEY}
        />

        <section>
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Tulips Academy for Foreign Language is a committed English language preparing supplier in the core of Dehradun in Uttarakhand state, Northern India. We give a wide assortment of learner to cutting edge level English language projects to grown-ups and youngsters. Courses incorporate General Spoken English, IELTS, PTE and TOEFL planning programs, and concentrated courses for experts. The scope of our administrations, great quality and low charge structure has made us one of the quickest developing language communities in the area. Our customer base incorporates govt. officials, finance managers, experts, and understudies.
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-1">Courses</h2>
            <hr className="my-2 text-gray-300" />
            <p className="text-sm mb-2">
              Tulips IELTS Academy - dehradun provides the following courses:
            </p>
            <div className="grid lg:grid-cols-2 gap-y-1 text-sm">
              <p>✓ IELTS Coaching</p>
              <p>✓ PTE Coaching</p>
              <p>✓ TOEFL</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-1">Facilities</h2>
            <hr className="my-2 text-gray-300" />
            <p className="text-sm mb-2">
              Tulips IELTS Academy - dehradun provides the following facilities:
            </p>
            <div className="grid lg:grid-cols-2 gap-y-1 text-sm">
              <p>✓ Wifi</p>
              <p>✓ 24 Hr Electricity</p>
              <p>✓ Water Purifier</p>
              <p>✓ A/C Room Avilable</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-1">Payment Modes</h2>
            <hr className="my-2 text-gray-300" />
            <p className="text-sm mb-2">
              Tulips IELTS Academy - dehradun provides the following payment modes:
            </p>
            <div className="grid lg:grid-cols-2 gap-y-1 text-sm">
              <p>✓ Cash</p>
              <p>✓ Debit/Credit Card</p>
              <p>✓ Net Banking</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-y-1 gap-x-4">
            <div>
              <h2 className="text-xl font-bold mb-1">State</h2>
              <hr className="my-2 text-gray-300" />
              <p>Uttarakhand</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1">City</h2>
              <hr className="my-2 text-gray-300" />
              <p>Dehradun</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl lg:text-3xl font-bold mb-1">
            Overview - Tulips IELTS Academy - dehradun
          </h2>
          <hr className="my-3 text-gray-300" />
          <p className="text-gray-800 leading-relaxed mb-3">
            Tulips IELTS Academy - dehradun at Police Headquarters and Uttaraknand Secretariat, 
            5/10, Subhash Rd, near Uttaraknand, Irrigation Colony, Karanpur, Dehradun, Uttarakhand 248001 
            is a Coaching Institute in Dehradun. Their courses are :- IELTS Coaching PTE Coaching TOEFL . 
            Their facilities are :- Wifi 24 Hr Electricity Water Purifier A/C Room Avilable , 
            their acceptable payment mode is Cash Debit/Credit Card Net Banking
          </p>
          <p className="text-gray-800 mb-3">
            Scroll to the top for more details of Tulips IELTS Academy - dehradun
          </p>
          <p className="text-gray-800">
            Don't forget to tell, you found Tulips IELTS Academy - dehradun on 
            <span className="font-bold"> Address Guru</span>
          </p>
        </section>

      </div>

      <div className="lg:w-1/3 w-full space-y-6">
        
        <div className="hidden lg:flex flex-col ">
          <div className="bg-gray-200/60 p-7 rounded shadow">
            <h3 className="font-bold text-xl mb-2 border-b border-b-gray-300 pb-2">Quick Information</h3>
            <p className="border-b border-b-gray-300 pb-2 mb-2"><strong>Category:</strong> Coaching Institute</p>
            <button className="border border-gray-400 py-1 px-3 rounded-full text-xs text-gray-500 hover:bg-green-700 hover:text-white cursor-pointer">Visit Website</button>
          </div>
          <div className="flex justify-between text-xs m-1">
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
        </div>

        <div className="hidden lg:block w-full h-96 relative rounded overflow-hidden">
          <Image src="/assets/ad_dsom.jpg" alt="Ad Banner" fill className="object-fit" />
        </div>

        <div className="bg-cyan-50/60 p-4 rounded shadow hidden lg:block">
          <h3 className="font-semibold">Get More Information From</h3>
          <h3 className="font-semibold mb-3 text-xl">Tulips IELTS Academy - dehradun</h3>
          <form className="space-y-2 p-2 flex flex-col items-center">
            <input type="text" placeholder="Full Name" className="border border-gray-200 w-full p-2 rounded text-sm bg-gray-50" />
            <input type="email" placeholder="Email" className="border border-gray-200 w-full p-2 rounded text-sm bg-gray-50" />
            <input type="tel" placeholder="Mobile Number" className="border border-gray-200 w-full p-2 rounded text-sm bg-gray-50" />
            <textarea placeholder="Type your message..." rows={3} className="border border-gray-200 w-full p-2 rounded text-sm bg-gray-50"></textarea>
            <ReCAPTCHA sitekey={sitekey} className="py-2"/>
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded font-bold">
              Send Enquiry
            </button>
          </form>
        </div>

        <div className="hidden lg:block p-6 rounded shadow text-2xl">
          <h3 className="font-bold mb-2 border-b border-b-gray-300 pb-2">Useful Information</h3>
          <ul className="list-decimal text-base text-gray-700 px-6 mb-2">
            <li>Avoid any scams while paying in advance.</li>
            <li>Make payment via Western Union etc at your own risk.</li>
            <li>You can accept and make payments from outside the country at your own risk.</li>
            <li>Address Guru is not responsible for any transaction or payments, shipping guarantee, seller or buyer protections.</li>
            <li>All trademarks, logos, and brand names mentioned belong to their respective owners. AddressGuru is not responsible for any losses, damages, or disputes arising from user interactions, including but not limited to financial transactions or service agreements.</li>
          </ul>
        </div>
      </div>

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
              <ReCAPTCHA sitekey={sitekey} className="px-6 pt-3"/>
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

              <ReCAPTCHA sitekey={sitekey} className="pt-2 px-6" />

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

    </div>
  );
}
