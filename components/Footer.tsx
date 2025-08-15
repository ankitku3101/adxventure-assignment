import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadphones,
  FaGooglePlay,
  FaSearch,
  FaInfo,
} from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaX, FaXTwitter } from "react-icons/fa6";
import { MdInfoOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white p-10">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-8 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-[25%] p-4 flex flex-col">
          <div className="flex items-center justify-center mb-2">
            <Image src={'/assets/logo.png'} alt="logo" width={200} height={200} />
          </div>
          <p className="text-sm text-gray-700 mb-4">
            Address Guru Is Online Local Business Directory That Provide
            Information About Your Daily Needs Just One Click Away. We Get Your
            Business Listed On It And Grow Online By Reaching Everyone Who
            Search You Online.
          </p>
          <div className="flex flex-wrap">
            <a href="#" className="border p-2"><FaFacebookF /></a>
            <a href="#" className="border p-2"><FaYoutube /></a>
            <a href="#" className="border p-2"><FaLinkedinIn /></a>
            <a href="#" className="border p-2"><FaXTwitter /></a>
            <a href="#" className="border p-2"><FaInstagram /></a>
          </div>
        </div>

        <div className="w-full lg:w-[18%] p-4 flex flex-col">
          <div className="flex items-center mb-4">
            <FaInfo className="mr-2" />
            <h3 className="text-xl">Important Links</h3>
          </div>
          <ul className="space-y-1">
            <li><a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FaChevronRight className="text-gray-700"/>About Us</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FaChevronRight className="text-gray-700"/>Contact Us</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FaChevronRight className="text-gray-700"/>Become a Partner</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FaChevronRight className="text-gray-700"/>Posting Rules</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FaChevronRight className="text-gray-700"/>Marketplace</a></li>
          </ul>
        </div>

        <div className="w-full lg:w-[18%] p-4 flex flex-col">
          <div className="flex items-center mb-4">
            <FaSearch className="mr-2" />
            <h3 className="text-xl">Quick Links</h3>
          </div>
          <ul className="space-y-1">
            <li><a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FaChevronRight className="text-gray-700"/>Post Ad</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FaChevronRight className="text-gray-700"/>Our Plans</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FaChevronRight className="text-gray-700"/>Infringement Policy</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FaChevronRight className="text-gray-700"/>Privacy Policy</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FaChevronRight className="text-gray-700"/>Click here to open the app</a></li>
          </ul>
        </div>

        <div className="w-full lg:w-[20%] p-4 flex flex-col">
          <h3 className="font-semibold mb-2 text-2xl">Download our app here..</h3>
          <Image
            src={"/assets/gg.jpg"}
            alt="Get it on Google Play"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start pt-6">
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="font-bold">Contact by Phone</h3>
          <div className="flex items-center mb-2 gap-4">
            <FaPhoneAlt className="m-2" size={30}/>
            <div className="flex flex-col">
              <p className="font-semibold text-blue-500 text-sm">xx-xxxx-xxxx</p>
              <p className="text-xs text-gray-500">Booking time: 0800 - 2000 hrs</p>
            </div>
          </div>
        </div>

        <div className="flex-1 mb-6 md:mb-0">
            <h3 className="font-bold">Give your Feedback</h3>
            <div className="flex items-center mb-2 gap-4">
              <FaEnvelope className="m-2" size={30}/>
              <div className="flex flex-col">
                <p className="font-semibold text-blue-500 text-sm">contact@addressguru.in</p>
                <p className="text-xs text-gray-500">Help us improve</p>
              </div>  
            </div>
        </div>

        <div className="flex-1 mb-6 md:mb-0">
            <h3 className="font-bold">Services and Support</h3>
            <div className="flex items-center mb-2 gap-4">
              <FaHeadphones className="m-2" size={30}/>
              <div className="flex flex-col">
                <p className="font-semibold text-blue-500 text-sm">Support Centre</p>
                <p className="text-xs text-gray-500">29, Tagore Villa, Dehradun UK</p>
              </div>  
            </div>
        </div>
      

        <div className="flex-1">
          <h3 className="font-semibold mb-1">Our Partners</h3>
          <Image src={"/assets/adxventure_logo.png"} alt="partners" width={200} height={200} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-2">
        <div className="pt-4 mt-6 text-xs text-gray-500 w-[75%]">
          <p className="mb-2">
            Disclaimer: The information provided on AddressGuru is submitted by users and businesses and is for general informational purposes only. All trademarks, logos, and brand names mentioned belong to their respective owners. AddressGuru is not responsible for any losses, damages, or disputes arising from user interactions, including but not limited to financial transactions or service agreements.
          </p>
          <p className="mb-2">
            You are free to use our platform for commercial purposes but any other kind of use is strictly prohibited. We are free to ban any type of content or Ad which is not complying to our policies.
          </p>
          <p className="mb-2">
            Before posting anything or becoming a partner of Address Guru, read carefully all the posting policies.
          </p>
        </div>
        <Image src={"/assets/payment.png"} alt="payments" width={300} height={300} />
      </div>
    </footer>
  );
};

export default Footer;
