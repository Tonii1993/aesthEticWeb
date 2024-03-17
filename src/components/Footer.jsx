import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="flex flex-col space-y-10 justify-center m-2">
      <nav className="flex flex-col items-center lg:flex-row justify-center lg:gap-6 bg-black font-semibold text-base font-serif lg:px-4 lg:py-1 lg:mx-2 lg:box-border text-PrimaryColor sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:py-2">
        <Link
          to="/"
          className="hover:scale-105 cursor-pointer hover:text-ExtraDarkColor transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/beautytv"
          className="hover:scale-105 cursor-pointer hover:text-ExtraDarkColor transition duration-300 ease-in-out"
        >
          Beauty<span className="text-brightColor">TV</span>
        </Link>
        <Link
          to="/aboutus"
          className="hover:scale-105 cursor-pointer hover:text-ExtraDarkColor transition duration-300 ease-in-out"
        >
          About
        </Link>
        <Link
          to="/services"
          className="hover:scale-105 cursor-pointer hover:text-ExtraDarkColor transition duration-300 ease-in-out"
        >
          Services
        </Link>
        <Link
          to="/findus"
          className="hover:scale-105 cursor-pointer hover:text-ExtraDarkColor transition duration-300 ease-in-out"
        >
          Find Us
        </Link>
        <Link
          to="/faqs"
          className="hover:scale-105 cursor-pointer hover:text-ExtraDarkColor transition duration-300 ease-in-out"
        >
          FAQS
        </Link>
      </nav>

      <div className="flex justify-center space-x-4">
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
      <div>
        <p className="text-sm text-center py-4">
          @Copyright developed by
          <span className=" text-hoverColor"> Elton Developer</span> | All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
