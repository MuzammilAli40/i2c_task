import React, { useState } from "react";
import i2c_logo from "../../src/assets/i2c-logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="app-container flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#">
          <img src={i2c_logo} alt="I2C Logo" />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-normal flex flex-col items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="about"
                className="block py-2 px-3 text-gray-900 bg-transparent md:p-0"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="registration"
                className="block py-2 px-3 text-gray-900 bg-transparent md:p-0"
              >
                Registration
              </a>
            </li>
            <li>
              <a
                href="careers"
                className="block py-2 px-3 text-gray-900 bg-transparent md:p-0"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="contact-us"
                className="block py-2 px-6 text-white bg-customeOrange shadow-2xl shadow-customeOrange rounded-full font-semibold transition-colors duration-300"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
