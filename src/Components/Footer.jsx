import React from "react";
import i2cLogo from "../assets/i2c-logo.png";
const Footer = () => {
  return (
    <footer className="app-container bg-transparent py-10">
      <hr className="bg-gray-300 h-[2px] rounded-md mb-5" />
      <div className="px-6 md:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={i2cLogo} alt="i2C Logo" className="h-8 w-auto mr-2" />
          </div>
          <nav className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
            <a
              href="/faqs"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              FAQs
            </a>
            <a
              href="/privacy-policy"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </a>
            <a
              href="/other"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Other
            </a>
            <a
              href="/contact"
              className="py-2 px-6 text-white bg-customeOrange shadow-2xl shadow-customeOrange rounded-full font-semibold transition-colors duration-300"
            >
              Contact us
            </a>
          </nav>
        </div>
      </div>
      <div className="text-center sm:text-right mt-7 text-xs text-secondaryColor">
        Copyright © 2024 2c inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
