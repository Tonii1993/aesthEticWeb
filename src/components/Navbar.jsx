import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contacts from "../models/Contacts";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-20">
      <div className="flex lg:flex-row justify-between p-3 md:px-5 bg-PrimaryColor text-ExtraDarkColor shadow-md">
        <div className="flex items-center mb-2 lg:mb-0 ">
          <Link to="/">
            <h1 className="text-2xl font-serif font-bold">WellnessCenter</h1>
          </Link>
        </div>

        <div className="hidden xl:flex items-center justify-center">
          <div className="lg:bg-black lg:px-4 lg:py-1 lg:mx-2 lg:box-border">
            <ul className="xl:flex items-center space-x-4 text-base font-serif font-bold text-PrimaryColor">
              <li>
                <Link
                  to="/"
                  className="nav-link hover:text-ExtraDarkColor transition-all cursor-pointer"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/beautytv"
                  className="nav-link  hover:text-ExtraDarkColor transition-all cursor-pointer"
                  onClick={closeMenu}
                >
                  Beauty<span className="text-brightColor">TV</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="nav-link hover:text-ExtraDarkColor transition-all cursor-pointer"
                  onClick={closeMenu}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/beautyconfidential"
                  className="nav-link hover:text-ExtraDarkColor transition-all cursor-pointer"
                  onClick={closeMenu}
                >
                  Beauty Confidential
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="nav-link  hover:text-ExtraDarkColor transition-all cursor-pointer"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="nav-link  hover:text-ExtraDarkColor transition-all cursor-pointer"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <NavDropdown
                className="hover:text-ExtraDarkColor transition-all cursor-pointer"
                title="Languages"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">IT</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">FR</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">AL</NavDropdown.Item>
              </NavDropdown>
            </ul>
          </div>
        </div>

        <div className="hidden xl:flex">
          <Button
            className="lg:ml-2 bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={openForm}
          >
            Book Now
          </Button>
        </div>

        {showForm && <Contacts closeForm={closeForm} />}

        <div className="xl:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={28} onClick={handleChange} />
          ) : (
            <AiOutlineMenu size={28} onClick={handleChange} />
          )}
        </div>
      </div>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-[#2d3142] text-PrimaryColor left-0 top-16 font-serif font-semibold text-2xl text-center pt-8 pb-4 gap-4 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="/"
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/beautytv"
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Beauty<span className="text-brightColor">TV</span>
        </Link>
        <Link
          to="/testimonials"
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Testimonials
        </Link>
        <Link
          to="/beautyconfidential"
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Beauty Confidential
        </Link>
        <Link
          to="/services"
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link
          to="/aboutus"
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          About Us
        </Link>

        <div className="lg:hidden">
          <Button
            className="nav-btn bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={openForm}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
