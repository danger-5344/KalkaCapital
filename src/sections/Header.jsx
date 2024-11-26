import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Open and close dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolling
          ? 'bg-white shadow-md backdrop-blur-lg'
          : 'bg-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="text-2xl font-bold text-red-600">KalkaCapital</div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
            >
              About
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-colors text-gray-800 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-1 py-2 rounded-md"
                onClick={toggleDropdown}
              >
                <span>Services</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transform transition-transform ${
                    dropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-48">
                  <a
                    href="#service1"
                    className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
                  >
                    Service 1
                  </a>
                  <a
                    href="#service2"
                    className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
                  >
                    Service 2
                  </a>
                  <a
                    href="#service3"
                    className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
                  >
                    Service 3
                  </a>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-lg py-4 px-6">
          <a
            href="#home"
            className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
          >
            About
          </a>
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-colors text-gray-800 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
              onClick={toggleDropdown}
            >
              <span>Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transform transition-transform ${
                  dropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="bg-white shadow-md rounded-lg py-2 px-4">
                <a
                  href="#service1"
                  className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
                >
                  Service 1
                </a>
                <a
                  href="#service2"
                  className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
                >
                  Service 2
                </a>
                <a
                  href="#service3"
                  className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
                >
                  Service 3
                </a>
              </div>
            )}
          </div>
          <a
            href="#contact"
            className="block text-gray-800 hover:text-red-600 hover:bg-gray-100 font-medium transition transform hover:scale-105 px-4 py-2 rounded-md"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
