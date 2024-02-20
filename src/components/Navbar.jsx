import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contacts from "../models/Contacts";

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
      <div className="flex justify-between p-3 md:px-5 bg-PrimaryColor text-ExtraDarkColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="flex items-center cursor-pointer">
          <Link to="/">
            <h1 className="text-2xl font-semibold">WellnessCenter</h1>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-4 text-lg font-medium">
          <Link
            to="/"
            className="nav-link hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/beautytv"
            className="nav-link hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Beauty<span className="text-brightColor">TV</span>
          </Link>
          <Link
            to="/testimonials"
            className="nav-link hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Testimonials
          </Link>
          <Link
            to="/services"
            className="nav-link hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/aboutus"
            className="nav-link hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
        </nav>

        <div className="hidden lg:flex">
          <Button
            className="nav-btn bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={openForm}
          >
            Contact Us
          </Button>
        </div>

        {showForm && <Contacts closeForm={closeForm} />}

        <div className="lg:hidden flex items-center">
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
        } lg:hidden flex flex-col absolute bg-backgroundColor text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-4 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="/"
          className="nav-link hover:text-hoverColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/beautytv"
          className="nav-link hover:text-hoverColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Beauty<span className="text-brightColor">TV</span>
        </Link>
        <Link
          to="/testimonials"
          className="nav-link hover:text-hoverColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Testimonials
        </Link>
        <Link
          to="/services"
          className="nav-link hover:text-hoverColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link to="/aboutus" className="nav-link" onClick={closeMenu}>
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
