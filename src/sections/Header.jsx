import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/outline";
import classNames from "classnames";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [isScrolled, setIsScrolled] = useState(false); // For scroll animation

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll event to add or remove header shrinking effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        "sticky top-0 z-50 transition-all duration-300 bg-white shadow-md",
        { "py-2 shadow-lg": isScrolled, "py-4": !isScrolled }
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-800">
          <a href="/" className="hover:text-indigo-600">BrandName</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-gray-600 hover:text-indigo-600 transition">Home</a>
          <a href="#about" className="text-gray-600 hover:text-indigo-600 transition">About</a>
          <a href="#services" className="text-gray-600 hover:text-indigo-600 transition">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
        </nav>

        {/* Desktop User Icon */}
        <div className="hidden md:flex items-center space-x-4">
          <SearchIcon className="h-6 w-6 text-gray-600 hover:text-indigo-600 cursor-pointer" />
          <UserCircleIcon className="h-8 w-8 text-gray-600 hover:text-indigo-600 cursor-pointer" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <nav className="flex flex-col items-start space-y-4 px-6 py-4">
            <a href="#home" className="text-gray-800 hover:text-indigo-600 transition" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-indigo-600 transition" onClick={toggleMenu}>
              About
            </a>
            <a href="#services" className="text-gray-800 hover:text-indigo-600 transition" onClick={toggleMenu}>
              Services
            </a>
            <a href="#contact" className="text-gray-800 hover:text-indigo-600 transition" onClick={toggleMenu}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
