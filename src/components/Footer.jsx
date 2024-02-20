import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-PrimaryColor text-ExtraDarkColor rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">WellnessCenter</h1>
          <p className="text-sm">
            Our team of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology, dermatology,
            and more.
          </p>
          <div className="flex gap-5 ml-3 mt-1">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube
                size={30}
                className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill
                size={30}
                className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok
                size={30}
                className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="/aboutus"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Services
            </Link>
            <Link
              to="/beautytv"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Beauty<span className="text-brightColor">TV</span>
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="/services"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Lab Test
            </Link>
            <Link
              to="/services"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Health Check
            </Link>
            <Link
              to="/services"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Heart Check
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <span>123 Street,Tirana, Albania</span>
            <span>support@care.com</span>
            <span>+123-456-7890</span>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @Copyright developed by
          <span className=" text-hoverColor"> Elton Developer</span> | All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
